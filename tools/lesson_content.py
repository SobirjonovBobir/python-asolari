# -*- coding: utf-8 -*-
"""Har dars uchun to‘liq o‘rgatish matni + har tushunchaga bitta misol."""


def E(title, code, why):
    return {"title": title, "code": code, "why": why}


def R(term, meaning):
    return {"term": term, "meaning": meaning}


def apply_rich_content(lessons):
    bank = CONTENT
    for L in lessons:
        c = bank.get(L["id"])
        if c:
            if c.get("teach"):
                L["teach"] = c["teach"]
            if c.get("examples"):
                L["examples"] = c["examples"]
        rev = REVIEW.get(L["id"])
        if rev:
            L["review"] = rev
        elif not L.get("review"):
            # fallback: misollar sarlavhasidan
            L["review"] = [
                R(ex.get("title", ""), (ex.get("why") or "")[:80])
                for ex in (L.get("examples") or [])
            ]
    return lessons


CONTENT = {}

# Har dars: qisqa takrorlash jadvali (term + meaning)
REVIEW = {
    1: [
        R("print(...)", "Ekranga chiqarish"),
        R('matn = "..."', "Matnni o‘zgaruvchiga saqlash"),
        R("print() bir necha marta", "Har biri yangi qator"),
        R("# izoh", "Bajarilmaydigan eslatma"),
        R("son = 18", "Songa qo‘shtirnoq shart emas"),
        R("Kod tartibi", "Yuqoridan pastga bajariladi"),
    ],
    2: [
        R("x = 5", "Qiymat berish (tenglik emas)"),
        R("str", "Matn: \"Laylo\""),
        R("int / float", "Butun / o‘nli son"),
        R("bool", "True yoki False"),
        R("Qayta yozish", "Oxirgi qiymat qoladi"),
        R("b = a", "Qiymat nusxasi"),
        R("Nom qoidasi", "Harf yoki _ bilan, bo‘sh joysiz"),
    ],
    3: [
        R("a + b", "Matnlarni ulash"),
        R("len(s)", "Uzunlik"),
        R("input()", "Foydalanuvchidan matn"),
        R("startswith / endswith", "Boshlanish / tugash tekshiruvi"),
        R("upper / lower", "Katta / kichik harf"),
        R("strip", "Chetdagi bo‘sh joy"),
        R("replace", "Almashtirish"),
        R("find / count / split", "Qidirish, sanash, bo‘lish"),
        R('f"Ism: {ism}"', "f-string — formatlash"),
    ],
    4: [
        R("+ - *", "Qo‘shish, ayirish, ko‘paytirish"),
        R("/", "Oddiy bo‘lish → float"),
        R("//", "Butun bo‘lish"),
        R("%", "Qoldiq"),
        R("**", "Daraja"),
        R("int(input())", "Son o‘qish"),
        R("Amal tartibi", "* / avval, keyin + -; qavs o‘zgartiradi"),
        R("float()", "O‘nli songa o‘tkazish"),
    ],
    5: [
        R("if", "Shart True bo‘lsa blok"),
        R("elif / else", "Boshqa shart / aks holda"),
        R("== / !=", "Teng / teng emas"),
        R("< > <= >=", "Taqqoslash"),
        R("not", "Shart teskarisi"),
        R("and / or", "Ikkalasi / kamida bittasi"),
        R("n % 2 == 0", "Juftlik tekshiruvi"),
        R("Indent (:)", "Ichki qatorlar bo‘sh joy bilan"),
    ],
    6: [
        R("for + range", "Ma’lum marta takrorlash"),
        R("range(a, b, step)", "Boshlash, to‘xtash, qadam"),
        R("for x in list", "Ro‘yxat bo‘ylab"),
        R("while", "Shart True ekan davom"),
        R("break", "Tsiklni to‘xtatish"),
        R("continue", "Shu qadamni o‘tkazib yuborish"),
        R("Yig‘indi / ko‘paytma", "O‘zgaruvchini tsiklda yangilash"),
        R("Ichma-ich for", "Tsikl ichida tsikl"),
    ],
    7: [
        R("a = [1, 2, 3]", "List yaratish"),
        R("a[0] / a[-1]", "Birinchi / oxirgi element"),
        R("len(a)", "Elementlar soni"),
        R("append", "Oxiriga qo‘shish"),
        R("a[i] = ...", "Elementni o‘zgartirish"),
        R("a[0:2]", "Kesish (slice)"),
        R("in", "Element bormi"),
        R("max / min / sum", "Eng katta, kichik, yig‘indi"),
        R("+ / *", "Ulash / takrorlash"),
    ],
    8: [
        R("insert", "Berilgan indeksga qo‘yish"),
        R("remove", "Qiymat bo‘yicha o‘chirish"),
        R("pop", "Indeksdan olib tashlash (qiymat qaytadi)"),
        R("sort / reverse", "Tartiblash"),
        R("index / count", "Joyini topish / necha marta"),
        R("clear / del", "Tozalash / o‘chirish"),
        R("map", "Har elementga amal"),
        R("filter", "Shartga moslarini ajratish"),
        R("lambda", "Qisqa ismsiz funksiya"),
    ],
    9: [
        R("tuple ( )", "O‘zgarmas ketma-ketlik"),
        R("count / index", "Sanash / indeks (tuple)"),
        R("tuple + / *", "Ulash / takror (yangi tuple)"),
        R("tuple(list)", "Listdan tuple"),
        R("set { }", "Takrorlanmas to‘plam"),
        R("add / remove / discard", "Qo‘shish / o‘chirish"),
        R("union |", "Birlashtirish"),
        R("intersection &", "Kesishma (umumiy)"),
        R("difference -", "Farq (faqat chapda)"),
        R("symmetric ^", "Simmetrik farq"),
        R("issubset / issuperset", "Ichida / qamrab oladi"),
        R("update / copy", "Ko‘p qo‘shish / nusxa"),
    ],
    10: [
        R("def nom():", "Funksiya e’lon qilish"),
        R("chaqirish nom()", "Funksiyani ishga tushirish"),
        R("parametr / argument", "def dagi nom / chaqiruvdagi qiymat"),
        R("return", "Qiymatni dasturga qaytarish"),
        R("print vs return", "Ekran vs qiymat"),
        R("default =", "Berilmasa ishlatiladigan qiymat"),
        R("if ichida def", "Funksiya ichida shart"),
    ],
    11: [
        R("*args", "O‘zgaruvchan oddiy argumentlar → tuple"),
        R("**kwargs", "Kalitli argumentlar → dict"),
        R("len(args)", "Nechta argument kelgani"),
        R("kwargs.get / keys", "Qiymat / kalitlar"),
        R("oddiy → default → *args → **kwargs", "Parametrlar tartibi"),
        R("f(*ro‘yxat)", "Ro‘yxatni argumentlarga ochish"),
        R("f(**lug‘at)", "Lug‘atni kalitli argumentlarga ochish"),
    ],
    12: [
        R('open(..., encoding="utf-8")', "Fayl ochish"),
        R("with open", "Avtomatik yopish"),
        R("w / a / r", "Yozish / qo‘shish / o‘qish"),
        R("read / readline / readlines", "Butun / bir qator / list"),
        R("r+", "O‘qish + yozish"),
        R("seek", "Ko‘rsatkichni siljitish"),
        R("rb / wb", "Binary (baytlar)"),
        R("for qator in f", "Qatorma-qator o‘qish"),
    ],
    13: [
        R("try", "Xavfli kod bloki"),
        R("except ValueError", "Aniq xato turi"),
        R("ZeroDivisionError", "Nolga bo‘lish"),
        R("IndexError / KeyError", "Noto‘g‘ri indeks / kalit"),
        R("TypeError / NameError", "Tur / nom xatosi"),
        R("else", "Xato bo‘lmasa"),
        R("finally", "Har doim bajariladi"),
        R("except (A, B)", "Bir necha xato turi"),
        R("as e", "Xato obyektiga murojaat"),
    ],
    14: [
        R('{"kalit": qiymat}', "dict yaratish"),
        R('d["k"]', "Qiymat olish (yo‘q bo‘lsa xato)"),
        R("d.get(k, default)", "Xavfsiz olish"),
        R("d[k] = v", "Qo‘shish / o‘zgartirish"),
        R("keys / values / items", "Kalitlar, qiymatlar, juftliklar"),
        R("update / pop", "Yangilash / olib tashlash"),
        R("setdefault", "Yo‘q bo‘lsa qo‘yish"),
        R("k in d", "Kalit bormi"),
    ],
    15: [
        R("import json", "JSON moduli"),
        R("json.dumps", "Python → JSON matn"),
        R("json.loads", "JSON matn → Python"),
        R("json.dump / load", "Faylga yozish / o‘qish"),
        R("indent=2", "Chiroyli format"),
        R("true/false/null", "JSON → True/False/None"),
        R("API javobi", "loads + dict kalitlari"),
    ],
    16: [
        R("import math", "Modulni ulash"),
        R("from math import ...", "Alohida funksiyani olish"),
        R("sqrt / ceil / floor", "Ildiz, yuqori/past yaxlitlash"),
        R("pow / fabs / hypot", "Daraja, absolyut, gipotenuza"),
        R("factorial / gcd", "Faktorial, EKUB"),
        R("random + seed", "Tasodif (takrorlanadigan test)"),
        R("randint / choice", "Son / ro‘yxatdan tanlash"),
        R("datetime.date", "Sana bilan ishlash"),
    ],
}

