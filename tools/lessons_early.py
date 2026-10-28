# -*- coding: utf-8 -*-
"""Dars 1–6: asoslar (to‘liq o‘rgatish + mashqlar)."""
from helpers import stdout, var, contains, pack, block, ex

def lessons():
    out = []

    out.append({
        "id": 1,
        "title": "Python va print",
        "subtitle": "Dastur nima, print, satr, izoh — eng birinchi qadamlar.",
        "teach": """
<div class="card">
  <h3>Python nima?</h3>
  <p>Python — kompyuterga qadam-baqadam buyruq beradigan dasturlash tili. Siz yozgan kod odatda <code>.py</code> faylda saqlanadi. Python dasturi shu faylni yuqoridan pastga o‘qiydi va bajaradi.</p>
  <p>Bu saytda kod brauzerda (Pyodide) ishlaydi — g‘oya bir xil: har bir qator ketma-ket bajariladi.</p>
  <h4>print — ekranga chiqarish</h4>
  <p>Eng ko‘p ishlatiladigan buyruq: <code>print()</code>. Qavs ichidagi qiymat ekranga chiqadi.</p>
  <pre class="code">print("Salom")
print(18)
print()</pre>
  <p>Qo‘shtirnoq ichidagi matn — <strong>satr (string)</strong>. Raqamni qo‘shtirnoqsiz yozish mumkin. Bo‘sh <code>print()</code> bo‘sh qator chiqaradi.</p>
  <h4>Izoh (#)</h4>
  <p><code>#</code> dan keyingi yozuv dasturga ta’sir qilmaydi. O‘zingizga eslatma uchun:</p>
  <pre class="code"># Bugun print o‘rganamiz
print("Python")</pre>
  <div class="callout"><strong>Eslab qoling:</strong> katta-kichik harf muhim. <code>Print</code> xato, <code>print</code> to‘g‘ri. Qo‘shtirnoq ochilsa — yopilishi shart.</div>
</div>
""",
        "examples": [
            {"title": "Oddiy print", "code": 'soz = "Salom"\nprint(soz)', "why": "Avval o‘zgaruvchiga yozdik, keyin chiqardik. Natija: Salom"},
            {"title": "Bir necha qator", "code": 'a = "Bir"\nb = "Ikki"\nprint(a)\nprint(b)', "why": "Yuqoridan pastga: Bir, keyin Ikki."},
            {"title": "Izoh va raqam", "code": "# yoshni saqlaymiz\nyosh = 18\nprint(yosh)", "why": "Raqamga qo‘shtirnoq shart emas."},
            {"title": "Murakkabroq", "code": 'sarlavha = "PYTHON"\nchiziq = "====="\nprint(sarlavha)\nprint(chiziq)', "why": "Ikki o‘zgaruvchi — keyin ikki print."},
        ],
        "exercises": pack(1, block(
            [
                ex(title="Salom", task='Ekranga «Salom» so‘zini chiqaring. Katta-kichik harf aniq: Salom', checks=stdout("Salom"), hint='print("Salom")'),
                ex(title="Python so‘zi", task='Ekranga «Python» so‘zini chiqaring. Katta P bilan.', checks=stdout("Python")),
                ex(title="Raqam 10", task="Ekranga 10 raqamini chiqaring.", checks=stdout("10"), hint='print(10)'),
                ex(title="Ali ismi", task='Ekranga «Ali» ismini chiqaring.', checks=stdout("Ali")),
                ex(title="Ikki qator", task="Birinchi qatorda «Salom», ikkinchi qatorda «Dunyo» chiqsin.", checks=stdout("Salom\nDunyo")),
                ex(title="Bo‘sh qator", task="Avval bo‘sh qator, keyin «Start» so‘zini chiqaring.", checks=stdout("\nStart"), hint='print() keyin print("Start")'),
                ex(title="Izoh bilan", task="Kodda # izoh bo‘lsin va ekranga «OK» chiqsin.", checks=contains("#", stdout("OK"))),
                ex(title="100", task="Ekranga 100 raqamini chiqaring.", checks=stdout("100")),
                ex(title="Gap", task="Ekranga shu gapni chiqaring: Men Python o'rganaman", checks=stdout("Men Python o'rganaman")),
                ex(title="Uch so‘z", task="Bir qatorda 1 2 3 chiqaring (orasida bitta bo‘sh joy).", checks=stdout("1 2 3")),
            ],
            [
                ex(title="Uch qator", task="Qatorma-qator: Olma, Banan, Uzum.", checks=stdout("Olma\nBanan\nUzum")),
                ex(title="Izoh va ikki print", task="Kodda izoh bo‘lsin. Ekranda A keyin B chiqsin.", checks=contains("#", stdout("A\nB"))),
                ex(title="Yulduzlar", task="5 ta yulduzcha bitta qatorda: *****", checks=stdout("*****")),
                ex(title="Sana", task="Ekranga 27.10.2026 chiqaring.", checks=stdout("27.10.2026")),
                ex(title="Raqam va matn", task="Birinchi qatorda 5, ikkinchisida besh.", checks=stdout("5\nbesh")),
                ex(title="Menyu", task="Uch qator: 1) Choy / 2) Qahva / 3) Suv — aniq shu matn.", checks=stdout("1) Choy\n2) Qahva\n3) Suv")),
                ex(title="Qo‘shtirnoqli so‘z", task='Ekranga "Python" chiqsin (qo‘shtirnoqlar ham ko‘rinsin).', checks=stdout('"Python"'), hint="print('\\\"Python\\\"')"),
                ex(title="To‘rt raqam", task="Har qatorda: 1, 2, 3, 4.", checks=stdout("1\n2\n3\n4")),
                ex(title="Ism familiya", task="Birinchi qatorda Botir, ikkinchisida Karimov.", checks=stdout("Botir\nKarimov")),
                ex(title="Gap undov", task="Ekranga: Salom, do'stim!", checks=stdout("Salom, do'stim!")),
            ],
            [
                ex(title="Kvadrat", task="4 qator, har birida ####", checks=stdout("####\n####\n####\n####")),
                ex(title="Uchburchak", task="*\n**\n***", checks=stdout("*\n**\n***")),
                ex(title="Ramka", task="+--+\n|  |\n+--+", checks=stdout("+--+\n|  |\n+--+")),
                ex(title="Jadval", task="Ism: Ali\nYosh: 20", checks=stdout("Ism: Ali\nYosh: 20")),
                ex(title="Manzil", task="Toshkent\nYunusobod\n12", checks=stdout("Toshkent\nYunusobod\n12")),
                ex(title="Chek", task="Non  5000\nChoy 3000\nJami 8000", checks=stdout("Non  5000\nChoy 3000\nJami 8000")),
                ex(title="5 print", task="Har biri alohida print: a b c d e", checks=contains("print", stdout("a\nb\nc\nd\ne"))),
                ex(title="Sarlavha", task="PYTHON\n=====", checks=stdout("PYTHON\n=====")),
                ex(title="Ro‘yxat", task="- kitob\n- daftar\n- ruchka", checks=stdout("- kitob\n- daftar\n- ruchka")),
                ex(title="Tayyor", task="Faqat «Tayyor» so‘zini chiqaring.", checks=stdout("Tayyor")),
            ],
        )),
    })

    out.append({
        "id": 2,
        "title": "O‘zgaruvchilar va turlar",
        "subtitle": "Qiymatni nom bilan saqlash: int, float, str, bool.",
        "teach": """
<div class="card">
  <h3>O‘zgaruvchi — quticha</h3>
  <p>O‘zgaruvchi — qiymat saqlanadigan nom. <code>=</code> belgisi “teng” emas, balki <strong>berish</strong>: o‘ngdagi qiymat chapdagi nomga yoziladi.</p>
  <pre class="code">ism = "Nodira"
yosh = 21
print(ism)
print(yosh)</pre>
  <h4>Asosiy turlar</h4>
  <table class="method-table">
    <tr><th>Tur</th><th>Misollar</th><th>Izoh</th></tr>
    <tr><td><code>int</code></td><td>3, 0, -8</td><td>Butun son</td></tr>
    <tr><td><code>float</code></td><td>3.14, 70.5</td><td>O‘nli son</td></tr>
    <tr><td><code>str</code></td><td>"salom"</td><td>Matn</td></tr>
    <tr><td><code>bool</code></td><td>True, False</td><td>Mantiqiy qiymat</td></tr>
  </table>
  <h4>Nom qoidalari</h4>
  <p>Harf yoki <code>_</code> bilan boshlanadi, bo‘sh joy yo‘q: <code>user_id</code>. <code>print</code>, <code>if</code> kabi tayyor so‘zlarni nom qilmang.</p>
  <div class="callout"><strong>Muhim:</strong> <code>print(x)</code> — quticha nomini yozasiz, ichidagi qiymat chiqadi. <code>print("x")</code> esa harf x ni chiqaradi.</div>
</div>
""",
        "examples": [
            {"title": "Berish va chiqarish", "code": "x = 5\nprint(x)", "why": "Avval qutiga 5, keyin print — ekranda 5."},
            {"title": "Matn va son", "code": 'shahar = "Samarqand"\naholi = 500\nprint(shahar)\nprint(aholi)', "why": "Har tur alohida o‘zgaruvchida."},
            {"title": "Qayta yozish", "code": "n = 1\nn = 2\nprint(n)", "why": "Oxirgi qiymat qoladi: 2."},
            {"title": "Murakkabroq kartochka", "code": 'ism = "Nodira"\nyosh = 21\nok = True\nprint(ism)\nprint(yosh)\nprint(ok)', "why": "str, int, bool birga — har biri alohida print."},
        ],
        "exercises": pack(2, block(
            [
                ex(title="x = 5", task="x ga 5 bering va ekranga chiqaring.", checks=var("x", 5, stdout("5"))),
                ex(title="ism", task='ism ga "Laylo" bering va chiqaring.', checks=var("ism", "Laylo", stdout("Laylo"))),
                ex(title="narx", task="narx ga 12000 bering va chiqaring.", checks=var("narx", 12000, stdout("12000"))),
                ex(title="True", task="ok ga True bering va chiqaring.", checks=var("ok", True, stdout("True"))),
                ex(title="float", task="pi_taxmin ga 3.14 bering va chiqaring.", checks=var("pi_taxmin", 3.14, stdout("3.14"))),
                ex(title="Ikki o‘zgaruvchi", task="a=2, b=3. Avval a, keyin b ni chiqaring.", checks=var("a", 2, [{"type":"var","name":"b","equals":3},{"type":"stdout","equals":"2\n3"}])),
                ex(title="soz", task='soz = "Python" va print(soz)', checks=var("soz", "Python", stdout("Python"))),
                ex(title="Nol", task="nolinchi = 0 va print.", checks=var("nolinchi", 0, stdout("0"))),
                ex(title="False", task="flag = False, print(flag)", checks=var("flag", False, stdout("False"))),
                ex(title="Yosh", task="yosh = 18, print(yosh)", checks=var("yosh", 18, stdout("18"))),
            ],
            [
                ex(title="Qayta berish", task="x ga avval 1, keyin 9 bering. Print oxirgi qiymat.", checks=var("x", 9, stdout("9"))),
                ex(title="Ism va yosh", task='ism="Jasur", yosh=25. Avval ism, keyin yosh.', checks=stdout("Jasur\n25")),
                ex(title="Nusxa", task="a=10, b=a, print(b)", checks=var("b", 10, stdout("10"))),
                ex(title="Sana qismlari", task="kun, oy, yil = 27, 10, 2026. Har birini chiqaring.", checks=stdout("27\n10\n2026")),
                ex(title="Matn 007", task='kod = "007" (matn) va print(kod)', checks=var("kod", "007", stdout("007"))),
                ex(title="vazn", task="vazn = 70.5, print(vazn)", checks=var("vazn", 70.5, stdout("70.5"))),
                ex(title="Ikki True", task="a=True, b=True, ikkalasini chiqaring.", checks=stdout("True\nTrue")),
                ex(title="user_id", task="user_id = 42, print(user_id)", checks=var("user_id", 42, stdout("42"))),
                ex(title="Rang", task='rang="qizil" keyin "ko\'k", print(rang)', checks=var("rang", "ko'k", stdout("ko'k"))),
                ex(title="Son va matn", task="son=4, soz='tort', ikkalasini chiqaring.", checks=stdout("4\ntort")),
            ],
            [
                ex(title="Zanjir", task="a=1; b=a; c=b; print(c)", checks=var("c", 1, stdout("1"))),
                ex(title="Yangilash", task="n ga 0, keyin 5, keyin 10 bering, print(n).", checks=var("n", 10, stdout("10"))),
                ex(title="Aralash", task='ism="Omar", ball=95.5, yutdi=True — tartib bilan chiqaring.', checks=stdout("Omar\n95.5\nTrue")),
                ex(title="To‘liq ism", task='ism="Malika", familiya="Saidova" — ikkalasini chiqaring.', checks=stdout("Malika\nSaidova")),
                ex(title="sanoq", task="sanoq=0, print(sanoq)", checks=var("sanoq", 0, stdout("0"))),
                ex(title="Manfiy", task="farq = -3, print(farq)", checks=var("farq", -3, stdout("-3"))),
                ex(title="Ikki float", task="x=1.5, y=2.5 — ikkalasini chiqaring.", checks=stdout("1.5\n2.5")),
                ex(title="parol", task='parol = "abc123", print(parol)', checks=var("parol", "abc123", stdout("abc123"))),
                ex(title="v yangilash", task="v='a' keyin 'b' keyin 'c', print(v)", checks=var("v", "c", stdout("c"))),
                ex(title="Barcha turlar", task="i=1, f=1.0, s='bir', b=False — har qatorda.", checks=stdout("1\n1.0\nbir\nFalse")),
            ],
        )),
    })

    out.append({
        "id": 3,
        "title": "Matn, input va str metodlari",
        "subtitle": "Ulash, len, input, f-string + startswith, endswith, replace, find…",
        "teach": """
<div class="card">
  <h3>Matn (str) bilan ishlash</h3>
  <p>Yaxshi odat: avval o‘zgaruvchiga saqlang, keyin ishlating / print qiling.</p>
  <pre class="code">a = "Salom, "
b = "Ali"
gap = a + b
print(gap)</pre>
  <h4>input() va f-string</h4>
  <pre class="code">ism = input()
xabar = f"Salom, {ism}"
print(xabar)</pre>
  <h4>Matn metodlari (list emas — str!)</h4>
  <table class="method-table">
    <tr><th>Metod</th><th>Nima qiladi</th></tr>
    <tr><td><code>startswith(x)</code></td><td>Shu bilan boshlanadimi? → True/False</td></tr>
    <tr><td><code>endswith(x)</code></td><td>Shu bilan tugaydimi?</td></tr>
    <tr><td><code>find(x)</code></td><td>Qayerdan boshlanadi (yo‘q → -1)</td></tr>
    <tr><td><code>replace(a, b)</code></td><td>a ni b ga almashtirish</td></tr>
    <tr><td><code>strip()</code> / <code>upper()</code> / <code>lower()</code></td><td>Tozalash / katta-kichik</td></tr>
    <tr><td><code>count(x)</code> / <code>split()</code></td><td>Sanash / bo‘lish</td></tr>
  </table>
  <div class="callout"><strong>Eslab qoling:</strong> <code>startswith</code> list da yo‘q. Faqat matnda.</div>
</div>
""",
        "examples": [
            {"title": "Ulash", "code": 'a = "Qora"\nb = "qalpoq"\nnatija = a + b\nprint(natija)', "why": "Avval uladik, keyin print. Natija: Qoraqalpoq"},
            {"title": "startswith", "code": 'til = "Python"\nboshlanadi = til.startswith("Py")\nprint(boshlanadi)', "why": "True — «Py» bilan boshlanadi."},
            {"title": "endswith", "code": 'fayl = "hisobot.txt"\ntugaydi = fayl.endswith(".txt")\nprint(tugaydi)', "why": "True — fayl .txt bilan tugaydi."},
            {"title": "find", "code": 'matn = "abracadabra"\njoy = matn.find("cad")\nprint(joy)', "why": "4 — «cad» shu indeksdan boshlanadi. Topilmasa -1."},
            {"title": "replace va strip", "code": 'xom = "  a-b-c  "\ntozalandi = xom.strip()\nalmashdi = tozalandi.replace("-", "/")\nprint(almashdi)', "why": "Bosqichma-bosqich: strip → replace → print. Natija: a/b/c"},
            {"title": "Murakkab: URL tekshiruv", "code": 'url = "https://example.com/page"\nok = url.startswith("https") and url.endswith("page")\nprint(ok)', "why": "Ikki shart birga (and keyingi darsda chuqurroq). Natija: True"},
        ],
        "exercises": pack(3, block(
            [
                ex(title="Ulash", task='a="Hello", b="World" qilib ulab print qiling (bo‘sh joysiz): HelloWorld', checks=stdout("HelloWorld"), hint='a="Hello"\nb="World"\nprint(a+b)'),
                ex(title="Bo‘sh joy", task='a="Salom", b="Ali". Orasida bo‘sh joy bilan print: Salom Ali', checks=stdout("Salom Ali")),
                ex(title="len", task='s="Python" ga saqlang, len(s) ni print qiling (6).', checks=var("s", "Python", stdout("6"))),
                ex(title="input", task="ism=input(), keyin ism ni print. (Anor)", checks=stdout("Anor"), stdin="Anor"),
                ex(title="Salom + input", task='ism=input(); xabar="Salom, "+ism; print(xabar). (Kamol)', checks=stdout("Salom, Kamol"), stdin="Kamol"),
                ex(title="startswith", task='til="Python"; natija=til.startswith("Py"); print(natija) → True', checks=stdout("True")),
                ex(title="endswith", task='fayl="a.txt"; natija=fayl.endswith(".txt"); print(natija) → True', checks=stdout("True")),
                ex(title="upper", task='s="ok"; natija=s.upper(); print(natija) → OK', checks=stdout("OK")),
                ex(title="lower", task='s="OK"; natija=s.lower(); print(natija) → ok', checks=stdout("ok")),
                ex(title="strip", task='s="  x  "; natija=s.strip(); print(natija) → x', checks=stdout("x")),
            ],
            [
                ex(title="replace", task='s="a-b-c"; natija=s.replace("-","/"); print(natija) → a/b/c', checks=stdout("a/b/c")),
                ex(title="find", task='s="abc"; joy=s.find("b"); print(joy) → 1', checks=stdout("1")),
                ex(title="count", task='s="banana"; n=s.count("a"); print(n) → 3', checks=stdout("3")),
                ex(title="split", task='s="a b c"; qismlar=s.split(); print(qismlar)', checks=stdout("['a', 'b', 'c']")),
                ex(title="startswith False", task='s="Salom"; print(s.startswith("Ha")) → False', checks=stdout("False")),
                ex(title="endswith False", task='s="rasm.png"; print(s.endswith(".jpg")) → False', checks=stdout("False")),
                ex(title="f-string + 2-dars", task='ism=input(); xabar=f"Ism: {ism}"; print(xabar)', checks=stdout("Ism: Dila"), stdin="Dila"),
                ex(title="join", task='qismlar=["a","b","c"]; print("-".join(qismlar)) → a-b-c', checks=stdout("a-b-c")),
                ex(title="Takror", task='s="ha"; print(s*3) → hahaha', checks=stdout("hahaha")),
                ex(title="input startswith", task='s=input(); print(s.startswith("Py")) — Python → True', checks=stdout("True"), stdin="Python"),
            ],
            [
                ex(title="Bog‘lash: salom", task='(1–2 dars) ism=input(); print(f"Salom, {ism}!")', checks=stdout("Salom, Nilufar!"), stdin="Nilufar"),
                ex(title="endswith + input", task='nom=input(); ok=nom.endswith(".txt"); print(ok) — a.txt → True', checks=stdout("True"), stdin="a.txt"),
                ex(title="replace input", task='s=input(); print(s.replace(" ","_")) — a b → a_b', checks=stdout("a_b"), stdin="a b"),
                ex(title="find yo‘q", task='s="abc"; print(s.find("z")) → -1', checks=stdout("-1")),
                ex(title="Zanjir metod", task='s="  ok  "; natija=s.strip().upper(); print(natija) → OK', checks=stdout("OK")),
                ex(title="startswith http", task='u=input(); print(u.startswith("http"))', checks=stdout("True"), stdin="http://x"),
                ex(title="count + len", task='s=input(); print(s.count("a")); print(len(s)) — banana → 3 va 6', checks=stdout("3\n6"), stdin="banana"),
                ex(title="split + len", task='s="bir ikki uch"; print(len(s.split())) → 3', checks=stdout("3")),
                ex(title="ID (o‘zgaruvchi)", task='kod="ID-"; n=input(); natija=kod+n; print(natija)', checks=stdout("ID-77"), stdin="77"),
                ex(title="Murakkab tekshiruv", task='fayl="data.TXT"; print(fayl.lower().endswith(".txt")) → True', checks=stdout("True")),
            ],
        )),
    })

    out.append({
        "id": 4,
        "title": "Sonlar va amallar",
        "subtitle": "+ - * / // % ** , int() va float().",
        "teach": """
<div class="card">
  <h3>Hisob-kitob</h3>
  <table class="method-table">
    <tr><th>Amal</th><th>Misoli</th><th>Natija</th></tr>
    <tr><td><code>+</code> <code>-</code> <code>*</code></td><td>3+4, 10-2, 3*7</td><td>7, 8, 21</td></tr>
    <tr><td><code>/</code></td><td>5/2</td><td>2.5 (float)</td></tr>
    <tr><td><code>//</code></td><td>5//2</td><td>2 (butun bo‘lish)</td></tr>
    <tr><td><code>%</code></td><td>5%2</td><td>1 (qoldiq)</td></tr>
    <tr><td><code>**</code></td><td>2**3</td><td>8 (daraja)</td></tr>
  </table>
  <p>Matndan songa: <code>n = int(input())</code>. O‘nli uchun <code>float()</code>.</p>
  <div class="callout"><strong>Diqqat:</strong> <code>"3"*2</code> → <code>"33"</code> (matn). <code>int("3")*2</code> → <code>6</code>.</div>
</div>
""",
        "examples": [
            {"title": "Qo‘shish", "code": "a = 3\nb = 4\nyigindi = a + b\nprint(yigindi)", "why": "Avval hisob, keyin print. Natija: 7"},
            {"title": "Qoldiq", "code": "n = 17\nqoldiq = n % 5\nprint(qoldiq)", "why": "2 — 15+2."},
            {"title": "input son", "code": "n = int(input())\nikki = n * 2\nprint(ikki)", "why": "Matnni int qilib, keyin ko‘paytiramiz."},
            {"title": "Murakkab: chegirma", "code": "narx = 10000\nfoiz = 10\nchegirma = narx * foiz // 100\nprint(chegirma)", "why": "1000. Amallar o‘zgaruvchilar orqali."},
        ],
        "exercises": pack(4, block(
            [
                ex(title="Qo‘shish", task="a ga 2, b ga 3 bering. Yig‘indini yigindi o‘zgaruvchisiga yozib print qiling.", checks=stdout("5"),
                   solution="a = 2\nb = 3\nyigindi = a + b\nprint(yigindi)"),
                ex(title="Ayirish", task="a ga 10, b ga 4 bering. Farqni farq o‘zgaruvchisiga yozib chiqaring.", checks=stdout("6"),
                   solution="a = 10\nb = 4\nfarq = a - b\nprint(farq)"),
                ex(title="Ko‘paytirish", task="a ga 3, b ga 7 bering. Ko‘paytmani natija ga yozib print qiling.", checks=stdout("21"),
                   solution="a = 3\nb = 7\nnatija = a * b\nprint(natija)"),
                ex(title="Bo‘lish", task="a ga 8, b ga 2 bering. Oddiy bo‘lish (/) natijasini chiqaring.", checks=stdout("4.0"),
                   solution="a = 8\nb = 2\nnatija = a / b\nprint(natija)"),
                ex(title="Butun bo‘lish", task="n ga 7 bering. Uni 2 ga butun bo‘ling (//) va natijani chiqaring.", checks=stdout("3"),
                   solution="n = 7\nnatija = n // 2\nprint(natija)"),
                ex(title="Qoldiq", task="n ga 7 bering. Uni 2 ga bo‘lganda qancha qoldiq qolishini % bilan topib chiqaring.", checks=stdout("1"),
                   solution="n = 7\nqoldiq = n % 2\nprint(qoldiq)"),
                ex(title="Daraja", task="a ga 2 bering. a ning 4-darajasini hisoblab chiqaring.", checks=stdout("16"),
                   solution="a = 2\nnatija = a ** 4\nprint(natija)"),
                ex(title="int input", task="int(input()) bilan son o‘qing va shu sonni print qiling.", checks=stdout("9"), stdin="9",
                   solution="n = int(input())\nprint(n)"),
                ex(title="Yig‘indi", task="a ga 5, b ga 6 bering. Yig‘indini print qiling.", checks=stdout("11"),
                   solution="a = 5\nb = 6\nyigindi = a + b\nprint(yigindi)"),
                ex(title="Uch barobar", task="x ga 4 bering. Uni 3 ga ko‘paytirib chiqaring.", checks=stdout("12"),
                   solution="x = 4\nnatija = x * 3\nprint(natija)"),
            ],
            [
                ex(title="Ikki input yig‘indi", task="Ikki marta int(input()) qiling va yig‘indisini chiqaring.", checks=stdout("15"), stdin="7\n8",
                   solution="a = int(input())\nb = int(input())\nyigindi = a + b\nprint(yigindi)"),
                ex(title="Farq", task="a ga 20, b ga 3 bering. Farqni chiqaring.", checks=stdout("17"),
                   solution="a = 20\nb = 3\nfarq = a - b\nprint(farq)"),
                ex(title="Qavs", task="Avval 2 va 3 ni qo‘shing, keyin 4 ga ko‘paytiring (qavs bilan). Natijani chiqaring.", checks=stdout("20"),
                   solution="natija = (2 + 3) * 4\nprint(natija)"),
                ex(title="Uch son yig‘indisi", task="2, 4 va 6 ning yig‘indisini chiqaring.", checks=stdout("12"),
                   solution="yigindi = 2 + 4 + 6\nprint(yigindi)"),
                ex(title="Modulo", task="10 ni 3 ga bo‘lgandagi qoldiqni % bilan chiqaring.", checks=stdout("1"),
                   solution="qoldiq = 10 % 3\nprint(qoldiq)"),
                ex(title="Kvadrat", task="n=int(input()). n ning kvadratini chiqaring.", checks=stdout("25"), stdin="5",
                   solution="n = int(input())\nkvadrat = n ** 2\nprint(kvadrat)"),
                ex(title="float", task="3 sonini float() qilib chiqaring.", checks=stdout("3.0"),
                   solution="n = 3\nnatija = float(n)\nprint(natija)"),
                ex(title="O‘nli bo‘lish", task="9 ni 2 ga / operatori bilan bo‘ling va chiqaring.", checks=stdout("4.5"),
                   solution="natija = 9 / 2\nprint(natija)"),
                ex(title="Butun qism", task="9 ni 2 ga // operatori bilan bo‘ling va chiqaring.", checks=stdout("4"),
                   solution="natija = 9 // 2\nprint(natija)"),
                ex(title="O‘n barobar", task="n=int(input()). Uni 10 ga ko‘paytirib chiqaring.", checks=stdout("80"), stdin="8",
                   solution="n = int(input())\nnatija = n * 10\nprint(natija)"),
            ],
            [
                ex(title="Amal tartibi", task="2 ga 3 ning 4 ga ko‘paytmasini qo‘shing (ko‘paytirish avval bajariladi). Natijani o‘zgaruvchiga yozib print qiling.", checks=stdout("14"),
                   solution="natija = 2 + 3 * 4\nprint(natija)"),
                ex(title="Perimetr", task="eni=5, boyi=3. To‘g‘ri to‘rtburchak perimetrini 2*(eni+boyi) bilan topib chiqaring.", checks=stdout("16"),
                   solution="eni = 5\nboyi = 3\nperimetr = 2 * (eni + boyi)\nprint(perimetr)"),
                ex(title="Dollar", task="so‘m=int(input()). 1 dollar=12000 so‘m. Necha to‘liq dollar chiqishini // bilan toping.", checks=stdout("2"), stdin="24000",
                   solution="som = int(input())\ndollar = som // 12000\nprint(dollar)"),
                ex(title="Soat", task="130 daqiqa berilgan. Unda necha to‘liq soat borligini // 60 bilan hisoblab chiqaring.", checks=stdout("2"),
                   solution="daqiqa = 130\nsoat = daqiqa // 60\nprint(soat)"),
                ex(title="Daqiqa qoldiq", task="130 daqiqadan soatlarni olib tashlaganda necha daqiqa qoladi? % 60 bilan toping.", checks=stdout("10"),
                   solution="daqiqa = 130\nqoldiq = daqiqa % 60\nprint(qoldiq)"),
                ex(title="Uch yig‘indi", task="Uch marta int(input()) qiling va yig‘indisini chiqaring.", checks=stdout("6"), stdin="1\n2\n3",
                   solution="a = int(input())\nb = int(input())\nc = int(input())\nyigindi = a + b + c\nprint(yigindi)"),
                ex(title="Ikki daraja", task="a=int(input()). 2 ning a-darajasini hisoblab chiqaring.", checks=stdout("8"), stdin="3",
                   solution="a = int(input())\nnatija = 2 ** a\nprint(natija)"),
                ex(title="Manfiy farq", task="5 dan 12 ni ayiring. Natijani o‘zgaruvchiga yozib print qiling.", checks=stdout("-7"),
                   solution="natija = 5 - 12\nprint(natija)"),
                ex(title="O‘rtacha", task="a=10, b=20. O‘rtachani (a+b)/2 bilan topib chiqaring.", checks=stdout("15.0"),
                   solution="a = 10\nb = 20\norta = (a + b) / 2\nprint(orta)"),
                ex(title="Chegirma", task="narx=10000. 10 foiz chegirmani narx*10//100 bilan hisoblab chiqaring.", checks=stdout("1000"),
                   solution="narx = 10000\nchegirma = narx * 10 // 100\nprint(chegirma)"),
            ],
        )),
    })

    out.append({
        "id": 5,
        "title": "Shartlar: if elif else",
        "subtitle": "==, != (teng emas), not, and/or — tarmoqlanish.",
        "teach": """
<div class="card">
  <h3>Agar ... bo‘lsa</h3>
  <pre class="code">n = int(input())
if n > 0:
    print("musbat")
elif n < 0:
    print("manfiy")
else:
    print("nol")</pre>
  <h4>Taqqoslash</h4>
  <table class="method-table">
    <tr><th>Belgi</th><th>Ma’nosi</th><th>Misol</th></tr>
    <tr><td><code>==</code></td><td>teng</td><td><code>x == 4</code></td></tr>
    <tr><td><code>!=</code></td><td><strong>teng emas</strong></td><td><code>x != 0</code></td></tr>
    <tr><td><code>&lt; &gt; &lt;= &gt;=</code></td><td>kichik/katta</td><td><code>n &gt;= 18</code></td></tr>
  </table>
  <h4>not — teskarisi</h4>
  <pre class="code">flag = False
if not flag:
    print("yoqilmagan")

s = "test"
if not s.startswith("http"):
    print("URL emas")</pre>
  <p><code>and</code> — ikkalasi True; <code>or</code> — kamida bittasi True; <code>not</code> — True↔False.</p>
  <div class="callout"><strong>Adashmang:</strong> <code>=</code> berish, <code>==</code> teng, <code>!=</code> teng emas.</div>
</div>
""",
        "examples": [
            {"title": "== teng", "code": 'parol = "admin"\nif parol == "admin":\n    javob = "kirish"\nelse:\n    javob = "xato"\nprint(javob)', "why": "Avval shart, keyin javob o‘zgaruvchida, oxirida print."},
            {"title": "!= teng emas", "code": "n = 5\nif n != 0:\n    print(\"nol emas\")\nelse:\n    print(\"nol\")", "why": "5 nolga teng emas → «nol emas»."},
            {"title": "not", "code": 'fayl = "rasm.png"\nok = fayl.endswith(".txt")\nif not ok:\n    print("txt emas")\nelse:\n    print("txt")', "why": "3-dars endswith + not. Natija: txt emas"},
            {"title": "elif ball", "code": "ball = 75\nif ball >= 90:\n    baho = \"A\"\nelif ball >= 70:\n    baho = \"B\"\nelse:\n    baho = \"C\"\nprint(baho)", "why": "B"},
            {"title": "and + !=", "code": "yosh = 20\nruxsat = True\nif yosh >= 18 and ruxsat != False:\n    print(\"ok\")\nelse:\n    print(\"yoq\")", "why": "Ikki shart: yosh va ruxsat. Natija: ok"},
            {"title": "not + startswith", "code": 'url = "ftp://server"\nif not url.startswith("http"):\n    print("http emas")', "why": "Oldingi dars metodi + not."},
        ],
        "exercises": pack(5, block(
            [
                ex(title="5>3", task="a=5, b=3. Agar a>b bo‘lsa «ha» print.", checks=stdout("ha")),
                ex(title="Tenglik ==", task='x=4. Agar x==4: javob="teng"; print(javob)', checks=stdout("teng")),
                ex(title="!= teng emas", task='n=1. Agar n!=0: print("bor")', checks=stdout("bor")),
                ex(title="!= matn", task='s="ok". Agar s!="yoq": print("boshqa")', checks=stdout("boshqa")),
                ex(title="not False", task="flag=False. Agar not flag: print(\"yoqilmagan\")", checks=stdout("yoqilmagan")),
                ex(title="else", task='x=1. x==0 bo‘lsa "nol" else "boshqa"', checks=stdout("boshqa")),
                ex(title="Musbat", task="n=int(input()); n>0 → musbat. (8)", checks=stdout("musbat"), stdin="8"),
                ex(title="Juft", task="n=4; n%2==0 → juft", checks=stdout("juft")),
                ex(title="Matn ==", task='s="ok"; s=="ok" → yes', checks=stdout("yes")),
                ex(title=">=", task="n=10; n>=10 → yetarli", checks=stdout("yetarli")),
            ],
            [
                ex(title="not + endswith", task='(3-dars) fayl="a.png"; agar not fayl.endswith(".txt"): print("txt emas")', checks=stdout("txt emas")),
                ex(title="!= input", task='p=input(); agar p!="admin": print("xato") else print("kirish") — 123', checks=stdout("xato"), stdin="123"),
                ex(title="Max", task="a=3,b=8; kattasini print", checks=stdout("8")),
                ex(title="Min", task="Ikki int, kichigi. (5,2→2)", checks=stdout("2"), stdin="5\n2"),
                ex(title="3 holat", task="musbat/manfiy/nol. (-4)", checks=stdout("manfiy"), stdin="-4"),
                ex(title="and", task="n=15; n>10 and n<20 → orasida", checks=stdout("orasida")),
                ex(title="or", task='s=input(); s=="ha" or s=="yes" → ok. (yes)', checks=stdout("ok"), stdin="yes"),
                ex(title="not startswith", task='u=input(); agar not u.startswith("http"): print("yoq") else print("ha") — ftp://x', checks=stdout("yoq"), stdin="ftp://x"),
                ex(title="Yosh", task="yosh>=18 → kattalar else bola. (17)", checks=stdout("bola"), stdin="17"),
                ex(title="!= yoki teng", task="a=5,b=5. Agar a!=b: print('farq') else print('teng')", checks=stdout("teng")),
            ],
            [
                ex(title="Bog‘lash: fayl", task='nom=input(); agar nom.endswith(".txt") and nom!="": print("ok") else print("yoq") — a.txt', checks=stdout("ok"), stdin="a.txt"),
                ex(title="not + len", task='s=input(); agar not len(s)==0: print(s) else print("bosh") — hi', checks=stdout("hi"), stdin="hi"),
                ex(title="Juft-musbat", task="n juft va >0 → juft-musbat. (4)", checks=stdout("juft-musbat"), stdin="4"),
                ex(title="1..10", task="n 1..10 → bor. (10)", checks=stdout("bor"), stdin="10"),
                ex(title="Max 3", task="Uch int max. (3,9,4→9)", checks=stdout("9"), stdin="3\n9\n4"),
                ex(title="Baholash", task="90A 70B 60C else D. (60→C)", checks=stdout("C"), stdin="60"),
                ex(
                    title="Kabisa",
                    task="yil=int(input()); agar yil%4==0: print('kabisa') else print('oddiy') — 2024",
                    checks=stdout("kabisa"),
                    stdin="2024",
                ),
                ex(title="!= sonlar", task="a,b=int,int; agar a!=b: print('farq') else print('teng') — 3\\n5", checks=stdout("farq"), stdin="3\n5"),
                ex(title="not in g‘oya", task='s="salom"; agar "x" not in s: print("yoq")', checks=stdout("yoq")),
                ex(title="Murakkab", task='ball=int(input()); agar ball!=0 and ball>=60: print("otdi") else print("qoldi") — 60', checks=stdout("otdi"), stdin="60"),
            ],
        )),
    })

    out.append({
        "id": 6,
        "title": "Takrorlash: for va while",
        "subtitle": "range, matn/list bo‘ylab, while, break/continue.",
        "teach": """
<div class="card">
  <h3>Bir narsani qayta-qayta</h3>
  <p><code>for</code> — necha marta yoki nima ustida yurish aniq bo‘lsa. <code>while</code> — shart True ekan davom etadi.</p>
  <pre class="code">for i in range(3):
    print(i)   # 0 1 2

n = 3
while n > 0:
    print(n)
    n = n - 1</pre>
  <h4>range</h4>
  <p><code>range(5)</code> → 0..4; <code>range(1,5)</code> → 1..4; <code>range(0,10,2)</code> → 0,2,4,6,8.</p>
  <div class="callout"><strong>Cheksiz sikl:</strong> while sharti hech qachon False bo‘lmasa to‘xtamaydi. Har doim o‘zgaruvchini o‘zgartiring. <code>break</code> — to‘xtatadi, <code>continue</code> — shu qadamni o‘tkazadi.</div>
</div>
""",
        "examples": [
            {"title": "range", "code": "for i in range(1, 4):\n    print(i)", "why": "1, 2, 3 har qatorda."},
            {"title": "Yig‘indi (o‘zgaruvchi)", "code": "yigindi = 0\nfor n in range(1, 6):\n    yigindi = yigindi + n\nprint(yigindi)", "why": "Avval yig‘ib, oxirida print. Natija: 15"},
            {"title": "while", "code": "x = 0\nwhile x < 3:\n    print(x)\n    x = x + 1", "why": "0 1 2"},
            {"title": "if + for (bog‘lash)", "code": 'matn = "PyThOn"\nfor harf in matn:\n    if harf != harf.lower():\n        print(harf)', "why": "Katta harflarni chiqaradi: P T O — != va for birga."},
            {"title": "endswith filtri", "code": 'fayllar = ["a.txt", "b.png", "c.txt"]\nfor f in fayllar:\n    if f.endswith(".txt"):\n        print(f)', "why": "3+5+6 dars: a.txt va c.txt"},
        ],
        "exercises": pack(6, block(
            [
                ex(title="3 marta ha", task="for bilan «ha» ni 3 marta chiqaring.", checks=contains("for", stdout("ha\nha\nha"))),
                ex(title="range 3", task="0 1 2 ni range(3) bilan.", checks=stdout("0\n1\n2")),
                ex(title="1..3", task="range(1,4) bilan 1 2 3.", checks=stdout("1\n2\n3")),
                ex(title="4 yulduz", task="4 qator *", checks=stdout("*\n*\n*\n*")),
                ex(title="while 1..3", task="while bilan 1 2 3.", checks=contains("while", stdout("1\n2\n3"))),
                ex(title="harflar", task='s="ok"; for bilan harflar', checks=stdout("o\nk")),
                ex(title="step", task="range(0,5,2) → 0 2 4", checks=stdout("0\n2\n4")),
                ex(title="5 marta 1", task="1 ni 5 marta.", checks=stdout("1\n1\n1\n1\n1")),
                ex(title="0..4", task="0 dan 4 gacha.", checks=stdout("0\n1\n2\n3\n4")),
                ex(title="while 2 1", task="n=2; while n>0: print(n); n-=1", checks=stdout("2\n1")),
            ],
            [
                ex(title="Yig‘indi", task="yigindi=0; for 1..5; print(yigindi) → 15", checks=contains("for", stdout("15"))),
                ex(title="n marta x", task="n=int(input()), n marta x. (3)", checks=stdout("x\nx\nx"), stdin="3"),
                ex(title="2 4 6", task="for bilan 2 4 6", checks=stdout("2\n4\n6")),
                ex(title="while 6", task="while bilan 1+2+3=6", checks=contains("while", stdout("6"))),
                ex(title="!= filtri", task="for i in range(5): agar i!=2: print(i) → 0 1 3 4", checks=stdout("0\n1\n3\n4")),
                ex(title="startswith loop", task='for s in ["Py","Java","Py2"]:\n  agar s.startswith("Py"): print(s)', checks=stdout("Py\nPy2")),
                ex(title="1 4 7", task="range(1,8,3)", checks=stdout("1\n4\n7")),
                ex(title="1*2*3*4", task="ko‘paytma 24", checks=stdout("24")),
                ex(title="1..n", task="n=4, 1..n", checks=stdout("1\n2\n3\n4"), stdin="4"),
                ex(title="yulduzlar", task="* ** ***", checks=stdout("*\n**\n***")),
            ],
            [
                ex(title="5!", task="5 faktorial 120", checks=stdout("120")),
                ex(title="endswith filter", task='for f in ["a.txt","b.png","c.txt"]:\n  agar f.endswith(".txt"): print(f)', checks=stdout("a.txt\nc.txt")),
                ex(title="0 gacha", task="3 4 0 → yig‘indi 7", checks=stdout("7"), stdin="3\n4\n0"),
                ex(title="Kvadratlar", task="1 4 9 16", checks=stdout("1\n4\n9\n16")),
                ex(title="not continue", task="0..4, agar i==2: continue; print → 0 1 3 4", checks=contains("continue", stdout("0\n1\n3\n4"))),
                ex(title="Toq yig‘indi", task="1..10 toq yig‘indi 25", checks=stdout("25")),
                ex(title="3 jadval", task="3 6 9 12", checks=stdout("3\n6\n9\n12")),
                ex(title="break", task="0 1 2 break", checks=contains("break", stdout("0\n1\n2"))),
                ex(title="!= 0 yig‘indi", task="for n in [3,0,4]: agar n!=0: ... yigindi print 7", checks=stdout("7")),
                ex(title="Ichma-ich", task="00 01 10 11", checks=stdout("00\n01\n10\n11")),
            ],
        )),
    })

    return out
