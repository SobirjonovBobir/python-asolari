# -*- coding: utf-8 -*-
"""Mashq vazifalaridan javob spoilerini olib tashlaydi va namuna kod (solution) yozadi."""
import re


def _stdout_eq(ex):
    for c in ex.get("checks") or []:
        if c.get("type") == "stdout":
            return c.get("equals")
    return None


def _var_checks(ex):
    return [c for c in (ex.get("checks") or []) if c.get("type") == "var"]


def _expr_checks(ex):
    return [c for c in (ex.get("checks") or []) if c.get("type") == "expr"]


def _file_checks(ex):
    return [c for c in (ex.get("checks") or []) if c.get("type") == "file"]


def _contains_checks(ex):
    return [c for c in (ex.get("checks") or []) if c.get("type") == "code_contains"]


def clean_task(task, expected=None):
    """Savoldan '→ 5', '(2)', '— banana → 3' kabi ochiq javoblarni olib tashlaydi."""
    if not task:
        return task
    t = task
    # Oxiridagi → natija
    t = re.sub(r"\s*→\s*.+$", "", t, flags=re.DOTALL)
    # "— matn → natija" yoki "- matn → natija"
    t = re.sub(r"\s+[—\-]\s+[^.\n]*→[^.\n]*", "", t)
    # Oxiridagi qavs ichida faqat natija/hisob: (2), (5 → 25), (7+8=15), (3,9,4→9)
    def strip_paren(m):
        inner = m.group(1)
        if expected is not None:
            exp = str(expected).strip()
            if exp in inner or inner.replace(" ", "") == exp.replace("\n", "\\n"):
                return ""
            # hisob natijasi ochiq: 7+8=15, 5 → 25
            if re.search(r"[=→]", inner) and re.search(r"\d", inner):
                return ""
            # faqat son/True/False
            if re.fullmatch(r"-?\d+(\.\d+)?|True|False|None", inner.strip()):
                return ""
        else:
            if re.search(r"[=→]", inner) and re.search(r"\d", inner):
                return ""
            if re.fullmatch(r"-?\d+(\.\d+)?|True|False|None", inner.strip()):
                return ""
        return m.group(0)

    t = re.sub(r"\s*\(([^)]*)\)\s*\.?$", strip_paren, t)
    # Oradagi "→ True" qoldiqlari
    t = re.sub(r"\s*→\s*(True|False|-?\d+(\.\d+)?)\b", "", t)
    t = re.sub(r"[ \t]+\n", "\n", t)
    t = re.sub(r"\s{2,}", " ", t)
    return t.strip(" .;") + ("." if t.strip() and not t.strip().endswith((".", "?", "!")) else "")


def _py_str(v):
    return repr(v)


def _looks_like_python(code):
    """Kod compile bo‘ladimi va o‘zbek aralashmaganmi."""
    if not code or not str(code).strip():
        return False
    c = str(code).strip()
    if re.search(r"\b(bering|saqlang|chiqaring|keyin|alohida|orasida|bo‘lsa|bolsa)\b", c, re.I):
        return False
    if re.search(r"\bva\s+print\b", c) or re.search(r",\s*print\s*$", c):
        return False
    if re.search(r"(^|\n)\s*print\s*$", c):
        return False
    try:
        compile(c, "<sol>", "exec")
        return True
    except SyntaxError:
        return False


def _stmt_ok(stmt):
    s = stmt.strip()
    if re.match(r"^(print|import|from |if |for |while |def |with |try |class )\b", s):
        return True
    # assign (lekin == / != emas)
    if re.search(r"(?<![=!<>])=(?!=)", s):
        return True
    if re.search(r"\w+\s*\(.*\)", s):
        return True
    return False


def _semicolon_python(task):
    """'a=1; b=a; print(b) → ...' kabi nuqtali vergul bilan yozilgan kod."""
    if not task or ";" not in task:
        return None
    part = re.split(r"\s*→\s*", task)[0]
    part = re.split(r"\s+[—]\s+", part)[0]
    if re.search(r"\b(agar|bo‘lsa|bolsa|chiqaring|saqlang|bering)\b", part, re.I):
        return None
    stmts = [p.strip().rstrip(".") for p in part.split(";") if p.strip()]
    if len(stmts) < 2:
        return None
    if not all(_stmt_ok(s) for s in stmts):
        return None
    code = "\n".join(stmts)
    if "json." in code and "import json" not in code:
        code = "import json\n" + code
    if re.search(r"\b(randint|seed|random)\b", code) and "import" not in code:
        code = "from random import seed, randint\n" + code
    return code if _looks_like_python(code) else None