# --- Dars 11 (eng zaif — birinchi to‘ldiramiz) ---
CONTENT[11] = {
    "teach": """
<div class="card">
  <h3>*args va **kwargs nima?</h3>
  <p>Oddiy funksiyada parametrlar soni aniq: <code>def f(a, b)</code>. Ba’zan esa chaqiruvda <strong>nechta bo‘lsa ham</strong> qiymat yoki <strong>kalit=qiymat</strong> juftliklari kerak bo‘ladi. Shunda <code>*args</code> va <code>**kwargs</code> ishlatiladi.</p>

  <h4>1) *args — o‘zgaruvchan oddiy argumentlar</h4>
  <p><code>*args</code> funksiya ichida <strong>tuple</strong> bo‘ladi. Chaqiruvdagi ortiqcha qiymatlar shu tuple ga yig‘iladi.</p>
  <pre class="code">def yigindi(*args):
    # args = (1, 2, 3)
    return sum(args)

natija = yigindi(1, 2, 3)
print(natija)</pre>

  <h4>2) *args uzunligi</h4>
  <p>Nechta argument kelganini <code>len(args)</code> bilan bilasiz.</p>
  <pre class="code">def nechta(*args):
    return len(args)

print(nechta(10, 20, 30, 40))</pre>

  <h4>3) *args dan element olish</h4>
  <pre class="code">def birinchi(*args):
    return args[0]

print(birinchi(9, 8, 7))</pre>

  <h4>4) **kwargs — kalitli argumentlar</h4>
  <p><code>**kwargs</code> funksiya ichida <strong>dict</strong> bo‘ladi. Chaqiruvda <code>ism="Ali"</code> kabi yoziladi.</p>
  <pre class="code">def info(**kwargs):
    # kwargs = {"ism": "Ali", "yosh": 20}
    print(kwargs.get("ism"))

info(ism="Ali", yosh=20)</pre>

  <h4>5) kwargs kalitlari</h4>
  <pre class="code">def kalitlar(**kwargs):
    return sorted(kwargs.keys())

print(kalitlar(b=1, a=2))</pre>

  <h4>6) kwargs qiymatlari yig‘indisi</h4>
  <pre class="code">def yig_kw(**kwargs):
    return sum(kwargs.values())

print(yig_kw(x=3, y=4))</pre>

  <h4>7) Oddiy parametr + *args</h4>
  <p>Avval majburiy parametrlar, keyin <code>*args</code>.</p>
  <pre class="code">def bir_ikki(a, b, *rest):
    return [a, b]

print(bir_ikki(1, 2, 9, 8))</pre>

  <h4>8) Default + *args + **kwargs tartibi</h4>
  <p>To‘g‘ri tartib: oddiy → default → <code>*args</code> → <code>**kwargs</code>.</p>
  <pre class="code">def f(a, b=1, *args, **kwargs):
    return a + b + sum(args) + sum(kwargs.values())

print(f(5, 1, 1, x=0))</pre>

  <h4>9) Ro‘yxatni ochish: *</h4>
  <p>Ro‘yxat/tuple ni alohida argumentlarga «yoyish» uchun chaqiruvda <code>*</code> qo‘yiladi.</p>
  <pre class="code">def qoshing(a, b):
    return a + b

sonlar = [10, 4]
print(qoshing(*sonlar))</pre>

  <h4>10) Lug‘atni ochish: **</h4>
  <pre class="code">def salom(ism, yosh):
    print(ism)
    print(yosh)

malumot = {"ism": "Ali", "yosh": 20}
salom(**malumot)</pre>

  <h4>11) *args ni aylantirish</h4>
  <pre class="code">def chiqar(*args):
    for x in args:
        print(x)

chiqar(1, 2)</pre>

  <h4>12) type(*args) — tuple ekanini tekshirish</h4>
  <pre class="code">def tur(*args):
    return type(args).__name__

print(tur(1, 2))</pre>

  <div class="callout"><strong>Eslab qoling:</strong> <code>*args</code> → tuple (tartibli qiymatlar). <code>**kwargs</code> → dict (kalit=qiymat). Chaqiruvda ochish: <code>f(*ro‘yxat)</code>, <code>f(**lug‘at)</code>.</div>
</div>
""",
    "examples": [
        E("*args yig‘indi", "def yigindi(*args):\n    return sum(args)\nprint(yigindi(1, 2, 3))", "6 — nechta son bersangiz, hammasi yig‘iladi."),
        E("*args len", "def nechta(*args):\n    return len(args)\nprint(nechta(10, 20, 30, 40))", "4"),
        E("*args[0]", "def birinchi(*args):\n    return args[0]\nprint(birinchi(9, 8, 7))", "9"),
        E("**kwargs get", 'def info(**kwargs):\n    print(kwargs.get("ism"))\ninfo(ism="Ali", yosh=20)', "Ali"),
        E("kwargs keys", "def kalitlar(**kwargs):\n    return sorted(kwargs.keys())\nprint(kalitlar(b=1, a=2))", "['a', 'b']"),
        E("kwargs values", "def yig_kw(**kwargs):\n    return sum(kwargs.values())\nprint(yig_kw(x=3, y=4))", "7"),
        E("oddiy + *args", "def bir_ikki(a, b, *rest):\n    return [a, b]\nprint(bir_ikki(1, 2, 9, 8))", "[1, 2] — rest=(9,8)"),
        E("to‘liq tartib", "def f(a, b=1, *args, **kwargs):\n    return a + b + sum(args) + sum(kwargs.values())\nprint(f(5, 1, 1, x=0))", "7"),
        E("* bilan ochish", "def qoshing(a, b):\n    return a + b\nprint(qoshing(*[10, 4]))", "14"),
        E("** bilan ochish", 'def salom(ism, yosh):\n    print(ism)\n    print(yosh)\nsalom(**{"ism": "Ali", "yosh": 20})', "Ali keyin 20"),
        E("*args for", "def chiqar(*args):\n    for x in args:\n        print(x)\nchiqar(1, 2)", "1 keyin 2"),
        E("args tipi", "def tur(*args):\n    return type(args).__name__\nprint(tur(1, 2))", "tuple"),
    ],
}

