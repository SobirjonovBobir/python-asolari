# -*- coding: utf-8 -*-
"""Yechimdan aniq o‘zbekcha mashq sharti yasash."""
from __future__ import annotations

import ast
import re
from typing import Any


def _lit(node: ast.AST) -> str | None:
    try:
        v = ast.literal_eval(node)
    except Exception:
        return None
    if isinstance(v, str):
        return repr(v)
    if isinstance(v, bool):
        return "True" if v else "False"
    if v is None:
        return "None"
    return repr(v)


def _expr_uz(node: ast.AST) -> str:
    """Ifodani qisqa o‘zbekcha izoh."""
    if isinstance(node, ast.Name):
        return node.id
    if isinstance(node, ast.Constant):
        return _lit(node) or "qiymat"
    lit = _lit(node)
    if lit is not None:
        return lit
    if isinstance(node, ast.JoinedStr):
        return "f-string"
    if isinstance(node, ast.BinOp):
        op = {
            ast.Add: "+",
            ast.Sub: "-",
            ast.Mult: "*",
            ast.Div: "/",
            ast.FloorDiv: "//",
            ast.Mod: "%",
            ast.Pow: "**",
            ast.BitOr: "|",
            ast.BitAnd: "&",
            ast.BitXor: "^",
        }.get(type(node.op), "?")
        left, right = node.left, node.right
        ls, rs = _expr_uz(left), _expr_uz(right)
        if isinstance(left, (ast.BinOp, ast.Compare, ast.BoolOp)):
            ls = f"({ls})"
        if isinstance(right, (ast.BinOp, ast.Compare, ast.BoolOp)):
            rs = f"({rs})"
        return f"{ls} {op} {rs}"
    if isinstance(node, ast.UnaryOp) and isinstance(node.op, ast.Not):
        return f"not {_expr_uz(node.operand)}"
    if isinstance(node, ast.Compare):
        parts = [_expr_uz(node.left)]
        for o, c in zip(node.ops, node.comparators):
            sym = {
                ast.Eq: "==",
                ast.NotEq: "!=",
                ast.Lt: "<",
                ast.LtE: "<=",
                ast.Gt: ">",
                ast.GtE: ">=",
                ast.In: "in",
                ast.NotIn: "not in",
                ast.Is: "is",
                ast.IsNot: "is not",
            }.get(type(o), "?")
            parts.append(f"{sym} {_expr_uz(c)}")
        return " ".join(parts)
    if isinstance(node, ast.Call):
        return _call_uz(node)
    if isinstance(node, ast.Attribute):
        return f"{_expr_uz(node.value)}.{node.attr}"
    if isinstance(node, ast.Subscript):
        sl = _slice_uz(node.slice)
        # json.loads(...)["x"]
        if isinstance(node.value, ast.Call):
            base = _call_uz(node.value)
            return f"{base}, keyin [{sl}] dagi qiymat"
        return f"{_expr_uz(node.value)}[{sl}]"
    if isinstance(node, ast.List):
        return "[" + ", ".join(_expr_uz(e) for e in node.elts) + "]"
    if isinstance(node, ast.Tuple):
        return "(" + ", ".join(_expr_uz(e) for e in node.elts) + ")"
    if isinstance(node, ast.Set):
        return "{" + ", ".join(_expr_uz(e) for e in node.elts) + "}"
    if isinstance(node, ast.Dict):
        items = []
        for k, v in zip(node.keys, node.values):
            if k is None:
                items.append("...")
            else:
                items.append(f"{_expr_uz(k)}: {_expr_uz(v)}")
        return "{" + ", ".join(items) + "}"
    if isinstance(node, ast.ListComp):
        return "list comprehension ifodasi"
    if isinstance(node, ast.DictComp):
        # invert: {v: k for k, v in d.items()}
        try:
            src = ast.unparse(node)
        except Exception:
            src = ""
        if "items()" in src and re.search(r"for\s+\w+\s*,\s*\w+\s+in", src):
            return "kalit va qiymatni almashtirgan yangi lug‘at (dict comprehension)"
        return "dict comprehension ifodasi"
    if isinstance(node, ast.Lambda):
        return "lambda"
    try:
        return ast.unparse(node)
    except Exception:
        return "ifoda"


