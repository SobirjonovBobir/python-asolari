# -*- coding: utf-8 -*-
"""
Barcha mashqlar uchun aniq, boshlang‘ich darajadagi o‘zbekcha vazifa matni.
clarify_tasks.TASK_FIXES ustunlik qiladi; bu modul qolganlarini to‘ldiradi.
"""
from __future__ import annotations

import ast
import re
from typing import Any


def _py(v: Any) -> str:
    if isinstance(v, str):
        return repr(v)
    if isinstance(v, bool):
        return "True" if v else "False"
    if isinstance(v, list):
        return "[" + ", ".join(_py(x) for x in v) + "]"
    if isinstance(v, dict):
        items = ", ".join(f"{_py(k)}: {_py(val)}" for k, val in v.items())
        return "{" + items + "}"
    return repr(v)


def _fn_purpose(name: str) -> str:
    table = {
        "salom": "salom xabarini chiqarsin yoki qaytarsin",
        "besh": "5 sonini qaytarsin",
        "kv": "berilgan sonning kvadratini (x*x) qaytarsin",
        "qoshing": "ikkita sonni qo‘shib yig‘indisini qaytarsin",
        "chiqar": "berilgan qiymatni print qilsin",
        "ism": "ism matnini qaytarsin",
        "nol": "0 qiymatini qaytarsin",
        "ikki_barobar": "sonni 2 ga ko‘paytirib qaytarsin",
        "juftmi": "son juft bo‘lsa True, aks holda False qaytarsin",
        "ayir": "birinchi sondan ikkinchisini ayirib qaytarsin",
        "max2": "ikkita sondan kattasini qaytarsin",
        "len_soz": "matn uzunligini (len) qaytarsin",
        "print_n": "berilgan sonni print qilsin",
        "yigindi3": "uchta son yig‘indisini qaytarsin",
        "teskarisi": "bool qiymatning teskarisini (not) qaytarsin",
        "salom_ism": "ismni olib «Salom, ...» matnini yasasin",
        "daraja": "sonni darajaga ko‘tarsin (default daraja=2)",
        "abs_oddiy": "sonning absolyut qiymatini qaytarsin (manfiy bo‘lsa musbat)",
        "oxirgi": "ro‘yxatning oxirgi elementini qaytarsin",
        "faktorial": "n! faktorialni hisoblab qaytarsin",
        "teskari": "matnni teskari qilib qaytarsin",
        "yigindi": "ro‘yxatdagi sonlar yig‘indisini qaytarsin",
        "juftlar": "ro‘yxatdan faqat juft sonlarni ajratib qaytarsin",
        "nechta": "matnda berilgan harf necha marta uchrashini qaytarsin",
        "minmax": "ro‘yxatdagi eng kichik va eng katta qiymatni [min, max] ko‘rinishida qaytarsin",
        "takrorla": "matnni n marta takrorlab qaytarsin",
        "is_adult": "yosh 18 yoki undan katta bo‘lsa True qaytarsin",
        "orta": "ikkita sonning o‘rtacha qiymatini qaytarsin",
        "yig": "*args orqali kelgan barcha sonlar yig‘indisini qaytarsin",
        "list_len": "ro‘yxat uzunligini qaytarsin",
        "ism_ol": "**kwargs dan «ism» kalitini olib qaytarsin",
        "safe_int": "matnni int qilishga urinib, xato bo‘lsa 0 qaytarsin",
        "bir": "birinchi argumentni (*args[0]) qaytarsin",
        "ol": "**kwargs dan get('ism') qiymatini qaytarsin",
        "kalitlar": "**kwargs kalitlarini sorted qilib qaytarsin",
        "chiq": "barcha *args elementlarini alohida qatorda print qilsin",
        "eng_katta": "*args ichidan eng katta sonni qaytarsin",
        "info": "**kwargs dan ism va yoshni olib «ism=...;yosh=...» matnini qaytarsin",
        "yig_juft": "*args ichidan faqat juft sonlar yig‘indisini qaytarsin",
        "stat": "count/sum/avg lug‘atini qaytarsin",
        "config": "host va port dan «host:port» matnini qaytarsin",
        "tahlil": "ro‘yxat bo‘yicha soni/yigindi/juftlar lug‘atini qaytarsin",
        "birlashtir": "*args matnlarini bo‘sh joysiz ulab qaytarsin",
        "show": "kwargs ichidan 'x' qiymatini print qilsin",
        "yosh_ok": "matnni int qilib 0..120 oralig‘ida ekanini tekshirib True/False qaytarsin",
        "calc": "ikki son va amal (+ - * /) bo‘yicha hisoblasin; /0 da 'xato' qaytarsin",
        "safe_loads": "json.loads urinish; xato bo‘lsa None qaytarsin",
    }
    return table.get(name, "vazifa shartiga mos ishni bajarsin")


