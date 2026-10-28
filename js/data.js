const COURSE = {
  "lessons": [
    {
      "id": 1,
      "title": "Python va print",
      "subtitle": "Dastur nima, print, satr, izoh — eng birinchi qadamlar.",
      "teach": "\n<div class=\"card\">\n  <h3>Python dasturi nima qiladi?</h3>\n  <p>Python dasturi — kompyuterga berilgan buyruqlar ketma-ketligi. Eng birinchi qadam: natijani ekranda ko‘rish. Buning uchun print() ishlatiladi. Quyida matn, son, izoh va bo‘sh qator chiqarishni bosqichma-bosqich ko‘rasiz.</p>\n  <h4>1) print — ekranga chiqarish</h4>\n  <p class=\"teach-explain\">print() funksiyasi berilgan qiymatni ekranga (konsolga) chiqaradi. Bu eng asosiy buyruq: o‘zgaruvchi yoki matnni ko‘rish uchun ishlatiladi. Qavs ichiga yozgan narsangiz chiqadi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">matn = \"Salom\"\nprint(matn)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">Salom</code></div></div>\n  <h4>2) Bir necha print — bir necha qator</h4>\n  <p class=\"teach-explain\">Har bir print() odatda yangi qatordan boshlanadi. Bir necha marta print chaqirsangiz, natija bir necha qator bo‘lib chiqadi. Shunday qilib ketma-ket xabarlarni chiqarishingiz mumkin.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = \"Bir\"\nb = \"Ikki\"\nprint(a)\nprint(b)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">Bir\nIkki\n</pre></div></div>\n  <h4>3) Son chiqarish</h4>\n  <p class=\"teach-explain\">Sonlarni print qilganda qo‘shtirnoq shart emas. 18 yoki 3.14 kabi qiymat to‘g‘ridan-to‘g‘ri yoziladi. Matn bo‘lsa qo‘shtirnoq kerak, son bo‘lsa kerak emas.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">yosh = 18\nprint(yosh)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">18</code></div></div>\n  <h4>4) Izoh (#)</h4>\n  <p class=\"teach-explain\"># belgisidan keyingi yozuv bajarilmaydi — bu izoh (comment). O‘zingiz yoki boshqalar uchun eslatma yozasiz. Dastur ishlashiga ta’sir qilmaydi, lekin kodni tushunishni osonlashtiradi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\"># bu izoh\nprint(\"OK\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">OK</code></div></div>\n  <h4>5) Bo‘sh qator</h4>\n  <p class=\"teach-explain\">print() ni ichida hech narsa bermasangiz, bo‘sh qator chiqadi. Bu natijani ajratish yoki o‘qishni qulay qilish uchun qulay. Keyin oddiy print bilan matn chiqarishingiz mumkin.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">print()\nprint(\"Start\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">\nStart\n</pre></div></div>\n  <h4>6) Bir qatorda bir necha so‘z</h4>\n  <p class=\"teach-explain\">Bitta print ichida bo‘sh joy bilan bir necha so‘zni birlashtirib chiqarishingiz mumkin. Yoki bir necha argument berib, ular oralig‘ida bo‘sh joy chiqadi. Masalan print(\"1 2 3\") yoki print(1, 2, 3).</p>\n  <div class=\"code-wrap\"><pre class=\"code\">print(\"1 2 3\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">1 2 3</code></div></div>\n  <div class=\"callout\"><strong>Eslab qoling:</strong> Kod yuqoridan pastga bajariladi. Avval qiymatni o‘zgaruvchiga yozing, keyin <code>print</code>.</div>\n</div>\n",
      "examples": [
        {
          "title": "Oddiy print",
          "code": "soz = \"Salom\"\nprint(soz)",
          "why": "Salom"
        },
        {
          "title": "Ikki qator",
          "code": "a = \"Bir\"\nb = \"Ikki\"\nprint(a)\nprint(b)",
          "why": "Bir keyin Ikki"
        },
        {
          "title": "Son",
          "code": "yosh = 18\nprint(yosh)",
          "why": "18"
        },
        {
          "title": "Izoh",
          "code": "# eslatma\nprint(\"OK\")",
          "why": "OK — izoh bajarilmaydi"
        },
        {
          "title": "Bo‘sh qator",
          "code": "print()\nprint(\"Start\")",
          "why": "bo‘sh qator, keyin Start"
        },
        {
          "title": "Bir qator",
          "code": "print(\"1 2 3\")",
          "why": "1 2 3"
        }
      ],
      "exercises": [
        {
          "id": "l1-e01",
          "level": "oson",
          "title": "Salom",
          "task": "Ekranga «Salom» so‘zini chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = \"Salom\"\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Salom"
            }
          ]
        },
        {
          "id": "l1-e02",
          "level": "oson",
          "title": "Python",
          "task": "Ekranga «Python» so‘zini chiqaring (katta P).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = \"Python\"\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Python"
            }
          ]
        },
        {
          "id": "l1-e03",
          "level": "oson",
          "title": "Son 10",
          "task": "Ekranga 10 sonini chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 10\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "10"
            }
          ]
        },
        {
          "id": "l1-e04",
          "level": "oson",
          "title": "Ali",
          "task": "Ekranga «Ali» ismini chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = \"Ali\"\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Ali"
            }
          ]
        },
        {
          "id": "l1-e05",
          "level": "oson",
          "title": "OK",
          "task": "Ekranga «OK» so‘zini chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = \"OK\"\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "OK"
            }
          ]
        },
        {
          "id": "l1-e06",
          "level": "oson",
          "title": "Mashq",
          "task": "Ekranga 100 sonini chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = 100\nprint(n)",
          "checks": [
            {
              "type": "stdout",
              "equals": "100"
            }
          ]
        },
        {
          "id": "l1-e07",
          "level": "oson",
          "title": "Bo‘sh qator",
          "task": "kerakli qiymatlarni ekranga chiqaring (print). 'Start' natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print()\nprint(\"Start\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "\nStart"
            }
          ]
        },
        {
          "id": "l1-e08",
          "level": "oson",
          "title": "Mashq",
          "task": "Bitta qatorda «1 2 3» chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = 100\nprint(n)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1 2 3"
            }
          ]
        },
        {
          "id": "l1-e09",
          "level": "oson",
          "title": "Mashq",
          "task": "Bitta qatorda 5 ta yulduzcha chiqaring: *****.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = \"*****\"\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "*****"
            }
          ]
        },
        {
          "id": "l1-e10",
          "level": "oson",
          "title": "Tayyor",
          "task": "Faqat «Tayyor» so‘zini chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = \"Tayyor\"\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Tayyor"
            }
          ]
        },
        {
          "id": "l1-e11",
          "level": "ortacha",
          "title": "Ikki qator",
          "task": "'Salom' natijasini ekranga chiqaring (print). 'Dunyo' natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(\"Salom\")\nprint(\"Dunyo\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "Salom\nDunyo"
            }
          ]
        },
        {
          "id": "l1-e12",
          "level": "ortacha",
          "title": "Mevalar",
          "task": "'Olma' natijasini ekranga chiqaring (print). 'Banan' natijasini ekranga chiqaring (print). 'Uzum' natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(\"Olma\")\nprint(\"Banan\")\nprint(\"Uzum\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "Olma\nBanan\nUzum"
            }
          ]
        },
        {
          "id": "l1-e13",
          "level": "ortacha",
          "title": "Izoh",
          "task": "'A' natijasini ekranga chiqaring (print). 'B' natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "# bu izoh\nprint(\"A\")\nprint(\"B\")",
          "checks": [
            {
              "type": "code_contains",
              "text": "#"
            },
            {
              "type": "stdout",
              "equals": "A\nB"
            }
          ]
        },
        {
          "id": "l1-e14",
          "level": "ortacha",
          "title": "5 va besh",
          "task": "5 natijasini ekranga chiqaring (print). 'besh' natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(5)\nprint(\"besh\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "5\nbesh"
            }
          ]
        },
        {
          "id": "l1-e15",
          "level": "ortacha",
          "title": "Sana",
          "task": "Ekranga 27.10.2026 chiqaring (matn sifatida).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = \"27.10.2026\"\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "27.10.2026"
            }
          ]
        },
        {
          "id": "l1-e16",
          "level": "ortacha",
          "title": "Menyu",
          "task": "'1) Choy' natijasini ekranga chiqaring (print). '2) Qahva' natijasini ekranga chiqaring (print). '3) Suv' natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(\"1) Choy\")\nprint(\"2) Qahva\")\nprint(\"3) Suv\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "1) Choy\n2) Qahva\n3) Suv"
            }
          ]
        },
        {
          "id": "l1-e17",
          "level": "ortacha",
          "title": "Ism familiya",
          "task": "'Botir' natijasini ekranga chiqaring (print). 'Karimov' natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(\"Botir\")\nprint(\"Karimov\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "Botir\nKarimov"
            }
          ]
        },
        {
          "id": "l1-e18",
          "level": "ortacha",
          "title": "Ro‘yxat belgisi",
          "task": "'- kitob' natijasini ekranga chiqaring (print). '- daftar' natijasini ekranga chiqaring (print). '- ruchka' natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(\"- kitob\")\nprint(\"- daftar\")\nprint(\"- ruchka\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "- kitob\n- daftar\n- ruchka"
            }
          ]
        },
        {
          "id": "l1-e19",
          "level": "ortacha",
          "title": "PYTHON chiziq",
          "task": "'PYTHON' natijasini ekranga chiqaring (print). '=====' natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(\"PYTHON\")\nprint(\"=====\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "PYTHON\n====="
            }
          ]
        },
        {
          "id": "l1-e20",
          "level": "ortacha",
          "title": "Salom do‘stim",
          "task": "«matn» nomli o‘zgaruvchiga \"Salom, do'stim!\" qiymatini bering. «matn» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = \"Salom, do'stim!\"\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Salom, do'stim!"
            }
          ]
        },
        {
          "id": "l1-e21",
          "level": "qiyin",
          "title": "To‘rt qator",
          "task": "4 qator, har birida #### chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(\"####\")\nprint(\"####\")\nprint(\"####\")\nprint(\"####\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "####\n####\n####\n####"
            }
          ]
        },
        {
          "id": "l1-e22",
          "level": "qiyin",
          "title": "Yulduzlar",
          "task": "'*' natijasini ekranga chiqaring (print). '**' natijasini ekranga chiqaring (print). '***' natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(\"*\")\nprint(\"**\")\nprint(\"***\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "*\n**\n***"
            }
          ]
        },
        {
          "id": "l1-e23",
          "level": "qiyin",
          "title": "Ramka",
          "task": "'+--+' natijasini ekranga chiqaring (print). '| |' natijasini ekranga chiqaring (print). '+--+' natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(\"+--+\")\nprint(\"|  |\")\nprint(\"+--+\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "+--+\n|  |\n+--+"
            }
          ]
        },
        {
          "id": "l1-e24",
          "level": "qiyin",
          "title": "Kartochka",
          "task": "'Ism: Ali' natijasini ekranga chiqaring (print). 'Yosh: 20' natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(\"Ism: Ali\")\nprint(\"Yosh: 20\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "Ism: Ali\nYosh: 20"
            }
          ]
        },
        {
          "id": "l1-e25",
          "level": "qiyin",
          "title": "Manzil",
          "task": "'Toshkent' natijasini ekranga chiqaring (print). 'Yunusobod' natijasini ekranga chiqaring (print). '12' natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(\"Toshkent\")\nprint(\"Yunusobod\")\nprint(\"12\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "Toshkent\nYunusobod\n12"
            }
          ]
        },
        {
          "id": "l1-e26",
          "level": "qiyin",
          "title": "Chek",
          "task": "'Non 5000' natijasini ekranga chiqaring (print). 'Choy 3000' natijasini ekranga chiqaring (print). 'Jami 8000' natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(\"Non  5000\")\nprint(\"Choy 3000\")\nprint(\"Jami 8000\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "Non  5000\nChoy 3000\nJami 8000"
            }
          ]
        },
        {
          "id": "l1-e27",
          "level": "qiyin",
          "title": "Harflar",
          "task": "'a' natijasini ekranga chiqaring (print). 'b' natijasini ekranga chiqaring (print). 'c' natijasini ekranga chiqaring (print). 'd' natijasini ekranga chiqaring (print). 'e' natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(\"a\")\nprint(\"b\")\nprint(\"c\")\nprint(\"d\")\nprint(\"e\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "a\nb\nc\nd\ne"
            }
          ]
        },
        {
          "id": "l1-e28",
          "level": "qiyin",
          "title": "Qo‘shtirnoq",
          "task": "Ekranga \"Python\" chiqaring (qo‘shtirnoqlar bilan ko‘rinsin).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '\"Python\"'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "\"Python\""
            }
          ]
        },
        {
          "id": "l1-e29",
          "level": "qiyin",
          "title": "Mashq",
          "task": "1 natijasini ekranga chiqaring (print). 2 natijasini ekranga chiqaring (print). 3 natijasini ekranga chiqaring (print). 4 natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(1)\nprint(2)\nprint(3)\nprint(4)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1\n2\n3\n4"
            }
          ]
        },
        {
          "id": "l1-e30",
          "level": "qiyin",
          "title": "Ikki so‘z",
          "task": "Avval «Men Python o'rganaman» bitta qatorda chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = \"Men Python o'rganaman\"\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Men Python o'rganaman"
            }
          ]
        }
      ],
      "review": [
        {
          "term": "print(...)",
          "meaning": "Ekranga chiqarish"
        },
        {
          "term": "matn = \"...\"",
          "meaning": "Matnni o‘zgaruvchiga saqlash"
        },
        {
          "term": "print() bir necha marta",
          "meaning": "Har biri yangi qator"
        },
        {
          "term": "# izoh",
          "meaning": "Bajarilmaydigan eslatma"
        },
        {
          "term": "son = 18",
          "meaning": "Songa qo‘shtirnoq shart emas"
        },
        {
          "term": "Kod tartibi",
          "meaning": "Yuqoridan pastga bajariladi"
        }
      ]
    },
    {
      "id": 2,
      "title": "O‘zgaruvchilar va turlar",
      "subtitle": "Qiymatni nom bilan saqlash: int, float, str, bool.",
      "teach": "\n<div class=\"card\">\n  <h3>O‘zgaruvchi — qiymat saqlanadigan nom</h3>\n  <p>O‘zgaruvchi — qiymat saqlanadigan nom. = belgisi taqqoslash emas, balki berish: o‘ngdagi qiymat chapdagi nomga yoziladi. Matn, son, True/False kabi turlar bor. Quyida berish, qayta yozish va nom qoidalari ko‘rsatiladi.</p>\n  <h4>1) Berish va chiqarish</h4>\n  <p class=\"teach-explain\">= belgisi «teng» emas, balki berish (assignment): o‘ngdagi qiymat chapdagi nomga yoziladi. Keyin shu nomni print qilsangiz, saqlangan qiymat chiqadi. O‘zgaruvchi — qiymatni eslab qolish uchun berilgan nom.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">x = 5\nprint(x)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">5</code></div></div>\n  <h4>2) Matn (str)</h4>\n  <p class=\"teach-explain\">Matn (string) qo‘shtirnoq ichida yoziladi: \"Laylo\" yoki 'Laylo'. Bu harflar, so‘zlar, jumlalar uchun tur. O‘zgaruvchiga matn bersangiz, keyin uni print qilib ko‘rasiz.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">ism = \"Laylo\"\nprint(ism)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">Laylo</code></div></div>\n  <h4>3) Butun son (int) va o‘nli (float)</h4>\n  <p class=\"teach-explain\">int — butun son (12000), float — o‘nli kasr (3.14). Hisob-kitobda qaysi turdan foydalanish muhim: bo‘lish natijasi ko‘pincha float bo‘ladi. Ikkalasini ham o‘zgaruvchiga saqlab, print qilish mumkin.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">narx = 12000\npi = 3.14\nprint(narx)\nprint(pi)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">12000\n3.14\n</pre></div></div>\n  <h4>4) bool — True / False</h4>\n  <p class=\"teach-explain\">bool turi faqat ikki qiymat: True (rost) va False (yolg‘on). Shartlar, tekshiruvlar va if bilan ishlaganda asosiy rol o‘ynaydi. Masalan ok = True — holatni saqlash uchun.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">ok = True\nflag = False\nprint(ok)\nprint(flag)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">True\nFalse\n</pre></div></div>\n  <h4>5) Qayta yozish</h4>\n  <p class=\"teach-explain\">Bir o‘zgaruvchiga keyinroq yangi qiymat bersangiz, eski qiymat o‘rniga yangisi yoziladi. Oxirgi berilgan qiymat qoladi. Bu hisobni bosqichma-bosqich yangilab borishda kerak.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">n = 1\nn = 9\nprint(n)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">9</code></div></div>\n  <h4>6) Nusxa</h4>\n  <p class=\"teach-explain\">b = a desangiz, a dagi qiymat b ga ko‘chiriladi (nusxa / bog‘lanish turiga qarab). Oddiy sonlarda b mustaqil qiymat oladi. Shunday qilib bir qiymatni boshqa nom bilan ishlatasiz.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = 10\nb = a\nprint(b)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">10</code></div></div>\n  <h4>7) Nom qoidalari</h4>\n  <p class=\"teach-explain\">O‘zgaruvchi nomi harf yoki _ bilan boshlanadi; ichida raqam bo‘lishi mumkin. print, if, for kabi tayyor so‘zlarni nom qilmang — xato chiqadi. Aniq nomlar (user_id, yosh) kodni o‘qishni osonlashtiradi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">user_id = 42\nprint(user_id)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">42</code></div></div>\n  <div class=\"callout\"><code>print(x)</code> — quti ichidagi qiymat. <code>print(\"x\")</code> — harf x.</div>\n</div>\n",
      "examples": [
        {
          "title": "Berish",
          "code": "x = 5\nprint(x)",
          "why": "5"
        },
        {
          "title": "Matn",
          "code": "ism = \"Laylo\"\nprint(ism)",
          "why": "Laylo"
        },
        {
          "title": "int va float",
          "code": "narx = 12000\npi = 3.14\nprint(narx)\nprint(pi)",
          "why": "12000 keyin 3.14"
        },
        {
          "title": "bool",
          "code": "ok = True\nprint(ok)",
          "why": "True"
        },
        {
          "title": "Qayta yozish",
          "code": "n = 1\nn = 9\nprint(n)",
          "why": "9"
        },
        {
          "title": "Nusxa",
          "code": "a = 10\nb = a\nprint(b)",
          "why": "10"
        },
        {
          "title": "user_id",
          "code": "user_id = 42\nprint(user_id)",
          "why": "42"
        },
        {
          "title": "Bir necha tur",
          "code": "ism = \"Omar\"\nball = 95.5\nyutdi = True\nprint(ism)\nprint(ball)\nprint(yutdi)",
          "why": "Omar, 95.5, True"
        }
      ],
      "exercises": [
        {
          "id": "l2-e01",
          "level": "oson",
          "title": "Birinchi o‘zgaruvchi",
          "task": "«x» nomli o‘zgaruvchiga 5 qiymatini bering. «x» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "x = 5\nprint(x)",
          "checks": [
            {
              "type": "var",
              "name": "x",
              "equals": 5
            },
            {
              "type": "stdout",
              "equals": "5"
            }
          ]
        },
        {
          "id": "l2-e02",
          "level": "oson",
          "title": "ism",
          "task": "«ism» nomli o‘zgaruvchiga 'Laylo' qiymatini bering. «ism» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "ism = \"Laylo\"\nprint(ism)",
          "checks": [
            {
              "type": "var",
              "name": "ism",
              "equals": "Laylo"
            },
            {
              "type": "stdout",
              "equals": "Laylo"
            }
          ]
        },
        {
          "id": "l2-e03",
          "level": "oson",
          "title": "narx",
          "task": "narx nomli o‘zgaruvchiga 12000 bering va uni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "narx = 12000\nprint(narx)",
          "checks": [
            {
              "type": "var",
              "name": "narx",
              "equals": 12000
            },
            {
              "type": "stdout",
              "equals": "12000"
            }
          ]
        },
        {
          "id": "l2-e04",
          "level": "oson",
          "title": "True",
          "task": "«ok» nomli o‘zgaruvchiga True qiymatini bering. «ok» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "ok = True\nprint(ok)",
          "checks": [
            {
              "type": "var",
              "name": "ok",
              "equals": true
            },
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l2-e05",
          "level": "oson",
          "title": "float",
          "task": "«pi_taxmin» nomli o‘zgaruvchiga 3.14 qiymatini bering. «pi_taxmin» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "pi_taxmin = 3.14\nprint(pi_taxmin)",
          "checks": [
            {
              "type": "var",
              "name": "pi_taxmin",
              "equals": 3.14
            },
            {
              "type": "stdout",
              "equals": "3.14"
            }
          ]
        },
        {
          "id": "l2-e06",
          "level": "oson",
          "title": "False",
          "task": "«flag» nomli o‘zgaruvchiga False qiymatini bering. «flag» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "flag = False\nprint(flag)",
          "checks": [
            {
              "type": "var",
              "name": "flag",
              "equals": false
            },
            {
              "type": "stdout",
              "equals": "False"
            }
          ]
        },
        {
          "id": "l2-e07",
          "level": "oson",
          "title": "yosh",
          "task": "«yosh» nomli o‘zgaruvchiga 18 qiymatini bering. «yosh» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "soz = \"Python\"\nprint(soz)",
          "checks": [
            {
              "type": "var",
              "name": "yosh",
              "equals": 18
            },
            {
              "type": "stdout",
              "equals": "18"
            }
          ]
        },
        {
          "id": "l2-e08",
          "level": "oson",
          "title": "soz",
          "task": "nolinchi nomli o‘zgaruvchiga 0 bering va uni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "soz = \"Python\"\nprint(soz)",
          "checks": [
            {
              "type": "var",
              "name": "soz",
              "equals": "Python"
            },
            {
              "type": "stdout",
              "equals": "Python"
            }
          ]
        },
        {
          "id": "l2-e09",
          "level": "oson",
          "title": "nol",
          "task": "«nolinchi» nomli o‘zgaruvchiga 0 qiymatini bering. «nolinchi» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "flag = False\nprint(flag)",
          "checks": [
            {
              "type": "var",
              "name": "nolinchi",
              "equals": 0
            },
            {
              "type": "stdout",
              "equals": "0"
            }
          ]
        },
        {
          "id": "l2-e10",
          "level": "oson",
          "title": "user_id",
          "task": "«user_id» nomli o‘zgaruvchiga 42 qiymatini bering. «user_id» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "yosh = 18\nprint(yosh)",
          "checks": [
            {
              "type": "var",
              "name": "user_id",
              "equals": 42
            },
            {
              "type": "stdout",
              "equals": "42"
            }
          ]
        },
        {
          "id": "l2-e11",
          "level": "ortacha",
          "title": "Ikki qiymat",
          "task": "«a» nomli o‘zgaruvchiga 2 qiymatini bering. «b» nomli o‘zgaruvchiga 3 qiymatini bering. «a» o‘zgaruvchisini ekranga chiqaring (print). «b» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = 2\nb = 3\nprint(a)\nprint(b)",
          "checks": [
            {
              "type": "var",
              "name": "a",
              "equals": 2
            },
            {
              "type": "var",
              "name": "b",
              "equals": 3
            },
            {
              "type": "stdout",
              "equals": "2\n3"
            }
          ]
        },
        {
          "id": "l2-e12",
          "level": "ortacha",
          "title": "Qayta berish",
          "task": "«x» nomli o‘zgaruvchiga 1 qiymatini bering. «x» nomli o‘zgaruvchiga 9 qiymatini bering. «x» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "x = 1\nx = 9\nprint(x)",
          "checks": [
            {
              "type": "var",
              "name": "x",
              "equals": 9
            },
            {
              "type": "stdout",
              "equals": "9"
            }
          ]
        },
        {
          "id": "l2-e13",
          "level": "ortacha",
          "title": "Ism yosh",
          "task": "«ism» nomli o‘zgaruvchiga 'Jasur' qiymatini bering. «yosh» nomli o‘zgaruvchiga 25 qiymatini bering. «ism» o‘zgaruvchisini ekranga chiqaring (print). «yosh» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = 10\nb = a\nprint(b)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Jasur\n25"
            }
          ]
        },
        {
          "id": "l2-e14",
          "level": "ortacha",
          "title": "Nusxa",
          "task": "«a» nomli o‘zgaruvchiga 10 qiymatini bering. «b» nomli o‘zgaruvchiga a qiymatini bering. «b» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = 10\nb = a\nprint(b)",
          "checks": [
            {
              "type": "var",
              "name": "b",
              "equals": 10
            },
            {
              "type": "stdout",
              "equals": "10"
            }
          ]
        },
        {
          "id": "l2-e15",
          "level": "ortacha",
          "title": "Mashq",
          "task": "«kod» nomli o‘zgaruvchiga '007' qiymatini bering. «kod» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "kod = \"007\"\nprint(kod)",
          "checks": [
            {
              "type": "var",
              "name": "kod",
              "equals": "007"
            },
            {
              "type": "stdout",
              "equals": "007"
            }
          ]
        },
        {
          "id": "l2-e16",
          "level": "ortacha",
          "title": "vazn",
          "task": "vazn=70.5 bering va print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "vazn = 70.5\nprint(vazn)",
          "checks": [
            {
              "type": "var",
              "name": "vazn",
              "equals": 70.5
            },
            {
              "type": "stdout",
              "equals": "70.5"
            }
          ]
        },
        {
          "id": "l2-e17",
          "level": "ortacha",
          "title": "Rang",
          "task": "«rang» nomli o‘zgaruvchiga 'qizil' qiymatini bering. «rang» nomli o‘zgaruvchiga \"ko'k\" qiymatini bering. «rang» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "rang = \"qizil\"\nrang = \"ko'k\"\nprint(rang)",
          "checks": [
            {
              "type": "var",
              "name": "rang",
              "equals": "ko'k"
            },
            {
              "type": "stdout",
              "equals": "ko'k"
            }
          ]
        },
        {
          "id": "l2-e18",
          "level": "ortacha",
          "title": "Son matn",
          "task": "«son» nomli o‘zgaruvchiga 4 qiymatini bering. «soz» nomli o‘zgaruvchiga 'tort' qiymatini bering. «son» o‘zgaruvchisini ekranga chiqaring (print). «soz» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "user_id = 42\nprint(user_id)",
          "checks": [
            {
              "type": "stdout",
              "equals": "4\ntort"
            }
          ]
        },
        {
          "id": "l2-e19",
          "level": "ortacha",
          "title": "Sana",
          "task": "«kun» nomli o‘zgaruvchiga 27 qiymatini bering. «oy» nomli o‘zgaruvchiga 10 qiymatini bering. «yil» nomli o‘zgaruvchiga 2026 qiymatini bering. «kun» o‘zgaruvchisini ekranga chiqaring (print). «oy» o‘zgaruvchisini ekranga chiqaring (print). «yil» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "kun = 27\noy = 10\nyil = 2026\nprint(kun)\nprint(oy)\nprint(yil)",
          "checks": [
            {
              "type": "stdout",
              "equals": "27\n10\n2026"
            }
          ]
        },
        {
          "id": "l2-e20",
          "level": "ortacha",
          "title": "Ikki True",
          "task": "«a» nomli o‘zgaruvchiga True qiymatini bering. «b» nomli o‘zgaruvchiga True qiymatini bering. «a» o‘zgaruvchisini ekranga chiqaring (print). «b» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = True\nb = True\nprint(a)\nprint(b)",
          "checks": [
            {
              "type": "stdout",
              "equals": "True\nTrue"
            }
          ]
        },
        {
          "id": "l2-e21",
          "level": "qiyin",
          "title": "Zanjir",
          "task": "«a» nomli o‘zgaruvchiga 1 qiymatini bering. «b» nomli o‘zgaruvchiga a qiymatini bering. «c» nomli o‘zgaruvchiga b qiymatini bering. «c» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = 1\nb = a\nc = b\nprint(c)",
          "checks": [
            {
              "type": "var",
              "name": "c",
              "equals": 1
            },
            {
              "type": "stdout",
              "equals": "1"
            }
          ]
        },
        {
          "id": "l2-e22",
          "level": "qiyin",
          "title": "Uch marta",
          "task": "«n» nomli o‘zgaruvchiga 0 qiymatini bering. «n» nomli o‘zgaruvchiga 5 qiymatini bering. «n» nomli o‘zgaruvchiga 10 qiymatini bering. «n» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = 0\nn = 5\nn = 10\nprint(n)",
          "checks": [
            {
              "type": "var",
              "name": "n",
              "equals": 10
            },
            {
              "type": "stdout",
              "equals": "10"
            }
          ]
        },
        {
          "id": "l2-e23",
          "level": "qiyin",
          "title": "Aralash turlar",
          "task": "«ism» nomli o‘zgaruvchiga 'Omar' qiymatini bering. «ball» nomli o‘zgaruvchiga 95.5 qiymatini bering. «yutdi» nomli o‘zgaruvchiga True qiymatini bering. «ism» o‘zgaruvchisini ekranga chiqaring (print). «ball» o‘zgaruvchisini ekranga chiqaring (print). «yutdi» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "ism = \"Omar\"\nball = 95.5\nyutdi = True\nprint(ism)\nprint(ball)\nprint(yutdi)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Omar\n95.5\nTrue"
            }
          ]
        },
        {
          "id": "l2-e24",
          "level": "qiyin",
          "title": "To‘liq ism",
          "task": "«ism» nomli o‘zgaruvchiga 'Malika' qiymatini bering. «familiya» nomli o‘zgaruvchiga 'Saidova' qiymatini bering. «ism» o‘zgaruvchisini ekranga chiqaring (print). «familiya» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "ism = \"Malika\"\nfamiliya = \"Saidova\"\nprint(ism)\nprint(familiya)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Malika\nSaidova"
            }
          ]
        },
        {
          "id": "l2-e25",
          "level": "qiyin",
          "title": "Manfiy",
          "task": "«farq» nomli o‘zgaruvchiga -3 qiymatini bering. «farq» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "sanoq = 0\nprint(sanoq)",
          "checks": [
            {
              "type": "var",
              "name": "farq",
              "equals": -3
            },
            {
              "type": "stdout",
              "equals": "-3"
            }
          ]
        },
        {
          "id": "l2-e26",
          "level": "qiyin",
          "title": "Ikki float",
          "task": "«x» nomli o‘zgaruvchiga 1.5 qiymatini bering. «y» nomli o‘zgaruvchiga 2.5 qiymatini bering. «x» o‘zgaruvchisini ekranga chiqaring (print). «y» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "farq = -3\nprint(farq)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1.5\n2.5"
            }
          ]
        },
        {
          "id": "l2-e27",
          "level": "qiyin",
          "title": "v yangilash",
          "task": "«v» nomli o‘zgaruvchiga 'a' qiymatini bering. «v» nomli o‘zgaruvchiga 'b' qiymatini bering. «v» nomli o‘zgaruvchiga 'c' qiymatini bering. «v» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "v = 'a'\nv = 'b'\nv = 'c'\nprint(v)",
          "checks": [
            {
              "type": "var",
              "name": "v",
              "equals": "c"
            },
            {
              "type": "stdout",
              "equals": "c"
            }
          ]
        },
        {
          "id": "l2-e28",
          "level": "qiyin",
          "title": "Barcha turlar",
          "task": "«i» nomli o‘zgaruvchiga 1 qiymatini bering. «f» nomli o‘zgaruvchiga 1.0 qiymatini bering. «s» nomli o‘zgaruvchiga 'bir' qiymatini bering. «b» nomli o‘zgaruvchiga False qiymatini bering. «i» o‘zgaruvchisini ekranga chiqaring (print). «f» o‘zgaruvchisini ekranga chiqaring (print). «s» o‘zgaruvchisini ekranga chiqaring (print). «b» o‘zgaruvchisini ekranga ch….",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "parol = \"abc123\"\nprint(parol)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1\n1.0\nbir\nFalse"
            }
          ]
        },
        {
          "id": "l2-e29",
          "level": "qiyin",
          "title": "Almashtirish g‘oya",
          "task": "«a» nomli o‘zgaruvchiga 3 qiymatini bering. «b» nomli o‘zgaruvchiga 7 qiymatini bering. «tmp» nomli o‘zgaruvchiga a qiymatini bering. «a» nomli o‘zgaruvchiga b qiymatini bering. «b» nomli o‘zgaruvchiga tmp qiymatini bering. «a» o‘zgaruvchisini ekranga chiqaring (print). «b» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = 3\nb = 7\ntmp = a\na = b\nb = tmp\nprint(a)\nprint(b)",
          "checks": [
            {
              "type": "stdout",
              "equals": "7\n3"
            }
          ]
        },
        {
          "id": "l2-e30",
          "level": "qiyin",
          "title": "Hisob kartochka",
          "task": "«narx» nomli o‘zgaruvchiga 10000 qiymatini bering. «chegirma» nomli o‘zgaruvchiga 1000 qiymatini bering. «tolov» nomli o‘zgaruvchiga narx qiymatini bering. «tolov» nomli o‘zgaruvchiga narx - chegirma qiymatini bering. «tolov» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "narx = 10000\nchegirma = 1000\ntolov = narx\ntolov = narx - chegirma\nprint(tolov)",
          "checks": [
            {
              "type": "var",
              "name": "tolov",
              "equals": 9000
            },
            {
              "type": "stdout",
              "equals": "9000"
            }
          ]
        }
      ],
      "review": [
        {
          "term": "x = 5",
          "meaning": "Qiymat berish (tenglik emas)"
        },
        {
          "term": "str",
          "meaning": "Matn: \"Laylo\""
        },
        {
          "term": "int / float",
          "meaning": "Butun / o‘nli son"
        },
        {
          "term": "bool",
          "meaning": "True yoki False"
        },
        {
          "term": "Qayta yozish",
          "meaning": "Oxirgi qiymat qoladi"
        },
        {
          "term": "b = a",
          "meaning": "Qiymat nusxasi"
        },
        {
          "term": "Nom qoidasi",
          "meaning": "Harf yoki _ bilan, bo‘sh joysiz"
        }
      ]
    },
    {
      "id": 3,
      "title": "Matn, input va str metodlari",
      "subtitle": "Ulash, len, input, f-string + startswith, endswith, replace, find…",
      "teach": "\n<div class=\"card\">\n  <h3>Matn (str) bilan ishlash</h3>\n  <p>Matn (str) qo‘shtirnoq ichida yoziladi. Uni ulash, uzunligini topish, boshini/oxirini tekshirish, katta-kichik harfga o‘girish mumkin. input() foydalanuvchidan matn oladi. Har bir metodning vazifasi quyida alohida tushuntiriladi.</p>\n  <h4>1) Ulash (+)</h4>\n  <p class=\"teach-explain\">Ikki matnni + bilan ulasangiz, ular ketma-ket birlashadi. \"Hello\" + \"World\" → HelloWorld (orasida bo‘sh joy avtomatik qo‘yilmaydi). Bu xabar yig‘ish, ID yasash va matn yaratishda ishlatiladi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = \"Hello\"\nb = \"World\"\nprint(a + b)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">HelloWorld</code></div></div>\n  <h4>2) Bo‘sh joy bilan ulash</h4>\n  <p class=\"teach-explain\">So‘zlar orasiga bo‘sh joy kerak bo‘lsa, \" \" ni qo‘shib ulaysiz. Masalan a + \" \" + b. Shunda Salom Ali kabi o‘qiladigan matn chiqadi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = \"Salom\"\nb = \"Ali\"\nprint(a + \" \" + b)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">Salom Ali</code></div></div>\n  <h4>3) len — uzunlik</h4>\n  <p class=\"teach-explain\">len(s) matndagi belgilarni (harf, raqam, bo‘sh joy) sanaydi. Bo‘sh matn uzunligi 0. Tekshirish, cheklash va sikllarda uzunlikni bilish muhim.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">s = \"Python\"\nprint(len(s))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">6</code></div></div>\n  <h4>4) input — foydalanuvchidan o‘qish</h4>\n  <p class=\"teach-explain\">input() dastur ishlayotganda foydalanuvchidan matn so‘raydi va qaytaradi. Natija doim str (matn) bo‘ladi. Keyin uni o‘zgaruvchiga saqlab, print yoki boshqa amallar qilasiz.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">ism = input()\nprint(ism)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">Ali</code></div></div>\n  <h4>5) startswith — bilan boshlanadimi</h4>\n  <p class=\"teach-explain\">startswith(\"Py\") matn shu bo‘lak bilan boshlansa True, aks holda False qaytaradi. Filtrlash, format tekshirish (masalan kod prefiksi) uchun qulay. Natijani o‘zgaruvchiga yozib print qilishingiz mumkin.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">til = \"Python\"\nnatija = til.startswith(\"Py\")\nprint(natija)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">True</code></div></div>\n  <h4>6) endswith — bilan tugaydimi</h4>\n  <p class=\"teach-explain\">endswith(\".txt\") matn shu bilan tugasa True beradi. Fayl kengaytmasi, telefon prefiksi kabi tekshiruvlarda ishlatiladi. startswith ning jufti — oxirini tekshiradi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">fayl = \"a.txt\"\nprint(fayl.endswith(\".txt\"))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">True</code></div></div>\n  <h4>7) upper / lower</h4>\n  <p class=\"teach-explain\">upper() barcha harflarni katta, lower() esa kichik qiladi. Asl matn o‘zgarmaydi — yangi matn qaytariladi. Taqqoslashda registr farqini yo‘qotish uchun juda foydali.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">s = \"ok\"\nprint(s.upper())\nprint(\"OK\".lower())</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">OK\nok\n</pre></div></div>\n  <h4>8) strip — chetdagi bo‘sh joy</h4>\n  <p class=\"teach-explain\">strip() matnning boshidagi va oxiridagi bo‘sh joylarni olib tashlaydi. input() dan kelgan ortiqcha joylarni tozalashda kerak. O‘rtadagi bo‘sh joylar saqlanadi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">s = \"  x  \"\nprint(s.strip())</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">x</code></div></div>\n  <h4>9) replace — almashtirish</h4>\n  <p class=\"teach-explain\">replace(eski, yangi) matndagi eski qismni yangisiga almashtiradi. Masalan \"-\" ni \"/\" ga. Tozalash, format o‘zgartirish va oddiy tahrir uchun ishlatiladi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">s = \"a-b-c\"\nprint(s.replace(\"-\", \"/\"))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">a/b/c</code></div></div>\n  <h4>10) find / count / split</h4>\n  <p class=\"teach-explain\">find qidirilgan qismning indeksini (yoki -1), count necha marta uchrashini, split esa matnni bo‘laklarga ajratib list qaytaradi. Matnni tahlil qilishda uchala metod ham tez-tez kerak bo‘ladi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">s = \"banana\"\nprint(s.find(\"n\"))\nprint(s.count(\"a\"))\nprint(\"a b c\".split())</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">2\n3\n['a', 'b', 'c']\n</pre></div></div>\n  <h4>11) f-string</h4>\n  <p class=\"teach-explain\">f\"...{ozgaruvchi}...\" ichida o‘zgaruvchi qiymati joylashadi. Matnni + bilan ulashdan osonroq va aniqroq. Xabar, hisobot va formatlangan chiqish uchun zamonaviy usul.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">ism = \"Dila\"\nprint(f\"Ism: {ism}\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">Ism: Dila</code></div></div>\n  <div class=\"callout\">Metodlar nuqta bilan chaqiriladi: <code>s.upper()</code>. Ko‘p metodlar <strong>yangi</strong> matn qaytaradi — asl o‘zgarmasligi mumkin.</div>\n</div>\n",
      "examples": [
        {
          "title": "Ulash",
          "code": "a = \"Hello\"\nb = \"World\"\nprint(a + b)",
          "why": "HelloWorld"
        },
        {
          "title": "len",
          "code": "s = \"Python\"\nprint(len(s))",
          "why": "6"
        },
        {
          "title": "startswith",
          "code": "til = \"Python\"\nprint(til.startswith(\"Py\"))",
          "why": "True"
        },
        {
          "title": "endswith",
          "code": "fayl = \"a.txt\"\nprint(fayl.endswith(\".txt\"))",
          "why": "True"
        },
        {
          "title": "upper/lower",
          "code": "print(\"ok\".upper())\nprint(\"OK\".lower())",
          "why": "OK keyin ok"
        },
        {
          "title": "strip",
          "code": "print(\"  x  \".strip())",
          "why": "x"
        },
        {
          "title": "replace",
          "code": "print(\"a-b-c\".replace(\"-\", \"/\"))",
          "why": "a/b/c"
        },
        {
          "title": "find/count",
          "code": "s = \"banana\"\nprint(s.find(\"n\"))\nprint(s.count(\"a\"))",
          "why": "2 keyin 3"
        },
        {
          "title": "split",
          "code": "print(\"a b c\".split())",
          "why": "['a', 'b', 'c']"
        },
        {
          "title": "f-string",
          "code": "ism = \"Dila\"\nprint(f\"Ism: {ism}\")",
          "why": "Ism: Dila"
        },
        {
          "title": "input + ulash",
          "code": "ism = input()\nprint(\"Salom, \" + ism)",
          "why": "Kiriting: Ali → Salom, Ali"
        },
        {
          "title": "Zanjir",
          "code": "s = \"  ok  \"\nprint(s.strip().upper())",
          "why": "OK"
        }
      ],
      "exercises": [
        {
          "id": "l3-e01",
          "level": "oson",
          "title": "Ulash",
          "task": "«a» nomli o‘zgaruvchiga 'Hello' qiymatini bering. «b» nomli o‘zgaruvchiga 'World' qiymatini bering. a + b natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = \"Hello\"\nb = \"World\"\nprint(a + b)",
          "checks": [
            {
              "type": "stdout",
              "equals": "HelloWorld"
            }
          ]
        },
        {
          "id": "l3-e02",
          "level": "oson",
          "title": "Bo‘sh joy",
          "task": "«a» nomli o‘zgaruvchiga 'Salom' qiymatini bering. «b» nomli o‘zgaruvchiga 'Ali' qiymatini bering. (a + ' ') + b natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = \"Salom\"\nb = \"Ali\"\nprint(a + \" \" + b)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Salom Ali"
            }
          ]
        },
        {
          "id": "l3-e03",
          "level": "oson",
          "title": "len",
          "task": "s=\"Python\". len(s) ni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"Python\"\nprint(len(s))",
          "checks": [
            {
              "type": "stdout",
              "equals": "6"
            }
          ]
        },
        {
          "id": "l3-e04",
          "level": "oson",
          "title": "upper",
          "task": "input() dan ism o‘qing va o‘qilgan qiymatni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"ok\"\nprint(s.upper())",
          "checks": [
            {
              "type": "stdout",
              "equals": "OK"
            }
          ]
        },
        {
          "id": "l3-e05",
          "level": "oson",
          "title": "lower",
          "task": "s=\"OK\". lower() qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"OK\"\nprint(s.lower())",
          "checks": [
            {
              "type": "stdout",
              "equals": "ok"
            }
          ]
        },
        {
          "id": "l3-e06",
          "level": "oson",
          "title": "strip",
          "task": "s=\" hi \". strip() qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"  hi  \"\nprint(s.strip())",
          "checks": [
            {
              "type": "stdout",
              "equals": "hi"
            }
          ]
        },
        {
          "id": "l3-e07",
          "level": "oson",
          "title": "startswith",
          "task": "s=\"Python\". \"Py\" bilan boshlanishini startswith bilan print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"Python\"\nprint(s.startswith(\"Py\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l3-e08",
          "level": "oson",
          "title": "endswith",
          "task": "s=\"a.txt\". \".txt\" bilan tugashini endswith bilan print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"a.txt\"\nprint(s.endswith(\".txt\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l3-e09",
          "level": "oson",
          "title": "input",
          "task": "input() dan matn o‘qing va shu matnni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "Ali",
          "setup": "",
          "solution": "matn = input()\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Ali"
            }
          ]
        },
        {
          "id": "l3-e10",
          "level": "oson",
          "title": "count",
          "task": "s=\"banana\". \"a\" necha marta — count bilan print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"banana\"\nprint(s.count(\"a\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l3-e11",
          "level": "ortacha",
          "title": "replace",
          "task": "s=\"a-b-c\". \"-\" ni \"/\" ga replace qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"a-b-c\"\nprint(s.replace(\"-\", \"/\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "a/b/c"
            }
          ]
        },
        {
          "id": "l3-e12",
          "level": "ortacha",
          "title": "find",
          "task": "s=\"abc\". \"b\" indeksini find bilan print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"abc\"\nprint(s.find(\"b\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "1"
            }
          ]
        },
        {
          "id": "l3-e13",
          "level": "ortacha",
          "title": "split",
          "task": "s=\"a b c\". split() qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"a b c\"\nprint(s.split())",
          "checks": [
            {
              "type": "stdout",
              "equals": "['a', 'b', 'c']"
            }
          ]
        },
        {
          "id": "l3-e14",
          "level": "ortacha",
          "title": "f-string",
          "task": "ism=\"Omar\". f-string bilan «Ism: Omar» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "ism = \"Omar\"\nprint(f\"Ism: {ism}\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "Ism: Omar"
            }
          ]
        },
        {
          "id": "l3-e15",
          "level": "ortacha",
          "title": "input + ulash",
          "task": "input() dan ism o‘qing. \"Salom, \" + ism print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "Ali",
          "setup": "",
          "solution": "ism = input()\nprint(\"Salom, \" + ism)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Salom, Ali"
            }
          ]
        },
        {
          "id": "l3-e16",
          "level": "ortacha",
          "title": "strip+upper",
          "task": "«s» nomli o‘zgaruvchiga ' py ' qiymatini bering. s matnidan boshlab: strip() bilan chetdagi bo‘sh joylarni olib tashlang; keyin upper() bilan katta harfga aylantiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"  py  \"\nprint(s.strip().upper())",
          "checks": [
            {
              "type": "stdout",
              "equals": "PY"
            }
          ]
        },
        {
          "id": "l3-e17",
          "level": "ortacha",
          "title": "endswith input",
          "task": "«nom» nomli o‘zgaruvchiga input() orqali matn o‘qing (masalan «a.txt»). «nom» o‘zgaruvchisiga '.txt' bilan tugashini endswith bilan tekshiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "a.txt",
          "setup": "",
          "solution": "nom = input()\nprint(nom.endswith(\".txt\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l3-e18",
          "level": "ortacha",
          "title": "startswith input",
          "task": "«u» nomli o‘zgaruvchiga input() orqali matn o‘qing (masalan «http://x»). «u» o‘zgaruvchisiga 'http' bilan boshlanishini startswith bilan tekshiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "http://x",
          "setup": "",
          "solution": "u = input()\nprint(u.startswith(\"http\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l3-e19",
          "level": "ortacha",
          "title": "replace input",
          "task": "input() dan matn. Bo‘sh joylarni \"_\" ga almashtirib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "a b",
          "setup": "",
          "solution": "s = input()\nprint(s.replace(\" \", \"_\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "a_b"
            }
          ]
        },
        {
          "id": "l3-e20",
          "level": "ortacha",
          "title": "len input",
          "task": "«s» nomli o‘zgaruvchiga input() orqali matn o‘qing (masalan «hello»). s uzunligini (len) hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "hello",
          "setup": "",
          "solution": "s = input()\nprint(len(s))",
          "checks": [
            {
              "type": "stdout",
              "equals": "5"
            }
          ]
        },
        {
          "id": "l3-e21",
          "level": "qiyin",
          "title": "f + input",
          "task": "input() dan ism. f-string: «Salom, {ism}!» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "Nodira",
          "setup": "",
          "solution": "ism = input()\nprint(f\"Salom, {ism}!\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "Salom, Nodira!"
            }
          ]
        },
        {
          "id": "l3-e22",
          "level": "qiyin",
          "title": "count+len",
          "task": "input() dan matn o‘qing. Birinchi qatorda \"a\" harfi necha marta uchrashini (count), ikkinchi qatorda matn uzunligini (len) print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "abca",
          "setup": "",
          "solution": "s = input()\nprint(s.count(\"a\"))\nprint(len(s))",
          "checks": [
            {
              "type": "stdout",
              "equals": "2\n4"
            }
          ]
        },
        {
          "id": "l3-e23",
          "level": "qiyin",
          "title": "Tozalash zanjiri",
          "task": "«s» nomli o‘zgaruvchiga ' Hello-World ' qiymatini bering. s matnidan boshlab: strip() bilan chetdagi bo‘sh joylarni olib tashlang; keyin '-' ni ' ' ga replace qiling; keyin lower() bilan kichik harfga aylantiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"  Hello-World  \"\nprint(s.strip().replace(\"-\", \" \").lower())",
          "checks": [
            {
              "type": "stdout",
              "equals": "hello world"
            }
          ]
        },
        {
          "id": "l3-e24",
          "level": "qiyin",
          "title": "endswith natija",
          "task": "«nom» nomli o‘zgaruvchiga input() orqali matn o‘qing (masalan «app.py»). «nom» o‘zgaruvchisiga '.py' bilan tugashini endswith bilan tekshiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "app.py",
          "setup": "",
          "solution": "nom = input()\nprint(nom.endswith(\".py\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l3-e25",
          "level": "qiyin",
          "title": "startswith natija",
          "task": "«s» nomli o‘zgaruvchiga input() orqali matn o‘qing (masalan «Java»). «s» o‘zgaruvchisiga 'Py' bilan boshlanishini startswith bilan tekshiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "Java",
          "setup": "",
          "solution": "s = input()\nprint(s.startswith(\"Py\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "False"
            }
          ]
        },
        {
          "id": "l3-e26",
          "level": "qiyin",
          "title": "split len",
          "task": "«s» nomli o‘zgaruvchiga 'bir ikki uch' qiymatini bering. «s» o‘zgaruvchisiga split() qilib so‘zlarga bo‘ling uzunligini (len) hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"bir ikki uch\"\nprint(len(s.split()))",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l3-e27",
          "level": "qiyin",
          "title": "find yo‘q",
          "task": "«s» nomli o‘zgaruvchiga 'salom' qiymatini bering. «s» o‘zgaruvchisiga 'x' indeksini find bilan toping va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"salom\"\nprint(s.find(\"x\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "-1"
            }
          ]
        },
        {
          "id": "l3-e28",
          "level": "qiyin",
          "title": "Ikki replace",
          "task": "«s» nomli o‘zgaruvchiga 'a_b_c' qiymatini bering. s matnidan boshlab: '_' ni '-' ga replace qiling; keyin '-' ni '/' ga replace qiling va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"a_b_c\"\nprint(s.replace(\"_\", \"-\").replace(\"-\", \"/\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "a/b/c"
            }
          ]
        },
        {
          "id": "l3-e29",
          "level": "qiyin",
          "title": "Kartochka",
          "task": "Ikki marta input(): avval ism, keyin yosh. f-string bilan «ism:yosh» ko‘rinishida print qiling (masalan Ali:20).",
          "hint": "",
          "starter": "",
          "stdin": "Ali\n20",
          "setup": "",
          "solution": "ism = input()\nyosh = input()\nprint(f\"{ism}:{yosh}\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "Ali:20"
            }
          ]
        },
        {
          "id": "l3-e30",
          "level": "qiyin",
          "title": "Email g‘oya",
          "task": "login=input(). \"@mail.uz\" ulab print qiling (ulash +).",
          "hint": "",
          "starter": "",
          "stdin": "ali",
          "setup": "",
          "solution": "login = input()\nprint(login + \"@mail.uz\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "ali@mail.uz"
            }
          ]
        }
      ],
      "review": [
        {
          "term": "a + b",
          "meaning": "Matnlarni ulash"
        },
        {
          "term": "len(s)",
          "meaning": "Uzunlik"
        },
        {
          "term": "input()",
          "meaning": "Foydalanuvchidan matn"
        },
        {
          "term": "startswith / endswith",
          "meaning": "Boshlanish / tugash tekshiruvi"
        },
        {
          "term": "upper / lower",
          "meaning": "Katta / kichik harf"
        },
        {
          "term": "strip",
          "meaning": "Chetdagi bo‘sh joy"
        },
        {
          "term": "replace",
          "meaning": "Almashtirish"
        },
        {
          "term": "find / count / split",
          "meaning": "Qidirish, sanash, bo‘lish"
        },
        {
          "term": "f\"Ism: {ism}\"",
          "meaning": "f-string — formatlash"
        }
      ]
    },
    {
      "id": 4,
      "title": "Sonlar va amallar",
      "subtitle": "+ - * / // % ** , int() va float().",
      "teach": "\n<div class=\"card\">\n  <h3>Sonlar va amallar</h3>\n  <p>Python da hisob-kitob uchun arifmetik amallar bor: qo‘shish, ayirish, ko‘paytirish, bo‘lish, butun bo‘lish, qoldiq va daraja. Amal tartibi va int(input()) ham muhim. Har bir amal nima qilishi quyida alohida yozilgan.</p>\n  <h4>1) + qo‘shish</h4>\n  <p class=\"teach-explain\">+ operatori ikkita sonni bir-biriga qo‘shadi va yig‘indisini hosil qiladi. Masalan, 2 + 3 ifodasi 5 natijasini beradi. Natijani o‘zgaruvchiga saqlash mumkin: yigindi = a + b, keyin print(yigindi). Eslatma: matnda + ulash (\"Salom\" + \" Ali\"), sonda + qo‘shish — belgi bir xil, ma’nosi boshqacha. Quyidagi misolda a va b beriladi, yig‘indi hisoblanadi va ekranga chiqariladi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = 2\nb = 3\nyigindi = a + b\nprint(yigindi)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">5</code></div></div>\n  <h4>2) - ayirish</h4>\n  <p class=\"teach-explain\">- operatori chapdagi sondan o‘ngdagisini ayiradi (farq). Masalan, 10 - 4 natijasi 6. Narx chegirmasi, qoldiq masofa yoki yosh farqini hisoblashda ishlatiladi. Natijani print(a - b) bilan to‘g‘ridan-to‘g‘ri chiqarishingiz yoki o‘zgaruvchiga yozishingiz mumkin. Manfiy natija ham chiqishi mumkin: 3 - 5 → -2.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = 10\nb = 4\nprint(a - b)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">6</code></div></div>\n  <h4>3) * ko‘paytirish</h4>\n  <p class=\"teach-explain\">* operatori ikki sonni ko‘paytiradi. Masalan, 3 * 7 = 21. Maydon (eni × bo‘yi), umumiy narx (dona × narx) kabi hisoblarda kerak. Matnda * takrorlash uchun ham ishlatiladi: \"ab\" * 3 → \"ababab\". Son bilan matnni aralashtirmang: 3 * \"a\" matnni 3 marta takrorlaydi, 3 * 3 esa 9 beradi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">print(3 * 7)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">21</code></div></div>\n  <h4>4) / oddiy bo‘lish (float)</h4>\n  <p class=\"teach-explain\">/ operatori oddiy bo‘lish — natija odatda float (o‘nli) bo‘ladi. Masalan, 8 / 2 → 4.0 (4 emas). Aniq kasr kerak bo‘lganda shu amaldan foydalaning. Muhim: nolga bo‘lish (masalan 5 / 0) xato beradi — ZeroDivisionError. Butun qism kerak bo‘lsa //, qoldiq kerak bo‘lsa % ishlating.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">print(8 / 2)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">4.0</code></div></div>\n  <h4>5) // butun bo‘lish</h4>\n  <p class=\"teach-explain\">// butun (floor) bo‘lish: faqat butun qism qoladi, kasr tashlanadi. Masalan, 7 // 2 → 3 (3.5 emas). Soat hisobi (daqiqa // 60), sahifalash, guruhlarga bo‘lishda foydali. Qoldiqni bilish uchun jufti % operatori. Ikkala amal birga: 130 // 60 = 2 soat, 130 % 60 = 10 daqiqa.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">n = 7\nprint(n // 2)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">3</code></div></div>\n  <h4>6) % qoldiq</h4>\n  <p class=\"teach-explain\">% (modulo) bo‘linmadan qolgan qoldiqni beradi. Masalan, 7 % 2 → 1. Eng mashhur qo‘llanish: juft/toq — n % 2 == 0 bo‘lsa juft. Shuningdek sikllik indekslar, soat-daqiqa, «har N-chi» elementni ajratishda muhim. Qoldiq doim bo‘luvchidan kichik bo‘ladi (musbat sonlarda).</p>\n  <div class=\"code-wrap\"><pre class=\"code\">n = 7\nprint(n % 2)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">1</code></div></div>\n  <h4>7) ** daraja</h4>\n  <p class=\"teach-explain\">** operatori sonni darajaga ko‘taradi: asos ** daraja. Masalan, 2 ** 4 → 16, 5 ** 2 → 25 (kvadrat). Kvadrat, kub va boshqa darajalar uchun qisqa yozuv. pow(a, b) funksiyasi ham o‘xshash vazifa bajaradi; boshlang‘ichda ** yetarli.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = 2\nprint(a ** 4)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">16</code></div></div>\n  <h4>8) int(input()) — son o‘qish</h4>\n  <p class=\"teach-explain\">input() har doim matn (str) qaytaradi — hatto foydalanuvchi 5 deb yozsa ham. Hisob-kitob uchun uni songa aylantirish kerak: n = int(input()). Bu foydalanuvchidan butun son so‘rashning odatiy usuli. Harf yoki bo‘sh joy kiritilsa ValueError chiqadi — keyingi darslarda try/except bilan ushlanadi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">n = int(input())\nprint(n)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">5</code></div></div>\n  <h4>9) Amal tartibi</h4>\n  <p class=\"teach-explain\">Python avval * / // % ni, keyin + va - ni bajaradi (maktabdagi tartibga o‘xshash). Masalan, 2 + 3 * 4 → 14, chunki avval 3*4. Qavs () tartibni o‘zgartiradi: (2 + 3) * 4 → 20. Murakkab formulada qavs yozish — xatolarni kamaytiradi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">print(2 + 3 * 4)\nprint((2 + 3) * 4)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">14\n20\n</pre></div></div>\n  <h4>10) float()</h4>\n  <p class=\"teach-explain\">float(x) qiymatni o‘nli songa (float) aylantiradi. Masalan, float(3) → 3.0, float(\"3.5\") → 3.5. O‘rtacha baho, pul, o‘lchov kabi aniqroq sonlar uchun kerak. int() kasrni kesib tashlaydi; float() kasrni saqlaydi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">print(float(3))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">3.0</code></div></div>\n  <div class=\"callout\"><code>\"3\"*2</code> → <code>\"33\"</code> (matn). <code>int(\"3\")*2</code> → <code>6</code>.</div>\n</div>\n",
      "examples": [
        {
          "title": "Qo‘shish",
          "code": "a = 2\nb = 3\nprint(a + b)",
          "why": "5"
        },
        {
          "title": "Ayirish",
          "code": "print(10 - 4)",
          "why": "6"
        },
        {
          "title": "Ko‘paytirish",
          "code": "print(3 * 7)",
          "why": "21"
        },
        {
          "title": "Bo‘lish /",
          "code": "print(8 / 2)",
          "why": "4.0"
        },
        {
          "title": "Butun //",
          "code": "print(7 // 2)",
          "why": "3"
        },
        {
          "title": "Qoldiq %",
          "code": "print(7 % 2)",
          "why": "1"
        },
        {
          "title": "Daraja **",
          "code": "print(2 ** 4)",
          "why": "16"
        },
        {
          "title": "int input",
          "code": "n = int(input())\nprint(n * 2)",
          "why": "5 kiritsangiz → 10"
        },
        {
          "title": "Amal tartibi",
          "code": "print(2 + 3 * 4)\nprint((2 + 3) * 4)",
          "why": "14 keyin 20"
        },
        {
          "title": "float",
          "code": "print(float(3))",
          "why": "3.0"
        },
        {
          "title": "Soat g‘oya",
          "code": "daqiqa = 130\nprint(daqiqa // 60)",
          "why": "2 — to‘liq soat"
        },
        {
          "title": "Chegirma",
          "code": "narx = 10000\nprint(narx * 10 // 100)",
          "why": "1000"
        }
      ],
      "exercises": [
        {
          "id": "l4-e01",
          "level": "oson",
          "title": "Mashq",
          "task": "«a» nomli o‘zgaruvchiga 2 qiymatini bering. «b» nomli o‘zgaruvchiga 3 qiymatini bering. «yigindi» nomli o‘zgaruvchiga a + b qiymatini bering. «yigindi» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = 2\nb = 3\nyigindi = a + b\nprint(yigindi)",
          "checks": [
            {
              "type": "stdout",
              "equals": "5"
            }
          ]
        },
        {
          "id": "l4-e02",
          "level": "oson",
          "title": "Mashq",
          "task": "«a» nomli o‘zgaruvchiga 10 qiymatini bering. «b» nomli o‘zgaruvchiga 4 qiymatini bering. a - b natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = 10\nb = 4\nprint(a - b)",
          "checks": [
            {
              "type": "stdout",
              "equals": "6"
            }
          ]
        },
        {
          "id": "l4-e03",
          "level": "oson",
          "title": "Mashq",
          "task": "«a» nomli o‘zgaruvchiga 3 qiymatini bering. «b» nomli o‘zgaruvchiga 7 qiymatini bering. a * b natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = 3\nb = 7\nprint(a * b)",
          "checks": [
            {
              "type": "stdout",
              "equals": "21"
            }
          ]
        },
        {
          "id": "l4-e04",
          "level": "oson",
          "title": "Mashq",
          "task": "8 / 2 natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(8 / 2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "4.0"
            }
          ]
        },
        {
          "id": "l4-e05",
          "level": "oson",
          "title": "Mashq",
          "task": "7 // 2 natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(7 // 2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l4-e06",
          "level": "oson",
          "title": "Mashq",
          "task": "7 % 2 natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(7 % 2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1"
            }
          ]
        },
        {
          "id": "l4-e07",
          "level": "oson",
          "title": "Mashq",
          "task": "2 ** 4 natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(2 ** 4)",
          "checks": [
            {
              "type": "stdout",
              "equals": "16"
            }
          ]
        },
        {
          "id": "l4-e08",
          "level": "oson",
          "title": "float",
          "task": "float(3) qiling va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(float(3))",
          "checks": [
            {
              "type": "stdout",
              "equals": "3.0"
            }
          ]
        },
        {
          "id": "l4-e09",
          "level": "oson",
          "title": "int input",
          "task": "int(input()) o‘qing va shu sonni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "5",
          "setup": "",
          "solution": "n = int(input())\nprint(n)",
          "checks": [
            {
              "type": "stdout",
              "equals": "5"
            }
          ]
        },
        {
          "id": "l4-e10",
          "level": "oson",
          "title": "Kvadrat",
          "task": "«n» nomli o‘zgaruvchiga 6 qiymatini bering. n * n natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = 6\nprint(n * n)",
          "checks": [
            {
              "type": "stdout",
              "equals": "36"
            }
          ]
        },
        {
          "id": "l4-e11",
          "level": "ortacha",
          "title": "Ikki input +",
          "task": "Ikki marta int(input()), yig‘indisini print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "4\n5",
          "setup": "",
          "solution": "a = int(input())\nb = int(input())\nprint(a + b)",
          "checks": [
            {
              "type": "stdout",
              "equals": "9"
            }
          ]
        },
        {
          "id": "l4-e12",
          "level": "ortacha",
          "title": "Qavs",
          "task": "(2+3)*4 ni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print((2 + 3) * 4)",
          "checks": [
            {
              "type": "stdout",
              "equals": "20"
            }
          ]
        },
        {
          "id": "l4-e13",
          "level": "ortacha",
          "title": "Tartib",
          "task": "2+3*4 ni print qiling (ko‘paytirish avval).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(2 + 3 * 4)",
          "checks": [
            {
              "type": "stdout",
              "equals": "14"
            }
          ]
        },
        {
          "id": "l4-e14",
          "level": "ortacha",
          "title": "Soat",
          "task": "daqiqa=130. To‘liq soat: daqiqa // 60 ni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "daqiqa = 130\nprint(daqiqa // 60)",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l4-e15",
          "level": "ortacha",
          "title": "Qoldiq daqiqa",
          "task": "daqiqa=130. daqiqa % 60 ni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "daqiqa = 130\nprint(daqiqa % 60)",
          "checks": [
            {
              "type": "stdout",
              "equals": "10"
            }
          ]
        },
        {
          "id": "l4-e16",
          "level": "ortacha",
          "title": "O‘rtacha",
          "task": "«a» nomli o‘zgaruvchiga 10 qiymatini bering. «b» nomli o‘zgaruvchiga 20 qiymatini bering. (a + b) / 2 natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = 10\nb = 20\nprint((a + b) / 2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "15.0"
            }
          ]
        },
        {
          "id": "l4-e17",
          "level": "ortacha",
          "title": "input *2",
          "task": "int(input()) o‘qing, 2 ga ko‘paytirib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "7",
          "setup": "",
          "solution": "n = int(input())\nprint(n * 2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "14"
            }
          ]
        },
        {
          "id": "l4-e18",
          "level": "ortacha",
          "title": "Farq input",
          "task": "«a» nomli o‘zgaruvchiga int(input()) orqali butun son o‘qing. «b» nomli o‘zgaruvchiga int(input()) orqali butun son o‘qing. a - b natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "8\n5",
          "setup": "",
          "solution": "a = int(input())\nb = int(input())\nprint(a - b)",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l4-e19",
          "level": "ortacha",
          "title": "Kub",
          "task": "n=3. n**3 ni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = 3\nprint(n ** 3)",
          "checks": [
            {
              "type": "stdout",
              "equals": "27"
            }
          ]
        },
        {
          "id": "l4-e20",
          "level": "ortacha",
          "title": "float input",
          "task": "float(input()) o‘qing va print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "2.5",
          "setup": "",
          "solution": "x = float(input())\nprint(x)",
          "checks": [
            {
              "type": "stdout",
              "equals": "2.5"
            }
          ]
        },
        {
          "id": "l4-e21",
          "level": "qiyin",
          "title": "Perimetr",
          "task": "«eni» nomli o‘zgaruvchiga 5 qiymatini bering. «boyi» nomli o‘zgaruvchiga 3 qiymatini bering. 2 * (eni + boyi) natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "eni = 5\nboyi = 3\nprint(2 * (eni + boyi))",
          "checks": [
            {
              "type": "stdout",
              "equals": "16"
            }
          ]
        },
        {
          "id": "l4-e22",
          "level": "qiyin",
          "title": "Chegirma",
          "task": "narx=10000. 10% chegirma: narx*10//100 ni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "narx = 10000\nprint(narx * 10 // 100)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1000"
            }
          ]
        },
        {
          "id": "l4-e23",
          "level": "qiyin",
          "title": "Dollar",
          "task": "«som» nomli o‘zgaruvchiga int(input()) orqali butun son o‘qing. som // 12000 natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "25000",
          "setup": "",
          "solution": "som = int(input())\nprint(som // 12000)",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l4-e24",
          "level": "qiyin",
          "title": "Soat+daq",
          "task": "«daqiqa» nomli o‘zgaruvchiga 130 qiymatini bering. daqiqa // 60 natijasini ekranga chiqaring (print). daqiqa % 60 natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "daqiqa = 130\nprint(daqiqa // 60)\nprint(daqiqa % 60)",
          "checks": [
            {
              "type": "stdout",
              "equals": "2\n10"
            }
          ]
        },
        {
          "id": "l4-e25",
          "level": "qiyin",
          "title": "Maydon",
          "task": "«a» nomli o‘zgaruvchiga int(input()) orqali butun son o‘qing. «b» nomli o‘zgaruvchiga int(input()) orqali butun son o‘qing. a * b natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "3\n5",
          "setup": "",
          "solution": "a = int(input())\nb = int(input())\nprint(a * b)",
          "checks": [
            {
              "type": "stdout",
              "equals": "15"
            }
          ]
        },
        {
          "id": "l4-e26",
          "level": "qiyin",
          "title": "Konvert",
          "task": "s=\"3.5\". float(s)*2 ni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"3.5\"\nprint(float(s) * 2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "7.0"
            }
          ]
        },
        {
          "id": "l4-e27",
          "level": "qiyin",
          "title": "Qoldiq juft",
          "task": "n=int(input()). n%2 ni print qiling (0 juft).",
          "hint": "",
          "starter": "",
          "stdin": "8",
          "setup": "",
          "solution": "n = int(input())\nprint(n % 2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "0"
            }
          ]
        },
        {
          "id": "l4-e28",
          "level": "qiyin",
          "title": "Formula",
          "task": "x=5. 2*x**2+3*x+1 ni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "x = 5\nprint(2 * x ** 2 + 3 * x + 1)",
          "checks": [
            {
              "type": "stdout",
              "equals": "66"
            }
          ]
        },
        {
          "id": "l4-e29",
          "level": "qiyin",
          "title": "Foiz",
          "task": "ball=int(input()). ball*100//80 ni print qiling (taxminiy %).",
          "hint": "",
          "starter": "",
          "stdin": "40",
          "setup": "",
          "solution": "ball = int(input())\nprint(ball * 100 // 80)",
          "checks": [
            {
              "type": "stdout",
              "equals": "50"
            }
          ]
        },
        {
          "id": "l4-e30",
          "level": "qiyin",
          "title": "Uch son",
          "task": "Uchta int(input()). O‘rtacha (a+b+c)/3 ni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "2\n4\n6",
          "setup": "",
          "solution": "a = int(input())\nb = int(input())\nc = int(input())\nprint((a + b + c) / 3)",
          "checks": [
            {
              "type": "stdout",
              "equals": "4.0"
            }
          ]
        }
      ],
      "review": [
        {
          "term": "+ - *",
          "meaning": "Qo‘shish, ayirish, ko‘paytirish"
        },
        {
          "term": "/",
          "meaning": "Oddiy bo‘lish → float"
        },
        {
          "term": "//",
          "meaning": "Butun bo‘lish"
        },
        {
          "term": "%",
          "meaning": "Qoldiq"
        },
        {
          "term": "**",
          "meaning": "Daraja"
        },
        {
          "term": "int(input())",
          "meaning": "Son o‘qish"
        },
        {
          "term": "Amal tartibi",
          "meaning": "* / avval, keyin + -; qavs o‘zgartiradi"
        },
        {
          "term": "float()",
          "meaning": "O‘nli songa o‘tkazish"
        }
      ]
    },
    {
      "id": 5,
      "title": "Shartlar: if elif else",
      "subtitle": "==, != (teng emas), not, and/or — tarmoqlanish.",
      "teach": "\n<div class=\"card\">\n  <h3>Shartlar — qaror qabul qilish</h3>\n  <p>Shartlar dasturga qaror qabul qilish imkonini beradi. if — agar shart True bo‘lsa blok ishlaydi; elif — keyingi shart; else — hech biri mos kelmasa. ==, !=, and, or, not bilan shartlarni yasaysiz. Quyida har biri alohida tushuntiriladi.</p>\n  <h4>1) if asosi</h4>\n  <p class=\"teach-explain\">if shart True bo‘lsa, uning ichidagi blok bajariladi. Shart False bo‘lsa, blok o‘tkazib yuboriladi. Dasturga «agar ... bo‘lsa» mantiqini beradi — qaror qabul qilish asosi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = 5\nb = 3\nif a > b:\n    print(\"ha\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">ha</code></div></div>\n  <h4>2) == teng</h4>\n  <p class=\"teach-explain\">== ikki qiymat tengmi deb tekshiradi (True/False). Bitta = berish, ikkita == taqqoslash — aralashtirmang. if a == b: bilan tenglikka qarab harakat qilasiz.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">x = 4\nif x == 4:\n    print(\"teng\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">teng</code></div></div>\n  <h4>3) != teng emas</h4>\n  <p class=\"teach-explain\">!= teng emasligini tekshiradi. Qiymatlar farq qilsa True. Masalan parol noto‘g‘ri bo‘lsa ogohlantirish chiqarish uchun.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">n = 1\nif n != 0:\n    print(\"bor\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">bor</code></div></div>\n  <h4>4) else</h4>\n  <p class=\"teach-explain\">else — if sharti bajarilmasa ishlaydigan alternativ blok. «Agar ... aks holda ...» tuzilmasi. Har doim if dan keyin keladi va shartsiz (qarama-qarshi holat).</p>\n  <div class=\"code-wrap\"><pre class=\"code\">x = 1\nif x == 0:\n    print(\"nol\")\nelse:\n    print(\"boshqa\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">boshqa</code></div></div>\n  <h4>5) elif</h4>\n  <p class=\"teach-explain\">elif (else if) — birinchi if ishlamasa, keyingi shartni tekshiradi. Bir necha variant (ball, baho, menyu) uchun zanjir yasaysiz. Birinchi True bo‘lgan tarmoq ishlaydi, qolganlari o‘tkaziladi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">ball = 75\nif ball >= 90:\n    print(\"A\")\nelif ball >= 70:\n    print(\"B\")\nelse:\n    print(\"C\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">B</code></div></div>\n  <h4>6) not — teskarisi</h4>\n  <p class=\"teach-explain\">not shartni teskarisiga aylantiradi: True → False, False → True. «Agar emas ...» mantiqini ifoda etadi. Masalan not ok bo‘lsa xabar chiqarish.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">flag = False\nif not flag:\n    print(\"yoqilmagan\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">yoqilmagan</code></div></div>\n  <h4>7) and — ikkalasi</h4>\n  <p class=\"teach-explain\">and — ikkala shart ham True bo‘lsagina True. Yosh >= 18 and ruxsat == True kabi birgalikda tekshiruv. Bittasi False bo‘lsa, butun ifoda False.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">n = 15\nif n > 10 and n < 20:\n    print(\"orasida\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">orasida</code></div></div>\n  <h4>8) or — kamida bittasi</h4>\n  <p class=\"teach-explain\">or — kamida bitta shart True bo‘lsa True. Bir necha yo‘ldan bittasi yetarli bo‘lganda. Ikkalasi ham False bo‘lsagina False.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">s = \"yes\"\nif s == \"ha\" or s == \"yes\":\n    print(\"ok\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">ok</code></div></div>\n  <h4>9) Juftlik (% 2)</h4>\n  <p class=\"teach-explain\">n % 2 == 0 bo‘lsa son juft, aks holda toq. Qoldiq operatori juftlikni aniqlashning klassik usuli. Filtrlash va navbatlashda tez-tez uchraydi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">n = 4\nif n % 2 == 0:\n    print(\"juft\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">juft</code></div></div>\n  <h4>10) not + endswith</h4>\n  <p class=\"teach-explain\">Metod natijasini not bilan teskarilash mumkin. Masalan fayl .txt bilan tugamasa ogohlantirish. Shartlarni birlashtirish amaliy misoli.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">fayl = \"a.png\"\nif not fayl.endswith(\".txt\"):\n    print(\"txt emas\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">txt emas</code></div></div>\n  <div class=\"callout\"><code>=</code> berish, <code>==</code> teng, <code>!=</code> teng emas. Shart oxirida <code>:</code>, ichki qatorlar bo‘sh joy (indent) bilan.</div>\n</div>\n",
      "examples": [
        {
          "title": "if >",
          "code": "a = 5\nb = 3\nif a > b:\n    print(\"ha\")",
          "why": "ha"
        },
        {
          "title": "==",
          "code": "x = 4\nif x == 4:\n    print(\"teng\")",
          "why": "teng"
        },
        {
          "title": "!=",
          "code": "n = 1\nif n != 0:\n    print(\"bor\")",
          "why": "bor"
        },
        {
          "title": "else",
          "code": "x = 1\nif x == 0:\n    print(\"nol\")\nelse:\n    print(\"boshqa\")",
          "why": "boshqa"
        },
        {
          "title": "elif",
          "code": "ball = 75\nif ball >= 90:\n    print(\"A\")\nelif ball >= 70:\n    print(\"B\")\nelse:\n    print(\"C\")",
          "why": "B"
        },
        {
          "title": "not",
          "code": "flag = False\nif not flag:\n    print(\"yoqilmagan\")",
          "why": "yoqilmagan"
        },
        {
          "title": "and",
          "code": "n = 15\nif n > 10 and n < 20:\n    print(\"orasida\")",
          "why": "orasida"
        },
        {
          "title": "or",
          "code": "s = \"yes\"\nif s == \"ha\" or s == \"yes\":\n    print(\"ok\")",
          "why": "ok"
        },
        {
          "title": "juft",
          "code": "n = 4\nif n % 2 == 0:\n    print(\"juft\")",
          "why": "juft"
        },
        {
          "title": "not endswith",
          "code": "fayl = \"a.png\"\nif not fayl.endswith(\".txt\"):\n    print(\"txt emas\")",
          "why": "txt emas"
        }
      ],
      "exercises": [
        {
          "id": "l5-e01",
          "level": "oson",
          "title": "Kattaroqmi",
          "task": "«a» nomli o‘zgaruvchiga 5 qiymatini bering. «b» nomli o‘zgaruvchiga 3 qiymatini bering. Agar a > b bo‘lsa, «ha» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = 5\nb = 3\nif a > b:\n    print(\"ha\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "ha"
            }
          ]
        },
        {
          "id": "l5-e02",
          "level": "oson",
          "title": "Tenglik",
          "task": "«x» nomli o‘zgaruvchiga 4 qiymatini bering. Agar x == 4 bo‘lsa, «teng» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "x = 4\nif x == 4:\n    print(\"teng\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "teng"
            }
          ]
        },
        {
          "id": "l5-e03",
          "level": "oson",
          "title": "Teng emas",
          "task": "«n» nomli o‘zgaruvchiga 1 qiymatini bering. Agar n != 0 bo‘lsa, «bor» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = 1\nif n != 0:\n    print(\"bor\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "bor"
            }
          ]
        },
        {
          "id": "l5-e04",
          "level": "oson",
          "title": "Matn teng emas",
          "task": "«x» nomli o‘zgaruvchiga 1 qiymatini bering. Agar x == 0 bo‘lsa, «nol» print qiling. aks holda. «boshqa» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "x = 1\nif x == 0:\n    print(\"nol\")\nelse:\n    print(\"boshqa\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "boshqa"
            }
          ]
        },
        {
          "id": "l5-e05",
          "level": "oson",
          "title": "not",
          "task": "«flag» nomli o‘zgaruvchiga False qiymatini bering. Agar not flag bo‘lsa, «yoq» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "flag = False\nif not flag:\n    print(\"yoq\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "yoq"
            }
          ]
        },
        {
          "id": "l5-e06",
          "level": "oson",
          "title": "Juft",
          "task": "«n» nomli o‘zgaruvchiga 4 qiymatini bering. Agar n % 2 == 0 bo‘lsa, «juft» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = 4\nif n % 2 == 0:\n    print(\"juft\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "juft"
            }
          ]
        },
        {
          "id": "l5-e07",
          "level": "oson",
          "title": "in matn",
          "task": "«s» nomli o‘zgaruvchiga 'salom' qiymatini bering. Agar 'a' in s bo‘lsa, «bor» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"salom\"\nif \"a\" in s:\n    print(\"bor\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "bor"
            }
          ]
        },
        {
          "id": "l5-e08",
          "level": "oson",
          "title": "not in",
          "task": "«s» nomli o‘zgaruvchiga 'salom' qiymatini bering. Agar 'x' not in s bo‘lsa, «yoq» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = 4\nif n % 2 == 0:\n    print(\"juft\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "yoq"
            }
          ]
        },
        {
          "id": "l5-e09",
          "level": "oson",
          "title": "Matn tengligi",
          "task": "«yosh» nomli o‘zgaruvchiga 18 qiymatini bering. Agar yosh >= 18 bo‘lsa, «kattalar» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"ok\"\nif s == \"ok\":\n    print(\"yes\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "kattalar"
            }
          ]
        },
        {
          "id": "l5-e10",
          "level": "oson",
          "title": "Katta yoki teng",
          "task": "«n» nomli o‘zgaruvchiga 2 qiymatini bering. Agar n == 1 bo‘lsa, «bir» print qiling. aks holda.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = 10\nif n >= 10:\n    print(\"yetarli\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "ikki"
            }
          ]
        },
        {
          "id": "l5-e11",
          "level": "ortacha",
          "title": "not va endswith",
          "task": "«n» nomli o‘zgaruvchiga int(input()) orqali butun son o‘qing. Agar n > 0 bo‘lsa, «musbat» print qiling. aks holda. «emas» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "5",
          "setup": "",
          "solution": "n = int(input())\nif n > 0:\n    print(\"musbat\")\nelse:\n    print(\"emas\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "musbat"
            }
          ]
        },
        {
          "id": "l5-e12",
          "level": "ortacha",
          "title": "Parol tekshiruv",
          "task": "«a» nomli o‘zgaruvchiga 3 qiymatini bering. «b» nomli o‘zgaruvchiga 8 qiymatini bering. a, b ichidan eng kattasini (max) toping va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = 3\nb = 8\nprint(max(a, b))",
          "checks": [
            {
              "type": "stdout",
              "equals": "8"
            }
          ]
        },
        {
          "id": "l5-e13",
          "level": "ortacha",
          "title": "and",
          "task": "«n» nomli o‘zgaruvchiga 4 qiymatini bering. Agar n > 0 and n % 2 == 0 bo‘lsa, «juft-musbat» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = 3\nb = 8\nprint(max(a, b))",
          "checks": [
            {
              "type": "stdout",
              "equals": "juft-musbat"
            }
          ]
        },
        {
          "id": "l5-e14",
          "level": "ortacha",
          "title": "or",
          "task": "input() dan ikkita butun son o‘qing. Kichigini min() bilan topib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "yes",
          "setup": "",
          "solution": "a = int(input())\nb = int(input())\nprint(min(a, b))",
          "checks": [
            {
              "type": "stdout",
              "equals": "ok"
            }
          ]
        },
        {
          "id": "l5-e15",
          "level": "ortacha",
          "title": "Yosh input",
          "task": "input() dan butun son o‘qing. Agar >0 bo‘lsa «musbat», <0 bo‘lsa «manfiy», aks holda «nol» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "17",
          "setup": "",
          "solution": "n = int(input())\nif n > 0:\n    print(\"musbat\")\nelif n < 0:\n    print(\"manfiy\")\nelse:\n    print(\"nol\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "bola"
            }
          ]
        },
        {
          "id": "l5-e16",
          "level": "ortacha",
          "title": "Diapazon",
          "task": "«n» nomli o‘zgaruvchiga int(input()) orqali butun son o‘qing. Agar 1 <= n <= 10 bo‘lsa, «bor» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "10",
          "setup": "",
          "solution": "n = 15\nif n > 10 and n < 20:\n    print(\"orasida\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "bor"
            }
          ]
        },
        {
          "id": "l5-e17",
          "level": "ortacha",
          "title": "endswith if",
          "task": "«nom» nomli o‘zgaruvchiga input() orqali matn o‘qing (masalan «a.txt»). Agar «nom» o‘zgaruvchisiga '.txt' bilan tugashini endswith bilan tekshiring bo‘lsa, «ok» print qiling. aks holda. «yoq» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "a.txt",
          "setup": "",
          "solution": "nom = input()\nif nom.endswith(\".txt\"):\n    print(\"ok\")\nelse:\n    print(\"yoq\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "ok"
            }
          ]
        },
        {
          "id": "l5-e18",
          "level": "ortacha",
          "title": "min input",
          "task": "«a» nomli o‘zgaruvchiga int(input()) orqali butun son o‘qing. «b» nomli o‘zgaruvchiga int(input()) orqali butun son o‘qing. a, b ichidan eng kichikini (min) toping va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "5\n2",
          "setup": "",
          "solution": "a = int(input())\nb = int(input())\nprint(min(a, b))",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l5-e19",
          "level": "ortacha",
          "title": "!= else",
          "task": "input() dan yoshni o‘qing. Agar yosh >= 18 bo‘lsa «kattalar», aks holda «bola» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "yosh = int(input())\nif yosh >= 18:\n    print(\"kattalar\")\nelse:\n    print(\"bola\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "teng"
            }
          ]
        },
        {
          "id": "l5-e20",
          "level": "ortacha",
          "title": "Farq yoki teng",
          "task": "«s» nomli o‘zgaruvchiga input() orqali matn o‘qing (masalan «hi»). Agar s uzunligini (len) hisoblang > 0 bo‘lsa, «s» o‘zgaruvchisini ekranga chiqaring (print). aks holda. «bosh» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "hi",
          "setup": "",
          "solution": "s = input()\nif len(s) > 0:\n    print(s)\nelse:\n    print(\"bosh\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "hi"
            }
          ]
        },
        {
          "id": "l5-e21",
          "level": "qiyin",
          "title": "musbat/manfiy",
          "task": "«n» nomli o‘zgaruvchiga int(input()) orqali butun son o‘qing. Agar n > 0 bo‘lsa, «musbat» print qiling. aks holda.",
          "hint": "",
          "starter": "",
          "stdin": "-4",
          "setup": "",
          "solution": "n = int(input())\nif n > 0:\n    print(\"musbat\")\nelif n < 0:\n    print(\"manfiy\")\nelse:\n    print(\"nol\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "manfiy"
            }
          ]
        },
        {
          "id": "l5-e22",
          "level": "qiyin",
          "title": "not va len",
          "task": "«ball» nomli o‘zgaruvchiga int(input()) orqali butun son o‘qing. Agar ball >= 90 bo‘lsa, «A» print qiling. aks holda.",
          "hint": "",
          "starter": "",
          "stdin": "60",
          "setup": "",
          "solution": "ball = int(input())\nif ball >= 90:\n    print(\"A\")\nelif ball >= 70:\n    print(\"B\")\nelif ball >= 60:\n    print(\"C\")\nelse:\n    print(\"D\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "C"
            }
          ]
        },
        {
          "id": "l5-e23",
          "level": "qiyin",
          "title": "Juft va musbat",
          "task": "n ni o‘qing. U juft va musbat bo‘lsa «juft-musbat» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "2024",
          "setup": "",
          "solution": "yil = int(input())\nif yil % 4 == 0:\n    print(\"kabisa\")\nelse:\n    print(\"oddiy\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "kabisa"
            }
          ]
        },
        {
          "id": "l5-e24",
          "level": "qiyin",
          "title": "Uch max",
          "task": "input() dan n o‘qing. Agar n 1 dan 10 gacha (ikki tomon) bo‘lsa «bor» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "3\n9\n4",
          "setup": "",
          "solution": "n = int(input())\nif 1 <= n <= 10:\n    print(\"bor\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "9"
            }
          ]
        },
        {
          "id": "l5-e25",
          "level": "qiyin",
          "title": "Parol",
          "task": "input() dan uchta butun son o‘qing. Eng kattasini max() bilan print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "abcdef",
          "setup": "",
          "solution": "a = int(input())\nb = int(input())\nc = int(input())\nprint(max(a, b, c))",
          "checks": [
            {
              "type": "stdout",
              "equals": "yaxshi"
            }
          ]
        },
        {
          "id": "l5-e26",
          "level": "qiyin",
          "title": "Chegirma if",
          "task": "input() dan ball o‘qing. 90+ → A, 70+ → B, 60+ → C, aks holda D print qiling (if/elif/else).",
          "hint": "",
          "starter": "",
          "stdin": "10000",
          "setup": "",
          "solution": "ball = int(input())\nif ball >= 90:\n    print(\"A\")\nelif ball >= 70:\n    print(\"B\")\nelif ball >= 60:\n    print(\"C\")\nelse:\n    print(\"D\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "9000"
            }
          ]
        },
        {
          "id": "l5-e27",
          "level": "qiyin",
          "title": "Login",
          "task": "input() dan yilni butun son qilib o‘qing (masalan 2024). Agar yil 4 ga bo‘linsa (yil % 4 == 0) «kabisa», aks holda «oddiy» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "admin1",
          "setup": "",
          "solution": "yil = int(input())\nif yil % 4 == 0:\n    print(\"kabisa\")\nelse:\n    print(\"oddiy\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "ruxsat"
            }
          ]
        },
        {
          "id": "l5-e28",
          "level": "qiyin",
          "title": "Ikki son farqi",
          "task": "«n» nomli o‘zgaruvchiga int(input()) orqali butun son o‘qing. Agar n % 2 == 0 and 10 <= n <= 100 bo‘lsa, «ok» print qiling. aks holda. «yoq» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "40",
          "setup": "",
          "solution": "n = int(input())\nif n % 2 == 0 and 10 <= n <= 100:\n    print(\"ok\")\nelse:\n    print(\"yoq\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "ok"
            }
          ]
        },
        {
          "id": "l5-e29",
          "level": "qiyin",
          "title": "Ball o‘tish",
          "task": "«ball» nomli o‘zgaruvchiga int(input()) orqali butun son o‘qing. Agar ball != 0 and ball >= 60 bo‘lsa, «otdi» print qiling. aks holda. «qoldi» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "60",
          "setup": "",
          "solution": "s = \"salom\"\nif \"x\" not in s:\n    print(\"yoq\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "otdi"
            }
          ]
        },
        {
          "id": "l5-e30",
          "level": "qiyin",
          "title": "Solishtir",
          "task": "«a» nomli o‘zgaruvchiga int(input()) orqali butun son o‘qing. «b» nomli o‘zgaruvchiga int(input()) orqali butun son o‘qing. Agar a > b bo‘lsa, «katta» print qiling. aks holda.",
          "hint": "",
          "starter": "",
          "stdin": "3\n5",
          "setup": "",
          "solution": "a = int(input())\nb = int(input())\nif a > b:\n    print(\"katta\")\nelif a < b:\n    print(\"kichik\")\nelse:\n    print(\"teng\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "kichik"
            }
          ]
        }
      ],
      "review": [
        {
          "term": "if",
          "meaning": "Shart True bo‘lsa blok"
        },
        {
          "term": "elif / else",
          "meaning": "Boshqa shart / aks holda"
        },
        {
          "term": "== / !=",
          "meaning": "Teng / teng emas"
        },
        {
          "term": "< > <= >=",
          "meaning": "Taqqoslash"
        },
        {
          "term": "not",
          "meaning": "Shart teskarisi"
        },
        {
          "term": "and / or",
          "meaning": "Ikkalasi / kamida bittasi"
        },
        {
          "term": "n % 2 == 0",
          "meaning": "Juftlik tekshiruvi"
        },
        {
          "term": "Indent (:)",
          "meaning": "Ichki qatorlar bo‘sh joy bilan"
        }
      ]
    },
    {
      "id": 6,
      "title": "Takrorlash: for va while",
      "subtitle": "range, matn/list bo‘ylab, while, break/continue.",
      "teach": "\n<div class=\"card\">\n  <h3>Takrorlash — bir ishni qayta-qayta</h3>\n  <p>Takrorlash (sikl) bir xil ishni qayta-qayta bajaradi. for — ma’lum ketma-ketlik (masalan range) bo‘ylab; while — shart True ekan davom etadi. break to‘xtatadi, continue shu qadamni o‘tkazib yuboradi. Har bir usul quyida ochib berilgan.</p>\n  <h4>1) for + range</h4>\n  <p class=\"teach-explain\">for o‘zgaruvchini ketma-ket qiymatlar bo‘ylab yuritadi. range(3) → 0, 1, 2 (3 kirmaydi). Ma’lum marta takrorlashning eng oddiy yo‘li.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">for i in range(3):\n    print(i)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">0\n1\n2\n</pre></div></div>\n  <h4>2) range(start, stop)</h4>\n  <p class=\"teach-explain\">range(start, stop) start dan boshlab stop gacha (stop kirmaydi) sonlar beradi. range(1, 4) → 1, 2, 3. Boshlang‘ich qiymatni o‘zingiz belgilaysiz.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">for i in range(1, 4):\n    print(i)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">1\n2\n3\n</pre></div></div>\n  <h4>3) range qadam (step)</h4>\n  <p class=\"teach-explain\">range(start, stop, step) uchinchi argument — qadam. range(0, 5, 2) → 0, 2, 4. Juft sonlar yoki teskari sanash uchun qulay.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">for i in range(0, 5, 2):\n    print(i)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">0\n2\n4\n</pre></div></div>\n  <h4>4) Ro‘yxat bo‘ylab for</h4>\n  <p class=\"teach-explain\">for x in [10, 20]: har bir elementni ketma-ket oladi. Ro‘yxat, matn, to‘plam — aylanish mumkin bo‘lgan narsalar uchun. Har bir element bilan bir xil ishni bajarasiz.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">for x in [10, 20]:\n    print(x)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">10\n20\n</pre></div></div>\n  <h4>5) Yig‘indi</h4>\n  <p class=\"teach-explain\">Sikl ichida yigindi = yigindi + n (yoki +=) qilib jami hisoblanadi. Avval 0 dan boshlaysiz, keyin har qadamda qo‘shasiz. Bu accumulator (yig‘uvchi) usuli.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">yigindi = 0\nfor n in range(1, 6):\n    yigindi += n\nprint(yigindi)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">15</code></div></div>\n  <h4>6) while</h4>\n  <p class=\"teach-explain\">while shart True ekan takrorlanadi. Shartni ichida o‘zgartirmasangiz — cheksiz sikl xavfi bor. Necha marta ekanini oldindan bilmasangiz for dan ko‘ra while mos.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">n = 3\nwhile n > 0:\n    print(n)\n    n = n - 1</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">3\n2\n1\n</pre></div></div>\n  <h4>7) break — to‘xtatish</h4>\n  <p class=\"teach-explain\">break siklni darhol to‘xtatadi. Kerakli qiymat topilganda yoki maxsus shart bo‘lganda chiqish uchun. for va while ichida ishlaydi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">for i in range(10):\n    if i == 3:\n        break\n    print(i)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">0\n1\n2\n</pre></div></div>\n  <h4>8) continue — shu qadamni o‘tkazib yuborish</h4>\n  <p class=\"teach-explain\">continue joriy qadamning qolgan qismini o‘tkazib, keyingi aylanishga o‘tadi. Ba’zi elementlarni e’tiborsiz qoldirish uchun. Sikl to‘xtamaydi — faqat shu qadam qisqaradi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">for i in range(5):\n    if i == 2:\n        continue\n    print(i)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">0\n1\n3\n4\n</pre></div></div>\n  <h4>9) while + input (0 gacha)</h4>\n  <p class=\"teach-explain\">while True ichida input o‘qib, maxsus qiymat (masalan 0) kelganda break qilish odatiy. Foydalanuvchi to‘xtatmaguncha ma’lumot yig‘ish. Cheksiz siklni nazorat qilish namunasi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">yigindi = 0\nwhile True:\n    n = int(input())\n    if n == 0:\n        break\n    yigindi += n\nprint(yigindi)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">8</code></div></div>\n  <h4>10) Ichma-ich for</h4>\n  <p class=\"teach-explain\">Bir for ichida yana for — jadval, matritsa, juftliklar uchun. Tashqi sikl qator, ichki sikl ustun bo‘lishi mumkin. Har bir juftlik (i, j) uchun ish bajariladi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">for i in range(2):\n    for j in range(2):\n        print(str(i) + str(j))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">00\n01\n10\n11\n</pre></div></div>\n  <div class=\"callout\"><code>range(5)</code> → 0..4 (5 kirmaydi). Cheksiz while dan saqlaning — <code>break</code> yoki shartni o‘zgartiring.</div>\n</div>\n",
      "examples": [
        {
          "title": "range",
          "code": "for i in range(3):\n    print(i)",
          "why": "0 1 2"
        },
        {
          "title": "range(1,4)",
          "code": "for i in range(1, 4):\n    print(i)",
          "why": "1 2 3"
        },
        {
          "title": "step",
          "code": "for i in range(0, 5, 2):\n    print(i)",
          "why": "0 2 4"
        },
        {
          "title": "for list",
          "code": "for x in [10, 20]:\n    print(x)",
          "why": "10 keyin 20"
        },
        {
          "title": "Yig‘indi",
          "code": "y = 0\nfor n in range(1, 6):\n    y += n\nprint(y)",
          "why": "15"
        },
        {
          "title": "while",
          "code": "n = 3\nwhile n > 0:\n    print(n)\n    n -= 1",
          "why": "3 2 1"
        },
        {
          "title": "break",
          "code": "for i in range(10):\n    if i == 3:\n        break\n    print(i)",
          "why": "0 1 2"
        },
        {
          "title": "continue",
          "code": "for i in range(5):\n    if i == 2:\n        continue\n    print(i)",
          "why": "0 1 3 4"
        },
        {
          "title": "Ko‘paytma",
          "code": "p = 1\nfor n in range(1, 5):\n    p *= n\nprint(p)",
          "why": "24"
        },
        {
          "title": "Ichma-ich",
          "code": "for i in range(2):\n    for j in range(2):\n        print(str(i) + str(j))",
          "why": "00 01 10 11"
        }
      ],
      "exercises": [
        {
          "id": "l6-e01",
          "level": "oson",
          "title": "range3",
          "task": "for i in range(3): har bir elementni alohida qatorda print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for i in range(3):\n    print(i)",
          "checks": [
            {
              "type": "stdout",
              "equals": "0\n1\n2"
            }
          ]
        },
        {
          "id": "l6-e02",
          "level": "oson",
          "title": "range1-4",
          "task": "range(1,4) bilan 1 2 3 ni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for i in range(1, 4):\n    print(i)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1\n2\n3"
            }
          ]
        },
        {
          "id": "l6-e03",
          "level": "oson",
          "title": "while",
          "task": "«n» nomli o‘zgaruvchiga 1 qiymatini bering. while n < 4 sikli yozing. har safar «n» o‘zgaruvchisini ekranga chiqaring (print). n ni oshirib boring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = 1\nwhile n < 4:\n    print(n)\n    n += 1",
          "checks": [
            {
              "type": "stdout",
              "equals": "1\n2\n3"
            }
          ]
        },
        {
          "id": "l6-e04",
          "level": "oson",
          "title": "for list",
          "task": "for x in [10, 20]: har bir elementni alohida qatorda print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for x in [10, 20]:\n    print(x)",
          "checks": [
            {
              "type": "stdout",
              "equals": "10\n20"
            }
          ]
        },
        {
          "id": "l6-e05",
          "level": "oson",
          "title": "ha*3",
          "task": "for bilan 3 marta \"ha\" print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for i in range(3):\n    print(\"ha\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "ha\nha\nha"
            }
          ]
        },
        {
          "id": "l6-e06",
          "level": "oson",
          "title": "step",
          "task": "for i in range(0, 5, 2): har bir elementni alohida qatorda print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"ok\"\nfor harf in s:\n    print(harf)",
          "checks": [
            {
              "type": "stdout",
              "equals": "0\n2\n4"
            }
          ]
        },
        {
          "id": "l6-e07",
          "level": "oson",
          "title": "Qadam bilan",
          "task": "for harf in 'ok': har bir elementni alohida qatorda print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for harf in \"ok\":\n    print(harf)",
          "checks": [
            {
              "type": "stdout",
              "equals": "o\nk"
            }
          ]
        },
        {
          "id": "l6-e08",
          "level": "oson",
          "title": "yigindi",
          "task": "«yigindi» nomli o‘zgaruvchiga 0 qiymatini bering. for n in [1, 2, 3] sikli yozing. «yigindi» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "yigindi = 0\nfor n in [1, 2, 3]:\n    yigindi += n\nprint(yigindi)",
          "checks": [
            {
              "type": "stdout",
              "equals": "6"
            }
          ]
        },
        {
          "id": "l6-e09",
          "level": "oson",
          "title": "break",
          "task": "for i in range(5) sikli yozing. «i» o‘zgaruvchisini ekranga chiqaring (print). agar i == 2 bo‘lsa, break bilan to‘xtating.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for i in range(5):\n    print(i)\n    if i == 2:\n        break",
          "checks": [
            {
              "type": "code_contains",
              "text": "break"
            },
            {
              "type": "stdout",
              "equals": "0\n1\n2"
            }
          ]
        },
        {
          "id": "l6-e10",
          "level": "oson",
          "title": "continue",
          "task": "for i in range(4) sikli yozing. agar i == 1 bo‘lsa, continue bilan shu qadamni o‘tkazib yuboring. «i» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for i in range(4):\n    if i == 1:\n        continue\n    print(i)",
          "checks": [
            {
              "type": "code_contains",
              "text": "continue"
            },
            {
              "type": "stdout",
              "equals": "0\n2\n3"
            }
          ]
        },
        {
          "id": "l6-e11",
          "level": "ortacha",
          "title": "1..5 yigindi",
          "task": "«s» nomli o‘zgaruvchiga 0 qiymatini bering. for n in range(1, 6) sikli yozing. «s» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "yigindi = 0\nfor n in range(1, 6):\n    yigindi += n\nprint(yigindi)",
          "checks": [
            {
              "type": "stdout",
              "equals": "15"
            }
          ]
        },
        {
          "id": "l6-e12",
          "level": "ortacha",
          "title": "juftlar",
          "task": "for i in range(0, 10, 2): har bir elementni alohida qatorda print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for i in range(0, 10, 2):\n    print(i)",
          "checks": [
            {
              "type": "stdout",
              "equals": "0\n2\n4\n6\n8"
            }
          ]
        },
        {
          "id": "l6-e13",
          "level": "ortacha",
          "title": "while input",
          "task": "Dastur ishga tushganda input sifatida «3» beriladi. while True sikli yozing. har safar «n» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "3\n4\n0",
          "setup": "",
          "solution": "while True:\n    n = int(input())\n    if n == 0:\n        break\n    print(n)",
          "checks": [
            {
              "type": "stdout",
              "equals": "3\n4"
            }
          ]
        },
        {
          "id": "l6-e14",
          "level": "ortacha",
          "title": "faktorial 4",
          "task": "while yordamida 1 dan 6 gacha (6 kirmaydi) sonlarni chiqaring yoki darsdagi «while» misoliga mos natija chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = 1\nwhile n < 6:\n    print(n)\n    n += 1",
          "checks": [
            {
              "type": "stdout",
              "equals": "24"
            }
          ]
        },
        {
          "id": "l6-e15",
          "level": "ortacha",
          "title": "Filtrlash",
          "task": "for n in [1, 2, 3, 4] sikli yozing. agar n % 2 == 0 bo‘lsa, «n» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for n in [1, 2, 3, 4]:\n    if n % 2 == 0:\n        print(n)",
          "checks": [
            {
              "type": "stdout",
              "equals": "2\n4"
            }
          ]
        },
        {
          "id": "l6-e16",
          "level": "ortacha",
          "title": "teskari",
          "task": "for i in range(3, 0, -1): har bir elementni alohida qatorda print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for i in range(3, 0, -1):\n    print(i)",
          "checks": [
            {
              "type": "stdout",
              "equals": "3\n2\n1"
            }
          ]
        },
        {
          "id": "l6-e17",
          "level": "ortacha",
          "title": "while <6",
          "task": "while bilan 1..5 ni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = 1\nwhile n < 6:\n    print(n)\n    n += 1",
          "checks": [
            {
              "type": "stdout",
              "equals": "1\n2\n3\n4\n5"
            }
          ]
        },
        {
          "id": "l6-e18",
          "level": "ortacha",
          "title": "Ko‘paytma",
          "task": "1 dan 4 gacha (4 kirmaydi) sonlar ko‘paytmasini for bilan hisoblab print qiling (1*2*3*4).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "p = 1\nfor n in range(1, 5):\n    p *= n\nprint(p)",
          "checks": [
            {
              "type": "stdout",
              "equals": "30"
            }
          ]
        },
        {
          "id": "l6-e19",
          "level": "ortacha",
          "title": "ichma-ich",
          "task": "for i in range(2) sikli yozing.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for i in range(2):\n    for j in range(2):\n        print(str(i) + str(j))",
          "checks": [
            {
              "type": "stdout",
              "equals": "00\n01\n10\n11"
            }
          ]
        },
        {
          "id": "l6-e20",
          "level": "ortacha",
          "title": "input yigindi",
          "task": "Dastur ishga tushganda input sifatida «3» beriladi. «y» nomli o‘zgaruvchiga 0 qiymatini bering. while True sikli yozing. y ni oshirib boring. «y» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "3\n4\n0",
          "setup": "",
          "solution": "y = 0\nwhile True:\n    n = int(input())\n    if n == 0:\n        break\n    y += n\nprint(y)",
          "checks": [
            {
              "type": "stdout",
              "equals": "7"
            }
          ]
        },
        {
          "id": "l6-e21",
          "level": "qiyin",
          "title": "faktorial 5",
          "task": "5 faktorialni (1*2*3*4*5) for bilan hisoblab print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "p = 1\nfor i in range(1, 6):\n    p *= i\nprint(p)",
          "checks": [
            {
              "type": "stdout",
              "equals": "120"
            }
          ]
        },
        {
          "id": "l6-e22",
          "level": "qiyin",
          "title": "toq yigindi",
          "task": "«s» nomli o‘zgaruvchiga 0 qiymatini bering. for n in range(1, 11) sikli yozing. agar n % 2 == 1 bo‘lsa, «s» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = 0\nfor n in range(1, 11):\n    if n % 2 == 1:\n        s += n\nprint(s)",
          "checks": [
            {
              "type": "stdout",
              "equals": "25"
            }
          ]
        },
        {
          "id": "l6-e23",
          "level": "qiyin",
          "title": "continue 2",
          "task": "while True ichida int(input()) o‘qing; 0 kelganda to‘xtang (break). Shu paytgacha yig‘ilgan yig‘indini print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "yigindi = 0\nwhile True:\n    n = int(input())\n    if n == 0:\n        break\n    yigindi += n\nprint(yigindi)",
          "checks": [
            {
              "type": "code_contains",
              "text": "continue"
            },
            {
              "type": "stdout",
              "equals": "0\n1\n3\n4"
            }
          ]
        },
        {
          "id": "l6-e24",
          "level": "qiyin",
          "title": "max sikl",
          "task": "[3,9,2,7] dan max ni for bilan toping (max() siz).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [3, 9, 2, 7]\nm = a[0]\nfor x in a:\n    if x > m:\n        m = x\nprint(m)",
          "checks": [
            {
              "type": "stdout",
              "equals": "9"
            }
          ]
        },
        {
          "id": "l6-e25",
          "level": "qiyin",
          "title": "sanash",
          "task": "«s» nomli o‘zgaruvchiga 'banana' qiymatini bering. «k» nomli o‘zgaruvchiga 0 qiymatini bering. for ch in s sikli yozing. agar ch == 'a' bo‘lsa, «k» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for i in range(5):\n    if i == 2:\n        continue\n    print(i)",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l6-e26",
          "level": "qiyin",
          "title": "tub tekshiruv g‘oya",
          "task": "1 dan 10 gacha toq sonlar yig‘indisini for bilan hisoblab print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "yigindi = 0\nfor n in range(1, 11):\n    if n % 2 == 1:\n        yigindi += n\nprint(yigindi)",
          "checks": [
            {
              "type": "stdout",
              "equals": "7"
            }
          ]
        },
        {
          "id": "l6-e27",
          "level": "qiyin",
          "title": "ko‘paytma",
          "task": "«p» nomli o‘zgaruvchiga 1 qiymatini bering. for n in range(1, 5) sikli yozing. «p» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "p = 1\nfor n in range(1, 5):\n    p *= n\nprint(p)",
          "checks": [
            {
              "type": "stdout",
              "equals": "24"
            }
          ]
        },
        {
          "id": "l6-e28",
          "level": "qiyin",
          "title": "while + if",
          "task": "«n» nomli o‘zgaruvchiga 1 qiymatini bering. while n <= 10 sikli yozing. n ni oshirib boring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = 1\nwhile n <= 10:\n    if n % 2 == 0:\n        print(n)\n    n += 1",
          "checks": [
            {
              "type": "stdout",
              "equals": "2\n4\n6\n8\n10"
            }
          ]
        },
        {
          "id": "l6-e29",
          "level": "qiyin",
          "title": "Nol emas yig‘indi",
          "task": "«s» nomli o‘zgaruvchiga 'abc' qiymatini bering. for ch in s siklida kerakli qiymatlarni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "yigindi = 0\nfor n in [3, 0, 4]:\n    if n != 0:\n        yigindi += n\nprint(yigindi)",
          "checks": [
            {
              "type": "stdout",
              "equals": "b\nc\nd"
            }
          ]
        },
        {
          "id": "l6-e30",
          "level": "qiyin",
          "title": "filter yigindi",
          "task": "«s» nomli o‘zgaruvchiga 0 qiymatini bering. for n in [1, 2, 3, 4, 5, 6] sikli yozing. agar n > 3 and n % 2 == 0 bo‘lsa, «s» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for i in range(2):\n    for j in range(2):\n        print(str(i) + str(j))",
          "checks": [
            {
              "type": "stdout",
              "equals": "10"
            }
          ]
        }
      ],
      "review": [
        {
          "term": "for + range",
          "meaning": "Ma’lum marta takrorlash"
        },
        {
          "term": "range(a, b, step)",
          "meaning": "Boshlash, to‘xtash, qadam"
        },
        {
          "term": "for x in list",
          "meaning": "Ro‘yxat bo‘ylab"
        },
        {
          "term": "while",
          "meaning": "Shart True ekan davom"
        },
        {
          "term": "break",
          "meaning": "Tsiklni to‘xtatish"
        },
        {
          "term": "continue",
          "meaning": "Shu qadamni o‘tkazib yuborish"
        },
        {
          "term": "Yig‘indi / ko‘paytma",
          "meaning": "O‘zgaruvchini tsiklda yangilash"
        },
        {
          "term": "Ichma-ich for",
          "meaning": "Tsikl ichida tsikl"
        }
      ]
    },
    {
      "id": 7,
      "title": "Ro‘yxatlar asosi (list)",
      "subtitle": "Yaratish, indeks, kesish, len, for, append.",
      "teach": "\n<div class=\"card\">\n  <h3>List — o‘zgaruvchan ketma-ketlik</h3>\n  <p>Ro‘yxat (list) bir necha qiymatni bitta nom ostida saqlaydi. Indeks 0 dan boshlanadi. Element qo‘shish, o‘zgartirish, kesish, aylanish mumkin. Quyida yaratishdan boshlab asosiy amallar tushuntiriladi.</p>\n  <h4>1) Yaratish</h4>\n  <p class=\"teach-explain\">list kvadrat qavs ichida: [1, 2, 3]. Tartibli, o‘zgaruvchan to‘plam — element qo‘shish/o‘chirish mumkin. Bir necha qiymatni bitta nom ostida saqlash uchun.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">sonlar = [1, 2, 3]\nprint(sonlar)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[1, 2, 3]</code></div></div>\n  <h4>2) Indeks</h4>\n  <p class=\"teach-explain\">Elementga a[0], a[1] kabi indeks bilan murojaat qilinadi (0 dan boshlanadi). Manfiy indeks oxiridan: a[-1] oxirgi element. Chegaradan tashqari indeks — IndexError.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = [7, 8, 9]\nprint(a[0])\nprint(a[-1])</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">7\n9\n</pre></div></div>\n  <h4>3) len</h4>\n  <p class=\"teach-explain\">len(ro‘yxat) nechta element borligini qaytaradi. Bo‘sh list uzunligi 0. Sikl chegarasi va tekshiruvlarda kerak.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">print(len([1, 2, 3, 4]))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">4</code></div></div>\n  <h4>4) append — oxiriga qo‘shish</h4>\n  <p class=\"teach-explain\">append(x) elementni ro‘yxat oxiriga qo‘shadi. Ro‘yxat joyida o‘zgaradi (yangisini qaytarmaydi). Ma’lumot yig‘ishning eng ko‘p ishlatiladigan usuli.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = [1]\na.append(5)\nprint(a)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[1, 5]</code></div></div>\n  <h4>5) Elementni o‘zgartirish</h4>\n  <p class=\"teach-explain\">a[i] = yangi_qiymat bilan mavjud elementni almashtirasiz. List o‘zgaruvchan (mutable) — shuning uchun bu mumkin. Tuple da bunday qilib bo‘lmaydi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = [0, 0]\na[0] = 4\nprint(a)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[4, 0]</code></div></div>\n  <h4>6) for bilan aylanish</h4>\n  <p class=\"teach-explain\">for item in a: har bir elementni ketma-ket oladi. Ro‘yxatni ko‘rish, hisoblash, filtrlash uchun asosiy usul. Indeks kerak bo‘lsa enumerate ishlatiladi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">for x in [10, 20]:\n    print(x)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">10\n20\n</pre></div></div>\n  <h4>7) Kesish (slice)</h4>\n  <p class=\"teach-explain\">a[start:stop] qism ro‘yxat (slice) qaytaradi — stop kirmaydi. a[:2], a[1:], a[::2] kabi qisqartmalar bor. Asl ro‘yxat odatda o‘zgarmaydi — nusxa olinadi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = [1, 2, 3, 4]\nprint(a[0:2])</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[1, 2]</code></div></div>\n  <h4>8) in — bor-yo‘q</h4>\n  <p class=\"teach-explain\">x in to‘plam — element bormi. Tuple, list, set, matn — ko‘p joyda ishlaydi. Shartlarda eng qulay tekshiruv.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">print(\"a\" in [\"a\", \"b\"])</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">True</code></div></div>\n  <h4>9) max / min / sum</h4>\n  <p class=\"teach-explain\">max eng katta, min eng kichik, sum yig‘indi. Sonli ro‘yxatlar uchun tayyor funksiyalar. Bo‘sh ro‘yxatda max/min xato berishi mumkin.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = [3, 9, 2]\nprint(max(a))\nprint(min(a))\nprint(sum(a))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">9\n2\n14\n</pre></div></div>\n  <h4>10) Ulash +</h4>\n  <p class=\"teach-explain\">Ikki listni + bilan ulasangiz, yangi list hosil bo‘ladi. Asl listlar o‘zgarmaydi. extend esa mavjud listni joyida kengaytiradi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">print([1, 2] + [3])</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[1, 2, 3]</code></div></div>\n  <h4>11) Takror *</h4>\n  <p class=\"teach-explain\"> [0] * 3 → [0, 0, 0] — listni takrorlaydi. Boshlang‘ich to‘ldirish uchun qulay. Ichma-ich listlarda ehtiyot bo‘ling (bir xil obyekt nusxasi).</p>\n  <div class=\"code-wrap\"><pre class=\"code\">print([0] * 3)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[0, 0, 0]</code></div></div>\n  <div class=\"callout\">List o‘zgaradi (<code>append</code>, indeksga yozish). Indeks chegaradan chiqsa — xato.</div>\n</div>\n",
      "examples": [
        {
          "title": "Yaratish",
          "code": "sonlar = [1, 2, 3]\nprint(sonlar)",
          "why": "[1, 2, 3]"
        },
        {
          "title": "Indeks",
          "code": "a = [7, 8, 9]\nprint(a[0])\nprint(a[-1])",
          "why": "7 keyin 9"
        },
        {
          "title": "len",
          "code": "print(len([1, 2, 3, 4]))",
          "why": "4"
        },
        {
          "title": "append",
          "code": "a = [1]\na.append(5)\nprint(a)",
          "why": "[1, 5]"
        },
        {
          "title": "O‘zgartirish",
          "code": "a = [0, 0]\na[0] = 4\nprint(a)",
          "why": "[4, 0]"
        },
        {
          "title": "for",
          "code": "for x in [10, 20]:\n    print(x)",
          "why": "10 keyin 20"
        },
        {
          "title": "Kesish",
          "code": "print([1, 2, 3, 4][0:2])",
          "why": "[1, 2]"
        },
        {
          "title": "in",
          "code": "print(\"a\" in [\"a\", \"b\"])",
          "why": "True"
        },
        {
          "title": "max/min",
          "code": "a = [3, 9, 2]\nprint(max(a))\nprint(min(a))",
          "why": "9 keyin 2"
        },
        {
          "title": "Ulash",
          "code": "print([1, 2] + [3])",
          "why": "[1, 2, 3]"
        },
        {
          "title": "[0]*3",
          "code": "print([0] * 3)",
          "why": "[0, 0, 0]"
        },
        {
          "title": "Yig‘indi",
          "code": "a = [1, 2, 3, 4]\ns = 0\nfor x in a:\n    s += x\nprint(s)",
          "why": "10"
        }
      ],
      "exercises": [
        {
          "id": "l7-e01",
          "level": "oson",
          "title": "yaratish",
          "task": "sonlar nomli ro‘yxatga [1, 2, 3] bering va ro‘yxatni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "sonlar = [1, 2, 3]\nprint(sonlar)",
          "checks": [
            {
              "type": "var",
              "name": "sonlar",
              "equals": [
                1,
                2,
                3
              ]
            },
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l7-e02",
          "level": "oson",
          "title": "indeks0",
          "task": "«a» nomli o‘zgaruvchiga [7, 8, 9] qiymatini bering. a[0] natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [7, 8, 9]\nprint(a[0])",
          "checks": [
            {
              "type": "stdout",
              "equals": "7"
            }
          ]
        },
        {
          "id": "l7-e03",
          "level": "oson",
          "title": "indeks-1",
          "task": "«a» nomli o‘zgaruvchiga [7, 8, 9] qiymatini bering. a[-1] natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [7, 8, 9]\nprint(a[-1])",
          "checks": [
            {
              "type": "stdout",
              "equals": "9"
            }
          ]
        },
        {
          "id": "l7-e04",
          "level": "oson",
          "title": "len",
          "task": "[1, 2, 3, 4] uzunligini (len) hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 2, 3, 4]\nprint(len(a))",
          "checks": [
            {
              "type": "stdout",
              "equals": "4"
            }
          ]
        },
        {
          "id": "l7-e05",
          "level": "oson",
          "title": "append",
          "task": "«a» nomli o‘zgaruvchiga [1] qiymatini bering. «a» o‘zgaruvchisiga append(5) qiling. «a» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1]\na.append(5)\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 5]"
            }
          ]
        },
        {
          "id": "l7-e06",
          "level": "oson",
          "title": "for list",
          "task": "for x in [10, 20]: har bir elementni alohida qatorda print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for x in [10, 20]:\n    print(x)",
          "checks": [
            {
              "type": "stdout",
              "equals": "10\n20"
            }
          ]
        },
        {
          "id": "l7-e07",
          "level": "oson",
          "title": "o‘zgartir",
          "task": "for bilan [10, 20] ro‘yxatidagi har bir elementni alohida qatorda print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for x in [10, 20]:\n    print(x)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[4, 0]"
            }
          ]
        },
        {
          "id": "l7-e08",
          "level": "oson",
          "title": "bo‘sh",
          "task": "[] uzunligini (len) hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(len([]))",
          "checks": [
            {
              "type": "stdout",
              "equals": "0"
            }
          ]
        },
        {
          "id": "l7-e09",
          "level": "oson",
          "title": "ikkinchi",
          "task": "Ro‘yxat/tuple [5, 6, 7] berilgan. Indeks 1 dagi elementni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print([5, 6, 7][1])",
          "checks": [
            {
              "type": "stdout",
              "equals": "6"
            }
          ]
        },
        {
          "id": "l7-e10",
          "level": "oson",
          "title": "in",
          "task": "'a' in ['a', 'b'] natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [5, 6, 7]\nprint(a[1])",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l7-e11",
          "level": "ortacha",
          "title": "slice",
          "task": "«a» nomli o‘zgaruvchiga [1, 2, 3, 4] qiymatini bering. a[0:2] natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 2, 3, 4]\ns = 0\nfor x in a:\n    s += x\nprint(s)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2]"
            }
          ]
        },
        {
          "id": "l7-e12",
          "level": "ortacha",
          "title": "yigindi",
          "task": "«a» nomli o‘zgaruvchiga [1, 2, 3, 4] qiymatini bering. «s» nomli o‘zgaruvchiga 0 qiymatini bering. for x in a sikli yozing. «s» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [3, 9, 2]\nprint(max(a))",
          "checks": [
            {
              "type": "stdout",
              "equals": "10"
            }
          ]
        },
        {
          "id": "l7-e13",
          "level": "ortacha",
          "title": "max",
          "task": "[3, 9, 2] ichidan eng kattasini (max) toping va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 2, 3, 4]\nprint(a[0:2])",
          "checks": [
            {
              "type": "stdout",
              "equals": "9"
            }
          ]
        },
        {
          "id": "l7-e14",
          "level": "ortacha",
          "title": "Ikki append",
          "task": "Bo‘sh a = [] yarating. 8 va 9 ni append qiling, ro‘yxatni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = []\na.append(8)\na.append(9)\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[8, 9]"
            }
          ]
        },
        {
          "id": "l7-e15",
          "level": "ortacha",
          "title": "Mashq",
          "task": "[1, 2] + [3] natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print([1, 2] + [3])",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l7-e16",
          "level": "ortacha",
          "title": "pop",
          "task": "input orqali 2 ta son o‘qing (stdin), ularni list qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = int(input())\nb = int(input())\nprint([a, b])",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2]"
            }
          ]
        },
        {
          "id": "l7-e17",
          "level": "ortacha",
          "title": "count",
          "task": "«a» nomli o‘zgaruvchiga [1, 2, 1, 1] qiymatini bering. «a» o‘zgaruvchisiga 1 necha marta ekanini count bilan toping va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 2, 1, 1]\nprint(a.count(1))",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l7-e18",
          "level": "ortacha",
          "title": "Nollar ro‘yxati",
          "task": "«a» nomli o‘zgaruvchiga int(input()) orqali butun son o‘qing. «b» nomli o‘zgaruvchiga int(input()) orqali butun son o‘qing. [a, b] natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "4\n5",
          "setup": "",
          "solution": "a = int(input())\nb = int(input())\nprint([a, b])",
          "checks": [
            {
              "type": "stdout",
              "equals": "[4, 5]"
            }
          ]
        },
        {
          "id": "l7-e19",
          "level": "ortacha",
          "title": "teskari print",
          "task": "for x in [3, 2, 1]: har bir elementni alohida qatorda print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for x in [3, 2, 1]:\n    print(x)",
          "checks": [
            {
              "type": "stdout",
              "equals": "3\n2\n1"
            }
          ]
        },
        {
          "id": "l7-e20",
          "level": "ortacha",
          "title": "min",
          "task": "[5, 1, 8] ichidan eng kichikini (min) toping va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(min([5, 1, 8]))",
          "checks": [
            {
              "type": "stdout",
              "equals": "1"
            }
          ]
        },
        {
          "id": "l7-e21",
          "level": "qiyin",
          "title": "juftlar yigindi",
          "task": "«s» nomli o‘zgaruvchiga 0 qiymatini bering. for x in [1, 2, 3, 4, 5, 6] sikli yozing. agar x % 2 == 0 bo‘lsa, «s» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = 0\nfor x in [1, 2, 3, 4, 5, 6]:\n    if x % 2 == 0:\n        s += x\nprint(s)",
          "checks": [
            {
              "type": "stdout",
              "equals": "12"
            }
          ]
        },
        {
          "id": "l7-e22",
          "level": "qiyin",
          "title": "filter >5",
          "task": "for x in [2, 7, 4, 9] sikli yozing. agar x > 5 bo‘lsa, «x» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [10, 20, 30]\norta = sum(a) / len(a)\nprint(orta)",
          "checks": [
            {
              "type": "stdout",
              "equals": "7\n9"
            }
          ]
        },
        {
          "id": "l7-e23",
          "level": "qiyin",
          "title": "unique g‘oya",
          "task": "«a» nomli o‘zgaruvchiga [1, 1, 2, 2, 3] qiymatini bering. «b» nomli o‘zgaruvchiga [] qiymatini bering. for x in a sikli yozing. agar x not in b bo‘lsa, «b» o‘zgaruvchisiga append(x) qiling. «b» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [\"x\", \"y\", \"z\"]\nprint(a.index(\"y\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l7-e24",
          "level": "qiyin",
          "title": "Ro‘yxat ulash",
          "task": "[1, 2] + [3] ni hisoblab print qiling (ikki ro‘yxatni qo‘shish).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print([1, 2] + [3])",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3, 4]"
            }
          ]
        },
        {
          "id": "l7-e25",
          "level": "qiyin",
          "title": "indeks top",
          "task": "«a» nomli o‘zgaruvchiga [4, 5, 6] qiymatini bering. for i in range(a uzunligini (len) hisoblang) sikli yozing. agar a[i] == 5 bo‘lsa, «i» o‘zgaruvchisini ekranga chiqaring (print). break bilan to‘xtating.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 2, 3]\na.pop()\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1"
            }
          ]
        },
        {
          "id": "l7-e26",
          "level": "qiyin",
          "title": "o‘rtacha",
          "task": "min([5, 1, 8]) ni hisoblab print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(min([5, 1, 8]))",
          "checks": [
            {
              "type": "stdout",
              "equals": "4.0"
            }
          ]
        },
        {
          "id": "l7-e27",
          "level": "qiyin",
          "title": "slice oxir",
          "task": "«a» nomli o‘zgaruvchiga [0, 1, 2, 3, 4] qiymatini bering. a[2:] natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [0, 1, 2, 3, 4]\nprint(a[2:])",
          "checks": [
            {
              "type": "stdout",
              "equals": "[2, 3, 4]"
            }
          ]
        },
        {
          "id": "l7-e28",
          "level": "qiyin",
          "title": "input yigindi",
          "task": "«a» nomli o‘zgaruvchiga [int(input() dan matn o‘qing) qiling, int(input() dan matn o‘qing) qiling, int(input() dan matn o‘qing) qiling] qiymatini bering. a yig‘indisini (sum) hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "1\n2\n3",
          "setup": "",
          "solution": "a = [1, 2, 1, 1]\nprint(a.count(1))",
          "checks": [
            {
              "type": "stdout",
              "equals": "6"
            }
          ]
        },
        {
          "id": "l7-e29",
          "level": "qiyin",
          "title": "almashtir",
          "task": "«a» nomli o‘zgaruvchiga [1, 9] qiymatini bering. «a» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 9]\na[0], a[1] = a[1], a[0]\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[9, 1]"
            }
          ]
        },
        {
          "id": "l7-e30",
          "level": "qiyin",
          "title": "matn uzunlik",
          "task": "for s in ['ali', 'vali', 'nodira'] siklida kerakli qiymatlarni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for s in [\"ali\", \"vali\", \"nodira\"]:\n    print(len(s))",
          "checks": [
            {
              "type": "stdout",
              "equals": "3\n4\n6"
            }
          ]
        }
      ],
      "review": [
        {
          "term": "a = [1, 2, 3]",
          "meaning": "List yaratish"
        },
        {
          "term": "a[0] / a[-1]",
          "meaning": "Birinchi / oxirgi element"
        },
        {
          "term": "len(a)",
          "meaning": "Elementlar soni"
        },
        {
          "term": "append",
          "meaning": "Oxiriga qo‘shish"
        },
        {
          "term": "a[i] = ...",
          "meaning": "Elementni o‘zgartirish"
        },
        {
          "term": "a[0:2]",
          "meaning": "Kesish (slice)"
        },
        {
          "term": "in",
          "meaning": "Element bormi"
        },
        {
          "term": "max / min / sum",
          "meaning": "Eng katta, kichik, yig‘indi"
        },
        {
          "term": "+ / *",
          "meaning": "Ulash / takrorlash"
        }
      ]
    },
    {
      "id": 8,
      "title": "Ro‘yxat metodlari, map, filter",
      "subtitle": "insert, remove, pop, del, sort, reverse, extend, map, filter.",
      "teach": "\n<div class=\"card\">\n  <h3>List metodlari, map, filter</h3>\n  <p>Ro‘yxatni o‘zgartirish uchun metodlar bor: insert, remove, pop, sort va boshqalar. map har bir elementga amal qo‘llaydi, filter shartga moslarini qoldiradi. Har birining vazifasi quyida alohida yozilgan.</p>\n  <h4>1) insert — joyga qo‘yish</h4>\n  <p class=\"teach-explain\">insert(i, x) elementni i indeksiga qo‘yadi, qolganlari o‘ngga siljiydi. append oxiriga, insert esa tanlagan joyga. Ro‘yxat joyida o‘zgaradi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = [1, 3]\na.insert(1, 2)\nprint(a)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[1, 2, 3]</code></div></div>\n  <h4>2) remove — qiymatni o‘chirish</h4>\n  <p class=\"teach-explain\">remove(x) birinchi uchragan x qiymatini o‘chiradi. Qiymat yo‘q bo‘lsa ValueError. Indeks bo‘yicha o‘chirish uchun pop ishlatiladi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = [1, 2, 3]\na.remove(2)\nprint(a)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[1, 3]</code></div></div>\n  <h4>3) pop — indeksdan olish</h4>\n  <p class=\"teach-explain\">pop(i) i dagi elementni olib tashlaydi va qaytaradi. pop() argumentisiz oxirgisini oladi. Stack (oxirgi kirgan — birinchi chiqadi) usuli uchun qulay.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = [1, 2, 3]\noxirgi = a.pop()\nprint(a)\nprint(oxirgi)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">[1, 2]\n3\n</pre></div></div>\n  <h4>4) sort</h4>\n  <p class=\"teach-explain\">sort() ro‘yxatni o‘sib borish tartibida joyida saralaydi. Yangisini qaytarmaydi — None qaytaradi, a o‘zi o‘zgaradi. sorted(a) esa yangi saralangan list beradi, asli saqlanadi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = [3, 1, 2]\na.sort()\nprint(a)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[1, 2, 3]</code></div></div>\n  <h4>5) sort reverse</h4>\n  <p class=\"teach-explain\">sort(reverse=True) kamayish tartibida saralaydi. Eng katta qiymat boshida bo‘ladi. Reyting, ball, narx bo‘yicha teskari tartib uchun.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = [1, 2, 3]\na.sort(reverse=True)\nprint(a)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[3, 2, 1]</code></div></div>\n  <h4>6) index / count</h4>\n  <p class=\"teach-explain\">index(x) birinchi uchragan joyining indeksini, count(x) necha marta uchrashini beradi. Yo‘q qiymatda index xato qiladi. Qidiruv va statistika uchun.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = [4, 5, 6]\nprint(a.index(5))\nprint([1, 1, 2].count(1))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">1\n2\n</pre></div></div>\n  <h4>7) clear / del</h4>\n  <p class=\"teach-explain\">clear() barcha elementlarni o‘chiradi (bo‘sh list qoladi). del a[i] bitta indeksni o‘chiradi. Tozalash va qisman o‘chirish vositalari.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = [1, 2]\na.clear()\nprint(a)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[]</code></div></div>\n  <h4>8) map — har biriga amal</h4>\n  <p class=\"teach-explain\">map(funksiya, ketma-ketlik) har bir elementga funksiyani qo‘llaydi. Natijani list() bilan ko‘rish odatiy. Masalan har bir sonni ikki barobar qilish.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">sonlar = [2, 3]\nkv = list(map(lambda x: x * x, sonlar))\nprint(kv)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[4, 9]</code></div></div>\n  <h4>9) filter — shartga moslar</h4>\n  <p class=\"teach-explain\">filter(funksiya, ketma-ketlik) faqat True bergan elementlarni qoldiradi. Juft sonlar, musbatlar kabi filtrlash. map bilan birga funksionall uslubning asosi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = [1, 2, 3, 4, 5]\njuft = list(filter(lambda x: x % 2 == 0, a))\nprint(juft)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[2, 4]</code></div></div>\n  <h4>10) Zanjir: sort + append</h4>\n  <p class=\"teach-explain\">Bir necha metodni ketma-ket qo‘llab ro‘yxatni o‘zgartirish mumkin. Avval qo‘shish, keyin saralash — amaliy ketma-ketlik. Har qadamdan keyin print qilib natijani kuzating.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = [3, 1, 2]\na.sort()\na.append(4)\nprint(a)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[1, 2, 3, 4]</code></div></div>\n  <div class=\"callout\"><code>map</code>/<code>filter</code> natijasini ko‘pincha <code>list(...)</code> qilib olasiz. <code>lambda</code> — qisqa ismsiz funksiya.</div>\n</div>\n",
      "examples": [
        {
          "title": "insert",
          "code": "a = [1, 3]\na.insert(1, 2)\nprint(a)",
          "why": "[1, 2, 3]"
        },
        {
          "title": "remove",
          "code": "a = [1, 2, 3]\na.remove(2)\nprint(a)",
          "why": "[1, 3]"
        },
        {
          "title": "pop",
          "code": "a = [1, 2, 3]\nx = a.pop()\nprint(a)\nprint(x)",
          "why": "[1, 2] va 3"
        },
        {
          "title": "sort",
          "code": "a = [3, 1, 2]\na.sort()\nprint(a)",
          "why": "[1, 2, 3]"
        },
        {
          "title": "sort reverse",
          "code": "a = [1, 2, 3]\na.sort(reverse=True)\nprint(a)",
          "why": "[3, 2, 1]"
        },
        {
          "title": "index/count",
          "code": "print([4, 5, 6].index(5))\nprint([1, 1, 2].count(1))",
          "why": "1 keyin 2"
        },
        {
          "title": "clear",
          "code": "a = [1, 2]\na.clear()\nprint(a)",
          "why": "[]"
        },
        {
          "title": "map",
          "code": "print(list(map(lambda x: x * 2, [1, 2, 3])))",
          "why": "[2, 4, 6]"
        },
        {
          "title": "filter",
          "code": "print(list(filter(lambda x: x > 10, [5, 12, 8, 20])))",
          "why": "[12, 20]"
        },
        {
          "title": "Zanjir",
          "code": "a = [3, 1, 2]\na.sort()\na.append(4)\nprint(a)",
          "why": "[1, 2, 3, 4]"
        }
      ],
      "exercises": [
        {
          "id": "l8-e01",
          "level": "oson",
          "title": "Boshiga qo‘shish",
          "task": "«a» nomli o‘zgaruvchiga [2, 3] qiymatini bering. «a» o‘zgaruvchisiga insert(0, 1) qiling. «a» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [2, 3]\na.insert(0, 1)\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l8-e02",
          "level": "oson",
          "title": "O‘rtaga qo‘shish",
          "task": "«a» nomli o‘zgaruvchiga [1, 2, 3] qiymatini bering. «a» o‘zgaruvchisiga remove(2) qiling. «a» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 3]\na.insert(1, 2)\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 3]"
            }
          ]
        },
        {
          "id": "l8-e03",
          "level": "oson",
          "title": "pop0",
          "task": "«a» nomli o‘zgaruvchiga [10, 20, 30] qiymatini bering. «a» o‘zgaruvchisiga pop(0) qiling. «a» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 2, 3]\na.remove(2)\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[20, 30]"
            }
          ]
        },
        {
          "id": "l8-e04",
          "level": "oson",
          "title": "sort",
          "task": "«a» nomli o‘zgaruvchiga [3, 1, 2] qiymatini bering. «a» o‘zgaruvchisiga sort() qilib tartiblang. «a» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 2, 3]\na.pop()\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l8-e05",
          "level": "oson",
          "title": "Birinchisini olish",
          "task": "[3, 1, 2] ni sorted bilan o‘sish tartibida joylashtiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [10, 20, 30]\na.pop(0)\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l8-e06",
          "level": "oson",
          "title": "reverse",
          "task": "«a» nomli o‘zgaruvchiga [1, 2, 3] qiymatini bering. «a» o‘zgaruvchisiga reverse() qiling. «a» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 2, 3]\ndel a[1]\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[3, 2, 1]"
            }
          ]
        },
        {
          "id": "l8-e07",
          "level": "oson",
          "title": "extend",
          "task": "«a» nomli o‘zgaruvchiga [1] qiymatini bering. «a» o‘zgaruvchisiga extend([2, 3]) qiling. «a» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 2, 3]\na.clear()\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l8-e08",
          "level": "oson",
          "title": "clear",
          "task": "«a» nomli o‘zgaruvchiga [1, 2, 3] qiymatini bering. «a» o‘zgaruvchisiga clear() qilib bo‘shating. «a» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1]\na.extend([2, 3])\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[]"
            }
          ]
        },
        {
          "id": "l8-e09",
          "level": "oson",
          "title": "index",
          "task": "«a» nomli o‘zgaruvchiga [4, 5, 6] qiymatini bering. «a» o‘zgaruvchisiga 5 indeksini index bilan toping va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [4, 5, 6]\nprint(a.index(5))",
          "checks": [
            {
              "type": "stdout",
              "equals": "1"
            }
          ]
        },
        {
          "id": "l8-e10",
          "level": "oson",
          "title": "count",
          "task": "«a» nomli o‘zgaruvchiga [1, 1, 2] qiymatini bering. «a» o‘zgaruvchisiga 1 necha marta ekanini count bilan toping va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 1, 2]\nprint(a.count(1))",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l8-e11",
          "level": "ortacha",
          "title": "map*2",
          "task": "«a» nomli o‘zgaruvchiga [1, 2, 3] qiymatini bering. list(map(lambda, a) natijasini list qiling) qiling va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [3, 1, 2]\na.sort()\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[2, 4, 6]"
            }
          ]
        },
        {
          "id": "l8-e12",
          "level": "ortacha",
          "title": "filter juft",
          "task": "«a» nomli o‘zgaruvchiga [1, 2, 3, 4, 5, 6] qiymatini bering. list(filter(lambda, a) natijasini list qiling) qiling va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [3, 1, 2]\nprint(sorted(a))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[2, 4, 6]"
            }
          ]
        },
        {
          "id": "l8-e13",
          "level": "ortacha",
          "title": "sort append",
          "task": "«a» nomli o‘zgaruvchiga [3, 1, 2] qiymatini bering. «a» o‘zgaruvchisiga sort() qilib tartiblang. «a» o‘zgaruvchisiga append(4) qiling. «a» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 2, 3]\na.reverse()\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3, 4]"
            }
          ]
        },
        {
          "id": "l8-e14",
          "level": "ortacha",
          "title": "map ikki barobar",
          "task": "«a» nomli o‘zgaruvchiga [0, 1, 2, 3] qiymatini bering. del a[1:3] qiling. «a» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "list(map(lambda x: x*2, a))",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 2, 3]\nprint(list(map(lambda x: x * 2, a)))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[0, 3]"
            }
          ]
        },
        {
          "id": "l8-e15",
          "level": "ortacha",
          "title": "sort reverse",
          "task": "«a» nomli o‘zgaruvchiga [1, 2, 3] qiymatini bering. «a» o‘zgaruvchisiga sort() qilib tartiblang. «a» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "list(filter(lambda x: x%2==0, a))",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 2, 3, 4, 5, 6]\nprint(list(filter(lambda x: x % 2 == 0, a)))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[3, 2, 1]"
            }
          ]
        },
        {
          "id": "l8-e16",
          "level": "ortacha",
          "title": "map kvadrat",
          "task": "«a» nomli o‘zgaruvchiga [1, 2] qiymatini bering. list(map(str, a) natijasini list qiling) qiling va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [2, 3, 4]\nprint(list(map(lambda x: x * x, a)))",
          "checks": [
            {
              "type": "stdout",
              "equals": "['1', '2']"
            }
          ]
        },
        {
          "id": "l8-e17",
          "level": "ortacha",
          "title": "Birinchi remove",
          "task": "«a» nomli o‘zgaruvchiga [3, 12, 7, 20] qiymatini bering. list(filter(lambda, a) natijasini list qiling) qiling va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [2, 1, 2]\na.remove(2)\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[12, 20]"
            }
          ]
        },
        {
          "id": "l8-e18",
          "level": "ortacha",
          "title": "insert o‘rta",
          "task": "«a» nomli o‘zgaruvchiga [1, 3] qiymatini bering. «a» o‘zgaruvchisiga insert(1, 2) qiling. «a» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 2]\na.insert(2, 3)\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l8-e19",
          "level": "ortacha",
          "title": "remove first",
          "task": "«a» nomli o‘zgaruvchiga [2, 1, 2] qiymatini bering. «a» o‘zgaruvchisiga remove(2) qiling. «a» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [\"a\"]\na.extend([\"b\", \"c\"])\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2]"
            }
          ]
        },
        {
          "id": "l8-e20",
          "level": "ortacha",
          "title": "comprehension",
          "task": "list comprehension ifodasi natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print([x * 10 for x in [1, 2, 3]])",
          "checks": [
            {
              "type": "stdout",
              "equals": "[10, 20, 30]"
            }
          ]
        },
        {
          "id": "l8-e21",
          "level": "qiyin",
          "title": "Teskari sort",
          "task": "«a» nomli o‘zgaruvchiga [1, 2, 3, 4] qiymatini bering. «juft» nomli o‘zgaruvchiga list(filter(lambda, a) natijasini list qiling) qiling qiymatini bering. list(map(lambda, juft) natijasini list qiling) qiling va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 2, 3]\na.sort(reverse=True)\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[4, 16]"
            }
          ]
        },
        {
          "id": "l8-e22",
          "level": "qiyin",
          "title": "filter katta",
          "task": "«a» nomli o‘zgaruvchiga [5, 2, 8, 1] qiymatini bering. «a» o‘zgaruvchisiga sort() qilib tartiblang. «a» o‘zgaruvchisiga pop() qiling. «a» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [3, 12, 7, 20]\nprint(list(filter(lambda x: x > 10, a)))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 5]"
            }
          ]
        },
        {
          "id": "l8-e23",
          "level": "qiyin",
          "title": "extend+sort",
          "task": "«a» nomli o‘zgaruvchiga ['b'] qiymatini bering. «a» o‘zgaruvchisiga extend(['a', 'c']) qiling. «a» o‘zgaruvchisiga sort() qilib tartiblang. «a» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 2]\nprint(list(map(str, a)))",
          "checks": [
            {
              "type": "stdout",
              "equals": "['a', 'b', 'c']"
            }
          ]
        },
        {
          "id": "l8-e24",
          "level": "qiyin",
          "title": "map len",
          "task": "list(map(len, ['ali', 'vali']) natijasini list qiling) qiling va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [3, 1, 2]\na.sort()\na.append(4)\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[3, 4]"
            }
          ]
        },
        {
          "id": "l8-e25",
          "level": "qiyin",
          "title": "Kesmani o‘chirish",
          "task": "list(filter(lambda, ['a', 'bb', 'c']) natijasini list qiling) qiling va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [0, 1, 2, 3]\ndel a[1:3]\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "['bb']"
            }
          ]
        },
        {
          "id": "l8-e26",
          "level": "qiyin",
          "title": "index c",
          "task": "list comprehension ifodasi natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [\"a\", \"b\", \"c\"]\nprint(a.index(\"c\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[0, 2, 4]"
            }
          ]
        },
        {
          "id": "l8-e27",
          "level": "qiyin",
          "title": "map va filter",
          "task": "«a» nomli o‘zgaruvchiga [1, 2, 3, 4] qiymatini bering. del a[1] qiling. «a» o‘zgaruvchisiga append(9) qiling. «a» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 2, 3, 4]\njuft = list(filter(lambda x: x % 2 == 0, a))\nprint(list(map(lambda x: x * x, juft)))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 3, 4, 9]"
            }
          ]
        },
        {
          "id": "l8-e28",
          "level": "qiyin",
          "title": "sorted key",
          "task": "['bb', 'a', 'ccc'] ni sorted bilan o‘sish tartibida joylashtiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(sorted([\"bb\", \"a\", \"ccc\"], key=len))",
          "checks": [
            {
              "type": "stdout",
              "equals": "['a', 'bb', 'ccc']"
            }
          ]
        },
        {
          "id": "l8-e29",
          "level": "qiyin",
          "title": "count va remove",
          "task": "[3, 1, 2, 1, 3] dan set yasang (takrorlar yo‘qoladi) ni sorted bilan o‘sish tartibida joylashtiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 1, 1]\na.remove(1)\nprint(a.count(1))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l8-e30",
          "level": "qiyin",
          "title": "zip g‘oya",
          "task": "[x * 10 for x in [1, 2, 3]] list comprehension ni hisoblab print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print([x * 10 for x in [1, 2, 3]])",
          "checks": [
            {
              "type": "stdout",
              "equals": "[4, 6]"
            }
          ]
        }
      ],
      "review": [
        {
          "term": "insert",
          "meaning": "Berilgan indeksga qo‘yish"
        },
        {
          "term": "remove",
          "meaning": "Qiymat bo‘yicha o‘chirish"
        },
        {
          "term": "pop",
          "meaning": "Indeksdan olib tashlash (qiymat qaytadi)"
        },
        {
          "term": "sort / reverse",
          "meaning": "Tartiblash"
        },
        {
          "term": "index / count",
          "meaning": "Joyini topish / necha marta"
        },
        {
          "term": "clear / del",
          "meaning": "Tozalash / o‘chirish"
        },
        {
          "term": "map",
          "meaning": "Har elementga amal"
        },
        {
          "term": "filter",
          "meaning": "Shartga moslarini ajratish"
        },
        {
          "term": "lambda",
          "meaning": "Qisqa ismsiz funksiya"
        }
      ]
    },
    {
      "id": 9,
      "title": "Tuple va set",
      "subtitle": "O‘zgarmas ketma-ketlik (tuple) va unikal to‘plam (set) + metodlar.",
      "teach": "\n<div class=\"card\">\n  <h3>Tuple — o‘zgarmas ketma-ketlik</h3>\n  <p>Tuple — o‘zgarmas ketma-ketlik (indeks bor, lekin append/o‘zgartirish yo‘q). Set — unikal elementlar to‘plami; takrorlar yo‘qoladi, qidiruv tez. Quyida yaratish, metodlar va to‘plam amallari (union, intersection…) tushuntiriladi.</p>\n\n  <h4>1) Yaratish va indeks</h4>\n  <p class=\"teach-explain\">tuple yumaloq qavs bilan yaratiladi: (1, 2, 3). Tartibli, lekin o‘zgarmas (immutable) — elementni o‘zgartirib bo‘lmaydi. Indeks list kabi ishlaydi: t[0].</p>\n  <div class=\"code-wrap\"><pre class=\"code\">t = (10, 20, 30)\nbirinci = t[0]\nprint(birinci)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">10</code></div></div>\n\n  <h4>2) len — uzunlik</h4>\n  <p class=\"teach-explain\">len(s) matndagi belgilarni (harf, raqam, bo‘sh joy) sanaydi. Bo‘sh matn uzunligi 0. Tekshirish, cheklash va sikllarda uzunlikni bilish muhim.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">t = (1, 2, 3, 4)\nprint(len(t))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">4</code></div></div>\n\n  <h4>3) count — necha marta</h4>\n  <p class=\"teach-explain\">count(x) qiymat necha marta uchrashini sanaydi. Masalan (1, 2, 1).count(1) → 2. Tuple va list da bir xil ishlaydi; takrorlar statistikasi uchun qulay. Topilmasa 0 qaytaradi (xato bermaydi).</p>\n  <div class=\"code-wrap\"><pre class=\"code\">t = (1, 2, 1, 1)\nnechta = t.count(1)\nprint(nechta)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">3</code></div></div>\n\n  <h4>4) index — qayerda</h4>\n  <p class=\"teach-explain\">index(x) qiymatning birinchi uchragan indeksini qaytaradi. Masalan (10, 20, 30).index(20) → 1. Qiymat bo‘lmasa ValueError chiqadi — avval in bilan tekshirish mumkin. Qidiruv va joylashuvni bilish uchun ishlatiladi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">t = (4, 5, 6)\njoy = t.index(5)\nprint(joy)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">1</code></div></div>\n\n  <h4>5) Bitta elementli tuple</h4>\n  <p class=\"teach-explain\">Bitta elementli tuple uchun vergul shart: (5,). (5) oddiy qavs ichidagi son — tuple emas, shunchaki 5. Bu kichik, lekin boshlang‘ichda tez-tez chalkashadigan farq. Tekshirish: type((5,)) → tuple.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">t = (5,)\nprint(t)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">(5,)</code></div></div>\n\n  <h4>6) list → tuple</h4>\n  <p class=\"teach-explain\">tuple(list) listni o‘zgarmas tuple ga aylantiradi. Himoyalangan ma’lumot yoki lug‘at kaliti sifatida ishlatish uchun. Qarama-qarshi: list(tuple).</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = [1, 2]\nt = tuple(a)\nprint(t)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">(1, 2)</code></div></div>\n\n  <h4>7) + ulash</h4>\n  <p class=\"teach-explain\">Ikki tuple ni + bilan ulasangiz yangi tuple hosil bo‘ladi. Asl tuple lar o‘zgarmaydi (immutable). List dagi + ga o‘xshash g‘oya.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = (1, 2)\nb = (3,)\nnatija = a + b\nprint(natija)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">(1, 2, 3)</code></div></div>\n\n  <h4>8) * takrorlash</h4>\n  <p class=\"teach-explain\">(1, 2) * 2 → (1, 2, 1, 2). Tuple ni takrorlab yangisini yasaydi. Boshlang‘ich naqsh yaratishda foydali.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">t = (0,) * 3\nprint(t)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">(0, 0, 0)</code></div></div>\n\n  <h4>9) in — bor-yo‘q</h4>\n  <p class=\"teach-explain\">x in to‘plam — element bormi. Tuple, list, set, matn — ko‘p joyda ishlaydi. Shartlarda eng qulay tekshiruv.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">t = (1, 2, 3)\nprint(2 in t)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">True</code></div></div>\n\n  <h4>10) Unpack — ochib olish</h4>\n  <p class=\"teach-explain\">a, b = (1, 2) — tuple elementlarini alohida o‘zgaruvchilarga ochadi. Funksiya bir necha qiymat qaytarganda qulay. Elementlar soni mos kelishi kerak.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a, b = (3, 4)\nprint(a + b)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">7</code></div></div>\n\n  <h3>Set — takrorlanmas to‘plam</h3>\n  <p>Jingalak qavs: <code>{1, 2, 3}</code>. Tartib kafolatlanmaydi. Indeks yo‘q.</p>\n\n  <h4>11) Yaratish (takror yo‘qoladi)</h4>\n  <p class=\"teach-explain\">set — unikal elementlar to‘plami: {1, 2, 2} → {1, 2}. Tartib kafolatlanmaydi. Takrorlarni yo‘qotish va tez qidiruv uchun.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">s = {1, 2, 2, 3}\nprint(len(s))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">3</code></div></div>\n\n  <h4>12) add — qo‘shish</h4>\n  <p class=\"teach-explain\">add(x) set ga element qo‘shadi. Allaqachon bo‘lsa — o‘zgarishsiz. append emas, add — set uchun.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">s = {1, 2}\ns.add(3)\nprint(sorted(s))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[1, 2, 3]</code></div></div>\n\n  <h4>13) in set</h4>\n  <p class=\"teach-explain\">x in set — element bormi, odatda juda tez. Katta to‘plamlarda list dagi in dan samaraliroq. Filtrlash va tekshiruv uchun.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">s = {1, 2}\nprint(1 in s)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">True</code></div></div>\n\n  <h4>14) discard — o‘chirish (xatosiz)</h4>\n  <p class=\"teach-explain\">discard(x) elementni o‘chiradi; yo‘q bo‘lsa jim turadi (xato yo‘q). remove dan farqi shu. Ishonchsiz o‘chirish uchun xavfsizroq.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">s = {1, 2, 3}\ns.discard(2)\nprint(sorted(s))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[1, 3]</code></div></div>\n\n  <h4>15) remove — o‘chirish (yo‘q bo‘lsa xato)</h4>\n  <p class=\"teach-explain\">remove(x) elementni o‘chiradi; yo‘q bo‘lsa KeyError. Element majburiy mavjud deb hisoblaganda. discard xatosiz alternativ.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">s = {1, 2}\ns.remove(1)\nprint(sorted(s))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[2]</code></div></div>\n\n  <h4>16) clear — tozalash</h4>\n  <p class=\"teach-explain\">clear() set dagi barcha elementlarni o‘chiradi. Bo‘sh to‘plam qoladi. Qayta to‘ldirish oldidan.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">s = {1, 2}\ns.clear()\nprint(s)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">set()</code></div></div>\n\n  <h4>17) union / | — birlashtirish</h4>\n  <p class=\"teach-explain\">union yoki | ikki set ni birlashtiradi (takrorsiz). Yangi set qaytaradi. «Ikkalasining hammasi».</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = {1, 2}\nb = {2, 3}\nbirlash = a | b\nprint(sorted(birlash))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[1, 2, 3]</code></div></div>\n\n  <h4>18) intersection / &amp; — kesishma (umumiy)</h4>\n  <p class=\"teach-explain\">intersection yoki & faqat umumiy elementlarni qoldiradi. Ikki guruhning kesishmasi. «Ikkalasida ham bor».</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = {1, 2, 3}\nb = {2, 3, 4}\nkesish = a & b\nprint(sorted(kesish))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[2, 3]</code></div></div>\n\n  <h4>19) difference / - — farq (faqat chapda)</h4>\n  <p class=\"teach-explain\">difference yoki - chapda bor, o‘ngda yo‘q elementlar. Farq to‘plami. «Faqat birinchisida».</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = {1, 2, 3}\nb = {2}\nfarq = a - b\nprint(sorted(farq))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[1, 3]</code></div></div>\n\n  <h4>20) symmetric_difference / ^ — simmetrik farq</h4>\n  <p class=\"teach-explain\">^ yoki symmetric_difference — faqat bittasida bo‘lganlar (umumiy emas). Ikki tomonlama farq. «Aynan bittasida».</p>\n  <div class=\"code-wrap\"><pre class=\"code\">a = {1, 2}\nb = {2, 3}\nsim = a ^ b\nprint(sorted(sim))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[1, 3]</code></div></div>\n\n  <h4>21) issubset — ichida joylashganmi</h4>\n  <p class=\"teach-explain\">a.issubset(b) — a ning barcha elementi b da bormi. Kichik to‘plam katta ichidami. True/False qaytaradi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">kichik = {1, 2}\nkatta = {1, 2, 3}\nprint(kichik.issubset(katta))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">True</code></div></div>\n\n  <h4>22) issuperset — qamrab oladimi</h4>\n  <p class=\"teach-explain\">a.issuperset(b) — a b ni to‘liq qamrab oladimi. issubset ning jufti. Huquq, ruxsat to‘plamlarida ishlatiladi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">katta = {1, 2, 3}\nkichik = {1, 2}\nprint(katta.issuperset(kichik))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">True</code></div></div>\n\n  <h4>23) update — ko‘p element qo‘shish</h4>\n  <p class=\"teach-explain\">update(...) set ga ko‘p elementni bir yo‘la qo‘shadi. add bitta, update ko‘p. List yoki boshqa set dan to‘ldirish.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">s = {1}\ns.update([2, 3])\nprint(sorted(s))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[1, 2, 3]</code></div></div>\n\n  <h4>24) copy — nusxa (asl o‘zgarmaydi)</h4>\n  <p class=\"teach-explain\">copy() set ning sayoz nusxasini beradi. Nusxani o‘zgartirsangiz, asl saqlanadi. Xavfsiz tahrir uchun.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">s = {1, 2}\nt = s.copy()\nt.add(3)\nprint(sorted(s))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[1, 2]</code></div></div>\n\n  <h4>25) list → set (unikal)</h4>\n  <p class=\"teach-explain\">set(list) takrorlarni olib tashlaydi. Unikal qiymatlar ro‘yxatini olishning tez usuli. Tartib saqlanmasligi mumkin.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">sozlar = [\"a\", \"b\", \"a\"]\nunikal = set(sozlar)\nprint(len(unikal))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">2</code></div></div>\n\n  <div class=\"callout\"><strong>Qachon nima?</strong> List — tartib + o‘zgaradi. Tuple — o‘zgarmas ma’lumot. Set — unikal elementlar, tezkor «bor-yo‘q», union/intersection/difference.</div>\n</div>\n",
      "examples": [
        {
          "title": "Tuple yaratish va indeks",
          "code": "t = (10, 20, 30)\nbirinci = t[0]\nprint(birinci)",
          "why": "10 — birinchi element."
        },
        {
          "title": "len (tuple)",
          "code": "t = (1, 2, 3, 4)\nuzunlik = len(t)\nprint(uzunlik)",
          "why": "4"
        },
        {
          "title": "count",
          "code": "t = (1, 2, 1, 1)\nnechta = t.count(1)\nprint(nechta)",
          "why": "3 — bir necha marta uchraydi."
        },
        {
          "title": "index",
          "code": "t = (4, 5, 6)\njoy = t.index(5)\nprint(joy)",
          "why": "1 — 5 shu indeksda."
        },
        {
          "title": "Bitta elementli tuple",
          "code": "t = (5,)\nprint(t)",
          "why": "(5,) — vergul shart, aks holda oddiy son."
        },
        {
          "title": "list → tuple",
          "code": "a = [1, 2]\nt = tuple(a)\nprint(t)",
          "why": "(1, 2)"
        },
        {
          "title": "tuple + ulash",
          "code": "a = (1, 2)\nb = (3,)\nnatija = a + b\nprint(natija)",
          "why": "(1, 2, 3) — yangi tuple."
        },
        {
          "title": "tuple * takror",
          "code": "t = (0,) * 3\nprint(t)",
          "why": "(0, 0, 0)"
        },
        {
          "title": "in (tuple)",
          "code": "t = (1, 2, 3)\nbor = 2 in t\nprint(bor)",
          "why": "True"
        },
        {
          "title": "Unpack",
          "code": "a, b = (3, 4)\nyigindi = a + b\nprint(yigindi)",
          "why": "7"
        },
        {
          "title": "Set yaratish",
          "code": "s = {1, 2, 2, 3}\nprint(len(s))",
          "why": "3 — takror 2 bir marta qoladi."
        },
        {
          "title": "add",
          "code": "s = {1, 2}\ns.add(3)\nprint(sorted(s))",
          "why": "[1, 2, 3]"
        },
        {
          "title": "in (set)",
          "code": "s = {1, 2}\nprint(1 in s)",
          "why": "True — tezkor tekshiruv."
        },
        {
          "title": "discard",
          "code": "s = {1, 2, 3}\ns.discard(2)\nprint(sorted(s))",
          "why": "[1, 3] — yo‘q element bo‘lsa ham xato bermaydi."
        },
        {
          "title": "remove",
          "code": "s = {1, 2}\ns.remove(1)\nprint(sorted(s))",
          "why": "[2] — element yo‘q bo‘lsa xato."
        },
        {
          "title": "clear",
          "code": "s = {1, 2}\ns.clear()\nprint(s)",
          "why": "set() — bo‘sh to‘plam."
        },
        {
          "title": "union (|)",
          "code": "a = {1, 2}\nb = {2, 3}\nbirlash = a | b\nprint(sorted(birlash))",
          "why": "[1, 2, 3] — hammasi, takrorsiz."
        },
        {
          "title": "intersection (&)",
          "code": "a = {1, 2, 3}\nb = {2, 3, 4}\nkesish = a & b\nprint(sorted(kesish))",
          "why": "[2, 3] — faqat umumiy."
        },
        {
          "title": "difference (-)",
          "code": "a = {1, 2, 3}\nb = {2}\nfarq = a - b\nprint(sorted(farq))",
          "why": "[1, 3] — a da bor, b da yo‘q."
        },
        {
          "title": "symmetric (^)",
          "code": "a = {1, 2}\nb = {2, 3}\nsim = a ^ b\nprint(sorted(sim))",
          "why": "[1, 3] — umumiy emaslar."
        },
        {
          "title": "issubset",
          "code": "kichik = {1, 2}\nkatta = {1, 2, 3}\nprint(kichik.issubset(katta))",
          "why": "True — kichik kattaning ichida."
        },
        {
          "title": "issuperset",
          "code": "katta = {1, 2, 3}\nkichik = {1, 2}\nprint(katta.issuperset(kichik))",
          "why": "True — katta kichikni qamrab oladi."
        },
        {
          "title": "update",
          "code": "s = {1}\ns.update([2, 3])\nprint(sorted(s))",
          "why": "[1, 2, 3]"
        },
        {
          "title": "copy",
          "code": "s = {1, 2}\nt = s.copy()\nt.add(3)\nprint(sorted(s))",
          "why": "[1, 2] — asl s o‘zgarmadi."
        },
        {
          "title": "list → set (unikal)",
          "code": "sozlar = ['a', 'b', 'a', 'c']\nunikal = set(sozlar)\nprint(len(unikal))",
          "why": "3 — takrorlar yo‘qoladi."
        }
      ],
      "exercises": [
        {
          "id": "l9-e01",
          "level": "oson",
          "title": "tuple yaratish",
          "task": "«t» nomli o‘zgaruvchiga (1, 2, 3) qiymatini bering. «t» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "t = (1, 2, 3)\nprint(t)",
          "checks": [
            {
              "type": "stdout",
              "equals": "(1, 2, 3)"
            }
          ]
        },
        {
          "id": "l9-e02",
          "level": "oson",
          "title": "indeks",
          "task": "«t» nomli o‘zgaruvchiga (10, 20, 30) qiymatini bering. t[0] natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "t = (7, 8, 9)\nprint(t[0])",
          "checks": [
            {
              "type": "stdout",
              "equals": "10"
            }
          ]
        },
        {
          "id": "l9-e03",
          "level": "oson",
          "title": "len",
          "task": "(1, 2, 3, 4) uzunligini (len) hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(len((1, 2, 3, 4)))",
          "checks": [
            {
              "type": "stdout",
              "equals": "4"
            }
          ]
        },
        {
          "id": "l9-e04",
          "level": "oson",
          "title": "set yaratish",
          "task": "«s» nomli o‘zgaruvchiga {1, 2, 3} qiymatini bering. s ni sorted bilan o‘sish tartibida joylashtiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "t = (1, 2, 1)\nprint(t.count(1))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l9-e05",
          "level": "oson",
          "title": "add",
          "task": "«s» nomli o‘zgaruvchiga {1, 2} qiymatini bering. «s» o‘zgaruvchisiga add(3) qiling. s ni sorted bilan o‘sish tartibida joylashtiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "t = (4, 5, 6)\nprint(t.index(5))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l9-e06",
          "level": "oson",
          "title": "in tuple",
          "task": "2 in (1, 2, 3) natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(2 in (1, 2, 3))",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l9-e07",
          "level": "oson",
          "title": "count",
          "task": "«t» nomli o‘zgaruvchiga (1, 2, 1) qiymatini bering. «t» o‘zgaruvchisiga 1 necha marta ekanini count bilan toping va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = {1, 2}\ns.add(3)\nprint(sorted(s))",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l9-e08",
          "level": "oson",
          "title": "index",
          "task": "1 in {1, 2} ifodasini hisoblab print qiling (True/False).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(1 in {1, 2})",
          "checks": [
            {
              "type": "stdout",
              "equals": "1"
            }
          ]
        },
        {
          "id": "l9-e09",
          "level": "oson",
          "title": "list→tuple",
          "task": "tuple([1, 2]) qiling va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(tuple([1, 2]))",
          "checks": [
            {
              "type": "stdout",
              "equals": "(1, 2)"
            }
          ]
        },
        {
          "id": "l9-e10",
          "level": "oson",
          "title": "list dan tuple",
          "task": "tuple([1, 2]) ni hisoblab print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(tuple([1, 2]))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l9-e11",
          "level": "ortacha",
          "title": "Tuple ulash",
          "task": "(1, 2) + (3,) ni hisoblab print qiling (tuple qo‘shish).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print((1, 2) + (3,))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l9-e12",
          "level": "ortacha",
          "title": "Tuple takror",
          "task": "(0,) * 3 ni hisoblab print qiling (tuple takrorlash).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print((0,) * 3)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[2, 3]"
            }
          ]
        },
        {
          "id": "l9-e13",
          "level": "ortacha",
          "title": "difference",
          "task": "{1, 2, 3} - {2} ni sorted bilan o‘sish tartibida joylashtiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(sorted({1, 2, 3} - {2}))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 3]"
            }
          ]
        },
        {
          "id": "l9-e14",
          "level": "ortacha",
          "title": "tuple +",
          "task": "(1, 2) + (3,) natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print((1, 2) + (3,))",
          "checks": [
            {
              "type": "stdout",
              "equals": "(1, 2, 3)"
            }
          ]
        },
        {
          "id": "l9-e15",
          "level": "ortacha",
          "title": "tuple *",
          "task": "{1, 2} va {2, 3} to‘plamlarini | (union) bilan birlashtiring, sorted qilib print qiling.",
          "hint": "a | b yoki a.union(b); natijani sorted(...).",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(sorted({1, 2} | {2, 3}))",
          "checks": [
            {
              "type": "stdout",
              "equals": "(0, 0, 0)"
            }
          ]
        },
        {
          "id": "l9-e16",
          "level": "ortacha",
          "title": "issubset",
          "task": "{1, 2, 3} va {2, 3, 4} kesishmasini & (intersection) bilan toping, sorted qilib print qiling.",
          "hint": "a & b yoki a.intersection(b).",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(sorted({1, 2, 3} & {2, 3, 4}))",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l9-e17",
          "level": "ortacha",
          "title": "issuperset",
          "task": "{1, 2, 3} dan {2} ni ayiring (difference / -), sorted qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(sorted({1, 2, 3} - {2}))",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l9-e18",
          "level": "ortacha",
          "title": "discard",
          "task": "set([1, 1, 2, 2, 3]) yarating (takrorlar yo‘qoladi), sorted qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(sorted(set([1, 1, 2, 2, 3])))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 3]"
            }
          ]
        },
        {
          "id": "l9-e19",
          "level": "ortacha",
          "title": "for tuple",
          "task": "{1, 2}.issubset({1, 2, 3}) natijasini print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print({1, 2}.issubset({1, 2, 3}))",
          "checks": [
            {
              "type": "stdout",
              "equals": "10\n20"
            }
          ]
        },
        {
          "id": "l9-e20",
          "level": "ortacha",
          "title": "len set",
          "task": "{1, 2, 3} uzunligini (len) hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(len({1, 2, 2, 3}))",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l9-e21",
          "level": "qiyin",
          "title": "ichma-ich",
          "task": "{1, 2, 3}.issuperset({1, 2}) natijasini print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print({1, 2, 3}.issuperset({1, 2}))",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l9-e22",
          "level": "qiyin",
          "title": "symdiff",
          "task": "{1, 2, 3} ^ {2, 3, 4} ni sorted bilan o‘sish tartibida joylashtiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(sorted({1, 2, 3} ^ {2, 3, 4}))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 4]"
            }
          ]
        },
        {
          "id": "l9-e23",
          "level": "qiyin",
          "title": "unikal so‘zlar",
          "task": "'a a b c b' uchun split() qilib so‘zlarga bo‘ling natijasidan set yasang (takrorlar yo‘qoladi) ni sorted bilan o‘sish tartibida joylashtiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(sorted(set(\"a a b c b\".split())))",
          "checks": [
            {
              "type": "stdout",
              "equals": "['a', 'b', 'c']"
            }
          ]
        },
        {
          "id": "l9-e24",
          "level": "qiyin",
          "title": "kesishma if",
          "task": "«A» nomli o‘zgaruvchiga {1, 2, 3} qiymatini bering. «B» nomli o‘zgaruvchiga {3, 4} qiymatini bering. Agar A & B bo‘lsa, a & B ni sorted bilan o‘sish tartibida «joylashtiring» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "A = {1, 2, 3}\nB = {3, 4}\nif A & B:\n    print(sorted(A & B))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[3]"
            }
          ]
        },
        {
          "id": "l9-e25",
          "level": "qiyin",
          "title": "tuple unpack",
          "task": "«a», «b» o‘zgaruvchilariga (5, 7) ni ochib (unpack) bering. a + b natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a, b = (5, 7)\nprint(a + b)",
          "checks": [
            {
              "type": "stdout",
              "equals": "12"
            }
          ]
        },
        {
          "id": "l9-e26",
          "level": "qiyin",
          "title": "list→set filter",
          "task": "2 elementi (1, 2, 3) tupleida bormi — in operatori bilan tekshirib print qiling (True yoki False).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(2 in (1, 2, 3))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[3, 4]"
            }
          ]
        },
        {
          "id": "l9-e27",
          "level": "qiyin",
          "title": "count loop",
          "task": "len({1, 2, 2, 3}) ni print qiling (set da takror yo‘qoladi).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(len({1, 2, 2, 3}))",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l9-e28",
          "level": "qiyin",
          "title": "union 3",
          "task": "({1} | {2}) | {3} ni sorted bilan o‘sish tartibida joylashtiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(sorted({1} | {2} | {3}))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l9-e29",
          "level": "qiyin",
          "title": "tuple slice",
          "task": "Ichma-ich tuple: ((1, 2), (3, 4)). Indeks [1][0] dagi elementni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(((1, 2), (3, 4))[1][0])",
          "checks": [
            {
              "type": "stdout",
              "equals": "(1, 2, 3)"
            }
          ]
        },
        {
          "id": "l9-e30",
          "level": "qiyin",
          "title": "farq+yigindi",
          "task": "{1, 2, 3, 4} - {2, 4} yig‘indisini (sum) hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(sum({1, 2, 3, 4} - {2, 4}))",
          "checks": [
            {
              "type": "stdout",
              "equals": "4"
            }
          ]
        }
      ],
      "review": [
        {
          "term": "tuple ( )",
          "meaning": "O‘zgarmas ketma-ketlik"
        },
        {
          "term": "count / index",
          "meaning": "Sanash / indeks (tuple)"
        },
        {
          "term": "tuple + / *",
          "meaning": "Ulash / takror (yangi tuple)"
        },
        {
          "term": "tuple(list)",
          "meaning": "Listdan tuple"
        },
        {
          "term": "set { }",
          "meaning": "Takrorlanmas to‘plam"
        },
        {
          "term": "add / remove / discard",
          "meaning": "Qo‘shish / o‘chirish"
        },
        {
          "term": "union |",
          "meaning": "Birlashtirish"
        },
        {
          "term": "intersection &",
          "meaning": "Kesishma (umumiy)"
        },
        {
          "term": "difference -",
          "meaning": "Farq (faqat chapda)"
        },
        {
          "term": "symmetric ^",
          "meaning": "Simmetrik farq"
        },
        {
          "term": "issubset / issuperset",
          "meaning": "Ichida / qamrab oladi"
        },
        {
          "term": "update / copy",
          "meaning": "Ko‘p qo‘shish / nusxa"
        }
      ]
    },
    {
      "id": 10,
      "title": "Funksiyalar asosi (def)",
      "subtitle": "Argumentsiz / argumentli, return, default qiymat.",
      "teach": "\n<div class=\"card\">\n  <h3>Funksiya nima?</h3>\n  <p>Funksiya (def) — qayta chaqiriladigan kod bloki. Parametr — qabul qiluvchi nom, argument — chaqiruvdagi qiymat. print ekranga chiqaradi, return esa natijani dasturga qaytaradi. Default qiymat argument berilmasa ishlaydi. Quyida har biri alohida tushuntiriladi.</p>\n\n  <h4>1) Argumentsiz funksiya</h4>\n  <p class=\"teach-explain\">Funksiya — bir necha marta chaqirib bo‘ladigan kod bloki. def salom(): deb e’lon qilasiz; ichiga kerakli buyruqlarni yozasiz. Funksiya o‘zi ishlamaydi — salom() deb chaqirishingiz kerak. Argumentsiz demak qavs ichida parametr yo‘q; har chaqiruvda bir xil ish bajariladi. Takroriy print yoki bir xil mantiqni bitta joyga jamlaydi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def salom():\n    print(\"Salom\")\n\nsalom()</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">Salom</code></div></div>\n\n  <h4>2) Argumentli funksiya</h4>\n  <p class=\"teach-explain\">Ko‘pincha funksiyaga tashqaridan qiymat berish kerak. def kv(x): dagi x — parametr (qabul qiluvchi nom). Chaqiruvda kv(6) — 6 argument. Ichida x*x hisoblanadi; har xil son bilan bir xil formulani qayta ishlatasiz. Bu kodni qisqartiradi va xatolarni kamaytiradi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def ikki_barobar(n):\n    return n * 2\n\nprint(ikki_barobar(9))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">18</code></div></div>\n\n  <h4>3) return — qiymat qaytarish</h4>\n  <p class=\"teach-explain\">return funksiya natijasini chaqirgan joyga qaytaradi. print faqat ekranga ko‘rsatadi; return esa natijani o‘zgaruvchiga yozish yoki boshqa hisobda ishlatish imkonini beradi. Masalan: natija = kv(4) — avval funksiya 16 qaytaradi, keyin print(natija). Hisob funksiyalarida odatda return ishlatiladi, print emas.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def kv(x):\n    return x * x\n\nnatija = kv(4)\nprint(natija)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">16</code></div></div>\n\n  <h4>4) Bir necha parametr</h4>\n  <p class=\"teach-explain\">def qoshing(a, b): ikki qiymat qabul qiladi. Chaqiruvda tartib muhim: qoshing(2, 10) da a=2, b=10. Bir necha kirishli formulalar (yig‘indi, ayirma, max) shunday yoziladi. Parametrlar vergul bilan ajratiladi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def qoshing(a, b):\n    return a + b\n\nprint(qoshing(2, 10))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">12</code></div></div>\n\n  <h4>5) Default (standart) qiymat</h4>\n  <p class=\"teach-explain\">Ba’zi parametrlarni ixtiyoriy qilish mumkin: def salom(ism=\"Mehmon\"). Chaqiruvda ism berilmasa, \"Mehmon\" ishlatiladi; berilsa — yangi qiymat. salom() va salom(\"Ali\") — ikkala chaqiruv ham to‘g‘ri. Bu chaqiruvni soddalashtiradi va moslashuvchan qiladi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def salom(ism=\"Mehmon\"):\n    print(\"Salom, \" + ism)\n\nsalom()\nsalom(\"Ali\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">Salom, Mehmon\nSalom, Ali\n</pre></div></div>\n\n  <h4>6) Default bilan hisob</h4>\n  <p class=\"teach-explain\">Hisobda ham default qulay: def daraja(x, n=2) — n berilmasa kvadrat (x**2). daraja(5) → 25, daraja(2, 3) → 8. Bir funksiya bilan turli darajalarni hisoblaysiz. Default parametrlar odatda o‘ng tomonda yoziladi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def daraja(x, n=2):\n    return x ** n\n\nprint(daraja(5))\nprint(daraja(2, 3))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">25\n8\n</pre></div></div>\n\n  <h4>7) Funksiya ichida if</h4>\n  <p class=\"teach-explain\">Funksiya ichida if/else yozib, kirishga qarab turli natija qaytarishingiz mumkin. Masalan yoshga qarab True/False, yoki son nolmi-yo‘qmi. Mantiq funksiya ichida yashirinadi — tashqarida faqat chaqiruv qoladi. return ni har bir tarmoqda yozish mumkin.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def tekshir(n):\n    if n != 0:\n        return \"bor\"\n    return \"nol\"\n\nprint(tekshir(5))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">bor</code></div></div>\n\n  <h4>8) Parametr vs argument</h4>\n  <p class=\"teach-explain\">Parametr — def qatoridagi nom (qabul qiluvchi). Argument — chaqiruvda berilgan haqiqiy qiymat. def f(x): dagi x parametr; f(10) dagi 10 argument. Boshlang‘ichda chalkashtirish oson — shu farqni eslab qoling.</p>\n  <pre class=\"code\">def ko‘rsat(x):\n    print(x)\n\nko‘rsat(4)</pre>\n\n  <h4>9) return dan keyin kod ishlamaydi</h4>\n  <p class=\"teach-explain\">return bajarilishi bilanoq funksiya tugaydi — undan keyingi qatorlar o‘sha tarmoqda ishlamaydi. Shuning uchun return odatda oxirida yoki if tarmog‘ining oxirida bo‘ladi. Keraksiz kodni return dan keyin yozmang — u hech qachon ishlamaydi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def misol():\n    return 1\n    print(\"bu chiqmaydi\")\n\nprint(misol())</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">1</code></div></div>\n\n  <h4>10) Ro‘yxat bilan ishlash</h4>\n  <p class=\"teach-explain\">Funksiyaga ro‘yxat (list) ham uzatish mumkin: def oxirgi(a): return a[-1]. Ichida indeks, sikl yoki sum ishlatasiz; tashqarida qisqa chaqiruv qoladi. Ma’lumotni qayta ishlashni qayta ishlatiladigan qilib beradi. Natijani odatda return qiling — keyin tekshirish oson.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def oxirgi(a):\n    return a[-1]\n\nprint(oxirgi([5, 6, 7]))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">7</code></div></div>\n\n  <div class=\"callout\"><strong>Qoida:</strong> Funksiyani avval <code>def</code> bilan yozing, keyin chaqiring. <code>return</code> — qiymat; <code>print</code> — ekran.</div>\n</div>\n",
      "examples": [
        {
          "title": "Argumentsiz",
          "code": "def salom():\n    print(\"Salom\")\nsalom()",
          "why": "Salom"
        },
        {
          "title": "Argument",
          "code": "def ikki_barobar(n):\n    return n * 2\nprint(ikki_barobar(9))",
          "why": "18"
        },
        {
          "title": "return",
          "code": "def kv(x):\n    return x * x\nnatija = kv(4)\nprint(natija)",
          "why": "16 — avval hisob, keyin print."
        },
        {
          "title": "Ikki parametr",
          "code": "def qoshing(a, b):\n    return a + b\nprint(qoshing(2, 10))",
          "why": "12"
        },
        {
          "title": "Default ism",
          "code": "def salom(ism=\"Mehmon\"):\n    print(\"Salom, \" + ism)\nsalom()\nsalom(\"Ali\")",
          "why": "Mehmon keyin Ali"
        },
        {
          "title": "Default daraja",
          "code": "def daraja(x, n=2):\n    return x ** n\nprint(daraja(5))\nprint(daraja(2, 3))",
          "why": "25 keyin 8"
        },
        {
          "title": "if ichida",
          "code": "def tekshir(n):\n    if n != 0:\n        return \"bor\"\n    return \"nol\"\nprint(tekshir(5))",
          "why": "bor"
        },
        {
          "title": "Ro‘yxat",
          "code": "def oxirgi(a):\n    return a[-1]\nprint(oxirgi([5, 6, 7]))",
          "why": "7"
        },
        {
          "title": "juftmi",
          "code": "def juftmi(n):\n    return n % 2 == 0\nprint(juftmi(4))",
          "why": "True"
        },
        {
          "title": "max2",
          "code": "def max2(a, b):\n    return a if a > b else b\nprint(max2(3, 11))",
          "why": "11"
        }
      ],
      "exercises": [
        {
          "id": "l10-e01",
          "level": "oson",
          "title": "salom funksiyasi",
          "task": "salom() nomli funksiya yarating: ichida «salom» so‘zini print qilsin. Keyin salom() ni chaqiring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def salom():\n    print('salom')\nsalom()",
          "checks": [
            {
              "type": "code_contains",
              "text": "def"
            },
            {
              "type": "stdout",
              "equals": "salom"
            }
          ]
        },
        {
          "id": "l10-e02",
          "level": "oson",
          "title": "besh",
          "task": "besh() nomli funksiya yarating: u 5 sonini qaytarsin. Tekshiruv: besh() chaqirilganda natija 5 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def besh():\n    return 5",
          "checks": [
            {
              "type": "expr",
              "code": "besh()",
              "equals": 5
            }
          ]
        },
        {
          "id": "l10-e03",
          "level": "oson",
          "title": "kv",
          "task": "kv() nomli funksiya yarating: u berilgan sonning kvadratini (x*x) qaytarsin. Tekshiruv: kv(6) chaqirilganda natija 36 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def kv(x):\n    return x * x",
          "checks": [
            {
              "type": "expr",
              "code": "kv(6)",
              "equals": 36
            }
          ]
        },
        {
          "id": "l10-e04",
          "level": "oson",
          "title": "qoshing",
          "task": "qoshing() nomli funksiya yarating: u ikkita sonni qo‘shib yig‘indisini qaytarsin. Tekshiruv: qoshing(2, 10) chaqirilganda natija 12 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def qoshing(a, b):\n    return a + b",
          "checks": [
            {
              "type": "expr",
              "code": "qoshing(2, 10)",
              "equals": 12
            }
          ]
        },
        {
          "id": "l10-e05",
          "level": "oson",
          "title": "chiqar",
          "task": "chiqar() funksiyasini yozing: ichida 7 ni print qilsin. Keyin chiqar() ni chaqiring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def chiqar():\n    print(7)\nchiqar()",
          "checks": [
            {
              "type": "stdout",
              "equals": "7"
            }
          ]
        },
        {
          "id": "l10-e06",
          "level": "oson",
          "title": "ism",
          "task": "ism() nomli funksiya yarating: u ism matnini qaytarsin. Tekshiruv: ism() chaqirilganda natija 'Omar' bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def ism():\n    return 'Omar'",
          "checks": [
            {
              "type": "expr",
              "code": "ism()",
              "equals": "Omar"
            }
          ]
        },
        {
          "id": "l10-e07",
          "level": "oson",
          "title": "nol",
          "task": "nol() nomli funksiya yarating: u 0 qiymatini qaytarsin. Tekshiruv: nol() chaqirilganda natija 0 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def nol():\n    return 0",
          "checks": [
            {
              "type": "expr",
              "code": "nol()",
              "equals": 0
            }
          ]
        },
        {
          "id": "l10-e08",
          "level": "oson",
          "title": "ikki_barobar",
          "task": "ikki_barobar() nomli funksiya yarating: u sonni 2 ga ko‘paytirib qaytarsin. Tekshiruv: ikki_barobar(9) chaqirilganda natija 18 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def ikki_barobar(n):\n    return n * 2",
          "checks": [
            {
              "type": "expr",
              "code": "ikki_barobar(9)",
              "equals": 18
            }
          ]
        },
        {
          "id": "l10-e09",
          "level": "oson",
          "title": "juftmi",
          "task": "juftmi() nomli funksiya yarating: u son juft bo‘lsa True, aks holda False qaytarsin. Tekshiruv: juftmi(4) chaqirilganda natija True bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def juftmi(n):\n    return n % 2 == 0",
          "checks": [
            {
              "type": "expr",
              "code": "juftmi(4)",
              "equals": true
            }
          ]
        },
        {
          "id": "l10-e10",
          "level": "oson",
          "title": "ayir",
          "task": "ayir() nomli funksiya yarating: u birinchi sondan ikkinchisini ayirib qaytarsin. Tekshiruv: ayir(5, 8) chaqirilganda natija -3 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def ayir(a, b):\n    return a - b",
          "checks": [
            {
              "type": "expr",
              "code": "ayir(5, 8)",
              "equals": -3
            }
          ]
        },
        {
          "id": "l10-e11",
          "level": "ortacha",
          "title": "max2",
          "task": "max2() nomli funksiya yarating: u ikkita sondan kattasini qaytarsin. Tekshiruv: max2(3, 11) chaqirilganda natija 11 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def max2(a, b):\n    return a if a > b else b",
          "checks": [
            {
              "type": "expr",
              "code": "max2(3, 11)",
              "equals": 11
            }
          ]
        },
        {
          "id": "l10-e12",
          "level": "ortacha",
          "title": "len_soz",
          "task": "len_soz() nomli funksiya yarating: u matn uzunligini (len) qaytarsin. Tekshiruv: len_soz('abcd') chaqirilganda natija 4 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def len_soz(s):\n    return len(s)",
          "checks": [
            {
              "type": "expr",
              "code": "len_soz('abcd')",
              "equals": 4
            }
          ]
        },
        {
          "id": "l10-e13",
          "level": "ortacha",
          "title": "print_n",
          "task": "print_n(n) funksiyasini yozing: n ni print qilsin. print_n(4) ni chaqiring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def print_n(n):\n    print(n)\nprint_n(4)",
          "checks": [
            {
              "type": "stdout",
              "equals": "4"
            }
          ]
        },
        {
          "id": "l10-e14",
          "level": "ortacha",
          "title": "yigindi3",
          "task": "yigindi3() nomli funksiya yarating: u uchta son yig‘indisini qaytarsin. Tekshiruv: yigindi3(1, 2, 3) chaqirilganda natija 6 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def yigindi3(a, b, c):\n    return a + b + c",
          "checks": [
            {
              "type": "expr",
              "code": "yigindi3(1, 2, 3)",
              "equals": 6
            }
          ]
        },
        {
          "id": "l10-e15",
          "level": "ortacha",
          "title": "teskarisi",
          "task": "teskarisi() nomli funksiya yarating: u bool qiymatning teskarisini (not) qaytarsin. Tekshiruv: teskarisi(False) chaqirilganda natija True bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def teskarisi(x):\n    return not x",
          "checks": [
            {
              "type": "expr",
              "code": "teskarisi(False)",
              "equals": true
            }
          ]
        },
        {
          "id": "l10-e16",
          "level": "ortacha",
          "title": "salom_ism",
          "task": "salom_ism(ism) funksiyasini yozing: «Salom, » va ismni ulab print qilsin. salom_ism('Ali') ni chaqiring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def salom_ism(ism):\n    print('Salom, ' + ism)\nsalom_ism('Ali')",
          "checks": [
            {
              "type": "stdout",
              "equals": "Salom, Ali"
            }
          ]
        },
        {
          "id": "l10-e17",
          "level": "ortacha",
          "title": "daraja default",
          "task": "daraja() nomli funksiya yarating: u sonni darajaga ko‘tarsin (default daraja=2). def daraja(x, n=2) ko‘rinishida yozing: n berilmasa kvadrat hisoblansin. Ikkinchi parametrga default qiymat bering (masalan n=2), chaqiruvda berilmasa shu ishlasin. Tekshiruv: daraja(5) chaqirilganda natija 25 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def daraja(x, n=2):\n    return x ** n",
          "checks": [
            {
              "type": "expr",
              "code": "daraja(5)",
              "equals": 25
            }
          ]
        },
        {
          "id": "l10-e18",
          "level": "ortacha",
          "title": "daraja 2",
          "task": "daraja() nomli funksiya yarating: u sonni darajaga ko‘tarsin (default daraja=2). Tekshiruv: daraja(2, 3) chaqirilganda natija 8 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def daraja(x, n=2):\n    return x ** n",
          "checks": [
            {
              "type": "expr",
              "code": "daraja(2, 3)",
              "equals": 8
            }
          ]
        },
        {
          "id": "l10-e19",
          "level": "ortacha",
          "title": "yigindi list",
          "task": "yigindi() nomli funksiya yarating: u ro‘yxatdagi sonlar yig‘indisini qaytarsin. Tekshiruv: yigindi([1, 2, 3, 4]) chaqirilganda natija 10 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def yigindi(a):\n    return sum(a)",
          "checks": [
            {
              "type": "expr",
              "code": "yigindi([1, 2, 3, 4])",
              "equals": 10
            }
          ]
        },
        {
          "id": "l10-e20",
          "level": "ortacha",
          "title": "juftlar",
          "task": "oxirgi() nomli funksiya yarating. U ro‘yxatni qabul qilsin va oxirgi elementini return qilsin. Masalan oxirgi([5, 6, 7]) chaqirilganda 7 qaytarsin.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def oxirgi(a):\n    return a[-1]",
          "checks": [
            {
              "type": "expr",
              "code": "juftlar([1, 2, 3, 4, 5])",
              "equals": [
                2,
                4
              ]
            }
          ]
        },
        {
          "id": "l10-e21",
          "level": "qiyin",
          "title": "oxirgi",
          "task": "oxirgi() nomli funksiya yarating: u ro‘yxatning oxirgi elementini qaytarsin. Tekshiruv: oxirgi([5, 6, 7]) chaqirilganda natija 7 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def oxirgi(a):\n    return a[-1]",
          "checks": [
            {
              "type": "expr",
              "code": "oxirgi([5, 6, 7])",
              "equals": 7
            }
          ]
        },
        {
          "id": "l10-e22",
          "level": "qiyin",
          "title": "faktorial",
          "task": "faktorial() nomli funksiya yarating: u n! faktorialni hisoblab qaytarsin. Tekshiruv: faktorial(5) chaqirilganda natija 120 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def faktorial(n):\n    p = 1\n    for i in range(1, n + 1):\n        p *= i\n    return p",
          "checks": [
            {
              "type": "expr",
              "code": "faktorial(5)",
              "equals": 120
            }
          ]
        },
        {
          "id": "l10-e23",
          "level": "qiyin",
          "title": "teskari",
          "task": "teskari() nomli funksiya yarating: u matnni teskari qilib qaytarsin. Tekshiruv: teskari('abc') chaqirilganda natija 'cba' bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def teskari(s):\n    return s[::-1]",
          "checks": [
            {
              "type": "expr",
              "code": "teskari('abc')",
              "equals": "cba"
            }
          ]
        },
        {
          "id": "l10-e24",
          "level": "qiyin",
          "title": "nechta",
          "task": "nechta() nomli funksiya yarating: u matnda berilgan harf necha marta uchrashini qaytarsin. Tekshiruv: nechta('banana', 'a') chaqirilganda natija 3 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def nechta(s, harf):\n    return s.count(harf)",
          "checks": [
            {
              "type": "expr",
              "code": "nechta('banana', 'a')",
              "equals": 3
            }
          ]
        },
        {
          "id": "l10-e25",
          "level": "qiyin",
          "title": "minmax",
          "task": "minmax() nomli funksiya yarating: u ro‘yxatdagi eng kichik va eng katta qiymatni [min, max] ko‘rinishida qaytarsin. Tekshiruv: minmax([3, 1, 9, 2]) chaqirilganda natija [1, 9] bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def minmax(a):\n    return [min(a), max(a)]",
          "checks": [
            {
              "type": "expr",
              "code": "minmax([3, 1, 9, 2])",
              "equals": [
                1,
                9
              ]
            }
          ]
        },
        {
          "id": "l10-e26",
          "level": "qiyin",
          "title": "takrorla",
          "task": "takrorla() nomli funksiya yarating: u matnni n marta takrorlab qaytarsin. Tekshiruv: takrorla('ab', 3) chaqirilganda natija 'ababab' bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def takrorla(s, n):\n    return s * n",
          "checks": [
            {
              "type": "expr",
              "code": "takrorla('ab', 3)",
              "equals": "ababab"
            }
          ]
        },
        {
          "id": "l10-e27",
          "level": "qiyin",
          "title": "is_adult",
          "task": "is_adult() nomli funksiya yarating: u yosh 18 yoki undan katta bo‘lsa True qaytarsin. Tekshiruv: is_adult(18) chaqirilganda natija True bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def is_adult(yosh):\n    return yosh >= 18",
          "checks": [
            {
              "type": "expr",
              "code": "is_adult(18)",
              "equals": true
            }
          ]
        },
        {
          "id": "l10-e28",
          "level": "qiyin",
          "title": "orta",
          "task": "orta() nomli funksiya yarating: u ikkita sonning o‘rtacha qiymatini qaytarsin. Tekshiruv: orta(10, 20) chaqirilganda natija 15.0 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def orta(a, b):\n    return (a + b) / 2",
          "checks": [
            {
              "type": "expr",
              "code": "orta(10, 20)",
              "equals": 15.0
            }
          ]
        },
        {
          "id": "l10-e29",
          "level": "qiyin",
          "title": "abs_oddiy",
          "task": "abs_oddiy() nomli funksiya yarating: u sonning absolyut qiymatini qaytarsin (manfiy bo‘lsa musbat). Tekshiruv: abs_oddiy(-4) chaqirilganda natija 4 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def abs_oddiy(n):\n    return -n if n < 0 else n",
          "checks": [
            {
              "type": "expr",
              "code": "abs_oddiy(-4)",
              "equals": 4
            }
          ]
        },
        {
          "id": "l10-e30",
          "level": "qiyin",
          "title": "tahlil",
          "task": "salom(ism='Mehmon') funksiyasini yozing: default ism «Mehmon». «Salom, » + ism ni print qilsin. Argument bermay salom() ni chaqiring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def salom(ism='Mehmon'):\n    print('Salom, ' + ism)\nsalom()",
          "checks": [
            {
              "type": "expr",
              "code": "tahlil([1, 2, 3, 4])['yigindi']",
              "equals": 10
            }
          ]
        }
      ],
      "review": [
        {
          "term": "def nom():",
          "meaning": "Funksiya e’lon qilish"
        },
        {
          "term": "chaqirish nom()",
          "meaning": "Funksiyani ishga tushirish"
        },
        {
          "term": "parametr / argument",
          "meaning": "def dagi nom / chaqiruvdagi qiymat"
        },
        {
          "term": "return",
          "meaning": "Qiymatni dasturga qaytarish"
        },
        {
          "term": "print vs return",
          "meaning": "Ekran vs qiymat"
        },
        {
          "term": "default =",
          "meaning": "Berilmasa ishlatiladigan qiymat"
        },
        {
          "term": "if ichida def",
          "meaning": "Funksiya ichida shart"
        }
      ]
    },
    {
      "id": 11,
      "title": "*args va **kwargs",
      "subtitle": "O‘zgaruvchan va kalitli argumentlar.",
      "teach": "\n<div class=\"card\">\n  <h3>*args va **kwargs nima?</h3>\n  <p>*args istalgancha oddiy argumentni tuple qilib oladi; **kwargs kalit=qiymatni dict qilib oladi. Chaqiruvda ro‘yxatni * bilan, lug‘atni ** bilan ochib uzatish mumkin. Parametrlar tartibi: oddiy → default → *args → **kwargs.</p>\n\n  <h4>1) *args — o‘zgaruvchan oddiy argumentlar</h4>\n  <p class=\"teach-explain\">*args istalgancha oddiy argumentni bitta tuple sifatida qabul qiladi. Nechta qiymat kelishi oldindan noma’lum bo‘lganda kerak: yig(1,2,3) yoki yig(10,20). def yig(*args): return sum(args) — klassik misol. args ichida oddiy tuple kabi indekslash va aylanish mumkin.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def yigindi(*args):\n    # args = (1, 2, 3)\n    return sum(args)\n\nnatija = yigindi(1, 2, 3)\nprint(natija)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">6</code></div></div>\n\n  <h4>2) *args uzunligi</h4>\n  <p class=\"teach-explain\">len(args) nechta argument kelganini bildiradi. Bo‘sh chaqiruv yig() da len 0 bo‘ladi — sum([]) ham 0. Tekshiruv (kamida 1 ta qiymat bormi?) va sikl chegarasi uchun foydali.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def nechta(*args):\n    return len(args)\n\nprint(nechta(10, 20, 30, 40))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">4</code></div></div>\n\n  <h4>3) *args dan element olish</h4>\n  <p class=\"teach-explain\">args[0] — birinchi argument, args[-1] — oxirgisi. Tuple indekslashi bilan bir xil. Masalan bir(*args) birinchi qiymatni qaytarishi mumkin.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def birinchi(*args):\n    return args[0]\n\nprint(birinchi(9, 8, 7))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">9</code></div></div>\n\n  <h4>4) **kwargs — kalitli argumentlar</h4>\n  <p class=\"teach-explain\">**kwargs kalit=qiymat juftliklarini dict qilib oladi. Chaqiruv: info(ism=\"Ali\", yosh=20) → kwargs ichida {\"ism\": \"Ali\", \"yosh\": 20}. Ixtiyoriy nomli sozlamalar, konfiguratsiya uchun qulay. Qiymat olish: kwargs.get(\"ism\") yoki kwargs[\"ism\"].</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def info(**kwargs):\n    # kwargs = {\"ism\": \"Ali\", \"yosh\": 20}\n    print(kwargs.get(\"ism\"))\n\ninfo(ism=\"Ali\", yosh=20)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">Ali</code></div></div>\n\n  <h4>5) kwargs kalitlari</h4>\n  <p class=\"teach-explain\">kwargs.keys() barcha kalitlarni beradi; sorted(...) bilan tartiblash mumkin. Qaysi sozlamalar yuborilganini bilish uchun. Oddiy dict metodlari (keys, values, items, get) ishlaydi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def kalitlar(**kwargs):\n    return sorted(kwargs.keys())\n\nprint(kalitlar(b=1, a=2))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">['a', 'b']</code></div></div>\n\n  <h4>6) kwargs qiymatlari yig‘indisi</h4>\n  <p class=\"teach-explain\">kwargs.values() bo‘ylab yig‘indi hisoblash mumkin — nomli sonlarni jamlash. Bu **kwargs ning amaliy ishlatilishi: kalitlar nom, qiymatlar son. Avval values(), keyin sum().</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def yig_kw(**kwargs):\n    return sum(kwargs.values())\n\nprint(yig_kw(x=3, y=4))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">7</code></div></div>\n\n  <h4>7) Oddiy parametr + *args</h4>\n  <p class=\"teach-explain\">Avval majburiy parametrlar, keyin *args: def f(a, *rest). a alohida qiymat; qolganlari rest tupleida. Tartibni buzmang — aks holda SyntaxError.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def bir_ikki(a, b, *rest):\n    return [a, b]\n\nprint(bir_ikki(1, 2, 9, 8))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[1, 2]</code></div></div>\n\n  <h4>8) Default + *args + **kwargs tartibi</h4>\n  <p class=\"teach-explain\">To‘liq tartib: oddiy parametrlar → defaultli → *args → **kwargs. Masalan def f(a, b=1, *args, **kwargs). Bu tartib buzilsa Python SyntaxError beradi. Moslashuvchan funksiya imzosining to‘liq ko‘rinishi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def f(a, b=1, *args, **kwargs):\n    return a + b + sum(args) + sum(kwargs.values())\n\nprint(f(5, 1, 1, x=0))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">7</code></div></div>\n\n  <h4>9) Ro‘yxatni ochish: *</h4>\n  <p class=\"teach-explain\">f(*[1, 2, 3]) list elementlarini alohida argument qilib uzatadi. Qo‘lda f(1, 2, 3) yozish o‘rniga. map/zip va o‘z funksiyalaringizda qulay.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def qoshing(a, b):\n    return a + b\n\nsonlar = [10, 4]\nprint(qoshing(*sonlar))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">14</code></div></div>\n\n  <h4>10) Lug‘atni ochish: **</h4>\n  <p class=\"teach-explain\">f(**{\"a\": 1, \"b\": 2}) kalitlarni parametr nomiga moslab uzatadi. Sozlamalar dict dan funksiyaga o‘tkazish. * ning kalitli jufti.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def salom(ism, yosh):\n    print(ism)\n    print(yosh)\n\nmalumot = {\"ism\": \"Ali\", \"yosh\": 20}\nsalom(**malumot)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">Ali\n20\n</pre></div></div>\n\n  <h4>11) *args ni aylantirish</h4>\n  <p class=\"teach-explain\">for x in args: har bir uzatilgan qiymatni aylanadi. Chop etish, yig‘ish, tekshirish. O‘zgaruvchan argumentlar ustida ishlash.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def chiqar(*args):\n    for x in args:\n        print(x)\n\nchiqar(1, 2)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">1\n2\n</pre></div></div>\n\n  <h4>12) type(*args) — tuple ekanini tekshirish</h4>\n  <p class=\"teach-explain\">type(args) odatda <class 'tuple'>. *args ning ichki ko‘rinishini tushunish. O‘qitish va tekshiruv uchun.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">def tur(*args):\n    return type(args).__name__\n\nprint(tur(1, 2))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">tuple</code></div></div>\n\n  <div class=\"callout\"><strong>Eslab qoling:</strong> <code>*args</code> → tuple (tartibli qiymatlar). <code>**kwargs</code> → dict (kalit=qiymat). Chaqiruvda ochish: <code>f(*ro‘yxat)</code>, <code>f(**lug‘at)</code>.</div>\n</div>\n",
      "examples": [
        {
          "title": "*args yig‘indi",
          "code": "def yigindi(*args):\n    return sum(args)\nprint(yigindi(1, 2, 3))",
          "why": "6 — nechta son bersangiz, hammasi yig‘iladi."
        },
        {
          "title": "*args len",
          "code": "def nechta(*args):\n    return len(args)\nprint(nechta(10, 20, 30, 40))",
          "why": "4"
        },
        {
          "title": "*args[0]",
          "code": "def birinchi(*args):\n    return args[0]\nprint(birinchi(9, 8, 7))",
          "why": "9"
        },
        {
          "title": "**kwargs get",
          "code": "def info(**kwargs):\n    print(kwargs.get(\"ism\"))\ninfo(ism=\"Ali\", yosh=20)",
          "why": "Ali"
        },
        {
          "title": "kwargs keys",
          "code": "def kalitlar(**kwargs):\n    return sorted(kwargs.keys())\nprint(kalitlar(b=1, a=2))",
          "why": "['a', 'b']"
        },
        {
          "title": "kwargs values",
          "code": "def yig_kw(**kwargs):\n    return sum(kwargs.values())\nprint(yig_kw(x=3, y=4))",
          "why": "7"
        },
        {
          "title": "oddiy + *args",
          "code": "def bir_ikki(a, b, *rest):\n    return [a, b]\nprint(bir_ikki(1, 2, 9, 8))",
          "why": "[1, 2] — rest=(9,8)"
        },
        {
          "title": "to‘liq tartib",
          "code": "def f(a, b=1, *args, **kwargs):\n    return a + b + sum(args) + sum(kwargs.values())\nprint(f(5, 1, 1, x=0))",
          "why": "7"
        },
        {
          "title": "* bilan ochish",
          "code": "def qoshing(a, b):\n    return a + b\nprint(qoshing(*[10, 4]))",
          "why": "14"
        },
        {
          "title": "** bilan ochish",
          "code": "def salom(ism, yosh):\n    print(ism)\n    print(yosh)\nsalom(**{\"ism\": \"Ali\", \"yosh\": 20})",
          "why": "Ali keyin 20"
        },
        {
          "title": "*args for",
          "code": "def chiqar(*args):\n    for x in args:\n        print(x)\nchiqar(1, 2)",
          "why": "1 keyin 2"
        },
        {
          "title": "args tipi",
          "code": "def tur(*args):\n    return type(args).__name__\nprint(tur(1, 2))",
          "why": "tuple"
        }
      ],
      "exercises": [
        {
          "id": "l11-e01",
          "level": "oson",
          "title": "yig",
          "task": "yig() nomli funksiya yarating: u *args orqali kelgan barcha sonlar yig‘indisini qaytarsin. Funksiya *args qabul qilsin (istalgancha argument). Tekshiruv: yig(1, 2, 3) chaqirilganda natija 6 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def yig(*args):\n    return sum(args)",
          "checks": [
            {
              "type": "expr",
              "code": "yig(1, 2, 3)",
              "equals": 6
            }
          ]
        },
        {
          "id": "l11-e02",
          "level": "oson",
          "title": "nechta args",
          "task": "nechta() nomli funksiya yarating: u *args orqali kelgan argumentlar sonini (len) qaytarsin. Funksiya *args qabul qilsin (istalgancha argument). Tekshiruv: nechta(1, 2, 3, 4) chaqirilganda natija 4 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def nechta(*args):\n    return len(args)",
          "checks": [
            {
              "type": "expr",
              "code": "nechta(1, 2, 3, 4)",
              "equals": 4
            }
          ]
        },
        {
          "id": "l11-e03",
          "level": "oson",
          "title": "bir",
          "task": "bir() nomli funksiya yarating: u birinchi argumentni (*args[0]) qaytarsin. Funksiya *args qabul qilsin (istalgancha argument). Tekshiruv: bir(9, 8, 7) chaqirilganda natija 9 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def bir(*args):\n    return args[0]",
          "checks": [
            {
              "type": "expr",
              "code": "bir(9, 8, 7)",
              "equals": 9
            }
          ]
        },
        {
          "id": "l11-e04",
          "level": "oson",
          "title": "ol",
          "task": "ol() nomli funksiya yarating: u **kwargs dan get('ism') qiymatini qaytarsin. Funksiya **kwargs qabul qilsin (kalit=qiymat). Tekshiruv: ol(ism='Ali', yosh=1) chaqirilganda natija 'Ali' bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def ol(**kw):\n    return kw.get('ism')",
          "checks": [
            {
              "type": "expr",
              "code": "ol(ism='Ali', yosh=1)",
              "equals": "Ali"
            }
          ]
        },
        {
          "id": "l11-e05",
          "level": "oson",
          "title": "kalitlar",
          "task": "kalitlar() nomli funksiya yarating: u **kwargs kalitlarini sorted qilib qaytarsin. Funksiya **kwargs qabul qilsin (kalit=qiymat). Tekshiruv: kalitlar(b=1, a=2) chaqirilganda natija ['a', 'b'] bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def kalitlar(**kw):\n    return sorted(kw.keys())",
          "checks": [
            {
              "type": "expr",
              "code": "kalitlar(b=1, a=2)",
              "equals": [
                "a",
                "b"
              ]
            }
          ]
        },
        {
          "id": "l11-e06",
          "level": "oson",
          "title": "chiq",
          "task": "chiq(*args) funksiyasini yozing: har bir argumentni alohida qatorda print qilsin. chiq(1, 2) ni chaqiring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def chiq(*args):\n    for x in args:\n        print(x)\nchiq(1, 2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1\n2"
            }
          ]
        },
        {
          "id": "l11-e07",
          "level": "oson",
          "title": "yig2",
          "task": "yig() nomli funksiya yarating: u *args orqali kelgan barcha sonlar yig‘indisini qaytarsin. Funksiya *args qabul qilsin (istalgancha argument). Tekshiruv: yig(10, 20) chaqirilganda natija 30 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def yig(*args):\n    return sum(args)",
          "checks": [
            {
              "type": "expr",
              "code": "yig(10, 20)",
              "equals": 30
            }
          ]
        },
        {
          "id": "l11-e08",
          "level": "oson",
          "title": "bo‘sh yig",
          "task": "yig() nomli funksiya yarating: u *args orqali kelgan barcha sonlar yig‘indisini qaytarsin. Funksiya *args qabul qilsin (istalgancha argument). Tekshiruv: yig() chaqirilganda natija 0 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def yig(*args):\n    return sum(args)",
          "checks": [
            {
              "type": "expr",
              "code": "yig()",
              "equals": 0
            }
          ]
        },
        {
          "id": "l11-e09",
          "level": "oson",
          "title": "show",
          "task": "show() funksiyasini yozing: kwargs ichidan 'x' qiymatini print qilsin. Parametrlar: **kw. Keyin show(**kw) ni chaqiring. Ekranga 7 chiqishi kerak.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def show(**kw):\n    print(kw['x'])\nshow(x=7)",
          "checks": [
            {
              "type": "stdout",
              "equals": "7"
            }
          ]
        },
        {
          "id": "l11-e10",
          "level": "oson",
          "title": "eng_katta",
          "task": "eng_katta() nomli funksiya yarating: u *args ichidan eng katta sonni qaytarsin. Funksiya *args qabul qilsin (istalgancha argument). Tekshiruv: eng_katta(3, 9, 2) chaqirilganda natija 9 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def eng_katta(*a):\n    return max(a)",
          "checks": [
            {
              "type": "expr",
              "code": "eng_katta(3, 9, 2)",
              "equals": 9
            }
          ]
        },
        {
          "id": "l11-e11",
          "level": "ortacha",
          "title": "* ochish",
          "task": "qoshing() funksiyasini yozing: ikkita sonni qo‘shib yig‘indisini qaytarsin. Parametrlar: a, b. Keyin qoshing(a, b) ni chaqiring. Ekranga 6 chiqishi kerak.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def qoshing(a, b):\n    return a + b\nnums = [2, 4]\nprint(qoshing(*nums))",
          "checks": [
            {
              "type": "stdout",
              "equals": "6"
            }
          ]
        },
        {
          "id": "l11-e12",
          "level": "ortacha",
          "title": "** ochish",
          "task": "ism_ol() nomli funksiya yarating: u **kwargs dan «ism» kalitini olib qaytarsin. Funksiya **kwargs qabul qilsin (kalit=qiymat). Tekshiruv: ism_ol(**{'ism': 'Bob', 'yosh': 20}) chaqirilganda natija 'Bob' bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def ism_ol(**kwargs):\n    return kwargs['ism']",
          "checks": [
            {
              "type": "expr",
              "code": "ism_ol(**{'ism': 'Bob', 'yosh': 20})",
              "equals": "Bob"
            }
          ]
        },
        {
          "id": "l11-e13",
          "level": "ortacha",
          "title": "juft args",
          "task": "juftlar() nomli funksiya yarating: u ro‘yxatdan faqat juft sonlarni ajratib qaytarsin. Tekshiruv: juftlar(1, 2, 3, 4) chaqirilganda natija [2, 4] bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def juftlar(*args):\n    return [x for x in args if x % 2 == 0]",
          "checks": [
            {
              "type": "expr",
              "code": "juftlar(1, 2, 3, 4)",
              "equals": [
                2,
                4
              ]
            }
          ]
        },
        {
          "id": "l11-e14",
          "level": "ortacha",
          "title": "orta args",
          "task": "def qoshing(a, b) yozing (a+b qaytarsin). nums=[2, 4] bering va qoshing(*nums) natijasini print qiling (* ro‘yxatni ochadi).",
          "hint": "qoshing(*nums) — yulduzcha ochadi.",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def qoshing(a, b):\n    return a + b\nnums = [2, 4]\nprint(qoshing(*nums))",
          "checks": [
            {
              "type": "expr",
              "code": "orta(2, 4, 6)",
              "equals": 4.0
            }
          ]
        },
        {
          "id": "l11-e15",
          "level": "ortacha",
          "title": "info",
          "task": "info(**kwargs) funksiyasini yozing: kwargs dan ism va yoshni olib ism=Ali yosh=20 ko‘rinishidagi matnni (ism=...;yosh=...) qaytarsin. info(ism='Ali', yosh=20) chaqirilganda shu formatda return qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def info(**kw):\n    return 'ism=' + str(kw.get('ism')) + ';yosh=' + str(kw.get('yosh'))",
          "checks": [
            {
              "type": "expr",
              "code": "info(ism='Ali', yosh=20)",
              "equals": "ism=Ali;yosh=20"
            }
          ]
        },
        {
          "id": "l11-e16",
          "level": "ortacha",
          "title": "default va args",
          "task": "birlashtir() nomli funksiya yarating: u *args matnlarini bo‘sh joysiz ulab qaytarsin. Ikkinchi parametrga default qiymat bering (masalan n=2), chaqiruvda berilmasa shu ishlasin. Tekshiruv: birlashtir('a', 'b', 'c') chaqirilganda natija 'abc' bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def birlashtir(*args):\n    return ''.join(args)",
          "checks": [
            {
              "type": "expr",
              "code": "birlashtir('a', 'b', 'c')",
              "equals": "abc"
            }
          ]
        },
        {
          "id": "l11-e17",
          "level": "ortacha",
          "title": "filter kwargs",
          "task": "faqat_sonlar() nomli funksiya yarating: u vazifa shartiga mos ishni bajarsin. Tekshiruv: faqat_sonlar(a=1, b='x', c=3) chaqirilganda natija ['a', 'c'] bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def faqat_sonlar(**kw):\n    return sorted(k for k, v in kw.items() if isinstance(v, int))",
          "checks": [
            {
              "type": "expr",
              "code": "faqat_sonlar(a=1, b='x', c=3)",
              "equals": [
                "a",
                "c"
              ]
            }
          ]
        },
        {
          "id": "l11-e18",
          "level": "ortacha",
          "title": "min args",
          "task": "eng_kichik() nomli funksiya yarating: u vazifa shartiga mos ishni bajarsin. Tekshiruv: eng_kichik(5, 2, 8) chaqirilganda natija 2 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def eng_kichik(*a):\n    return min(a)",
          "checks": [
            {
              "type": "expr",
              "code": "eng_kichik(5, 2, 8)",
              "equals": 2
            }
          ]
        },
        {
          "id": "l11-e19",
          "level": "ortacha",
          "title": "default+args",
          "task": "f() nomli funksiya yarating: u vazifa shartiga mos ishni bajarsin. Ikkinchi parametrga default qiymat bering (masalan n=2), chaqiruvda berilmasa shu ishlasin. Tekshiruv: f(1, 2, 3) chaqirilganda natija 6 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def f(x, *rest):\n    return x + sum(rest)",
          "checks": [
            {
              "type": "expr",
              "code": "f(1, 2, 3)",
              "equals": 6
            }
          ]
        },
        {
          "id": "l11-e20",
          "level": "ortacha",
          "title": "print kwargs",
          "task": "show(**kw) funksiyasini yozing: kw['x'] ni print qilsin. show(x=7) ni chaqiring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def show(**kw):\n    print(kw['x'])\nshow(x=7)",
          "checks": [
            {
              "type": "stdout",
              "equals": "a 1\nb 2"
            }
          ]
        },
        {
          "id": "l11-e21",
          "level": "qiyin",
          "title": "stat",
          "task": "stat(1, 2, 3)['avg'] ifodasi 2.0 natijasini bersin. Kerakli funksiyani yozing.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def stat(*args):\n    if not args:\n        return {'count': 0, 'sum': 0, 'avg': 0}\n    return {'count': len(args), 'sum': sum(args), 'avg': sum(args) / len(args)}",
          "checks": [
            {
              "type": "expr",
              "code": "stat(1, 2, 3)['avg']",
              "equals": 2.0
            }
          ]
        },
        {
          "id": "l11-e22",
          "level": "qiyin",
          "title": "merge",
          "task": "merge({'a': 1}, {'b': 2}, c=3)['c'] ifodasi 3 natijasini bersin. Kerakli funksiyani yozing.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def merge(a, b, **extra):\n    return a | b | extra",
          "checks": [
            {
              "type": "expr",
              "code": "merge({'a': 1}, {'b': 2}, c=3)['c']",
              "equals": 3
            }
          ]
        },
        {
          "id": "l11-e23",
          "level": "qiyin",
          "title": "faqat juft yig",
          "task": "yig_juft() nomli funksiya yarating: u *args ichidan faqat juft sonlar yig‘indisini qaytarsin. Tekshiruv: yig_juft(1, 2, 3, 4) chaqirilganda natija 6 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def yig_juft(*args):\n    return sum(x for x in args if x % 2 == 0)",
          "checks": [
            {
              "type": "expr",
              "code": "yig_juft(1, 2, 3, 4)",
              "equals": 6
            }
          ]
        },
        {
          "id": "l11-e24",
          "level": "qiyin",
          "title": "taglash",
          "task": "tagla() nomli funksiya yarating: u vazifa shartiga mos ishni bajarsin. Tekshiruv: tagla('a', 'b', sep='/') chaqirilganda natija 'a/b' bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def tagla(*sozlar, sep='-'):\n    return sep.join(sozlar)",
          "checks": [
            {
              "type": "expr",
              "code": "tagla('a', 'b', sep='/')",
              "equals": "a/b"
            }
          ]
        },
        {
          "id": "l11-e25",
          "level": "qiyin",
          "title": "config",
          "task": "def ism_ol(**kwargs) yozing: kwargs[\"ism\"] ni qaytarsin. malumot={\"ism\":\"Bob\",\"yosh\":20} bering va ism_ol(**malumot) ni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def ism_ol(**kwargs):\n    return kwargs[\"ism\"]\nmalumot = {\"ism\": \"Bob\", \"yosh\": 20}\nprint(ism_ol(**malumot))",
          "checks": [
            {
              "type": "expr",
              "code": "config(port=8080)",
              "equals": "localhost:8080"
            }
          ]
        },
        {
          "id": "l11-e26",
          "level": "qiyin",
          "title": "apply",
          "task": "apply() nomli funksiya yarating: u vazifa shartiga mos ishni bajarsin. Tekshiruv: apply(lambda *a: sum(a), 1, 2, 3) chaqirilganda natija 6 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def apply(fn, *args):\n    return fn(*args)",
          "checks": [
            {
              "type": "expr",
              "code": "apply(lambda *a: sum(a), 1, 2, 3)",
              "equals": 6
            }
          ]
        },
        {
          "id": "l11-e27",
          "level": "qiyin",
          "title": "pick",
          "task": "pick() nomli funksiya yarating: u vazifa shartiga mos ishni bajarsin. Tekshiruv: pick(['b', 'a'], a=1, b=2, c=3) chaqirilganda natija [2, 1] bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def pick(keys, **kw):\n    return [kw[k] for k in keys]",
          "checks": [
            {
              "type": "expr",
              "code": "pick(['b', 'a'], a=1, b=2, c=3)",
              "equals": [
                2,
                1
              ]
            }
          ]
        },
        {
          "id": "l11-e28",
          "level": "qiyin",
          "title": "clamp args",
          "task": "clamp_all() nomli funksiya yarating: u vazifa shartiga mos ishni bajarsin. Tekshiruv: clamp_all(-1, 5, 20, lo=0, hi=10) chaqirilganda natija [0, 5, 10] bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def clamp_all(*args, lo=0, hi=10):\n    return [lo if x < lo else hi if x > hi else x for x in args]",
          "checks": [
            {
              "type": "expr",
              "code": "clamp_all(-1, 5, 20, lo=0, hi=10)",
              "equals": [
                0,
                5,
                10
              ]
            }
          ]
        },
        {
          "id": "l11-e29",
          "level": "qiyin",
          "title": "group",
          "task": "group(a=1, b=2, c=3)[1] ifodasi 6 natijasini bersin. Kerakli funksiyani yozing.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def group(**kw):\n    return (sorted(kw.keys()), sum(kw.values()))",
          "checks": [
            {
              "type": "expr",
              "code": "group(a=1, b=2, c=3)[1]",
              "equals": 6
            }
          ]
        },
        {
          "id": "l11-e30",
          "level": "qiyin",
          "title": "pipeline",
          "task": "pipe() nomli funksiya yarating: u vazifa shartiga mos ishni bajarsin. Tekshiruv: pipe(3, lambda n: n + 1, lambda n: n * 2) chaqirilganda natija 8 bo‘lishi kerak. Natijani return bilan qaytaring (faqat print qilib qo‘ymang).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def pipe(x, *fns):\n    for f in fns:\n        x = f(x)\n    return x",
          "checks": [
            {
              "type": "expr",
              "code": "pipe(3, lambda n: n + 1, lambda n: n * 2)",
              "equals": 8
            }
          ]
        }
      ],
      "review": [
        {
          "term": "*args",
          "meaning": "O‘zgaruvchan oddiy argumentlar → tuple"
        },
        {
          "term": "**kwargs",
          "meaning": "Kalitli argumentlar → dict"
        },
        {
          "term": "len(args)",
          "meaning": "Nechta argument kelgani"
        },
        {
          "term": "kwargs.get / keys",
          "meaning": "Qiymat / kalitlar"
        },
        {
          "term": "oddiy → default → *args → **kwargs",
          "meaning": "Parametrlar tartibi"
        },
        {
          "term": "f(*ro‘yxat)",
          "meaning": "Ro‘yxatni argumentlarga ochish"
        },
        {
          "term": "f(**lug‘at)",
          "meaning": "Lug‘atni kalitli argumentlarga ochish"
        }
      ]
    },
    {
      "id": 12,
      "title": "Fayllar (to‘liq)",
      "subtitle": "r, w, a, r+, rb, read, readline, readlines, write, seek.",
      "teach": "\n<div class=\"card\">\n  <h3>Fayllar — diskdagi ma’lumot</h3>\n  <p>Fayl bilan ishlash: open, read/write, with bloki. Matn va bayt rejimlari, encoding, faylni yopish muhim. Quyida o‘qish, yozish va xavfsiz with usuli tushuntiriladi.</p>\n  <h4>1) Yozish (w)</h4>\n  <p class=\"teach-explain\">open(..., \"w\") faylni yozish uchun ochadi (mavjud bo‘lsa ustiga yozadi). with bloki faylni avtomatik yopadi. write() matn yozadi.</p>\n  <pre class=\"code\">with open(\"a.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Salom\")</pre>\n  <h4>2) O‘qish (r) — read</h4>\n  <p class=\"teach-explain\">\"r\" rejimi o‘qish. read() butun mazmunni matn qilib oladi. Katta fayllarda ehtiyot bo‘ling — xotirani to‘ldirishi mumkin. encoding=\"utf-8\" o‘zbek harflari uchun muhim.</p>\n  <pre class=\"code\">with open(\"a.txt\", encoding=\"utf-8\") as f:\n    matn = f.read()\nprint(matn)</pre>\n  <h4>3) readline — bir qator</h4>\n  <p class=\"teach-explain\">readline() faqat bitta qatorni o‘qiydi. Katta faylni qatorma-qator ishlash uchun. Bo‘sh qator \"\" qaytishi mumkin — oxir belgisi.</p>\n  <pre class=\"code\">with open(\"p.txt\", encoding=\"utf-8\") as f:\n    print(f.readline().strip())</pre>\n  <h4>4) readlines — barcha qatorlar (list)</h4>\n  <p class=\"teach-explain\">readlines() barcha qatorlarni list qilib beradi. Har bir element — bir qator (odatda \\n bilan). Kichik/o‘rta fayllar uchun qulay.</p>\n  <pre class=\"code\">with open(\"q.txt\", encoding=\"utf-8\") as f:\n    qatorlar = f.readlines()\nprint(len(qatorlar))</pre>\n  <h4>5) append (a)</h4>\n  <p class=\"teach-explain\">\"a\" rejimi oxiriga qo‘shib yozadi (eski matn saqlanadi). Log, jurnal yuritish uchun. \"w\" esa faylni noldan yozadi.</p>\n  <pre class=\"code\">with open(\"log.txt\", \"a\", encoding=\"utf-8\") as f:\n    f.write(\"B\")</pre>\n  <h4>6) r+ — o‘qish va yozish</h4>\n  <p class=\"teach-explain\">r+ bir vaqtda o‘qish va yozishga ruxsat beradi. Mavjud fayl bo‘lishi kerak. seek bilan ko‘rsatkichni boshqarasiz.</p>\n  <pre class=\"code\">with open(\"x.txt\", \"r+\", encoding=\"utf-8\") as f:\n    eski = f.read()\n    f.seek(0)\n    f.write(\"YANGI\")\nprint(eski)</pre>\n  <h4>7) seek — ko‘rsatkichni siljitish</h4>\n  <p class=\"teach-explain\">seek(pozitsiya) fayl ichidagi o‘qish/yozish joyini ko‘chiradi. Boshiga qaytish: seek(0). r+ da qayta o‘qish/yozish uchun kerak.</p>\n  <pre class=\"code\">with open(\"a.txt\", \"r+\", encoding=\"utf-8\") as f:\n    f.seek(0, 2)  # oxiriga\n    f.write(\"B\")</pre>\n  <h4>8) rb / wb — binary</h4>\n  <p class=\"teach-explain\">rb/wb baytlar (rasm, audio) bilan ishlash. Matn emas, binary ma’lumot. encoding bu rejimda ishlatilmaydi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">with open(\"b.bin\", \"wb\") as f:\n    f.write(b\"ABCD\")\nwith open(\"b.bin\", \"rb\") as f:\n    print(len(f.read()))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">4</code></div></div>\n  <h4>9) Qatorlar bo‘ylab for</h4>\n  <p class=\"teach-explain\">for line in f: faylni qatorma-qator o‘qiydi — xotira tejaydi. Eng tavsiya etiladigan usul. Har qatorda strip() qilib tozalash odatiy.</p>\n  <pre class=\"code\">with open(\"r.txt\", encoding=\"utf-8\") as f:\n    for qator in f:\n        print(qator.strip())</pre>\n  <h4>10) encoding=\"utf-8\"</h4>\n  <p class=\"teach-explain\">encoding=\"utf-8\" o‘zbek va boshqa unicode belgilarini to‘g‘ri o‘qiydi/yozadi. Windows da default boshqacha bo‘lishi mumkin. Doim aniq ko‘rsatish yaxshi odat.</p>\n  <div class=\"callout\"><code>w</code> faylni noldan yozadi (eski o‘chadi). <code>a</code> oxiriga qo‘shadi. <code>with</code> — yopishni unutmang.</div>\n</div>\n",
      "examples": [
        {
          "title": "write",
          "code": "with open(\"a.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Salom\")",
          "why": "Faylga Salom yozildi"
        },
        {
          "title": "read",
          "code": "with open(\"a.txt\", encoding=\"utf-8\") as f:\n    print(f.read())",
          "why": "Salom"
        },
        {
          "title": "readline",
          "code": "with open(\"p.txt\", encoding=\"utf-8\") as f:\n    print(f.readline().strip())",
          "why": "birinchi qator"
        },
        {
          "title": "readlines",
          "code": "with open(\"q.txt\", encoding=\"utf-8\") as f:\n    print(len(f.readlines()))",
          "why": "qatorlar soni"
        },
        {
          "title": "append a",
          "code": "with open(\"log.txt\", \"a\", encoding=\"utf-8\") as f:\n    f.write(\"B\")",
          "why": "oxiriga B"
        },
        {
          "title": "r+",
          "code": "with open(\"x.txt\", \"r+\", encoding=\"utf-8\") as f:\n    print(f.read())\n    f.seek(0)\n    f.write(\"YANGI\")",
          "why": "o‘qib, boshidan yozish"
        },
        {
          "title": "rb len",
          "code": "with open(\"b.bin\", \"wb\") as f:\n    f.write(b\"ABCD\")\nwith open(\"b.bin\", \"rb\") as f:\n    print(len(f.read()))",
          "why": "4"
        },
        {
          "title": "for qator",
          "code": "with open(\"r.txt\", encoding=\"utf-8\") as f:\n    for q in f:\n        print(q.strip())",
          "why": "har qator alohida"
        },
        {
          "title": "yig‘indi fayl",
          "code": "y = 0\nwith open(\"sum.txt\", encoding=\"utf-8\") as f:\n    for q in f:\n        y += int(q.strip())\nprint(y)",
          "why": "qatordagi sonlar yig‘indisi"
        },
        {
          "title": "endswith + fayl",
          "code": "nom = \"data.txt\"\nif nom.endswith(\".txt\"):\n    with open(nom, \"w\", encoding=\"utf-8\") as f:\n        f.write(\"ok\")\n    print(\"yozildi\")",
          "why": "yozildi"
        }
      ],
      "exercises": [
        {
          "id": "l12-e01",
          "level": "oson",
          "title": "yozish",
          "task": "salom.txt fayliga «Salom» matnini yozing (open + write yoki with).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"salom.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Salom\")",
          "checks": [
            {
              "type": "file",
              "path": "salom.txt",
              "equals": "Salom"
            }
          ]
        },
        {
          "id": "l12-e02",
          "level": "oson",
          "title": "OK",
          "task": "ok.txt fayliga OK matnini yozing.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"ok.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"OK\")",
          "checks": [
            {
              "type": "file",
              "path": "ok.txt",
              "equals": "OK"
            }
          ]
        },
        {
          "id": "l12-e03",
          "level": "oson",
          "title": "Mashq",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"n.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"42\")",
          "checks": [
            {
              "type": "file",
              "path": "n.txt",
              "equals": "42"
            }
          ]
        },
        {
          "id": "l12-e04",
          "level": "oson",
          "title": "with",
          "task": "n.txt fayliga 42 matnini yozing.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"n.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"42\")",
          "checks": [
            {
              "type": "code_contains",
              "text": "with"
            },
            {
              "type": "file",
              "path": "b.txt",
              "equals": "Python"
            }
          ]
        },
        {
          "id": "l12-e05",
          "level": "oson",
          "title": "oqish",
          "task": "with open(...) bilan b.txt fayliga «Python» yozing (with majburiy).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"b.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Python\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "hi"
            }
          ]
        },
        {
          "id": "l12-e06",
          "level": "oson",
          "title": "ikki qator",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"q.txt\", encoding=\"utf-8\") as f:\n    qatorlar = f.readlines()\nprint(len(qatorlar))",
          "checks": [
            {
              "type": "file",
              "path": "t.txt",
              "equals": "Bir\nIkki"
            }
          ]
        },
        {
          "id": "l12-e07",
          "level": "oson",
          "title": "append",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"log.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"A\")\nwith open(\"log.txt\", \"a\", encoding=\"utf-8\") as f:\n    f.write(\"B\")",
          "checks": [
            {
              "type": "file",
              "path": "log.txt",
              "equals": "AB"
            }
          ]
        },
        {
          "id": "l12-e08",
          "level": "oson",
          "title": "input fayl",
          "task": "«matn» nomli o‘zgaruvchiga input() orqali matn o‘qing (masalan «Qalam»). with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "Qalam",
          "setup": "",
          "solution": "with open(\"log.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"A\")\nwith open(\"log.txt\", \"a\", encoding=\"utf-8\") as f:\n    f.write(\"B\")",
          "checks": [
            {
              "type": "file",
              "path": "out.txt",
              "equals": "Qalam"
            }
          ]
        },
        {
          "id": "l12-e09",
          "level": "oson",
          "title": "strip",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"p.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"  x  \")\nwith open(\"p.txt\", encoding=\"utf-8\") as f:\n    print(f.read().strip())",
          "checks": [
            {
              "type": "stdout",
              "equals": "x"
            }
          ]
        },
        {
          "id": "l12-e10",
          "level": "oson",
          "title": "len fayl",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"s.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"abcd\")\nwith open(\"s.txt\", encoding=\"utf-8\") as f:\n    print(len(f.read()))",
          "checks": [
            {
              "type": "stdout",
              "equals": "4"
            }
          ]
        },
        {
          "id": "l12-e11",
          "level": "ortacha",
          "title": "nusxa",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"t.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Bir\\nIkki\")",
          "checks": [
            {
              "type": "file",
              "path": "to.txt",
              "equals": "copy"
            }
          ]
        },
        {
          "id": "l12-e12",
          "level": "ortacha",
          "title": "readlines",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"m.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"a\\nb\\n\")\nwith open(\"m.txt\", encoding=\"utf-8\") as f:\n    print(len(f.readlines()))",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l12-e13",
          "level": "ortacha",
          "title": "csv",
          "task": "x.txt ni «r+» rejimida oching (ichida salom bor deb faraz qiling yoki yozing), o‘qib print qiling. Kodda r+ bo‘lsin.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"x.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"salom\")\nwith open(\"x.txt\", \"r+\", encoding=\"utf-8\") as f:\n    print(f.read())",
          "checks": [
            {
              "type": "stdout",
              "equals": "20"
            }
          ]
        },
        {
          "id": "l12-e14",
          "level": "ortacha",
          "title": "r+ rejimida yozish",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"even.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"2\\n4\")",
          "checks": [
            {
              "type": "file",
              "path": "even.txt",
              "equals": "2\n4"
            }
          ]
        },
        {
          "id": "l12-e15",
          "level": "ortacha",
          "title": "r+",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"from.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"copy\")\nwith open(\"from.txt\", encoding=\"utf-8\") as f:\n    data = f.read()\nwith open(\"to.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(data)",
          "checks": [
            {
              "type": "code_contains",
              "text": "r+"
            },
            {
              "type": "stdout",
              "equals": "salom"
            }
          ]
        },
        {
          "id": "l12-e16",
          "level": "ortacha",
          "title": "jami",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = input()\nwith open(\"out.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(matn)",
          "checks": [
            {
              "type": "file",
              "path": "hisob.txt",
              "equals": "Jami: 15"
            }
          ]
        },
        {
          "id": "l12-e17",
          "level": "ortacha",
          "title": "upper fayl",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"u.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"ok\")\nwith open(\"u.txt\", encoding=\"utf-8\") as f:\n    print(f.read().upper())",
          "checks": [
            {
              "type": "stdout",
              "equals": "OK"
            }
          ]
        },
        {
          "id": "l12-e18",
          "level": "ortacha",
          "title": "for qator",
          "task": "p.txt ni o‘qing, strip() qiling va natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"p.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"  x  \")\nwith open(\"p.txt\", encoding=\"utf-8\") as f:\n    print(f.read().strip())",
          "checks": [
            {
              "type": "stdout",
              "equals": "a\nb\nc"
            }
          ]
        },
        {
          "id": "l12-e19",
          "level": "ortacha",
          "title": "yigindi fayl",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"bin.dat\", \"wb\") as f:\n    f.write(b\"ABCD\")\nwith open(\"bin.dat\", \"rb\") as f:\n    data = f.read()\nprint(len(data))",
          "checks": [
            {
              "type": "stdout",
              "equals": "6"
            }
          ]
        },
        {
          "id": "l12-e20",
          "level": "ortacha",
          "title": "birlashtir",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"bir.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"A\" + \"B\")",
          "checks": [
            {
              "type": "file",
              "path": "bir.txt",
              "equals": "AB"
            }
          ]
        },
        {
          "id": "l12-e21",
          "level": "qiyin",
          "title": "filter yoz",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "yigindi = 0\nwith open(\"sum.txt\", encoding=\"utf-8\") as f:\n    for qator in f:\n        yigindi += int(qator.strip())\nprint(yigindi)",
          "checks": [
            {
              "type": "file",
              "path": "juft.txt",
              "equals": "2\n4"
            }
          ]
        },
        {
          "id": "l12-e22",
          "level": "qiyin",
          "title": "statistika",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"data.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"10\\n20\\n30\")\nwith open(\"data.txt\", encoding=\"utf-8\") as f:\n    a = [int(x) for x in f.read().split()]\n    print(sum(a) / len(a))",
          "checks": [
            {
              "type": "stdout",
              "equals": "20.0"
            }
          ]
        },
        {
          "id": "l12-e23",
          "level": "qiyin",
          "title": "max qator",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"even.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"2\\n4\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "9"
            }
          ]
        },
        {
          "id": "l12-e24",
          "level": "qiyin",
          "title": "word count",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"w.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"a a b\")\nwith open(\"w.txt\", encoding=\"utf-8\") as f:\n    sozlar = f.read().split()\n    print(max(sozlar.count(s) for s in set(sozlar)))",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l12-e25",
          "level": "qiyin",
          "title": "tsv",
          "task": "csv.txt da «Ali,20» bor. O‘qib verguldan keyingi qismni (20) print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"csv.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Ali,20\")\nwith open(\"csv.txt\", encoding=\"utf-8\") as f:\n    print(f.read().split(\",\")[1])",
          "checks": [
            {
              "type": "stdout",
              "equals": "20"
            }
          ]
        },
        {
          "id": "l12-e26",
          "level": "qiyin",
          "title": "append log",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"log2.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"\")\nwith open(\"log2.txt\", \"a\", encoding=\"utf-8\") as f:\n    for _ in range(3):\n        f.write(\"x\\n\")\nwith open(\"log2.txt\", encoding=\"utf-8\") as f:\n    print(len(f.readlines()))",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l12-e27",
          "level": "qiyin",
          "title": "filtr matn",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"in.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"py\\njava\\npy\")\nwith open(\"in.txt\", encoding=\"utf-8\") as f:\n    lines = [ln.strip() for ln in f if ln.strip() == \"py\"]\nwith open(\"out.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"\\n\".join(lines))",
          "checks": [
            {
              "type": "file",
              "path": "out.txt",
              "equals": "py\npy"
            }
          ]
        },
        {
          "id": "l12-e28",
          "level": "qiyin",
          "title": "json-ish",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"bir.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"A\" + \"B\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l12-e29",
          "level": "qiyin",
          "title": "palindrom fayl",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"p.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"aka\")\nwith open(\"p.txt\", encoding=\"utf-8\") as f:\n    s = f.read().strip()\n    print(s == s[::-1])",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l12-e30",
          "level": "qiyin",
          "title": "merge files",
          "task": "with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"hisob.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Jami: 15\")",
          "checks": [
            {
              "type": "file",
              "path": "c.txt",
              "equals": "AB"
            }
          ]
        }
      ],
      "review": [
        {
          "term": "open(..., encoding=\"utf-8\")",
          "meaning": "Fayl ochish"
        },
        {
          "term": "with open",
          "meaning": "Avtomatik yopish"
        },
        {
          "term": "w / a / r",
          "meaning": "Yozish / qo‘shish / o‘qish"
        },
        {
          "term": "read / readline / readlines",
          "meaning": "Butun / bir qator / list"
        },
        {
          "term": "r+",
          "meaning": "O‘qish + yozish"
        },
        {
          "term": "seek",
          "meaning": "Ko‘rsatkichni siljitish"
        },
        {
          "term": "rb / wb",
          "meaning": "Binary (baytlar)"
        },
        {
          "term": "for qator in f",
          "meaning": "Qatorma-qator o‘qish"
        }
      ]
    },
    {
      "id": 13,
      "title": "Xatolar: try / except",
      "subtitle": "ValueError, ZeroDivisionError, else, finally.",
      "teach": "\n<div class=\"card\">\n  <h3>Xato bo‘lsa nima qilish kerak?</h3>\n  <p>Xato (exception) dastur to‘xtashiga olib kelishi mumkin. try/except bilan xavfli joyni ushlaysiz; else/finally qo‘shimcha nazorat beradi. ValueError, ZeroDivisionError, KeyError kabilar quyida ko‘rsatiladi.</p>\n\n  <h4>1) try / except asosi</h4>\n  <p class=\"teach-explain\">try ichida xavfli kod, except da xato ushlanadi. Dastur to‘xtab qolmasdan xabarni chiqarishingiz mumkin. Barqaror dasturlarning asosi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">try:\n    n = int(\"a\")\nexcept ValueError:\n    print(\"son emas\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">son emas</code></div></div>\n\n  <h4>2) ZeroDivisionError — nolga bo‘lish</h4>\n  <p class=\"teach-explain\">Sonni 0 ga bo‘lish ZeroDivisionError beradi. except ZeroDivisionError: bilan ushlab, foydalanuvchiga tushunarli xabar. Hisob-kitobda himoya.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">try:\n    natija = 1 / 0\nexcept ZeroDivisionError:\n    print(\"nol\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">nol</code></div></div>\n\n  <h4>3) IndexError — noto‘g‘ri indeks</h4>\n  <p class=\"teach-explain\">Ro‘yxatda yo‘q indeks — IndexError. len ni tekshirish yoki except bilan himoya. Foydalanuvchi kiritgan indeksda ehtiyot bo‘ling.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">try:\n    print([1][5])\nexcept IndexError:\n    print(\"indeks\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">indeks</code></div></div>\n\n  <h4>4) KeyError — yo‘q kalit</h4>\n  <p class=\"teach-explain\">dict da yo‘q kalit — KeyError. get() xavfsizroq alternativ. except KeyError ham ishlaydi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">try:\n    print({}[\"a\"])\nexcept KeyError:\n    print(\"yoq\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">yoq</code></div></div>\n\n  <h4>5) TypeError — noto‘g‘ri tur</h4>\n  <p class=\"teach-explain\">Mos kelmaydigan turlar ustida amal — TypeError (\"a\" + 1). Tur tekshiruvi yoki except. API va hisoblarda tez-tez uchraydi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">try:\n    print(\"a\" + 1)\nexcept TypeError:\n    print(\"tur\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">tur</code></div></div>\n\n  <h4>6) NameError — mavjud bo‘lmagan nom</h4>\n  <p class=\"teach-explain\">E’lon qilinmagan o‘zgaruvchi — NameError. Yozuv xatosi yoki tartib xatosi. except bilan ushlash mumkin, lekin asosiy yechim — to‘g‘ri nom.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">try:\n    print(mavjud_emas)\nexcept NameError:\n    print(\"nom\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">nom</code></div></div>\n\n  <h4>7) else — xato bo‘lmasa</h4>\n  <p class=\"teach-explain\">try/except dagi else — hech qanday xato bo‘lmasa ishlaydi. Muvaffaqiyatli yo‘lni ajratish. finally dan farqli: faqat xatosiz holatda.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">try:\n    n = int(\"3\")\nexcept ValueError:\n    print(\"e\")\nelse:\n    print(n)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">3</code></div></div>\n\n  <h4>8) finally — har doim</h4>\n  <p class=\"teach-explain\">finally bloki xato bo‘lsin yoki bo‘lmasin ishlaydi. Fayl yopish, tozalash uchun. Resurslarni bo‘shatish kafolati.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">try:\n    print(1)\nfinally:\n    print(\"tugadi\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">1\ntugadi\n</pre></div></div>\n\n  <h4>9) Bir necha xato turi</h4>\n  <p class=\"teach-explain\">except (TypeError, ValueError): bir necha xatoni birga ushlaydi. Yoki ketma-ket alohida except. Turli holatlarga turli javob.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">try:\n    n = int(\"z\")\nexcept (ValueError, TypeError):\n    print(\"bad\")</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">bad</code></div></div>\n\n  <h4>10) as e — xato obyekti</h4>\n  <p class=\"teach-explain\">except Exception as e: xato obyektini e ga oladi. print(e) bilan tafsilot. Log va foydalanuvchi xabari uchun.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">try:\n    int(\"z\")\nexcept ValueError as e:\n    print(type(e).__name__)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">ValueError</code></div></div>\n\n  <div class=\"callout\"><strong>Tartib:</strong> try → except → else → finally. Aniq xato nomini yozing (<code>ValueError</code>), umumiy <code>except:</code> ni boshlang‘ichda kam ishlating.</div>\n</div>\n",
      "examples": [
        {
          "title": "ValueError",
          "code": "try:\n    n = int(\"a\")\nexcept ValueError:\n    print(\"son emas\")",
          "why": "son emas"
        },
        {
          "title": "ZeroDivision",
          "code": "try:\n    print(1 / 0)\nexcept ZeroDivisionError:\n    print(\"nol\")",
          "why": "nol"
        },
        {
          "title": "IndexError",
          "code": "try:\n    print([1][5])\nexcept IndexError:\n    print(\"indeks\")",
          "why": "indeks"
        },
        {
          "title": "KeyError",
          "code": "try:\n    print({}[\"a\"])\nexcept KeyError:\n    print(\"yoq\")",
          "why": "yoq"
        },
        {
          "title": "TypeError",
          "code": "try:\n    print(\"a\" + 1)\nexcept TypeError:\n    print(\"tur\")",
          "why": "tur"
        },
        {
          "title": "NameError",
          "code": "try:\n    print(mavjud_emas)\nexcept NameError:\n    print(\"nom\")",
          "why": "nom"
        },
        {
          "title": "else",
          "code": "try:\n    n = int(\"3\")\nexcept ValueError:\n    print(\"e\")\nelse:\n    print(n)",
          "why": "3 — xato bo‘lmadi"
        },
        {
          "title": "finally",
          "code": "try:\n    print(1)\nfinally:\n    print(\"tugadi\")",
          "why": "1 keyin tugadi"
        },
        {
          "title": "Bir necha tur",
          "code": "try:\n    int(\"z\")\nexcept (ValueError, TypeError):\n    print(\"bad\")",
          "why": "bad"
        },
        {
          "title": "as e",
          "code": "try:\n    int(\"z\")\nexcept ValueError as e:\n    print(type(e).__name__)",
          "why": "ValueError"
        }
      ],
      "exercises": [
        {
          "id": "l13-e01",
          "level": "oson",
          "title": "try int",
          "task": "int('5') qiling va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(int(\"5\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "5"
            }
          ]
        },
        {
          "id": "l13-e02",
          "level": "oson",
          "title": "ValueError",
          "task": "try/except yozing. ValueError bo‘lsa mos xabarni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "try:\n    print(int(\"z\"))\nexcept ValueError:\n    print(\"son\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "son"
            }
          ]
        },
        {
          "id": "l13-e03",
          "level": "oson",
          "title": "ZeroDiv",
          "task": "try ichida int(\"5\") qiling va natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(int(\"5\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "nol"
            }
          ]
        },
        {
          "id": "l13-e04",
          "level": "oson",
          "title": "KeyError",
          "task": "try/except yozing. KeyError bo‘lsa mos xabarni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "try:\n    print({}[\"a\"])\nexcept KeyError:\n    print(\"yoq\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "yoq"
            }
          ]
        },
        {
          "id": "l13-e05",
          "level": "oson",
          "title": "IndexError",
          "task": "«a» nomli o‘zgaruvchiga [1] qiymatini bering. try/except yozing. IndexError bo‘lsa mos xabarni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1]\ntry:\n    print(a[5])\nexcept IndexError:\n    print(-1)",
          "checks": [
            {
              "type": "stdout",
              "equals": "-1"
            }
          ]
        },
        {
          "id": "l13-e06",
          "level": "oson",
          "title": "else",
          "task": "Bo‘sh lug‘atdan [\"a\"] olishni try/except KeyError bilan ushlang va «yoq» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "try:\n    print({}[\"a\"])\nexcept KeyError:\n    print(\"yoq\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l13-e07",
          "level": "oson",
          "title": "float ok",
          "task": "float('3.5') qiling va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "try:\n    n = int(\"2\")\nexcept ValueError:\n    n = None\nelse:\n    print(n)",
          "checks": [
            {
              "type": "stdout",
              "equals": "3.5"
            }
          ]
        },
        {
          "id": "l13-e08",
          "level": "oson",
          "title": "float xato",
          "task": "try/except yozing. ValueError bo‘lsa mos xabarni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "try:\n    print(float(\"x\"))\nexcept ValueError:\n    print(\"xato\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "xato"
            }
          ]
        },
        {
          "id": "l13-e09",
          "level": "oson",
          "title": "get",
          "task": "try ichida 'a' + 1 qilib ko‘ring (TypeError). except da «tur» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "try:\n    print(\"a\" + 1)\nexcept TypeError:\n    print(\"tur\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "1"
            }
          ]
        },
        {
          "id": "l13-e10",
          "level": "oson",
          "title": "xavfsiz //",
          "task": "«n» nomli o‘zgaruvchiga 2 qiymatini bering. 10 // n natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = 2\nprint(10 // n)",
          "checks": [
            {
              "type": "stdout",
              "equals": "5"
            }
          ]
        },
        {
          "id": "l13-e11",
          "level": "ortacha",
          "title": "safe_int x",
          "task": "safe_int(matn) xato bo‘lsa 0. print(safe_int(\"x\")).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def safe_int(matn):\n    try:\n        return int(matn)\n    except ValueError:\n        return 0\nprint(safe_int(\"x\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "0"
            }
          ]
        },
        {
          "id": "l13-e12",
          "level": "ortacha",
          "title": "safe_int 12",
          "task": "int(input()) bilan son o‘qing va shu sonni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = int(input())\nprint(n)",
          "checks": [
            {
              "type": "stdout",
              "equals": "12"
            }
          ]
        },
        {
          "id": "l13-e13",
          "level": "ortacha",
          "title": "Nolga bo‘lish",
          "task": "n = int(input()). try ichida 10 // n hisoblang; ZeroDivisionError bo‘lsa «nol» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "7",
          "setup": "",
          "solution": "n = int(input())\ntry:\n    print(10 // n)\nexcept ZeroDivisionError:\n    print(\"nol\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "7"
            }
          ]
        },
        {
          "id": "l13-e14",
          "level": "ortacha",
          "title": "Xavfsiz bo‘lish",
          "task": "try/except yozing. TypeError bo‘lsa mos xabarni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = 2\nprint(10 // n)",
          "checks": [
            {
              "type": "stdout",
              "equals": "tur"
            }
          ]
        },
        {
          "id": "l13-e15",
          "level": "ortacha",
          "title": "nol bol",
          "task": "int(\"z\") xatosini try/except ValueError bilan ushlang va «son» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "0",
          "setup": "",
          "solution": "try:\n    print(int(\"z\"))\nexcept ValueError:\n    print(\"son\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "nol"
            }
          ]
        },
        {
          "id": "l13-e16",
          "level": "ortacha",
          "title": "list xavfsiz",
          "task": "«a» nomli o‘zgaruvchiga [1, 2, 3] qiymatini bering. a[1] natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 2, 3]\nprint(a[1])",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l13-e17",
          "level": "ortacha",
          "title": "finally",
          "task": "try ichida print(1), finally da ham xabar chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 2, 3]\nprint(a[1])",
          "checks": [
            {
              "type": "stdout",
              "equals": "1\ntugadi"
            }
          ]
        },
        {
          "id": "l13-e18",
          "level": "ortacha",
          "title": "int str*",
          "task": "«s» nomli o‘zgaruvchiga '3' qiymatini bering. int(s) qiling * 2 natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1]\ntry:\n    print(a[5])\nexcept IndexError:\n    print(-1)",
          "checks": [
            {
              "type": "stdout",
              "equals": "6"
            }
          ]
        },
        {
          "id": "l13-e19",
          "level": "ortacha",
          "title": "bol funksiya",
          "task": "float(\"3.5\") ni hisoblab print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(float(\"3.5\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "None"
            }
          ]
        },
        {
          "id": "l13-e20",
          "level": "ortacha",
          "title": "multi except",
          "task": "float(\"x\") xatosini try/except ValueError bilan ushlang va «xato» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "try:\n    print(float(\"x\"))\nexcept ValueError:\n    print(\"xato\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "xato"
            }
          ]
        },
        {
          "id": "l13-e21",
          "level": "qiyin",
          "title": "parse list",
          "task": "bol(a, b) funksiyasini yozing: b 0 bo‘lsa None, aks holda a/b qaytarsin. print(bol(1, 0)) qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def bol(a, b):\n    if b == 0:\n        return None\n    return a / b\nprint(bol(1, 0))",
          "checks": [
            {
              "type": "stdout",
              "equals": "7"
            }
          ]
        },
        {
          "id": "l13-e22",
          "level": "qiyin",
          "title": "fayl yo‘q",
          "task": "safe_int(matn) funksiyasini yozing: int(matn) muvaffaqiyatli bo‘lsa sonni qaytarsin, ValueError bo‘lsa 0 qaytarsin. Keyin safe_int(\"x\") ni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def safe_int(matn):\n    try:\n        return int(matn)\n    except ValueError:\n        return 0\nprint(safe_int(\"x\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "yoq"
            }
          ]
        },
        {
          "id": "l13-e23",
          "level": "qiyin",
          "title": "dict get chain",
          "task": "safe_int(matn) funksiyasini yozing (xato bo‘lsa 0). safe_int(\"12\") ni chaqirib natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def safe_int(matn):\n    try:\n        return int(matn)\n    except ValueError:\n        return 0\nprint(safe_int(\"12\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "0"
            }
          ]
        },
        {
          "id": "l13-e24",
          "level": "qiyin",
          "title": "validate",
          "task": "yosh_ok() funksiyasini yozing: matnni int qilib 0..120 oralig‘ida ekanini tekshirib True/False qaytarsin. Parametrlar: s. Keyin yosh_ok(s) ni chaqiring. Ekranga True chiqishi kerak.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def yosh_ok(s):\n    try:\n        y = int(s)\n        return 0 <= y <= 120\n    except ValueError:\n        return False\nprint(yosh_ok(\"20\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l13-e25",
          "level": "qiyin",
          "title": "retry g‘oya",
          "task": "try/except yozing. ValueError bo‘lsa mos xabarni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "try:\n    print(int(\"x\"))\nexcept ValueError:\n    print(int(\"5\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "5"
            }
          ]
        },
        {
          "id": "l13-e26",
          "level": "qiyin",
          "title": "sqrt xavfsiz",
          "task": "math kutubxonasini import qiling. try/except yozing. ValueError bo‘lsa mos xabarni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\ntry:\n    print(math.sqrt(-1))\nexcept ValueError:\n    print('manfiy')",
          "checks": [
            {
              "type": "stdout",
              "equals": "manfiy"
            }
          ]
        },
        {
          "id": "l13-e27",
          "level": "qiyin",
          "title": "index loop",
          "task": "«a» nomli o‘zgaruvchiga [1, 2] qiymatini bering. for i in range(5) sikli yozing.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 2]\nfor i in range(5):\n    try:\n        print(a[i])\n    except IndexError:\n        print('tugadi')\n        break",
          "checks": [
            {
              "type": "stdout",
              "equals": "1\n2\ntugadi"
            }
          ]
        },
        {
          "id": "l13-e28",
          "level": "qiyin",
          "title": "calc",
          "task": "calc() funksiyasini yozing: ikki son va amal (+ - * /) bo‘yicha hisoblasin; /0 da 'xato' qaytarsin. Parametrlar: a, b, op. Keyin calc(a, b, op) ni chaqiring. Ekranga xato chiqishi kerak.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def calc(a, b, op):\n    try:\n        if op == '+': return a + b\n        if op == '-': return a - b\n        if op == '*': return a * b\n        if op == '/': return a / b\n    except ZeroDivisionError:\n        return 'xato'\nprint(calc(1, 0, '/'))",
          "checks": [
            {
              "type": "stdout",
              "equals": "xato"
            }
          ]
        },
        {
          "id": "l13-e29",
          "level": "qiyin",
          "title": "nested",
          "task": "try/except yozing. TypeError bo‘lsa mos xabarni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {}\nprint(d.get(\"a\", 1))",
          "checks": [
            {
              "type": "stdout",
              "equals": "ok"
            }
          ]
        },
        {
          "id": "l13-e30",
          "level": "qiyin",
          "title": "Xavfsiz ko‘paytirish",
          "task": "«s» nomli o‘zgaruvchiga '3' qiymatini bering. int(s) qiling * 2 natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"3\"\nprint(int(s) * 2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 0]"
            }
          ]
        }
      ],
      "review": [
        {
          "term": "try",
          "meaning": "Xavfli kod bloki"
        },
        {
          "term": "except ValueError",
          "meaning": "Aniq xato turi"
        },
        {
          "term": "ZeroDivisionError",
          "meaning": "Nolga bo‘lish"
        },
        {
          "term": "IndexError / KeyError",
          "meaning": "Noto‘g‘ri indeks / kalit"
        },
        {
          "term": "TypeError / NameError",
          "meaning": "Tur / nom xatosi"
        },
        {
          "term": "else",
          "meaning": "Xato bo‘lmasa"
        },
        {
          "term": "finally",
          "meaning": "Har doim bajariladi"
        },
        {
          "term": "except (A, B)",
          "meaning": "Bir necha xato turi"
        },
        {
          "term": "as e",
          "meaning": "Xato obyektiga murojaat"
        }
      ]
    },
    {
      "id": 14,
      "title": "Lug‘at (dict)",
      "subtitle": "Kalit → qiymat. get, keys, values, items, update, pop…",
      "teach": "\n<div class=\"card\">\n  <h3>dict — kalit → qiymat</h3>\n  <p>Lug‘at (dict) — kalit → qiymat juftliklari. Kalit bo‘yicha tez qidiruv; keys/values/items, get, update, | birlashtirish. Quyida yaratishdan boshlab asosiy amallar ochib beriladi.</p>\n  <h4>1) Yaratish va olish</h4>\n  <p class=\"teach-explain\">dict kalit → qiymat juftliklari: {\"ism\": \"Ali\"}. d[\"ism\"] bilan qiymat olinadi. Tez qidiruv va bog‘lanishlar uchun.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">talaba = {\"ism\": \"Ali\", \"yosh\": 20}\nprint(talaba[\"ism\"])</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">Ali</code></div></div>\n  <h4>2) get — xavfsiz olish</h4>\n  <p class=\"teach-explain\">get(kalit, default) kalit yo‘q bo‘lsa xato qilmaydi — default qaytaradi. d[kalit] esa KeyError berishi mumkin. Ixtiyoriy maydonlar uchun tavsiya.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">d = {\"a\": 1}\nprint(d.get(\"c\", 0))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">0</code></div></div>\n  <h4>3) Qo‘shish / o‘zgartirish</h4>\n  <p class=\"teach-explain\">d[kalit] = qiymat — yo‘q bo‘lsa qo‘shadi, bor bo‘lsa almashtiradi. Bitta sintaksis ikki vazifa. Lug‘atni to‘ldirish asosi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">d = {\"a\": 1}\nd[\"b\"] = 2\nprint(d)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">{'a': 1, 'b': 2}</code></div></div>\n  <h4>4) keys / values / items</h4>\n  <p class=\"teach-explain\">keys() kalitlar, values() qiymatlar, items() juftliklar. Aylanish va ko‘rish uchun. items eng ko‘p ishlatiladi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">d = {\"z\": 1, \"y\": 2}\nprint(sorted(d.keys()))\nprint(list(d.values()))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">['y', 'z']\n[1, 2]\n</pre></div></div>\n  <h4>5) items + for</h4>\n  <p class=\"teach-explain\">for k, v in d.items(): har bir juftlikni ochadi. Lug‘atni chop etish va qayta ishlash. Unpack bilan qulay.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">d = {\"a\": 1, \"b\": 10}\nfor k, v in d.items():\n    print(k, v)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">a 1\nb 10\n</pre></div></div>\n  <h4>6) update</h4>\n  <p class=\"teach-explain\">update({...}) bir necha juftlikni bir yo‘la qo‘shadi/yangilaydi. Ikki dict ni birlashtirish. Sozlamalarni qo‘shishda foydali.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">d = {\"a\": 1}\nd.update({\"b\": 2})\nprint(d)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">{'a': 1, 'b': 2}</code></div></div>\n  <h4>7) pop</h4>\n  <p class=\"teach-explain\">pop(kalit) qiymatni qaytarib, juftlikni o‘chiradi. list.pop ga o‘xshash g‘oya, lekin kalit bo‘yicha. Default berish mumkin: pop(k, None).</p>\n  <div class=\"code-wrap\"><pre class=\"code\">d = {\"a\": 1, \"b\": 2}\nx = d.pop(\"a\")\nprint(x)\nprint(d)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">1\n{'b': 2}\n</pre></div></div>\n  <h4>8) setdefault</h4>\n  <p class=\"teach-explain\">setdefault(k, default) — kalit bo‘lsa qiymatini, yo‘q bo‘lsa default yozib qaytaradi. Hisoblagich/sanoq lug‘atlarida qulay. get dan farqi — yo‘q bo‘lsa yozib qo‘yadi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">d = {}\nprint(d.setdefault(\"x\", 10))\nprint(d[\"x\"])</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><pre class=\"code-out-pre\">10\n10\n</pre></div></div>\n  <h4>9) in — kalit bormi</h4>\n  <p class=\"teach-explain\">k in d — kalit mavjudmi (qiymatni emas). if \"ism\" in d: tekshiruvi. values ichida qidirish boshqa usul.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">d = {\"a\": 1}\nprint(\"a\" in d)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">True</code></div></div>\n  <h4>10) Sanoq (amaliy)</h4>\n  <p class=\"teach-explain\">Lug‘at bilan elementlar necha marta uchrashini sanash mumkin. setdefault yoki Counter g‘oyasi. Matn/ro‘yxat tahlilining klassik misoli.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">sozlar = [\"a\", \"b\", \"a\"]\nd = {}\nfor s in sozlar:\n    d[s] = d.get(s, 0) + 1\nprint(d[\"a\"])</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">2</code></div></div>\n  <div class=\"callout\">Kalit odatda str/int (o‘zgarmas). List kalit bo‘lolmaydi — tuple bo‘la oladi. Yo‘q kalit: <code>d[\"x\"]</code> xato, <code>d.get(\"x\")</code> — None.</div>\n</div>\n",
      "examples": [
        {
          "title": "Yaratish",
          "code": "t = {\"ism\": \"Ali\", \"yosh\": 20}\nprint(t[\"ism\"])",
          "why": "Ali"
        },
        {
          "title": "get",
          "code": "d = {\"a\": 1}\nprint(d.get(\"c\", 0))",
          "why": "0"
        },
        {
          "title": "Yozish",
          "code": "d = {\"a\": 1}\nd[\"b\"] = 2\nprint(d)",
          "why": "{'a': 1, 'b': 2}"
        },
        {
          "title": "keys",
          "code": "print(sorted({\"z\": 1, \"y\": 2}.keys()))",
          "why": "['y', 'z']"
        },
        {
          "title": "items",
          "code": "d = {\"a\": 1, \"b\": 2}\nfor k, v in d.items():\n    print(k)",
          "why": "a keyin b"
        },
        {
          "title": "update",
          "code": "d = {\"a\": 1}\nd.update({\"b\": 2})\nprint(d)",
          "why": "{'a': 1, 'b': 2}"
        },
        {
          "title": "pop",
          "code": "d = {\"a\": 1, \"b\": 2}\nprint(d.pop(\"a\"))\nprint(d)",
          "why": "1 keyin {'b': 2}"
        },
        {
          "title": "setdefault",
          "code": "d = {}\nprint(d.setdefault(\"x\", 10))",
          "why": "10"
        },
        {
          "title": "in",
          "code": "print(\"a\" in {\"a\": 1})",
          "why": "True"
        },
        {
          "title": "Sanoq",
          "code": "sozlar = ['a', 'b', 'a']\nd = {}\nfor s in sozlar:\n    d[s] = d.get(s, 0) + 1\nprint(d['a'])",
          "why": "2"
        }
      ],
      "exercises": [
        {
          "id": "l14-e01",
          "level": "oson",
          "title": "yaratish",
          "task": "«d» nomli o‘zgaruvchiga {'a': 1, 'b': 2} qiymatini bering. d['a'] natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {\"a\": 1, \"b\": 2}\nprint(d[\"a\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "1"
            }
          ]
        },
        {
          "id": "l14-e02",
          "level": "oson",
          "title": "in",
          "task": "«d» nomli o‘zgaruvchiga {'a': 1} qiymatini bering. 'a' in d natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {\"a\": 1}\nprint(\"a\" in d)",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l14-e03",
          "level": "oson",
          "title": "keys",
          "task": "«d» nomli o‘zgaruvchiga {'b': 1, 'a': 2} qiymatini bering. «d» o‘zgaruvchisiga keys() ni oling ni sorted bilan o‘sish tartibida joylashtiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {\"b\": 1, \"a\": 2}\nprint(sorted(d.keys()))",
          "checks": [
            {
              "type": "stdout",
              "equals": "['a', 'b']"
            }
          ]
        },
        {
          "id": "l14-e04",
          "level": "oson",
          "title": "values",
          "task": "«d» nomli o‘zgaruvchiga {'a': 1, 'b': 2} qiymatini bering. list(«d» o‘zgaruvchisiga values() ni oling) qiling va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {\"a\": 1}\nprint(\"a\" in d)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2]"
            }
          ]
        },
        {
          "id": "l14-e05",
          "level": "oson",
          "title": "get",
          "task": "«d» nomli o‘zgaruvchiga {'x': 9} qiymatini bering. «d» o‘zgaruvchisiga get('x') chaqiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {\"b\": 1, \"a\": 2}\nprint(sorted(d.keys()))",
          "checks": [
            {
              "type": "stdout",
              "equals": "9"
            }
          ]
        },
        {
          "id": "l14-e06",
          "level": "oson",
          "title": "update",
          "task": "«d» nomli o‘zgaruvchiga {'a': 1} qiymatini bering. «d» o‘zgaruvchisiga update({'b': 2}) qiling. «d» o‘zgaruvchisiga keys() ni oling ni sorted bilan o‘sish tartibida joylashtiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {\"a\": 1, \"b\": 2}\nprint(list(d.values()))",
          "checks": [
            {
              "type": "stdout",
              "equals": "['a', 'b']"
            }
          ]
        },
        {
          "id": "l14-e07",
          "level": "oson",
          "title": "items",
          "task": "«d» nomli o‘zgaruvchiga {'a': 1} qiymatini bering. for (k, v) in «d» o‘zgaruvchisiga items() ni oling sikli yozing. «k» o‘zgaruvchisini ekranga chiqaring (print). «v» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {\"a\": 1}\nfor k, v in d.items():\n    print(k)\n    print(v)",
          "checks": [
            {
              "type": "stdout",
              "equals": "a\n1"
            }
          ]
        },
        {
          "id": "l14-e08",
          "level": "oson",
          "title": "del",
          "task": "«d» nomli o‘zgaruvchiga {'a': 1, 'b': 2} qiymatini bering. del d['a'] qiling. «d» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {\"x\": 9}\nprint(d.get(\"x\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "{'b': 2}"
            }
          ]
        },
        {
          "id": "l14-e09",
          "level": "oson",
          "title": "fromkeys",
          "task": "«dict» o‘zgaruvchisiga fromkeys(['a', 'b'], 0) va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(dict.fromkeys([\"a\", \"b\"], 0))",
          "checks": [
            {
              "type": "stdout",
              "equals": "{'a': 0, 'b': 0}"
            }
          ]
        },
        {
          "id": "l14-e10",
          "level": "oson",
          "title": "sum values",
          "task": "«d» nomli o‘zgaruvchiga {'a': 1, 'b': 2, 'c': 3} qiymatini bering. «d» o‘zgaruvchisiga values() ni oling yig‘indisini (sum) hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {\"a\": 1, \"b\": 2, \"c\": 3}\nprint(sum(d.values()))",
          "checks": [
            {
              "type": "stdout",
              "equals": "6"
            }
          ]
        },
        {
          "id": "l14-e11",
          "level": "ortacha",
          "title": "merge |",
          "task": "({\"a\":1}|{\"b\":2})[\"b\"] ni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {\"a\": 1}\nfor k, v in d.items():\n    print(k)\n    print(v)",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l14-e12",
          "level": "ortacha",
          "title": "setdefault",
          "task": "«d» nomli o‘zgaruvchiga {'a': 1} qiymatini bering. «d» o‘zgaruvchisiga update({'b': 2}) qiling. «d» o‘zgaruvchisiga keys() ni oling ni sorted bilan o‘sish tartibida joylashtiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {\"a\": 1}\nd.update({\"b\": 2})\nprint(sorted(d.keys()))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[3]"
            }
          ]
        },
        {
          "id": "l14-e13",
          "level": "ortacha",
          "title": "update ustun",
          "task": "«d» nomli o‘zgaruvchiga {'a': 1} qiymatini bering. «d» o‘zgaruvchisiga update({'a': 9}) qiling. d['a'] natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {\"a\": 1}\nd.update({\"a\": 9})\nprint(d[\"a\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "9"
            }
          ]
        },
        {
          "id": "l14-e14",
          "level": "ortacha",
          "title": "comp",
          "task": "dict comprehension ifodasi natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print({n: n * n for n in (1, 2, 3)})",
          "checks": [
            {
              "type": "stdout",
              "equals": "{1: 1, 2: 4, 3: 9}"
            }
          ]
        },
        {
          "id": "l14-e15",
          "level": "ortacha",
          "title": "filter values",
          "task": "«d» nomli o‘zgaruvchiga {'a': 1, 'b': 10, 'c': 5} qiymatini bering. list comprehension ifodasi ni sorted bilan o‘sish tartibida joylashtiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {\"a\": 1, \"b\": 2}\ndel d[\"a\"]\nprint(d)",
          "checks": [
            {
              "type": "stdout",
              "equals": "['b', 'c']"
            }
          ]
        },
        {
          "id": "l14-e16",
          "level": "ortacha",
          "title": "get default",
          "task": "{} uchun get('a', 0) chaqiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print({}.get(\"a\", 0))",
          "checks": [
            {
              "type": "stdout",
              "equals": "0"
            }
          ]
        },
        {
          "id": "l14-e17",
          "level": "ortacha",
          "title": "pop",
          "task": "«d» nomli o‘zgaruvchiga {'a': 1, 'b': 2} qiymatini bering. «d» o‘zgaruvchisiga pop('a') qiling. «d» o‘zgaruvchisiga keys() ni oling ni sorted bilan o‘sish tartibida joylashtiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {\"a\": 1, \"b\": 2}\nd.pop(\"a\")\nprint(sorted(d.keys()))",
          "checks": [
            {
              "type": "stdout",
              "equals": "['b']"
            }
          ]
        },
        {
          "id": "l14-e18",
          "level": "ortacha",
          "title": "talaba",
          "task": "dict.fromkeys([\"a\", \"b\"], 0) yasang va print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(dict.fromkeys([\"a\", \"b\"], 0))",
          "checks": [
            {
              "type": "stdout",
              "equals": "Omar:95"
            }
          ]
        },
        {
          "id": "l14-e19",
          "level": "ortacha",
          "title": "keys sorted",
          "task": "«d» nomli o‘zgaruvchiga {'z': 1, 'y': 2} qiymatini bering. «d» o‘zgaruvchisiga keys() ni oling ni sorted bilan o‘sish tartibida joylashtiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {\"z\": 1, \"y\": 2}\nprint(sorted(d.keys()))",
          "checks": [
            {
              "type": "stdout",
              "equals": "['y', 'z']"
            }
          ]
        },
        {
          "id": "l14-e20",
          "level": "ortacha",
          "title": "in values",
          "task": "«d» nomli o‘zgaruvchiga {'a': 1, 'b': 2} qiymatini bering. 2 in «d» o‘zgaruvchisiga values() ni oling natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {\"a\": 1, \"b\": 2, \"c\": 3}\nprint(sum(d.values()))",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l14-e21",
          "level": "qiyin",
          "title": "Ichma-ich lug‘at",
          "task": "«d» nomli o‘zgaruvchiga {'a': 1, 'b': 2} qiymatini bering. kalit va qiymatni almashtirgan yangi lug‘at (dict comprehension) natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {\"a\": 1, \"b\": 2}\nprint({v: k for k, v in d.items()})",
          "checks": [
            {
              "type": "stdout",
              "equals": "{1: 'a', 2: 'b'}"
            }
          ]
        },
        {
          "id": "l14-e22",
          "level": "qiyin",
          "title": "count words",
          "task": "«sozlar» nomli o‘zgaruvchiga ['a', 'b', 'a'] qiymatini bering. «d» nomli o‘zgaruvchiga {} qiymatini bering. for s in sozlar sikli yozing. for k in d ni sorted bilan o‘sish tartibida joylashtiring siklida kerakli qiymatlarni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "sozlar = [\"a\", \"b\", \"a\"]\nd = {}\nfor s in sozlar:\n    d[s] = d.get(s, 0) + 1\nfor k in sorted(d):\n    print(f\"{k}:{d[k]}\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "a:2\nb:1"
            }
          ]
        },
        {
          "id": "l14-e23",
          "level": "qiyin",
          "title": "merge 3",
          "task": "Ikki lug‘atni | bilan birlashtiring: {\"a\": 1} va {\"b\": 2}. Natijadan \"b\" kaliti qiymatini print qiling.",
          "hint": "Bu set emas — lug‘atlar: d1 | d2 keyin [\"b\"].",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(({\"a\": 1} | {\"b\": 2})[\"b\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l14-e24",
          "level": "qiyin",
          "title": "groupby",
          "task": "«pairs» nomli o‘zgaruvchiga [('a', 1), ('b', 2), ('a', 3)] qiymatini bering. «d» nomli o‘zgaruvchiga {} qiymatini bering. for (k, v) in pairs sikli yozing. d['a'] natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {\"a\": 1}\nd.update({\"a\": 9})\nprint(d[\"a\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 3]"
            }
          ]
        },
        {
          "id": "l14-e25",
          "level": "qiyin",
          "title": "Kalitlar ro‘yxati",
          "task": "Lug‘at kalitlarini sorted qilib ro‘yxat ko‘rinishida print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {'z': 1, 'y': 2}\nprint(sorted(d.keys()))",
          "checks": [
            {
              "type": "stdout",
              "equals": "b"
            }
          ]
        },
        {
          "id": "l14-e26",
          "level": "qiyin",
          "title": "filter dict",
          "task": "kalit va qiymatni almashtirgan yangi lug‘at (dict comprehension) natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print({k: v for k, v in {\"a\": 1, \"b\": 2, \"c\": 3}.items() if v % 2 == 1})",
          "checks": [
            {
              "type": "stdout",
              "equals": "{'a': 1, 'c': 3}"
            }
          ]
        },
        {
          "id": "l14-e27",
          "level": "qiyin",
          "title": "nested get",
          "task": "«d» nomli o‘zgaruvchiga {'a': 1, 'b': 10, 'c': 5} qiymatini bering. list comprehension ifodasi ni sorted bilan o‘sish tartibida joylashtiring va natijani ekranga chiqaring (print).",
          "hint": "items() + shart v >= 5 + sorted.",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {\"a\": 1, \"b\": 10, \"c\": 5}\nprint(sorted([k for k, v in d.items() if v >= 5]))",
          "checks": [
            {
              "type": "stdout",
              "equals": "Ali"
            }
          ]
        },
        {
          "id": "l14-e28",
          "level": "qiyin",
          "title": "budget",
          "task": "Bo‘sh d yarating. setdefault(\"nums\", []) bilan list qo‘ying, unga 3 ni append qiling, d[\"nums\"] ni print qiling.",
          "hint": "setdefault kalit yo‘q bo‘lsa list yaratadi.",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {}\nd.setdefault(\"nums\", []).append(3)\nprint(d[\"nums\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "yetarli"
            }
          ]
        },
        {
          "id": "l14-e29",
          "level": "qiyin",
          "title": "zip dict",
          "task": "1, 2, 3 uchun {n: n*n ...} lug‘at yarating (dict comprehension) va print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print({n: n * n for n in (1, 2, 3)})",
          "checks": [
            {
              "type": "stdout",
              "equals": "{'a': 1, 'b': 2}"
            }
          ]
        },
        {
          "id": "l14-e30",
          "level": "qiyin",
          "title": "clear+set",
          "task": "talaba={\"ism\":\"Omar\",\"ball\":95}. Ekranga Omar:95 chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "talaba = {\"ism\": \"Omar\", \"ball\": 95}\nprint(talaba[\"ism\"] + \":\" + str(talaba[\"ball\"]))",
          "checks": [
            {
              "type": "stdout",
              "equals": "{'b': 2}"
            }
          ]
        }
      ],
      "review": [
        {
          "term": "{\"kalit\": qiymat}",
          "meaning": "dict yaratish"
        },
        {
          "term": "d[\"k\"]",
          "meaning": "Qiymat olish (yo‘q bo‘lsa xato)"
        },
        {
          "term": "d.get(k, default)",
          "meaning": "Xavfsiz olish"
        },
        {
          "term": "d[k] = v",
          "meaning": "Qo‘shish / o‘zgartirish"
        },
        {
          "term": "keys / values / items",
          "meaning": "Kalitlar, qiymatlar, juftliklar"
        },
        {
          "term": "update / pop",
          "meaning": "Yangilash / olib tashlash"
        },
        {
          "term": "setdefault",
          "meaning": "Yo‘q bo‘lsa qo‘yish"
        },
        {
          "term": "k in d",
          "meaning": "Kalit bormi"
        }
      ]
    },
    {
      "id": 15,
      "title": "JSON",
      "subtitle": "dict/list ↔ matn. dumps, loads, dump, load — API va fayllar uchun.",
      "teach": "\n<div class=\"card\">\n  <h3>JSON — ma’lumotni matn ko‘rinishida uzatish</h3>\n  <p>JSON — ma’lumotni matn ko‘rinishida uzatish formati. json.loads/dumps Python obyektiga va aksincha o‘giradi; fayl uchun load/dump. API va sozlamalar bilan ishlashda juda kerak.</p>\n  <h4>1) dumps — Python → JSON matn</h4>\n  <p class=\"teach-explain\">json.dumps(obj) Python obyektini JSON matniga aylantiradi. API, fayl, tarmoq uchun universal format. dict/list asosiy turlar.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">import json\ndata = {\"a\": 1}\nmatn = json.dumps(data)\nprint(matn)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">{\"a\": 1}</code></div></div>\n  <h4>2) loads — JSON matn → Python</h4>\n  <p class=\"teach-explain\">json.loads(matn) JSON matnini Python dict/list ga aylantiradi. Tashqaridan kelgan ma’lumotni o‘qish. dumps ning jufti.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">import json\nobj = json.loads('{\"yosh\": 18}')\nprint(obj[\"yosh\"])</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">18</code></div></div>\n  <h4>3) Roundtrip</h4>\n  <p class=\"teach-explain\">dumps keyin loads — aylana (roundtrip): ma’lumot saqlanib qaytadi. Format to‘g‘riligini tekshirish. Seriyalash tushunchasi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">import json\ns = json.dumps({\"n\": 3})\nprint(json.loads(s)[\"n\"])</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">3</code></div></div>\n  <h4>4) Ro‘yxat JSON</h4>\n  <p class=\"teach-explain\">List ham JSON massiviga aylanadi. dumps/loads list bilan ham ishlaydi. Jadvalli ma’lumot uchun.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">import json\nprint(json.loads(\"[1, 2, 3]\"))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">[1, 2, 3]</code></div></div>\n  <h4>5) dump / load — faylga</h4>\n  <p class=\"teach-explain\">dump faylga yozadi, load fayldan o‘qiydi. dumps/loads matn bilan, dump/load fayl obyekti bilan. Konfiguratsiya saqlash.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">import json\nwith open(\"t.json\", \"w\", encoding=\"utf-8\") as f:\n    json.dump({\"x\": 5}, f)\nwith open(\"t.json\", encoding=\"utf-8\") as f:\n    print(json.load(f)[\"x\"])</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">5</code></div></div>\n  <h4>6) indent — chiroyli yozish</h4>\n  <p class=\"teach-explain\">dumps(..., indent=2) o‘qiladigan, chiqib turadigan JSON beradi. Debug va qo‘lda tahrir uchun. Produksiyada ba’zan ixcham (indent yo‘q) saqlanadi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">import json\ns = json.dumps({\"a\": 1}, indent=2)\nprint(\"a\" in s)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">True</code></div></div>\n  <h4>7) API javobi g‘oya</h4>\n  <p class=\"teach-explain\">Ko‘p API lar JSON qaytaradi — loads bilan Python ga o‘giriladi. Kalitlar orqali kerakli maydon olinadi. Zamonaviy backend/frontend aloqasi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">import json\njavob = '{\"token\": \"abc\", \"ok\": true}'\nobj = json.loads(javob)\nprint(obj[\"token\"])</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">abc</code></div></div>\n  <h4>8) dict yangilab qayta dumps</h4>\n  <p class=\"teach-explain\">Dict ni o‘zgartirib qayta dumps qilish — yangilangan JSON. Sozlama o‘zgartirish oqimi. O‘qish → tahrir → yozish.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">import json\nd = json.loads('{\"a\": 1}')\nd[\"b\"] = 2\nprint(json.loads(json.dumps(d))[\"b\"])</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">2</code></div></div>\n  <div class=\"callout\">JSON da <code>true</code>/<code>false</code>/<code>null</code> — Python da <code>True</code>/<code>False</code>/<code>None</code>. Har doim <code>import json</code>.</div>\n</div>\n",
      "examples": [
        {
          "title": "dumps",
          "code": "import json\nprint(json.dumps({\"a\": 1}))",
          "why": "{\"a\": 1}"
        },
        {
          "title": "loads",
          "code": "import json\nprint(json.loads('{\"yosh\": 18}')[\"yosh\"])",
          "why": "18"
        },
        {
          "title": "Roundtrip",
          "code": "import json\ns = json.dumps({\"n\": 3})\nprint(json.loads(s)[\"n\"])",
          "why": "3"
        },
        {
          "title": "list JSON",
          "code": "import json\nprint(json.loads(\"[1, 2, 3]\"))",
          "why": "[1, 2, 3]"
        },
        {
          "title": "fayl dump/load",
          "code": "import json\nwith open(\"t.json\", \"w\", encoding=\"utf-8\") as f:\n    json.dump({\"x\": 5}, f)\nwith open(\"t.json\", encoding=\"utf-8\") as f:\n    print(json.load(f)[\"x\"])",
          "why": "5"
        },
        {
          "title": "indent",
          "code": "import json\ns = json.dumps({\"a\": 1}, indent=2)\nprint(\"a\" in s)",
          "why": "True"
        },
        {
          "title": "API",
          "code": "import json\nprint(json.loads('{\"token\": \"abc\"}')[\"token\"])",
          "why": "abc"
        },
        {
          "title": "Yangilash",
          "code": "import json\nd = json.loads('{\"a\": 1}')\nd[\"b\"] = 2\nprint(d[\"b\"])",
          "why": "2"
        }
      ],
      "exercises": [
        {
          "id": "l15-e01",
          "level": "oson",
          "title": "loads",
          "task": "json kutubxonasini import qiling. json.loads('{\"x\": 5}') orqali JSON matnini Python qiymatiga aylantiring, keyin ['x'] dagi qiymat natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(json.loads('{\"x\": 5}')[\"x\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "5"
            }
          ]
        },
        {
          "id": "l15-e02",
          "level": "oson",
          "title": "dumps list",
          "task": "json kutubxonasini import qiling. json.dumps([1, 2, 3]) orqali JSON matniga aylantiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(json.loads('{\"x\": 5}')[\"x\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l15-e03",
          "level": "oson",
          "title": "loads list",
          "task": "json kutubxonasini import qiling. json.loads('[10, 20]') orqali JSON matnini Python qiymatiga aylantiring, keyin [1] dagi qiymat natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(json.dumps([1, 2, 3]))",
          "checks": [
            {
              "type": "stdout",
              "equals": "20"
            }
          ]
        },
        {
          "id": "l15-e04",
          "level": "oson",
          "title": "true",
          "task": "json kutubxonasini import qiling. json.loads('true') orqali JSON matnini Python qiymatiga aylantiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(json.loads('[10, 20]')[1])",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l15-e05",
          "level": "oson",
          "title": "null",
          "task": "json kutubxonasini import qiling. json.loads('null') orqali JSON matnini Python qiymatiga aylantiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(json.loads('true'))",
          "checks": [
            {
              "type": "stdout",
              "equals": "None"
            }
          ]
        },
        {
          "id": "l15-e06",
          "level": "oson",
          "title": "dumps str",
          "task": "json kutubxonasini import qiling. json.dumps('salom') orqali JSON matniga aylantiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(json.loads('null'))",
          "checks": [
            {
              "type": "stdout",
              "equals": "\"salom\""
            }
          ]
        },
        {
          "id": "l15-e07",
          "level": "oson",
          "title": "false",
          "task": "json kutubxonasini import qiling. json.loads('false') orqali JSON matnini Python qiymatiga aylantiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(json.dumps(\"salom\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "False"
            }
          ]
        },
        {
          "id": "l15-e08",
          "level": "oson",
          "title": "type",
          "task": "json kutubxonasini import qiling. type(json.loads('{}') orqali JSON matnini Python qiymatiga aylantiring).__name__ natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(sorted(json.loads('{\"b\": 1, \"a\": 2}').keys()))",
          "checks": [
            {
              "type": "stdout",
              "equals": "dict"
            }
          ]
        },
        {
          "id": "l15-e09",
          "level": "oson",
          "title": "len",
          "task": "json kutubxonasini import qiling. json.loads('[1, 2, 3, 4]') orqali JSON matnini Python qiymatiga aylantiring uzunligini (len) hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nd = json.loads('{\"yosh\": 18}')\nprint(d[\"yosh\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "4"
            }
          ]
        },
        {
          "id": "l15-e10",
          "level": "oson",
          "title": "isinstance",
          "task": "json kutubxonasini import qiling. isinstance(json.dumps([1]) orqali JSON matniga aylantiring, str) natijasini tekshiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\ns = json.dumps({'n': 3})\nprint(json.loads(s)['n'])",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l15-e11",
          "level": "ortacha",
          "title": "sort_keys",
          "task": "json kutubxonasini import qiling. json.dumps({'b': 1, 'a': 2}) (sort_keys=True) orqali JSON matniga aylantiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(json.dumps({'b': 1, 'a': 2}, sort_keys=True))",
          "checks": [
            {
              "type": "stdout",
              "equals": "{\"a\": 2, \"b\": 1}"
            }
          ]
        },
        {
          "id": "l15-e12",
          "level": "ortacha",
          "title": "keys",
          "task": "json kutubxonasini import qiling. Matn {\"b\": 1, \"a\": 2} ni json.loads qiling va kalitlarini sorted qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(sorted(json.loads('{\"b\": 1, \"a\": 2}').keys()))",
          "checks": [
            {
              "type": "stdout",
              "equals": "['a', 'b']"
            }
          ]
        },
        {
          "id": "l15-e13",
          "level": "ortacha",
          "title": "nested",
          "task": "json kutubxonasini import qiling. json.loads('{\"u\": {\"ism\": \"Ali\"}}') orqali JSON matnini Python qiymatiga aylantiring, keyin ['u'] dagi qiymat['ism'] natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(json.loads('{\"u\": {\"ism\": \"Ali\"}}')[\"u\"][\"ism\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "Ali"
            }
          ]
        },
        {
          "id": "l15-e14",
          "level": "ortacha",
          "title": "id",
          "task": "json kutubxonasini import qiling. json.loads('[{\"id\": 1}]') orqali JSON matnini Python qiymatiga aylantiring, keyin [0] dagi qiymat['id'] natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(json.loads('{\"u\": {\"ism\": \"Ali\"}}')[\"u\"][\"ism\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "1"
            }
          ]
        },
        {
          "id": "l15-e15",
          "level": "ortacha",
          "title": "append",
          "task": "json kutubxonasini import qiling. «a» nomli o‘zgaruvchiga json.loads('[1, 2]') orqali JSON matnini Python qiymatiga aylantiring qiymatini bering. «a» o‘zgaruvchisiga append(3) qiling. «a» o‘zgaruvchisini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(len(json.loads('[1, 2, 3, 4]')))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l15-e16",
          "level": "ortacha",
          "title": "get",
          "task": "json kutubxonasini import qiling. «s» nomli o‘zgaruvchiga json.dumps({'a': 1}) (indent=2) orqali JSON matniga aylantiring qiymatini bering. 'a' in s natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\ns = json.dumps({'a': 1}, indent=2)\nprint('a' in s)",
          "checks": [
            {
              "type": "stdout",
              "equals": "0"
            }
          ]
        },
        {
          "id": "l15-e17",
          "level": "ortacha",
          "title": "decode",
          "task": "json kutubxonasini import qiling. try/except yozing. Exception bo‘lsa mos xabarni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(json.loads('false'))",
          "checks": [
            {
              "type": "stdout",
              "equals": "xato"
            }
          ]
        },
        {
          "id": "l15-e18",
          "level": "ortacha",
          "title": "roundtrip",
          "task": "json kutubxonasini import qiling. json.loads(json.dumps({'n': 3}) orqali JSON matniga aylantiring) orqali JSON matnini Python qiymatiga aylantiring, keyin ['n'] dagi qiymat natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nd = json.loads('{\"a\": 1}')\nd['b'] = 2\nprint(json.loads(json.dumps(d))['b'])",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l15-e19",
          "level": "ortacha",
          "title": "yosh",
          "task": "json kutubxonasini import qiling. json.loads('{\"yosh\": 18}') orqali JSON matnini Python qiymatiga aylantiring, keyin ['yosh'] dagi qiymat natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(json.loads('[{\"id\": 1}]')[0][\"id\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "18"
            }
          ]
        },
        {
          "id": "l15-e20",
          "level": "ortacha",
          "title": "indent",
          "task": "json kutubxonasini import qiling. «s» nomli o‘zgaruvchiga json.dumps({'a': 1}) (indent=2) orqali JSON matniga aylantiring qiymatini bering. 'a' in s natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(type(json.loads('{}')).__name__)",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l15-e21",
          "level": "qiyin",
          "title": "file",
          "task": "json kutubxonasini import qiling. with open(...) bilan fayl oching va kerakli amallarni bajaring. with open(...) bilan fayl oching va kerakli amallarni bajaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\njavob = '{\"token\": \"abc\"}'\nprint(json.loads(javob)['token'])",
          "checks": [
            {
              "type": "stdout",
              "equals": "15"
            }
          ]
        },
        {
          "id": "l15-e22",
          "level": "qiyin",
          "title": "merge",
          "task": "json kutubxonasini import qiling. «a» nomli o‘zgaruvchiga json.loads('{\"a\": 1}') orqali JSON matnini Python qiymatiga aylantiring qiymatini bering. «b» nomli o‘zgaruvchiga json.loads('{\"b\": 2}') orqali JSON matnini Python qiymatiga aylantiring qiymatini bering. a | b['b'] natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\na = json.loads('{\"a\": 1}')\nb = json.loads('{\"b\": 2}')\nprint((a | b)[\"b\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l15-e23",
          "level": "qiyin",
          "title": "filter dumps",
          "task": "json kutubxonasini import qiling. «obj» nomli o‘zgaruvchiga {'a': 1, 'b': 2, 'c': 3} qiymatini bering. json.dumps(kalit va qiymatni almashtirgan yangi lug‘at (dict comprehension)) (sort_keys=True) orqali JSON matniga aylantiring va natijani ekranga chiqaring (print).",
          "hint": "json.dumps(obj, sort_keys=True)",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(json.dumps({'b': 1, 'a': 2}, sort_keys=True))",
          "checks": [
            {
              "type": "stdout",
              "equals": "{\"b\": 2}"
            }
          ]
        },
        {
          "id": "l15-e24",
          "level": "qiyin",
          "title": "sum n",
          "task": "json kutubxonasini import qiling. (x['n'] for x in json.loads('[{\"n\": 1}, {\"n\": 2}]')) yig‘indisini (sum) hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\ntry:\n    json.loads('{bad')\nexcept json.JSONDecodeError:\n    print('xato')",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l15-e25",
          "level": "qiyin",
          "title": "safe",
          "task": "json kutubxonasini import qiling. «cfg» nomli o‘zgaruvchiga {'host': 'localhost', 'port': 8080} qiymatini bering. json.loads(json.dumps(cfg) orqali JSON matniga aylantiring) orqali JSON matnini Python qiymatiga aylantiring, keyin ['port'] dagi qiymat natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\ncfg = {'host': 'localhost', 'port': 8080}\nprint(json.loads(json.dumps(cfg))['port'])",
          "checks": [
            {
              "type": "stdout",
              "equals": "None"
            }
          ]
        },
        {
          "id": "l15-e26",
          "level": "qiyin",
          "title": "port",
          "task": "json kutubxonasini import qiling. json.loads(json.dumps({'host': 'localhost', 'port': 8080}) orqali JSON matniga aylantiring) orqali JSON matnini Python qiymatiga aylantiring, keyin ['port'] dagi qiymat natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\na = json.loads('[1, 2]')\na.append(3)\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "8080"
            }
          ]
        },
        {
          "id": "l15-e27",
          "level": "qiyin",
          "title": "token",
          "task": "json kutubxonasini import qiling. json.loads('{\"token\": \"abc\"}') orqali JSON matnini Python qiymatiga aylantiring, keyin ['token'] dagi qiymat natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(json.loads('{\"a\": 1}').get(\"b\", 0))",
          "checks": [
            {
              "type": "stdout",
              "equals": "abc"
            }
          ]
        },
        {
          "id": "l15-e28",
          "level": "qiyin",
          "title": "update",
          "task": "json kutubxonasini import qiling. «d» nomli o‘zgaruvchiga json.loads('{\"a\": 1}') orqali JSON matnini Python qiymatiga aylantiring qiymatini bering. «d» ning ['b'] elementiga 2 qiymatini bering. json.loads(json.dumps(d) orqali JSON matniga aylantiring) orqali JSON matnini Python qiymatiga aylantiring, keyin ['b'] dagi qiymat natijasini ekranga chiqaring (p….",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(isinstance(json.dumps([1]), str))",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l15-e29",
          "level": "qiyin",
          "title": "len keys",
          "task": "json kutubxonasini import qiling. json.loads('{\"a\": 1, \"b\": {\"c\": 2}}') orqali JSON matnini Python qiymatiga aylantiring uzunligini (len) hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nwith open(\"data.json\", \"w\", encoding=\"utf-8\") as f:\n    json.dump({\"jami\": 15}, f)\nwith open(\"data.json\", \"r\", encoding=\"utf-8\") as f:\n    print(json.load(f)[\"jami\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l15-e30",
          "level": "qiyin",
          "title": "filter list",
          "task": "json kutubxonasini import qiling. «a» nomli o‘zgaruvchiga json.loads(json.dumps([1, 2, 3, 4]) orqali JSON matniga aylantiring) orqali JSON matnini Python qiymatiga aylantiring qiymatini bering. list comprehension ifodasi natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\na = json.loads('{\"a\": 1}')\nb = json.loads('{\"b\": 2}')\nprint((a | b)['b'])",
          "checks": [
            {
              "type": "stdout",
              "equals": "[3, 4]"
            }
          ]
        }
      ],
      "review": [
        {
          "term": "import json",
          "meaning": "JSON moduli"
        },
        {
          "term": "json.dumps",
          "meaning": "Python → JSON matn"
        },
        {
          "term": "json.loads",
          "meaning": "JSON matn → Python"
        },
        {
          "term": "json.dump / load",
          "meaning": "Faylga yozish / o‘qish"
        },
        {
          "term": "indent=2",
          "meaning": "Chiroyli format"
        },
        {
          "term": "true/false/null",
          "meaning": "JSON → True/False/None"
        },
        {
          "term": "API javobi",
          "meaning": "loads + dict kalitlari"
        }
      ]
    },
    {
      "id": 16,
      "title": "Kutubxonalar (import)",
      "subtitle": "math, random, datetime — tayyor vositalar.",
      "teach": "\n<div class=\"card\">\n  <h3>Kutubxona — tayyor vositalar to‘plami</h3>\n  <p>import bilan tayyor kutubxonani ulaysiz: math, random, datetime. Qayta ixtiro qilmasdan sqrt, randint, date kabi vositalardan foydalanasiz. Har bir modulning odatiy funksiyalari quyida.</p>\n\n  <h4>1) import moduli</h4>\n  <p class=\"teach-explain\">import math modulni yuklaydi; math.sqrt kabi chaqiriladi. Tayyor funksiyalar kutubxonasidan foydalanish. Kodni qayta ixtiro qilmaslik.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">import math\nprint(math.sqrt(9))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">3.0</code></div></div>\n\n  <h4>2) from ... import ...</h4>\n  <p class=\"teach-explain\">from math import ceil — faqat kerakli nomni oladi. ceil(3.2) deb to‘g‘ridan-to‘g‘ri chaqirasiz. Qisqa yozuv, lekin nom to‘qnashuvi ehtimoli.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">from math import ceil\nprint(ceil(2.2))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">3</code></div></div>\n\n  <h4>3) floor — pastga yaxlitlash</h4>\n  <p class=\"teach-explain\">math.floor kasrni pastga (kichik tomonga) butunlaydi. ceil tepaga. Moliyaviy/o‘yin hisoblarida farq qiladi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">from math import floor\nprint(floor(2.8))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">2</code></div></div>\n\n  <h4>4) fabs — absolyut qiymat</h4>\n  <p class=\"teach-explain\">math.fabs manfiy sonni musbat qiladi (float). abs() ham bor — umumiyroq. Masofa, farq modullari.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">from math import fabs\nprint(fabs(-3))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">3.0</code></div></div>\n\n  <h4>5) pow — daraja</h4>\n  <p class=\"teach-explain\">pow(a, b) yoki a ** b daraja. math.pow float qaytarishi mumkin. Hisob-kitobda daraja.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">from math import pow\nprint(pow(2, 3))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">8.0</code></div></div>\n\n  <h4>6) random.randint</h4>\n  <p class=\"teach-explain\">randint(a, b) a dan b gacha (ikkalasi ham) tasodifiy butun son. O‘yin, test, aralash tanlov. import random kerak.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">from random import seed, randint\nseed(0)\nprint(randint(5, 5))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">5</code></div></div>\n\n  <h4>7) math.pi va e</h4>\n  <p class=\"teach-explain\">math.pi va math.e — tayyor konstantalar. Geometriya va ilmiy hisob. Qo‘lda 3.14 yozishdan aniqroq.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">import math\nprint(int(math.e))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">2</code></div></div>\n\n  <h4>8) hypot — gipotenuza</h4>\n  <p class=\"teach-explain\">math.hypot(x, y) √(x²+y²) — gipotenuza/masofa. Ikki tomonli to‘g‘ri burchakli uchburchak. Koordinata masofasi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">from math import hypot\nprint(hypot(3, 4))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">5.0</code></div></div>\n\n  <h4>9) factorial</h4>\n  <p class=\"teach-explain\">math.factorial(n) n! hisoblaydi. Kombinatorika, ehtimollik. n manfiy bo‘lmasligi kerak.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">from math import factorial\nprint(factorial(5))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">120</code></div></div>\n\n  <h4>10) datetime.date</h4>\n  <p class=\"teach-explain\">datetime.date sana bilan ishlash: yil-oy-kun. Bugungi sana, farq, formatlash. import datetime yoki from datetime import date.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">from datetime import date\nd = date(2026, 10, 27)\nprint(d.month)</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">10</code></div></div>\n\n  <h4>11) gcd — eng katta umumiy bo‘luvchi</h4>\n  <p class=\"teach-explain\">math.gcd(a, b) eng katta umumiy bo‘luvchi. Kasrlarni qisqartirish, algoritmlar. Ikki sonning umumiy bo‘luvchisi.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">from math import gcd\nprint(gcd(12, 8))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">4</code></div></div>\n\n  <h4>12) choice — ro‘yxatdan tanlash</h4>\n  <p class=\"teach-explain\">random.choice(seq) ro‘yxatdan bitta tasodifiy element. Tasodifiy savol, mukofot, aralash. Bo‘sh ketma-ketlikda xato.</p>\n  <div class=\"code-wrap\"><pre class=\"code\">from random import choice\nprint(choice([10, 10, 10]))</pre><div class=\"code-out\"><div class=\"code-out-label\">Natija</div><code class=\"code-out-val\">10</code></div></div>\n\n  <div class=\"callout\"><strong>Eslatma:</strong> Avval <code>import</code>, keyin foydalanish. Noma’lum funksiyani hujjatdan yoki dars misollaridan o‘rganing.</div>\n</div>\n",
      "examples": [
        {
          "title": "sqrt",
          "code": "import math\nprint(math.sqrt(9))",
          "why": "3.0"
        },
        {
          "title": "ceil",
          "code": "from math import ceil\nprint(ceil(2.2))",
          "why": "3"
        },
        {
          "title": "floor",
          "code": "from math import floor\nprint(floor(2.8))",
          "why": "2"
        },
        {
          "title": "fabs",
          "code": "from math import fabs\nprint(fabs(-3))",
          "why": "3.0"
        },
        {
          "title": "pow",
          "code": "from math import pow\nprint(pow(2, 3))",
          "why": "8.0"
        },
        {
          "title": "randint + seed",
          "code": "from random import seed, randint\nseed(0)\nprint(randint(5, 5))",
          "why": "5"
        },
        {
          "title": "hypot",
          "code": "from math import hypot\nprint(hypot(3, 4))",
          "why": "5.0"
        },
        {
          "title": "factorial",
          "code": "from math import factorial\nprint(factorial(5))",
          "why": "120"
        },
        {
          "title": "date.month",
          "code": "from datetime import date\nprint(date(2026, 10, 27).month)",
          "why": "10"
        },
        {
          "title": "gcd",
          "code": "from math import gcd\nprint(gcd(12, 8))",
          "why": "4"
        },
        {
          "title": "choice",
          "code": "from random import choice\nprint(choice([10, 10, 10]))",
          "why": "10"
        },
        {
          "title": "pi yuza",
          "code": "import math\nr = 2\nprint(round(math.pi * r ** 2, 2))",
          "why": "12.57"
        }
      ],
      "exercises": [
        {
          "id": "l16-e01",
          "level": "oson",
          "title": "sqrt",
          "task": "math kutubxonasini import qiling. math.sqrt(9) natijasini hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nprint(math.sqrt(9))",
          "checks": [
            {
              "type": "stdout",
              "equals": "3.0"
            }
          ]
        },
        {
          "id": "l16-e02",
          "level": "oson",
          "title": "pi",
          "task": "math kutubxonasini import qiling. math.pi natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nprint(math.pi)",
          "checks": [
            {
              "type": "stdout_contains",
              "text": "3.14"
            }
          ]
        },
        {
          "id": "l16-e03",
          "level": "oson",
          "title": "ceil",
          "task": "math kutubxonasini import qiling. math.ceil(2.2) natijasini hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nprint(math.ceil(2.2))",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l16-e04",
          "level": "oson",
          "title": "floor",
          "task": "math kutubxonasini import qiling. math.floor(2.8) natijasini hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nprint(math.floor(2.8))",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l16-e05",
          "level": "oson",
          "title": "fabs",
          "task": "math kutubxonasini import qiling. math.fabs(-3) natijasini hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nprint(math.fabs(-3))",
          "checks": [
            {
              "type": "stdout",
              "equals": "3.0"
            }
          ]
        },
        {
          "id": "l16-e06",
          "level": "oson",
          "title": "pow",
          "task": "math kutubxonasini import qiling. math.pow(2, 3) natijasini hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nprint(math.pow(2, 3))",
          "checks": [
            {
              "type": "stdout",
              "equals": "8.0"
            }
          ]
        },
        {
          "id": "l16-e07",
          "level": "oson",
          "title": "factorial",
          "task": "math kutubxonasini import qiling. math.factorial(5) natijasini hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "from random import seed, randint\nseed(0)\nprint(randint(5, 5))",
          "checks": [
            {
              "type": "stdout",
              "equals": "120"
            }
          ]
        },
        {
          "id": "l16-e08",
          "level": "oson",
          "title": "year",
          "task": "datetime dan date ni import qiling. date(2026, 1, 1).year natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "from datetime import date\nprint(date(2026, 1, 1).year)",
          "checks": [
            {
              "type": "stdout",
              "equals": "2026"
            }
          ]
        },
        {
          "id": "l16-e09",
          "level": "oson",
          "title": "randint",
          "task": "random dan seed, randint ni import qiling. seed(0). randint(5, 5) va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nprint(int(math.e))",
          "checks": [
            {
              "type": "stdout",
              "equals": "5"
            }
          ]
        },
        {
          "id": "l16-e10",
          "level": "oson",
          "title": "hypot",
          "task": "math kutubxonasini import qiling. math.hypot(3, 4) natijasini hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nprint(int(math.sqrt(16)))",
          "checks": [
            {
              "type": "stdout",
              "equals": "5.0"
            }
          ]
        },
        {
          "id": "l16-e11",
          "level": "ortacha",
          "title": "gcd",
          "task": "math kutubxonasini import qiling. math.gcd(12, 8) natijasini hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nprint(math.hypot(3, 4))",
          "checks": [
            {
              "type": "stdout",
              "equals": "4"
            }
          ]
        },
        {
          "id": "l16-e12",
          "level": "ortacha",
          "title": "comb",
          "task": "math kutubxonasini import qiling. math.comb(5, 2) natijasini hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nprint(math.factorial(5))",
          "checks": [
            {
              "type": "stdout",
              "equals": "10"
            }
          ]
        },
        {
          "id": "l16-e13",
          "level": "ortacha",
          "title": "month",
          "task": "datetime dan date ni import qiling. date(2026, 10, 1).month natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "from random import choice\nprint(choice([10, 10, 10]))",
          "checks": [
            {
              "type": "stdout",
              "equals": "10"
            }
          ]
        },
        {
          "id": "l16-e14",
          "level": "ortacha",
          "title": "days",
          "task": "datetime dan date ni import qiling. date(2026, 1, 2) - date(2026, 1, 1).days natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "from datetime import date\nprint(date(2026, 10, 1).month)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1"
            }
          ]
        },
        {
          "id": "l16-e15",
          "level": "ortacha",
          "title": "log10",
          "task": "math kutubxonasini import qiling. math.log10(100) natijasini hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nprint(math.log10(100))",
          "checks": [
            {
              "type": "stdout",
              "equals": "2.0"
            }
          ]
        },
        {
          "id": "l16-e16",
          "level": "ortacha",
          "title": "trunc",
          "task": "math kutubxonasini import qiling. math.trunc(3.9) natijasini hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nprint(math.trunc(3.9))",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l16-e17",
          "level": "ortacha",
          "title": "choice",
          "task": "random dan choice ni import qiling. choice([10, 10, 10]) va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "from random import randrange\nprint(randrange(2, 3))",
          "checks": [
            {
              "type": "stdout",
              "equals": "10"
            }
          ]
        },
        {
          "id": "l16-e18",
          "level": "ortacha",
          "title": "sample",
          "task": "random dan sample ni import qiling. sample([1, 2, 3], 3) ni sorted bilan o‘sish tartibida joylashtiring va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "from datetime import date\nprint((date(2026, 1, 2) - date(2026, 1, 1)).days)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l16-e19",
          "level": "ortacha",
          "title": "isqrt",
          "task": "math kutubxonasini import qiling. math.isqrt(10) natijasini hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nprint(math.gcd(12, 8))",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l16-e20",
          "level": "ortacha",
          "title": "prod",
          "task": "math kutubxonasini import qiling. math.prod([2, 3, 4]) natijasini hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nprint(int(math.degrees(math.pi)))",
          "checks": [
            {
              "type": "stdout",
              "equals": "24"
            }
          ]
        },
        {
          "id": "l16-e21",
          "level": "qiyin",
          "title": "doira",
          "task": "math kutubxonasini import qiling. «r» nomli o‘zgaruvchiga 2 qiymatini bering. round(math.pi * (r ** 2), 2) qiling va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nr = 2\nprint(round(math.pi * r ** 2, 2))",
          "checks": [
            {
              "type": "stdout",
              "equals": "12.57"
            }
          ]
        },
        {
          "id": "l16-e22",
          "level": "qiyin",
          "title": "weekday",
          "task": "datetime dan date ni import qiling. date(2026, 1, 6).weekday() va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "from random import sample\nprint(sorted(sample([1, 2, 3], 3)))",
          "checks": [
            {
              "type": "stdout",
              "equals": "1"
            }
          ]
        },
        {
          "id": "l16-e23",
          "level": "qiyin",
          "title": "sqrt list",
          "task": "math kutubxonasini import qiling. for n in [4, 9, 16] siklida kerakli qiymatlarni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "from datetime import date\nprint(date(2026, 1, 6).weekday())",
          "checks": [
            {
              "type": "stdout",
              "equals": "2\n3\n4"
            }
          ]
        },
        {
          "id": "l16-e24",
          "level": "qiyin",
          "title": "degrees",
          "task": "math kutubxonasini import qiling. int(math.degrees(math.pi) natijasini hisoblang) qiling va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nprint(math.comb(5, 2))",
          "checks": [
            {
              "type": "stdout",
              "equals": "180"
            }
          ]
        },
        {
          "id": "l16-e25",
          "level": "qiyin",
          "title": "log2",
          "task": "math kutubxonasini import qiling. int(math.log(8, 2) natijasini hisoblang) qiling va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nprint(math.isqrt(10))",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l16-e26",
          "level": "qiyin",
          "title": "hour",
          "task": "datetime dan datetime ni import qiling. datetime(2026, 1, 1, 15, 0).hour natijasini ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nprint(math.prod([2, 3, 4]))",
          "checks": [
            {
              "type": "stdout",
              "equals": "15"
            }
          ]
        },
        {
          "id": "l16-e27",
          "level": "qiyin",
          "title": "e",
          "task": "math kutubxonasini import qiling. int(math.e) qiling va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "from datetime import datetime\nprint(datetime(2026, 1, 1, 15, 0).hour)",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l16-e28",
          "level": "qiyin",
          "title": "dist",
          "task": "math kutubxonasini import qiling. math.hypot(3, 4) natijasini hisoblang va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nprint(int(math.log(8, 2)))",
          "checks": [
            {
              "type": "stdout",
              "equals": "5.0"
            }
          ]
        },
        {
          "id": "l16-e29",
          "level": "qiyin",
          "title": "randrange",
          "task": "random dan randrange ni import qiling. randrange(2, 3) va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nprint(math.hypot(3, 4))",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l16-e30",
          "level": "qiyin",
          "title": "kombo",
          "task": "math kutubxonasini import qiling. int(math.sqrt(16) natijasini hisoblang + math.factorial(3) natijasini hisoblang) qiling va natijani ekranga chiqaring (print).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import math\nfor n in [4, 9, 16]:\n    print(int(math.sqrt(n)))",
          "checks": [
            {
              "type": "stdout",
              "equals": "10"
            }
          ]
        }
      ],
      "review": [
        {
          "term": "import math",
          "meaning": "Modulni ulash"
        },
        {
          "term": "from math import ...",
          "meaning": "Alohida funksiyani olish"
        },
        {
          "term": "sqrt / ceil / floor",
          "meaning": "Ildiz, yuqori/past yaxlitlash"
        },
        {
          "term": "pow / fabs / hypot",
          "meaning": "Daraja, absolyut, gipotenuza"
        },
        {
          "term": "factorial / gcd",
          "meaning": "Faktorial, EKUB"
        },
        {
          "term": "random + seed",
          "meaning": "Tasodif (takrorlanadigan test)"
        },
        {
          "term": "randint / choice",
          "meaning": "Son / ro‘yxatdan tanlash"
        },
        {
          "term": "datetime.date",
          "meaning": "Sana bilan ishlash"
        }
      ]
    }
  ]
};