def _slice_uz(node: ast.AST) -> str:
    if isinstance(node, ast.Slice):
        a = _expr_uz(node.lower) if node.lower else ""
        b = _expr_uz(node.upper) if node.upper else ""
        return f"{a}:{b}"
    return _expr_uz(node)


def _call_uz(node: ast.Call) -> str:
    fn = node.func
    args = [_expr_uz(a) for a in node.args]
    # metod zanjiri: x.strip().replace(...).lower()
    if isinstance(fn, ast.Attribute):
        base = fn.value
        # json.loads / math.sqrt — modul.funksiya
        if isinstance(base, ast.Name) and base.id in ("json", "math", "random", "datetime"):
            a = ", ".join(args)
            mod, name = base.id, fn.attr
            if name == "loads":
                return f"{mod}.loads({a}) orqali JSON matnini Python qiymatiga aylantiring"
            if name == "dumps":
                kw = ""
                if node.keywords:
                    kw = " (" + ", ".join(
                        f"{k.arg}={_expr_uz(k.value)}" for k in node.keywords
                    ) + ")"
                return f"{mod}.dumps({a}){kw} orqali JSON matniga aylantiring"
            return f"{mod}.{name}({a}) natijasini hisoblang"
        # zanjirni ochish
        chain = []
        cur: ast.AST = node
        while isinstance(cur, ast.Call) and isinstance(cur.func, ast.Attribute):
            name = cur.func.attr
            a = ", ".join(_expr_uz(x) for x in cur.args)
            chain.append((name, a))
            cur = cur.func.value
        root = _expr_uz(cur)
        if len(chain) >= 2:
            steps = []
            for i, (name, a) in enumerate(reversed(chain)):
                if name == "strip" and not a:
                    steps.append("strip() bilan chetdagi bo‘sh joylarni olib tashlang")
                elif name == "replace" and a:
                    parts = [p.strip() for p in a.split(",")]
                    if len(parts) >= 2:
                        steps.append(f"{parts[0]} ni {parts[1]} ga replace qiling")
                    else:
                        steps.append(f"replace({a})")
                elif name == "lower" and not a:
                    steps.append("lower() bilan kichik harfga aylantiring")
                elif name == "upper" and not a:
                    steps.append("upper() bilan katta harfga aylantiring")
                elif name == "split" and not a:
                    steps.append("split() qiling")
                elif name == "count" and a:
                    steps.append(f"{a} necha marta uchrashini count bilan toping")
                elif name == "find" and a:
                    steps.append(f"{a} indeksini find bilan toping")
                elif name in ("startswith", "endswith") and a:
                    word = "boshlanishini" if name == "startswith" else "tugashini"
                    steps.append(f"{a} bilan {word} {name} orqali tekshiring")
                elif name == "get":
                    steps.append(f"get({a}) chaqiring")
                elif name == "items":
                    steps.append("items() bo‘ylab yuring")
                else:
                    steps.append(f"{name}({a})" if a else f"{name}()")
            # Oxirgi qadam natija
            body = f"{root} matnidan boshlab: " + "; keyin ".join(steps)
            return body
        name = fn.attr
        a = ", ".join(args)
        desc = {
            "strip": "strip() qilib chetdagi bo‘sh joylarni olib tashlang",
            "upper": "upper() qilib katta harfga aylantiring",
            "lower": "lower() qilib kichik harfga aylantiring",
            "split": "split() qilib so‘zlarga bo‘ling",
            "append": f"append({a}) qiling" if a else "append qiling",
            "pop": f"pop({a}) qiling" if a else "pop() qiling",
            "remove": f"remove({a}) qiling",
            "insert": f"insert({a}) qiling",
            "extend": f"extend({a}) qiling",
            "sort": "sort() qilib tartiblang",
            "reverse": "reverse() qiling",
            "clear": "clear() qilib bo‘shating",
            "update": f"update({a}) qiling",
            "keys": "keys() ni oling",
            "values": "values() ni oling",
            "items": "items() ni oling",
            "get": f"get({a}) chaqiring",
            "count": f"{a} necha marta ekanini count bilan toping",
            "index": f"{a} indeksini index bilan toping",
            "add": f"add({a}) qiling",
            "setdefault": f"setdefault({a}) qiling",
            "loads": f"json.loads({a}) qiling" if "json" in ast.unparse(fn.value) else f"loads({a})",
            "dumps": f"json.dumps({a})" + ("" if not node.keywords else " (kerakli parametrlar bilan)"),
            "load": "json.load(...) qiling",
            "dump": "json.dump(...) qiling",
            "read": "read() qilib o‘qing",
            "write": f"write({a}) qiling" if a else "write qiling",
            "startswith": f"{a} bilan boshlanishini startswith bilan tekshiring",
            "endswith": f"{a} bilan tugashini endswith bilan tekshiring",
            "replace": (
                f"{args[0]} ni {args[1]} ga replace qiling" if len(args) >= 2 else f"replace({a})"
            ),
            "find": f"{a} indeksini find bilan toping",
            "join": f"join({a}) qiling",
        }.get(name)
        if desc:
            if isinstance(base, ast.Name):
                return f"«{base.id}» o‘zgaruvchisiga {desc}"
            return f"{_expr_uz(base)} uchun {desc}"
        if isinstance(base, ast.Name):
            return f"«{base.id}» o‘zgaruvchisiga {name}({a})" if a else f"«{base.id}» o‘zgaruvchisiga {name}()"
        return f"{_expr_uz(base)}.{name}({a})"
    # oddiy funksiya
    name = ast.unparse(fn)
    a = ", ".join(args)
    known = {
        "print": None,  # maxsus
        "len": f"{a} uzunligini (len) hisoblang",
        "sum": f"{a} yig‘indisini (sum) hisoblang",
        "min": f"{a} ichidan eng kichikini (min) toping",
        "max": f"{a} ichidan eng kattasini (max) toping",
        "sorted": f"{a} ni sorted bilan o‘sish tartibida joylashtiring",
        "list": f"list({a}) qiling",
        "tuple": f"tuple({a}) qiling",
        "set": None,
        "dict": f"dict({a}) qiling",
        "int": f"int({a}) qiling",
        "float": f"float({a}) qiling",
        "str": f"str({a}) qiling",
        "input": "input() dan matn o‘qing",
        "range": f"range({a})",
        "map": f"map({a}) natijasini list qiling",
        "filter": f"filter({a}) natijasini list qiling",
        "zip": f"zip({a})",
        "isinstance": f"isinstance({a}) natijasini tekshiring",
        "type": f"type({a})",
        "open": f"open({a}) bilan fayl oching",
        "round": f"round({a}) qiling",
    }
    if name == "set":
        if node.args and isinstance(node.args[0], ast.Call):
            return f"{_call_uz(node.args[0])} natijasidan set yasang (takrorlar yo‘qoladi)"
        if a:
            return f"{a} dan set yasang (takrorlar yo‘qoladi)"
        return "bo‘sh set yarating"
    if name in known and known[name]:
        return known[name]
    if name.startswith("math."):
        return f"{name}({a}) natijasini hisoblang"
    if name.startswith("json."):
        return f"{name}({a}) qiling"
    if name == "print":
        if len(node.args) == 1:
            arg0 = node.args[0]
            if isinstance(arg0, ast.Name):
                return f"«{arg0.id}» o‘zgaruvchisini ekranga chiqaring (print)"
            if isinstance(arg0, ast.Call):
                inner = _call_uz(arg0)
                if any(w in inner for w in ("qiling", "toping", "hisoblang", "tekshiring", "o‘qing", "oling", "chiqaring")):
                    return inner + ", natijani ekranga chiqaring (print)"
                return inner + " va natijani ekranga chiqaring (print)"
            return f"{_expr_uz(arg0)} natijasini ekranga chiqaring (print)"
        return "natijani ekranga chiqaring (print)"
    return f"{name}({a})"


