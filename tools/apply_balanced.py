# -*- coding: utf-8 -*-
"""Darslardagi mashqlarni balanced bank bilan almashtirish."""
from balanced_l1_8 import lesson_1, lesson_2, lesson_3, lesson_4, lesson_5
from balanced_l6_8 import lesson_6, lesson_7, lesson_8
from balanced_l9_16 import lesson_9, lesson_10, lesson_11, lesson_12, lesson_13
from balanced_l14_16 import lesson_14, lesson_15, lesson_16

BANK = {
    1: lesson_1,
    2: lesson_2,
    3: lesson_3,
    4: lesson_4,
    5: lesson_5,
    6: lesson_6,
    7: lesson_7,
    8: lesson_8,
    9: lesson_9,
    10: lesson_10,
    11: lesson_11,
    12: lesson_12,
    13: lesson_13,
    14: lesson_14,
    15: lesson_15,
    16: lesson_16,
}


def apply_balanced(lessons):
    for L in lessons:
        fn = BANK.get(L["id"])
        if not fn:
            continue
        exs = fn()
        assert len(exs) == 30, (L["id"], len(exs))
        L["exercises"] = exs
    return lessons