def _normalize_assign_print(task):
    """
    'x = 5, print(x)' / 'ism="Omar", ball=95.5 — chiqaring'
    kabi vazifalarni kodga aylantiradi (metod/if emas).
    """
    if not task:
        return None
    # metod chaqiriqlari yoki if — boshqa yo‘l
    if re.search(
        r"(\.startswith|\.endswith|\.upper|\.lower|\.strip|\.replace|\.find|"
        r"\.count|\.split|\.append|\.join|len\s*\(| if | else | elif |"
        r"==|!=|>=|<=|%2|agar|saqlang|bering|bo‘lsa)",
        task,
        re.I,
    ):
        return None
    part = re.split(r"\s*[—→]\s*", task)[0].strip()
    part = re.sub(r"\.\s*$", "", part)
    if not re.search(r"\w+\s*=", part):
        return None
    part = re.sub(r"\s*\([^)]*\)\s*", " ", part)
    part = re.sub(r"\s+va\s+", ", ", part)
    part = re.sub(r",?\s*print\s*\([^)]*\)\s*$", "", part)
    part = part.strip(" ,;")
    assigns = re.findall(
        r"(\w+)\s*=\s*(\"[^\"]*\"|'[^']*'|-?\d+(?:\.\d+)?|True|False|None|\w+)",
        part,
    )
    if not assigns:
        return None
    # "kun, oy, yil = 27, 10, 2026" unpack
    m = re.search(r"(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*=\s*([^—→]+)", task)
    if m:
        vals = [v.strip() for v in m.group(4).split(",")]
        if len(vals) >= 3:
            code = (
                f"{m.group(1)} = {vals[0]}\n{m.group(2)} = {vals[1]}\n{m.group(3)} = {vals[2]}\n"
                f"print({m.group(1)})\nprint({m.group(2)})\nprint({m.group(3)})"
            )
            return code if _looks_like_python(code) else None
    prints = re.findall(r"print\(([^)]+)\)", task)
    lines = [f"{n} = {v}" for n, v in assigns]
    # qayta berish: rang="qizil" keyin "ko'k"
    if "keyin" in task.lower() and len(assigns) == 1:
        m2 = re.search(
            r"(\w+)\s*=\s*(\"[^\"]*\"|'[^']*'|\d+)\s+keyin\s+(\"[^\"]*\"|'[^']*'|\d+)"
            r"(?:\s+keyin\s+(\"[^\"]*\"|'[^']*'|\d+))?",
            task,
            re.I,
        )
        if m2:
            name = m2.group(1)
            lines = [f"{name} = {m2.group(2)}", f"{name} = {m2.group(3)}"]
            if m2.group(4):
                lines.append(f"{name} = {m2.group(4)}")
            lines.append(f"print({name})")
            code = "\n".join(lines)
            return code if _looks_like_python(code) else None
    if prints:
        for p in prints:
            lines.append(f"print({p})")
    elif re.search(r"\bprint\b|chiqaring", task, re.I):
        for n, _ in assigns:
            lines.append(f"print({n})")
    else:
        return None
    code = "\n".join(lines)
    return code if _looks_like_python(code) else None


def _codeish_from_task(task):
    """Vazifa matnidan kodga o‘xshash qismni ajratadi (→ dan oldin)."""
    if not task:
        return None
    semi = _semicolon_python(task)
    if semi:
        return semi
    norm = _normalize_assign_print(task)
    if norm:
        return norm
    return None


def invent_solution(ex):
    if (ex.get("solution") or "").strip():
        sol0 = ex["solution"].strip()
        if _looks_like_python(sol0):
            return sol0

    hint = (ex.get("hint") or "").strip()
    if hint and _looks_like_python(hint):
        return hint

    task = ex.get("task") or ""
    title = (ex.get("title") or "").lower()
    stdin = ex.get("stdin") or ""
    setup = ex.get("setup") or ""
    exp = _stdout_eq(ex)

    # Maxsus / tipik — codeish dan oldin (noto‘g‘ri fragmentlarni oldini olish)
    special = _special_solution(ex, title, task, exp, stdin)
    if special:
        return special

    # Vazifadan kod
    extracted = _codeish_from_task(task)
    if extracted:
        return extracted

    vars_ = _var_checks(ex)
    if vars_:
        lines = [f"{c['name']} = {_py_str(c['equals'])}" for c in vars_]
        printed = "\n".join(str(c["equals"]) for c in vars_)
        # Faqat o‘zgaruvchi tekshiruvi — print(var) yetarli
        if exp is None:
            for c in vars_:
                lines.append(f"print({c['name']})")
            return "\n".join(lines)
        # stdout ham bor: print(var) kutgan chiqishga teng bo‘lsa — shu
        if printed.rstrip("\n") == str(exp).rstrip("\n"):
            for c in vars_:
                lines.append(f"print({c['name']})")
            return "\n".join(lines)
        # Aks holda — hisob/len/metod kerak (masalan s="Python", stdout 6)
        name = vars_[0]["name"]
        val = _py_str(vars_[0]["equals"])
        assigns = "\n".join(f"{c['name']} = {_py_str(c['equals'])}" for c in vars_)
        tl = task.lower()
        if "len" in tl:
            return f"{assigns}\nprint(len({name}))"
        if "sum" in tl or "yigindi" in tl:
            return f"{assigns}\nprint(sum({name}))"
        if "max" in tl and "[" in str(vars_[0]["equals"]):
            return f"{assigns}\nprint(max({name}))"
        if "min" in tl and "[" in str(vars_[0]["equals"]):
            return f"{assigns}\nprint(min({name}))"
        if re.search(r"\.count\(", tl):
            m = re.search(r"\.count\(([^)]+)\)", task)
            arg = m.group(1) if m else "'a'"
            return f"{assigns}\nprint({name}.count({arg}))"
        sol = _stdout_solution(ex, exp, title, task, stdin, setup)
        if sol:
            # o‘zgaruvchilar sol da yo‘q bo‘lsa — oldiga qo‘shamiz
            missing = [c for c in vars_ if not re.search(rf"^{c['name']}\s*=", sol, re.M)]
            if missing:
                head = "\n".join(f"{c['name']} = {_py_str(c['equals'])}" for c in missing)
                return head + "\n" + sol
            return sol
        lines.append(
            f"print({exp})"
            if re.fullmatch(r"-?\d+(\.\d+)?", str(exp).strip())
            else f"print({_py_str(exp)})"
        )
        return "\n".join(lines)

    exprs = _expr_checks(ex)
    if exprs:
        # Funksiya nomini expr dan olish
        lines = []
        for c in exprs:
            call = c.get("code", "")
            m = re.match(r"(\w+)\(", call)
            name = m.group(1) if m else "funksiya"
            eq = c.get("equals")
            lines.append(f"# {call} natijasi {_py_str(eq)} bo‘lishi kerak")
            if name == "besh":
                lines = ["def besh():\n    return 5"]
            elif name == "kv":
                lines = ["def kv(x):\n    return x * x"]
            elif name in ("qoshing", "yig", "yigindi"):
                lines = [f"def {name}(*args):\n    return sum(args)"] if "yig" in name else [
                    f"def {name}(a, b):\n    return a + b"
                ]
            else:
                lines.append(f"def {name}(...):\n    ...  # vazifaga qarang")
                lines.append(f"# Tekshiruv: {call}")
        # Better: use title-based for common
        return _expr_solution(ex, exprs) or "\n".join(lines)

    files = _file_checks(ex)
    if files:
        lines = []
        for c in files:
            path = c["path"]
            text = c["equals"]
            lines.append(f'with open({_py_str(path)}, "w", encoding="utf-8") as f:')
            lines.append(f"    f.write({_py_str(text)})")
        return "\n".join(lines)

    if exp is not None:
        return _stdout_solution(ex, exp, title, task, stdin, setup)

    cont = _contains_checks(ex)
    if cont and hint:
        return hint
    if cont:
        needles = [c.get("text") for c in cont]
        return "# Kodda shular bo‘lsin: " + ", ".join(repr(n) for n in needles)

    return "# Vazifani o‘qing va o‘zingiz yozing."


