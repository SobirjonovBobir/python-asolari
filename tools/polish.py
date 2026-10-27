# -*- coding: utf-8 -*-
"""Sarlavha spoilerlari va kod-ko‘rinishidagi savollarni o‘quvchi uchun tozalash."""
import re


# Kod/formula ko‘rinishidagi sarlavhalar → oddiy nom
TITLE_FIXES = {
    "l2-e01": "Birinchi o‘zgaruvchi",
    "l5-e01": "Kattaroqmi",
    "l6-e07": "Qadam bilan",
    "l6-e18": "Ko‘paytma",
    "l7-e14": "Ikki append",
    "l7-e18": "Nollar ro‘yxati",
    "l7-e24": "Ro‘yxat ulash",
    "l3-e05": "Salom va input",
    "l3-e17": "f-string",
    "l3-e22": "endswith va input",
    "l3-e27": "count va len",
    "l3-e28": "split va len",
    "l3-e29": "ID yasash",
    "l5-e01": "Kattaroqmi",
    "l5-e02": "Tenglik",
    "l5-e03": "Teng emas",
    "l5-e04": "Matn teng emas",
    "l5-e09": "Matn tengligi",
    "l5-e10": "Katta yoki teng",
    "l5-e11": "not va endswith",
    "l5-e12": "Parol tekshiruv",
    "l5-e20": "Farq yoki teng",
    "l5-e22": "not va len",
    "l5-e28": "Ikki son farqi",
    "l6-e15": "Filtrlash",
    "l6-e18": "Ko‘paytma",
    "l6-e29": "Nol emas yig‘indi",
    "l7-e18": "Nollar ro‘yxati",
    "l7-e24": "Ro‘yxat ulash",
    "l8-e01": "Boshiga qo‘shish",
    "l8-e02": "O‘rtaga qo‘shish",
    "l8-e05": "Birinchisini olish",
    "l8-e14": "map ikki barobar",
    "l8-e16": "map kvadrat",
    "l8-e17": "Birinchi remove",
    "l8-e21": "Teskari sort",
    "l8-e22": "filter katta",
    "l8-e25": "Kesmani o‘chirish",
    "l8-e26": "index c",
    "l8-e27": "map va filter",
    "l8-e29": "count va remove",
    "l9-e11": "Tuple ulash",
    "l9-e12": "Tuple takror",
    "l10-e01": "salom funksiyasi",
    "l11-e16": "default va args",
    "l12-e14": "r+ rejimida yozish",
    "l13-e13": "Nolga bo‘lish",
    "l13-e14": "Xavfsiz bo‘lish",
    "l13-e30": "Xavfsiz ko‘paytirish",
    "l14-e21": "Ichma-ich lug‘at",
    "l9-e10": "list dan tuple",
    "l5-e23": "Juft va musbat",
    "l14-e25": "Kalitlar ro‘yxati",
}


def _strip_result_hints(task, expected=None):
    t = task or ""
    t = re.sub(r"\s*→\s*.+$", "", t, flags=re.DOTALL)
    t = re.sub(r"\s+[—\-]\s+[^.\n]*→[^.\n]*", "", t)
    t = re.sub(r"\s*→\s*(True|False|-?\d+(\.\d+)?)\b", "", t)
    # "— banana" kabi stdin namunasi (javob emas) qolishi mumkin; natija ochiq bo‘lsa olib tashla
    if expected is not None:
        exp = str(expected).strip().split("\n")[0]

        def strip_paren(m):
            inner = m.group(1).strip()
            if exp and (exp in inner or inner == exp):
                return ""
            if re.search(r"[=→]", inner) and re.search(r"\d", inner):
                return ""
            if re.fullmatch(r"-?\d+(\.\d+)?|True|False|None", inner):
                return ""
            # (5,2→2) tipidagi
            if "→" in inner or re.search(r"\d+\s*,\s*\d+", inner) and re.search(r"\d", inner):
                if re.search(r"→|=", inner) or re.fullmatch(r"[\d,\s→\-]+", inner):
                    return ""
            return m.group(0)

        t = re.sub(r"\s*\(([^)]*)\)\s*\.?$", strip_paren, t)
    t = re.sub(r"\s{2,}", " ", t).strip(" .;")
    # Kod parchasiga nuqta qo‘yilmasin (n%2==0. bo‘lib ketmasin)
    if t and not t.endswith((".", "?", "!")):
        if not re.search(r"(==|!=|>=|<=|[%*/+]|\w+\s*=\s*\S+$)", t):
            t += "."
    return t