CONTENT[10] = {
    "teach": """
<div class="card">
  <h3>Funksiya nima?</h3>
  <p>Funksiya — qayta ishlatiladigan kod bloki. Bir marta yozasiz, kerak joyda <strong>chaqirasiz</strong>. <code>def</code> kalit so‘zi bilan e’lon qilinadi.</p>

  <h4>1) Argumentsiz funksiya</h4>
  <p>Parametr yo‘q. Faqat chaqirilganda ishlaydi.</p>
  <pre class="code">def salom():
    print("Salom")

salom()</pre>

  <h4>2) Argumentli funksiya</h4>
  <p>Qavs ichida parametrlar — chaqiruvda qiymat berasiz.</p>
  <pre class="code">def ikki_barobar(n):
    return n * 2

print(ikki_barobar(9))</pre>

  <h4>3) return — qiymat qaytarish</h4>
  <p><code>print</code> ekranga chiqaradi. <code>return</code> qiymatni dasturga qaytaradi (o‘zgaruvchiga saqlash mumkin).</p>
  <pre class="code">def kv(x):
    return x * x

natija = kv(4)
print(natija)</pre>

  <h4>4) Bir necha parametr</h4>
  <pre class="code">def qoshing(a, b):
    return a + b

print(qoshing(2, 10))</pre>

  <h4>5) Default (standart) qiymat</h4>
  <p>Agar chaqiruvda berilmasa, default ishlaydi.</p>
  <pre class="code">def salom(ism="Mehmon"):
    print("Salom, " + ism)

salom()
salom("Ali")</pre>

  <h4>6) Default bilan hisob</h4>
  <pre class="code">def daraja(x, n=2):
    return x ** n

print(daraja(5))
print(daraja(2, 3))</pre>

  <h4>7) Funksiya ichida if</h4>
  <pre class="code">def tekshir(n):
    if n != 0:
        return "bor"
    return "nol"

print(tekshir(5))</pre>

  <h4>8) Parametr vs argument</h4>
  <p><strong>Parametr</strong> — def qatoridagi nom (<code>x</code>). <strong>Argument</strong> — chaqiruvdagi qiymat (<code>4</code>).</p>
  <pre class="code">def ko‘rsat(x):
    print(x)

ko‘rsat(4)</pre>

  <h4>9) return dan keyin kod ishlamaydi</h4>
  <pre class="code">def misol():
    return 1
    print("bu chiqmaydi")

print(misol())</pre>

  <h4>10) Ro‘yxat bilan ishlash</h4>
  <pre class="code">def oxirgi(a):
    return a[-1]

print(oxirgi([5, 6, 7]))</pre>

  <div class="callout"><strong>Qoida:</strong> Funksiyani avval <code>def</code> bilan yozing, keyin chaqiring. <code>return</code> — qiymat; <code>print</code> — ekran.</div>
</div>
""",
    "examples": [
        E("Argumentsiz", "def salom():\n    print(\"Salom\")\nsalom()", "Salom"),
        E("Argument", "def ikki_barobar(n):\n    return n * 2\nprint(ikki_barobar(9))", "18"),
        E("return", "def kv(x):\n    return x * x\nnatija = kv(4)\nprint(natija)", "16 — avval hisob, keyin print."),
        E("Ikki parametr", "def qoshing(a, b):\n    return a + b\nprint(qoshing(2, 10))", "12"),
        E("Default ism", "def salom(ism=\"Mehmon\"):\n    print(\"Salom, \" + ism)\nsalom()\nsalom(\"Ali\")", "Mehmon keyin Ali"),
        E("Default daraja", "def daraja(x, n=2):\n    return x ** n\nprint(daraja(5))\nprint(daraja(2, 3))", "25 keyin 8"),
        E("if ichida", "def tekshir(n):\n    if n != 0:\n        return \"bor\"\n    return \"nol\"\nprint(tekshir(5))", "bor"),
        E("Ro‘yxat", "def oxirgi(a):\n    return a[-1]\nprint(oxirgi([5, 6, 7]))", "7"),
        E("juftmi", "def juftmi(n):\n    return n % 2 == 0\nprint(juftmi(4))", "True"),
        E("max2", "def max2(a, b):\n    return a if a > b else b\nprint(max2(3, 11))", "11"),
    ],
}

CONTENT[13] = {
    "teach": """
<div class="card">
  <h3>Xato bo‘lsa nima qilish kerak?</h3>
  <p>Ba’zi kodlar ishlamay qoladi (masalan, <code>int("a")</code>). Dastur to‘xtamasligi uchun <code>try</code> / <code>except</code> ishlatiladi.</p>

  <h4>1) try / except asosi</h4>
  <p><code>try</code> — xavfli kod. <code>except</code> — xato bo‘lsa shu blok ishlaydi.</p>
  <pre class="code">try:
    n = int("a")
except ValueError:
    print("son emas")</pre>

  <h4>2) ZeroDivisionError — nolga bo‘lish</h4>
  <pre class="code">try:
    natija = 1 / 0
except ZeroDivisionError:
    print("nol")</pre>

  <h4>3) IndexError — noto‘g‘ri indeks</h4>
  <pre class="code">try:
    print([1][5])
except IndexError:
    print("indeks")</pre>

  <h4>4) KeyError — yo‘q kalit</h4>
  <pre class="code">try:
    print({}["a"])
except KeyError:
    print("yoq")</pre>

  <h4>5) TypeError — noto‘g‘ri tur</h4>
  <pre class="code">try:
    print("a" + 1)
except TypeError:
    print("tur")</pre>

  <h4>6) NameError — mavjud bo‘lmagan nom</h4>
  <pre class="code">try:
    print(mavjud_emas)
except NameError:
    print("nom")</pre>

  <h4>7) else — xato bo‘lmasa</h4>
  <pre class="code">try:
    n = int("3")
except ValueError:
    print("e")
else:
    print(n)</pre>

  <h4>8) finally — har doim</h4>
  <p><code>finally</code> xato bo‘lsa ham, bo‘lmasa ham ishlaydi.</p>
  <pre class="code">try:
    print(1)
finally:
    print("tugadi")</pre>

  <h4>9) Bir necha xato turi</h4>
  <pre class="code">try:
    n = int("z")
except (ValueError, TypeError):
    print("bad")</pre>

  <h4>10) as e — xato obyekti</h4>
  <pre class="code">try:
    int("z")
except ValueError as e:
    print(type(e).__name__)</pre>

  <div class="callout"><strong>Tartib:</strong> try → except → else → finally. Aniq xato nomini yozing (<code>ValueError</code>), umumiy <code>except:</code> ni boshlang‘ichda kam ishlating.</div>
</div>
""",
    "examples": [
        E("ValueError", "try:\n    n = int(\"a\")\nexcept ValueError:\n    print(\"son emas\")", "son emas"),
        E("ZeroDivision", "try:\n    print(1 / 0)\nexcept ZeroDivisionError:\n    print(\"nol\")", "nol"),
        E("IndexError", "try:\n    print([1][5])\nexcept IndexError:\n    print(\"indeks\")", "indeks"),
        E("KeyError", "try:\n    print({}[\"a\"])\nexcept KeyError:\n    print(\"yoq\")", "yoq"),
        E("TypeError", "try:\n    print(\"a\" + 1)\nexcept TypeError:\n    print(\"tur\")", "tur"),
        E("NameError", "try:\n    print(mavjud_emas)\nexcept NameError:\n    print(\"nom\")", "nom"),
        E("else", "try:\n    n = int(\"3\")\nexcept ValueError:\n    print(\"e\")\nelse:\n    print(n)", "3 — xato bo‘lmadi"),
        E("finally", "try:\n    print(1)\nfinally:\n    print(\"tugadi\")", "1 keyin tugadi"),
        E("Bir necha tur", "try:\n    int(\"z\")\nexcept (ValueError, TypeError):\n    print(\"bad\")", "bad"),
        E("as e", "try:\n    int(\"z\")\nexcept ValueError as e:\n    print(type(e).__name__)", "ValueError"),
    ],
}

