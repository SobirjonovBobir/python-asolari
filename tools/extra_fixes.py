# -*- coding: utf-8 -*-
"""Qo‘shimcha aniq vazifa va to‘g‘ri yechimlar (barcha darslar)."""

TASK_EXTRA: dict[str, str] = {
    "l2-e03": 'narx nomli o‘zgaruvchiga 12000 bering va uni print qiling.',
    "l2-e07": 'soz ga "Python" bering va print qiling.',
    "l2-e09": "flag ga False bering va print qiling.",
    "l2-e10": "yosh ga 18 bering va print qiling.",
    "l2-e13": "a ga 10 bering, b = a qiling (nusxa), b ni print qiling.",
    "l2-e15": 'kod ga "007" matnini bering (qo‘shtirnoq bilan) va print qiling.',
    "l2-e16": "vazn ga 70.5 bering va print qiling.",
    "l2-e18": "user_id ga 42 bering va print qiling.",
    "l2-e25": "sanoq ga 0 bering va print qiling.",
    "l2-e26": "farq ga -3 bering va print qiling.",
    "l2-e28": 'parol ga "abc123" bering va print qiling.',
    "l5-e14": "input() dan ikkita butun son o‘qing. Kichigini min() bilan topib print qiling.",
    "l5-e15": (
        "input() dan butun son o‘qing. Agar >0 bo‘lsa «musbat», <0 bo‘lsa «manfiy», "
        "aks holda «nol» print qiling."
    ),
    "l5-e19": (
        "input() dan yoshni o‘qing. Agar yosh >= 18 bo‘lsa «kattalar», aks holda «bola» print qiling."
    ),
    "l5-e24": (
        "input() dan n o‘qing. Agar n 1 dan 10 gacha (ikki tomon) bo‘lsa «bor» print qiling."
    ),
    "l5-e25": "input() dan uchta butun son o‘qing. Eng kattasini max() bilan print qiling.",
    "l5-e26": (
        "input() dan ball o‘qing. 90+ → A, 70+ → B, 60+ → C, aks holda D print qiling "
        "(if/elif/else)."
    ),
    "l6-e18": "1 dan 4 gacha (4 kirmaydi) sonlar ko‘paytmasini for bilan hisoblab print qiling (1*2*3*4).",
    "l6-e21": "5 faktorialni (1*2*3*4*5) for bilan hisoblab print qiling.",
    "l6-e23": (
        "while True ichida int(input()) o‘qing; 0 kelganda to‘xtang (break). "
        "Shu paytgacha yig‘ilgan yig‘indini print qiling."
    ),
    "l6-e25": (
        "for i in range(5) qiling. Agar i == 2 bo‘lsa continue (o‘tkazib yuboring), "
        "aks holda i ni print qiling."
    ),
    "l6-e26": "1 dan 10 gacha toq sonlar yig‘indisini for bilan hisoblab print qiling.",
    "l7-e04": "a ga [1, 2, 3, 4] bering. len(a) ni print qiling.",
    "l7-e11": "a ga [1, 2, 3, 4] bering. for bilan yig‘indisini hisoblab print qiling.",
    "l7-e12": "a ga [3, 9, 2] bering. max(a) ni print qiling.",
    "l7-e26": "min([5, 1, 8]) ni hisoblab print qiling.",
    "l9-e04": "t ga (1, 2, 1) bering. t.count(1) ni print qiling.",
    "l9-e11": "(1, 2) + (3,) ni hisoblab print qiling (tuple qo‘shish).",
    "l9-e12": "(0,) * 3 ni hisoblab print qiling (tuple takrorlash).",
    "l9-e27": "len({1, 2, 2, 3}) ni print qiling (set da takror yo‘qoladi).",
    "l11-e06": (
        "chiq(*args) funksiyasini yozing: har bir argumentni alohida qatorda print qilsin. "
        "chiq(1, 2) ni chaqiring."
    ),
    "l11-e20": (
        "show(**kw) funksiyasini yozing: kw['x'] ni print qilsin. "
        "show(x=7) ni chaqiring."
    ),
    "l12-e01": 'salom.txt fayliga «Salom» matnini yozing (open + write yoki with).',
    "l12-e02": "ok.txt fayliga OK matnini yozing.",
    "l12-e04": "n.txt fayliga 42 matnini yozing.",
    "l12-e05": 'with open(...) bilan b.txt fayliga «Python» yozing (with majburiy).',
    "l12-e08": (
        "log.txt ga avval «A» yozing (w), keyin «a» (append) rejimida «B» qo‘shing. "
        "Faylda AB bo‘lishi kerak."
    ),
    "l12-e11": "t.txt ga ikki qator yozing: Bir va Ikki (\\n bilan).",
    "l12-e13": (
        "x.txt ni «r+» rejimida oching (ichida salom bor deb faraz qiling yoki yozing), "
        "o‘qib print qiling. Kodda r+ bo‘lsin."
    ),
    "l12-e15": "from.txt dan o‘qib (yoki «copy» yozib) to.txt ga «copy» yozing.",
    "l12-e16": "input() dan matn o‘qing va out.txt ga yozing.",
    "l12-e18": "p.txt ni o‘qing, strip() qiling va natijani print qiling.",
    "l12-e23": "even.txt ga juft sonlar 2 va 4 ni alohida qatorda yozing.",
    "l12-e25": (
        "csv.txt da «Ali,20» bor. O‘qib verguldan keyingi qismni (20) print qiling."
    ),
    "l12-e28": "bir.txt ga «A» va «B» ni birlashtirib AB yozing (ikki fayl yoki ketma-ket).",
    "l12-e30": "hisob.txt ga «Jami: 15» matnini yozing.",
    "l13-e09": (
        "try ichida 'a' + 1 qilib ko‘ring (TypeError). except da «tur» print qiling."
    ),
    "l13-e12": "int(input()) bilan son o‘qing va shu sonni print qiling.",
    "l13-e13": (
        "n = int(input()). try ichida 10 // n hisoblang; ZeroDivisionError bo‘lsa «nol» print qiling."
    ),
    "l13-e21": (
        "bol(a, b) funksiyasini yozing: b 0 bo‘lsa None, aks holda a/b qaytarsin. "
        "print(bol(1, 0)) qiling."
    ),
}