def _is_code_dump(task):
    """Savol deyarli tayyor kodmi?"""
    if not task:
        return False
    t = task.strip().rstrip(".")
    if t.count(";") >= 1 and re.search(r"(print\s*\(|(?<![=!<>])=(?!=))", t):
        return True
    if re.match(r"^(print\s*\(|len\s*\(|min\s*\(|max\s*\(|sorted\s*\()", t):
        return True
    if re.search(r"\[[^\]]*\]\s*(\[\s*-?\d+\s*\]|\.index|\.count|\.pop|\.remove|\.sort|\.append)", t):
        return True
    if re.search(r"\([^)]*\)\s*(\[\s*-?\d+\s*\]|\.count|\.index)", t):
        return True
    if re.search(r"\w+\s*=\s*\[[^\]]*\]\s*,?\s*print\(", t):
        return True
    if re.match(r"^[\w.]+\([^)]*\)$", t) and re.search(
        r"(sqrt|ceil|floor|fabs|pow|randint|factorial|hypot|gcd|comb|isqrt|prod|log|"
        r"int|float|tuple|set|sorted)",
        t,
    ):
        return True
    if re.search(r"1/0|\[\s*1\s*\]\s*\[\s*5\s*\]|\{\s*\}\s*\[", t):
        return True
    return False