def _is_unclear(task: str) -> bool:
    t = (task or "").strip()
    if not t:
        return True
    # "farq ga -3 bering" — o‘zgaruvchi tushuntirilmagan
    if re.search(r"(?<!nomli\s)\b[a-zA-Z_]\w*\s+ga\s+", t) and "nomli o‘zgaruvchi" not in t:
        return True
    # "x ni print qiling" qisqa
    if re.search(r"\b[a-zA-Z_]\w*\s+ni print qiling", t) and "o‘zgaruvchi" not in t:
        return True
    verbs = (
        "bering", "qiling", "chiqaring", "o‘qing", "oqib", "yarating",
        "hisoblang", "tekshir", "chaqiring", "toping", "almashtir",
        "oching", "yozing", "saqlang", "o‘gir",
    )
    has_verb = any(v in t.lower() for v in verbs)
    if re.search(r"\b(strip|replace|lower|upper|count|find|split)\s*,", t):
        return True
    if re.search(r"—\s*(print|ikki|sorted|list)", t, re.I):
        return True
    if t.count(";") >= 1 and "bering" not in t.lower() and "qiling" not in t.lower() and "yozing" not in t.lower():
        return True
    if re.match(r"^(print\(|loads |dumps |try:)", t):
        return True
    # "import json. ..." — qisqa kod uslubi
    if re.match(r"^import \w+\. ", t) and len(t) < 90:
        return True
    if re.search(r'\w+\s*=\s*["\'\[\{].{0,40}["\'\]\}]\s*;\s*', t):
        return True
    if re.search(r"\.\s*(strip|replace|lower|upper)\b", t) and "qiling" not in t.lower():
        return True
    if re.search(r"\bni print\.?$", t) and len(t) < 70:
        return True
    if not has_verb and len(t) < 80:
        return True
    if "Avval" in t and "keyin" in t.lower() and "qiling" not in t.lower():
        return True
    if re.search(r"\b(loads|dumps)\b", t) and "import json" in t.lower() and len(t) < 70:
        return True
    if re.search(r"\{[^}]+\}\s*ni\s*\{", t):  # invert style
        return True
    if t.endswith("print.") or t.endswith("print"):
        return True
    if "→" in t and len(t) < 90:
        return True
    return False


