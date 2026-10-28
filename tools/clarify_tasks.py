# -*- coding: utf-8 -*-
"""
Mashq savollarini aniq qiladi (spoiler bermasdan) va yomon yechimlarni tuzatadi.
"""
from __future__ import annotations

import re

from polish import (
    polish_exercise,
    _strip_result_hints,
    _is_code_dump,
    _humanize_code_task,
    TITLE_FIXES,
)
from extra_fixes import TASK_EXTRA, SOL_EXTRA

# Qo‘lda yozilgan aniq savollar
TASK_FIXES: dict[str, str] = {
    "l2-e08": "nolinchi nomli o‘zgaruvchiga 0 bering va uni print qiling.",
    "l3-e04": "input() dan ism o‘qing va o‘qilgan qiymatni print qiling.",
    "l5-e04": 's ga "ok" bering. Agar s "yoq" ga teng bo‘lmasa («ok» != «yoq»), mos xabar print qiling.',
    "l5-e05": "flag ga False bering. Agar not flag True bo‘lsa, mos xabar print qiling.",
    "l5-e13": "a ga 3, b ga 8 bering. Ikkalasidan kattasini max() bilan topib print qiling.",
    "l5-e27": (
        "input() dan yilni butun son qilib o‘qing (masalan 2024). "
        "Agar yil 4 ga bo‘linsa (yil % 4 == 0) «kabisa», aks holda «oddiy» print qiling."
    ),
    "l5-e29": 's ga "salom" bering. Agar "x" harfi s ichida bo‘lmasa, «yoq» print qiling (not in).',
    "l10-e01": (
        "salom() nomli funksiya yarating: ichida «salom» so‘zini print qilsin. "
        "Keyin salom() ni chaqiring."
    ),
    "l10-e16": (
        "salom_ism(ism) funksiyasini yozing: «Salom, » va ismni ulab print qilsin. "
        "salom_ism('Ali') ni chaqiring."
    ),
    "l10-e20": (
        "oxirgi() nomli funksiya yarating. U ro‘yxatni qabul qilsin va oxirgi elementini "
        "return qilsin. Masalan oxirgi([5, 6, 7]) chaqirilganda 7 qaytarsin."
    ),
    "l10-e30": (
        "salom(ism='Mehmon') funksiyasini yozing: default ism «Mehmon». "
        "«Salom, » + ism ni print qilsin. Argument bermay salom() ni chaqiring."
    ),
    "l6-e06": 's ga "ok" bering. for sikli bilan har bir harfni alohida qatorda print qiling.',
    "l6-e14": "while yordamida 1 dan 6 gacha (6 kirmaydi) sonlarni chiqaring yoki darsdagi «while» misoliga mos natija chiqaring.",
    "l7-e01": "sonlar nomli ro‘yxatga [1, 2, 3] bering va ro‘yxatni print qiling.",
    "l7-e05": "a ga [1] bering. Oxiriga 5 ni append qiling va ro‘yxatni print qiling.",
    "l7-e07": "for bilan [10, 20] ro‘yxatidagi har bir elementni alohida qatorda print qiling.",
    "l7-e13": "a ga [1, 2, 3, 4] bering. a[0:2] kesimini (slice) print qiling.",
    "l7-e14": "Bo‘sh a = [] yarating. 8 va 9 ni append qiling, ro‘yxatni print qiling.",
    "l7-e16": "input orqali 2 ta son o‘qing (stdin), ularni list qilib print qiling.",
    "l7-e24": "[1, 2] + [3] ni hisoblab print qiling (ikki ro‘yxatni qo‘shish).",
    "l7-e25": "a ga [1, 2, 3] bering. pop() qiling (oxirgi element ketadi), qolgan ro‘yxatni print qiling.",
    "l7-e28": "a ga [1, 2, 1, 1] bering. 1 qiymati necha marta uchrashini count bilan print qiling.",
    "l8-e01": "a ga [2, 3] bering. Boshiga (indeks 0) 1 ni insert qiling va print qiling.",
    "l8-e02": "a ga [1, 3] bering. Indeks 1 ga 2 ni insert qiling va print qiling.",
    "l8-e03": "a ga [1, 2, 3] bering. 2 ni remove qiling va qolgan ro‘yxatni print qiling.",
    "l8-e04": "a ga [1, 2, 3] bering. pop() qiling, qolgan ro‘yxatni print qiling.",
    "l8-e05": "a ga [10, 20, 30] bering. Birinchi elementni pop(0) bilan olib tashlang va qolgan ro‘yxatni print qiling.",
    "l8-e06": "a ga [1, 2, 3] bering. del a[1] qiling va qolgan ro‘yxatni print qiling.",
    "l8-e07": "a ga [1, 2, 3] bering. clear() qilib bo‘shating va print qiling.",
    "l8-e08": "a ga [1] bering. extend([2, 3]) qiling va print qiling.",
    "l8-e09": "a ga [4, 5, 6] bering. 5 ning indeksini index() bilan print qiling.",
    "l8-e10": "a ga [1, 1, 2] bering. 1 necha marta borligini count bilan print qiling.",
    "l8-e11": "a ga [3, 1, 2] bering. sort() qilib o‘sish tartibida joylashtiring va print qiling.",
    "l8-e12": "a ga [3, 1, 2] bering. sorted(a) bilan yangi saralangan ro‘yxatni print qiling (asl saqlansin).",
    "l8-e14": "a ga [1, 2, 3] bering. map bilan har birini 2 ga ko‘paytirib, list qilib print qiling.",
    "l8-e15": "a ga [1, 2, 3, 4, 5, 6] bering. filter bilan juftlarini olib, list qilib print qiling.",
    "l8-e16": "a ga [2, 3, 4] bering. map bilan har birining kvadratini hisoblab, list qilib print qiling.",
    "l8-e13": "a ga [1, 2, 3] bering. reverse() qiling va print qiling.",
    "l8-e17": "a ga [2, 1, 2] bering. Birinchi uchragan 2 ni remove qiling va ro‘yxatni print qiling.",
    "l8-e18": "a ga [1, 2] bering. insert(2, 3) qiling (oxiriga 3) va print qiling.",
    "l8-e19": 'a ga ["a"] bering. extend(["b", "c"]) qiling va print qiling.',
    "l8-e21": "a ga [1, 2, 3] bering. sort(reverse=True) qilib teskari tartibda print qiling.",
    "l8-e22": "a ga [3, 12, 7, 20] bering. 10 dan katta elementlarni filter bilan olib, list qilib print qiling.",
    "l8-e23": 'a ga [1, 2] bering. map(str, a) bilan matn ro‘yxatiga o‘girib print qiling.',
    "l8-e24": "a ga [3, 1, 2] bering. sort() qiling, keyin 4 ni append qiling va print qiling.",
    "l8-e25": "a ga [0, 1, 2, 3] bering. del a[1:3] qiling va qolgan ro‘yxatni print qiling.",
    "l8-e27": "a ga [1, 2, 3, 4] bering. Avval juftlarini filter qiling, keyin map bilan kvadratini oling; list qilib print qiling.",
    "l8-e30": "[x * 10 for x in [1, 2, 3]] list comprehension ni hisoblab print qiling.",
    "l9-e07": "s ga {1, 2} bering. add(3) qiling va sorted(s) ni print qiling.",
    "l9-e08": "1 in {1, 2} ifodasini hisoblab print qiling (True/False).",
    "l9-e10": "tuple([1, 2]) ni hisoblab print qiling.",
    "l9-e15": "{1, 2} va {2, 3} to‘plamlarini | (union) bilan birlashtiring, sorted qilib print qiling.",
    "l9-e16": "{1, 2, 3} va {2, 3, 4} kesishmasini & (intersection) bilan toping, sorted qilib print qiling.",
    "l9-e17": "{1, 2, 3} dan {2} ni ayiring (difference / -), sorted qilib print qiling.",
    "l9-e18": "set([1, 1, 2, 2, 3]) yarating (takrorlar yo‘qoladi), sorted qilib print qiling.",
    "l9-e19": "{1, 2}.issubset({1, 2, 3}) natijasini print qiling.",
    "l9-e21": "{1, 2, 3}.issuperset({1, 2}) natijasini print qiling.",
    "l9-e26": (
        "2 elementi (1, 2, 3) tupleida bormi — in operatori bilan tekshirib print qiling "
        "(True yoki False)."
    ),
    "l9-e29": "Ichma-ich tuple: ((1, 2), (3, 4)). Indeks [1][0] dagi elementni print qiling.",
    "l10-e05": "chiqar() funksiyasini yozing: ichida 7 ni print qilsin. Keyin chiqar() ni chaqiring.",
    "l10-e13": "print_n(n) funksiyasini yozing: n ni print qilsin. print_n(4) ni chaqiring.",
    "l11-e14": (
        "def qoshing(a, b) yozing (a+b qaytarsin). nums=[2, 4] bering va "
        "qoshing(*nums) natijasini print qiling (* ro‘yxatni ochadi)."
    ),
    "l11-e25": (
        'def ism_ol(**kwargs) yozing: kwargs["ism"] ni qaytarsin. '
        'malumot={"ism":"Bob","yosh":20} bering va ism_ol(**malumot) ni print qiling.'
    ),
    "l13-e03": 'try ichida int("5") qiling va natijani print qiling.',
    "l13-e06": 'Bo‘sh lug‘atdan ["a"] olishni try/except KeyError bilan ushlang va «yoq» print qiling.',
    "l13-e07": 'try ichida n = int("2") qiling; except bo‘lmasa else da n ni print qiling.',
    "l13-e14": "n ga 2 bering. 10 // n ni hisoblab print qiling (xavfsiz butun bo‘lish).",
    "l13-e15": 'int("z") xatosini try/except ValueError bilan ushlang va «son» print qiling.',
    "l13-e17": "a ga [1, 2, 3] bering. a[1] ni print qiling (xatosiz indeks).",
    "l13-e18": "a ga [1] bering. a[5] ni try/except IndexError bilan ushlang; xato bo‘lsa -1 print qiling.",
    "l13-e19": 'float("3.5") ni hisoblab print qiling.',
    "l13-e20": 'float("x") xatosini try/except ValueError bilan ushlang va «xato» print qiling.',
    "l13-e22": (
        'safe_int(matn) funksiyasini yozing: int(matn) muvaffaqiyatli bo‘lsa sonni qaytarsin, '
        'ValueError bo‘lsa 0 qaytarsin. Keyin safe_int("x") ni print qiling.'
    ),
    "l13-e23": (
        'safe_int(matn) funksiyasini yozing (xato bo‘lsa 0). '
        'safe_int("12") ni chaqirib natijani print qiling.'
    ),
    "l13-e11": (
        'safe_int(matn) funksiyasini yozing: int ga o‘girish mumkin bo‘lsa sonni, '
        'xato bo‘lsa 0 qaytarsin. safe_int("x") ni print qiling.'
    ),
    "l11-e15": (
        "info(**kwargs) funksiyasini yozing: kwargs dan ism va yoshni olib "
        "ism=Ali yosh=20 ko‘rinishidagi matnni (ism=...;yosh=...) qaytarsin. "
        "info(ism='Ali', yosh=20) chaqirilganda shu formatda return qiling."
    ),
    "l15-e12": (
        "json kutubxonasini import qiling. "
        "Matn {\"b\": 1, \"a\": 2} ni json.loads qiling va kalitlarini sorted qilib print qiling."
    ),
    "l13-e29": 'd ga {} bering. d.get("a", 1) ni print qiling (KeyError o‘rniga get).',
    "l13-e30": 's ga "3" bering. int(s)*2 ni hisoblab print qiling.',
    "l14-e04": 'd ga {"a": 1} bering. "a" kaliti lug‘atda bor-yo‘qligini in bilan tekshirib print qiling.',
    "l14-e05": 'd ga {"b": 1, "a": 2} bering. Kalitlarini sorted(d.keys()) qilib print qiling.',
    "l14-e06": 'd ga {"a": 1, "b": 2} bering. list(d.values()) ni print qiling.',
    "l14-e08": 'd ga {"x": 9} bering. d.get("x") ni print qiling.',
    "l14-e11": 'd ga {"a": 1} bering. for k, v in d.items() bilan kalit va qiymatni alohida qatorda print qiling.',
    "l14-e12": 'd ga {"a": 1} bering. update({"b": 2}) qiling, keyin sorted(d.keys()) ni print qiling.',
    "l14-e24": 'd ga {"a": 1} bering. update({"a": 9}) qiling (ustun qiymat), d["a"] ni print qiling.',
    "l14-e18": 'dict.fromkeys(["a", "b"], 0) yasang va print qiling.',
    "l14-e20": 'd ga {"a": 1, "b": 2, "c": 3} bering. sum(d.values()) ni print qiling.',
    "l14-e23": (
        'Ikki lug‘atni | bilan birlashtiring: {"a": 1} va {"b": 2}. '
        'Natijadan "b" kaliti qiymatini print qiling.'
    ),
    "l14-e27": (
        'd ga {"a": 1, "b": 10, "c": 5} bering. '
        "Qiymati >= 5 bo‘lgan kalitlarni toping, sorted qilib print qiling."
    ),
    "l14-e28": (
        'Bo‘sh d yarating. setdefault("nums", []) bilan list qo‘ying, '
        'unga 3 ni append qiling, d["nums"] ni print qiling.'
    ),
    "l14-e29": "1, 2, 3 uchun {n: n*n ...} lug‘at yarating (dict comprehension) va print qiling.",
    "l14-e30": 'talaba={"ism":"Omar","ball":95}. Ekranga Omar:95 chiqaring.',
}
TASK_FIXES.update(TASK_EXTRA)