def _expr_solution(ex, exprs):
    c = exprs[0]
    call = c.get("code", "")
    m = re.match(r"(\w+)\((.*)\)", call)
    if not m:
        return None
    name, args = m.group(1), m.group(2)
    eq = c.get("equals")
    # Common patterns by name
    table = {
        "besh": "def besh():\n    return 5",
        "nol": "def nol():\n    return 0",
        "ism": "def ism():\n    return 'Omar'",
        "kv": "def kv(x):\n    return x * x",
        "qoshing": "def qoshing(a, b):\n    return a + b",
        "ayir": "def ayir(a, b):\n    return a - b",
        "ikki_barobar": "def ikki_barobar(n):\n    return n * 2",
        "juftmi": "def juftmi(n):\n    return n % 2 == 0",
        "max2": "def max2(a, b):\n    return a if a > b else b",
        "len_soz": "def len_soz(s):\n    return len(s)",
        "yigindi3": "def yigindi3(a, b, c):\n    return a + b + c",
        "teskarisi": "def teskarisi(x):\n    return not x",
        "daraja": "def daraja(x, n=2):\n    return x ** n",
        "abs_oddiy": "def abs_oddiy(n):\n    return -n if n < 0 else n",
        "oxirgi": "def oxirgi(a):\n    return a[-1]",
        "faktorial": "def faktorial(n):\n    p = 1\n    for i in range(1, n + 1):\n        p *= i\n    return p",
        "teskari": "def teskari(s):\n    return s[::-1]",
        "yigindi": "def yigindi(a):\n    return sum(a)",
        "juftlar": "def juftlar(a):\n    return [x for x in a if x % 2 == 0]",
        "nechta": "def nechta(s, harf):\n    return s.count(harf)",
        "minmax": "def minmax(a):\n    return [min(a), max(a)]",
        "takrorla": "def takrorla(s, n):\n    return s * n",
        "is_adult": "def is_adult(yosh):\n    return yosh >= 18",
        "orta": "def orta(a, b):\n    return (a + b) / 2",
        "yig": "def yig(*args):\n    return sum(args)",
        "list_len": "def list_len(a):\n    return len(a)",
    }
    if name in table:
        return table[name]
    # *args style
    if name in ("nechta",) and "args" in str(ex.get("task", "")):
        pass
    if "*args" in (ex.get("task") or "") or "args" in name:
        if name == "nechta":
            return "def nechta(*args):\n    return len(args)"
        if name == "bir":
            return "def bir(*args):\n    return args[0]"
        if name == "eng_katta":
            return "def eng_katta(*a):\n    return max(a)"
        if name == "eng_kichik":
            return "def eng_kichik(*a):\n    return min(a)"
        if name == "kop":
            return "def kop(*a):\n    p = 1\n    for x in a:\n        p *= x\n    return p"
        if name == "birlashtir":
            return "def birlashtir(*args):\n    return '-'.join(args)"
        if name == "fmt":
            return "def fmt(**kw):\n    return kw['ism'] + '-' + str(kw['yosh'])"
        if name == "bir_ikki":
            return "def bir_ikki(a, b, *rest):\n    return [a, b]"
        if name == "f":
            return "def f(a, b=1, *args, **kw):\n    return a + b + sum(args) + sum(kw.values())"
        if name == "ol":
            return "def ol(**kw):\n    return kw.get('ism')"
        if name == "kalitlar":
            return "def kalitlar(**kw):\n    return sorted(kw.keys())"
        if name == "yosh":
            return "def yosh(**kw):\n    return kw['yosh']"
        if name == "nech":
            return "def nech(**kw):\n    return len(kw)"
        if name == "yig_kw":
            return "def yig_kw(**kw):\n    return sum(kw.values())"
        if name == "t":
            task = ex.get("task") or ""
            if "tuple" in task or "*args" in task and "dict" not in task:
                return "def t(*args):\n    return type(args).__name__"
            return "def t(**kw):\n    return type(kw).__name__"
        if name == "bor":
            return "def bor(**kw):\n    return 'token' in kw"
        if name == "uzun":
            return "def uzun(*a):\n    return sum(len(x) for x in a)"
    return f"def {name}(...):\n    return {_py_str(eq)}  # vazifaga mos qilib yozing"