def task_from_solution(sol: str, *, stdin: str = "", exp: Any = None, title: str = "") -> str | None:
    sol = (sol or "").strip()
    if not sol:
        return None
    try:
        tree = ast.parse(sol)
    except SyntaxError:
        return None

    steps: list[str] = []
    printed = False

    for stmt in tree.body:
        if isinstance(stmt, ast.Import):
            mods = ", ".join(a.name for a in stmt.names)
            steps.append(f"{mods} kutubxonasini import qiling")
        elif isinstance(stmt, ast.ImportFrom):
            names = ", ".join(a.name for a in stmt.names)
            steps.append(f"{stmt.module} dan {names} ni import qiling")
        elif isinstance(stmt, ast.Assign) and len(stmt.targets) == 1:
            tgt = stmt.targets[0]
            if isinstance(tgt, ast.Name):
                if isinstance(stmt.value, ast.Call) and isinstance(stmt.value.func, ast.Name) and stmt.value.func.id == "input":
                    tip = ""
                    if stdin:
                        first = stdin.split("\n")[0]
                        tip = f" (masalan «{first}»)"
                    steps.append(
                        f"«{tgt.id}» nomli o‘zgaruvchiga input() orqali matn o‘qing{tip}"
                    )
                elif (
                    isinstance(stmt.value, ast.Call)
                    and isinstance(stmt.value.func, ast.Name)
                    and stmt.value.func.id == "int"
                    and stmt.value.args
                    and isinstance(stmt.value.args[0], ast.Call)
                    and isinstance(stmt.value.args[0].func, ast.Name)
                    and stmt.value.args[0].func.id == "input"
                ):
                    steps.append(
                        f"«{tgt.id}» nomli o‘zgaruvchiga int(input()) orqali butun son o‘qing"
                    )
                elif (
                    isinstance(stmt.value, ast.Call)
                    and isinstance(stmt.value.func, ast.Name)
                    and stmt.value.func.id == "float"
                    and stmt.value.args
                    and isinstance(stmt.value.args[0], ast.Call)
                    and isinstance(stmt.value.args[0].func, ast.Name)
                    and stmt.value.args[0].func.id == "input"
                ):
                    steps.append(
                        f"«{tgt.id}» nomli o‘zgaruvchiga float(input()) orqali o‘nli son o‘qing"
                    )
                else:
                    val = _expr_uz(stmt.value)
                    steps.append(
                        f"«{tgt.id}» nomli o‘zgaruvchiga {val} qiymatini bering"
                    )
            elif isinstance(tgt, ast.Tuple) and all(isinstance(e, ast.Name) for e in tgt.elts):
                names = ", ".join(f"«{e.id}»" for e in tgt.elts)  # type: ignore
                steps.append(
                    f"{names} o‘zgaruvchilariga {_expr_uz(stmt.value)} ni ochib (unpack) bering"
                )
            elif isinstance(tgt, ast.Subscript) and isinstance(tgt.value, ast.Name):
                steps.append(
                    f"«{tgt.value.id}» ning [{_slice_uz(tgt.slice)}] elementiga "
                    f"{_expr_uz(stmt.value)} qiymatini bering"
                )
        elif isinstance(stmt, ast.AugAssign) and isinstance(stmt.target, ast.Name):
            op = {ast.Add: "+=", ast.Sub: "-=", ast.Mult: "*="}.get(type(stmt.op), "+=")
            steps.append(
                f"«{stmt.target.id}» o‘zgaruvchisiga {op} {_expr_uz(stmt.value)} amalini qo‘llang"
            )
        elif isinstance(stmt, ast.Expr) and isinstance(stmt.value, ast.Call):
            call = stmt.value
            if isinstance(call.func, ast.Name) and call.func.id == "print":
                printed = True
                if len(call.args) == 1:
                    inner = call.args[0]
                    if isinstance(inner, ast.Call):
                        desc = _call_uz(inner)
                        if "print qiling" in desc or "chiqaring" in desc:
                            steps.append(desc)
                        else:
                            steps.append(desc + " va natijani ekranga chiqaring (print)")
                    elif isinstance(inner, ast.Name):
                        steps.append(
                            f"«{inner.id}» o‘zgaruvchisini ekranga chiqaring (print)"
                        )
                    else:
                        steps.append(
                            f"{_expr_uz(inner)} natijasini ekranga chiqaring (print)"
                        )
                else:
                    steps.append("kerakli qiymatlarni ekranga chiqaring (print)")
            elif isinstance(call.func, ast.Attribute):
                # a.append(5) kabi
                steps.append(_call_uz(call))
            elif isinstance(call.func, ast.Name):
                steps.append(_call_uz(call))
        elif isinstance(stmt, ast.Delete):
            for t in stmt.targets:
                steps.append(f"del {_expr_uz(t)} qiling")
        elif isinstance(stmt, ast.For):
            target = _expr_uz(stmt.target)
            it = _expr_uz(stmt.iter)
            body_prints = [
                s for s in stmt.body
                if isinstance(s, ast.Expr)
                and isinstance(s.value, ast.Call)
                and isinstance(s.value.func, ast.Name)
                and s.value.func.id == "print"
            ]
            if len(stmt.body) == 1 and body_prints:
                arg = body_prints[0].value.args[0] if body_prints[0].value.args else None
                if arg and isinstance(arg, ast.Name) and arg.id == (
                    stmt.target.id if isinstance(stmt.target, ast.Name) else ""
                ):
                    steps.append(
                        f"for {target} in {it}: har bir elementni alohida qatorda print qiling"
                    )
                    printed = True
                else:
                    steps.append(f"for {target} in {it} siklida kerakli qiymatlarni print qiling")
                    printed = True
            else:
                # ichida if/continue
                steps.append(f"for {target} in {it} sikli yozing")
                for s in stmt.body:
                    if isinstance(s, ast.If):
                        steps.append(f"agar {_expr_uz(s.test)} bo‘lsa")
                        for inner in s.body:
                            if isinstance(inner, ast.Continue):
                                steps.append("continue bilan shu qadamni o‘tkazib yuboring")
                            elif isinstance(inner, ast.Break):
                                steps.append("break bilan to‘xtating")
                            elif isinstance(inner, ast.Expr) and isinstance(inner.value, ast.Call):
                                if isinstance(inner.value.func, ast.Name) and inner.value.func.id == "print":
                                    printed = True
                                    if inner.value.args:
                                        steps.append(f"{_expr_uz(inner.value.args[0])} ni print qiling")
                                else:
                                    steps.append(_call_uz(inner.value))
                    elif isinstance(s, ast.Continue):
                        steps.append("continue bilan o‘tkazib yuboring")
                    elif isinstance(s, ast.Break):
                        steps.append("break bilan to‘xtating")
                    elif isinstance(s, ast.Expr) and isinstance(s.value, ast.Call):
                        if isinstance(s.value.func, ast.Name) and s.value.func.id == "print":
                            printed = True
                            if s.value.args:
                                steps.append(f"{_expr_uz(s.value.args[0])} ni print qiling")
        elif isinstance(stmt, ast.While):
            steps.append(f"while {_expr_uz(stmt.test)} sikli yozing")
            for s in stmt.body:
                if isinstance(s, ast.Expr) and isinstance(s.value, ast.Call):
                    if isinstance(s.value.func, ast.Name) and s.value.func.id == "print":
                        printed = True
                        if s.value.args:
                            steps.append(f"har safar {_expr_uz(s.value.args[0])} ni print qiling")
                elif isinstance(s, ast.AugAssign) and isinstance(s.target, ast.Name):
                    steps.append(f"{s.target.id} ni oshirib boring")
                elif isinstance(s, ast.Break):
                    steps.append("shart bajarilsa break qiling")
                elif isinstance(s, ast.Continue):
                    steps.append("continue qiling")
        elif isinstance(stmt, ast.If):
            steps.append(f"Agar {_expr_uz(stmt.test)} bo‘lsa")
            for s in stmt.body:
                if isinstance(s, ast.Continue):
                    steps.append("continue qiling")
                elif isinstance(s, ast.Break):
                    steps.append("break qiling")
                elif isinstance(s, ast.Expr) and isinstance(s.value, ast.Call) and isinstance(s.value.func, ast.Name) and s.value.func.id == "print":
                    printed = True
                    if s.value.args:
                        val = _expr_uz(s.value.args[0])
                        steps.append(f"«{val.strip(chr(39)).strip(chr(34))}» print qiling" if val.startswith(("'", '"')) else f"{val} ni print qiling")
            if stmt.orelse:
                steps.append("aks holda")
                for s in stmt.orelse:
                    if isinstance(s, ast.Expr) and isinstance(s.value, ast.Call) and isinstance(s.value.func, ast.Name) and s.value.func.id == "print":
                        printed = True
                        if s.value.args:
                            val = _expr_uz(s.value.args[0])
                            steps.append(f"«{val.strip(chr(39)).strip(chr(34))}» print qiling" if val.startswith(("'", '"')) else f"{val} ni print qiling")
        elif isinstance(stmt, ast.FunctionDef):
            # defer to existing clear_tasks for defs
            return None
        elif isinstance(stmt, ast.Try):
            steps.append("try/except yozing")
            for h in stmt.handlers:
                en = h.type.id if isinstance(h.type, ast.Name) else "Exception"
                steps.append(f"{en} bo‘lsa mos xabarni print qiling")
                printed = True
        elif isinstance(stmt, ast.With):
            steps.append("with open(...) bilan fayl oching va kerakli amallarni bajaring")
            printed = True

    if not steps:
        return None

    # input maslahati
    if stdin and not any("input" in s for s in steps):
        first = stdin.split("\n")[0]
        steps.insert(0, f"Dastur ishga tushganda input sifatida «{first}» beriladi")

    # "Agar ... bo‘lsa" + keyingi qadamni vergul bilan ulash
    merged: list[str] = []
    for s in steps:
        if merged and re.search(r"bo‘lsa$", merged[-1].rstrip()):
            nxt = s[:1].lower() + s[1:] if s else s
            merged[-1] = merged[-1].rstrip() + ", " + nxt
        else:
            merged.append(s)

    def _cap(s: str) -> str:
        if not s:
            return s
        if s.startswith(("«", '"', "'")):
            return s
        if re.match(r"^[a-z_][a-z0-9_]*\b", s):
            return s
        if re.match(r"^(for|while|if|try|with|import|from|agar)\b", s, re.I):
            return s[0].upper() + s[1:]
        return s[0].upper() + s[1:]

    text = ". ".join(_cap(s) for s in merged)
    text = re.sub(r"\s+", " ", text).strip()
    if not text.endswith((".", "!", "?")):
        text += "."
    if len(text) > 360:
        text = text[:357].rstrip(" .,;") + "…"
    return text