def _humanize_code_task(task, title, exp):
    """Kod-dump savolni o‘zbekcha ko‘rsatmaga aylantiradi (yechimni to‘liq bermasdan)."""
    t = _strip_result_hints(task, exp)
    title_l = (title or "").lower()

    # str metodlari
    if "startswith" in t:
        m = re.search(r'(\w+)\s*=\s*["\']([^"\']+)["\'].*startswith\(["\']([^"\']+)["\']\)', t)
        if m:
            return f'{m.group(1)} ga "{m.group(2)}" bering. U "{m.group(3)}" bilan boshlanishini startswith bilan tekshirib, natijani print qiling.'
        if "input" in t:
            needle = "Py" if "Py" in t else "http"
            return f"input() dan matn o‘qing. U \"{needle}\" bilan boshlansa True chiqaring (startswith)."
        return "startswith metodi bilan matn boshlanishini tekshirib, natijani print qiling."
    if "endswith" in t:
        m = re.search(r'(\w+)\s*=\s*["\']([^"\']+)["\'].*endswith\(["\']([^"\']+)["\']\)', t)
        if m:
            return f'{m.group(1)} ga "{m.group(2)}" bering. U "{m.group(3)}" bilan tugashini endswith bilan tekshirib chiqaring.'
        if "input" in t:
            return 'input() dan fayl nomini o‘qing. ".txt" bilan tugasa True chiqaring (endswith).'
        return "endswith metodi bilan tugashini tekshirib chiqaring."
    if ".upper()" in t:
        m = re.search(r'(\w+)\s*=\s*["\']([^"\']+)["\']', t)
        if m:
            return f'{m.group(1)} ga "{m.group(2)}" bering. upper() qilib print qiling.'
    if ".lower()" in t and "endswith" not in t:
        m = re.search(r'(\w+)\s*=\s*["\']([^"\']+)["\']', t)
        if m:
            return f'{m.group(1)} ga "{m.group(2)}" bering. lower() qilib print qiling.'
    if ".strip()" in t and ".upper()" in t:
        m = re.search(r'(\w+)\s*=\s*["\']([^"\']+)["\']', t)
        if m:
            return f'{m.group(1)} ga "{m.group(2)}" bering. Avval strip, keyin upper qilib print qiling.'
    if ".strip()" in t:
        m = re.search(r'(\w+)\s*=\s*["\']([^"\']+)["\']', t)
        if m:
            return f'{m.group(1)} ga "{m.group(2)}" bering (bo‘sh joylari bilan). strip() qilib print qiling.'
    if ".replace(" in t:
        m = re.search(
            r'(\w+)\s*=\s*["\']([^"\']+)["\'].*replace\(["\']([^"\']*)["\']\s*,\s*["\']([^"\']*)["\']\)',
            t,
        )
        if m:
            return f'{m.group(1)} ga "{m.group(2)}" bering. "{m.group(3)}" ni "{m.group(4)}" ga almashtirib (replace) print qiling.'
        if "input" in t:
            return 'input() dan matn o‘qing. Bo‘sh joylarni "_" ga almashtirib print qiling.'
    if ".find(" in t:
        m = re.search(r'(\w+)\s*=\s*["\']([^"\']+)["\'].*find\(["\']([^"\']+)["\']\)', t)
        if m:
            return f'{m.group(1)} ga "{m.group(2)}" bering. "{m.group(3)}" ning indeksini find bilan topib print qiling.'
    if ".count(" in t and "len" in t:
        return "input() dan matn o‘qing. Avval 'a' nechta ekanini, keyin uzunligini chiqaring."
    if ".count(" in t:
        m = re.search(r'(\w+)\s*=\s*["\']([^"\']+)["\'].*count\(["\']([^"\']+)["\']\)', t)
        if m:
            return f'{m.group(1)} ga "{m.group(2)}" bering. "{m.group(3)}" necha marta uchrashini count bilan chiqaring.'
    if ".split()" in t and "len" in t:
        m = re.search(r'(\w+)\s*=\s*["\']([^"\']+)["\']', t)
        if m:
            return f'{m.group(1)} ga "{m.group(2)}" bering. split qilib nechta so‘z borligini chiqaring.'
    if ".split()" in t:
        m = re.search(r'(\w+)\s*=\s*["\']([^"\']+)["\']', t)
        if m:
            return f'{m.group(1)} ga "{m.group(2)}" bering. split() qilib ro‘yxatni print qiling.'
    if ".join(" in t:
        return 'qismlar=["a","b","c"] bering. Ular orasiga "-" qo‘yib birlashtiring (join) va print qiling.'
    if re.search(r"\*\s*3|print\([^)]*\*\s*3\)", t):
        m = re.search(r'(\w+)\s*=\s*["\']([^"\']+)["\']', t)
        if m:
            return f'{m.group(1)} ga "{m.group(2)}" bering. Uni 3 marta takrorlab print qiling.'

    # if / shartlar: "n=4; n%2==0" → allaqachon strip
    m = re.match(r'^(\w+)\s*=\s*([^;]+);\s*(.+)$', t)
    if m and re.search(r"(==|!=|>=|<=|<|>|%| and | or )", m.group(3)):
        name, val, cond = m.group(1), m.group(2).strip(), m.group(3).strip()
        # natija so‘zi title yoki exp dan
        word = None
        if exp and not re.fullmatch(r"-?\d+(\.\d+)?", str(exp).split("\n")[0]):
            word = str(exp).split("\n")[0]
        if word:
            return f"{name} ga {val} bering. Agar {cond} bo‘lsa «{word}» print qiling."
        return f"{name} ga {val} bering. Shart: {cond}. Shart bajarilsa mos matnni print qiling."

    # list / tuple indekslari
    m = re.search(r"(\[[^\]]+\]|\([^\)]+\))\s*\[\s*(-?\d+)\s*\]", t)
    if m:
        return f"Ro‘yxat/tuple {m.group(1)} berilgan. Indeks {m.group(2)} dagi elementni print qiling."
    m = re.search(r"(\w+)\s*=\s*(\[[^\]]+\])\s*,?\s*print\(\1\[\s*(-?\d+)\s*\]\)", t)
    if m:
        return f"{m.group(1)} ga {m.group(2)} bering. Indeks {m.group(3)} ni print qiling."

    if re.search(r"\.index\(", t):
        m = re.search(r"(\[[^\]]+\]|\([^\)]+\))\.index\(([^)]+)\)", t)
        if m:
            return f"{m.group(1)} ichida {m.group(2)} qayerdaligini index bilan topib print qiling."
    if re.search(r"\.count\(", t):
        m = re.search(r"(\[[^\]]+\]|\([^\)]+\))\.count\(([^)]+)\)", t)
        if m:
            return f"{m.group(1)} ichida {m.group(2)} necha marta borligini count bilan chiqaring."

    if re.search(r"len\s*\(", t):
        m = re.search(r"len\s*\((\[[^\]]*\]|\([^\)]*\)|\{[^}]*\})\)", t)
        if m:
            return f"{m.group(1)} uzunligini len bilan chiqaring."

    if "min(" in t:
        m = re.search(r"min\((\[[^\]]+\])\)", t)
        if m:
            return f"{m.group(1)} dagi eng kichik sonni chiqaring."
    if "max(" in t or (title_l == "max" and "[" in t):
        m = re.search(r"(\[[^\]]+\])", t)
        if m:
            return f"{m.group(1)} dagi eng katta sonni chiqaring."

    # list metodlari
    if ".append(" in t or "append" in title_l:
        return t  # ko‘pincha allaqachon matn
    if ".remove(" in t:
        m = re.search(r"(\[[^\]]+\])\.remove\(([^)]+)\)", t)
        if m:
            return f"{m.group(1)} dan {m.group(2)} ni remove qilib, qolgan ro‘yxatni print qiling."
    if ".pop(" in t or ".pop()" in t:
        if "print" in t and "pop()" in t:
            return "Ro‘yxatdan pop() qiling va qaytgan qiymatni print qiling."
        return "Ro‘yxatdan pop qiling va natijaviy ro‘yxatni print qiling."
    if ".sort(" in t or "sort" in title_l:
        m = re.search(r"(\[[^\]]+\])", t)
        if m:
            rev = " teskari tartibda" if "reverse" in t else ""
            return f"{m.group(1)} ni sort{rev} qilib print qiling."
    if ".clear(" in t or title_l == "clear":
        return "Ro‘yxatni clear qilib, bo‘sh ro‘yxatni print qiling."
    if ".insert(" in t or "insert" in title_l:
        return _strip_result_hints(task, exp)

    # set / in
    if " in {" in t or " in {" in t.replace(" ", ""):
        return "To‘plamda element bor-yo‘qligini in bilan tekshirib print qiling."
    if "len(set(" in t.replace(" ", ""):
        return "Ro‘yxatdan set yasang va unikal elementlar sonini chiqaring."

    # math / import
    for name, tip in (
        ("sqrt", "kvadrat ildiz"),
        ("ceil", "yuqoriga yaxlitlash (ceil)"),
        ("floor", "pastga yaxlitlash (floor)"),
        ("fabs", "absolyut qiymat (fabs)"),
        ("factorial", "faktorial"),
        ("hypot", "gipotenuzа (hypot)"),
        ("gcd", "EKUB (gcd)"),
        ("comb", "kombinatsiya (comb)"),
        ("isqrt", "butun ildiz (isqrt)"),
        ("prod", "ko‘paytma (prod)"),
    ):
        if name + "(" in t:
            m = re.search(rf"{name}\(([^)]+)\)", t)
            arg = m.group(1) if m else "..."
            return f"math modulidan {tip}: {name}({arg}) natijasini print qiling."

    if "randint" in t:
        return "random: seed(0) qiling, keyin randint(5, 5) ni print qiling."
    if "pow(" in t:
        return "math.pow(2, 3) natijasini print qiling."

    # try/except tipidagi qisqa
    if "1/0" in t or title_l.strip() in ("/0", "zerodiv"):
        return "Nolga bo‘lish xatosini try/except bilan ushlang va mos xabar chiqaring."
    if re.search(r"\bint\s*\(\s*['\"]ab['\"]\s*\)", t):
        return "int('ab') xatosini ushlang va 'son emas' print qiling."

    # f-string
    if re.search(r'\bf["\']', t) or 'f"' in t or "f'" in t:
        return "input() dan ism o‘qing. f-string bilan «Ism: ...» ko‘rinishida print qiling."
    if "Salom," in t and "input" in t:
        return 'input() dan ism o‘qing. "Salom, " ga ulab xabar yasab print qiling.'

    # list: a=[7,8,9], print(a[0])
    m = re.search(r"(\w+)\s*=\s*(\[[^\]]+\])\s*,?\s*print\(\1\[(-?\d+)\]\)", t)
    if m:
        return f"{m.group(1)} ga {m.group(2)} bering. Indeks {m.group(3)} dagi elementni print qiling."

    if title_l == "ichma-ich" or re.search(r"00\s+01\s+10\s+11", t):
        return "Ikki qatlamli for bilan 00, 01, 10, 11 chiqaring."
    if "juft-musbat" in title_l or (title_l == "juft-musbat"):
        return "n ni o‘qing. Juft va musbat bo‘lsa «juft-musbat» print qiling."
    if "r+" in title_l or (title_l.startswith("r+") or "r+ " in t):
        return "x.txt da Hi bor. r+ rejimida o‘qing, seek(0), keyin YANGI yozing."

    # print(EXPR) — ifodani ochiq kod sifatida qoldirmaslik
    m = re.match(r"^print\s*\((.*)\)\s*$", t.strip().rstrip("."))
    if m:
        expr = m.group(1).strip()
        if re.fullmatch(r"\[\s*0\s*\]\s*\*\s*3", expr.replace(" ", "")) or "[0]*3" in expr.replace(" ", ""):
            return "Uchta noldan iborat ro‘yxat yarating (* yoki takrorlash bilan) va print qiling."
        if "tuple(" in expr:
            return "Ro‘yxatni tuple() ga o‘tkazib print qiling."
        if "set(" in expr and "sorted" in expr:
            return "Ro‘yxatdan set yasab, sorted qilib print qiling."
        if "|" in expr and "{" in expr:
            return "Ikki to‘plamni birlashtiring (union), sorted qilib print qiling."
        if "&" in expr and "{" in expr:
            return "Ikki to‘plam kesishmasini (intersection) sorted qilib print qiling."
        if "^" in expr and "{" in expr:
            return "Symmetric difference ni sorted qilib print qiling."
        if "-" in expr and "{" in expr and "sorted" in expr:
            return "To‘plamlar ayirmasini (difference) sorted qilib print qiling."
        if ".issubset(" in expr:
            return "issubset bilan tekshirib, natijani print qiling."
        if ".issuperset(" in expr:
            return "issuperset bilan tekshirib, natijani print qiling."
        if re.search(r"\bin\b", expr) and "(" in expr:
            return "Tuple ichida element bor-yo‘qligini in bilan tekshirib print qiling."
        if re.search(r"math\.|sqrt|ceil|floor|fabs|pow|hypot|gcd|factorial", expr):
            return f"Kutubxona chaqirig‘i natijasini hisoblab print qiling (darsdagi misolga qarang)."
        return "Kerakli ifodani hisoblab, natijani print qiling."

    # Yumshatish: to‘liq yechimni saqlamaslik
    if t.count(";") >= 1 and re.search(r"\bprint\s*\(", t):
        parts = [p.strip() for p in t.split(";") if p.strip()]
        out = []
        for p in parts:
            if re.match(r"print\s*\(", p):
                out.append("natijani print qiling")
            elif re.search(r"(?<![=!<>])=(?!=)", p):
                left, _, right = p.partition("=")
                out.append(f"{left.strip()} ga {right.strip()} bering")
            else:
                out.append(p)
        return ". ".join(out).strip(" .") + "."
    return t