HINT_FIXES: dict[str, str] = {
    "l9-e15": "a | b yoki a.union(b); natijani sorted(...).",
    "l9-e16": "a & b yoki a.intersection(b).",
    "l14-e23": "Bu set emas — lug‘atlar: d1 | d2 keyin [\"b\"].",
    "l14-e27": "items() + shart v >= 5 + sorted.",
    "l14-e28": "setdefault kalit yo‘q bo‘lsa list yaratadi.",
    "l15-e23": "json.dumps(obj, sort_keys=True)",
    "l8-e14": "list(map(lambda x: x*2, a))",
    "l8-e15": "list(filter(lambda x: x%2==0, a))",
    "l11-e14": "qoshing(*nums) — yulduzcha ochadi.",
}

SOL_FIXES: dict[str, str] = {
    "l5-e13": "a = 3\nb = 8\nprint(max(a, b))",
    "l5-e27": 'yil = int(input())\nif yil % 4 == 0:\n    print("kabisa")\nelse:\n    print("oddiy")',
    "l5-e29": 's = "salom"\nif "x" not in s:\n    print("yoq")',
    "l10-e01": "def salom():\n    print('salom')\nsalom()",
    "l10-e16": "def salom_ism(ism):\n    print('Salom, ' + ism)\nsalom_ism('Ali')",
    "l10-e20": "def oxirgi(a):\n    return a[-1]",
    "l10-e30": "def salom(ism='Mehmon'):\n    print('Salom, ' + ism)\nsalom()",
    "l6-e06": 's = "ok"\nfor harf in s:\n    print(harf)',
    "l6-e14": "n = 1\nwhile n < 6:\n    print(n)\n    n += 1",
    "l7-e05": "a = [1]\na.append(5)\nprint(a)",
    "l7-e07": "for x in [10, 20]:\n    print(x)",
    "l7-e13": "a = [1, 2, 3, 4]\nprint(a[0:2])",
    "l7-e14": "a = []\na.append(8)\na.append(9)\nprint(a)",
    "l7-e16": "a = int(input())\nb = int(input())\nprint([a, b])",
    "l7-e24": "print([1, 2] + [3])",
    "l7-e25": "a = [1, 2, 3]\na.pop()\nprint(a)",
    "l7-e28": "a = [1, 2, 1, 1]\nprint(a.count(1))",
    "l8-e01": "a = [2, 3]\na.insert(0, 1)\nprint(a)",
    "l8-e02": "a = [1, 3]\na.insert(1, 2)\nprint(a)",
    "l8-e03": "a = [1, 2, 3]\na.remove(2)\nprint(a)",
    "l8-e04": "a = [1, 2, 3]\na.pop()\nprint(a)",
    "l8-e05": "a = [10, 20, 30]\na.pop(0)\nprint(a)",
    "l8-e06": "a = [1, 2, 3]\ndel a[1]\nprint(a)",
    "l8-e07": "a = [1, 2, 3]\na.clear()\nprint(a)",
    "l8-e08": "a = [1]\na.extend([2, 3])\nprint(a)",
    "l8-e09": "a = [4, 5, 6]\nprint(a.index(5))",
    "l8-e10": "a = [1, 1, 2]\nprint(a.count(1))",
    "l8-e11": "a = [3, 1, 2]\na.sort()\nprint(a)",
    "l8-e12": "a = [3, 1, 2]\nprint(sorted(a))",
    "l8-e13": "a = [1, 2, 3]\na.reverse()\nprint(a)",
    "l8-e14": "a = [1, 2, 3]\nprint(list(map(lambda x: x * 2, a)))",
    "l8-e15": "a = [1, 2, 3, 4, 5, 6]\nprint(list(filter(lambda x: x % 2 == 0, a)))",
    "l8-e16": "a = [2, 3, 4]\nprint(list(map(lambda x: x * x, a)))",
    "l8-e17": "a = [2, 1, 2]\na.remove(2)\nprint(a)",
    "l8-e18": "a = [1, 2]\na.insert(2, 3)\nprint(a)",
    "l8-e19": 'a = ["a"]\na.extend(["b", "c"])\nprint(a)',
    "l8-e21": "a = [1, 2, 3]\na.sort(reverse=True)\nprint(a)",
    "l8-e22": "a = [3, 12, 7, 20]\nprint(list(filter(lambda x: x > 10, a)))",
    "l8-e23": "a = [1, 2]\nprint(list(map(str, a)))",
    "l8-e24": "a = [3, 1, 2]\na.sort()\na.append(4)\nprint(a)",
    "l8-e25": "a = [0, 1, 2, 3]\ndel a[1:3]\nprint(a)",
    "l8-e27": "a = [1, 2, 3, 4]\njuft = list(filter(lambda x: x % 2 == 0, a))\nprint(list(map(lambda x: x * x, juft)))",
    "l8-e30": "print([x * 10 for x in [1, 2, 3]])",
    "l9-e07": "s = {1, 2}\ns.add(3)\nprint(sorted(s))",
    "l9-e08": "print(1 in {1, 2})",
    "l9-e10": "print(tuple([1, 2]))",
    "l9-e15": "print(sorted({1, 2} | {2, 3}))",
    "l9-e16": "print(sorted({1, 2, 3} & {2, 3, 4}))",
    "l9-e17": "print(sorted({1, 2, 3} - {2}))",
    "l9-e18": "print(sorted(set([1, 1, 2, 2, 3])))",
    "l9-e19": "print({1, 2}.issubset({1, 2, 3}))",
    "l9-e21": "print({1, 2, 3}.issuperset({1, 2}))",
    "l9-e26": "print(2 in (1, 2, 3))",
    "l9-e29": "print(((1, 2), (3, 4))[1][0])",
    "l10-e05": "def chiqar():\n    print(7)\nchiqar()",
    "l10-e13": "def print_n(n):\n    print(n)\nprint_n(4)",
    "l11-e14": "def qoshing(a, b):\n    return a + b\nnums = [2, 4]\nprint(qoshing(*nums))",
    "l11-e25": 'def ism_ol(**kwargs):\n    return kwargs["ism"]\nmalumot = {"ism": "Bob", "yosh": 20}\nprint(ism_ol(**malumot))',
    "l13-e03": 'print(int("5"))',
    "l13-e06": 'try:\n    print({}["a"])\nexcept KeyError:\n    print("yoq")',
    "l13-e07": 'try:\n    n = int("2")\nexcept ValueError:\n    n = None\nelse:\n    print(n)',
    "l13-e14": "n = 2\nprint(10 // n)",
    "l13-e15": 'try:\n    print(int("z"))\nexcept ValueError:\n    print("son")',
    "l13-e17": "a = [1, 2, 3]\nprint(a[1])",
    "l13-e18": "a = [1]\ntry:\n    print(a[5])\nexcept IndexError:\n    print(-1)",
    "l13-e19": 'print(float("3.5"))',
    "l13-e20": 'try:\n    print(float("x"))\nexcept ValueError:\n    print("xato")',
    "l13-e22": 'def safe_int(matn):\n    try:\n        return int(matn)\n    except ValueError:\n        return 0\nprint(safe_int("x"))',
    "l13-e23": 'def safe_int(matn):\n    try:\n        return int(matn)\n    except ValueError:\n        return 0\nprint(safe_int("12"))',
    "l13-e29": 'd = {}\nprint(d.get("a", 1))',
    "l13-e30": 's = "3"\nprint(int(s) * 2)',
    "l14-e04": 'd = {"a": 1}\nprint("a" in d)',
    "l14-e05": 'd = {"b": 1, "a": 2}\nprint(sorted(d.keys()))',
    "l14-e06": 'd = {"a": 1, "b": 2}\nprint(list(d.values()))',
    "l14-e08": 'd = {"x": 9}\nprint(d.get("x"))',
    "l14-e11": 'd = {"a": 1}\nfor k, v in d.items():\n    print(k)\n    print(v)',
    "l14-e12": 'd = {"a": 1}\nd.update({"b": 2})\nprint(sorted(d.keys()))',
    "l14-e15": 'd = {"a": 1, "b": 2}\ndel d["a"]\nprint(d)',
    "l14-e24": 'd = {"a": 1}\nd.update({"a": 9})\nprint(d["a"])',
    "l14-e18": 'print(dict.fromkeys(["a", "b"], 0))',
    "l14-e20": 'd = {"a": 1, "b": 2, "c": 3}\nprint(sum(d.values()))',
    "l14-e23": 'print(({"a": 1} | {"b": 2})["b"])',
    "l14-e27": 'd = {"a": 1, "b": 10, "c": 5}\nprint(sorted([k for k, v in d.items() if v >= 5]))',
    "l14-e28": 'd = {}\nd.setdefault("nums", []).append(3)\nprint(d["nums"])',
    "l14-e29": "print({n: n * n for n in (1, 2, 3)})",
    "l14-e30": 'talaba = {"ism": "Omar", "ball": 95}\nprint(talaba["ism"] + ":" + str(talaba["ball"]))',
    "l15-e02": 'import json\nprint(json.loads(\'{"x": 5}\')["x"])',
    "l15-e03": "import json\nprint(json.dumps([1, 2, 3]))",
    "l15-e04": "import json\nprint(json.loads('[10, 20]')[1])",
    "l15-e05": "import json\nprint(json.loads('true'))",
    "l15-e06": "import json\nprint(json.loads('null'))",
    "l15-e07": 'import json\nprint(json.dumps("salom"))',
    "l15-e08": 'import json\nprint(sorted(json.loads(\'{"b": 1, "a": 2}\').keys()))',
    "l15-e14": 'import json\nprint(json.loads(\'{"u": {"ism": "Ali"}}\')["u"]["ism"])',
    "l15-e15": "import json\nprint(len(json.loads('[1, 2, 3, 4]')))",
    "l15-e17": "import json\nprint(json.loads('false'))",
    "l15-e19": 'import json\nprint(json.loads(\'[{"id": 1}]\')[0]["id"])',
    "l15-e20": "import json\nprint(type(json.loads('{}')).__name__)",
    "l15-e23": "import json\nprint(json.dumps({'b': 1, 'a': 2}, sort_keys=True))",
    "l15-e24": "import json\ntry:\n    json.loads('{bad')\nexcept json.JSONDecodeError:\n    print('xato')",
    "l15-e26": "import json\na = json.loads('[1, 2]')\na.append(3)\nprint(a)",
    "l15-e27": 'import json\nprint(json.loads(\'{"a": 1}\').get("b", 0))',
    "l15-e28": "import json\nprint(isinstance(json.dumps([1]), str))",
    "l15-e29": 'import json\nwith open("data.json", "w", encoding="utf-8") as f:\n    json.dump({"jami": 15}, f)\nwith open("data.json", "r", encoding="utf-8") as f:\n    print(json.load(f)["jami"])',
    "l16-e01": "import math\nprint(math.sqrt(9))",
    "l16-e02": "import math\nprint(math.pi)",
    "l16-e03": "import math\nprint(math.ceil(2.2))",
    "l16-e04": "import math\nprint(math.floor(2.8))",
    "l16-e05": "import math\nprint(math.fabs(-3))",
    "l16-e06": "import math\nprint(math.pow(2, 3))",
    "l16-e07": "from random import seed, randint\nseed(0)\nprint(randint(5, 5))",
    "l16-e08": "from datetime import date\nprint(date(2026, 1, 1).year)",
    "l16-e09": "import math\nprint(int(math.e))",
    "l16-e10": "import math\nprint(int(math.sqrt(16)))",
    "l16-e11": "import math\nprint(math.hypot(3, 4))",
    "l16-e12": "import math\nprint(math.factorial(5))",
    "l16-e13": "from random import choice\nprint(choice([10, 10, 10]))",
    "l16-e14": "from datetime import date\nprint(date(2026, 10, 1).month)",
    "l16-e15": "import math\nprint(math.log10(100))",
    "l16-e16": "import math\nprint(math.trunc(3.9))",
    "l16-e17": "from random import randrange\nprint(randrange(2, 3))",
    "l16-e18": "from datetime import date\nprint((date(2026, 1, 2) - date(2026, 1, 1)).days)",
    "l16-e19": "import math\nprint(math.gcd(12, 8))",
    "l16-e20": "import math\nprint(int(math.degrees(math.pi)))",
    "l16-e21": "import math\nr = 2\nprint(round(math.pi * r ** 2, 2))",
    "l16-e22": "from random import sample\nprint(sorted(sample([1, 2, 3], 3)))",
    "l16-e23": "from datetime import date\nprint(date(2026, 1, 6).weekday())",
    "l16-e24": "import math\nprint(math.comb(5, 2))",
    "l16-e25": "import math\nprint(math.isqrt(10))",
    "l16-e26": "import math\nprint(math.prod([2, 3, 4]))",
    "l16-e27": "from datetime import datetime\nprint(datetime(2026, 1, 1, 15, 0).hour)",
    "l16-e28": "import math\nprint(int(math.log(8, 2)))",
    "l16-e29": "import math\nprint(math.hypot(3, 4))",
    "l16-e30": "import math\nfor n in [4, 9, 16]:\n    print(int(math.sqrt(n)))",
}
SOL_FIXES.update(SOL_EXTRA)