def _if_arrow_solution(task, exp):
    """'n=4; n%2==0 → juft' yoki 'a=5, b=3. Agar a>b bo‘lsa «ha»'."""
    if not task or exp is None:
        return None
    word = str(exp).split("\n")[0]
    # assigns; condition → word  (condition assign emas)
    m = re.search(r"^(.+?);\s*([^→;]+?)\s*→\s*\S+", task)
    if m:
        head, cond = m.group(1).strip(), m.group(2).strip()
        if re.match(r"^\w+\s*=", cond):
            return None
        if not re.search(r"(==|!=|>=|<=|<|>|%\s*\d| not | and | or )", cond):
            return None
        assigns = re.findall(
            r"(\w+)\s*=\s*(\"[^\"]*\"|'[^']*'|-?\d+(?:\.\d+)?|True|False)",
            head,
        )
        if assigns:
            lines = [f"{n} = {v}" for n, v in assigns]
            lines.append(f"if {cond}:")
            lines.append(f"    print({_py_str(word)})")
            code = "\n".join(lines)
            return code if _looks_like_python(code) else None
    # Agar ... bo‘lsa «word»
    m = re.search(
        r"^(.*?)\.\s*Agar\s+(.+?)\s+bo‘lsa\s+[«\"]([^»\"]+)[»\"]",
        task,
        re.I,
    )
    if not m:
        m = re.search(
            r"^(.*?)\.\s*Agar\s+(.+?)\s+bo‘lsa:\s*print\([\"']([^\"']+)[\"']\)",
            task,
            re.I,
        )
    if m:
        head, cond, w = m.group(1), m.group(2).strip(), m.group(3)
        assigns = re.findall(
            r"(\w+)\s*=\s*(\"[^\"]*\"|'[^']*'|-?\d+(?:\.\d+)?|True|False)",
            head,
        )
        if not assigns:
            return None
        lines = [f"{n} = {v}" for n, v in assigns]
        # not flag
        if cond.startswith("not "):
            lines.append(f"if {cond}:")
        else:
            lines.append(f"if {cond}:")
        lines.append(f"    print({_py_str(w)})")
        code = "\n".join(lines)
        return code if _looks_like_python(code) else None
    # x=1. x==0 bo‘lsa "nol" else "boshqa"
    m = re.search(
        r'(\w+)\s*=\s*(-?\d+|True|False|"[^"]*").*?\1\s*(==|!=)\s*(\S+)\s+bo‘lsa\s+[\"«]?([^\"»\s]+)[\"»]?\s+else\s+[\"«]?([^\"»\s]+)',
        task,
        re.I,
    )
    if m:
        name, val, op, rhs, w1, w2 = m.groups()
        rhs = rhs.strip(".:")
        return (
            f"{name} = {val}\n"
            f"if {name} {op} {rhs}:\n"
            f"    print({_py_str(w1)})\n"
            f"else:\n"
            f"    print({_py_str(w2)})"
        )
    return None


def _special_solution(ex, title, task, exp, stdin):
    tid = ex.get("id", "")
    if tid == "l2-e22" or title.strip() == "yangilash":
        return "n = 0\nn = 5\nn = 10\nprint(n)"
    if tid == "l2-e29" or title.strip() == "v yangilash":
        return "v = 'a'\nv = 'b'\nv = 'c'\nprint(v)"
    if tid == "l1-e06" or title.strip() == "bo‘sh qator" or title.strip() == "bosh qator":
        return 'print()\nprint("Start")'
    if tid == "l1-e27" or title.strip() == "5 print":
        return 'print("a")\nprint("b")\nprint("c")\nprint("d")\nprint("e")'
    if tid == "l1-e28" or (title.strip() == "sarlavha" and "PYTHON" in task):
        return 'print("PYTHON")\nprint("=====")'
    if_sol = _if_arrow_solution(task, exp)
    if if_sol:
        return if_sol
    # a=3,b=8; kattasini print
    if "kattasini" in task.lower() or (title.strip() == "max" and "a=" in task):
        m = re.findall(r"(\w+)\s*=\s*(-?\d+)", task)
        if len(m) >= 2:
            return f"{m[0][0]} = {m[0][1]}\n{m[1][0]} = {m[1][1]}\nprint(max({m[0][0]}, {m[1][0]}))"
    # Bo‘sh joy bilan ulash
    if title.strip() in ("bo‘sh joy", "bosh joy") or task.strip().startswith('a="Salom", b="Ali"'):
        return 'a = "Salom"\nb = "Ali"\nprint(a + " " + b)'
    if title.strip() == "uch so‘z" or exp == "1 2 3":
        return 'print("1 2 3")'
    # Dars 4 classic
    if tid == "l4-e24" or (title == "soat" and "130" in task):
        return "daqiqa = 130\nsoat = daqiqa // 60\nprint(soat)"
    if tid == "l4-e25" or (title == "daqiqa" and "130" in task and "%" in task):
        return "daqiqa = 130\nqoldiq = daqiqa % 60\nprint(qoldiq)"
    if "perimetr" in title or ("eni" in task and "boyi" in task):
        return "eni = 5\nboyi = 3\nperimetr = 2 * (eni + boyi)\nprint(perimetr)"
    if "chegirma" in title:
        return "narx = 10000\nchegirma = narx * 10 // 100\nprint(chegirma)"
    if "o‘rtacha" in title or "ortacha" in title or "o'rtacha" in title:
        if exp == "15.0" or exp == 15.0:
            return "a = 10\nb = 20\norta = (a + b) / 2\nprint(orta)"
    if "dollar" in title or "12000" in task:
        return "som = int(input())\ndollar = som // 12000\nprint(dollar)"
    if title.strip() in ("2+3*4",) or "2+3*4" in task:
        return "natija = 2 + 3 * 4\nprint(natija)"
    if title.strip() == "5-12" or task.strip().startswith("print(5-12)"):
        return "natija = 5 - 12\nprint(natija)"
    return None


