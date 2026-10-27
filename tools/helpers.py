# -*- coding: utf-8 -*-
"""Mashq yig‘ish yordamchilari."""

def stdout(text):
    return [{"type": "stdout", "equals": text}]

def var(name, value, extra=None):
    checks = [{"type": "var", "name": name, "equals": value}]
    if extra:
        checks.extend(extra)
    return checks

def expr(code, value, extra=None):
    checks = [{"type": "expr", "code": code, "equals": value}]
    if extra:
        checks.extend(extra)
    return checks

def file_eq(path, text):
    return [{"type": "file", "path": path, "equals": text}]

def contains(text, more=None):
    checks = [{"type": "code_contains", "text": text}]
    if more:
        checks.extend(more)
    return checks

def E(lid, n, level, title, task, checks, hint="", starter="", stdin="", setup="", solution=""):
    return {
        "id": f"l{lid}-e{n:02d}",
        "level": level,
        "title": title,
        "task": task,
        "hint": hint,
        "starter": starter,
        "stdin": stdin,
        "setup": setup,
        "solution": solution,
        "checks": checks,
    }

def block(oson, ortacha, qiyin):
    out = []
    n = 1
    for group, level in ((oson, "oson"), (ortacha, "ortacha"), (qiyin, "qiyin")):
        for item in group:
            item["n"] = n
            item["level"] = level
            n += 1
            out.append(item)
    assert n == 31, n
    return out

def pack(lid, rows):
    return [
        E(
            lid,
            row["n"],
            row["level"],
            row["title"],
            row["task"],
            row["checks"],
            hint=row.get("hint", ""),
            starter=row.get("starter", ""),
            stdin=row.get("stdin", ""),
            setup=row.get("setup", ""),
            solution=row.get("solution", ""),
        )
        for row in rows
    ]

def ex(**kw):
    return kw