def _is_cheat_solution(sol: str) -> bool:
    s = (sol or "").strip()
    if "formulani qo‘ying" in s or "to‘g‘ridan-to‘g‘ri yozish" in s:
        return True
    # Ro‘yxat/lug‘at natijasini matn sifatida yozib qo‘yish (yechim emas)
    if re.match(r'^matn\s*=\s*[\'"][\[\{].*[\'"]\nprint\(matn\)\s*$', s, re.S):
        return True
    return False


def _needs_fix(task: str) -> bool:
    t = (task or "").strip()
    if not t:
        return True
    if re.search(r"Kerakli ifoda|mavzusiga oid dastur|hisoblab,\s*natijani print", t, re.I):
        return True
    if "Agar print(" in t:
        return True
    if t.count(";") >= 1 and "bering" not in t.lower() and len(t) < 80:
        if re.search(r"print\s*\(|\.append\(|\.setdefault\(", t):
            return True
    return False


def clarify_exercise(ex: dict, raw_task: str | None = None) -> dict:
    from clear_tasks import make_clear_task
    from rewrite_tasks import _is_unclear, task_from_solution, polish_var_language

    raw = raw_task if raw_task is not None else (ex.get("task") or "")
    eid = ex.get("id") or ""
    sol = (ex.get("solution") or "").strip()
    exp = None
    for c in ex.get("checks") or []:
        if c.get("type") == "stdout":
            exp = c.get("equals")
            break

    fixed = TASK_FIXES.get(eid)
    if fixed and not _is_unclear(fixed):
        ex["task"] = fixed
    else:
        ex["task"] = raw
        polish_exercise(ex)
        if _needs_fix(ex.get("task") or ""):
            if _is_code_dump(raw) or re.match(r"^print\s*\(", raw.strip()):
                ex["task"] = _humanize_code_task(raw, ex.get("title") or "", exp)

        # Yechimdan to‘liq aniq shart (def emas)
        if sol and not sol.startswith("def "):
            rewritten = task_from_solution(
                sol,
                stdin=ex.get("stdin") or "",
                exp=exp,
                title=ex.get("title") or "",
            )
            if rewritten and (
                _is_unclear(ex.get("task") or "")
                or _is_unclear(raw)
                or _looks_codeish(raw)
            ):
                ex["task"] = rewritten

        clear = make_clear_task(ex, raw_task=raw)
        if clear:
            if sol.startswith("def ") or any(
                c.get("type") == "expr" for c in (ex.get("checks") or [])
            ):
                ex["task"] = clear
            elif _is_unclear(ex.get("task") or ""):
                ex["task"] = clear

    t = ex.get("task") or ""
    if "Agar print(" in t:
        t = re.sub(
            r"\s*Agar print\([^)]*\)\s*bo‘lsa\s*«[^»]*»\s*print qiling\.?",
            " Natijani ekranga chiqaring (print).",
            t,
        )
        ex["task"] = re.sub(r"\s{2,}", " ", t).strip()

    # "x ga 5 bering" → «x» nomli o‘zgaruvchiga …
    ex["task"] = polish_var_language(ex.get("task") or "")

    # Yana chunarsiz bo‘lsa — yechimdan qayta yoz
    if _is_unclear(ex.get("task") or "") and sol and not sol.startswith("def "):
        rewritten = task_from_solution(
            sol,
            stdin=ex.get("stdin") or "",
            exp=exp,
            title=ex.get("title") or "",
        )
        if rewritten:
            ex["task"] = polish_var_language(rewritten)

    if eid in HINT_FIXES and not (ex.get("hint") or "").strip():
        ex["hint"] = HINT_FIXES[eid]

    task = _strip_result_hints(ex.get("task") or "", exp).strip()
    if task and not task.endswith((".", "?", "!")):
        task += "."
    ex["task"] = polish_var_language(task)
    # Faqat sarlavha polish (taskni qayta buzmaslik)
    if eid in TITLE_FIXES:
        ex["title"] = TITLE_FIXES[eid]
    return ex


def _looks_codeish(t: str) -> bool:
    t = (t or "").strip()
    if not t:
        return True
    if t.count(";") >= 1:
        return True
    if re.search(r"\b(strip|replace|lower|upper)\s*,", t):
        return True
    if re.match(r"^(print\(|import |from )", t):
        return True
    if re.search(r"—\s*(print|ikki)", t, re.I):
        return True
    if re.search(r"\w+\s*=\s*\S+.*=", t) and "bering" not in t.lower():
        return True
    return False


def clarify_lessons(lessons: list) -> list:
    for L in lessons:
        out = []
        for e in L.get("exercises") or []:
            raw = e.get("_raw_task") or e.get("task") or ""
            ex = clarify_exercise(dict(e), raw_task=raw)
            eid = ex.get("id") or ""
            if eid in SOL_FIXES:
                ex["solution"] = SOL_FIXES[eid]
            elif _is_cheat_solution(ex.get("solution") or ""):
                # oxirgi urinish: asl print ifodasi
                from enrich import _codeish_from_task

                code = _codeish_from_task(raw)
                if code:
                    ex["solution"] = code
            out.append(ex)
        L["exercises"] = out
    return lessons