def _stdout_solution(ex, exp, title, task, stdin, setup):
    # Matn chiqishi
    if isinstance(exp, str) and not re.fullmatch(r"-?\d+(\.\d+)?", exp) and "\n" not in exp:
        # True/False
        if exp in ("True", "False"):
            return _bool_stdout_solution(task, title, exp, stdin)
        return f"matn = {_py_str(exp)}\nprint(matn)"

    if isinstance(exp, str) and "\n" in exp:
        parts = exp.split("\n")
        # numeric lines?
        if all(re.fullmatch(r"-?\d+(\.\d+)?", p) for p in parts):
            lines = []
            for i, p in enumerate(parts):
                lines.append(f"n{i+1} = {p}")
            for i in range(len(parts)):
                lines.append(f"print(n{i+1})")
            # Better for known patterns
            if exp == "0\n1\n2":
                return "for i in range(3):\n    print(i)"
            if exp == "1\n2\n3":
                return "for i in range(1, 4):\n    print(i)"
            if exp == "ha\nha\nha":
                return 'for i in range(3):\n    print("ha")'
            if exp == "2\n4\n6":
                return "for n in [2, 4, 6]:\n    print(n)"
            if exp == "3\n2\n1":
                return "for n in [3, 2, 1]:\n    print(n)"
            if exp == "1\n4\n9\n16":
                return "for n in range(1, 5):\n    print(n * n)"
            if exp == "0\n1\n3\n4":
                return "for i in range(5):\n    if i != 2:\n        print(i)"
            if exp == "0\n1\n2":
                return "for i in range(3):\n    print(i)"
            return "\n".join(lines)
        # text lines
        lines = []
        for i, p in enumerate(parts):
            lines.append(f"q{i+1} = {_py_str(p)}")
        for i in range(len(parts)):
            lines.append(f"print(q{i+1})")
        if exp == "Salom\nDunyo":
            return 'a = "Salom"\nb = "Dunyo"\nprint(a)\nprint(b)'
        if exp == "*\n**\n***":
            return "for i in range(1, 4):\n    print('*' * i)"
        return "\n".join(lines)

    # Bitta son
    if isinstance(exp, str) and re.fullmatch(r"-?\d+(\.\d+)?", exp):
        return _numeric_stdout_solution(ex, exp, title, task, stdin)

    return f"natija = {_py_str(exp)}\nprint(natija)"


def _bool_stdout_solution(task, title, exp, stdin):
    t = task.lower()
    if "startswith" in t:
        m = re.search(r'["\']([^"\']+)["\']\.startswith\(["\']([^"\']+)["\']\)', task)
        if m:
            return f's = {_py_str(m.group(1))}\nnatija = s.startswith({_py_str(m.group(2))})\nprint(natija)'
        if "input" in t or stdin:
            needle = "Py" if "Py" in task else "http"
            return f's = input()\nnatija = s.startswith({_py_str(needle)})\nprint(natija)'
        if 'til="Python"' in task or "Python" in task:
            return 'til = "Python"\nnatija = til.startswith("Py")\nprint(natija)'
    if "endswith" in t:
        if "input" in t or stdin:
            return 'nom = input()\nok = nom.endswith(".txt")\nprint(ok)'
        if ".jpg" in task:
            return 's = "rasm.png"\nnatija = s.endswith(".jpg")\nprint(natija)'
        return 'fayl = "a.txt"\nnatija = fayl.endswith(".txt")\nprint(natija)'
    if "not " in t or "not flag" in t:
        return 'flag = False\nif not flag:\n    print("yoqilmagan")'
    if exp == "True":
        return "natija = True\nprint(natija)"
    return "natija = False\nprint(natija)"