SOL_EXTRA: dict[str, str] = {
    "l2-e03": "narx = 12000\nprint(narx)",
    "l2-e07": 'soz = "Python"\nprint(soz)',
    "l2-e09": "flag = False\nprint(flag)",
    "l2-e10": "yosh = 18\nprint(yosh)",
    "l2-e13": "a = 10\nb = a\nprint(b)",
    "l2-e15": 'kod = "007"\nprint(kod)',
    "l2-e16": "vazn = 70.5\nprint(vazn)",
    "l2-e18": "user_id = 42\nprint(user_id)",
    "l2-e25": "sanoq = 0\nprint(sanoq)",
    "l2-e26": "farq = -3\nprint(farq)",
    "l2-e28": 'parol = "abc123"\nprint(parol)',
    "l5-e14": "a = int(input())\nb = int(input())\nprint(min(a, b))",
    "l5-e15": (
        "n = int(input())\nif n > 0:\n    print(\"musbat\")\nelif n < 0:\n"
        "    print(\"manfiy\")\nelse:\n    print(\"nol\")"
    ),
    "l5-e19": (
        "yosh = int(input())\nif yosh >= 18:\n    print(\"kattalar\")\nelse:\n    print(\"bola\")"
    ),
    "l5-e24": (
        "n = int(input())\nif 1 <= n <= 10:\n    print(\"bor\")"
    ),
    "l5-e25": "a = int(input())\nb = int(input())\nc = int(input())\nprint(max(a, b, c))",
    "l5-e26": (
        "ball = int(input())\nif ball >= 90:\n    print(\"A\")\nelif ball >= 70:\n"
        "    print(\"B\")\nelif ball >= 60:\n    print(\"C\")\nelse:\n    print(\"D\")"
    ),
    "l6-e18": "p = 1\nfor n in range(1, 5):\n    p *= n\nprint(p)",
    "l6-e21": "p = 1\nfor i in range(1, 6):\n    p *= i\nprint(p)",
    "l6-e23": (
        "yigindi = 0\nwhile True:\n    n = int(input())\n    if n == 0:\n"
        "        break\n    yigindi += n\nprint(yigindi)"
    ),
    "l6-e25": "for i in range(5):\n    if i == 2:\n        continue\n    print(i)",
    "l6-e26": (
        "yigindi = 0\nfor n in range(1, 11):\n    if n % 2 == 1:\n        yigindi += n\nprint(yigindi)"
    ),
    "l7-e04": "a = [1, 2, 3, 4]\nprint(len(a))",
    "l7-e11": "a = [1, 2, 3, 4]\ns = 0\nfor x in a:\n    s += x\nprint(s)",
    "l7-e12": "a = [3, 9, 2]\nprint(max(a))",
    "l7-e26": "print(min([5, 1, 8]))",
    "l9-e04": "t = (1, 2, 1)\nprint(t.count(1))",
    "l9-e11": "print((1, 2) + (3,))",
    "l9-e12": "print((0,) * 3)",
    "l9-e27": "print(len({1, 2, 2, 3}))",
    "l11-e06": "def chiq(*args):\n    for x in args:\n        print(x)\nchiq(1, 2)",
    "l11-e20": "def show(**kw):\n    print(kw['x'])\nshow(x=7)",
    "l12-e01": (
        'with open("salom.txt", "w", encoding="utf-8") as f:\n    f.write("Salom")'
    ),
    "l12-e02": 'with open("ok.txt", "w", encoding="utf-8") as f:\n    f.write("OK")',
    "l12-e04": 'with open("n.txt", "w", encoding="utf-8") as f:\n    f.write("42")',
    "l12-e05": (
        'with open("b.txt", "w", encoding="utf-8") as f:\n    f.write("Python")'
    ),
    "l12-e08": (
        'with open("log.txt", "w", encoding="utf-8") as f:\n    f.write("A")\n'
        'with open("log.txt", "a", encoding="utf-8") as f:\n    f.write("B")'
    ),
    "l12-e11": (
        'with open("t.txt", "w", encoding="utf-8") as f:\n    f.write("Bir\\nIkki")'
    ),
    "l12-e13": (
        'with open("x.txt", "w", encoding="utf-8") as f:\n    f.write("salom")\n'
        'with open("x.txt", "r+", encoding="utf-8") as f:\n    print(f.read())'
    ),
    "l12-e15": (
        'with open("from.txt", "w", encoding="utf-8") as f:\n    f.write("copy")\n'
        'with open("from.txt", encoding="utf-8") as f:\n    data = f.read()\n'
        'with open("to.txt", "w", encoding="utf-8") as f:\n    f.write(data)'
    ),
    "l12-e16": (
        'matn = input()\nwith open("out.txt", "w", encoding="utf-8") as f:\n    f.write(matn)'
    ),
    "l12-e18": (
        'with open("p.txt", "w", encoding="utf-8") as f:\n    f.write("  x  ")\n'
        'with open("p.txt", encoding="utf-8") as f:\n    print(f.read().strip())'
    ),
    "l12-e23": (
        'with open("even.txt", "w", encoding="utf-8") as f:\n    f.write("2\\n4")'
    ),
    "l12-e25": (
        'with open("csv.txt", "w", encoding="utf-8") as f:\n    f.write("Ali,20")\n'
        'with open("csv.txt", encoding="utf-8") as f:\n    print(f.read().split(",")[1])'
    ),
    "l12-e28": (
        'with open("bir.txt", "w", encoding="utf-8") as f:\n    f.write("A" + "B")'
    ),
    "l12-e30": (
        'with open("hisob.txt", "w", encoding="utf-8") as f:\n    f.write("Jami: 15")'
    ),
    "l13-e09": (
        'try:\n    print("a" + 1)\nexcept TypeError:\n    print("tur")'
    ),
    "l13-e12": "n = int(input())\nprint(n)",
    "l13-e13": (
        "n = int(input())\ntry:\n    print(10 // n)\nexcept ZeroDivisionError:\n    print(\"nol\")"
    ),
    "l13-e21": (
        "def bol(a, b):\n    if b == 0:\n        return None\n    return a / b\nprint(bol(1, 0))"
    ),
}