def polish_var_language(task: str) -> str:
    """'x ga 5 bering' → «x» nomli o‘zgaruvchiga 5 qiymatini bering."""
    t = task or ""
    # allaqachon yaxshi
    if "nomli o‘zgaruvchi" in t and " ga " not in re.sub(
        r"«[^»]+» nomli o‘zgaruvchiga", "", t
    ):
        # hali ham boshqa "y ga" qolgan bo‘lishi mumkin — pastga davom
        pass

    def repl_assign(m: re.Match) -> str:
        name, val = m.group(1), m.group(2).strip()
        # "input() orqali" allaqachon gap
        if "orqali" in val or "nomli" in val:
            return m.group(0)
        if val.endswith(" qiymatini"):
            val = val[: -len(" qiymatini")].strip()
        return f"«{name}» nomli o‘zgaruvchiga {val} qiymatini bering"

    t = re.sub(
        r"(?<![«\"\'\w])([a-zA-Z_]\w*)\s+ga\s+((?:(?!\.\s)[^.;])+?)\s+bering",
        repl_assign,
        t,
    )
    t = re.sub(
        r"(?<![«\"\'\w])([a-zA-Z_]\w*)\s+ni print qiling",
        r"«\1» o‘zgaruvchisini ekranga chiqaring (print)",
        t,
    )
    t = re.sub(
        r"«([a-zA-Z_]\w*)»\s+ni print qiling",
        r"«\1» o‘zgaruvchisini ekranga chiqaring (print)",
        t,
    )
    t = re.sub(
        r"(?<![«\"\'\w])([a-zA-Z_]\w*)\s+ni ekranga chiqaring",
        r"«\1» o‘zgaruvchisini ekranga chiqaring",
        t,
    )
    # "x ga avval 1, keyin 9 bering"
    t = re.sub(
        r"(?<![«\"\'\w])([a-zA-Z_]\w*)\s+ga\s+avval\s+",
        r"«\1» nomli o‘zgaruvchiga avval ",
        t,
    )
    return t


def maybe_rewrite(ex: dict, raw_task: str | None = None) -> str | None:
    """Agar shart chunarsiz bo‘lsa — yechimdan qayta yozadi."""
    cur = (ex.get("task") or "").strip()
    raw = (raw_task if raw_task is not None else cur) or ""
    if not (_is_unclear(cur) or _is_unclear(raw)):
        return None
    sol = (ex.get("solution") or "").strip()
    if sol.startswith("def "):
        return None  # clear_tasks def handler
    stdin = ex.get("stdin") or ""
    exp = None
    for c in ex.get("checks") or []:
        if c.get("type") == "stdout":
            exp = c.get("equals")
            break
    return task_from_solution(sol, stdin=stdin, exp=exp, title=ex.get("title") or "")