def _numeric_stdout_solution(ex, exp, title, task, stdin):
    t = task
    tid = ex.get("id", "")

    # List / tuple indekslari
    m = re.search(r"(\w+)\s*=\s*(\[[^\]]+\]|\([^\)]+\))", t)
    if m and re.search(r"\[-?\d+\]|\.count\(|\.index\(", t):
        name, val = m.group(1), m.group(2)
        if "[0]" in t or "birinchi" in title:
            return f"{name} = {val}\nnatija = {name}[0]\nprint(natija)"
        if "[-1]" in t or "oxirgi" in title:
            return f"{name} = {val}\nnatija = {name}[-1]\nprint(natija)"
        if "[1]" in t or "ikkinchi" in title:
            return f"{name} = {val}\nnatija = {name}[1]\nprint(natija)"
        mc = re.search(r"\.count\(([^)]+)\)", t)
        if mc:
            return f"{name} = {val}\nnatija = {name}.count({mc.group(1)})\nprint(natija)"
        mi = re.search(r"\.index\(([^)]+)\)", t)
        if mi:
            return f"{name} = {val}\nnatija = {name}.index({mi.group(1)})\nprint(natija)"

    if re.search(r"len\(\[[^\]]*\]\)", t) or re.search(r"len\(\([^\]]*\)\)", t):
        m = re.search(r"len\((\[[^\]]*\]|\([^\)]*\))\)", t)
        if m:
            return f"a = {m.group(1)}\nuzunlik = len(a)\nprint(uzunlik)"
    if "len([])" in t or title == "bo‘sh":
        return "a = []\nprint(len(a))"
    if "min(" in t:
        m = re.search(r"min\((\[[^\]]+\])\)", t)
        if m:
            return f"a = {m.group(1)}\nprint(min(a))"
    if "max" in title and "[" in t:
        m = re.search(r"(\[[^\]]+\])", t)
        if m:
            return f"a = {m.group(1)}\nprint(max(a))"

    if "//" in t and "60" in t and "130" in t:
        if "%" in t:
            return "daqiqa = 130\nqoldiq = daqiqa % 60\nprint(qoldiq)"
        return "daqiqa = 130\nsoat = daqiqa // 60\nprint(soat)"
    if "12000" in t:
        return "som = int(input())\ndollar = som // 12000\nprint(dollar)"
    if re.search(r"2\s*\+\s*3\s*\*\s*4", t):
        return "natija = 2 + 3 * 4\nprint(natija)"
    if "float(3)" in t:
        return "n = 3\nnatija = float(n)\nprint(natija)"
    if "10%3" in t or "10 % 3" in t:
        return "qoldiq = 10 % 3\nprint(qoldiq)"
    if "9/2" in t:
        return "natija = 9 / 2\nprint(natija)"
    if "9//2" in t:
        return "natija = 9 // 2\nprint(natija)"
    if "5-12" in t or "5 - 12" in t:
        return "natija = 5 - 12\nprint(natija)"
    if "(2+3)*4" in t:
        return "natija = (2 + 3) * 4\nprint(natija)"
    if "**2" in t or "kvadrat" in title:
        return "n = int(input())\nkvadrat = n ** 2\nprint(kvadrat)"
    if "*10" in t or "n*10" in t:
        return "n = int(input())\nnatija = n * 10\nprint(natija)"
    if "2**" in t or "2 **" in t:
        return "a = int(input())\nnatija = 2 ** a\nprint(natija)"
    if "len(" in t:
        m = re.search(r"len\(([^)]+)\)", t)
        if m and "input" not in m.group(1):
            arg = m.group(1)
            if arg.startswith('"') or arg.startswith("'"):
                return f"s = {arg}\nuzunlik = len(s)\nprint(uzunlik)"
            return f"uzunlik = len({arg})\nprint(uzunlik)"
        if stdin or "input" in t:
            return "s = input()\nprint(len(s))"
    if 's="Python"' in t or "s = \"Python\"" in t:
        return 's = "Python"\nprint(len(s))'

    # o‘rtacha list
    if "o‘rtacha" in title or "ortacha" in t.lower() or "20.0" == exp:
        if "[" in t:
            m = re.search(r"(\[[^\]]+\])", t)
            if m:
                return f"a = {m.group(1)}\norta = sum(a) / len(a)\nprint(orta)"

    if "yigindi" in title.lower() or (exp == "10" and "[1,2,3,4]" in t.replace(" ", "")):
        return "a = [1, 2, 3, 4]\ns = 0\nfor x in a:\n    s += x\nprint(s)"

    if "input" in t and stdin and "\n" not in stdin:
        if "max" in title or "katta" in t:
            return "a = int(input())\nb = int(input())\nprint(a if a > b else b)" if "\n" in (stdin or "") else "n = int(input())\nprint(n)"
        return "n = int(input())\nprint(n)"
    if "input" in t and stdin.count("\n") >= 1:
        n = stdin.count("\n") + 1
        if "min" in title or "kichik" in t:
            lines = [f"a{i+1} = int(input())" for i in range(n)]
            if n == 2:
                return "a = int(input())\nb = int(input())\nprint(a if a < b else b)"
            if n == 3:
                return "a = int(input())\nb = int(input())\nc = int(input())\nprint(max(a, b, c))"
        if "max" in title or "katta" in t:
            if n == 3:
                return "a = int(input())\nb = int(input())\nc = int(input())\nprint(max(a, b, c))"
            return "a = int(input())\nb = int(input())\nprint(a if a > b else b)"
        if "yig" in t.lower() or "yigindi" in title.lower() or "+" in title:
            lines = [f"a{i+1} = int(input())" for i in range(n)]
            s = " + ".join(f"a{i+1}" for i in range(n))
            lines.append(f"yigindi = {s}")
            lines.append("print(yigindi)")
            return "\n".join(lines)
        if "0 gacha" in title or (stdin.endswith("\n0") or stdin.endswith("0")):
            return "yigindi = 0\nwhile True:\n    n = int(input())\n    if n == 0:\n        break\n    yigindi += n\nprint(yigindi)"

    assigns = re.findall(r"(\w+)\s*=\s*([^,;=]+)", t)
    if assigns and any(op in t for op in "+-*/%"):
        lines = []
        for name, val in assigns[:5]:
            if "input" in val:
                lines.append(f"{name} = int(input())" if "int" in val else f"{name} = input()")
            else:
                lines.append(f"{name} = {val.strip()}")
        if "yigindi" in t or "a+b" in t.replace(" ", ""):
            lines.append("yigindi = a + b")
            lines.append("print(yigindi)")
            return "\n".join(lines)

    if "faktorial" in title or "5!" in t:
        return "p = 1\nfor i in range(1, 6):\n    p *= i\nprint(p)"
    if "15" == exp and ("1..5" in t or "1+2+3+4+5" in t or "yigindi" in title.lower()):
        return "yigindi = 0\nfor n in range(1, 6):\n    yigindi += n\nprint(yigindi)"
    if exp == "24" and ("1*2*3*4" in t or "ko‘paytma" in t or "kopaytma" in t):
        return "p = 1\nfor n in range(1, 5):\n    p *= n\nprint(p)"
    if exp == "25" and "toq" in t.lower():
        return "yigindi = 0\nfor n in range(1, 11):\n    if n % 2 != 0:\n        yigindi += n\nprint(yigindi)"
    if exp == "7" and ("!=" in t or "0" in t) and "for" in t:
        return "yigindi = 0\nfor n in [3, 0, 4]:\n    if n != 0:\n        yigindi += n\nprint(yigindi)"
    if exp == "100":
        return 'matn = "100"\n# yoki son:\nn = 100\nprint(n)'
    if tid.startswith("l1-") and exp == "100":
        return "n = 100\nprint(n)"

    # set/tuple len
    if "len({" in t or "set" in t.lower():
        if "len(set(" in t.replace(" ", ""):
            return "sozlar = ['a', 'b', 'a']\nprint(len(set(sozlar)))"
        if re.search(r"len\(\{[^}]+\}\)", t):
            m = re.search(r"len\((\{[^}]+\})\)", t)
            return f"s = {m.group(1)}\nprint(len(s))"

    # index mashqlari
    if "index" in title or ".index" in t:
        m = re.search(r"(\[[^\]]+\])", t)
        if m and "y" in t:
            return f'a = {m.group(1)}\nprint(a.index("y"))' if '"' in t or "'" in t else f"a = {m.group(1)}\nprint(a.index(5))" if "5" in t else f"a = {m.group(1)}\nprint(a.index(a[1]))"

    # count
    if "count" in title or ".count(" in t:
        m = re.search(r"(\[[^\]]+\])", t)
        if m:
            return f"a = {m.group(1)}\nprint(a.count(1))"

    # Fayldan yigindi
    if "sum.txt" in t or (ex.get("setup") or "").find("sum.txt") >= 0:
        return (
            'yigindi = 0\nwith open("sum.txt", encoding="utf-8") as f:\n'
            "    for qator in f:\n"
            "        yigindi += int(qator.strip())\n"
            "print(yigindi)"
        )
    if "csv" in title.lower() or "Ali,20" in (ex.get("setup") or ""):
        return (
            'with open("csv.txt", encoding="utf-8") as f:\n'
            "    qator = f.read().strip()\n"
            "qismlar = qator.split(',')\n"
            "print(qismlar[1])"
        )

    # show(x=7) style already handled elsewhere

    # Oxirgi chora: vazifa + starter asosida aniqroq shablon
    if stdin and "\n" in stdin and exp.isdigit():
        return (
            "a = int(input())\n"
            "b = int(input())\n"
            f"# kerak bo‘lsa yana input()\n"
            f"print({exp})  # o‘rniga hisob yozing: a+b, max, min..."
        )

    return (
        f"natija = {exp}\n"
        f"print(natija)\n"
        f"# Yuqoridagi {exp} ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying"
    )