def polish_exercise(ex):
    """Sarlavha va savol matnini spoiler-siz qiladi."""
    eid = ex.get("id", "")
    if eid in TITLE_FIXES:
        ex["title"] = TITLE_FIXES[eid]
    # Formula-sarlavha: faqat amal/son
    title = ex.get("title") or ""
    if re.fullmatch(r"[0-9+\-*/%().=<>!\s]+", title) or re.fullmatch(
        r"[a-zA-Z_]\w*\s*=\s*.+", title
    ):
        # fallback nom
        if not TITLE_FIXES.get(eid):
            ex["title"] = "Mashq"

    exp = None
    for c in ex.get("checks") or []:
        if c.get("type") == "stdout":
            exp = c.get("equals")
            break

    task = ex.get("task") or ""
    raw = task
    task = _strip_result_hints(task, exp)
    title_l = (ex.get("title") or "").lower()
    # Title asosida qisqa spoiler savollar
    if title_l == "ichma-ich" and re.search(r"00|01|10|11", task):
        task = "Ikki qatlamli for bilan 00, 01, 10, 11 chiqaring."
    elif "juft-musbat" in title_l or title_l == "juft va musbat":
        task = "n ni o‘qing. U juft va musbat bo‘lsa «juft-musbat» print qiling."
    elif title_l == "finally":
        task = "try ichida print(1), finally da ham xabar chiqaring."
    elif title_l == "kalitlar ro‘yxati" or title_l == "keys list":
        task = "Lug‘at kalitlarini sorted qilib ro‘yxat ko‘rinishida print qiling."
    elif _is_code_dump(task) or re.match(r"^print\s*\(", task.strip()):
        task = _humanize_code_task(raw, ex.get("title") or "", exp)
        task = _strip_result_hints(task, exp)
    elif re.match(r"^print\s*\([^)]*\)\s*\.?$", task.strip()):
        task = _humanize_code_task(raw, ex.get("title") or "", exp)

    # Shart ichidagi noto‘g‘ri nuqta: "n%2==0." → "n % 2 == 0"
    task = re.sub(r"(\w+%?\w*)\s*==\s*(\d+)\.", r"\1 == \2", task)
    task = re.sub(r"\bn%2==0\b", "n % 2 == 0", task)

    ex["task"] = task
    return ex