CONTENT[16] = {
    "teach": """
<div class="card">
  <h3>Kutubxona — tayyor vositalar to‘plami</h3>
  <p>Python da ko‘p ishlar allaqachon yozilgan. Ularni <code>import</code> bilan ulaysiz. Masalan: matematikani <code>math</code>, tasodifni <code>random</code>, sanani <code>datetime</code>.</p>

  <h4>1) import moduli</h4>
  <pre class="code">import math
print(math.sqrt(9))</pre>

  <h4>2) from ... import ...</h4>
  <p>Modul nomini har safar yozmaslik uchun.</p>
  <pre class="code">from math import ceil
print(ceil(2.2))</pre>

  <h4>3) floor — pastga yaxlitlash</h4>
  <pre class="code">from math import floor
print(floor(2.8))</pre>

  <h4>4) fabs — absolyut qiymat</h4>
  <pre class="code">from math import fabs
print(fabs(-3))</pre>

  <h4>5) pow — daraja</h4>
  <pre class="code">from math import pow
print(pow(2, 3))</pre>

  <h4>6) random.randint</h4>
  <p><code>seed</code> — bir xil «tasodif»ni takrorlash uchun (testlarda qulay).</p>
  <pre class="code">from random import seed, randint
seed(0)
print(randint(5, 5))</pre>

  <h4>7) math.pi va e</h4>
  <pre class="code">import math
print(int(math.e))</pre>

  <h4>8) hypot — gipotenuza</h4>
  <pre class="code">from math import hypot
print(hypot(3, 4))</pre>

  <h4>9) factorial</h4>
  <pre class="code">from math import factorial
print(factorial(5))</pre>

  <h4>10) datetime.date</h4>
  <pre class="code">from datetime import date
d = date(2026, 10, 27)
print(d.month)</pre>

  <h4>11) gcd — eng katta umumiy bo‘luvchi</h4>
  <pre class="code">from math import gcd
print(gcd(12, 8))</pre>

  <h4>12) choice — ro‘yxatdan tanlash</h4>
  <pre class="code">from random import choice
print(choice([10, 10, 10]))</pre>

  <div class="callout"><strong>Eslatma:</strong> Avval <code>import</code>, keyin foydalanish. Noma’lum funksiyani hujjatdan yoki dars misollaridan o‘rganing.</div>
</div>
""",
    "examples": [
        E("sqrt", "import math\nprint(math.sqrt(9))", "3.0"),
        E("ceil", "from math import ceil\nprint(ceil(2.2))", "3"),
        E("floor", "from math import floor\nprint(floor(2.8))", "2"),
        E("fabs", "from math import fabs\nprint(fabs(-3))", "3.0"),
        E("pow", "from math import pow\nprint(pow(2, 3))", "8.0"),
        E("randint + seed", "from random import seed, randint\nseed(0)\nprint(randint(5, 5))", "5"),
        E("hypot", "from math import hypot\nprint(hypot(3, 4))", "5.0"),
        E("factorial", "from math import factorial\nprint(factorial(5))", "120"),
        E("date.month", "from datetime import date\nprint(date(2026, 10, 27).month)", "10"),
        E("gcd", "from math import gcd\nprint(gcd(12, 8))", "4"),
        E("choice", "from random import choice\nprint(choice([10, 10, 10]))", "10"),
        E("pi yuza", "import math\nr = 2\nprint(round(math.pi * r ** 2, 2))", "12.57"),
    ],
}

CONTENT[1] = {
    "teach": """
<div class="card">
  <h3>Python dasturi nima qiladi?</h3>
  <p>Kompyuterga buyruq berasiz. Eng oddiy buyruq — ekranga matn chiqarish: <code>print</code>.</p>
  <h4>1) print — ekranga chiqarish</h4>
  <pre class="code">matn = "Salom"
print(matn)</pre>
  <h4>2) Bir necha print — bir necha qator</h4>
  <pre class="code">a = "Bir"
b = "Ikki"
print(a)
print(b)</pre>
  <h4>3) Son chiqarish</h4>
  <p>Songa qo‘shtirnoq shart emas.</p>
  <pre class="code">yosh = 18
print(yosh)</pre>
  <h4>4) Izoh (#)</h4>
  <p><code>#</code> dan keyingi yozuv bajarilmaydi — o‘zingiz uchun eslatma.</p>
  <pre class="code"># bu izoh
print("OK")</pre>
  <h4>5) Bo‘sh qator</h4>
  <pre class="code">print()
print("Start")</pre>
  <h4>6) Bir qatorda bir necha so‘z</h4>
  <pre class="code">print("1 2 3")</pre>
  <div class="callout"><strong>Eslab qoling:</strong> Kod yuqoridan pastga bajariladi. Avval qiymatni o‘zgaruvchiga yozing, keyin <code>print</code>.</div>
</div>
""",
    "examples": [
        E("Oddiy print", 'soz = "Salom"\nprint(soz)', "Salom"),
        E("Ikki qator", 'a = "Bir"\nb = "Ikki"\nprint(a)\nprint(b)', "Bir keyin Ikki"),
        E("Son", "yosh = 18\nprint(yosh)", "18"),
        E("Izoh", '# eslatma\nprint("OK")', "OK — izoh bajarilmaydi"),
        E("Bo‘sh qator", 'print()\nprint("Start")', "bo‘sh qator, keyin Start"),
        E("Bir qator", 'print("1 2 3")', "1 2 3"),
    ],
}

CONTENT[2] = {
    "teach": """
<div class="card">
  <h3>O‘zgaruvchi — qiymat saqlanadigan nom</h3>
  <p><code>=</code> «teng» emas, balki <strong>berish</strong>: o‘ngdagi qiymat chapdagi nomga yoziladi.</p>
  <h4>1) Berish va chiqarish</h4>
  <pre class="code">x = 5
print(x)</pre>
  <h4>2) Matn (str)</h4>
  <pre class="code">ism = "Laylo"
print(ism)</pre>
  <h4>3) Butun son (int) va o‘nli (float)</h4>
  <pre class="code">narx = 12000
pi = 3.14
print(narx)
print(pi)</pre>
  <h4>4) bool — True / False</h4>
  <pre class="code">ok = True
flag = False
print(ok)
print(flag)</pre>
  <h4>5) Qayta yozish</h4>
  <p>Oxirgi qiymat qoladi.</p>
  <pre class="code">n = 1
n = 9
print(n)</pre>
  <h4>6) Nusxa</h4>
  <pre class="code">a = 10
b = a
print(b)</pre>
  <h4>7) Nom qoidalari</h4>
  <p>Harf yoki <code>_</code> bilan boshlanadi. <code>print</code>, <code>if</code> kabi tayyor so‘zlarni nom qilmang.</p>
  <pre class="code">user_id = 42
print(user_id)</pre>
  <div class="callout"><code>print(x)</code> — quti ichidagi qiymat. <code>print("x")</code> — harf x.</div>
</div>
""",
    "examples": [
        E("Berish", "x = 5\nprint(x)", "5"),
        E("Matn", 'ism = "Laylo"\nprint(ism)', "Laylo"),
        E("int va float", "narx = 12000\npi = 3.14\nprint(narx)\nprint(pi)", "12000 keyin 3.14"),
        E("bool", "ok = True\nprint(ok)", "True"),
        E("Qayta yozish", "n = 1\nn = 9\nprint(n)", "9"),
        E("Nusxa", "a = 10\nb = a\nprint(b)", "10"),
        E("user_id", "user_id = 42\nprint(user_id)", "42"),
        E("Bir necha tur", 'ism = "Omar"\nball = 95.5\nyutdi = True\nprint(ism)\nprint(ball)\nprint(yutdi)', "Omar, 95.5, True"),
    ],
}