# Qo‘lda aniq yechimlar (avtomatik taxmin zaif qolganlar)
HAND_FIXES = {
    "l1-e08": 'n = 100\nprint(n)',
    "l2-e22": "n = 0\nn = 5\nn = 10\nprint(n)",
    "l5-e14": "a = int(input())\nb = int(input())\nkichik = a if a < b else b\nprint(kichik)",
    "l5-e25": "a = int(input())\nb = int(input())\nc = int(input())\nprint(max(a, b, c))",
    "l6-e21": "p = 1\nfor i in range(1, 6):\n    p *= i\nprint(p)",
    "l6-e23": "yigindi = 0\nwhile True:\n    n = int(input())\n    if n == 0:\n        break\n    yigindi += n\nprint(yigindi)",
    "l6-e29": "yigindi = 0\nfor n in [3, 0, 4]:\n    if n != 0:\n        yigindi += n\nprint(yigindi)",
    "l7-e04": "a = [1, 2, 3, 4]\nprint(len(a))",
    "l7-e10": "a = [5, 6, 7]\nprint(a[1])",
    "l7-e11": "a = [1, 2, 3, 4]\ns = 0\nfor x in a:\n    s += x\nprint(s)",
    "l7-e12": "a = [3, 9, 2]\nprint(max(a))",
    "l7-e22": "a = [10, 20, 30]\norta = sum(a) / len(a)\nprint(orta)",
    "l7-e23": 'a = ["x", "y", "z"]\nprint(a.index("y"))',
    "l7-e26": "print(min([5, 1, 8]))",
    "l7-e28": "a = [1, 2, 1, 1]\nprint(a.count(1))",
    "l8-e09": "a = [4, 5, 6]\nprint(a.index(5))",
    "l8-e10": "a = [1, 1, 2]\nprint(a.count(1))",
    "l8-e26": 'a = ["a", "b", "c"]\nprint(a.index("c"))',
    "l8-e29": "a = [1, 1, 1]\na.remove(1)\nprint(a.count(1))",
    "l9-e02": "t = (7, 8, 9)\nprint(t[0])",
    "l9-e04": "t = (1, 2, 1)\nprint(t.count(1))",
    "l9-e05": "t = (4, 5, 6)\nprint(t.index(5))",
    "l9-e27": "print(len({1, 2, 2, 3}))",
    "l11-e20": "def show(**kw):\n    print(kw['x'])\nshow(x=7)",
    "l12-e21": (
        'yigindi = 0\nwith open("sum.txt", encoding="utf-8") as f:\n'
        "    for qator in f:\n        yigindi += int(qator.strip())\nprint(yigindi)"
    ),
    "l12-e25": (
        'with open("csv.txt", encoding="utf-8") as f:\n'
        "    qator = f.read().strip()\nprint(qator.split(',')[1])"
    ),
    "l5-e08": 'n = 4\nif n % 2 == 0:\n    print("juft")',
    "l5-e09": 's = "ok"\nif s == "ok":\n    print("yes")',
    "l5-e10": 'n = 10\nif n >= 10:\n    print("yetarli")',
    "l5-e16": 'n = 15\nif n > 10 and n < 20:\n    print("orasida")',
    "l6-e11": "yigindi = 0\nfor n in range(1, 6):\n    yigindi += n\nprint(yigindi)",
    "l6-e30": (
        "for i in range(2):\n"
        "    for j in range(2):\n"
        '        print(str(i) + str(j))'
    ),
    "l12-e06": (
        'with open("q.txt", encoding="utf-8") as f:\n'
        "    qatorlar = f.readlines()\nprint(len(qatorlar))"
    ),
    "l12-e19": (
        'with open("bin.dat", "wb") as f:\n'
        '    f.write(b"ABCD")\n'
        'with open("bin.dat", "rb") as f:\n'
        "    data = f.read()\nprint(len(data))"
    ),
    "l14-e25": "d = {'z': 1, 'y': 2}\nprint(sorted(d.keys()))",
    "l14-e30": "talaba = {'ism': 'Omar', 'ball': 95}\nprint(talaba['ism'] + ':' + str(talaba['ball']))",
    "l15-e09": 'import json\nd = json.loads(\'{"yosh": 18}\')\nprint(d["yosh"])',
    "l15-e10": "import json\ns = json.dumps({'n': 3})\nprint(json.loads(s)['n'])",
    "l15-e15": "import json\nprint(len(json.loads('[1, 2, 3, 4]')))",
    "l15-e16": "import json\ns = json.dumps({'a': 1}, indent=2)\nprint('a' in s)",
    "l15-e18": "import json\nd = json.loads('{\"a\": 1}')\nd['b'] = 2\nprint(json.loads(json.dumps(d))['b'])",
    "l15-e21": "import json\njavob = '{\"token\": \"abc\"}'\nprint(json.loads(javob)['token'])",
    "l15-e25": "import json\ncfg = {'host': 'localhost', 'port': 8080}\nprint(json.loads(json.dumps(cfg))['port'])",
    "l15-e26": "import json\na = json.loads('[1, 2]')\na.append(3)\nprint(a)",
    "l15-e30": "import json\na = json.loads('{\"a\": 1}')\nb = json.loads('{\"b\": 2}')\nprint((a | b)['b'])",
    "l16-e07": "from random import seed, randint\nseed(0)\nprint(randint(5, 5))",
}