def _task_from_expr(code: str, equals: Any, title: str = "", eid: str = "") -> str:
    m = re.match(r"^(\w+)\((.*)\)\s*$", code.strip(), re.S)
    if not m:
        return f"{code} ifodasi {_py(equals)} natijasini bersin. Kerakli funksiyani yozing."
    name, args = m.group(1), m.group(2).strip()
    purpose = _fn_purpose(name)
    # L11: nechta(*args) — argumentlar soni
    if name == "nechta" and (eid.startswith("l11") or (args and "'" not in args and '"' not in args)):
        purpose = "*args orqali kelgan argumentlar sonini (len) qaytarsin"
    eq = _py(equals)
    parts = [
        f"{name}() nomli funksiya yarating: u {purpose}.",
        f"Tekshiruv: {name}({args}) chaqirilganda natija {eq} bo‘lishi kerak.",
        "Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
    ]
    if name in ("yig", "bir", "eng_katta") or (name == "nechta" and eid.startswith("l11")):
        parts.insert(1, "Funksiya *args qabul qilsin (istalgancha argument).")
    if name in ("ol", "kalitlar", "ism_ol"):
        parts.insert(1, "Funksiya **kwargs qabul qilsin (kalit=qiymat).")
    if "default" in (title or "").lower() or "n=2" in (title or ""):
        parts.insert(
            1,
            "Ikkinchi parametrga default qiymat bering (masalan n=2), chaqiruvda berilmasa shu ishlasin.",
        )
    if name == "daraja" and not args.count(","):
        parts.insert(
            1,
            "def daraja(x, n=2) ko‘rinishida yozing: n berilmasa kvadrat hisoblansin.",
        )
    return " ".join(parts)


def _task_from_def_stdout(sol: str, exp: Any, title: str = "") -> str:
    m = re.search(r"def\s+(\w+)\(([^)]*)\)", sol)
    if not m:
        return ""
    name, params = m.group(1), m.group(2).strip()
    purpose = _fn_purpose(name)
    call = re.search(rf"{name}\(([^)]*)\)", sol)
    args = call.group(1) if call else ""
    lines = [
        f"{name}() funksiyasini yozing: {purpose}.",
    ]
    if params:
        lines.append(f"Parametrlar: {params}.")
    if call:
        lines.append(f"Keyin {name}({args}) ni chaqiring.")
    if exp is not None:
        lines.append(f"Ekranga {_py(exp) if not isinstance(exp, str) else exp} chiqishi kerak.")
    return " ".join(lines)


def _looks_code_dump(t: str) -> bool:
    t = (t or "").strip()
    if not t:
        return True
    if re.match(r"^def\s+\w+", t):
        return True
    if re.search(r"\w+\([^)]*\)\s*==", t):
        return True
    if t.count(";") >= 1 and len(t) < 90 and "bering" not in t.lower():
        return True
    if re.match(r"^[\w.]+\([^)]*\)\s*$", t) and "print" not in t:
        return True
    if re.search(r"→", t) and len(t) < 60:
        return True
    if len(t) < 35 and ("==" in t or "%" in t or "range" in t):
        return True
    if re.search(r"\b(strip|replace|lower|upper|count|find)\s*,", t):
        return True
    if re.search(r"—\s*(print|ikki|sorted)", t, re.I):
        return True
    if re.match(r"^(import |from |loads |dumps )", t):
        return True
    return False