CONTENT[3] = {
    "teach": """
<div class="card">
  <h3>Matn (str) bilan ishlash</h3>
  <p>Matn qo‘shtirnoq ichida. Uni ulash, uzunligini topish, boshini/oxirini tekshirish mumkin.</p>
  <h4>1) Ulash (+)</h4>
  <pre class="code">a = "Hello"
b = "World"
print(a + b)</pre>
  <h4>2) Bo‘sh joy bilan ulash</h4>
  <pre class="code">a = "Salom"
b = "Ali"
print(a + " " + b)</pre>
  <h4>3) len — uzunlik</h4>
  <pre class="code">s = "Python"
print(len(s))</pre>
  <h4>4) input — foydalanuvchidan o‘qish</h4>
  <pre class="code">ism = input()
print(ism)</pre>
  <h4>5) startswith — bilan boshlanadimi</h4>
  <pre class="code">til = "Python"
natija = til.startswith("Py")
print(natija)</pre>
  <h4>6) endswith — bilan tugaydimi</h4>
  <pre class="code">fayl = "a.txt"
print(fayl.endswith(".txt"))</pre>
  <h4>7) upper / lower</h4>
  <pre class="code">s = "ok"
print(s.upper())
print("OK".lower())</pre>
  <h4>8) strip — chetdagi bo‘sh joy</h4>
  <pre class="code">s = "  x  "
print(s.strip())</pre>
  <h4>9) replace — almashtirish</h4>
  <pre class="code">s = "a-b-c"
print(s.replace("-", "/"))</pre>
  <h4>10) find / count / split</h4>
  <pre class="code">s = "banana"
print(s.find("n"))
print(s.count("a"))
print("a b c".split())</pre>
  <h4>11) f-string</h4>
  <pre class="code">ism = "Dila"
print(f"Ism: {ism}")</pre>
  <div class="callout">Metodlar nuqta bilan chaqiriladi: <code>s.upper()</code>. Ko‘p metodlar <strong>yangi</strong> matn qaytaradi — asl o‘zgarmasligi mumkin.</div>
</div>
""",
    "examples": [
        E("Ulash", 'a = "Hello"\nb = "World"\nprint(a + b)', "HelloWorld"),
        E("len", 's = "Python"\nprint(len(s))', "6"),
        E("startswith", 'til = "Python"\nprint(til.startswith("Py"))', "True"),
        E("endswith", 'fayl = "a.txt"\nprint(fayl.endswith(".txt"))', "True"),
        E("upper/lower", 'print("ok".upper())\nprint("OK".lower())', "OK keyin ok"),
        E("strip", 'print("  x  ".strip())', "x"),
        E("replace", 'print("a-b-c".replace("-", "/"))', "a/b/c"),
        E("find/count", 's = "banana"\nprint(s.find("n"))\nprint(s.count("a"))', "2 keyin 3"),
        E("split", 'print("a b c".split())', "['a', 'b', 'c']"),
        E("f-string", 'ism = "Dila"\nprint(f"Ism: {ism}")', "Ism: Dila"),
        E("input + ulash", 'ism = input()\nprint("Salom, " + ism)', "Kiriting: Ali → Salom, Ali"),
        E("Zanjir", 's = "  ok  "\nprint(s.strip().upper())', "OK"),
    ],
}

CONTENT[4] = {
    "teach": """
<div class="card">
  <h3>Sonlar va amallar</h3>
  <p>Python da hisob-kitob: qo‘shish, ayirish, ko‘paytirish, bo‘lish va boshqalar.</p>
  <h4>1) + qo‘shish</h4>
  <pre class="code">a = 2
b = 3
yigindi = a + b
print(yigindi)</pre>
  <h4>2) - ayirish</h4>
  <pre class="code">a = 10
b = 4
print(a - b)</pre>
  <h4>3) * ko‘paytirish</h4>
  <pre class="code">print(3 * 7)</pre>
  <h4>4) / oddiy bo‘lish (float)</h4>
  <pre class="code">print(8 / 2)</pre>
  <h4>5) // butun bo‘lish</h4>
  <pre class="code">n = 7
print(n // 2)</pre>
  <h4>6) % qoldiq</h4>
  <pre class="code">n = 7
print(n % 2)</pre>
  <h4>7) ** daraja</h4>
  <pre class="code">a = 2
print(a ** 4)</pre>
  <h4>8) int(input()) — son o‘qish</h4>
  <pre class="code">n = int(input())
print(n)</pre>
  <h4>9) Amal tartibi</h4>
  <p>Avval <code>*</code> / <code>/</code>, keyin <code>+</code> <code>-</code>. Qavs tartibni o‘zgartiradi.</p>
  <pre class="code">print(2 + 3 * 4)
print((2 + 3) * 4)</pre>
  <h4>10) float()</h4>
  <pre class="code">print(float(3))</pre>
  <div class="callout"><code>"3"*2</code> → <code>"33"</code> (matn). <code>int("3")*2</code> → <code>6</code>.</div>
</div>
""",
    "examples": [
        E("Qo‘shish", "a = 2\nb = 3\nprint(a + b)", "5"),
        E("Ayirish", "print(10 - 4)", "6"),
        E("Ko‘paytirish", "print(3 * 7)", "21"),
        E("Bo‘lish /", "print(8 / 2)", "4.0"),
        E("Butun //", "print(7 // 2)", "3"),
        E("Qoldiq %", "print(7 % 2)", "1"),
        E("Daraja **", "print(2 ** 4)", "16"),
        E("int input", "n = int(input())\nprint(n * 2)", "5 kiritsangiz → 10"),
        E("Amal tartibi", "print(2 + 3 * 4)\nprint((2 + 3) * 4)", "14 keyin 20"),
        E("float", "print(float(3))", "3.0"),
        E("Soat g‘oya", "daqiqa = 130\nprint(daqiqa // 60)", "2 — to‘liq soat"),
        E("Chegirma", "narx = 10000\nprint(narx * 10 // 100)", "1000"),
    ],
}

