# -*- coding: utf-8 -*-
"""Sayt uchun darslar va mashqlarni js/data.js ga yozadi."""
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))

from lessons_early import lessons as early
from lessons_late import lessons as late
from enrich import enrich_lessons
from lesson_content import apply_rich_content
from expand_teach import expand_lessons
from clarify_tasks import clarify_lessons
from teach_outputs import annotate_lessons
from apply_balanced import apply_balanced

lessons = apply_rich_content(early() + late())
lessons = apply_balanced(lessons)
lessons = enrich_lessons(lessons)
lessons = clarify_lessons(lessons)
lessons = expand_lessons(lessons)
lessons = annotate_lessons(lessons)

assert len(lessons) == 16, len(lessons)
bad_answers = []
spoiler_tasks = []
for L in lessons:
    assert len(L["exercises"]) == 30, (L["id"], len(L["exercises"]))
    levels = [e["level"] for e in L["exercises"]]
    assert levels.count("oson") == 10
    assert levels.count("ortacha") == 10
    assert levels.count("qiyin") == 10
    assert L["id"] == lessons.index(L) + 1
    for e in L["exercises"]:
        sol = (e.get("solution") or "").strip()
        assert sol, e["id"]
        # print(2) yolg‘iz bo‘lmasin
        if re.fullmatch(r"print\(-?\d+(\.\d+)?\)", sol):
            bad_answers.append(e["id"])
        exp = None
        for c in e.get("checks") or []:
            if c.get("type") == "stdout":
                exp = str(c.get("equals"))
                break
        task = e.get("task") or ""
        if exp and re.search(r"→\s*" + re.escape(exp) + r"\s*$", task):
            spoiler_tasks.append(e["id"])
        if exp and re.fullmatch(r"-?\d+(\.\d+)?", exp):
            if re.search(r"\(" + re.escape(exp) + r"\)\s*$", task):
                spoiler_tasks.append(e["id"])

if bad_answers:
    raise SystemExit("Yomon solution (faqat print son): " + ", ".join(bad_answers[:20]))
if spoiler_tasks:
    print("OGOHLANTIRISH spoiler task:", len(set(spoiler_tasks)), "ta")

out = Path(__file__).resolve().parents[1] / "js" / "data.js"
out.parent.mkdir(parents=True, exist_ok=True)
text = "const COURSE = " + json.dumps({"lessons": lessons}, ensure_ascii=False, indent=2) + ";\n"
out.write_text(text, encoding="utf-8")
print("Wrote", out)
print("lessons", len(lessons), "exercises", sum(len(l["exercises"]) for l in lessons))
# Namuna: l4 Soat
for L in lessons:
    if L["id"] == 4:
        for e in L["exercises"]:
            if e["title"] in ("Soat", "Daqiqa qoldiq", "Perimetr"):
                print("---", e["id"], e["title"])
                print("TASK:", e["task"])
                print("SOL:\n" + e["solution"])
for L in lessons:
    print(f"  {L['id']:2}. {L['title']}")