def _enrich_short_stdout(task: str, exp: Any, title: str) -> str:
    """Qisqa lekin tushunarli vazifani biroz aniqroq qiladi."""
    t = (task or "").strip().rstrip(".")
    if not t:
        return t
    # allaqachon yaxshi
    if any(k in t.lower() for k in ("yarating", "funksiya", "bering", "hisoblab", "o‘qing", "oqib")):
        if len(t) >= 40:
            return t + ("." if not t.endswith((".", "!", "?")) else "")
    tip = ""
    if exp is not None and str(exp) and str(exp) not in t:
        # spoiler bermaslik uchun faqat murakkabroq natijada eslatma
        if "\n" in str(exp):
            tip = " Natija bir necha qatorda chiqishi kerak."
        elif len(str(exp)) <= 20 and not re.search(re.escape(str(exp)), t):
            tip = f" Kutilgan chiqish: {exp}."
    if tip and "Kutilgan" not in t and "chiqishi kerak" not in t.lower():
        # faqat juda qisqa bo‘lsa qo‘shamiz
        if len(t) < 55:
            return t + "." + tip
    return t + ("." if not t.endswith((".", "!", "?")) else "")


def make_clear_task(ex: dict, raw_task: str | None = None) -> str | None:
    """Aniq vazifa matni yoki None (mavjud matn qolsin)."""
    checks = ex.get("checks") or []
    title = ex.get("title") or ""
    sol = (ex.get("solution") or "").strip()
    cur = (ex.get("task") or "").strip()
    raw = (raw_task if raw_task is not None else cur) or ""

    exprs = [c for c in checks if c.get("type") == "expr"]
    if exprs:
        c0 = exprs[0]
        return _task_from_expr(
            c0.get("code") or "",
            c0.get("equals"),
            title,
            eid=ex.get("id") or "",
        )

    exp = None
    for c in checks:
        if c.get("type") == "stdout":
            exp = c.get("equals")
            break

    if sol.startswith("def ") and (
        _looks_code_dump(cur) or _looks_code_dump(raw) or "chaqiring" in cur.lower()
    ):
        t = _task_from_def_stdout(sol, exp, title)
        if t:
            return t

    # salom_ism / print(salom()) kabi
    m = re.match(r"^(\w+)\((.*)\)\s*$", raw.strip().split("→")[0].strip())
    if m and sol.startswith("def "):
        return _task_from_expr(m.group(0), exp if exp is not None else True, title)

    if _looks_code_dump(cur) or _looks_code_dump(raw):
        # title + solution asosida
        if sol.startswith("def "):
            t = _task_from_def_stdout(sol, exp, title)
            if t:
                return t
        # try parse raw == form
        m = re.search(r"(\w+\([^)]*\))\s*==\s*(.+)$", raw.strip())
        if m:
            try:
                eq = ast.literal_eval(m.group(2).strip())
            except Exception:
                eq = m.group(2).strip()
            return _task_from_expr(m.group(1), eq, title)
        # yil%4==0 style
        if "kabisa" in (title or "").lower() or "yil%" in raw:
            return (
                "yil ga 2024 bering. Agar yil % 4 == 0 bo‘lsa «kabisa», "
                "aks holda «oddiy» so‘zini mos qilib chiqaring "
                "(masalan kabisa-oddiy formatida vazifa tekshiruviga qarang)."
            )
        from rewrite_tasks import maybe_rewrite

        rewritten = maybe_rewrite(ex, raw_task=raw)
        if rewritten:
            return rewritten

    # Chunarsiz / telegraphic shartlarni yechimdan qayta yozish
    from rewrite_tasks import maybe_rewrite, _is_unclear

    if _is_unclear(cur) or _is_unclear(raw):
        rewritten = maybe_rewrite(ex, raw_task=raw)
        if rewritten:
            return rewritten

    # Qisqa stdout vazifalarini yumshoq yaxshilash
    if exp is not None and len(cur) < 50 and not cur.startswith("def "):
        return _enrich_short_stdout(cur, exp, title)

    return None


def apply_clear_task(ex: dict, raw_task: str | None = None) -> dict:
    neu = make_clear_task(ex, raw_task=raw_task)
    if neu:
        ex["task"] = neu
    return ex