CONTENT[5] = {
    "teach": """
<div class="card">
  <h3>Shartlar — qaror qabul qilish</h3>
  <p><code>if</code> — agar shart True bo‘lsa blok ishlaydi. <code>elif</code> — aks holda boshqa shart. <code>else</code> — hech biri emas.</p>
  <h4>1) if asosi</h4>
  <pre class="code">a = 5
b = 3
if a > b:
    print("ha")</pre>
  <h4>2) == teng</h4>
  <pre class="code">x = 4
if x == 4:
    print("teng")</pre>
  <h4>3) != teng emas</h4>
  <pre class="code">n = 1
if n != 0:
    print("bor")</pre>
  <h4>4) else</h4>
  <pre class="code">x = 1
if x == 0:
    print("nol")
else:
    print("boshqa")</pre>
  <h4>5) elif</h4>
  <pre class="code">ball = 75
if ball >= 90:
    print("A")
elif ball >= 70:
    print("B")
else:
    print("C")</pre>
  <h4>6) not — teskarisi</h4>
  <pre class="code">flag = False
if not flag:
    print("yoqilmagan")</pre>
  <h4>7) and — ikkalasi</h4>
  <pre class="code">n = 15
if n > 10 and n < 20:
    print("orasida")</pre>
  <h4>8) or — kamida bittasi</h4>
  <pre class="code">s = "yes"
if s == "ha" or s == "yes":
    print("ok")</pre>
  <h4>9) Juftlik (% 2)</h4>
  <pre class="code">n = 4
if n % 2 == 0:
    print("juft")</pre>
  <h4>10) not + endswith</h4>
  <pre class="code">fayl = "a.png"
if not fayl.endswith(".txt"):
    print("txt emas")</pre>
  <div class="callout"><code>=</code> berish, <code>==</code> teng, <code>!=</code> teng emas. Shart oxirida <code>:</code>, ichki qatorlar bo‘sh joy (indent) bilan.</div>
</div>
""",
    "examples": [
        E("if >", "a = 5\nb = 3\nif a > b:\n    print(\"ha\")", "ha"),
        E("==", "x = 4\nif x == 4:\n    print(\"teng\")", "teng"),
        E("!=", "n = 1\nif n != 0:\n    print(\"bor\")", "bor"),
        E("else", "x = 1\nif x == 0:\n    print(\"nol\")\nelse:\n    print(\"boshqa\")", "boshqa"),
        E("elif", "ball = 75\nif ball >= 90:\n    print(\"A\")\nelif ball >= 70:\n    print(\"B\")\nelse:\n    print(\"C\")", "B"),
        E("not", "flag = False\nif not flag:\n    print(\"yoqilmagan\")", "yoqilmagan"),
        E("and", "n = 15\nif n > 10 and n < 20:\n    print(\"orasida\")", "orasida"),
        E("or", "s = \"yes\"\nif s == \"ha\" or s == \"yes\":\n    print(\"ok\")", "ok"),
        E("juft", "n = 4\nif n % 2 == 0:\n    print(\"juft\")", "juft"),
        E("not endswith", 'fayl = "a.png"\nif not fayl.endswith(".txt"):\n    print("txt emas")', "txt emas"),
    ],
}

CONTENT[6] = {
    "teach": """
<div class="card">
  <h3>Takrorlash — bir ishni qayta-qayta</h3>
  <p><code>for</code> — ma’lum ketma-ketlik bo‘yicha. <code>while</code> — shart True ekan davom etadi.</p>
  <h4>1) for + range</h4>
  <pre class="code">for i in range(3):
    print(i)</pre>
  <h4>2) range(start, stop)</h4>
  <pre class="code">for i in range(1, 4):
    print(i)</pre>
  <h4>3) range qadam (step)</h4>
  <pre class="code">for i in range(0, 5, 2):
    print(i)</pre>
  <h4>4) Ro‘yxat bo‘ylab for</h4>
  <pre class="code">for x in [10, 20]:
    print(x)</pre>
  <h4>5) Yig‘indi</h4>
  <pre class="code">yigindi = 0
for n in range(1, 6):
    yigindi += n
print(yigindi)</pre>
  <h4>6) while</h4>
  <pre class="code">n = 3
while n > 0:
    print(n)
    n = n - 1</pre>
  <h4>7) break — to‘xtatish</h4>
  <pre class="code">for i in range(10):
    if i == 3:
        break
    print(i)</pre>
  <h4>8) continue — shu qadamni o‘tkazib yuborish</h4>
  <pre class="code">for i in range(5):
    if i == 2:
        continue
    print(i)</pre>
  <h4>9) while + input (0 gacha)</h4>
  <pre class="code">yigindi = 0
while True:
    n = int(input())
    if n == 0:
        break
    yigindi += n
print(yigindi)</pre>
  <h4>10) Ichma-ich for</h4>
  <pre class="code">for i in range(2):
    for j in range(2):
        print(str(i) + str(j))</pre>
  <div class="callout"><code>range(5)</code> → 0..4 (5 kirmaydi). Cheksiz while dan saqlaning — <code>break</code> yoki shartni o‘zgartiring.</div>
</div>
""",
    "examples": [
        E("range", "for i in range(3):\n    print(i)", "0 1 2"),
        E("range(1,4)", "for i in range(1, 4):\n    print(i)", "1 2 3"),
        E("step", "for i in range(0, 5, 2):\n    print(i)", "0 2 4"),
        E("for list", "for x in [10, 20]:\n    print(x)", "10 keyin 20"),
        E("Yig‘indi", "y = 0\nfor n in range(1, 6):\n    y += n\nprint(y)", "15"),
        E("while", "n = 3\nwhile n > 0:\n    print(n)\n    n -= 1", "3 2 1"),
        E("break", "for i in range(10):\n    if i == 3:\n        break\n    print(i)", "0 1 2"),
        E("continue", "for i in range(5):\n    if i == 2:\n        continue\n    print(i)", "0 1 3 4"),
        E("Ko‘paytma", "p = 1\nfor n in range(1, 5):\n    p *= n\nprint(p)", "24"),
        E("Ichma-ich", "for i in range(2):\n    for j in range(2):\n        print(str(i) + str(j))", "00 01 10 11"),
    ],
}

CONTENT[7] = {
    "teach": """
<div class="card">
  <h3>List — o‘zgaruvchan ketma-ketlik</h3>
  <p>Bir necha qiymatni bitta nom ostida saqlaydi. Indeks 0 dan boshlanadi.</p>
  <h4>1) Yaratish</h4>
  <pre class="code">sonlar = [1, 2, 3]
print(sonlar)</pre>
  <h4>2) Indeks</h4>
  <pre class="code">a = [7, 8, 9]
print(a[0])
print(a[-1])</pre>
  <h4>3) len</h4>
  <pre class="code">print(len([1, 2, 3, 4]))</pre>
  <h4>4) append — oxiriga qo‘shish</h4>
  <pre class="code">a = [1]
a.append(5)
print(a)</pre>
  <h4>5) Elementni o‘zgartirish</h4>
  <pre class="code">a = [0, 0]
a[0] = 4
print(a)</pre>
  <h4>6) for bilan aylanish</h4>
  <pre class="code">for x in [10, 20]:
    print(x)</pre>
  <h4>7) Kesish (slice)</h4>
  <pre class="code">a = [1, 2, 3, 4]
print(a[0:2])</pre>
  <h4>8) in — bor-yo‘q</h4>
  <pre class="code">print("a" in ["a", "b"])</pre>
  <h4>9) max / min / sum</h4>
  <pre class="code">a = [3, 9, 2]
print(max(a))
print(min(a))
print(sum(a))</pre>
  <h4>10) Ulash +</h4>
  <pre class="code">print([1, 2] + [3])</pre>
  <h4>11) Takror *</h4>
  <pre class="code">print([0] * 3)</pre>
  <div class="callout">List o‘zgaradi (<code>append</code>, indeksga yozish). Indeks chegaradan chiqsa — xato.</div>
</div>
""",
    "examples": [
        E("Yaratish", "sonlar = [1, 2, 3]\nprint(sonlar)", "[1, 2, 3]"),
        E("Indeks", "a = [7, 8, 9]\nprint(a[0])\nprint(a[-1])", "7 keyin 9"),
        E("len", "print(len([1, 2, 3, 4]))", "4"),
        E("append", "a = [1]\na.append(5)\nprint(a)", "[1, 5]"),
        E("O‘zgartirish", "a = [0, 0]\na[0] = 4\nprint(a)", "[4, 0]"),
        E("for", "for x in [10, 20]:\n    print(x)", "10 keyin 20"),
        E("Kesish", "print([1, 2, 3, 4][0:2])", "[1, 2]"),
        E("in", 'print("a" in ["a", "b"])', "True"),
        E("max/min", "a = [3, 9, 2]\nprint(max(a))\nprint(min(a))", "9 keyin 2"),
        E("Ulash", "print([1, 2] + [3])", "[1, 2, 3]"),
        E("[0]*3", "print([0] * 3)", "[0, 0, 0]"),
        E("Yig‘indi", "a = [1, 2, 3, 4]\ns = 0\nfor x in a:\n    s += x\nprint(s)", "10"),
    ],
}