def enrich_exercise(ex):
    from polish import polish_exercise

    exp = _stdout_eq(ex)
    eid = ex.get("id", "")
    # Avval yechim — asl vazifa matnidan (keyin savol yumshatiladi)
    raw_task = ex.get("task") or ""
    ex["task"] = clean_task(raw_task, exp)
    if eid in HAND_FIXES:
        sol = HAND_FIXES[eid]
    else:
        sol = invent_solution(ex)
    if re.search(r"\b(bering|saqlang|chiqaring|keyin|ga |ni )\b", sol) and "def " not in sol:
        if eid in HAND_FIXES:
            sol = HAND_FIXES[eid]
        else:
            tmp = dict(ex)
            tmp["solution"] = ""
            if re.search(r"\b(bering|saqlang|chiqaring)\b", tmp.get("hint") or ""):
                tmp["hint"] = ""
            sol2 = invent_solution(tmp)
            if not re.search(r"\b(bering|saqlang|chiqaring|keyin)\b", sol2):
                sol = sol2
            elif eid in HAND_FIXES:
                sol = HAND_FIXES[eid]
    if re.fullmatch(r"print\(-?\d+(\.\d+)?\)", sol.strip()):
        num = sol.strip()[6:-1]
        sol = f"natija = {num}\nprint(natija)"
    if re.fullmatch(r'print\("[^"]*"\)', sol.strip()) or re.fullmatch(r"print\('[^']*'\)", sol.strip()):
        inner = sol.strip()[6:-1]
        sol = f"matn = {inner}\nprint(matn)"
    if "formulaga almashtiring" in sol or "o‘rniga hisob yozing" in sol:
        if eid in HAND_FIXES:
            sol = HAND_FIXES[eid]
    if "json." in sol and "import json" not in sol:
        sol = "import json\n" + sol
    if re.search(r"\brandint\b|\bseed\b", sol) and "import" not in sol:
        sol = "from random import seed, randint\n" + sol
    # UI uchun: spoiler sarlavha/savolni tozalash (yechimga tegmaydi)
    ex["task"] = raw_task
    polish_exercise(ex)
    ex["solution"] = sol
    return ex


def enrich_lessons(lessons):
    for lesson in lessons:
        lesson["exercises"] = [enrich_exercise(dict(e)) for e in lesson["exercises"]]
    return lessons
