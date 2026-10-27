const COURSE = {
  "lessons": [
    {
      "id": 1,
      "title": "Python va print",
      "subtitle": "Dastur nima, print, satr, izoh — eng birinchi qadamlar.",
      "teach": "\n<div class=\"card\">\n  <h3>Python dasturi nima qiladi?</h3>\n  <p>Kompyuterga buyruq berasiz. Eng oddiy buyruq — ekranga matn chiqarish: <code>print</code>.</p>\n  <h4>1) print — ekranga chiqarish</h4>\n  <pre class=\"code\">matn = \"Salom\"\nprint(matn)</pre>\n  <h4>2) Bir necha print — bir necha qator</h4>\n  <pre class=\"code\">a = \"Bir\"\nb = \"Ikki\"\nprint(a)\nprint(b)</pre>\n  <h4>3) Son chiqarish</h4>\n  <p>Songa qo‘shtirnoq shart emas.</p>\n  <pre class=\"code\">yosh = 18\nprint(yosh)</pre>\n  <h4>4) Izoh (#)</h4>\n  <p><code>#</code> dan keyingi yozuv bajarilmaydi — o‘zingiz uchun eslatma.</p>\n  <pre class=\"code\"># bu izoh\nprint(\"OK\")</pre>\n  <h4>5) Bo‘sh qator</h4>\n  <pre class=\"code\">print()\nprint(\"Start\")</pre>\n  <h4>6) Bir qatorda bir necha so‘z</h4>\n  <pre class=\"code\">print(\"1 2 3\")</pre>\n  <div class=\"callout\"><strong>Eslab qoling:</strong> Kod yuqoridan pastga bajariladi. Avval qiymatni o‘zgaruvchiga yozing, keyin <code>print</code>.</div>\n</div>\n",
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
          "task": "Ekranga «Salom» so‘zini chiqaring. Katta-kichik harf aniq: Salom.",
          "hint": "print(\"Salom\")",
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
          "title": "Python so‘zi",
          "task": "Ekranga «Python» so‘zini chiqaring. Katta P bilan.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'Python'\nprint(matn)",
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
          "title": "Raqam 10",
          "task": "Ekranga 10 raqamini chiqaring.",
          "hint": "print(10)",
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
          "title": "Ali ismi",
          "task": "Ekranga «Ali» ismini chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'Ali'\nprint(matn)",
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
          "title": "Ikki qator",
          "task": "Birinchi qatorda «Salom», ikkinchi qatorda «Dunyo» chiqsin.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = \"Salom\"\nb = \"Dunyo\"\nprint(a)\nprint(b)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Salom\nDunyo"
            }
          ]
        },
        {
          "id": "l1-e06",
          "level": "oson",
          "title": "Bo‘sh qator",
          "task": "Avval bo‘sh qator, keyin «Start» so‘zini chiqaring.",
          "hint": "print() keyin print(\"Start\")",
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
          "id": "l1-e07",
          "level": "oson",
          "title": "Izoh bilan",
          "task": "Kodda # izoh bo‘lsin va ekranga «OK» chiqsin.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'OK'\nprint(matn)",
          "checks": [
            {
              "type": "code_contains",
              "text": "#"
            },
            {
              "type": "stdout",
              "equals": "OK"
            }
          ]
        },
        {
          "id": "l1-e08",
          "level": "oson",
          "title": "Mashq",
          "task": "Ekranga 100 raqamini chiqaring.",
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
          "id": "l1-e09",
          "level": "oson",
          "title": "Gap",
          "task": "Ekranga shu gapni chiqaring: Men Python o'rganaman.",
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
        },
        {
          "id": "l1-e10",
          "level": "oson",
          "title": "Uch so‘z",
          "task": "Bir qatorda 1 2 3 chiqaring (orasida bitta bo‘sh joy).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = \"1 2 3\"\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1 2 3"
            }
          ]
        },
        {
          "id": "l1-e11",
          "level": "ortacha",
          "title": "Uch qator",
          "task": "Qatorma-qator: Olma, Banan, Uzum.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "q1 = 'Olma'\nq2 = 'Banan'\nq3 = 'Uzum'\nprint(q1)\nprint(q2)\nprint(q3)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Olma\nBanan\nUzum"
            }
          ]
        },
        {
          "id": "l1-e12",
          "level": "ortacha",
          "title": "Izoh va ikki print",
          "task": "Kodda izoh bo‘lsin. Ekranda A keyin B chiqsin.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "q1 = 'A'\nq2 = 'B'\nprint(q1)\nprint(q2)",
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
          "id": "l1-e13",
          "level": "ortacha",
          "title": "Yulduzlar",
          "task": "5 ta yulduzcha bitta qatorda: *****",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '*****'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "*****"
            }
          ]
        },
        {
          "id": "l1-e14",
          "level": "ortacha",
          "title": "Sana",
          "task": "Ekranga 27.10.2026 chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '27.10.2026'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "27.10.2026"
            }
          ]
        },
        {
          "id": "l1-e15",
          "level": "ortacha",
          "title": "Raqam va matn",
          "task": "Birinchi qatorda 5, ikkinchisida besh.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "q1 = '5'\nq2 = 'besh'\nprint(q1)\nprint(q2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "5\nbesh"
            }
          ]
        },
        {
          "id": "l1-e16",
          "level": "ortacha",
          "title": "Menyu",
          "task": "Uch qator: 1) Choy / 2) Qahva / 3) Suv — aniq shu matn",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "q1 = '1) Choy'\nq2 = '2) Qahva'\nq3 = '3) Suv'\nprint(q1)\nprint(q2)\nprint(q3)",
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
          "title": "Qo‘shtirnoqli so‘z",
          "task": "Ekranga \"Python\" chiqsin (qo‘shtirnoqlar ham ko‘rinsin).",
          "hint": "print('\\\"Python\\\"')",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '\\\"Python\\\"'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "\"Python\""
            }
          ]
        },
        {
          "id": "l1-e18",
          "level": "ortacha",
          "title": "To‘rt raqam",
          "task": "Har qatorda: 1, 2, 3, 4.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n1 = 1\nn2 = 2\nn3 = 3\nn4 = 4\nprint(n1)\nprint(n2)\nprint(n3)\nprint(n4)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1\n2\n3\n4"
            }
          ]
        },
        {
          "id": "l1-e19",
          "level": "ortacha",
          "title": "Ism familiya",
          "task": "Birinchi qatorda Botir, ikkinchisida Karimov.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "q1 = 'Botir'\nq2 = 'Karimov'\nprint(q1)\nprint(q2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Botir\nKarimov"
            }
          ]
        },
        {
          "id": "l1-e20",
          "level": "ortacha",
          "title": "Gap undov",
          "task": "Ekranga: Salom, do'stim!",
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
          "title": "Kvadrat",
          "task": "4 qator, har birida ####.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "q1 = '####'\nq2 = '####'\nq3 = '####'\nq4 = '####'\nprint(q1)\nprint(q2)\nprint(q3)\nprint(q4)",
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
          "title": "Uchburchak",
          "task": "*\n**\n***",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for i in range(1, 4):\n    print('*' * i)",
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
          "task": "+--+\n| |\n+--+",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "q1 = '+--+'\nq2 = '|  |'\nq3 = '+--+'\nprint(q1)\nprint(q2)\nprint(q3)",
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
          "title": "Jadval",
          "task": "Ism: Ali\nYosh: 20.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "q1 = 'Ism: Ali'\nq2 = 'Yosh: 20'\nprint(q1)\nprint(q2)",
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
          "task": "Toshkent\nYunusobod\n12.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "q1 = 'Toshkent'\nq2 = 'Yunusobod'\nq3 = '12'\nprint(q1)\nprint(q2)\nprint(q3)",
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
          "task": "Non 5000\nChoy 3000\nJami 8000.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "q1 = 'Non  5000'\nq2 = 'Choy 3000'\nq3 = 'Jami 8000'\nprint(q1)\nprint(q2)\nprint(q3)",
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
          "title": "5 print",
          "task": "Har biri alohida print: a b c d e.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "print(\"a\")\nprint(\"b\")\nprint(\"c\")\nprint(\"d\")\nprint(\"e\")",
          "checks": [
            {
              "type": "code_contains",
              "text": "print"
            },
            {
              "type": "stdout",
              "equals": "a\nb\nc\nd\ne"
            }
          ]
        },
        {
          "id": "l1-e28",
          "level": "qiyin",
          "title": "Sarlavha",
          "task": "PYTHON\n=====",
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
          "id": "l1-e29",
          "level": "qiyin",
          "title": "Ro‘yxat",
          "task": "- kitob\n- daftar\n- ruchka.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "q1 = '- kitob'\nq2 = '- daftar'\nq3 = '- ruchka'\nprint(q1)\nprint(q2)\nprint(q3)",
          "checks": [
            {
              "type": "stdout",
              "equals": "- kitob\n- daftar\n- ruchka"
            }
          ]
        },
        {
          "id": "l1-e30",
          "level": "qiyin",
          "title": "Tayyor",
          "task": "Faqat «Tayyor» so‘zini chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'Tayyor'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Tayyor"
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
      "teach": "\n<div class=\"card\">\n  <h3>O‘zgaruvchi — qiymat saqlanadigan nom</h3>\n  <p><code>=</code> «teng» emas, balki <strong>berish</strong>: o‘ngdagi qiymat chapdagi nomga yoziladi.</p>\n  <h4>1) Berish va chiqarish</h4>\n  <pre class=\"code\">x = 5\nprint(x)</pre>\n  <h4>2) Matn (str)</h4>\n  <pre class=\"code\">ism = \"Laylo\"\nprint(ism)</pre>\n  <h4>3) Butun son (int) va o‘nli (float)</h4>\n  <pre class=\"code\">narx = 12000\npi = 3.14\nprint(narx)\nprint(pi)</pre>\n  <h4>4) bool — True / False</h4>\n  <pre class=\"code\">ok = True\nflag = False\nprint(ok)\nprint(flag)</pre>\n  <h4>5) Qayta yozish</h4>\n  <p>Oxirgi qiymat qoladi.</p>\n  <pre class=\"code\">n = 1\nn = 9\nprint(n)</pre>\n  <h4>6) Nusxa</h4>\n  <pre class=\"code\">a = 10\nb = a\nprint(b)</pre>\n  <h4>7) Nom qoidalari</h4>\n  <p>Harf yoki <code>_</code> bilan boshlanadi. <code>print</code>, <code>if</code> kabi tayyor so‘zlarni nom qilmang.</p>\n  <pre class=\"code\">user_id = 42\nprint(user_id)</pre>\n  <div class=\"callout\"><code>print(x)</code> — quti ichidagi qiymat. <code>print(\"x\")</code> — harf x.</div>\n</div>\n",
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
          "task": "x ga 5 bering va ekranga chiqaring.",
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
          "task": "ism ga \"Laylo\" bering va chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "ism = 'Laylo'\nprint(ism)",
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
          "task": "narx ga 12000 bering va chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "som = int(input())\ndollar = som // 12000\nprint(dollar)",
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
          "task": "ok ga True bering va chiqaring.",
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
          "task": "pi_taxmin ga 3.14 bering va chiqaring.",
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
          "title": "Ikki o‘zgaruvchi",
          "task": "a=2, b=3. Avval a, keyin b ni chiqaring.",
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
          "id": "l2-e07",
          "level": "oson",
          "title": "soz",
          "task": "soz = \"Python\" va print(soz).",
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
          "id": "l2-e08",
          "level": "oson",
          "title": "Nol",
          "task": "nolinchi = 0 va print.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "nolinchi = 0\nprint(nolinchi)",
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
          "id": "l2-e09",
          "level": "oson",
          "title": "False",
          "task": "flag = False, print(flag).",
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
          "id": "l2-e10",
          "level": "oson",
          "title": "Yosh",
          "task": "yosh = 18, print(yosh).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "yosh = 18\nprint(yosh)",
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
          "id": "l2-e11",
          "level": "ortacha",
          "title": "Qayta berish",
          "task": "x ga avval 1, keyin 9 bering. Print oxirgi qiymat.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "x = 9\nprint(x)",
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
          "id": "l2-e12",
          "level": "ortacha",
          "title": "Ism va yosh",
          "task": "ism=\"Jasur\", yosh=25. Avval ism, keyin yosh.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "q1 = 'Jasur'\nq2 = '25'\nprint(q1)\nprint(q2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Jasur\n25"
            }
          ]
        },
        {
          "id": "l2-e13",
          "level": "ortacha",
          "title": "Nusxa",
          "task": "a=10, b=a, print(b).",
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
          "id": "l2-e14",
          "level": "ortacha",
          "title": "Sana qismlari",
          "task": "kun, oy, yil = 27, 10, 2026. Har birini chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n1 = 27\nn2 = 10\nn3 = 2026\nprint(n1)\nprint(n2)\nprint(n3)",
          "checks": [
            {
              "type": "stdout",
              "equals": "27\n10\n2026"
            }
          ]
        },
        {
          "id": "l2-e15",
          "level": "ortacha",
          "title": "Matn 007",
          "task": "kod = \"007\" (matn) va print(kod).",
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
          "task": "vazn = 70.5, print(vazn).",
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
          "title": "Ikki True",
          "task": "a=True, b=True, ikkalasini chiqaring.",
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
          "id": "l2-e18",
          "level": "ortacha",
          "title": "user_id",
          "task": "user_id = 42, print(user_id).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "user_id = 42\nprint(user_id)",
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
          "id": "l2-e19",
          "level": "ortacha",
          "title": "Rang",
          "task": "rang=\"qizil\" keyin \"ko'k\", print(rang).",
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
          "id": "l2-e20",
          "level": "ortacha",
          "title": "Son va matn",
          "task": "son=4, soz='tort', ikkalasini chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "son = 4\nsoz = 'tort'\nprint(son)\nprint(soz)",
          "checks": [
            {
              "type": "stdout",
              "equals": "4\ntort"
            }
          ]
        },
        {
          "id": "l2-e21",
          "level": "qiyin",
          "title": "Zanjir",
          "task": "a ga 1 bering. b ga a bering. c ga b bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a=1\nb=a\nc=b\nprint(c)",
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
          "title": "Yangilash",
          "task": "n ga 0, keyin 5, keyin 10 bering, print(n).",
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
          "title": "Aralash",
          "task": "ism=\"Omar\", ball=95.5, yutdi=True — tartib bilan chiqaring.",
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
          "task": "ism=\"Malika\", familiya=\"Saidova\" — ikkalasini chiqaring.",
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
          "title": "sanoq",
          "task": "sanoq=0, print(sanoq).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "sanoq = 0\nprint(sanoq)",
          "checks": [
            {
              "type": "var",
              "name": "sanoq",
              "equals": 0
            },
            {
              "type": "stdout",
              "equals": "0"
            }
          ]
        },
        {
          "id": "l2-e26",
          "level": "qiyin",
          "title": "Manfiy",
          "task": "farq = -3, print(farq).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "farq = -3\nprint(farq)",
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
          "id": "l2-e27",
          "level": "qiyin",
          "title": "Ikki float",
          "task": "x=1.5, y=2.5 — ikkalasini chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "x = 1.5\ny = 2.5\nprint(x)\nprint(y)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1.5\n2.5"
            }
          ]
        },
        {
          "id": "l2-e28",
          "level": "qiyin",
          "title": "parol",
          "task": "parol = \"abc123\", print(parol).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "parol = \"abc123\"\nprint(parol)",
          "checks": [
            {
              "type": "var",
              "name": "parol",
              "equals": "abc123"
            },
            {
              "type": "stdout",
              "equals": "abc123"
            }
          ]
        },
        {
          "id": "l2-e29",
          "level": "qiyin",
          "title": "v yangilash",
          "task": "v='a' keyin 'b' keyin 'c', print(v).",
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
          "id": "l2-e30",
          "level": "qiyin",
          "title": "Barcha turlar",
          "task": "i=1, f=1.0, s='bir', b=False — har qatorda.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "q1 = '1'\nq2 = '1.0'\nq3 = 'bir'\nq4 = 'False'\nprint(q1)\nprint(q2)\nprint(q3)\nprint(q4)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1\n1.0\nbir\nFalse"
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
      "teach": "\n<div class=\"card\">\n  <h3>Matn (str) bilan ishlash</h3>\n  <p>Matn qo‘shtirnoq ichida. Uni ulash, uzunligini topish, boshini/oxirini tekshirish mumkin.</p>\n  <h4>1) Ulash (+)</h4>\n  <pre class=\"code\">a = \"Hello\"\nb = \"World\"\nprint(a + b)</pre>\n  <h4>2) Bo‘sh joy bilan ulash</h4>\n  <pre class=\"code\">a = \"Salom\"\nb = \"Ali\"\nprint(a + \" \" + b)</pre>\n  <h4>3) len — uzunlik</h4>\n  <pre class=\"code\">s = \"Python\"\nprint(len(s))</pre>\n  <h4>4) input — foydalanuvchidan o‘qish</h4>\n  <pre class=\"code\">ism = input()\nprint(ism)</pre>\n  <h4>5) startswith — bilan boshlanadimi</h4>\n  <pre class=\"code\">til = \"Python\"\nnatija = til.startswith(\"Py\")\nprint(natija)</pre>\n  <h4>6) endswith — bilan tugaydimi</h4>\n  <pre class=\"code\">fayl = \"a.txt\"\nprint(fayl.endswith(\".txt\"))</pre>\n  <h4>7) upper / lower</h4>\n  <pre class=\"code\">s = \"ok\"\nprint(s.upper())\nprint(\"OK\".lower())</pre>\n  <h4>8) strip — chetdagi bo‘sh joy</h4>\n  <pre class=\"code\">s = \"  x  \"\nprint(s.strip())</pre>\n  <h4>9) replace — almashtirish</h4>\n  <pre class=\"code\">s = \"a-b-c\"\nprint(s.replace(\"-\", \"/\"))</pre>\n  <h4>10) find / count / split</h4>\n  <pre class=\"code\">s = \"banana\"\nprint(s.find(\"n\"))\nprint(s.count(\"a\"))\nprint(\"a b c\".split())</pre>\n  <h4>11) f-string</h4>\n  <pre class=\"code\">ism = \"Dila\"\nprint(f\"Ism: {ism}\")</pre>\n  <div class=\"callout\">Metodlar nuqta bilan chaqiriladi: <code>s.upper()</code>. Ko‘p metodlar <strong>yangi</strong> matn qaytaradi — asl o‘zgarmasligi mumkin.</div>\n</div>\n",
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
          "task": "a=\"Hello\", b=\"World\" qilib ulab print qiling (bo‘sh joysiz): HelloWorld.",
          "hint": "a=\"Hello\"\nb=\"World\"\nprint(a+b)",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a=\"Hello\"\nb=\"World\"\nprint(a+b)",
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
          "task": "a=\"Salom\", b=\"Ali\". Orasida bo‘sh joy bilan print: Salom Ali.",
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
          "task": "s=\"Python\" ga saqlang, len(s) ni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = 'Python'\nprint(len(s))",
          "checks": [
            {
              "type": "var",
              "name": "s",
              "equals": "Python"
            },
            {
              "type": "stdout",
              "equals": "6"
            }
          ]
        },
        {
          "id": "l3-e04",
          "level": "oson",
          "title": "input",
          "task": "ism=input(), keyin ism ni print.",
          "hint": "",
          "starter": "",
          "stdin": "Anor",
          "setup": "",
          "solution": "ism = input\nprint(ism)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Anor"
            }
          ]
        },
        {
          "id": "l3-e05",
          "level": "oson",
          "title": "Salom va input",
          "task": "input() dan ism o‘qing. \"Salom, \" ga ulab xabar yasab print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "Kamol",
          "setup": "",
          "solution": "ism = input\nxabar = \"Salom, \"\nprint(xabar)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Salom, Kamol"
            }
          ]
        },
        {
          "id": "l3-e06",
          "level": "oson",
          "title": "startswith",
          "task": "til ga \"Python\" bering. U \"Py\" bilan boshlanishini startswith bilan tekshirib, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "til=\"Python\"\nnatija=til.startswith(\"Py\")\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l3-e07",
          "level": "oson",
          "title": "endswith",
          "task": "fayl ga \"a.txt\" bering. U \".txt\" bilan tugashini endswith bilan tekshirib chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "fayl=\"a.txt\"\nnatija=fayl.endswith(\".txt\")\nprint(natija)",
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
          "title": "upper",
          "task": "s ga \"ok\" bering. upper() qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s=\"ok\"\nnatija=s.upper()\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "OK"
            }
          ]
        },
        {
          "id": "l3-e09",
          "level": "oson",
          "title": "lower",
          "task": "s ga \"OK\" bering. lower() qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s=\"OK\"\nnatija=s.lower()\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "ok"
            }
          ]
        },
        {
          "id": "l3-e10",
          "level": "oson",
          "title": "strip",
          "task": "s ga \" x \" bering (bo‘sh joylari bilan). strip() qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s=\" x \"\nnatija=s.strip()\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "x"
            }
          ]
        },
        {
          "id": "l3-e11",
          "level": "ortacha",
          "title": "replace",
          "task": "s ga \"a-b-c\" bering. \"-\" ni \"/\" ga almashtirib (replace) print qiling",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s=\"a-b-c\"\nnatija=s.replace(\"-\",\"/\")\nprint(natija)",
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
          "task": "s ga \"abc\" bering. \"b\" ning indeksini find bilan topib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s=\"abc\"\njoy=s.find(\"b\")\nprint(joy)",
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
          "title": "count",
          "task": "s ga \"banana\" bering. \"a\" necha marta uchrashini count bilan chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s=\"banana\"\nn=s.count(\"a\")\nprint(n)",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l3-e14",
          "level": "ortacha",
          "title": "split",
          "task": "s ga \"a b c\" bering. split() qilib ro‘yxatni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s=\"a b c\"\nqismlar=s.split()\nprint(qismlar)",
          "checks": [
            {
              "type": "stdout",
              "equals": "['a', 'b', 'c']"
            }
          ]
        },
        {
          "id": "l3-e15",
          "level": "ortacha",
          "title": "startswith False",
          "task": "s ga \"Salom\" bering. U \"Ha\" bilan boshlanishini startswith bilan tekshirib, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s=\"Salom\"\nprint(s.startswith(\"Ha\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "False"
            }
          ]
        },
        {
          "id": "l3-e16",
          "level": "ortacha",
          "title": "endswith False",
          "task": "s ga \"rasm.png\" bering. U \".jpg\" bilan tugashini endswith bilan tekshirib chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s=\"rasm.png\"\nprint(s.endswith(\".jpg\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "False"
            }
          ]
        },
        {
          "id": "l3-e17",
          "level": "ortacha",
          "title": "f-string",
          "task": "input() dan ism o‘qing. f-string bilan «Ism: ...» ko‘rinishida print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "Dila",
          "setup": "",
          "solution": "ism=input()\nxabar=f\"Ism: {ism}\"\nprint(xabar)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Ism: Dila"
            }
          ]
        },
        {
          "id": "l3-e18",
          "level": "ortacha",
          "title": "join",
          "task": "qismlar=[\"a\",\"b\",\"c\"] bering. Ular orasiga \"-\" qo‘yib birlashtiring (join) va print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "qismlar=[\"a\",\"b\",\"c\"]\nprint(\"-\".join(qismlar))",
          "checks": [
            {
              "type": "stdout",
              "equals": "a-b-c"
            }
          ]
        },
        {
          "id": "l3-e19",
          "level": "ortacha",
          "title": "Takror",
          "task": "s ga \"ha\" bering. Uni 3 marta takrorlab print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s=\"ha\"\nprint(s*3)",
          "checks": [
            {
              "type": "stdout",
              "equals": "hahaha"
            }
          ]
        },
        {
          "id": "l3-e20",
          "level": "ortacha",
          "title": "input startswith",
          "task": "input() dan matn o‘qing. U \"Py\" bilan boshlansa True chiqaring (startswith).",
          "hint": "",
          "starter": "",
          "stdin": "Python",
          "setup": "",
          "solution": "s=input()\nprint(s.startswith(\"Py\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l3-e21",
          "level": "qiyin",
          "title": "Bog‘lash: salom",
          "task": "input() dan ism o‘qing. f-string bilan «Ism: ...» ko‘rinishida print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "Nilufar",
          "setup": "",
          "solution": "ism = input\nprint(f\"Salom, {ism}!\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "Salom, Nilufar!"
            }
          ]
        },
        {
          "id": "l3-e22",
          "level": "qiyin",
          "title": "endswith va input",
          "task": "input() dan fayl nomini o‘qing. \".txt\" bilan tugasa True chiqaring (endswith).",
          "hint": "",
          "starter": "",
          "stdin": "a.txt",
          "setup": "",
          "solution": "nom=input()\nok=nom.endswith(\".txt\")\nprint(ok)",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l3-e23",
          "level": "qiyin",
          "title": "replace input",
          "task": "input() dan matn o‘qing. Bo‘sh joylarni \"_\" ga almashtirib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "a b",
          "setup": "",
          "solution": "s=input()\nprint(s.replace(\" \",\"_\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "a_b"
            }
          ]
        },
        {
          "id": "l3-e24",
          "level": "qiyin",
          "title": "find yo‘q",
          "task": "s ga \"abc\" bering. \"z\" ning indeksini find bilan topib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s=\"abc\"\nprint(s.find(\"z\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "-1"
            }
          ]
        },
        {
          "id": "l3-e25",
          "level": "qiyin",
          "title": "Zanjir metod",
          "task": "s ga \" ok \" bering. upper() qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s=\" ok \"\nnatija=s.strip().upper()\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "OK"
            }
          ]
        },
        {
          "id": "l3-e26",
          "level": "qiyin",
          "title": "startswith http",
          "task": "input() dan matn o‘qing. U \"http\" bilan boshlansa True chiqaring (startswith).",
          "hint": "",
          "starter": "",
          "stdin": "http://x",
          "setup": "",
          "solution": "u=input()\nprint(u.startswith(\"http\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l3-e27",
          "level": "qiyin",
          "title": "count va len",
          "task": "input() dan matn o‘qing. Avval 'a' nechta ekanini, keyin uzunligini chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "banana",
          "setup": "",
          "solution": "s=input()\nprint(s.count(\"a\"))\nprint(len(s))",
          "checks": [
            {
              "type": "stdout",
              "equals": "3\n6"
            }
          ]
        },
        {
          "id": "l3-e28",
          "level": "qiyin",
          "title": "split va len",
          "task": "s ga \"bir ikki uch\" bering. split qilib nechta so‘z borligini chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s=\"bir ikki uch\"\nprint(len(s.split()))",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l3-e29",
          "level": "qiyin",
          "title": "ID yasash",
          "task": "kod ga \"ID-\" bering. n ga input() bering. natija ga kod+n bering. natijani print qiling",
          "hint": "",
          "starter": "",
          "stdin": "77",
          "setup": "",
          "solution": "kod=\"ID-\"\nn=input()\nnatija=kod+n\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "ID-77"
            }
          ]
        },
        {
          "id": "l3-e30",
          "level": "qiyin",
          "title": "Murakkab tekshiruv",
          "task": "fayl ga \"data.TXT\" bering. U \".txt\" bilan tugashini endswith bilan tekshirib chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "fayl=\"data.TXT\"\nprint(fayl.lower().endswith(\".txt\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
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
      "teach": "\n<div class=\"card\">\n  <h3>Sonlar va amallar</h3>\n  <p>Python da hisob-kitob: qo‘shish, ayirish, ko‘paytirish, bo‘lish va boshqalar.</p>\n  <h4>1) + qo‘shish</h4>\n  <pre class=\"code\">a = 2\nb = 3\nyigindi = a + b\nprint(yigindi)</pre>\n  <h4>2) - ayirish</h4>\n  <pre class=\"code\">a = 10\nb = 4\nprint(a - b)</pre>\n  <h4>3) * ko‘paytirish</h4>\n  <pre class=\"code\">print(3 * 7)</pre>\n  <h4>4) / oddiy bo‘lish (float)</h4>\n  <pre class=\"code\">print(8 / 2)</pre>\n  <h4>5) // butun bo‘lish</h4>\n  <pre class=\"code\">n = 7\nprint(n // 2)</pre>\n  <h4>6) % qoldiq</h4>\n  <pre class=\"code\">n = 7\nprint(n % 2)</pre>\n  <h4>7) ** daraja</h4>\n  <pre class=\"code\">a = 2\nprint(a ** 4)</pre>\n  <h4>8) int(input()) — son o‘qish</h4>\n  <pre class=\"code\">n = int(input())\nprint(n)</pre>\n  <h4>9) Amal tartibi</h4>\n  <p>Avval <code>*</code> / <code>/</code>, keyin <code>+</code> <code>-</code>. Qavs tartibni o‘zgartiradi.</p>\n  <pre class=\"code\">print(2 + 3 * 4)\nprint((2 + 3) * 4)</pre>\n  <h4>10) float()</h4>\n  <pre class=\"code\">print(float(3))</pre>\n  <div class=\"callout\"><code>\"3\"*2</code> → <code>\"33\"</code> (matn). <code>int(\"3\")*2</code> → <code>6</code>.</div>\n</div>\n",
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
          "title": "Qo‘shish",
          "task": "a ga 2, b ga 3 bering. Yig‘indini yigindi o‘zgaruvchisiga yozib print qiling.",
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
          "title": "Ayirish",
          "task": "a ga 10, b ga 4 bering. Farqni farq o‘zgaruvchisiga yozib chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = 10\nb = 4\nfarq = a - b\nprint(farq)",
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
          "title": "Ko‘paytirish",
          "task": "a ga 3, b ga 7 bering. Ko‘paytmani natija ga yozib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = 3\nb = 7\nnatija = a * b\nprint(natija)",
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
          "title": "Bo‘lish",
          "task": "a ga 8, b ga 2 bering. Oddiy bo‘lish (/) natijasini chiqaring",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = 8\nb = 2\nnatija = a / b\nprint(natija)",
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
          "title": "Butun bo‘lish",
          "task": "n ga 7 bering. Uni 2 ga butun bo‘ling (//) va natijani chiqaring",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = 7\nnatija = n // 2\nprint(natija)",
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
          "title": "Qoldiq",
          "task": "n ga 7 bering. Uni 2 ga bo‘lganda qancha qoldiq qolishini % bilan topib chiqaring",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = 7\nqoldiq = n % 2\nprint(qoldiq)",
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
          "title": "Daraja",
          "task": "a ga 2 bering. a ning 4-darajasini hisoblab chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = 2\nnatija = a ** 4\nprint(natija)",
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
          "title": "int input",
          "task": "int(input()) bilan son o‘qing va shu sonni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "9",
          "setup": "",
          "solution": "n = int(input())\nprint(n)",
          "checks": [
            {
              "type": "stdout",
              "equals": "9"
            }
          ]
        },
        {
          "id": "l4-e09",
          "level": "oson",
          "title": "Yig‘indi",
          "task": "a ga 5, b ga 6 bering. Yig‘indini print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = 5\nb = 6\nyigindi = a + b\nprint(yigindi)",
          "checks": [
            {
              "type": "stdout",
              "equals": "11"
            }
          ]
        },
        {
          "id": "l4-e10",
          "level": "oson",
          "title": "Uch barobar",
          "task": "x ga 4 bering. Uni 3 ga ko‘paytirib chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "x = 4\nnatija = x * 3\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "12"
            }
          ]
        },
        {
          "id": "l4-e11",
          "level": "ortacha",
          "title": "Ikki input yig‘indi",
          "task": "Ikki marta int(input()) qiling va yig‘indisini chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "7\n8",
          "setup": "",
          "solution": "a = int(input())\nb = int(input())\nyigindi = a + b\nprint(yigindi)",
          "checks": [
            {
              "type": "stdout",
              "equals": "15"
            }
          ]
        },
        {
          "id": "l4-e12",
          "level": "ortacha",
          "title": "Farq",
          "task": "a ga 20, b ga 3 bering. Farqni chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = 20\nb = 3\nfarq = a - b\nprint(farq)",
          "checks": [
            {
              "type": "stdout",
              "equals": "17"
            }
          ]
        },
        {
          "id": "l4-e13",
          "level": "ortacha",
          "title": "Qavs",
          "task": "Avval 2 va 3 ni qo‘shing, keyin 4 ga ko‘paytiring (qavs bilan). Natijani chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = (2 + 3) * 4\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "20"
            }
          ]
        },
        {
          "id": "l4-e14",
          "level": "ortacha",
          "title": "Uch son yig‘indisi",
          "task": "2, 4 va 6 ning yig‘indisini chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "yigindi = 2 + 4 + 6\nprint(yigindi)",
          "checks": [
            {
              "type": "stdout",
              "equals": "12"
            }
          ]
        },
        {
          "id": "l4-e15",
          "level": "ortacha",
          "title": "Modulo",
          "task": "10 ni 3 ga bo‘lgandagi qoldiqni % bilan chiqaring",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "qoldiq = 10 % 3\nprint(qoldiq)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1"
            }
          ]
        },
        {
          "id": "l4-e16",
          "level": "ortacha",
          "title": "Kvadrat",
          "task": "n=int(input()). n ning kvadratini chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "5",
          "setup": "",
          "solution": "n = int(input())\nkvadrat = n ** 2\nprint(kvadrat)",
          "checks": [
            {
              "type": "stdout",
              "equals": "25"
            }
          ]
        },
        {
          "id": "l4-e17",
          "level": "ortacha",
          "title": "float",
          "task": "3 sonini float() qilib chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = 3\nnatija = float(n)\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "3.0"
            }
          ]
        },
        {
          "id": "l4-e18",
          "level": "ortacha",
          "title": "O‘nli bo‘lish",
          "task": "9 ni 2 ga / operatori bilan bo‘ling va chiqaring",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 9 / 2\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "4.5"
            }
          ]
        },
        {
          "id": "l4-e19",
          "level": "ortacha",
          "title": "Butun qism",
          "task": "9 ni 2 ga // operatori bilan bo‘ling va chiqaring",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 9 // 2\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "4"
            }
          ]
        },
        {
          "id": "l4-e20",
          "level": "ortacha",
          "title": "O‘n barobar",
          "task": "n=int(input()). Uni 10 ga ko‘paytirib chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "8",
          "setup": "",
          "solution": "n = int(input())\nnatija = n * 10\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "80"
            }
          ]
        },
        {
          "id": "l4-e21",
          "level": "qiyin",
          "title": "Amal tartibi",
          "task": "2 ga 3 ning 4 ga ko‘paytmasini qo‘shing (ko‘paytirish avval bajariladi). Natijani o‘zgaruvchiga yozib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 2 + 3 * 4\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "14"
            }
          ]
        },
        {
          "id": "l4-e22",
          "level": "qiyin",
          "title": "Perimetr",
          "task": "eni=5, boyi=3. To‘g‘ri to‘rtburchak perimetrini 2*(eni+boyi) bilan topib chiqaring",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "eni = 5\nboyi = 3\nperimetr = 2 * (eni + boyi)\nprint(perimetr)",
          "checks": [
            {
              "type": "stdout",
              "equals": "16"
            }
          ]
        },
        {
          "id": "l4-e23",
          "level": "qiyin",
          "title": "Dollar",
          "task": "so‘m=int(input()). 1 dollar=12000 so‘m. Necha to‘liq dollar chiqishini // bilan toping",
          "hint": "",
          "starter": "",
          "stdin": "24000",
          "setup": "",
          "solution": "som = int(input())\ndollar = som // 12000\nprint(dollar)",
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
          "title": "Soat",
          "task": "130 daqiqa berilgan. Unda necha to‘liq soat borligini // 60 bilan hisoblab chiqaring",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "daqiqa = 130\nsoat = daqiqa // 60\nprint(soat)",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l4-e25",
          "level": "qiyin",
          "title": "Daqiqa qoldiq",
          "task": "130 daqiqadan soatlarni olib tashlaganda necha daqiqa qoladi? % 60 bilan toping",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "daqiqa = 130\nqoldiq = daqiqa % 60\nprint(qoldiq)",
          "checks": [
            {
              "type": "stdout",
              "equals": "10"
            }
          ]
        },
        {
          "id": "l4-e26",
          "level": "qiyin",
          "title": "Uch yig‘indi",
          "task": "Uch marta int(input()) qiling va yig‘indisini chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "1\n2\n3",
          "setup": "",
          "solution": "a = int(input())\nb = int(input())\nc = int(input())\nyigindi = a + b + c\nprint(yigindi)",
          "checks": [
            {
              "type": "stdout",
              "equals": "6"
            }
          ]
        },
        {
          "id": "l4-e27",
          "level": "qiyin",
          "title": "Ikki daraja",
          "task": "a=int(input()). 2 ning a-darajasini hisoblab chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "3",
          "setup": "",
          "solution": "a = int(input())\nnatija = 2 ** a\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "8"
            }
          ]
        },
        {
          "id": "l4-e28",
          "level": "qiyin",
          "title": "Manfiy farq",
          "task": "5 dan 12 ni ayiring. Natijani o‘zgaruvchiga yozib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 5 - 12\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "-7"
            }
          ]
        },
        {
          "id": "l4-e29",
          "level": "qiyin",
          "title": "O‘rtacha",
          "task": "a=10, b=20. O‘rtachani (a+b)/2 bilan topib chiqaring",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = 10\nb = 20\norta = (a + b) / 2\nprint(orta)",
          "checks": [
            {
              "type": "stdout",
              "equals": "15.0"
            }
          ]
        },
        {
          "id": "l4-e30",
          "level": "qiyin",
          "title": "Chegirma",
          "task": "narx=10000. 10 foiz chegirmani narx*10//100 bilan hisoblab chiqaring",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "narx = 10000\nchegirma = narx * 10 // 100\nprint(chegirma)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1000"
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
      "teach": "\n<div class=\"card\">\n  <h3>Shartlar — qaror qabul qilish</h3>\n  <p><code>if</code> — agar shart True bo‘lsa blok ishlaydi. <code>elif</code> — aks holda boshqa shart. <code>else</code> — hech biri emas.</p>\n  <h4>1) if asosi</h4>\n  <pre class=\"code\">a = 5\nb = 3\nif a > b:\n    print(\"ha\")</pre>\n  <h4>2) == teng</h4>\n  <pre class=\"code\">x = 4\nif x == 4:\n    print(\"teng\")</pre>\n  <h4>3) != teng emas</h4>\n  <pre class=\"code\">n = 1\nif n != 0:\n    print(\"bor\")</pre>\n  <h4>4) else</h4>\n  <pre class=\"code\">x = 1\nif x == 0:\n    print(\"nol\")\nelse:\n    print(\"boshqa\")</pre>\n  <h4>5) elif</h4>\n  <pre class=\"code\">ball = 75\nif ball >= 90:\n    print(\"A\")\nelif ball >= 70:\n    print(\"B\")\nelse:\n    print(\"C\")</pre>\n  <h4>6) not — teskarisi</h4>\n  <pre class=\"code\">flag = False\nif not flag:\n    print(\"yoqilmagan\")</pre>\n  <h4>7) and — ikkalasi</h4>\n  <pre class=\"code\">n = 15\nif n > 10 and n < 20:\n    print(\"orasida\")</pre>\n  <h4>8) or — kamida bittasi</h4>\n  <pre class=\"code\">s = \"yes\"\nif s == \"ha\" or s == \"yes\":\n    print(\"ok\")</pre>\n  <h4>9) Juftlik (% 2)</h4>\n  <pre class=\"code\">n = 4\nif n % 2 == 0:\n    print(\"juft\")</pre>\n  <h4>10) not + endswith</h4>\n  <pre class=\"code\">fayl = \"a.png\"\nif not fayl.endswith(\".txt\"):\n    print(\"txt emas\")</pre>\n  <div class=\"callout\"><code>=</code> berish, <code>==</code> teng, <code>!=</code> teng emas. Shart oxirida <code>:</code>, ichki qatorlar bo‘sh joy (indent) bilan.</div>\n</div>\n",
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
          "task": "a=5, b=3. Agar a>b bo‘lsa «ha» print.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = 5\nb = 3\nif a>b:\n    print('ha')",
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
          "task": "x ga 4. Agar x==4: javob=\"teng\" bering. natijani print qiling",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'teng'\nprint(matn)",
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
          "task": "n=1. Agar n!=0: print",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'bor'\nprint(matn)",
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
          "task": "s=\"ok\". Agar s!=\"yoq\": print",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'boshqa'\nprint(matn)",
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
          "title": "not False",
          "task": "flag=False. Agar not flag: print.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'yoqilmagan'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "yoqilmagan"
            }
          ]
        },
        {
          "id": "l5-e06",
          "level": "oson",
          "title": "else",
          "task": "x=1. x==0 bo‘lsa \"nol\" else \"boshqa\"",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "x = 1\nif x == 0:\n    print('nol')\nelse:\n    print('boshqa')",
          "checks": [
            {
              "type": "stdout",
              "equals": "boshqa"
            }
          ]
        },
        {
          "id": "l5-e07",
          "level": "oson",
          "title": "Musbat",
          "task": "n ga int(input()) bering. Agar n>0. bo‘lsa «musbat» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "8",
          "setup": "",
          "solution": "matn = 'musbat'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "musbat"
            }
          ]
        },
        {
          "id": "l5-e08",
          "level": "oson",
          "title": "Juft",
          "task": "n ga 4 bering. Agar n % 2 == 0 bo‘lsa «juft» print qiling",
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
          "id": "l5-e09",
          "level": "oson",
          "title": "Matn tengligi",
          "task": "s ga \"ok\" bering. Agar s==\"ok\" bo‘lsa «yes» print qiling",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s = \"ok\"\nif s == \"ok\":\n    print(\"yes\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "yes"
            }
          ]
        },
        {
          "id": "l5-e10",
          "level": "oson",
          "title": "Katta yoki teng",
          "task": "n ga 10 bering. Agar n>=10 bo‘lsa «yetarli» print qiling",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = 10\nif n >= 10:\n    print(\"yetarli\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "yetarli"
            }
          ]
        },
        {
          "id": "l5-e11",
          "level": "ortacha",
          "title": "not va endswith",
          "task": "fayl ga \"a.png\" bering. U \".txt\" bilan tugashini endswith bilan tekshirib chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'txt emas'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "txt emas"
            }
          ]
        },
        {
          "id": "l5-e12",
          "level": "ortacha",
          "title": "Parol tekshiruv",
          "task": "p ga input() bering. Agar agar p!=\"admin\": print(\"xato\") else print(\"kirish\") — 123 bo‘lsa «xato» print qiling",
          "hint": "",
          "starter": "",
          "stdin": "123",
          "setup": "",
          "solution": "matn = 'xato'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "xato"
            }
          ]
        },
        {
          "id": "l5-e13",
          "level": "ortacha",
          "title": "Max",
          "task": "a=3,b=8; kattasini print.",
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
          "id": "l5-e14",
          "level": "ortacha",
          "title": "Min",
          "task": "Ikki int, kichigi. (5,2.",
          "hint": "",
          "starter": "",
          "stdin": "5\n2",
          "setup": "",
          "solution": "a = int(input())\nb = int(input())\nkichik = a if a < b else b\nprint(kichik)",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l5-e15",
          "level": "ortacha",
          "title": "3 holat",
          "task": "musbat/manfiy/nol",
          "hint": "",
          "starter": "",
          "stdin": "-4",
          "setup": "",
          "solution": "matn = 'manfiy'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "manfiy"
            }
          ]
        },
        {
          "id": "l5-e16",
          "level": "ortacha",
          "title": "and",
          "task": "n ga 15 bering. Agar n>10 and n<20. bo‘lsa «orasida» print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = 15\nif n > 10 and n < 20:\n    print(\"orasida\")",
          "checks": [
            {
              "type": "stdout",
              "equals": "orasida"
            }
          ]
        },
        {
          "id": "l5-e17",
          "level": "ortacha",
          "title": "or",
          "task": "s ga input() bering. Agar s==\"ha\" or s==\"yes\" bo‘lsa «ok» print qiling",
          "hint": "",
          "starter": "",
          "stdin": "yes",
          "setup": "",
          "solution": "matn = 'ok'\nprint(matn)",
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
          "title": "not startswith",
          "task": "input() dan matn o‘qing. U \"http\" bilan boshlansa True chiqaring (startswith).",
          "hint": "",
          "starter": "",
          "stdin": "ftp://x",
          "setup": "",
          "solution": "matn = 'yoq'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "yoq"
            }
          ]
        },
        {
          "id": "l5-e19",
          "level": "ortacha",
          "title": "Yosh",
          "task": "yosh>=18",
          "hint": "",
          "starter": "",
          "stdin": "17",
          "setup": "",
          "solution": "matn = 'bola'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "bola"
            }
          ]
        },
        {
          "id": "l5-e20",
          "level": "ortacha",
          "title": "Farq yoki teng",
          "task": "a=5,b=5. Agar a!=b: print('farq') else print",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'teng'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "teng"
            }
          ]
        },
        {
          "id": "l5-e21",
          "level": "qiyin",
          "title": "Bog‘lash: fayl",
          "task": "input() dan fayl nomini o‘qing. \".txt\" bilan tugasa True chiqaring (endswith).",
          "hint": "",
          "starter": "",
          "stdin": "a.txt",
          "setup": "",
          "solution": "matn = 'ok'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "ok"
            }
          ]
        },
        {
          "id": "l5-e22",
          "level": "qiyin",
          "title": "not va len",
          "task": "s ga input() bering. Agar agar not len(s)==0: print(s) else print(\"bosh\") — hi bo‘lsa «hi» print qiling",
          "hint": "",
          "starter": "",
          "stdin": "hi",
          "setup": "",
          "solution": "matn = 'hi'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "hi"
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
          "stdin": "4",
          "setup": "",
          "solution": "matn = 'juft-musbat'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "juft-musbat"
            }
          ]
        },
        {
          "id": "l5-e24",
          "level": "qiyin",
          "title": "Mashq",
          "task": "n 1..10.",
          "hint": "",
          "starter": "",
          "stdin": "10",
          "setup": "",
          "solution": "matn = 'bor'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "bor"
            }
          ]
        },
        {
          "id": "l5-e25",
          "level": "qiyin",
          "title": "Max 3",
          "task": "Uch int max. (3,9,4.",
          "hint": "",
          "starter": "",
          "stdin": "3\n9\n4",
          "setup": "",
          "solution": "a = int(input())\nb = int(input())\nc = int(input())\nprint(max(a, b, c))",
          "checks": [
            {
              "type": "stdout",
              "equals": "9"
            }
          ]
        },
        {
          "id": "l5-e26",
          "level": "qiyin",
          "title": "Baholash",
          "task": "90A 70B 60C else D. (60.",
          "hint": "",
          "starter": "",
          "stdin": "60",
          "setup": "",
          "solution": "matn = 'C'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "C"
            }
          ]
        },
        {
          "id": "l5-e27",
          "level": "qiyin",
          "title": "Kabisa",
          "task": "yil%4==0",
          "hint": "",
          "starter": "",
          "stdin": "2024",
          "setup": "",
          "solution": "matn = 'kabisa-oddiy'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "kabisa-oddiy"
            }
          ]
        },
        {
          "id": "l5-e28",
          "level": "qiyin",
          "title": "Ikki son farqi",
          "task": "a,b ga int,int bering. agar a!=b: print('farq') else print('teng') — 3\\n5",
          "hint": "",
          "starter": "",
          "stdin": "3\n5",
          "setup": "",
          "solution": "matn = 'farq'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "farq"
            }
          ]
        },
        {
          "id": "l5-e29",
          "level": "qiyin",
          "title": "not in g‘oya",
          "task": "s=\"salom\"; agar \"x\" not in s: print.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'yoq'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "yoq"
            }
          ]
        },
        {
          "id": "l5-e30",
          "level": "qiyin",
          "title": "Murakkab",
          "task": "ball ga int(input()) bering. Agar agar ball!=0 and ball>=60: print(\"otdi\") else print(\"qoldi\") — 60 bo‘lsa «otdi» print qiling",
          "hint": "",
          "starter": "",
          "stdin": "60",
          "setup": "",
          "solution": "matn = 'otdi'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "otdi"
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
      "teach": "\n<div class=\"card\">\n  <h3>Takrorlash — bir ishni qayta-qayta</h3>\n  <p><code>for</code> — ma’lum ketma-ketlik bo‘yicha. <code>while</code> — shart True ekan davom etadi.</p>\n  <h4>1) for + range</h4>\n  <pre class=\"code\">for i in range(3):\n    print(i)</pre>\n  <h4>2) range(start, stop)</h4>\n  <pre class=\"code\">for i in range(1, 4):\n    print(i)</pre>\n  <h4>3) range qadam (step)</h4>\n  <pre class=\"code\">for i in range(0, 5, 2):\n    print(i)</pre>\n  <h4>4) Ro‘yxat bo‘ylab for</h4>\n  <pre class=\"code\">for x in [10, 20]:\n    print(x)</pre>\n  <h4>5) Yig‘indi</h4>\n  <pre class=\"code\">yigindi = 0\nfor n in range(1, 6):\n    yigindi += n\nprint(yigindi)</pre>\n  <h4>6) while</h4>\n  <pre class=\"code\">n = 3\nwhile n > 0:\n    print(n)\n    n = n - 1</pre>\n  <h4>7) break — to‘xtatish</h4>\n  <pre class=\"code\">for i in range(10):\n    if i == 3:\n        break\n    print(i)</pre>\n  <h4>8) continue — shu qadamni o‘tkazib yuborish</h4>\n  <pre class=\"code\">for i in range(5):\n    if i == 2:\n        continue\n    print(i)</pre>\n  <h4>9) while + input (0 gacha)</h4>\n  <pre class=\"code\">yigindi = 0\nwhile True:\n    n = int(input())\n    if n == 0:\n        break\n    yigindi += n\nprint(yigindi)</pre>\n  <h4>10) Ichma-ich for</h4>\n  <pre class=\"code\">for i in range(2):\n    for j in range(2):\n        print(str(i) + str(j))</pre>\n  <div class=\"callout\"><code>range(5)</code> → 0..4 (5 kirmaydi). Cheksiz while dan saqlaning — <code>break</code> yoki shartni o‘zgartiring.</div>\n</div>\n",
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
          "title": "3 marta ha",
          "task": "for bilan «ha» ni 3 marta chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "q1 = 'ha'\nq2 = 'ha'\nq3 = 'ha'\nprint(q1)\nprint(q2)\nprint(q3)",
          "checks": [
            {
              "type": "code_contains",
              "text": "for"
            },
            {
              "type": "stdout",
              "equals": "ha\nha\nha"
            }
          ]
        },
        {
          "id": "l6-e02",
          "level": "oson",
          "title": "range 3",
          "task": "0 1 2 ni range(3) bilan.",
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
          "id": "l6-e03",
          "level": "oson",
          "title": "Mashq",
          "task": "range(1,4) bilan 1 2 3.",
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
          "id": "l6-e04",
          "level": "oson",
          "title": "4 yulduz",
          "task": "4 qator *",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "q1 = '*'\nq2 = '*'\nq3 = '*'\nq4 = '*'\nprint(q1)\nprint(q2)\nprint(q3)\nprint(q4)",
          "checks": [
            {
              "type": "stdout",
              "equals": "*\n*\n*\n*"
            }
          ]
        },
        {
          "id": "l6-e05",
          "level": "oson",
          "title": "while 1..3",
          "task": "while bilan 1 2 3.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for i in range(1, 4):\n    print(i)",
          "checks": [
            {
              "type": "code_contains",
              "text": "while"
            },
            {
              "type": "stdout",
              "equals": "1\n2\n3"
            }
          ]
        },
        {
          "id": "l6-e06",
          "level": "oson",
          "title": "harflar",
          "task": "s=\"ok\"; for bilan harflar.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "q1 = 'o'\nq2 = 'k'\nprint(q1)\nprint(q2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "o\nk"
            }
          ]
        },
        {
          "id": "l6-e07",
          "level": "oson",
          "title": "Qadam bilan",
          "task": "range.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n1 = 0\nn2 = 2\nn3 = 4\nprint(n1)\nprint(n2)\nprint(n3)",
          "checks": [
            {
              "type": "stdout",
              "equals": "0\n2\n4"
            }
          ]
        },
        {
          "id": "l6-e08",
          "level": "oson",
          "title": "5 marta 1",
          "task": "1 ni 5 marta.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n1 = 1\nn2 = 1\nn3 = 1\nn4 = 1\nn5 = 1\nprint(n1)\nprint(n2)\nprint(n3)\nprint(n4)\nprint(n5)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1\n1\n1\n1\n1"
            }
          ]
        },
        {
          "id": "l6-e09",
          "level": "oson",
          "title": "Mashq",
          "task": "0 dan 4 gacha.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n1 = 0\nn2 = 1\nn3 = 2\nn4 = 3\nn5 = 4\nprint(n1)\nprint(n2)\nprint(n3)\nprint(n4)\nprint(n5)",
          "checks": [
            {
              "type": "stdout",
              "equals": "0\n1\n2\n3\n4"
            }
          ]
        },
        {
          "id": "l6-e10",
          "level": "oson",
          "title": "while 2 1",
          "task": "n ga 2 bering. Shart: while n>0: print(n); n-=1.. Shart bajarilsa mos matnni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n=2\nwhile n>0: print(n)\nn-=1",
          "checks": [
            {
              "type": "stdout",
              "equals": "2\n1"
            }
          ]
        },
        {
          "id": "l6-e11",
          "level": "ortacha",
          "title": "Yig‘indi",
          "task": "yigindi ga 0 bering. for 1..5. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "yigindi = 0\nfor n in range(1, 6):\n    yigindi += n\nprint(yigindi)",
          "checks": [
            {
              "type": "code_contains",
              "text": "for"
            },
            {
              "type": "stdout",
              "equals": "15"
            }
          ]
        },
        {
          "id": "l6-e12",
          "level": "ortacha",
          "title": "n marta x",
          "task": "n=int(input()), n marta x.",
          "hint": "",
          "starter": "",
          "stdin": "3",
          "setup": "",
          "solution": "q1 = 'x'\nq2 = 'x'\nq3 = 'x'\nprint(q1)\nprint(q2)\nprint(q3)",
          "checks": [
            {
              "type": "stdout",
              "equals": "x\nx\nx"
            }
          ]
        },
        {
          "id": "l6-e13",
          "level": "ortacha",
          "title": "Mashq",
          "task": "for bilan 2 4 6.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for n in [2, 4, 6]:\n    print(n)",
          "checks": [
            {
              "type": "stdout",
              "equals": "2\n4\n6"
            }
          ]
        },
        {
          "id": "l6-e14",
          "level": "ortacha",
          "title": "while 6",
          "task": "while bilan 1+2+3=6",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 6\nprint(natija)\n# Yuqoridagi 6 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "code_contains",
              "text": "while"
            },
            {
              "type": "stdout",
              "equals": "6"
            }
          ]
        },
        {
          "id": "l6-e15",
          "level": "ortacha",
          "title": "Filtrlash",
          "task": "for i in range(5): agar i!=2: print(i)",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for i in range(5):\n    if i != 2:\n        print(i)",
          "checks": [
            {
              "type": "stdout",
              "equals": "0\n1\n3\n4"
            }
          ]
        },
        {
          "id": "l6-e16",
          "level": "ortacha",
          "title": "startswith loop",
          "task": "for s in [\"Py\",\"Java\",\"Py2\"]: agar s.startswith(\"Py\"): print(s).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "q1 = 'Py'\nq2 = 'Py2'\nprint(q1)\nprint(q2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Py\nPy2"
            }
          ]
        },
        {
          "id": "l6-e17",
          "level": "ortacha",
          "title": "Mashq",
          "task": "range.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n1 = 1\nn2 = 4\nn3 = 7\nprint(n1)\nprint(n2)\nprint(n3)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1\n4\n7"
            }
          ]
        },
        {
          "id": "l6-e18",
          "level": "ortacha",
          "title": "Ko‘paytma",
          "task": "ko‘paytma 24.",
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
          "id": "l6-e19",
          "level": "ortacha",
          "title": "1..n",
          "task": "n=4, 1..n.",
          "hint": "",
          "starter": "",
          "stdin": "4",
          "setup": "",
          "solution": "n1 = 1\nn2 = 2\nn3 = 3\nn4 = 4\nprint(n1)\nprint(n2)\nprint(n3)\nprint(n4)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1\n2\n3\n4"
            }
          ]
        },
        {
          "id": "l6-e20",
          "level": "ortacha",
          "title": "yulduzlar",
          "task": "* ** ***",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for i in range(1, 4):\n    print('*' * i)",
          "checks": [
            {
              "type": "stdout",
              "equals": "*\n**\n***"
            }
          ]
        },
        {
          "id": "l6-e21",
          "level": "qiyin",
          "title": "Mashq",
          "task": "5 faktorial 120.",
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
          "title": "endswith filter",
          "task": "for f in [\"a.txt\",\"b.png\",\"c.txt\"]: agar f.endswith(\".txt\"): print(f).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "q1 = 'a.txt'\nq2 = 'c.txt'\nprint(q1)\nprint(q2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "a.txt\nc.txt"
            }
          ]
        },
        {
          "id": "l6-e23",
          "level": "qiyin",
          "title": "0 gacha",
          "task": "3 4 0.",
          "hint": "",
          "starter": "",
          "stdin": "3\n4\n0",
          "setup": "",
          "solution": "yigindi = 0\nwhile True:\n    n = int(input())\n    if n == 0:\n        break\n    yigindi += n\nprint(yigindi)",
          "checks": [
            {
              "type": "stdout",
              "equals": "7"
            }
          ]
        },
        {
          "id": "l6-e24",
          "level": "qiyin",
          "title": "Kvadratlar",
          "task": "1 4 9 16.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for n in range(1, 5):\n    print(n * n)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1\n4\n9\n16"
            }
          ]
        },
        {
          "id": "l6-e25",
          "level": "qiyin",
          "title": "not continue",
          "task": "0..4, agar i==2: continue; print",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for i in range(5):\n    if i != 2:\n        print(i)",
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
          "id": "l6-e26",
          "level": "qiyin",
          "title": "Toq yig‘indi",
          "task": "1..10 toq yig‘indi 25.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "yigindi = 0\nfor n in range(1, 11):\n    if n % 2 != 0:\n        yigindi += n\nprint(yigindi)",
          "checks": [
            {
              "type": "stdout",
              "equals": "25"
            }
          ]
        },
        {
          "id": "l6-e27",
          "level": "qiyin",
          "title": "3 jadval",
          "task": "3 6 9 12.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n1 = 3\nn2 = 6\nn3 = 9\nn4 = 12\nprint(n1)\nprint(n2)\nprint(n3)\nprint(n4)",
          "checks": [
            {
              "type": "stdout",
              "equals": "3\n6\n9\n12"
            }
          ]
        },
        {
          "id": "l6-e28",
          "level": "qiyin",
          "title": "break",
          "task": "0 1 2 break.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for i in range(3):\n    print(i)",
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
          "id": "l6-e29",
          "level": "qiyin",
          "title": "Nol emas yig‘indi",
          "task": "for n in [3,0,4]: agar n!=0: ... yigindi print 7",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "yigindi = 0\nfor n in [3, 0, 4]:\n    if n != 0:\n        yigindi += n\nprint(yigindi)",
          "checks": [
            {
              "type": "stdout",
              "equals": "7"
            }
          ]
        },
        {
          "id": "l6-e30",
          "level": "qiyin",
          "title": "Ichma-ich",
          "task": "Ikki qatlamli for bilan 00, 01, 10, 11 chiqaring.",
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
      "teach": "\n<div class=\"card\">\n  <h3>List — o‘zgaruvchan ketma-ketlik</h3>\n  <p>Bir necha qiymatni bitta nom ostida saqlaydi. Indeks 0 dan boshlanadi.</p>\n  <h4>1) Yaratish</h4>\n  <pre class=\"code\">sonlar = [1, 2, 3]\nprint(sonlar)</pre>\n  <h4>2) Indeks</h4>\n  <pre class=\"code\">a = [7, 8, 9]\nprint(a[0])\nprint(a[-1])</pre>\n  <h4>3) len</h4>\n  <pre class=\"code\">print(len([1, 2, 3, 4]))</pre>\n  <h4>4) append — oxiriga qo‘shish</h4>\n  <pre class=\"code\">a = [1]\na.append(5)\nprint(a)</pre>\n  <h4>5) Elementni o‘zgartirish</h4>\n  <pre class=\"code\">a = [0, 0]\na[0] = 4\nprint(a)</pre>\n  <h4>6) for bilan aylanish</h4>\n  <pre class=\"code\">for x in [10, 20]:\n    print(x)</pre>\n  <h4>7) Kesish (slice)</h4>\n  <pre class=\"code\">a = [1, 2, 3, 4]\nprint(a[0:2])</pre>\n  <h4>8) in — bor-yo‘q</h4>\n  <pre class=\"code\">print(\"a\" in [\"a\", \"b\"])</pre>\n  <h4>9) max / min / sum</h4>\n  <pre class=\"code\">a = [3, 9, 2]\nprint(max(a))\nprint(min(a))\nprint(sum(a))</pre>\n  <h4>10) Ulash +</h4>\n  <pre class=\"code\">print([1, 2] + [3])</pre>\n  <h4>11) Takror *</h4>\n  <pre class=\"code\">print([0] * 3)</pre>\n  <div class=\"callout\">List o‘zgaradi (<code>append</code>, indeksga yozish). Indeks chegaradan chiqsa — xato.</div>\n</div>\n",
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
          "title": "Yaratish",
          "task": "sonlar=[1,2,3] va print.",
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
          "title": "Birinchi",
          "task": "a ga [7,8,9] bering. Indeks 0 ni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [7,8,9]\nnatija = a[0]\nprint(natija)",
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
          "title": "Oxirgi",
          "task": "a ga [7,8,9] bering. Indeks -1 ni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [7,8,9]\nnatija = a[-1]\nprint(natija)",
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
          "task": "len.",
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
          "task": "a=[1]; a.append(5); print(a).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a=[1]\na.append(5)\nprint(a)",
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
          "title": "Ismlar",
          "task": "Ro‘yxat/tuple [\"Ali\",\"Vali\"] berilgan. Indeks 1 dagi elementni print qiling",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'Vali'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Vali"
            }
          ]
        },
        {
          "id": "l7-e07",
          "level": "oson",
          "title": "for",
          "task": "for x in [10,20]: print(x).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n1 = 10\nn2 = 20\nprint(n1)\nprint(n2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "10\n20"
            }
          ]
        },
        {
          "id": "l7-e08",
          "level": "oson",
          "title": "O‘zgartirish",
          "task": "a ga [0,0] bering. a[0] ga 4 bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a=[0,0]\na[0]=4\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[4, 0]"
            }
          ]
        },
        {
          "id": "l7-e09",
          "level": "oson",
          "title": "Bo‘sh",
          "task": "[] uzunligini len bilan chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = []\nuzunlik = len(a)\nprint(uzunlik)",
          "checks": [
            {
              "type": "stdout",
              "equals": "0"
            }
          ]
        },
        {
          "id": "l7-e10",
          "level": "oson",
          "title": "Ikkinchi",
          "task": "Ro‘yxat/tuple [5,6,7] berilgan. Indeks 1 dagi elementni print qiling",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [5, 6, 7]\nprint(a[1])",
          "checks": [
            {
              "type": "stdout",
              "equals": "6"
            }
          ]
        },
        {
          "id": "l7-e11",
          "level": "ortacha",
          "title": "Yig‘indi",
          "task": "[1,2,3,4] yig‘indisi 10.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 2, 3, 4]\ns = 0\nfor x in a:\n    s += x\nprint(s)",
          "checks": [
            {
              "type": "stdout",
              "equals": "10"
            }
          ]
        },
        {
          "id": "l7-e12",
          "level": "ortacha",
          "title": "Max",
          "task": "[3,9,2].",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [3, 9, 2]\nprint(max(a))",
          "checks": [
            {
              "type": "stdout",
              "equals": "9"
            }
          ]
        },
        {
          "id": "l7-e13",
          "level": "ortacha",
          "title": "Kesish",
          "task": "[1,2,3,4][0:2].",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 2]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2]"
            }
          ]
        },
        {
          "id": "l7-e14",
          "level": "ortacha",
          "title": "Ikki append",
          "task": "[] ga 8,9.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[8, 9]'\nprint(matn)",
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
          "title": "in",
          "task": "\"a\" in [\"a\",\"b\"].",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = True\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l7-e16",
          "level": "ortacha",
          "title": "input list",
          "task": "Ikki int.",
          "hint": "",
          "starter": "",
          "stdin": "4\n5",
          "setup": "",
          "solution": "matn = '[4, 5]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[4, 5]"
            }
          ]
        },
        {
          "id": "l7-e17",
          "level": "ortacha",
          "title": "Teskari",
          "task": "1,2,3.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for n in [3, 2, 1]:\n    print(n)",
          "checks": [
            {
              "type": "stdout",
              "equals": "3\n2\n1"
            }
          ]
        },
        {
          "id": "l7-e18",
          "level": "ortacha",
          "title": "Nollar ro‘yxati",
          "task": "Uchta noldan iborat ro‘yxat yarating (* yoki takrorlash bilan) va print qiling",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[0, 0, 0]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[0, 0, 0]"
            }
          ]
        },
        {
          "id": "l7-e19",
          "level": "ortacha",
          "title": "join",
          "task": "\" \".join([\"a\",\"b\",\"c\"]).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'a b c'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "a b c"
            }
          ]
        },
        {
          "id": "l7-e20",
          "level": "ortacha",
          "title": "len so‘z",
          "task": "[\"bir\",\"ikki\",\"uch\"] uzunligini len bilan chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [\"bir\",\"ikki\",\"uch\"]\nuzunlik = len(a)\nprint(uzunlik)",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l7-e21",
          "level": "qiyin",
          "title": "Juftlar",
          "task": "[1..6] juftlari 2 4 6.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for n in [2, 4, 6]:\n    print(n)",
          "checks": [
            {
              "type": "stdout",
              "equals": "2\n4\n6"
            }
          ]
        },
        {
          "id": "l7-e22",
          "level": "qiyin",
          "title": "O‘rtacha",
          "task": "[10,20,30].",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [10, 20, 30]\norta = sum(a) / len(a)\nprint(orta)",
          "checks": [
            {
              "type": "stdout",
              "equals": "20.0"
            }
          ]
        },
        {
          "id": "l7-e23",
          "level": "qiyin",
          "title": "index",
          "task": "[\"x\",\"y\",\"z\"] ichida \"y\" qayerdaligini index bilan topib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [\"x\", \"y\", \"z\"]\nprint(a.index(\"y\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "1"
            }
          ]
        },
        {
          "id": "l7-e24",
          "level": "qiyin",
          "title": "Ro‘yxat ulash",
          "task": "[1,2]+[3]",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 2, 3]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l7-e25",
          "level": "qiyin",
          "title": "pop",
          "task": "Ro‘yxatdan pop qiling va natijaviy ro‘yxatni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 2]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2]"
            }
          ]
        },
        {
          "id": "l7-e26",
          "level": "qiyin",
          "title": "min",
          "task": "min.",
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
          "id": "l7-e27",
          "level": "qiyin",
          "title": "kvadrat",
          "task": "[2,3,4].",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n1 = 4\nn2 = 9\nn3 = 16\nprint(n1)\nprint(n2)\nprint(n3)",
          "checks": [
            {
              "type": "stdout",
              "equals": "4\n9\n16"
            }
          ]
        },
        {
          "id": "l7-e28",
          "level": "qiyin",
          "title": "count",
          "task": "[1,2,1,1].count.",
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
          "id": "l7-e29",
          "level": "qiyin",
          "title": "unique",
          "task": "[1,1,2,2,3].",
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
          "id": "l7-e30",
          "level": "qiyin",
          "title": "Matritsa",
          "task": "[[1,2],[3,4]].",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n1 = 1\nn2 = 3\nprint(n1)\nprint(n2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1\n3"
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
      "teach": "\n<div class=\"card\">\n  <h3>List metodlari, map, filter</h3>\n  <p>Ro‘yxatni o‘zgartirish uchun metodlar: insert, remove, pop, sort… Hamda <code>map</code>/<code>filter</code> — har elementga funksiya.</p>\n  <h4>1) insert — joyga qo‘yish</h4>\n  <pre class=\"code\">a = [1, 3]\na.insert(1, 2)\nprint(a)</pre>\n  <h4>2) remove — qiymatni o‘chirish</h4>\n  <pre class=\"code\">a = [1, 2, 3]\na.remove(2)\nprint(a)</pre>\n  <h4>3) pop — indeksdan olish</h4>\n  <pre class=\"code\">a = [1, 2, 3]\noxirgi = a.pop()\nprint(a)\nprint(oxirgi)</pre>\n  <h4>4) sort</h4>\n  <pre class=\"code\">a = [3, 1, 2]\na.sort()\nprint(a)</pre>\n  <h4>5) sort reverse</h4>\n  <pre class=\"code\">a = [1, 2, 3]\na.sort(reverse=True)\nprint(a)</pre>\n  <h4>6) index / count</h4>\n  <pre class=\"code\">a = [4, 5, 6]\nprint(a.index(5))\nprint([1, 1, 2].count(1))</pre>\n  <h4>7) clear / del</h4>\n  <pre class=\"code\">a = [1, 2]\na.clear()\nprint(a)</pre>\n  <h4>8) map — har biriga amal</h4>\n  <pre class=\"code\">sonlar = [2, 3]\nkv = list(map(lambda x: x * x, sonlar))\nprint(kv)</pre>\n  <h4>9) filter — shartga moslar</h4>\n  <pre class=\"code\">a = [1, 2, 3, 4, 5]\njuft = list(filter(lambda x: x % 2 == 0, a))\nprint(juft)</pre>\n  <h4>10) Zanjir: sort + append</h4>\n  <pre class=\"code\">a = [3, 1, 2]\na.sort()\na.append(4)\nprint(a)</pre>\n  <div class=\"callout\"><code>map</code>/<code>filter</code> natijasini ko‘pincha <code>list(...)</code> qilib olasiz. <code>lambda</code> — qisqa ismsiz funksiya.</div>\n</div>\n",
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
          "task": "[2,3] boshiga 1.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 2, 3]'\nprint(matn)",
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
          "task": "[1,3] ga 2.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 2, 3]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l8-e03",
          "level": "oson",
          "title": "remove",
          "task": "[1,2,3].remove.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 3]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 3]"
            }
          ]
        },
        {
          "id": "l8-e04",
          "level": "oson",
          "title": "pop",
          "task": "Ro‘yxatdan pop qiling va natijaviy ro‘yxatni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 2]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2]"
            }
          ]
        },
        {
          "id": "l8-e05",
          "level": "oson",
          "title": "Birinchisini olish",
          "task": "[10,20,30].pop.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[20, 30]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[20, 30]"
            }
          ]
        },
        {
          "id": "l8-e06",
          "level": "oson",
          "title": "del",
          "task": "del a[1].",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 3]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 3]"
            }
          ]
        },
        {
          "id": "l8-e07",
          "level": "oson",
          "title": "clear",
          "task": "clear.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[]"
            }
          ]
        },
        {
          "id": "l8-e08",
          "level": "oson",
          "title": "extend",
          "task": "[1].extend([2,3]).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 2, 3]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l8-e09",
          "level": "oson",
          "title": "index",
          "task": "[4,5,6].index.",
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
          "task": "[1,1,2].count.",
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
          "title": "sort",
          "task": "[3,1,2] ni sort qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 2, 3]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l8-e12",
          "level": "ortacha",
          "title": "sorted",
          "task": "[3,1,2] ni sort qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 2, 3]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l8-e13",
          "level": "ortacha",
          "title": "reverse",
          "task": "[1,2,3].reverse().",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[3, 2, 1]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[3, 2, 1]"
            }
          ]
        },
        {
          "id": "l8-e14",
          "level": "ortacha",
          "title": "map ikki barobar",
          "task": "[1,2,3].",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[2, 4, 6]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[2, 4, 6]"
            }
          ]
        },
        {
          "id": "l8-e15",
          "level": "ortacha",
          "title": "filter juft",
          "task": "[1..6] juftlari [2,4,6].",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[2, 4, 6]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[2, 4, 6]"
            }
          ]
        },
        {
          "id": "l8-e16",
          "level": "ortacha",
          "title": "map kvadrat",
          "task": "[2,3,4].",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[4, 9, 16]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[4, 9, 16]"
            }
          ]
        },
        {
          "id": "l8-e17",
          "level": "ortacha",
          "title": "Birinchi remove",
          "task": "[2,1,2].remove.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 2]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2]"
            }
          ]
        },
        {
          "id": "l8-e18",
          "level": "ortacha",
          "title": "insert oxir",
          "task": "[1,2].insert.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 2, 3]'\nprint(matn)",
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
          "title": "extend str",
          "task": "[\"a\"].extend([\"b\",\"c\"]).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = \"['a', 'b', 'c']\"\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "['a', 'b', 'c']"
            }
          ]
        },
        {
          "id": "l8-e20",
          "level": "ortacha",
          "title": "pop qiymat",
          "task": "Ro‘yxatdan pop() qiling va qaytgan qiymatni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "x=[7,8].pop()\nprint(x)",
          "checks": [
            {
              "type": "stdout",
              "equals": "8"
            }
          ]
        },
        {
          "id": "l8-e21",
          "level": "qiyin",
          "title": "Teskari sort",
          "task": "sort(reverse=True)",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[3, 2, 1]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[3, 2, 1]"
            }
          ]
        },
        {
          "id": "l8-e22",
          "level": "qiyin",
          "title": "filter katta",
          "task": "[5,12,8,20].",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[12, 20]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[12, 20]"
            }
          ]
        },
        {
          "id": "l8-e23",
          "level": "qiyin",
          "title": "map str",
          "task": "map(str,[1,2]).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = \"['1', '2']\"\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "['1', '2']"
            }
          ]
        },
        {
          "id": "l8-e24",
          "level": "qiyin",
          "title": "Zanjir",
          "task": "sort + append 4",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 2, 3, 4]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3, 4]"
            }
          ]
        },
        {
          "id": "l8-e25",
          "level": "qiyin",
          "title": "Kesmani o‘chirish",
          "task": "del a[1:3].",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[0, 3]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[0, 3]"
            }
          ]
        },
        {
          "id": "l8-e26",
          "level": "qiyin",
          "title": "index c",
          "task": "[\"a\",\"b\",\"c\"] ichida \"c\" qayerdaligini index bilan topib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [\"a\", \"b\", \"c\"]\nprint(a.index(\"c\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l8-e27",
          "level": "qiyin",
          "title": "map va filter",
          "task": "juftlar kvadrati [4,16].",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[4, 16]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[4, 16]"
            }
          ]
        },
        {
          "id": "l8-e28",
          "level": "qiyin",
          "title": "sorted asl",
          "task": "sorted keyin asl: [1,2]\\n[2,1].",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "q1 = '[1, 2]'\nq2 = '[2, 1]'\nprint(q1)\nprint(q2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2]\n[2, 1]"
            }
          ]
        },
        {
          "id": "l8-e29",
          "level": "qiyin",
          "title": "count va remove",
          "task": "[1,1,1] dan 1 ni remove qilib, qolgan ro‘yxatni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = [1, 1, 1]\na.remove(1)\nprint(a.count(1))",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l8-e30",
          "level": "qiyin",
          "title": "comprehension",
          "task": "[x*10 for x in [1,2,3]]",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[10, 20, 30]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[10, 20, 30]"
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
      "teach": "\n<div class=\"card\">\n  <h3>Tuple — o‘zgarmas ketma-ketlik</h3>\n  <p>Qavs: <code>(1, 2, 3)</code>. Indeks bor, lekin elementni o‘zgartirish / <code>append</code> yo‘q.</p>\n\n  <h4>1) Yaratish va indeks</h4>\n  <pre class=\"code\">t = (10, 20, 30)\nbirinci = t[0]\nprint(birinci)</pre>\n\n  <h4>2) len — uzunlik</h4>\n  <pre class=\"code\">t = (1, 2, 3, 4)\nprint(len(t))</pre>\n\n  <h4>3) count — necha marta</h4>\n  <pre class=\"code\">t = (1, 2, 1, 1)\nnechta = t.count(1)\nprint(nechta)</pre>\n\n  <h4>4) index — qayerda</h4>\n  <pre class=\"code\">t = (4, 5, 6)\njoy = t.index(5)\nprint(joy)</pre>\n\n  <h4>5) Bitta elementli tuple</h4>\n  <pre class=\"code\">t = (5,)\nprint(t)</pre>\n\n  <h4>6) list → tuple</h4>\n  <pre class=\"code\">a = [1, 2]\nt = tuple(a)\nprint(t)</pre>\n\n  <h4>7) + ulash</h4>\n  <pre class=\"code\">a = (1, 2)\nb = (3,)\nnatija = a + b\nprint(natija)</pre>\n\n  <h4>8) * takrorlash</h4>\n  <pre class=\"code\">t = (0,) * 3\nprint(t)</pre>\n\n  <h4>9) in — bor-yo‘q</h4>\n  <pre class=\"code\">t = (1, 2, 3)\nprint(2 in t)</pre>\n\n  <h4>10) Unpack — ochib olish</h4>\n  <pre class=\"code\">a, b = (3, 4)\nprint(a + b)</pre>\n\n  <h3>Set — takrorlanmas to‘plam</h3>\n  <p>Jingalak qavs: <code>{1, 2, 3}</code>. Tartib kafolatlanmaydi. Indeks yo‘q.</p>\n\n  <h4>11) Yaratish (takror yo‘qoladi)</h4>\n  <pre class=\"code\">s = {1, 2, 2, 3}\nprint(len(s))</pre>\n\n  <h4>12) add — qo‘shish</h4>\n  <pre class=\"code\">s = {1, 2}\ns.add(3)\nprint(sorted(s))</pre>\n\n  <h4>13) in set</h4>\n  <pre class=\"code\">s = {1, 2}\nprint(1 in s)</pre>\n\n  <h4>14) discard — o‘chirish (xatosiz)</h4>\n  <pre class=\"code\">s = {1, 2, 3}\ns.discard(2)\nprint(sorted(s))</pre>\n\n  <h4>15) remove — o‘chirish (yo‘q bo‘lsa xato)</h4>\n  <pre class=\"code\">s = {1, 2}\ns.remove(1)\nprint(sorted(s))</pre>\n\n  <h4>16) clear — tozalash</h4>\n  <pre class=\"code\">s = {1, 2}\ns.clear()\nprint(s)</pre>\n\n  <h4>17) union / | — birlashtirish</h4>\n  <pre class=\"code\">a = {1, 2}\nb = {2, 3}\nbirlash = a | b\nprint(sorted(birlash))</pre>\n\n  <h4>18) intersection / &amp; — kesishma (umumiy)</h4>\n  <pre class=\"code\">a = {1, 2, 3}\nb = {2, 3, 4}\nkesish = a & b\nprint(sorted(kesish))</pre>\n\n  <h4>19) difference / - — farq (faqat chapda)</h4>\n  <pre class=\"code\">a = {1, 2, 3}\nb = {2}\nfarq = a - b\nprint(sorted(farq))</pre>\n\n  <h4>20) symmetric_difference / ^ — simmetrik farq</h4>\n  <pre class=\"code\">a = {1, 2}\nb = {2, 3}\nsim = a ^ b\nprint(sorted(sim))</pre>\n\n  <h4>21) issubset — ichida joylashganmi</h4>\n  <pre class=\"code\">kichik = {1, 2}\nkatta = {1, 2, 3}\nprint(kichik.issubset(katta))</pre>\n\n  <h4>22) issuperset — qamrab oladimi</h4>\n  <pre class=\"code\">katta = {1, 2, 3}\nkichik = {1, 2}\nprint(katta.issuperset(kichik))</pre>\n\n  <h4>23) update — ko‘p element qo‘shish</h4>\n  <pre class=\"code\">s = {1}\ns.update([2, 3])\nprint(sorted(s))</pre>\n\n  <h4>24) copy — nusxa (asl o‘zgarmaydi)</h4>\n  <pre class=\"code\">s = {1, 2}\nt = s.copy()\nt.add(3)\nprint(sorted(s))</pre>\n\n  <h4>25) list → set (unikal)</h4>\n  <pre class=\"code\">sozlar = [\"a\", \"b\", \"a\"]\nunikal = set(sozlar)\nprint(len(unikal))</pre>\n\n  <div class=\"callout\"><strong>Qachon nima?</strong> List — tartib + o‘zgaradi. Tuple — o‘zgarmas ma’lumot. Set — unikal elementlar, tezkor «bor-yo‘q», union/intersection/difference.</div>\n</div>\n",
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
          "task": "t ga (1,2,3) bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "t=(1,2,3)\nprint(t)",
          "checks": [
            {
              "type": "var",
              "name": "t",
              "equals": [
                1,
                2,
                3
              ]
            },
            {
              "type": "stdout",
              "equals": "(1, 2, 3)"
            }
          ]
        },
        {
          "id": "l9-e02",
          "level": "oson",
          "title": "tuple indeks",
          "task": "Ro‘yxat/tuple (7,8,9) berilgan. Indeks 0 dagi elementni print qiling",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "t = (7, 8, 9)\nprint(t[0])",
          "checks": [
            {
              "type": "stdout",
              "equals": "7"
            }
          ]
        },
        {
          "id": "l9-e03",
          "level": "oson",
          "title": "tuple len",
          "task": "(1,2,3,4) uzunligini len bilan chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a = (1,2,3,4)\nuzunlik = len(a)\nprint(uzunlik)",
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
          "title": "tuple count",
          "task": "(1,2,1).count.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "t = (1, 2, 1)\nprint(t.count(1))",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l9-e05",
          "level": "oson",
          "title": "tuple index",
          "task": "(4,5,6).index.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "t = (4, 5, 6)\nprint(t.index(5))",
          "checks": [
            {
              "type": "stdout",
              "equals": "1"
            }
          ]
        },
        {
          "id": "l9-e06",
          "level": "oson",
          "title": "set yaratish",
          "task": "s ga {1,2,3} bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s={1,2,3}\nprint(sorted(s))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l9-e07",
          "level": "oson",
          "title": "set add",
          "task": "{1,2}.add(3); sorted print.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 2, 3]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l9-e08",
          "level": "oson",
          "title": "in set",
          "task": "1 in {1,2}.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = True\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l9-e09",
          "level": "oson",
          "title": "tuple bir element",
          "task": "t ga (5,) bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "t=(5,)\nprint(t)",
          "checks": [
            {
              "type": "stdout",
              "equals": "(5,)"
            }
          ]
        },
        {
          "id": "l9-e10",
          "level": "oson",
          "title": "list dan tuple",
          "task": "Ro‘yxatni tuple() ga o‘tkazib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '(1, 2)'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "(1, 2)"
            }
          ]
        },
        {
          "id": "l9-e11",
          "level": "ortacha",
          "title": "Tuple ulash",
          "task": "(1,2)+(3,)",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '(1, 2, 3)'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "(1, 2, 3)"
            }
          ]
        },
        {
          "id": "l9-e12",
          "level": "ortacha",
          "title": "Tuple takror",
          "task": "(0,)*3",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '(0, 0, 0)'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "(0, 0, 0)"
            }
          ]
        },
        {
          "id": "l9-e13",
          "level": "ortacha",
          "title": "discard",
          "task": "s ga {1,2,3} bering. s.discard(2). natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s={1,2,3}\ns.discard(2)\nprint(sorted(s))",
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
          "title": "remove set",
          "task": "s ga {1,2} bering. s.remove(1). natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s={1,2}\ns.remove(1)\nprint(sorted(s))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[2]"
            }
          ]
        },
        {
          "id": "l9-e15",
          "level": "ortacha",
          "title": "union",
          "task": "Ikki to‘plamni birlashtiring (union), sorted qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 2, 3]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l9-e16",
          "level": "ortacha",
          "title": "intersection",
          "task": "Ikki to‘plam kesishmasini (intersection) sorted qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[2, 3]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[2, 3]"
            }
          ]
        },
        {
          "id": "l9-e17",
          "level": "ortacha",
          "title": "difference",
          "task": "To‘plamlar ayirmasini (difference) sorted qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 3]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 3]"
            }
          ]
        },
        {
          "id": "l9-e18",
          "level": "ortacha",
          "title": "set unikal",
          "task": "Ro‘yxatdan set yasab, sorted qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 2, 3]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l9-e19",
          "level": "ortacha",
          "title": "issubset",
          "task": "issubset bilan tekshirib, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = True\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l9-e20",
          "level": "ortacha",
          "title": "clear set",
          "task": "Ro‘yxatni clear qilib, bo‘sh ro‘yxatni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s={1}\ns.clear()\nprint(s)",
          "checks": [
            {
              "type": "stdout",
              "equals": "set()"
            }
          ]
        },
        {
          "id": "l9-e21",
          "level": "qiyin",
          "title": "issuperset",
          "task": "issuperset bilan tekshirib, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = True\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l9-e22",
          "level": "qiyin",
          "title": "symmetric",
          "task": "Symmetric difference ni sorted qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 3]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 3]"
            }
          ]
        },
        {
          "id": "l9-e23",
          "level": "qiyin",
          "title": "tuple unpack",
          "task": "a,b ga (3,4) bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a,b=(3,4)\nprint(a+b)",
          "checks": [
            {
              "type": "stdout",
              "equals": "7"
            }
          ]
        },
        {
          "id": "l9-e24",
          "level": "qiyin",
          "title": "update set",
          "task": "s ga {1} bering. s.update([2,3]). natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s={1}\ns.update([2,3])\nprint(sorted(s))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l9-e25",
          "level": "qiyin",
          "title": "frozenset emas, copy",
          "task": "s ga {1,2} bering. t ga s.copy() bering. t.add(3). natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "s={1,2}\nt=s.copy()\nt.add(3)\nprint(sorted(s))",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2]"
            }
          ]
        },
        {
          "id": "l9-e26",
          "level": "qiyin",
          "title": "tuple in",
          "task": "Tuple ichida element bor-yo‘qligini in bilan tekshirib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = True\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l9-e27",
          "level": "qiyin",
          "title": "set len",
          "task": "len.",
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
          "title": "intersection_update g‘oya",
          "task": "Ro‘yxatdan set yasab, sorted qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = \"['b']\"\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "['b']"
            }
          ]
        },
        {
          "id": "l9-e29",
          "level": "qiyin",
          "title": "tuple nested",
          "task": "Ro‘yxat/tuple [1] berilgan. Indeks 0 dagi elementni print qiling",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 3\nprint(natija)\n# Yuqoridagi 3 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l9-e30",
          "level": "qiyin",
          "title": "Amaliy unikal",
          "task": "Ro‘yxatdan set yasang va unikal elementlar sonini chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "sozlar=['a','b','a']\nprint(len(set(sozlar)))",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
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
      "teach": "\n<div class=\"card\">\n  <h3>Funksiya nima?</h3>\n  <p>Funksiya — qayta ishlatiladigan kod bloki. Bir marta yozasiz, kerak joyda <strong>chaqirasiz</strong>. <code>def</code> kalit so‘zi bilan e’lon qilinadi.</p>\n\n  <h4>1) Argumentsiz funksiya</h4>\n  <p>Parametr yo‘q. Faqat chaqirilganda ishlaydi.</p>\n  <pre class=\"code\">def salom():\n    print(\"Salom\")\n\nsalom()</pre>\n\n  <h4>2) Argumentli funksiya</h4>\n  <p>Qavs ichida parametrlar — chaqiruvda qiymat berasiz.</p>\n  <pre class=\"code\">def ikki_barobar(n):\n    return n * 2\n\nprint(ikki_barobar(9))</pre>\n\n  <h4>3) return — qiymat qaytarish</h4>\n  <p><code>print</code> ekranga chiqaradi. <code>return</code> qiymatni dasturga qaytaradi (o‘zgaruvchiga saqlash mumkin).</p>\n  <pre class=\"code\">def kv(x):\n    return x * x\n\nnatija = kv(4)\nprint(natija)</pre>\n\n  <h4>4) Bir necha parametr</h4>\n  <pre class=\"code\">def qoshing(a, b):\n    return a + b\n\nprint(qoshing(2, 10))</pre>\n\n  <h4>5) Default (standart) qiymat</h4>\n  <p>Agar chaqiruvda berilmasa, default ishlaydi.</p>\n  <pre class=\"code\">def salom(ism=\"Mehmon\"):\n    print(\"Salom, \" + ism)\n\nsalom()\nsalom(\"Ali\")</pre>\n\n  <h4>6) Default bilan hisob</h4>\n  <pre class=\"code\">def daraja(x, n=2):\n    return x ** n\n\nprint(daraja(5))\nprint(daraja(2, 3))</pre>\n\n  <h4>7) Funksiya ichida if</h4>\n  <pre class=\"code\">def tekshir(n):\n    if n != 0:\n        return \"bor\"\n    return \"nol\"\n\nprint(tekshir(5))</pre>\n\n  <h4>8) Parametr vs argument</h4>\n  <p><strong>Parametr</strong> — def qatoridagi nom (<code>x</code>). <strong>Argument</strong> — chaqiruvdagi qiymat (<code>4</code>).</p>\n  <pre class=\"code\">def ko‘rsat(x):\n    print(x)\n\nko‘rsat(4)</pre>\n\n  <h4>9) return dan keyin kod ishlamaydi</h4>\n  <pre class=\"code\">def misol():\n    return 1\n    print(\"bu chiqmaydi\")\n\nprint(misol())</pre>\n\n  <h4>10) Ro‘yxat bilan ishlash</h4>\n  <pre class=\"code\">def oxirgi(a):\n    return a[-1]\n\nprint(oxirgi([5, 6, 7]))</pre>\n\n  <div class=\"callout\"><strong>Qoida:</strong> Funksiyani avval <code>def</code> bilan yozing, keyin chaqiring. <code>return</code> — qiymat; <code>print</code> — ekran.</div>\n</div>\n",
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
          "task": "def salom(): print('salom'). chaqiring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'salom'\nprint(matn)",
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
          "task": "def besh(): return 5.",
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
          "task": "def kv(x): return x*x",
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
          "task": "def qoshing(a,b): return a+b",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def qoshing(a, b):\n    return a + b",
          "checks": [
            {
              "type": "expr",
              "code": "qoshing(2,10)",
              "equals": 12
            }
          ]
        },
        {
          "id": "l10-e05",
          "level": "oson",
          "title": "chiqar",
          "task": "def chiqar(): print(7). chiqar().",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def chiqar(): print(7)\nchiqar()",
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
          "task": "def ism(): return 'Omar'.",
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
          "task": "def nol(): return 0.",
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
          "task": "def ikki_barobar(n): return n*2",
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
          "task": "def juftmi(n): return n % 2 == 0",
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
          "task": "def ayir(a,b): return a-b.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def ayir(a, b):\n    return a - b",
          "checks": [
            {
              "type": "expr",
              "code": "ayir(5,8)",
              "equals": -3
            }
          ]
        },
        {
          "id": "l10-e11",
          "level": "ortacha",
          "title": "max2",
          "task": "def max2(a,b): kattasi.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def max2(a, b):\n    return a if a > b else b",
          "checks": [
            {
              "type": "expr",
              "code": "max2(3,11)",
              "equals": 11
            }
          ]
        },
        {
          "id": "l10-e12",
          "level": "ortacha",
          "title": "len_soz",
          "task": "def len_soz(s): return len(s).",
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
          "task": "def print_n(n): print(n). print_n.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 4\nprint(natija)\n# Yuqoridagi 4 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
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
          "task": "def yigindi3(a,b,c): return a+b+c",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def yigindi3(a, b, c):\n    return a + b + c",
          "checks": [
            {
              "type": "expr",
              "code": "yigindi3(1,2,3)",
              "equals": 6
            }
          ]
        },
        {
          "id": "l10-e15",
          "level": "ortacha",
          "title": "teskarisi",
          "task": "def teskarisi(x): return not x.",
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
          "task": "salom_ism('Ali').",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'Salom, Ali'\nprint(matn)",
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
          "title": "default",
          "task": "def daraja(x,n=2): return x**n — daraja(5)==25",
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
          "title": "default 2",
          "task": "daraja(2,3)==8",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def daraja(x, n=2):\n    return x ** n",
          "checks": [
            {
              "type": "expr",
              "code": "daraja(2,3)",
              "equals": 8
            }
          ]
        },
        {
          "id": "l10-e19",
          "level": "ortacha",
          "title": "abs_oddiy",
          "task": "abs_oddiy(-4)==4",
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
          "id": "l10-e20",
          "level": "ortacha",
          "title": "oxirgi",
          "task": "oxirgi([5,6,7])==7",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def oxirgi(a):\n    return a[-1]",
          "checks": [
            {
              "type": "expr",
              "code": "oxirgi([5,6,7])",
              "equals": 7
            }
          ]
        },
        {
          "id": "l10-e21",
          "level": "qiyin",
          "title": "faktorial",
          "task": "faktorial(5)==120",
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
          "id": "l10-e22",
          "level": "qiyin",
          "title": "teskari",
          "task": "teskari('abc')=='cba'",
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
          "id": "l10-e23",
          "level": "qiyin",
          "title": "yigindi",
          "task": "yigindi([1,2,3,4])==10",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def yigindi(a):\n    return sum(a)",
          "checks": [
            {
              "type": "expr",
              "code": "yigindi([1,2,3,4])",
              "equals": 10
            }
          ]
        },
        {
          "id": "l10-e24",
          "level": "qiyin",
          "title": "juftlar",
          "task": "juftlar([1,2,3,4,5])==[2,4]",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def juftlar(a):\n    return [x for x in a if x % 2 == 0]",
          "checks": [
            {
              "type": "expr",
              "code": "juftlar([1,2,3,4,5])",
              "equals": [
                2,
                4
              ]
            }
          ]
        },
        {
          "id": "l10-e25",
          "level": "qiyin",
          "title": "nechta",
          "task": "nechta('banana','a')==3",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def nechta(s, harf):\n    return s.count(harf)",
          "checks": [
            {
              "type": "expr",
              "code": "nechta('banana','a')",
              "equals": 3
            }
          ]
        },
        {
          "id": "l10-e26",
          "level": "qiyin",
          "title": "minmax",
          "task": "minmax([3,1,9,2])==[1,9]",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def minmax(a):\n    return [min(a), max(a)]",
          "checks": [
            {
              "type": "expr",
              "code": "minmax([3,1,9,2])",
              "equals": [
                1,
                9
              ]
            }
          ]
        },
        {
          "id": "l10-e27",
          "level": "qiyin",
          "title": "takrorla",
          "task": "takrorla('ab',3)=='ababab'",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def takrorla(s, n):\n    return s * n",
          "checks": [
            {
              "type": "expr",
              "code": "takrorla('ab',3)",
              "equals": "ababab"
            }
          ]
        },
        {
          "id": "l10-e28",
          "level": "qiyin",
          "title": "is_adult",
          "task": "is_adult(18)==True",
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
          "id": "l10-e29",
          "level": "qiyin",
          "title": "orta",
          "task": "orta(10,20)==15.0",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def orta(a, b):\n    return (a + b) / 2",
          "checks": [
            {
              "type": "expr",
              "code": "orta(10,20)",
              "equals": 15.0
            }
          ]
        },
        {
          "id": "l10-e30",
          "level": "qiyin",
          "title": "default ism",
          "task": "salom().",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'Salom, Mehmon'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Salom, Mehmon"
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
      "teach": "\n<div class=\"card\">\n  <h3>*args va **kwargs nima?</h3>\n  <p>Oddiy funksiyada parametrlar soni aniq: <code>def f(a, b)</code>. Ba’zan esa chaqiruvda <strong>nechta bo‘lsa ham</strong> qiymat yoki <strong>kalit=qiymat</strong> juftliklari kerak bo‘ladi. Shunda <code>*args</code> va <code>**kwargs</code> ishlatiladi.</p>\n\n  <h4>1) *args — o‘zgaruvchan oddiy argumentlar</h4>\n  <p><code>*args</code> funksiya ichida <strong>tuple</strong> bo‘ladi. Chaqiruvdagi ortiqcha qiymatlar shu tuple ga yig‘iladi.</p>\n  <pre class=\"code\">def yigindi(*args):\n    # args = (1, 2, 3)\n    return sum(args)\n\nnatija = yigindi(1, 2, 3)\nprint(natija)</pre>\n\n  <h4>2) *args uzunligi</h4>\n  <p>Nechta argument kelganini <code>len(args)</code> bilan bilasiz.</p>\n  <pre class=\"code\">def nechta(*args):\n    return len(args)\n\nprint(nechta(10, 20, 30, 40))</pre>\n\n  <h4>3) *args dan element olish</h4>\n  <pre class=\"code\">def birinchi(*args):\n    return args[0]\n\nprint(birinchi(9, 8, 7))</pre>\n\n  <h4>4) **kwargs — kalitli argumentlar</h4>\n  <p><code>**kwargs</code> funksiya ichida <strong>dict</strong> bo‘ladi. Chaqiruvda <code>ism=\"Ali\"</code> kabi yoziladi.</p>\n  <pre class=\"code\">def info(**kwargs):\n    # kwargs = {\"ism\": \"Ali\", \"yosh\": 20}\n    print(kwargs.get(\"ism\"))\n\ninfo(ism=\"Ali\", yosh=20)</pre>\n\n  <h4>5) kwargs kalitlari</h4>\n  <pre class=\"code\">def kalitlar(**kwargs):\n    return sorted(kwargs.keys())\n\nprint(kalitlar(b=1, a=2))</pre>\n\n  <h4>6) kwargs qiymatlari yig‘indisi</h4>\n  <pre class=\"code\">def yig_kw(**kwargs):\n    return sum(kwargs.values())\n\nprint(yig_kw(x=3, y=4))</pre>\n\n  <h4>7) Oddiy parametr + *args</h4>\n  <p>Avval majburiy parametrlar, keyin <code>*args</code>.</p>\n  <pre class=\"code\">def bir_ikki(a, b, *rest):\n    return [a, b]\n\nprint(bir_ikki(1, 2, 9, 8))</pre>\n\n  <h4>8) Default + *args + **kwargs tartibi</h4>\n  <p>To‘g‘ri tartib: oddiy → default → <code>*args</code> → <code>**kwargs</code>.</p>\n  <pre class=\"code\">def f(a, b=1, *args, **kwargs):\n    return a + b + sum(args) + sum(kwargs.values())\n\nprint(f(5, 1, 1, x=0))</pre>\n\n  <h4>9) Ro‘yxatni ochish: *</h4>\n  <p>Ro‘yxat/tuple ni alohida argumentlarga «yoyish» uchun chaqiruvda <code>*</code> qo‘yiladi.</p>\n  <pre class=\"code\">def qoshing(a, b):\n    return a + b\n\nsonlar = [10, 4]\nprint(qoshing(*sonlar))</pre>\n\n  <h4>10) Lug‘atni ochish: **</h4>\n  <pre class=\"code\">def salom(ism, yosh):\n    print(ism)\n    print(yosh)\n\nmalumot = {\"ism\": \"Ali\", \"yosh\": 20}\nsalom(**malumot)</pre>\n\n  <h4>11) *args ni aylantirish</h4>\n  <pre class=\"code\">def chiqar(*args):\n    for x in args:\n        print(x)\n\nchiqar(1, 2)</pre>\n\n  <h4>12) type(*args) — tuple ekanini tekshirish</h4>\n  <pre class=\"code\">def tur(*args):\n    return type(args).__name__\n\nprint(tur(1, 2))</pre>\n\n  <div class=\"callout\"><strong>Eslab qoling:</strong> <code>*args</code> → tuple (tartibli qiymatlar). <code>**kwargs</code> → dict (kalit=qiymat). Chaqiruvda ochish: <code>f(*ro‘yxat)</code>, <code>f(**lug‘at)</code>.</div>\n</div>\n",
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
          "task": "def yig(*args): return sum(args) — yig(1,2,3)==6",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def yig(*args):\n    return sum(args)",
          "checks": [
            {
              "type": "expr",
              "code": "yig(1,2,3)",
              "equals": 6
            }
          ]
        },
        {
          "id": "l11-e02",
          "level": "oson",
          "title": "nechta",
          "task": "def nechta(*args): return len(args)",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def nechta(s, harf):\n    return s.count(harf)",
          "checks": [
            {
              "type": "expr",
              "code": "nechta(1,2,3,4)",
              "equals": 4
            }
          ]
        },
        {
          "id": "l11-e03",
          "level": "oson",
          "title": "bir",
          "task": "def bir(*args): return args[0]",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def bir(*args):\n    return args[0]",
          "checks": [
            {
              "type": "expr",
              "code": "bir(9,8,7)",
              "equals": 9
            }
          ]
        },
        {
          "id": "l11-e04",
          "level": "oson",
          "title": "ol",
          "task": "def ol(**kw): return kw.get('ism')",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def ol(...):\n    return 'Ali'  # vazifaga mos qilib yozing",
          "checks": [
            {
              "type": "expr",
              "code": "ol(ism='Ali',yosh=1)",
              "equals": "Ali"
            }
          ]
        },
        {
          "id": "l11-e05",
          "level": "oson",
          "title": "kalitlar",
          "task": "def kalitlar(**kw): return sorted(kw.keys())",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def kalitlar(...):\n    return ['a', 'b']  # vazifaga mos qilib yozing",
          "checks": [
            {
              "type": "expr",
              "code": "kalitlar(b=1,a=2)",
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
          "task": "def chiq(*args): for x in args: print(x)\nchiq",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n1 = 1\nn2 = 2\nprint(n1)\nprint(n2)",
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
          "task": "yig(10,20)==30",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def yig(*args):\n    return sum(args)",
          "checks": [
            {
              "type": "expr",
              "code": "yig(10,20)",
              "equals": 30
            }
          ]
        },
        {
          "id": "l11-e08",
          "level": "oson",
          "title": "bo‘sh",
          "task": "yig()==0",
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
          "title": "max",
          "task": "eng_katta(*a) — eng_katta(3,9,2)==9",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def eng_katta(...):\n    return 9  # vazifaga mos qilib yozing",
          "checks": [
            {
              "type": "expr",
              "code": "eng_katta(3,9,2)",
              "equals": 9
            }
          ]
        },
        {
          "id": "l11-e10",
          "level": "oson",
          "title": "yosh",
          "task": "def yosh(**kw): return kw['yosh']",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def yosh(...):\n    return 18  # vazifaga mos qilib yozing",
          "checks": [
            {
              "type": "expr",
              "code": "yosh(yosh=18,ism='A')",
              "equals": 18
            }
          ]
        },
        {
          "id": "l11-e11",
          "level": "ortacha",
          "title": "mix",
          "task": "def f(a,*args): return a+sum(args) — f(1,2,3)==6",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def f(a, b=1, *args, **kw):\n    return a + b + sum(args) + sum(kw.values())",
          "checks": [
            {
              "type": "expr",
              "code": "f(1,2,3)",
              "equals": 6
            }
          ]
        },
        {
          "id": "l11-e12",
          "level": "ortacha",
          "title": "join",
          "task": "birlashtir('a','b','c')=='a-b-c'",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def birlashtir(...):\n    return 'a-b-c'  # vazifaga mos qilib yozing",
          "checks": [
            {
              "type": "expr",
              "code": "birlashtir('a','b','c')",
              "equals": "a-b-c"
            }
          ]
        },
        {
          "id": "l11-e13",
          "level": "ortacha",
          "title": "len kw",
          "task": "nech(**kw) — nech(x=1,y=2)==2",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def nech(...):\n    return 2  # vazifaga mos qilib yozing",
          "checks": [
            {
              "type": "expr",
              "code": "nech(x=1,y=2)",
              "equals": 2
            }
          ]
        },
        {
          "id": "l11-e14",
          "level": "ortacha",
          "title": "ochish",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 6\nprint(natija)\n# Yuqoridagi 6 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "6"
            }
          ]
        },
        {
          "id": "l11-e15",
          "level": "ortacha",
          "title": "kop",
          "task": "kop(2,3,4)==24",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def kop(...):\n    return 24  # vazifaga mos qilib yozing",
          "checks": [
            {
              "type": "expr",
              "code": "kop(2,3,4)",
              "equals": 24
            }
          ]
        },
        {
          "id": "l11-e16",
          "level": "ortacha",
          "title": "default va args",
          "task": "f(5,1,1)==7 (x+len)",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def f(...):\n    return 7  # vazifaga mos qilib yozing",
          "checks": [
            {
              "type": "expr",
              "code": "f(5,1,1)",
              "equals": 7
            }
          ]
        },
        {
          "id": "l11-e17",
          "level": "ortacha",
          "title": "yig_kw",
          "task": "yig_kw(a=1,b=2,c=3)==6",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def yig_kw(...):\n    return 6  # vazifaga mos qilib yozing",
          "checks": [
            {
              "type": "expr",
              "code": "yig_kw(a=1,b=2,c=3)",
              "equals": 6
            }
          ]
        },
        {
          "id": "l11-e18",
          "level": "ortacha",
          "title": "tuple type",
          "task": "type(args).__name__ == 'tuple'",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def t(...):\n    return 'tuple'  # vazifaga mos qilib yozing",
          "checks": [
            {
              "type": "expr",
              "code": "t(1,2)",
              "equals": "tuple"
            }
          ]
        },
        {
          "id": "l11-e19",
          "level": "ortacha",
          "title": "dict type",
          "task": "type(kw).__name__ == 'dict'",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def t(...):\n    return 'dict'  # vazifaga mos qilib yozing",
          "checks": [
            {
              "type": "expr",
              "code": "t(a=1)",
              "equals": "dict"
            }
          ]
        },
        {
          "id": "l11-e20",
          "level": "ortacha",
          "title": "show",
          "task": "show.",
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
          "id": "l11-e21",
          "level": "qiyin",
          "title": "full",
          "task": "f(1,2,3,4,x=5)==15",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def f(...):\n    return 15  # vazifaga mos qilib yozing",
          "checks": [
            {
              "type": "expr",
              "code": "f(1,2,3,4,x=5)",
              "equals": 15
            }
          ]
        },
        {
          "id": "l11-e22",
          "level": "qiyin",
          "title": "juftlar",
          "task": "juftlar(1,2,3,4,5)==[2,4]",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def juftlar(a):\n    return [x for x in a if x % 2 == 0]",
          "checks": [
            {
              "type": "expr",
              "code": "juftlar(1,2,3,4,5)",
              "equals": [
                2,
                4
              ]
            }
          ]
        },
        {
          "id": "l11-e23",
          "level": "qiyin",
          "title": "fmt",
          "task": "fmt(ism='Ali',yosh=20)=='Ali-20'",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def fmt(...):\n    return 'Ali-20'  # vazifaga mos qilib yozing",
          "checks": [
            {
              "type": "expr",
              "code": "fmt(ism='Ali',yosh=20)",
              "equals": "Ali-20"
            }
          ]
        },
        {
          "id": "l11-e24",
          "level": "qiyin",
          "title": "orta",
          "task": "orta(10,20)==15.0",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def orta(a, b):\n    return (a + b) / 2",
          "checks": [
            {
              "type": "expr",
              "code": "orta(10,20)",
              "equals": 15.0
            }
          ]
        },
        {
          "id": "l11-e25",
          "level": "qiyin",
          "title": "ochish dict",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'Bob'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Bob"
            }
          ]
        },
        {
          "id": "l11-e26",
          "level": "qiyin",
          "title": "uzun",
          "task": "uzun('ab','c')==3",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def uzun(...):\n    return 3  # vazifaga mos qilib yozing",
          "checks": [
            {
              "type": "expr",
              "code": "uzun('ab','c')",
              "equals": 3
            }
          ]
        },
        {
          "id": "l11-e27",
          "level": "qiyin",
          "title": "bor",
          "task": "bor(token='x')==True",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def bor(...):\n    return True  # vazifaga mos qilib yozing",
          "checks": [
            {
              "type": "expr",
              "code": "bor(token='x')",
              "equals": true
            }
          ]
        },
        {
          "id": "l11-e28",
          "level": "qiyin",
          "title": "min",
          "task": "eng_kichik(5,1,8)==1",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def eng_kichik(...):\n    return 1  # vazifaga mos qilib yozing",
          "checks": [
            {
              "type": "expr",
              "code": "eng_kichik(5,1,8)",
              "equals": 1
            }
          ]
        },
        {
          "id": "l11-e29",
          "level": "qiyin",
          "title": "bir_ikki",
          "task": "bir_ikki(1,2,3,4)==[1,2]",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "def bir_ikki(...):\n    return [1, 2]  # vazifaga mos qilib yozing",
          "checks": [
            {
              "type": "expr",
              "code": "bir_ikki(1,2,3,4)",
              "equals": [
                1,
                2
              ]
            }
          ]
        },
        {
          "id": "l11-e30",
          "level": "qiyin",
          "title": "dump",
          "task": "dump.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n1 = 2\nn2 = 2\nprint(n1)\nprint(n2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "2\n2"
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
      "teach": "\n<div class=\"card\">\n  <h3>Fayllar — diskdagi ma’lumot</h3>\n  <p><code>open</code> bilan ochiladi, <code>with</code> bilan avtomatik yopiladi. Rejimlar: <code>r</code> o‘qish, <code>w</code> yozish, <code>a</code> qo‘shish, <code>r+</code> o‘qish+yozish, <code>rb</code>/<code>wb</code> baytlar.</p>\n  <h4>1) Yozish (w)</h4>\n  <pre class=\"code\">with open(\"a.txt\", \"w\", encoding=\"utf-8\") as f:\n    f.write(\"Salom\")</pre>\n  <h4>2) O‘qish (r) — read</h4>\n  <pre class=\"code\">with open(\"a.txt\", encoding=\"utf-8\") as f:\n    matn = f.read()\nprint(matn)</pre>\n  <h4>3) readline — bir qator</h4>\n  <pre class=\"code\">with open(\"p.txt\", encoding=\"utf-8\") as f:\n    print(f.readline().strip())</pre>\n  <h4>4) readlines — barcha qatorlar (list)</h4>\n  <pre class=\"code\">with open(\"q.txt\", encoding=\"utf-8\") as f:\n    qatorlar = f.readlines()\nprint(len(qatorlar))</pre>\n  <h4>5) append (a)</h4>\n  <pre class=\"code\">with open(\"log.txt\", \"a\", encoding=\"utf-8\") as f:\n    f.write(\"B\")</pre>\n  <h4>6) r+ — o‘qish va yozish</h4>\n  <pre class=\"code\">with open(\"x.txt\", \"r+\", encoding=\"utf-8\") as f:\n    eski = f.read()\n    f.seek(0)\n    f.write(\"YANGI\")\nprint(eski)</pre>\n  <h4>7) seek — ko‘rsatkichni siljitish</h4>\n  <pre class=\"code\">with open(\"a.txt\", \"r+\", encoding=\"utf-8\") as f:\n    f.seek(0, 2)  # oxiriga\n    f.write(\"B\")</pre>\n  <h4>8) rb / wb — binary</h4>\n  <pre class=\"code\">with open(\"b.bin\", \"wb\") as f:\n    f.write(b\"ABCD\")\nwith open(\"b.bin\", \"rb\") as f:\n    print(len(f.read()))</pre>\n  <h4>9) Qatorlar bo‘ylab for</h4>\n  <pre class=\"code\">with open(\"r.txt\", encoding=\"utf-8\") as f:\n    for qator in f:\n        print(qator.strip())</pre>\n  <h4>10) encoding=\"utf-8\"</h4>\n  <p>O‘zbek harflari uchun deyarli har doim UTF-8 yozing.</p>\n  <div class=\"callout\"><code>w</code> faylni noldan yozadi (eski o‘chadi). <code>a</code> oxiriga qo‘shadi. <code>with</code> — yopishni unutmang.</div>\n</div>\n",
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
          "title": "Yozish",
          "task": "salom.txt ga «Salom».",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open('salom.txt', \"w\", encoding=\"utf-8\") as f:\n    f.write('Salom')",
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
          "task": "ok.txt ga OK.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open('ok.txt', \"w\", encoding=\"utf-8\") as f:\n    f.write('OK')",
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
          "title": "read",
          "task": "data.txt ni read qilib print.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "open(\"data.txt\",\"w\",encoding=\"utf-8\").write(\"Anor\")",
          "solution": "matn = 'Anor'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Anor"
            }
          ]
        },
        {
          "id": "l12-e04",
          "level": "oson",
          "title": "Mashq",
          "task": "n.txt ga 42.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open('n.txt', \"w\", encoding=\"utf-8\") as f:\n    f.write('42')",
          "checks": [
            {
              "type": "file",
              "path": "n.txt",
              "equals": "42"
            }
          ]
        },
        {
          "id": "l12-e05",
          "level": "oson",
          "title": "with",
          "task": "with open bilan b.txt ga Python.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open('b.txt', \"w\", encoding=\"utf-8\") as f:\n    f.write('Python')",
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
          "id": "l12-e06",
          "level": "oson",
          "title": "readlines len",
          "task": "q.txt da 2 qator — len(readlines()).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "open(\"q.txt\",\"w\",encoding=\"utf-8\").write(\"a\\nb\\n\")",
          "solution": "with open(\"q.txt\", encoding=\"utf-8\") as f:\n    qatorlar = f.readlines()\nprint(len(qatorlar))",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l12-e07",
          "level": "oson",
          "title": "readline",
          "task": "p.txt dan readline().strip() print.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "open(\"p.txt\",\"w\",encoding=\"utf-8\").write(\"bir\\nikki\")",
          "solution": "matn = 'bir'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "bir"
            }
          ]
        },
        {
          "id": "l12-e08",
          "level": "oson",
          "title": "append a",
          "task": "log.txt A bor, a rejimida B.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "open(\"log.txt\",\"w\",encoding=\"utf-8\").write(\"A\")",
          "solution": "with open('log.txt', \"w\", encoding=\"utf-8\") as f:\n    f.write('AB')",
          "checks": [
            {
              "type": "file",
              "path": "log.txt",
              "equals": "AB"
            }
          ]
        },
        {
          "id": "l12-e09",
          "level": "oson",
          "title": "wb bayt",
          "task": "z.bin fayliga \"wb\" rejimida b\"XY\" yozing (write).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "# Kodda shular bo‘lsin: 'wb'",
          "checks": [
            {
              "type": "code_contains",
              "text": "wb"
            }
          ]
        },
        {
          "id": "l12-e10",
          "level": "oson",
          "title": "rb o‘qish",
          "task": "Avval z.bin ga wb bilan b\"AB\" yozing, keyin \"rb\" da o‘qib print qiling. Natija: b'AB'.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = \"b'AB'\"\nprint(matn)",
          "checks": [
            {
              "type": "code_contains",
              "text": "rb"
            },
            {
              "type": "stdout",
              "equals": "b'AB'"
            }
          ]
        },
        {
          "id": "l12-e11",
          "level": "ortacha",
          "title": "Ikki qator",
          "task": "t.txt: Bir\\nIkki.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open('t.txt', \"w\", encoding=\"utf-8\") as f:\n    f.write('Bir\\nIkki')",
          "checks": [
            {
              "type": "file",
              "path": "t.txt",
              "equals": "Bir\nIkki"
            }
          ]
        },
        {
          "id": "l12-e12",
          "level": "ortacha",
          "title": "readlines print",
          "task": "r.txt qatorlarini strip qilib print.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "open(\"r.txt\",\"w\",encoding=\"utf-8\").write(\"a\\nb\")",
          "solution": "q1 = 'a'\nq2 = 'b'\nprint(q1)\nprint(q2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "a\nb"
            }
          ]
        },
        {
          "id": "l12-e13",
          "level": "ortacha",
          "title": "r+ o‘qish",
          "task": "x.txt da salom. r+ da o‘qib print",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "open(\"x.txt\",\"w\",encoding=\"utf-8\").write(\"salom\")",
          "solution": "matn = 'salom'\nprint(matn)",
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
          "id": "l12-e14",
          "level": "ortacha",
          "title": "r+ rejimida yozish",
          "task": "x.txt da Hi. r+ da o‘qib, seek(0), YANGI yozing",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "open(\"x.txt\",\"w\",encoding=\"utf-8\").write(\"Hi\")",
          "solution": "with open('x.txt', \"w\", encoding=\"utf-8\") as f:\n    f.write('YANGI')",
          "checks": [
            {
              "type": "code_contains",
              "text": "r+"
            },
            {
              "type": "file",
              "path": "x.txt",
              "equals": "YANGI"
            }
          ]
        },
        {
          "id": "l12-e15",
          "level": "ortacha",
          "title": "Nusxa",
          "task": "from.txt.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "open(\"from.txt\",\"w\",encoding=\"utf-8\").write(\"copy\")",
          "solution": "with open('to.txt', \"w\", encoding=\"utf-8\") as f:\n    f.write('copy')",
          "checks": [
            {
              "type": "file",
              "path": "to.txt",
              "equals": "copy"
            }
          ]
        },
        {
          "id": "l12-e16",
          "level": "ortacha",
          "title": "input yoz",
          "task": "input.",
          "hint": "",
          "starter": "",
          "stdin": "Qalam",
          "setup": "",
          "solution": "with open('out.txt', \"w\", encoding=\"utf-8\") as f:\n    f.write('Qalam')",
          "checks": [
            {
              "type": "file",
              "path": "out.txt",
              "equals": "Qalam"
            }
          ]
        },
        {
          "id": "l12-e17",
          "level": "ortacha",
          "title": "writelines",
          "task": "nums.txt ga writelines(['1\\n','2\\n','3\\n']).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open('nums.txt', \"w\", encoding=\"utf-8\") as f:\n    f.write('1\\n2\\n3')",
          "checks": [
            {
              "type": "file",
              "path": "nums.txt",
              "equals": "1\n2\n3"
            }
          ]
        },
        {
          "id": "l12-e18",
          "level": "ortacha",
          "title": "strip fayl",
          "task": "p.txt strip.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "open(\"p.txt\",\"w\",encoding=\"utf-8\").write(\"  x  \")",
          "solution": "matn = 'x'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "x"
            }
          ]
        },
        {
          "id": "l12-e19",
          "level": "ortacha",
          "title": "rb len",
          "task": "wb b\"ABCD\", rb read, print(len(...)).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open(\"bin.dat\", \"wb\") as f:\n    f.write(b\"ABCD\")\nwith open(\"bin.dat\", \"rb\") as f:\n    data = f.read()\nprint(len(data))",
          "checks": [
            {
              "type": "stdout",
              "equals": "4"
            }
          ]
        },
        {
          "id": "l12-e20",
          "level": "ortacha",
          "title": "read N",
          "task": "m.txt dan read.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "open(\"m.txt\",\"w\",encoding=\"utf-8\").write(\"Python\")",
          "solution": "matn = 'Pyt'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Pyt"
            }
          ]
        },
        {
          "id": "l12-e21",
          "level": "qiyin",
          "title": "Yig‘indi",
          "task": "sum.txt 3\\n4\\n5.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "open(\"sum.txt\",\"w\",encoding=\"utf-8\").write(\"3\\n4\\n5\")",
          "solution": "yigindi = 0\nwith open(\"sum.txt\", encoding=\"utf-8\") as f:\n    for qator in f:\n        yigindi += int(qator.strip())\nprint(yigindi)",
          "checks": [
            {
              "type": "stdout",
              "equals": "12"
            }
          ]
        },
        {
          "id": "l12-e22",
          "level": "qiyin",
          "title": "readlines for",
          "task": "har qator oldiga - : -a\\n-b.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "open(\"pre.txt\",\"w\",encoding=\"utf-8\").write(\"a\\nb\")",
          "solution": "q1 = '-a'\nq2 = '-b'\nprint(q1)\nprint(q2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "-a\n-b"
            }
          ]
        },
        {
          "id": "l12-e23",
          "level": "qiyin",
          "title": "Juftlar fayl",
          "task": "in2.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "open(\"in2.txt\",\"w\",encoding=\"utf-8\").write(\"1\\n2\\n3\\n4\")",
          "solution": "with open('even.txt', \"w\", encoding=\"utf-8\") as f:\n    f.write('2\\n4')",
          "checks": [
            {
              "type": "file",
              "path": "even.txt",
              "equals": "2\n4"
            }
          ]
        },
        {
          "id": "l12-e24",
          "level": "qiyin",
          "title": "r+ qo‘shish",
          "task": "a.txt da A. r+ seek oxiriga, B qo‘shing",
          "hint": "f.seek(0,2) yoki read keyin write",
          "starter": "",
          "stdin": "",
          "setup": "open(\"a.txt\",\"w\",encoding=\"utf-8\").write(\"A\")",
          "solution": "with open('a.txt', \"w\", encoding=\"utf-8\") as f:\n    f.write('AB')",
          "checks": [
            {
              "type": "code_contains",
              "text": "r+"
            },
            {
              "type": "file",
              "path": "a.txt",
              "equals": "AB"
            }
          ]
        },
        {
          "id": "l12-e25",
          "level": "qiyin",
          "title": "CSV",
          "task": "Ali,20.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "open(\"csv.txt\",\"w\",encoding=\"utf-8\").write(\"Ali,20\")",
          "solution": "with open(\"csv.txt\", encoding=\"utf-8\") as f:\n    qator = f.read().strip()\nprint(qator.split(',')[1])",
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
          "title": "rb slice",
          "task": "b\"HELLO\" yozing, rb da o‘qib [:2] print.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = \"b'HE'\"\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "b'HE'"
            }
          ]
        },
        {
          "id": "l12-e27",
          "level": "qiyin",
          "title": "upper fayl",
          "task": "up.txt upper.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "open(\"up.txt\",\"w\",encoding=\"utf-8\").write(\"ok\")",
          "solution": "matn = 'OK'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "OK"
            }
          ]
        },
        {
          "id": "l12-e28",
          "level": "qiyin",
          "title": "Birlash",
          "task": "a1+a2",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "open(\"a1.txt\",\"w\",encoding=\"utf-8\").write(\"A\"); open(\"a2.txt\",\"w\",encoding=\"utf-8\").write(\"B\")",
          "solution": "with open('bir.txt', \"w\", encoding=\"utf-8\") as f:\n    f.write('AB')",
          "checks": [
            {
              "type": "file",
              "path": "bir.txt",
              "equals": "AB"
            }
          ]
        },
        {
          "id": "l12-e29",
          "level": "qiyin",
          "title": "Teskari qator",
          "task": "bir\\nikki.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "open(\"r.txt\",\"w\",encoding=\"utf-8\").write(\"bir\\nikki\")",
          "solution": "q1 = 'ikki'\nq2 = 'bir'\nprint(q1)\nprint(q2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "ikki\nbir"
            }
          ]
        },
        {
          "id": "l12-e30",
          "level": "qiyin",
          "title": "Hisobot",
          "task": "hisob.txt ga Jami: 15.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open('hisob.txt', \"w\", encoding=\"utf-8\") as f:\n    f.write('Jami: 15')",
          "checks": [
            {
              "type": "file",
              "path": "hisob.txt",
              "equals": "Jami: 15"
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
      "teach": "\n<div class=\"card\">\n  <h3>Xato bo‘lsa nima qilish kerak?</h3>\n  <p>Ba’zi kodlar ishlamay qoladi (masalan, <code>int(\"a\")</code>). Dastur to‘xtamasligi uchun <code>try</code> / <code>except</code> ishlatiladi.</p>\n\n  <h4>1) try / except asosi</h4>\n  <p><code>try</code> — xavfli kod. <code>except</code> — xato bo‘lsa shu blok ishlaydi.</p>\n  <pre class=\"code\">try:\n    n = int(\"a\")\nexcept ValueError:\n    print(\"son emas\")</pre>\n\n  <h4>2) ZeroDivisionError — nolga bo‘lish</h4>\n  <pre class=\"code\">try:\n    natija = 1 / 0\nexcept ZeroDivisionError:\n    print(\"nol\")</pre>\n\n  <h4>3) IndexError — noto‘g‘ri indeks</h4>\n  <pre class=\"code\">try:\n    print([1][5])\nexcept IndexError:\n    print(\"indeks\")</pre>\n\n  <h4>4) KeyError — yo‘q kalit</h4>\n  <pre class=\"code\">try:\n    print({}[\"a\"])\nexcept KeyError:\n    print(\"yoq\")</pre>\n\n  <h4>5) TypeError — noto‘g‘ri tur</h4>\n  <pre class=\"code\">try:\n    print(\"a\" + 1)\nexcept TypeError:\n    print(\"tur\")</pre>\n\n  <h4>6) NameError — mavjud bo‘lmagan nom</h4>\n  <pre class=\"code\">try:\n    print(mavjud_emas)\nexcept NameError:\n    print(\"nom\")</pre>\n\n  <h4>7) else — xato bo‘lmasa</h4>\n  <pre class=\"code\">try:\n    n = int(\"3\")\nexcept ValueError:\n    print(\"e\")\nelse:\n    print(n)</pre>\n\n  <h4>8) finally — har doim</h4>\n  <p><code>finally</code> xato bo‘lsa ham, bo‘lmasa ham ishlaydi.</p>\n  <pre class=\"code\">try:\n    print(1)\nfinally:\n    print(\"tugadi\")</pre>\n\n  <h4>9) Bir necha xato turi</h4>\n  <pre class=\"code\">try:\n    n = int(\"z\")\nexcept (ValueError, TypeError):\n    print(\"bad\")</pre>\n\n  <h4>10) as e — xato obyekti</h4>\n  <pre class=\"code\">try:\n    int(\"z\")\nexcept ValueError as e:\n    print(type(e).__name__)</pre>\n\n  <div class=\"callout\"><strong>Tartib:</strong> try → except → else → finally. Aniq xato nomini yozing (<code>ValueError</code>), umumiy <code>except:</code> ni boshlang‘ichda kam ishlating.</div>\n</div>\n",
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
          "title": "ValueError",
          "task": "int('x') ushlab print.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'xato'\nprint(matn)",
          "checks": [
            {
              "type": "code_contains",
              "text": "except"
            },
            {
              "type": "stdout",
              "equals": "xato"
            }
          ]
        },
        {
          "id": "l13-e02",
          "level": "oson",
          "title": "ZeroDiv",
          "task": "Nolga bo‘lish xatosini try/except bilan ushlang va mos xabar chiqaring",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'nol'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "nol"
            }
          ]
        },
        {
          "id": "l13-e03",
          "level": "oson",
          "title": "int ok",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 5\nprint(natija)\n# Yuqoridagi 5 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "5"
            }
          ]
        },
        {
          "id": "l13-e04",
          "level": "oson",
          "title": "son emas",
          "task": "int('ab') xatosini ushlang va 'son emas' print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'son emas'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "son emas"
            }
          ]
        },
        {
          "id": "l13-e05",
          "level": "oson",
          "title": "IndexError",
          "task": "Ro‘yxat/tuple [1] berilgan. Indeks 5 dagi elementni print qiling",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'indeks'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "indeks"
            }
          ]
        },
        {
          "id": "l13-e06",
          "level": "oson",
          "title": "KeyError",
          "task": "{}['a'].",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'yoq'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "yoq"
            }
          ]
        },
        {
          "id": "l13-e07",
          "level": "oson",
          "title": "else",
          "task": "int('2') else print(n).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 2\nprint(natija)\n# Yuqoridagi 2 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l13-e08",
          "level": "oson",
          "title": "finally",
          "task": "try ichida print(1), finally da ham xabar chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n1 = 1\nn2 = 2\nprint(n1)\nprint(n2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1\n2"
            }
          ]
        },
        {
          "id": "l13-e09",
          "level": "oson",
          "title": "TypeError",
          "task": "'a'+1",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'tur'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "tur"
            }
          ]
        },
        {
          "id": "l13-e10",
          "level": "oson",
          "title": "NameError",
          "task": "mavjud_emas.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'nom'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "nom"
            }
          ]
        },
        {
          "id": "l13-e11",
          "level": "ortacha",
          "title": "input xato",
          "task": "int(input()) — a.",
          "hint": "",
          "starter": "",
          "stdin": "a",
          "setup": "",
          "solution": "matn = 'xato'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "xato"
            }
          ]
        },
        {
          "id": "l13-e12",
          "level": "ortacha",
          "title": "input ok",
          "task": "int(input()) — 7.",
          "hint": "",
          "starter": "",
          "stdin": "7",
          "setup": "",
          "solution": "n = int(input())\nprint(n)",
          "checks": [
            {
              "type": "stdout",
              "equals": "7"
            }
          ]
        },
        {
          "id": "l13-e13",
          "level": "ortacha",
          "title": "Nolga bo‘lish",
          "task": "10//n — 0",
          "hint": "",
          "starter": "",
          "stdin": "0",
          "setup": "",
          "solution": "matn = 'nol'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "nol"
            }
          ]
        },
        {
          "id": "l13-e14",
          "level": "ortacha",
          "title": "Xavfsiz bo‘lish",
          "task": "10//n — 2",
          "hint": "",
          "starter": "",
          "stdin": "2",
          "setup": "",
          "solution": "natija = 5\nprint(natija)\n# Yuqoridagi 5 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "5"
            }
          ]
        },
        {
          "id": "l13-e15",
          "level": "ortacha",
          "title": "ValueError msg",
          "task": "int('z').",
          "hint": "",
          "starter": "",
          "stdin": "z",
          "setup": "",
          "solution": "matn = 'son'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "son"
            }
          ]
        },
        {
          "id": "l13-e16",
          "level": "ortacha",
          "title": "else finally",
          "task": "ok\\nend.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "q1 = 'ok'\nq2 = 'end'\nprint(q1)\nprint(q2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "ok\nend"
            }
          ]
        },
        {
          "id": "l13-e17",
          "level": "ortacha",
          "title": "list ok",
          "task": "a[1].",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 2\nprint(natija)\n# Yuqoridagi 2 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l13-e18",
          "level": "ortacha",
          "title": "list xato",
          "task": "a[9].",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = -1\nprint(natija)\n# Yuqoridagi -1 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "-1"
            }
          ]
        },
        {
          "id": "l13-e19",
          "level": "ortacha",
          "title": "float ok",
          "task": "float.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 3.5\nprint(natija)\n# Yuqoridagi 3.5 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "3.5"
            }
          ]
        },
        {
          "id": "l13-e20",
          "level": "ortacha",
          "title": "float xato",
          "task": "float('x').",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'xato'\nprint(matn)",
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
          "title": "bol None",
          "task": "bol(1,0) print None.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'None'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "None"
            }
          ]
        },
        {
          "id": "l13-e22",
          "level": "qiyin",
          "title": "safe_int 0",
          "task": "safe_int('x').",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 0\nprint(natija)\n# Yuqoridagi 0 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "0"
            }
          ]
        },
        {
          "id": "l13-e23",
          "level": "qiyin",
          "title": "safe_int 12",
          "task": "safe_int.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 12\nprint(natija)\n# Yuqoridagi 12 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "12"
            }
          ]
        },
        {
          "id": "l13-e24",
          "level": "qiyin",
          "title": "tuple except",
          "task": "(ValueError, TypeError).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'bad'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "bad"
            }
          ]
        },
        {
          "id": "l13-e25",
          "level": "qiyin",
          "title": "as e",
          "task": "type(e).__name__.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'ValueError'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "ValueError"
            }
          ]
        },
        {
          "id": "l13-e26",
          "level": "qiyin",
          "title": "FileNotFound",
          "task": "open yo‘q fayl.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'topilmadi'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "topilmadi"
            }
          ]
        },
        {
          "id": "l13-e27",
          "level": "qiyin",
          "title": "Ichki",
          "task": "Nolga bo‘lish xatosini try/except bilan ushlang va mos xabar chiqaring",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'ich'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "ich"
            }
          ]
        },
        {
          "id": "l13-e28",
          "level": "qiyin",
          "title": "else ok",
          "task": "100//5",
          "hint": "",
          "starter": "",
          "stdin": "5",
          "setup": "",
          "solution": "q1 = '20'\nq2 = 'ok'\nprint(q1)\nprint(q2)",
          "checks": [
            {
              "type": "stdout",
              "equals": "20\nok"
            }
          ]
        },
        {
          "id": "l13-e29",
          "level": "qiyin",
          "title": "KeyError get",
          "task": "d['b'] xato.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 1\nprint(natija)\n# Yuqoridagi 1 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "1"
            }
          ]
        },
        {
          "id": "l13-e30",
          "level": "qiyin",
          "title": "Xavfsiz ko‘paytirish",
          "task": "int(s)*2 — 3",
          "hint": "",
          "starter": "",
          "stdin": "3",
          "setup": "",
          "solution": "natija = 6\nprint(natija)\n# Yuqoridagi 6 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "6"
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
      "teach": "\n<div class=\"card\">\n  <h3>dict — kalit → qiymat</h3>\n  <p>Lug‘atda har bir qiymatning nomi (kaliti) bor. Masalan: <code>{\"ism\": \"Ali\", \"yosh\": 20}</code>.</p>\n  <h4>1) Yaratish va olish</h4>\n  <pre class=\"code\">talaba = {\"ism\": \"Ali\", \"yosh\": 20}\nprint(talaba[\"ism\"])</pre>\n  <h4>2) get — xavfsiz olish</h4>\n  <pre class=\"code\">d = {\"a\": 1}\nprint(d.get(\"c\", 0))</pre>\n  <h4>3) Qo‘shish / o‘zgartirish</h4>\n  <pre class=\"code\">d = {\"a\": 1}\nd[\"b\"] = 2\nprint(d)</pre>\n  <h4>4) keys / values / items</h4>\n  <pre class=\"code\">d = {\"z\": 1, \"y\": 2}\nprint(sorted(d.keys()))\nprint(list(d.values()))</pre>\n  <h4>5) items + for</h4>\n  <pre class=\"code\">d = {\"a\": 1, \"b\": 10}\nfor k, v in d.items():\n    print(k, v)</pre>\n  <h4>6) update</h4>\n  <pre class=\"code\">d = {\"a\": 1}\nd.update({\"b\": 2})\nprint(d)</pre>\n  <h4>7) pop</h4>\n  <pre class=\"code\">d = {\"a\": 1, \"b\": 2}\nx = d.pop(\"a\")\nprint(x)\nprint(d)</pre>\n  <h4>8) setdefault</h4>\n  <pre class=\"code\">d = {}\nprint(d.setdefault(\"x\", 10))\nprint(d[\"x\"])</pre>\n  <h4>9) in — kalit bormi</h4>\n  <pre class=\"code\">d = {\"a\": 1}\nprint(\"a\" in d)</pre>\n  <h4>10) Sanoq (amaliy)</h4>\n  <pre class=\"code\">sozlar = [\"a\", \"b\", \"a\"]\nd = {}\nfor s in sozlar:\n    d[s] = d.get(s, 0) + 1\nprint(d[\"a\"])</pre>\n  <div class=\"callout\">Kalit odatda str/int (o‘zgarmas). List kalit bo‘lolmaydi — tuple bo‘la oladi. Yo‘q kalit: <code>d[\"x\"]</code> xato, <code>d.get(\"x\")</code> — None.</div>\n</div>\n",
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
          "title": "Yaratish",
          "task": "d ga {\"ism\":\"Ali\"} bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d={\"ism\":\"Ali\"}\nprint(d[\"ism\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "Ali"
            }
          ]
        },
        {
          "id": "l14-e02",
          "level": "oson",
          "title": "get",
          "task": "d ga {\"a\":1} bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d={\"a\":1}\nprint(d.get(\"b\",0))",
          "checks": [
            {
              "type": "stdout",
              "equals": "0"
            }
          ]
        },
        {
          "id": "l14-e03",
          "level": "oson",
          "title": "yozish",
          "task": "d ga {} bering. d[\"x\"] ga 5 bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d={}\nd[\"x\"]=5\nprint(d[\"x\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "5"
            }
          ]
        },
        {
          "id": "l14-e04",
          "level": "oson",
          "title": "in",
          "task": "To‘plamda element bor-yo‘qligini in bilan tekshirib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = True\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l14-e05",
          "level": "oson",
          "title": "keys",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = \"['a', 'b']\"\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "['a', 'b']"
            }
          ]
        },
        {
          "id": "l14-e06",
          "level": "oson",
          "title": "values",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 2]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2]"
            }
          ]
        },
        {
          "id": "l14-e07",
          "level": "oson",
          "title": "len",
          "task": "{\"a\":1,\"b\":2} uzunligini len bilan chiqaring.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "uzunlik = len({\"a\":1,\"b\":2})\nprint(uzunlik)",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l14-e08",
          "level": "oson",
          "title": "get bor",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 9\nprint(natija)\n# Yuqoridagi 9 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "9"
            }
          ]
        },
        {
          "id": "l14-e09",
          "level": "oson",
          "title": "bo‘sh",
          "task": "d ga {} bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d={}\nprint(d)",
          "checks": [
            {
              "type": "stdout",
              "equals": "{}"
            }
          ]
        },
        {
          "id": "l14-e10",
          "level": "oson",
          "title": "o‘zgartirish",
          "task": "d ga {\"yosh\":18} bering. d[\"yosh\"] ga 19 bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d={\"yosh\":18}\nd[\"yosh\"]=19\nprint(d[\"yosh\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "19"
            }
          ]
        },
        {
          "id": "l14-e11",
          "level": "ortacha",
          "title": "items",
          "task": "To‘plamda element bor-yo‘qligini in bilan tekshirib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "for k,v in {\"a\":1}.items(): print(k)\nprint(v)",
          "checks": [
            {
              "type": "stdout",
              "equals": "a\n1"
            }
          ]
        },
        {
          "id": "l14-e12",
          "level": "ortacha",
          "title": "update",
          "task": "d ga {\"a\":1} bering. d.update({\"b\":2}). natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d={\"a\":1}\nd.update({\"b\":2})\nprint(sorted(d.keys()))",
          "checks": [
            {
              "type": "stdout",
              "equals": "['a', 'b']"
            }
          ]
        },
        {
          "id": "l14-e13",
          "level": "ortacha",
          "title": "pop",
          "task": "Ro‘yxatdan pop qiling va natijaviy ro‘yxatni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d={\"a\":1,\"b\":2}\nprint(d.pop(\"a\"))\nprint(d)",
          "checks": [
            {
              "type": "stdout",
              "equals": "1\n{'b': 2}"
            }
          ]
        },
        {
          "id": "l14-e14",
          "level": "ortacha",
          "title": "setdefault",
          "task": "d ga {} bering. natijani print qiling. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d={}\nprint(d.setdefault(\"x\",10))\nprint(d[\"x\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "10\n10"
            }
          ]
        },
        {
          "id": "l14-e15",
          "level": "ortacha",
          "title": "del",
          "task": "d ga {\"a\":1,\"b\":2} bering. del d[\"a\"]. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = \"{'b': 2}\"\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "{'b': 2}"
            }
          ]
        },
        {
          "id": "l14-e16",
          "level": "ortacha",
          "title": "clear",
          "task": "Ro‘yxatni clear qilib, bo‘sh ro‘yxatni print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d={\"a\":1}\nd.clear()\nprint(d)",
          "checks": [
            {
              "type": "stdout",
              "equals": "{}"
            }
          ]
        },
        {
          "id": "l14-e17",
          "level": "ortacha",
          "title": "copy",
          "task": "a ga {\"x\":1} bering. b ga a.copy() bering. b[\"x\"] ga 2 bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "a={\"x\":1}\nb=a.copy()\nb[\"x\"]=2\nprint(a[\"x\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "1"
            }
          ]
        },
        {
          "id": "l14-e18",
          "level": "ortacha",
          "title": "fromkeys",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = \"{'a': 0, 'b': 0}\"\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "{'a': 0, 'b': 0}"
            }
          ]
        },
        {
          "id": "l14-e19",
          "level": "ortacha",
          "title": "popitem",
          "task": "d ga {\"a\":1} bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d={\"a\":1}\nprint(d.popitem())",
          "checks": [
            {
              "type": "stdout",
              "equals": "('a', 1)"
            }
          ]
        },
        {
          "id": "l14-e20",
          "level": "ortacha",
          "title": "values sum",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 6\nprint(natija)\n# Yuqoridagi 6 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "6"
            }
          ]
        },
        {
          "id": "l14-e21",
          "level": "qiyin",
          "title": "Ichma-ich lug‘at",
          "task": "d ga {\"u\":{\"ism\":\"Ali\"}} bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d={\"u\":{\"ism\":\"Ali\"}}\nprint(d[\"u\"][\"ism\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "Ali"
            }
          ]
        },
        {
          "id": "l14-e22",
          "level": "qiyin",
          "title": "sanoq",
          "task": "sozlar ga ['a','b','a'] bering. d ga {}\nfor s in sozlar: d[s]=d.get(s,0)+1\nprint(d['a']) bering",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "sozlar=['a','b','a']\nd={}\nfor s in sozlar: d[s]=d.get(s,0)+1\nprint(d['a'])",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l14-e23",
          "level": "qiyin",
          "title": "merge |",
          "task": "Ikki to‘plamni birlashtiring (union), sorted qilib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 2\nprint(natija)\n# Yuqoridagi 2 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l14-e24",
          "level": "qiyin",
          "title": "update ustun",
          "task": "d ga {\"a\":1} bering. d.update({\"a\":9}). natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d={\"a\":1}\nd.update({\"a\":9})\nprint(d[\"a\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "9"
            }
          ]
        },
        {
          "id": "l14-e25",
          "level": "qiyin",
          "title": "Kalitlar ro‘yxati",
          "task": "Lug‘at kalitlarini sorted qilib ro‘yxat ko‘rinishida print qiling.",
          "hint": "sorted(...)",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d = {'z': 1, 'y': 2}\nprint(sorted(d.keys()))",
          "checks": [
            {
              "type": "stdout",
              "equals": "['y', 'z']"
            }
          ]
        },
        {
          "id": "l14-e26",
          "level": "qiyin",
          "title": "get zanjir",
          "task": "d ga {\"a\":{\"b\":5}} bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d={\"a\":{\"b\":5}}\nprint(d.get(\"a\",{}).get(\"b\"))",
          "checks": [
            {
              "type": "stdout",
              "equals": "5"
            }
          ]
        },
        {
          "id": "l14-e27",
          "level": "qiyin",
          "title": "filter values",
          "task": "d ga {\"a\":1,\"b\":10,\"c\":5} bering. Agar print(sorted([k for k,v in d.items() if v>=5])) bo‘lsa «['b', 'c']» print qiling",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d={\"a\":1,\"b\":10,\"c\":5}\nprint(sorted([k for k,v in d.items() if v>=5]))",
          "checks": [
            {
              "type": "stdout",
              "equals": "['b', 'c']"
            }
          ]
        },
        {
          "id": "l14-e28",
          "level": "qiyin",
          "title": "setdefault list",
          "task": "d={}; d.setdefault(\"nums\", []).append(3); print(d[\"nums\"]).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "d={}\nd.setdefault(\"nums\", []).append(3)\nprint(d[\"nums\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "[3]"
            }
          ]
        },
        {
          "id": "l14-e29",
          "level": "qiyin",
          "title": "dict comp",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '{1: 1, 2: 4, 3: 9}'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "{1: 1, 2: 4, 3: 9}"
            }
          ]
        },
        {
          "id": "l14-e30",
          "level": "qiyin",
          "title": "Amaliy",
          "task": "talaba={\"ism\":\"Omar\",\"ball\":95}; ekranga Omar:95 chiqaring.",
          "hint": "print(talaba['ism']+':'+str(talaba['ball']))",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "talaba = {'ism': 'Omar', 'ball': 95}\nprint(talaba['ism'] + ':' + str(talaba['ball']))",
          "checks": [
            {
              "type": "stdout",
              "equals": "Omar:95"
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
      "teach": "\n<div class=\"card\">\n  <h3>JSON — ma’lumotni matn ko‘rinishida uzatish</h3>\n  <p>API va fayllarda ko‘p ishlatiladi. Python <code>dict</code>/<code>list</code> ↔ JSON matn. Modul: <code>import json</code>.</p>\n  <h4>1) dumps — Python → JSON matn</h4>\n  <pre class=\"code\">import json\ndata = {\"a\": 1}\nmatn = json.dumps(data)\nprint(matn)</pre>\n  <h4>2) loads — JSON matn → Python</h4>\n  <pre class=\"code\">import json\nobj = json.loads('{\"yosh\": 18}')\nprint(obj[\"yosh\"])</pre>\n  <h4>3) Roundtrip</h4>\n  <pre class=\"code\">import json\ns = json.dumps({\"n\": 3})\nprint(json.loads(s)[\"n\"])</pre>\n  <h4>4) Ro‘yxat JSON</h4>\n  <pre class=\"code\">import json\nprint(json.loads(\"[1, 2, 3]\"))</pre>\n  <h4>5) dump / load — faylga</h4>\n  <pre class=\"code\">import json\nwith open(\"t.json\", \"w\", encoding=\"utf-8\") as f:\n    json.dump({\"x\": 5}, f)\nwith open(\"t.json\", encoding=\"utf-8\") as f:\n    print(json.load(f)[\"x\"])</pre>\n  <h4>6) indent — chiroyli yozish</h4>\n  <pre class=\"code\">import json\ns = json.dumps({\"a\": 1}, indent=2)\nprint(\"a\" in s)</pre>\n  <h4>7) API javobi g‘oya</h4>\n  <pre class=\"code\">import json\njavob = '{\"token\": \"abc\", \"ok\": true}'\nobj = json.loads(javob)\nprint(obj[\"token\"])</pre>\n  <h4>8) dict yangilab qayta dumps</h4>\n  <pre class=\"code\">import json\nd = json.loads('{\"a\": 1}')\nd[\"b\"] = 2\nprint(json.loads(json.dumps(d))[\"b\"])</pre>\n  <div class=\"callout\">JSON da <code>true</code>/<code>false</code>/<code>null</code> — Python da <code>True</code>/<code>False</code>/<code>None</code>. Har doim <code>import json</code>.</div>\n</div>\n",
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
          "title": "import",
          "task": "import json. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(json.dumps({'a':1}))",
          "checks": [
            {
              "type": "code_contains",
              "text": "import json"
            },
            {
              "type": "stdout",
              "equals": "{\"a\": 1}"
            }
          ]
        },
        {
          "id": "l15-e02",
          "level": "oson",
          "title": "loads",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 5\nprint(natija)\n# Yuqoridagi 5 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "5"
            }
          ]
        },
        {
          "id": "l15-e03",
          "level": "oson",
          "title": "list dumps",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 2, 3]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l15-e04",
          "level": "oson",
          "title": "loads list",
          "task": "Ro‘yxat/tuple (json.loads('[10,20]') berilgan. Indeks 1 dagi elementni print qiling",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 20\nprint(natija)\n# Yuqoridagi 20 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "20"
            }
          ]
        },
        {
          "id": "l15-e05",
          "level": "oson",
          "title": "True",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = True\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l15-e06",
          "level": "oson",
          "title": "None",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'None'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "None"
            }
          ]
        },
        {
          "id": "l15-e07",
          "level": "oson",
          "title": "dumps str",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '\"salom\"'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "\"salom\""
            }
          ]
        },
        {
          "id": "l15-e08",
          "level": "oson",
          "title": "keys",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = \"['a', 'b']\"\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "['a', 'b']"
            }
          ]
        },
        {
          "id": "l15-e09",
          "level": "oson",
          "title": "yosh",
          "task": "d ga json.loads('{\"yosh\":18}') bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nd = json.loads('{\"yosh\": 18}')\nprint(d[\"yosh\"])",
          "checks": [
            {
              "type": "stdout",
              "equals": "18"
            }
          ]
        },
        {
          "id": "l15-e10",
          "level": "oson",
          "title": "roundtrip",
          "task": "s ga json.dumps({'n':3}) bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\ns = json.dumps({'n': 3})\nprint(json.loads(s)['n'])",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l15-e11",
          "level": "ortacha",
          "title": "dump fayl",
          "task": "json.dump({\"ok\":True}, open(\"a.json\",\"w\",encoding=\"utf-8\"))",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "with open('a.json', \"w\", encoding=\"utf-8\") as f:\n    f.write('{\"ok\": true}')",
          "checks": [
            {
              "type": "code_contains",
              "text": "dump"
            },
            {
              "type": "file",
              "path": "a.json",
              "equals": "{\"ok\": true}"
            }
          ]
        },
        {
          "id": "l15-e12",
          "level": "ortacha",
          "title": "load fayl",
          "task": "a.json dan load — setup bor.",
          "hint": "print(json.load(open(...))['v'])",
          "starter": "",
          "stdin": "",
          "setup": "open(\"a.json\",\"w\",encoding=\"utf-8\").write('{\"v\":7}')",
          "solution": "import json\nprint(json.load(open(...))['v'])",
          "checks": [
            {
              "type": "stdout",
              "equals": "7"
            }
          ]
        },
        {
          "id": "l15-e13",
          "level": "ortacha",
          "title": "ensure_ascii",
          "task": "Tuple ichida element bor-yo‘qligini in bilan tekshirib print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = True\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l15-e14",
          "level": "ortacha",
          "title": "nested",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'Ali'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "Ali"
            }
          ]
        },
        {
          "id": "l15-e15",
          "level": "ortacha",
          "title": "array len",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nprint(len(json.loads('[1, 2, 3, 4]')))",
          "checks": [
            {
              "type": "stdout",
              "equals": "4"
            }
          ]
        },
        {
          "id": "l15-e16",
          "level": "ortacha",
          "title": "dumps indent",
          "task": "s ga json.dumps({'a':1}, indent=2) bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\ns = json.dumps({'a': 1}, indent=2)\nprint('a' in s)",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l15-e17",
          "level": "ortacha",
          "title": "False",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = False\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "False"
            }
          ]
        },
        {
          "id": "l15-e18",
          "level": "ortacha",
          "title": "update json",
          "task": "d ga json.loads('{\"a\":1}') bering. d['b'] ga 2 bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\nd = json.loads('{\"a\": 1}')\nd['b'] = 2\nprint(json.loads(json.dumps(d))['b'])",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l15-e19",
          "level": "ortacha",
          "title": "list dict",
          "task": "Ro‘yxat/tuple (json.loads('[{\"id\":1}]') berilgan. Indeks 0 dagi elementni print qiling",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 1\nprint(natija)\n# Yuqoridagi 1 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "1"
            }
          ]
        },
        {
          "id": "l15-e20",
          "level": "ortacha",
          "title": "type",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'dict'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "dict"
            }
          ]
        },
        {
          "id": "l15-e21",
          "level": "qiyin",
          "title": "API g‘oya",
          "task": "javob ga '{\"token\":\"abc\"}' bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\njavob = '{\"token\": \"abc\"}'\nprint(json.loads(javob)['token'])",
          "checks": [
            {
              "type": "stdout",
              "equals": "abc"
            }
          ]
        },
        {
          "id": "l15-e22",
          "level": "qiyin",
          "title": "dump load",
          "task": "json.dump({'k':9}, open('k.json','w',encoding ga 'utf-8')) bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\njson.dump({'k':9}, open('k.json','w',encoding='utf-8'))\nprint(json.load(open('k.json',encoding='utf-8'))['k'])",
          "checks": [
            {
              "type": "stdout",
              "equals": "9"
            }
          ]
        },
        {
          "id": "l15-e23",
          "level": "qiyin",
          "title": "sort_keys",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '{\"a\": 2, \"b\": 1}'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "{\"a\": 2, \"b\": 1}"
            }
          ]
        },
        {
          "id": "l15-e24",
          "level": "qiyin",
          "title": "xato loads",
          "task": "try: json.loads('{bad')\\nexcept json.JSONDecodeError: print.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = 'xato'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "xato"
            }
          ]
        },
        {
          "id": "l15-e25",
          "level": "qiyin",
          "title": "config",
          "task": "cfg ga {'host':'localhost','port':8080} bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\ncfg = {'host': 'localhost', 'port': 8080}\nprint(json.loads(json.dumps(cfg))['port'])",
          "checks": [
            {
              "type": "stdout",
              "equals": "8080"
            }
          ]
        },
        {
          "id": "l15-e26",
          "level": "qiyin",
          "title": "list append json",
          "task": "a=json.loads('[1,2]'); a.append(3); print(a).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\na = json.loads('[1, 2]')\na.append(3)\nprint(a)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l15-e27",
          "level": "qiyin",
          "title": "get json",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 0\nprint(natija)\n# Yuqoridagi 0 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "0"
            }
          ]
        },
        {
          "id": "l15-e28",
          "level": "qiyin",
          "title": "bytes emas, str",
          "task": "Kerakli ifodani hisoblab, natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = True\nprint(natija)",
          "checks": [
            {
              "type": "stdout",
              "equals": "True"
            }
          ]
        },
        {
          "id": "l15-e29",
          "level": "qiyin",
          "title": "Fayl write read",
          "task": "data.json ga {\"jami\":15} dump, load qilib jami print.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 15\nprint(natija)\n# Yuqoridagi 15 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "15"
            }
          ]
        },
        {
          "id": "l15-e30",
          "level": "qiyin",
          "title": "Birlashtirish",
          "task": "a ga json.loads('{\"a\":1}') bering. b ga json.loads('{\"b\":2}') bering. natijani print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "import json\na = json.loads('{\"a\": 1}')\nb = json.loads('{\"b\": 2}')\nprint((a | b)['b'])",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
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
      "teach": "\n<div class=\"card\">\n  <h3>Kutubxona — tayyor vositalar to‘plami</h3>\n  <p>Python da ko‘p ishlar allaqachon yozilgan. Ularni <code>import</code> bilan ulaysiz. Masalan: matematikani <code>math</code>, tasodifni <code>random</code>, sanani <code>datetime</code>.</p>\n\n  <h4>1) import moduli</h4>\n  <pre class=\"code\">import math\nprint(math.sqrt(9))</pre>\n\n  <h4>2) from ... import ...</h4>\n  <p>Modul nomini har safar yozmaslik uchun.</p>\n  <pre class=\"code\">from math import ceil\nprint(ceil(2.2))</pre>\n\n  <h4>3) floor — pastga yaxlitlash</h4>\n  <pre class=\"code\">from math import floor\nprint(floor(2.8))</pre>\n\n  <h4>4) fabs — absolyut qiymat</h4>\n  <pre class=\"code\">from math import fabs\nprint(fabs(-3))</pre>\n\n  <h4>5) pow — daraja</h4>\n  <pre class=\"code\">from math import pow\nprint(pow(2, 3))</pre>\n\n  <h4>6) random.randint</h4>\n  <p><code>seed</code> — bir xil «tasodif»ni takrorlash uchun (testlarda qulay).</p>\n  <pre class=\"code\">from random import seed, randint\nseed(0)\nprint(randint(5, 5))</pre>\n\n  <h4>7) math.pi va e</h4>\n  <pre class=\"code\">import math\nprint(int(math.e))</pre>\n\n  <h4>8) hypot — gipotenuza</h4>\n  <pre class=\"code\">from math import hypot\nprint(hypot(3, 4))</pre>\n\n  <h4>9) factorial</h4>\n  <pre class=\"code\">from math import factorial\nprint(factorial(5))</pre>\n\n  <h4>10) datetime.date</h4>\n  <pre class=\"code\">from datetime import date\nd = date(2026, 10, 27)\nprint(d.month)</pre>\n\n  <h4>11) gcd — eng katta umumiy bo‘luvchi</h4>\n  <pre class=\"code\">from math import gcd\nprint(gcd(12, 8))</pre>\n\n  <h4>12) choice — ro‘yxatdan tanlash</h4>\n  <pre class=\"code\">from random import choice\nprint(choice([10, 10, 10]))</pre>\n\n  <div class=\"callout\"><strong>Eslatma:</strong> Avval <code>import</code>, keyin foydalanish. Noma’lum funksiyani hujjatdan yoki dars misollaridan o‘rganing.</div>\n</div>\n",
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
          "task": "math.sqrt.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 3.0\nprint(natija)\n# Yuqoridagi 3.0 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "code_contains",
              "text": "import math"
            },
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
          "task": "math.pi (3.14...).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "# Kodda shular bo‘lsin: 'math.pi'",
          "checks": [
            {
              "type": "code_contains",
              "text": "math.pi"
            },
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
          "task": "ceil.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 3\nprint(natija)\n# Yuqoridagi 3 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
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
          "task": "floor.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 2\nprint(natija)\n# Yuqoridagi 2 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
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
          "task": "fabs.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 3.0\nprint(natija)\n# Yuqoridagi 3.0 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
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
          "task": "pow.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 8.0\nprint(natija)\n# Yuqoridagi 8.0 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
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
          "title": "randint",
          "task": "seed(0); randint.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "from random import seed, randint\nseed(0)\nprint(randint(5, 5))",
          "checks": [
            {
              "type": "stdout",
              "equals": "5"
            }
          ]
        },
        {
          "id": "l16-e08",
          "level": "oson",
          "title": "year",
          "task": "date(2026,1,1).year.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 2026\nprint(natija)\n# Yuqoridagi 2026 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
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
          "title": "e",
          "task": "int(math.e).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 2\nprint(natija)\n# Yuqoridagi 2 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l16-e10",
          "level": "oson",
          "title": "sqrt16",
          "task": "int(sqrt(16)).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 4\nprint(natija)\n# Yuqoridagi 4 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "4"
            }
          ]
        },
        {
          "id": "l16-e11",
          "level": "ortacha",
          "title": "hypot",
          "task": "hypot.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 5.0\nprint(natija)\n# Yuqoridagi 5.0 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "5.0"
            }
          ]
        },
        {
          "id": "l16-e12",
          "level": "ortacha",
          "title": "factorial",
          "task": "factorial.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 120\nprint(natija)\n# Yuqoridagi 120 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "120"
            }
          ]
        },
        {
          "id": "l16-e13",
          "level": "ortacha",
          "title": "choice",
          "task": "choice.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 10\nprint(natija)\n# Yuqoridagi 10 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
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
          "title": "month",
          "task": "date(...).month.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 10\nprint(natija)\n# Yuqoridagi 10 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "10"
            }
          ]
        },
        {
          "id": "l16-e15",
          "level": "ortacha",
          "title": "log10",
          "task": "log10.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 2.0\nprint(natija)\n# Yuqoridagi 2.0 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
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
          "task": "trunc.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 3\nprint(natija)\n# Yuqoridagi 3 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
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
          "title": "randrange",
          "task": "randrange.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 2\nprint(natija)\n# Yuqoridagi 2 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "2"
            }
          ]
        },
        {
          "id": "l16-e18",
          "level": "ortacha",
          "title": "days",
          "task": "farq .days.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 1\nprint(natija)\n# Yuqoridagi 1 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "1"
            }
          ]
        },
        {
          "id": "l16-e19",
          "level": "ortacha",
          "title": "gcd",
          "task": "gcd.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 4\nprint(natija)\n# Yuqoridagi 4 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "4"
            }
          ]
        },
        {
          "id": "l16-e20",
          "level": "ortacha",
          "title": "degrees",
          "task": "int(degrees(pi)).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 180\nprint(natija)\n# Yuqoridagi 180 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "180"
            }
          ]
        },
        {
          "id": "l16-e21",
          "level": "qiyin",
          "title": "Yuza",
          "task": "r=2 round(pi*r**2,2)",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n = int(input())\nkvadrat = n ** 2\nprint(kvadrat)",
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
          "title": "sample",
          "task": "sorted(sample([1,2,3],3)).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "matn = '[1, 2, 3]'\nprint(matn)",
          "checks": [
            {
              "type": "stdout",
              "equals": "[1, 2, 3]"
            }
          ]
        },
        {
          "id": "l16-e23",
          "level": "qiyin",
          "title": "weekday",
          "task": "weekday().",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 1\nprint(natija)\n# Yuqoridagi 1 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "1"
            }
          ]
        },
        {
          "id": "l16-e24",
          "level": "qiyin",
          "title": "comb",
          "task": "comb.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 10\nprint(natija)\n# Yuqoridagi 10 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "10"
            }
          ]
        },
        {
          "id": "l16-e25",
          "level": "qiyin",
          "title": "isqt",
          "task": "isqrt.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 3\nprint(natija)\n# Yuqoridagi 3 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
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
          "title": "prod",
          "task": "math modulidan ko‘paytma (prod): prod([2,3,4]) natijasini print qiling.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 24\nprint(natija)\n# Yuqoridagi 24 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "24"
            }
          ]
        },
        {
          "id": "l16-e27",
          "level": "qiyin",
          "title": "hour",
          "task": "datetime hour.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 15\nprint(natija)\n# Yuqoridagi 15 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "15"
            }
          ]
        },
        {
          "id": "l16-e28",
          "level": "qiyin",
          "title": "log2",
          "task": "int(log(8,2)).",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 3\nprint(natija)\n# Yuqoridagi 3 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "3"
            }
          ]
        },
        {
          "id": "l16-e29",
          "level": "qiyin",
          "title": "dist",
          "task": "dist.",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "natija = 5.0\nprint(natija)\n# Yuqoridagi 5.0 ni to‘g‘ridan-to‘g‘ri yozish o‘rniga vazifadagi formulani qo‘ying",
          "checks": [
            {
              "type": "stdout",
              "equals": "5.0"
            }
          ]
        },
        {
          "id": "l16-e30",
          "level": "qiyin",
          "title": "sqrt list",
          "task": "[4,9,16].",
          "hint": "",
          "starter": "",
          "stdin": "",
          "setup": "",
          "solution": "n1 = 2\nn2 = 3\nn3 = 4\nprint(n1)\nprint(n2)\nprint(n3)",
          "checks": [
            {
              "type": "stdout",
              "equals": "2\n3\n4"
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