CONTENT[8] = {
    "teach": """
<div class="card">
  <h3>List metodlari, map, filter</h3>
  <p>Ro‘yxatni o‘zgartirish uchun metodlar: insert, remove, pop, sort… Hamda <code>map</code>/<code>filter</code> — har elementga funksiya.</p>
  <h4>1) insert — joyga qo‘yish</h4>
  <pre class="code">a = [1, 3]
a.insert(1, 2)
print(a)</pre>
  <h4>2) remove — qiymatni o‘chirish</h4>
  <pre class="code">a = [1, 2, 3]
a.remove(2)
print(a)</pre>
  <h4>3) pop — indeksdan olish</h4>
  <pre class="code">a = [1, 2, 3]
oxirgi = a.pop()
print(a)
print(oxirgi)</pre>
  <h4>4) sort</h4>
  <pre class="code">a = [3, 1, 2]
a.sort()
print(a)</pre>
  <h4>5) sort reverse</h4>
  <pre class="code">a = [1, 2, 3]
a.sort(reverse=True)
print(a)</pre>
  <h4>6) index / count</h4>
  <pre class="code">a = [4, 5, 6]
print(a.index(5))
print([1, 1, 2].count(1))</pre>
  <h4>7) clear / del</h4>
  <pre class="code">a = [1, 2]
a.clear()
print(a)</pre>
  <h4>8) map — har biriga amal</h4>
  <pre class="code">sonlar = [2, 3]
kv = list(map(lambda x: x * x, sonlar))
print(kv)</pre>
  <h4>9) filter — shartga moslar</h4>
  <pre class="code">a = [1, 2, 3, 4, 5]
juft = list(filter(lambda x: x % 2 == 0, a))
print(juft)</pre>
  <h4>10) Zanjir: sort + append</h4>
  <pre class="code">a = [3, 1, 2]
a.sort()
a.append(4)
print(a)</pre>
  <div class="callout"><code>map</code>/<code>filter</code> natijasini ko‘pincha <code>list(...)</code> qilib olasiz. <code>lambda</code> — qisqa ismsiz funksiya.</div>
</div>
""",
    "examples": [
        E("insert", "a = [1, 3]\na.insert(1, 2)\nprint(a)", "[1, 2, 3]"),
        E("remove", "a = [1, 2, 3]\na.remove(2)\nprint(a)", "[1, 3]"),
        E("pop", "a = [1, 2, 3]\nx = a.pop()\nprint(a)\nprint(x)", "[1, 2] va 3"),
        E("sort", "a = [3, 1, 2]\na.sort()\nprint(a)", "[1, 2, 3]"),
        E("sort reverse", "a = [1, 2, 3]\na.sort(reverse=True)\nprint(a)", "[3, 2, 1]"),
        E("index/count", "print([4, 5, 6].index(5))\nprint([1, 1, 2].count(1))", "1 keyin 2"),
        E("clear", "a = [1, 2]\na.clear()\nprint(a)", "[]"),
        E("map", "print(list(map(lambda x: x * 2, [1, 2, 3])))", "[2, 4, 6]"),
        E("filter", "print(list(filter(lambda x: x > 10, [5, 12, 8, 20])))", "[12, 20]"),
        E("Zanjir", "a = [3, 1, 2]\na.sort()\na.append(4)\nprint(a)", "[1, 2, 3, 4]"),
    ],
}

CONTENT[12] = {
    "teach": """
<div class="card">
  <h3>Fayllar — diskdagi ma’lumot</h3>
  <p><code>open</code> bilan ochiladi, <code>with</code> bilan avtomatik yopiladi. Rejimlar: <code>r</code> o‘qish, <code>w</code> yozish, <code>a</code> qo‘shish, <code>r+</code> o‘qish+yozish, <code>rb</code>/<code>wb</code> baytlar.</p>
  <h4>1) Yozish (w)</h4>
  <pre class="code">with open("a.txt", "w", encoding="utf-8") as f:
    f.write("Salom")</pre>
  <h4>2) O‘qish (r) — read</h4>
  <pre class="code">with open("a.txt", encoding="utf-8") as f:
    matn = f.read()
print(matn)</pre>
  <h4>3) readline — bir qator</h4>
  <pre class="code">with open("p.txt", encoding="utf-8") as f:
    print(f.readline().strip())</pre>
  <h4>4) readlines — barcha qatorlar (list)</h4>
  <pre class="code">with open("q.txt", encoding="utf-8") as f:
    qatorlar = f.readlines()
print(len(qatorlar))</pre>
  <h4>5) append (a)</h4>
  <pre class="code">with open("log.txt", "a", encoding="utf-8") as f:
    f.write("B")</pre>
  <h4>6) r+ — o‘qish va yozish</h4>
  <pre class="code">with open("x.txt", "r+", encoding="utf-8") as f:
    eski = f.read()
    f.seek(0)
    f.write("YANGI")
print(eski)</pre>
  <h4>7) seek — ko‘rsatkichni siljitish</h4>
  <pre class="code">with open("a.txt", "r+", encoding="utf-8") as f:
    f.seek(0, 2)  # oxiriga
    f.write("B")</pre>
  <h4>8) rb / wb — binary</h4>
  <pre class="code">with open("b.bin", "wb") as f:
    f.write(b"ABCD")
with open("b.bin", "rb") as f:
    print(len(f.read()))</pre>
  <h4>9) Qatorlar bo‘ylab for</h4>
  <pre class="code">with open("r.txt", encoding="utf-8") as f:
    for qator in f:
        print(qator.strip())</pre>
  <h4>10) encoding="utf-8"</h4>
  <p>O‘zbek harflari uchun deyarli har doim UTF-8 yozing.</p>
  <div class="callout"><code>w</code> faylni noldan yozadi (eski o‘chadi). <code>a</code> oxiriga qo‘shadi. <code>with</code> — yopishni unutmang.</div>
</div>
""",
    "examples": [
        E("write", 'with open("a.txt", "w", encoding="utf-8") as f:\n    f.write("Salom")', "Faylga Salom yozildi"),
        E("read", 'with open("a.txt", encoding="utf-8") as f:\n    print(f.read())', "Salom"),
        E("readline", 'with open("p.txt", encoding="utf-8") as f:\n    print(f.readline().strip())', "birinchi qator"),
        E("readlines", 'with open("q.txt", encoding="utf-8") as f:\n    print(len(f.readlines()))', "qatorlar soni"),
        E("append a", 'with open("log.txt", "a", encoding="utf-8") as f:\n    f.write("B")', "oxiriga B"),
        E("r+", 'with open("x.txt", "r+", encoding="utf-8") as f:\n    print(f.read())\n    f.seek(0)\n    f.write("YANGI")', "o‘qib, boshidan yozish"),
        E("rb len", 'with open("b.bin", "wb") as f:\n    f.write(b"ABCD")\nwith open("b.bin", "rb") as f:\n    print(len(f.read()))', "4"),
        E("for qator", 'with open("r.txt", encoding="utf-8") as f:\n    for q in f:\n        print(q.strip())', "har qator alohida"),
        E("yig‘indi fayl", 'y = 0\nwith open("sum.txt", encoding="utf-8") as f:\n    for q in f:\n        y += int(q.strip())\nprint(y)', "qatordagi sonlar yig‘indisi"),
        E("endswith + fayl", 'nom = "data.txt"\nif nom.endswith(".txt"):\n    with open(nom, "w", encoding="utf-8") as f:\n        f.write("ok")\n    print("yozildi")', "yozildi"),
    ],
}

CONTENT[14] = {
    "teach": """
<div class="card">
  <h3>dict — kalit → qiymat</h3>
  <p>Lug‘atda har bir qiymatning nomi (kaliti) bor. Masalan: <code>{"ism": "Ali", "yosh": 20}</code>.</p>
  <h4>1) Yaratish va olish</h4>
  <pre class="code">talaba = {"ism": "Ali", "yosh": 20}
print(talaba["ism"])</pre>
  <h4>2) get — xavfsiz olish</h4>
  <pre class="code">d = {"a": 1}
print(d.get("c", 0))</pre>
  <h4>3) Qo‘shish / o‘zgartirish</h4>
  <pre class="code">d = {"a": 1}
d["b"] = 2
print(d)</pre>
  <h4>4) keys / values / items</h4>
  <pre class="code">d = {"z": 1, "y": 2}
print(sorted(d.keys()))
print(list(d.values()))</pre>
  <h4>5) items + for</h4>
  <pre class="code">d = {"a": 1, "b": 10}
for k, v in d.items():
    print(k, v)</pre>
  <h4>6) update</h4>
  <pre class="code">d = {"a": 1}
d.update({"b": 2})
print(d)</pre>
  <h4>7) pop</h4>
  <pre class="code">d = {"a": 1, "b": 2}
x = d.pop("a")
print(x)
print(d)</pre>
  <h4>8) setdefault</h4>
  <pre class="code">d = {}
print(d.setdefault("x", 10))
print(d["x"])</pre>
  <h4>9) in — kalit bormi</h4>
  <pre class="code">d = {"a": 1}
print("a" in d)</pre>
  <h4>10) Sanoq (amaliy)</h4>
  <pre class="code">sozlar = ["a", "b", "a"]
d = {}
for s in sozlar:
    d[s] = d.get(s, 0) + 1
print(d["a"])</pre>
  <div class="callout">Kalit odatda str/int (o‘zgarmas). List kalit bo‘lolmaydi — tuple bo‘la oladi. Yo‘q kalit: <code>d["x"]</code> xato, <code>d.get("x")</code> — None.</div>
</div>
""",
    "examples": [
        E("Yaratish", 't = {"ism": "Ali", "yosh": 20}\nprint(t["ism"])', "Ali"),
        E("get", 'd = {"a": 1}\nprint(d.get("c", 0))', "0"),
        E("Yozish", 'd = {"a": 1}\nd["b"] = 2\nprint(d)', "{'a': 1, 'b': 2}"),
        E("keys", 'print(sorted({"z": 1, "y": 2}.keys()))', "['y', 'z']"),
        E("items", 'd = {"a": 1, "b": 2}\nfor k, v in d.items():\n    print(k)', "a keyin b"),
        E("update", 'd = {"a": 1}\nd.update({"b": 2})\nprint(d)', "{'a': 1, 'b': 2}"),
        E("pop", 'd = {"a": 1, "b": 2}\nprint(d.pop("a"))\nprint(d)', "1 keyin {'b': 2}"),
        E("setdefault", 'd = {}\nprint(d.setdefault("x", 10))', "10"),
        E("in", 'print("a" in {"a": 1})', "True"),
        E("Sanoq", "sozlar = ['a', 'b', 'a']\nd = {}\nfor s in sozlar:\n    d[s] = d.get(s, 0) + 1\nprint(d['a'])", "2"),
    ],
}

CONTENT[15] = {
    "teach": """
<div class="card">
  <h3>JSON — ma’lumotni matn ko‘rinishida uzatish</h3>
  <p>API va fayllarda ko‘p ishlatiladi. Python <code>dict</code>/<code>list</code> ↔ JSON matn. Modul: <code>import json</code>.</p>
  <h4>1) dumps — Python → JSON matn</h4>
  <pre class="code">import json
data = {"a": 1}
matn = json.dumps(data)
print(matn)</pre>
  <h4>2) loads — JSON matn → Python</h4>
  <pre class="code">import json
obj = json.loads('{"yosh": 18}')
print(obj["yosh"])</pre>
  <h4>3) Roundtrip</h4>
  <pre class="code">import json
s = json.dumps({"n": 3})
print(json.loads(s)["n"])</pre>
  <h4>4) Ro‘yxat JSON</h4>
  <pre class="code">import json
print(json.loads("[1, 2, 3]"))</pre>
  <h4>5) dump / load — faylga</h4>
  <pre class="code">import json
with open("t.json", "w", encoding="utf-8") as f:
    json.dump({"x": 5}, f)
with open("t.json", encoding="utf-8") as f:
    print(json.load(f)["x"])</pre>
  <h4>6) indent — chiroyli yozish</h4>
  <pre class="code">import json
s = json.dumps({"a": 1}, indent=2)
print("a" in s)</pre>
  <h4>7) API javobi g‘oya</h4>
  <pre class="code">import json
javob = '{"token": "abc", "ok": true}'
obj = json.loads(javob)
print(obj["token"])</pre>
  <h4>8) dict yangilab qayta dumps</h4>
  <pre class="code">import json
d = json.loads('{"a": 1}')
d["b"] = 2
print(json.loads(json.dumps(d))["b"])</pre>
  <div class="callout">JSON da <code>true</code>/<code>false</code>/<code>null</code> — Python da <code>True</code>/<code>False</code>/<code>None</code>. Har doim <code>import json</code>.</div>
</div>
""",
    "examples": [
        E("dumps", 'import json\nprint(json.dumps({"a": 1}))', '{"a": 1}'),
        E("loads", 'import json\nprint(json.loads(\'{"yosh": 18}\')["yosh"])', "18"),
        E("Roundtrip", 'import json\ns = json.dumps({"n": 3})\nprint(json.loads(s)["n"])', "3"),
        E("list JSON", 'import json\nprint(json.loads("[1, 2, 3]"))', "[1, 2, 3]"),
        E("fayl dump/load", 'import json\nwith open("t.json", "w", encoding="utf-8") as f:\n    json.dump({"x": 5}, f)\nwith open("t.json", encoding="utf-8") as f:\n    print(json.load(f)["x"])', "5"),
        E("indent", 'import json\ns = json.dumps({"a": 1}, indent=2)\nprint("a" in s)', "True"),
        E("API", 'import json\nprint(json.loads(\'{"token": "abc"}\')["token"])', "abc"),
        E("Yangilash", 'import json\nd = json.loads(\'{"a": 1}\')\nd["b"] = 2\nprint(d["b"])', "2"),
    ],
}

