# -*- coding: utf-8 -*-
"""O'rgatish bo'limidagi har bir h4 dan keyin to'liq tushuntirish qo'shadi."""
from __future__ import annotations

import html
import re

# Kalit: h4 dan raqam olib tashlangan matn (kichik harf)
EXPLAIN: dict[str, str] = {
    # —— L1 ——
    "print — ekranga chiqarish": (
        "print() funksiyasi berilgan qiymatni ekranga (konsolga) chiqaradi. "
        "Bu eng asosiy buyruq: o‘zgaruvchi yoki matnni ko‘rish uchun ishlatiladi. "
        "Qavs ichiga yozgan narsangiz chiqadi."
    ),
    "bir necha print — bir necha qator": (
        "Har bir print() odatda yangi qatordan boshlanadi. "
        "Bir necha marta print chaqirsangiz, natija bir necha qator bo‘lib chiqadi. "
        "Shunday qilib ketma-ket xabarlarni chiqarishingiz mumkin."
    ),
    "son chiqarish": (
        "Sonlarni print qilganda qo‘shtirnoq shart emas. "
        "18 yoki 3.14 kabi qiymat to‘g‘ridan-to‘g‘ri yoziladi. "
        "Matn bo‘lsa qo‘shtirnoq kerak, son bo‘lsa kerak emas."
    ),
    "izoh (#)": (
        "# belgisidan keyingi yozuv bajarilmaydi — bu izoh (comment). "
        "O‘zingiz yoki boshqalar uchun eslatma yozasiz. "
        "Dastur ishlashiga ta’sir qilmaydi, lekin kodni tushunishni osonlashtiradi."
    ),
    "bo‘sh qator": (
        "print() ni ichida hech narsa bermasangiz, bo‘sh qator chiqadi. "
        "Bu natijani ajratish yoki o‘qishni qulay qilish uchun qulay. "
        "Keyin oddiy print bilan matn chiqarishingiz mumkin."
    ),
    "bir qatorda bir necha so‘z": (
        "Bitta print ichida bo‘sh joy bilan bir necha so‘zni birlashtirib chiqarishingiz mumkin. "
        "Yoki bir necha argument berib, ular oralig‘ida bo‘sh joy chiqadi. "
        "Masalan print(\"1 2 3\") yoki print(1, 2, 3)."
    ),
    # —— L2 ——
    "berish va chiqarish": (
        "= belgisi «teng» emas, balki berish (assignment): o‘ngdagi qiymat chapdagi nomga yoziladi. "
        "Keyin shu nomni print qilsangiz, saqlangan qiymat chiqadi. "
        "O‘zgaruvchi — qiymatni eslab qolish uchun berilgan nom."
    ),
    "matn (str)": (
        "Matn (string) qo‘shtirnoq ichida yoziladi: \"Laylo\" yoki 'Laylo'. "
        "Bu harflar, so‘zlar, jumlalar uchun tur. "
        "O‘zgaruvchiga matn bersangiz, keyin uni print qilib ko‘rasiz."
    ),
    "butun son (int) va o‘nli (float)": (
        "int — butun son (12000), float — o‘nli kasr (3.14). "
        "Hisob-kitobda qaysi turdan foydalanish muhim: bo‘lish natijasi ko‘pincha float bo‘ladi. "
        "Ikkalasini ham o‘zgaruvchiga saqlab, print qilish mumkin."
    ),
    "bool — true / false": (
        "bool turi faqat ikki qiymat: True (rost) va False (yolg‘on). "
        "Shartlar, tekshiruvlar va if bilan ishlaganda asosiy rol o‘ynaydi. "
        "Masalan ok = True — holatni saqlash uchun."
    ),
    "qayta yozish": (
        "Bir o‘zgaruvchiga keyinroq yangi qiymat bersangiz, eski qiymat o‘rniga yangisi yoziladi. "
        "Oxirgi berilgan qiymat qoladi. "
        "Bu hisobni bosqichma-bosqich yangilab borishda kerak."
    ),
    "nusxa": (
        "b = a desangiz, a dagi qiymat b ga ko‘chiriladi (nusxa / bog‘lanish turiga qarab). "
        "Oddiy sonlarda b mustaqil qiymat oladi. "
        "Shunday qilib bir qiymatni boshqa nom bilan ishlatasiz."
    ),
    "nom qoidalari": (
        "O‘zgaruvchi nomi harf yoki _ bilan boshlanadi; ichida raqam bo‘lishi mumkin. "
        "print, if, for kabi tayyor so‘zlarni nom qilmang — xato chiqadi. "
        "Aniq nomlar (user_id, yosh) kodni o‘qishni osonlashtiradi."
    ),
    # —— L3 ——
    "ulash (+)": (
        "Ikki matnni + bilan ulasangiz, ular ketma-ket birlashadi. "
        "\"Hello\" + \"World\" → HelloWorld (orasida bo‘sh joy avtomatik qo‘yilmaydi). "
        "Bu xabar yig‘ish, ID yasash va matn yaratishda ishlatiladi."
    ),
    "bo‘sh joy bilan ulash": (
        "So‘zlar orasiga bo‘sh joy kerak bo‘lsa, \" \" ni qo‘shib ulaysiz. "
        "Masalan a + \" \" + b. "
        "Shunda Salom Ali kabi o‘qiladigan matn chiqadi."
    ),
    "len — uzunlik": (
        "len(s) matndagi belgilarni (harf, raqam, bo‘sh joy) sanaydi. "
        "Bo‘sh matn uzunligi 0. "
        "Tekshirish, cheklash va sikllarda uzunlikni bilish muhim."
    ),
    "input — foydalanuvchidan o‘qish": (
        "input() dastur ishlayotganda foydalanuvchidan matn so‘raydi va qaytaradi. "
        "Natija doim str (matn) bo‘ladi. "
        "Keyin uni o‘zgaruvchiga saqlab, print yoki boshqa amallar qilasiz."
    ),
    "startswith — bilan boshlanadimi": (
        "startswith(\"Py\") matn shu bo‘lak bilan boshlansa True, aks holda False qaytaradi. "
        "Filtrlash, format tekshirish (masalan kod prefiksi) uchun qulay. "
        "Natijani o‘zgaruvchiga yozib print qilishingiz mumkin."
    ),
    "endswith — bilan tugaydimi": (
        "endswith(\".txt\") matn shu bilan tugasa True beradi. "
        "Fayl kengaytmasi, telefon prefiksi kabi tekshiruvlarda ishlatiladi. "
        "startswith ning jufti — oxirini tekshiradi."
    ),
    "upper / lower": (
        "upper() barcha harflarni katta, lower() esa kichik qiladi. "
        "Asl matn o‘zgarmaydi — yangi matn qaytariladi. "
        "Taqqoslashda registr farqini yo‘qotish uchun juda foydali."
    ),
    "strip — chetdagi bo‘sh joy": (
        "strip() matnning boshidagi va oxiridagi bo‘sh joylarni olib tashlaydi. "
        "input() dan kelgan ortiqcha joylarni tozalashda kerak. "
        "O‘rtadagi bo‘sh joylar saqlanadi."
    ),
    "replace — almashtirish": (
        "replace(eski, yangi) matndagi eski qismni yangisiga almashtiradi. "
        "Masalan \"-\" ni \"/\" ga. "
        "Tozalash, format o‘zgartirish va oddiy tahrir uchun ishlatiladi."
    ),
    "find / count / split": (
        "find qidirilgan qismning indeksini (yoki -1), count necha marta uchrashini, "
        "split esa matnni bo‘laklarga ajratib list qaytaradi. "
        "Matnni tahlil qilishda uchala metod ham tez-tez kerak bo‘ladi."
    ),
    "f-string": (
        "f\"...{ozgaruvchi}...\" ichida o‘zgaruvchi qiymati joylashadi. "
        "Matnni + bilan ulashdan osonroq va aniqroq. "
        "Xabar, hisobot va formatlangan chiqish uchun zamonaviy usul."
    ),
    # —— L4 ——
    "+ qo‘shish": (
        "+ operatori ikkita sonni bir-biriga qo‘shadi va yig‘indisini hosil qiladi. "
        "Masalan, 2 + 3 ifodasi 5 natijasini beradi. "
        "Natijani o‘zgaruvchiga saqlash mumkin: yigindi = a + b, keyin print(yigindi). "
        "Eslatma: matnda + ulash (\"Salom\" + \" Ali\"), sonda + qo‘shish — belgi bir xil, ma’nosi boshqacha. "
        "Quyidagi misolda a va b beriladi, yig‘indi hisoblanadi va ekranga chiqariladi."
    ),
    "- ayirish": (
        "- operatori chapdagi sondan o‘ngdagisini ayiradi (farq). "
        "Masalan, 10 - 4 natijasi 6. "
        "Narx chegirmasi, qoldiq masofa yoki yosh farqini hisoblashda ishlatiladi. "
        "Natijani print(a - b) bilan to‘g‘ridan-to‘g‘ri chiqarishingiz yoki o‘zgaruvchiga yozishingiz mumkin. "
        "Manfiy natija ham chiqishi mumkin: 3 - 5 → -2."
    ),
    "* ko‘paytirish": (
        "* operatori ikki sonni ko‘paytiradi. Masalan, 3 * 7 = 21. "
        "Maydon (eni × bo‘yi), umumiy narx (dona × narx) kabi hisoblarda kerak. "
        "Matnda * takrorlash uchun ham ishlatiladi: \"ab\" * 3 → \"ababab\". "
        "Son bilan matnni aralashtirmang: 3 * \"a\" matnni 3 marta takrorlaydi, 3 * 3 esa 9 beradi."
    ),
    "/ oddiy bo‘lish (float)": (
        "/ operatori oddiy bo‘lish — natija odatda float (o‘nli) bo‘ladi. "
        "Masalan, 8 / 2 → 4.0 (4 emas). Aniq kasr kerak bo‘lganda shu amaldan foydalaning. "
        "Muhim: nolga bo‘lish (masalan 5 / 0) xato beradi — ZeroDivisionError. "
        "Butun qism kerak bo‘lsa //, qoldiq kerak bo‘lsa % ishlating."
    ),
    "// butun bo‘lish": (
        "// butun (floor) bo‘lish: faqat butun qism qoladi, kasr tashlanadi. "
        "Masalan, 7 // 2 → 3 (3.5 emas). "
        "Soat hisobi (daqiqa // 60), sahifalash, guruhlarga bo‘lishda foydali. "
        "Qoldiqni bilish uchun jufti % operatori. "
        "Ikkala amal birga: 130 // 60 = 2 soat, 130 % 60 = 10 daqiqa."
    ),
    "% qoldiq": (
        "% (modulo) bo‘linmadan qolgan qoldiqni beradi. Masalan, 7 % 2 → 1. "
        "Eng mashhur qo‘llanish: juft/toq — n % 2 == 0 bo‘lsa juft. "
        "Shuningdek sikllik indekslar, soat-daqiqa, «har N-chi» elementni ajratishda muhim. "
        "Qoldiq doim bo‘luvchidan kichik bo‘ladi (musbat sonlarda)."
    ),
    "** daraja": (
        "** operatori sonni darajaga ko‘taradi: asos ** daraja. "
        "Masalan, 2 ** 4 → 16, 5 ** 2 → 25 (kvadrat). "
        "Kvadrat, kub va boshqa darajalar uchun qisqa yozuv. "
        "pow(a, b) funksiyasi ham o‘xshash vazifa bajaradi; boshlang‘ichda ** yetarli."
    ),
    "int(input()) — son o‘qish": (
        "input() har doim matn (str) qaytaradi — hatto foydalanuvchi 5 deb yozsa ham. "
        "Hisob-kitob uchun uni songa aylantirish kerak: n = int(input()). "
        "Bu foydalanuvchidan butun son so‘rashning odatiy usuli. "
        "Harf yoki bo‘sh joy kiritilsa ValueError chiqadi — keyingi darslarda try/except bilan ushlanadi."
    ),
    "amal tartibi": (
        "Python avval * / // % ni, keyin + va - ni bajaradi (maktabdagi tartibga o‘xshash). "
        "Masalan, 2 + 3 * 4 → 14, chunki avval 3*4. "
        "Qavs () tartibni o‘zgartiradi: (2 + 3) * 4 → 20. "
        "Murakkab formulada qavs yozish — xatolarni kamaytiradi."
    ),
    "float()": (
        "float(x) qiymatni o‘nli songa (float) aylantiradi. "
        "Masalan, float(3) → 3.0, float(\"3.5\") → 3.5. "
        "O‘rtacha baho, pul, o‘lchov kabi aniqroq sonlar uchun kerak. "
        "int() kasrni kesib tashlaydi; float() kasrni saqlaydi."
    ),
    # —— L5 ——
    "if asosi": (
        "if shart True bo‘lsa, uning ichidagi blok bajariladi. "
        "Shart False bo‘lsa, blok o‘tkazib yuboriladi. "
        "Dasturga «agar ... bo‘lsa» mantiqini beradi — qaror qabul qilish asosi."
    ),
    "== teng": (
        "== ikki qiymat tengmi deb tekshiradi (True/False). "
        "Bitta = berish, ikkita == taqqoslash — aralashtirmang. "
        "if a == b: bilan tenglikka qarab harakat qilasiz."
    ),
    "!= teng emas": (
        "!= teng emasligini tekshiradi. "
        "Qiymatlar farq qilsa True. "
        "Masalan parol noto‘g‘ri bo‘lsa ogohlantirish chiqarish uchun."
    ),
    "else": (
        "else — if sharti bajarilmasa ishlaydigan alternativ blok. "
        "«Agar ... aks holda ...» tuzilmasi. "
        "Har doim if dan keyin keladi va shartsiz (qarama-qarshi holat)."
    ),
    "elif": (
        "elif (else if) — birinchi if ishlamasa, keyingi shartni tekshiradi. "
        "Bir necha variant (ball, baho, menyu) uchun zanjir yasaysiz. "
        "Birinchi True bo‘lgan tarmoq ishlaydi, qolganlari o‘tkaziladi."
    ),
    "not — teskarisi": (
        "not shartni teskarisiga aylantiradi: True → False, False → True. "
        "«Agar emas ...» mantiqini ifoda etadi. "
        "Masalan not ok bo‘lsa xabar chiqarish."
    ),
    "and — ikkalasi": (
        "and — ikkala shart ham True bo‘lsagina True. "
        "Yosh >= 18 and ruxsat == True kabi birgalikda tekshiruv. "
        "Bittasi False bo‘lsa, butun ifoda False."
    ),
    "or — kamida bittasi": (
        "or — kamida bitta shart True bo‘lsa True. "
        "Bir necha yo‘ldan bittasi yetarli bo‘lganda. "
        "Ikkalasi ham False bo‘lsagina False."
    ),
    "juftlik (% 2)": (
        "n % 2 == 0 bo‘lsa son juft, aks holda toq. "
        "Qoldiq operatori juftlikni aniqlashning klassik usuli. "
        "Filtrlash va navbatlashda tez-tez uchraydi."
    ),
    "not + endswith": (
        "Metod natijasini not bilan teskarilash mumkin. "
        "Masalan fayl .txt bilan tugamasa ogohlantirish. "
        "Shartlarni birlashtirish amaliy misoli."
    ),
    # —— L6 ——
    "for + range": (
        "for o‘zgaruvchini ketma-ket qiymatlar bo‘ylab yuritadi. "
        "range(3) → 0, 1, 2 (3 kirmaydi). "
        "Ma’lum marta takrorlashning eng oddiy yo‘li."
    ),
    "range(start, stop)": (
        "range(start, stop) start dan boshlab stop gacha (stop kirmaydi) sonlar beradi. "
        "range(1, 4) → 1, 2, 3. "
        "Boshlang‘ich qiymatni o‘zingiz belgilaysiz."
    ),
    "range qadam (step)": (
        "range(start, stop, step) uchinchi argument — qadam. "
        "range(0, 5, 2) → 0, 2, 4. "
        "Juft sonlar yoki teskari sanash uchun qulay."
    ),
    "ro‘yxat bo‘ylab for": (
        "for x in [10, 20]: har bir elementni ketma-ket oladi. "
        "Ro‘yxat, matn, to‘plam — aylanish mumkin bo‘lgan narsalar uchun. "
        "Har bir element bilan bir xil ishni bajarasiz."
    ),
    "yig‘indi": (
        "Sikl ichida yigindi = yigindi + n (yoki +=) qilib jami hisoblanadi. "
        "Avval 0 dan boshlaysiz, keyin har qadamda qo‘shasiz. "
        "Bu accumulator (yig‘uvchi) usuli."
    ),
    "while": (
        "while shart True ekan takrorlanadi. "
        "Shartni ichida o‘zgartirmasangiz — cheksiz sikl xavfi bor. "
        "Necha marta ekanini oldindan bilmasangiz for dan ko‘ra while mos."
    ),
    "break — to‘xtatish": (
        "break siklni darhol to‘xtatadi. "
        "Kerakli qiymat topilganda yoki maxsus shart bo‘lganda chiqish uchun. "
        "for va while ichida ishlaydi."
    ),
    "continue — shu qadamni o‘tkazib yuborish": (
        "continue joriy qadamning qolgan qismini o‘tkazib, keyingi aylanishga o‘tadi. "
        "Ba’zi elementlarni e’tiborsiz qoldirish uchun. "
        "Sikl to‘xtamaydi — faqat shu qadam qisqaradi."
    ),
    "while + input (0 gacha)": (
        "while True ichida input o‘qib, maxsus qiymat (masalan 0) kelganda break qilish odatiy. "
        "Foydalanuvchi to‘xtatmaguncha ma’lumot yig‘ish. "
        "Cheksiz siklni nazorat qilish namunasi."
    ),
    "ichma-ich for": (
        "Bir for ichida yana for — jadval, matritsa, juftliklar uchun. "
        "Tashqi sikl qator, ichki sikl ustun bo‘lishi mumkin. "
        "Har bir juftlik (i, j) uchun ish bajariladi."
    ),
    # —— L7 ——
    "yaratish": (
        "list kvadrat qavs ichida: [1, 2, 3]. "
        "Tartibli, o‘zgaruvchan to‘plam — element qo‘shish/o‘chirish mumkin. "
        "Bir necha qiymatni bitta nom ostida saqlash uchun."
    ),
    "indeks": (
        "Elementga a[0], a[1] kabi indeks bilan murojaat qilinadi (0 dan boshlanadi). "
        "Manfiy indeks oxiridan: a[-1] oxirgi element. "
        "Chegaradan tashqari indeks — IndexError."
    ),
    "len": (
        "len(ro‘yxat) nechta element borligini qaytaradi. "
        "Bo‘sh list uzunligi 0. "
        "Sikl chegarasi va tekshiruvlarda kerak."
    ),
    "append — oxiriga qo‘shish": (
        "append(x) elementni ro‘yxat oxiriga qo‘shadi. "
        "Ro‘yxat joyida o‘zgaradi (yangisini qaytarmaydi). "
        "Ma’lumot yig‘ishning eng ko‘p ishlatiladigan usuli."
    ),
    "elementni o‘zgartirish": (
        "a[i] = yangi_qiymat bilan mavjud elementni almashtirasiz. "
        "List o‘zgaruvchan (mutable) — shuning uchun bu mumkin. "
        "Tuple da bunday qilib bo‘lmaydi."
    ),
    "for bilan aylanish": (
        "for item in a: har bir elementni ketma-ket oladi. "
        "Ro‘yxatni ko‘rish, hisoblash, filtrlash uchun asosiy usul. "
        "Indeks kerak bo‘lsa enumerate ishlatiladi."
    ),
    "kesish (slice)": (
        "a[start:stop] qism ro‘yxat (slice) qaytaradi — stop kirmaydi. "
        "a[:2], a[1:], a[::2] kabi qisqartmalar bor. "
        "Asl ro‘yxat odatda o‘zgarmaydi — nusxa olinadi."
    ),
    "in — bor-yo‘q": (
        "x in a — element ro‘yxatda bormi (True/False). "
        "Qidiruv va shartlarda juda qulay. "
        "not in — yo‘qligini tekshiradi."
    ),
    "max / min / sum": (
        "max eng katta, min eng kichik, sum yig‘indi. "
        "Sonli ro‘yxatlar uchun tayyor funksiyalar. "
        "Bo‘sh ro‘yxatda max/min xato berishi mumkin."
    ),
    "ulash +": (
        "Ikki listni + bilan ulasangiz, yangi list hosil bo‘ladi. "
        "Asl listlar o‘zgarmaydi. "
        "extend esa mavjud listni joyida kengaytiradi."
    ),
    "takror *": (
        " [0] * 3 → [0, 0, 0] — listni takrorlaydi. "
        "Boshlang‘ich to‘ldirish uchun qulay. "
        "Ichma-ich listlarda ehtiyot bo‘ling (bir xil obyekt nusxasi)."
    ),
    # —— L8 ——
    "insert — joyga qo‘yish": (
        "insert(i, x) elementni i indeksiga qo‘yadi, qolganlari o‘ngga siljiydi. "
        "append oxiriga, insert esa tanlagan joyga. "
        "Ro‘yxat joyida o‘zgaradi."
    ),
    "remove — qiymatni o‘chirish": (
        "remove(x) birinchi uchragan x qiymatini o‘chiradi. "
        "Qiymat yo‘q bo‘lsa ValueError. "
        "Indeks bo‘yicha o‘chirish uchun pop ishlatiladi."
    ),
    "pop — indeksdan olish": (
        "pop(i) i dagi elementni olib tashlaydi va qaytaradi. "
        "pop() argumentisiz oxirgisini oladi. "
        "Stack (oxirgi kirgan — birinchi chiqadi) usuli uchun qulay."
    ),
    "sort": (
        "sort() ro‘yxatni o‘sib borish tartibida joyida saralaydi. "
        "Yangisini qaytarmaydi — None qaytaradi, a o‘zi o‘zgaradi. "
        "sorted(a) esa yangi saralangan list beradi, asli saqlanadi."
    ),
    "sort reverse": (
        "sort(reverse=True) kamayish tartibida saralaydi. "
        "Eng katta qiymat boshida bo‘ladi. "
        "Reyting, ball, narx bo‘yicha teskari tartib uchun."
    ),
    "index / count": (
        "index(x) birinchi uchragan joyining indeksini, count(x) necha marta uchrashini beradi. "
        "Yo‘q qiymatda index xato qiladi. "
        "Qidiruv va statistika uchun."
    ),
    "clear / del": (
        "clear() barcha elementlarni o‘chiradi (bo‘sh list qoladi). "
        "del a[i] bitta indeksni o‘chiradi. "
        "Tozalash va qisman o‘chirish vositalari."
    ),
    "map — har biriga amal": (
        "map(funksiya, ketma-ketlik) har bir elementga funksiyani qo‘llaydi. "
        "Natijani list() bilan ko‘rish odatiy. "
        "Masalan har bir sonni ikki barobar qilish."
    ),
    "filter — shartga moslar": (
        "filter(funksiya, ketma-ketlik) faqat True bergan elementlarni qoldiradi. "
        "Juft sonlar, musbatlar kabi filtrlash. "
        "map bilan birga funksionall uslubning asosi."
    ),
    "zanjir: sort + append": (
        "Bir necha metodni ketma-ket qo‘llab ro‘yxatni o‘zgartirish mumkin. "
        "Avval qo‘shish, keyin saralash — amaliy ketma-ketlik. "
        "Har qadamdan keyin print qilib natijani kuzating."
    ),
    # —— L9 tuple/set (common keys) ——
    "yaratish va indeks": (
        "tuple yumaloq qavs bilan yaratiladi: (1, 2, 3). "
        "Tartibli, lekin o‘zgarmas (immutable) — elementni o‘zgartirib bo‘lmaydi. "
        "Indeks list kabi ishlaydi: t[0]."
    ),
    "count — necha marta": (
        "count(x) qiymat necha marta uchrashini sanaydi. "
        "Masalan (1, 2, 1).count(1) → 2. "
        "Tuple va list da bir xil ishlaydi; takrorlar statistikasi uchun qulay. "
        "Topilmasa 0 qaytaradi (xato bermaydi)."
    ),
    "index — qayerda": (
        "index(x) qiymatning birinchi uchragan indeksini qaytaradi. "
        "Masalan (10, 20, 30).index(20) → 1. "
        "Qiymat bo‘lmasa ValueError chiqadi — avval in bilan tekshirish mumkin. "
        "Qidiruv va joylashuvni bilish uchun ishlatiladi."
    ),
    "bitta elementli tuple": (
        "Bitta elementli tuple uchun vergul shart: (5,). "
        "(5) oddiy qavs ichidagi son — tuple emas, shunchaki 5. "
        "Bu kichik, lekin boshlang‘ichda tez-tez chalkashadigan farq. "
        "Tekshirish: type((5,)) → tuple."
    ),
    "list → tuple": (
        "tuple(list) listni o‘zgarmas tuple ga aylantiradi. "
        "Himoyalangan ma’lumot yoki lug‘at kaliti sifatida ishlatish uchun. "
        "Qarama-qarshi: list(tuple)."
    ),
    "+ ulash": (
        "Ikki tuple ni + bilan ulasangiz yangi tuple hosil bo‘ladi. "
        "Asl tuple lar o‘zgarmaydi (immutable). "
        "List dagi + ga o‘xshash g‘oya."
    ),
    "* takrorlash": (
        "(1, 2) * 2 → (1, 2, 1, 2). "
        "Tuple ni takrorlab yangisini yasaydi. "
        "Boshlang‘ich naqsh yaratishda foydali."
    ),
    "in — bor-yo‘q": (
        "x in to‘plam — element bormi. "
        "Tuple, list, set, matn — ko‘p joyda ishlaydi. "
        "Shartlarda eng qulay tekshiruv."
    ),
    "unpack — ochib olish": (
        "a, b = (1, 2) — tuple elementlarini alohida o‘zgaruvchilarga ochadi. "
        "Funksiya bir necha qiymat qaytarganda qulay. "
        "Elementlar soni mos kelishi kerak."
    ),
    "yaratish (takror yo‘qoladi)": (
        "set — unikal elementlar to‘plami: {1, 2, 2} → {1, 2}. "
        "Tartib kafolatlanmaydi. "
        "Takrorlarni yo‘qotish va tez qidiruv uchun."
    ),
    "add — qo‘shish": (
        "add(x) set ga element qo‘shadi. "
        "Allaqachon bo‘lsa — o‘zgarishsiz. "
        "append emas, add — set uchun."
    ),
    "in set": (
        "x in set — element bormi, odatda juda tez. "
        "Katta to‘plamlarda list dagi in dan samaraliroq. "
        "Filtrlash va tekshiruv uchun."
    ),
    "discard — o‘chirish (xatosiz)": (
        "discard(x) elementni o‘chiradi; yo‘q bo‘lsa jim turadi (xato yo‘q). "
        "remove dan farqi shu. "
        "Ishonchsiz o‘chirish uchun xavfsizroq."
    ),
    "remove — o‘chirish (yo‘q bo‘lsa xato)": (
        "remove(x) elementni o‘chiradi; yo‘q bo‘lsa KeyError. "
        "Element majburiy mavjud deb hisoblaganda. "
        "discard xatosiz alternativ."
    ),
    "clear — tozalash": (
        "clear() set dagi barcha elementlarni o‘chiradi. "
        "Bo‘sh to‘plam qoladi. "
        "Qayta to‘ldirish oldidan."
    ),
    "union / | — birlashtirish": (
        "union yoki | ikki set ni birlashtiradi (takrorsiz). "
        "Yangi set qaytaradi. "
        "«Ikkalasining hammasi»."
    ),
    "intersection / & — kesishma (umumiy)": (
        "intersection yoki & faqat umumiy elementlarni qoldiradi. "
        "Ikki guruhning kesishmasi. "
        "«Ikkalasida ham bor»."
    ),
    "difference / - — farq (faqat chapda)": (
        "difference yoki - chapda bor, o‘ngda yo‘q elementlar. "
        "Farq to‘plami. "
        "«Faqat birinchisida»."
    ),
    "symmetric_difference / ^ — simmetrik farq": (
        "^ yoki symmetric_difference — faqat bittasida bo‘lganlar (umumiy emas). "
        "Ikki tomonlama farq. "
        "«Aynan bittasida»."
    ),
    "issubset — ichida joylashganmi": (
        "a.issubset(b) — a ning barcha elementi b da bormi. "
        "Kichik to‘plam katta ichidami. "
        "True/False qaytaradi."
    ),
    "issuperset — qamrab oladimi": (
        "a.issuperset(b) — a b ni to‘liq qamrab oladimi. "
        "issubset ning jufti. "
        "Huquq, ruxsat to‘plamlarida ishlatiladi."
    ),
    "update — ko‘p element qo‘shish": (
        "update(...) set ga ko‘p elementni bir yo‘la qo‘shadi. "
        "add bitta, update ko‘p. "
        "List yoki boshqa set dan to‘ldirish."
    ),
    "copy — nusxa (asl o‘zgarmaydi)": (
        "copy() set ning sayoz nusxasini beradi. "
        "Nusxani o‘zgartirsangiz, asl saqlanadi. "
        "Xavfsiz tahrir uchun."
    ),
    "list → set (unikal)": (
        "set(list) takrorlarni olib tashlaydi. "
        "Unikal qiymatlar ro‘yxatini olishning tez usuli. "
        "Tartib saqlanmasligi mumkin."
    ),
    # —— L10 ——
    "argumentsiz funksiya": (
        "Funksiya — bir necha marta chaqirib bo‘ladigan kod bloki. "
        "def salom(): deb e’lon qilasiz; ichiga kerakli buyruqlarni yozasiz. "
        "Funksiya o‘zi ishlamaydi — salom() deb chaqirishingiz kerak. "
        "Argumentsiz demak qavs ichida parametr yo‘q; har chaqiruvda bir xil ish bajariladi. "
        "Takroriy print yoki bir xil mantiqni bitta joyga jamlaydi."
    ),
    "argumentli funksiya": (
        "Ko‘pincha funksiyaga tashqaridan qiymat berish kerak. "
        "def kv(x): dagi x — parametr (qabul qiluvchi nom). Chaqiruvda kv(6) — 6 argument. "
        "Ichida x*x hisoblanadi; har xil son bilan bir xil formulani qayta ishlatasiz. "
        "Bu kodni qisqartiradi va xatolarni kamaytiradi."
    ),
    "return — qiymat qaytarish": (
        "return funksiya natijasini chaqirgan joyga qaytaradi. "
        "print faqat ekranga ko‘rsatadi; return esa natijani o‘zgaruvchiga yozish yoki boshqa hisobda ishlatish imkonini beradi. "
        "Masalan: natija = kv(4) — avval funksiya 16 qaytaradi, keyin print(natija). "
        "Hisob funksiyalarida odatda return ishlatiladi, print emas."
    ),
    "bir necha parametr": (
        "def qoshing(a, b): ikki qiymat qabul qiladi. "
        "Chaqiruvda tartib muhim: qoshing(2, 10) da a=2, b=10. "
        "Bir necha kirishli formulalar (yig‘indi, ayirma, max) shunday yoziladi. "
        "Parametrlar vergul bilan ajratiladi."
    ),
    "default (standart) qiymat": (
        "Ba’zi parametrlarni ixtiyoriy qilish mumkin: def salom(ism=\"Mehmon\"). "
        "Chaqiruvda ism berilmasa, \"Mehmon\" ishlatiladi; berilsa — yangi qiymat. "
        "salom() va salom(\"Ali\") — ikkala chaqiruv ham to‘g‘ri. "
        "Bu chaqiruvni soddalashtiradi va moslashuvchan qiladi."
    ),
    "default bilan hisob": (
        "Hisobda ham default qulay: def daraja(x, n=2) — n berilmasa kvadrat (x**2). "
        "daraja(5) → 25, daraja(2, 3) → 8. "
        "Bir funksiya bilan turli darajalarni hisoblaysiz. "
        "Default parametrlar odatda o‘ng tomonda yoziladi."
    ),
    "funksiya ichida if": (
        "Funksiya ichida if/else yozib, kirishga qarab turli natija qaytarishingiz mumkin. "
        "Masalan yoshga qarab True/False, yoki son nolmi-yo‘qmi. "
        "Mantiq funksiya ichida yashirinadi — tashqarida faqat chaqiruv qoladi. "
        "return ni har bir tarmoqda yozish mumkin."
    ),
    "parametr vs argument": (
        "Parametr — def qatoridagi nom (qabul qiluvchi). "
        "Argument — chaqiruvda berilgan haqiqiy qiymat. "
        "def f(x): dagi x parametr; f(10) dagi 10 argument. "
        "Boshlang‘ichda chalkashtirish oson — shu farqni eslab qoling."
    ),
    "return dan keyin kod ishlamaydi": (
        "return bajarilishi bilanoq funksiya tugaydi — undan keyingi qatorlar o‘sha tarmoqda ishlamaydi. "
        "Shuning uchun return odatda oxirida yoki if tarmog‘ining oxirida bo‘ladi. "
        "Keraksiz kodni return dan keyin yozmang — u hech qachon ishlamaydi."
    ),
    "ro‘yxat bilan ishlash": (
        "Funksiyaga ro‘yxat (list) ham uzatish mumkin: def oxirgi(a): return a[-1]. "
        "Ichida indeks, sikl yoki sum ishlatasiz; tashqarida qisqa chaqiruv qoladi. "
        "Ma’lumotni qayta ishlashni qayta ishlatiladigan qilib beradi. "
        "Natijani odatda return qiling — keyin tekshirish oson."
    ),
    # —— L11 ——
    "*args — o‘zgaruvchan oddiy argumentlar": (
        "*args istalgancha oddiy argumentni bitta tuple sifatida qabul qiladi. "
        "Nechta qiymat kelishi oldindan noma’lum bo‘lganda kerak: yig(1,2,3) yoki yig(10,20). "
        "def yig(*args): return sum(args) — klassik misol. "
        "args ichida oddiy tuple kabi indekslash va aylanish mumkin."
    ),
    "*args uzunligi": (
        "len(args) nechta argument kelganini bildiradi. "
        "Bo‘sh chaqiruv yig() da len 0 bo‘ladi — sum([]) ham 0. "
        "Tekshiruv (kamida 1 ta qiymat bormi?) va sikl chegarasi uchun foydali."
    ),
    "*args dan element olish": (
        "args[0] — birinchi argument, args[-1] — oxirgisi. "
        "Tuple indekslashi bilan bir xil. "
        "Masalan bir(*args) birinchi qiymatni qaytarishi mumkin."
    ),
    "**kwargs — kalitli argumentlar": (
        "**kwargs kalit=qiymat juftliklarini dict qilib oladi. "
        "Chaqiruv: info(ism=\"Ali\", yosh=20) → kwargs ichida {\"ism\": \"Ali\", \"yosh\": 20}. "
        "Ixtiyoriy nomli sozlamalar, konfiguratsiya uchun qulay. "
        "Qiymat olish: kwargs.get(\"ism\") yoki kwargs[\"ism\"]."
    ),
    "kwargs kalitlari": (
        "kwargs.keys() barcha kalitlarni beradi; sorted(...) bilan tartiblash mumkin. "
        "Qaysi sozlamalar yuborilganini bilish uchun. "
        "Oddiy dict metodlari (keys, values, items, get) ishlaydi."
    ),
    "kwargs qiymatlari yig‘indisi": (
        "kwargs.values() bo‘ylab yig‘indi hisoblash mumkin — nomli sonlarni jamlash. "
        "Bu **kwargs ning amaliy ishlatilishi: kalitlar nom, qiymatlar son. "
        "Avval values(), keyin sum()."
    ),
    "oddiy parametr + *args": (
        "Avval majburiy parametrlar, keyin *args: def f(a, *rest). "
        "a alohida qiymat; qolganlari rest tupleida. "
        "Tartibni buzmang — aks holda SyntaxError."
    ),
    "default + *args + **kwargs tartibi": (
        "To‘liq tartib: oddiy parametrlar → defaultli → *args → **kwargs. "
        "Masalan def f(a, b=1, *args, **kwargs). "
        "Bu tartib buzilsa Python SyntaxError beradi. "
        "Moslashuvchan funksiya imzosining to‘liq ko‘rinishi."
    ),
    "ro‘yxatni ochish: *": (
        "f(*[1, 2, 3]) list elementlarini alohida argument qilib uzatadi. "
        "Qo‘lda f(1, 2, 3) yozish o‘rniga. "
        "map/zip va o‘z funksiyalaringizda qulay."
    ),
    "lug‘atni ochish: **": (
        "f(**{\"a\": 1, \"b\": 2}) kalitlarni parametr nomiga moslab uzatadi. "
        "Sozlamalar dict dan funksiyaga o‘tkazish. "
        "* ning kalitli jufti."
    ),
    "*args ni aylantirish": (
        "for x in args: har bir uzatilgan qiymatni aylanadi. "
        "Chop etish, yig‘ish, tekshirish. "
        "O‘zgaruvchan argumentlar ustida ishlash."
    ),
    "type(*args) — tuple ekanini tekshirish": (
        "type(args) odatda <class 'tuple'>. "
        "*args ning ichki ko‘rinishini tushunish. "
        "O‘qitish va tekshiruv uchun."
    ),
    # —— L12 ——
    "yozish (w)": (
        "open(..., \"w\") faylni yozish uchun ochadi (mavjud bo‘lsa ustiga yozadi). "
        "with bloki faylni avtomatik yopadi. "
        "write() matn yozadi."
    ),
    "o‘qish (r) — read": (
        "\"r\" rejimi o‘qish. read() butun mazmunni matn qilib oladi. "
        "Katta fayllarda ehtiyot bo‘ling — xotirani to‘ldirishi mumkin. "
        "encoding=\"utf-8\" o‘zbek harflari uchun muhim."
    ),
    "readline — bir qator": (
        "readline() faqat bitta qatorni o‘qiydi. "
        "Katta faylni qatorma-qator ishlash uchun. "
        "Bo‘sh qator \"\" qaytishi mumkin — oxir belgisi."
    ),
    "readlines — barcha qatorlar (list)": (
        "readlines() barcha qatorlarni list qilib beradi. "
        "Har bir element — bir qator (odatda \\n bilan). "
        "Kichik/o‘rta fayllar uchun qulay."
    ),
    "append (a)": (
        "\"a\" rejimi oxiriga qo‘shib yozadi (eski matn saqlanadi). "
        "Log, jurnal yuritish uchun. "
        "\"w\" esa faylni noldan yozadi."
    ),
    "r+ — o‘qish va yozish": (
        "r+ bir vaqtda o‘qish va yozishga ruxsat beradi. "
        "Mavjud fayl bo‘lishi kerak. "
        "seek bilan ko‘rsatkichni boshqarasiz."
    ),
    "seek — ko‘rsatkichni siljitish": (
        "seek(pozitsiya) fayl ichidagi o‘qish/yozish joyini ko‘chiradi. "
        "Boshiga qaytish: seek(0). "
        "r+ da qayta o‘qish/yozish uchun kerak."
    ),
    "rb / wb — binary": (
        "rb/wb baytlar (rasm, audio) bilan ishlash. "
        "Matn emas, binary ma’lumot. "
        "encoding bu rejimda ishlatilmaydi."
    ),
    "qatorlar bo‘ylab for": (
        "for line in f: faylni qatorma-qator o‘qiydi — xotira tejaydi. "
        "Eng tavsiya etiladigan usul. "
        "Har qatorda strip() qilib tozalash odatiy."
    ),
    "encoding=\"utf-8\"": (
        "encoding=\"utf-8\" o‘zbek va boshqa unicode belgilarini to‘g‘ri o‘qiydi/yozadi. "
        "Windows da default boshqacha bo‘lishi mumkin. "
        "Doim aniq ko‘rsatish yaxshi odat."
    ),
    # —— L13 ——
    "try / except asosi": (
        "try ichida xavfli kod, except da xato ushlanadi. "
        "Dastur to‘xtab qolmasdan xabarni chiqarishingiz mumkin. "
        "Barqaror dasturlarning asosi."
    ),
    "zerodivisionerror — nolga bo‘lish": (
        "Sonni 0 ga bo‘lish ZeroDivisionError beradi. "
        "except ZeroDivisionError: bilan ushlab, foydalanuvchiga tushunarli xabar. "
        "Hisob-kitobda himoya."
    ),
    "indexerror — noto‘g‘ri indeks": (
        "Ro‘yxatda yo‘q indeks — IndexError. "
        "len ni tekshirish yoki except bilan himoya. "
        "Foydalanuvchi kiritgan indeksda ehtiyot bo‘ling."
    ),
    "keyerror — yo‘q kalit": (
        "dict da yo‘q kalit — KeyError. "
        "get() xavfsizroq alternativ. "
        "except KeyError ham ishlaydi."
    ),
    "typeerror — noto‘g‘ri tur": (
        "Mos kelmaydigan turlar ustida amal — TypeError (\"a\" + 1). "
        "Tur tekshiruvi yoki except. "
        "API va hisoblarda tez-tez uchraydi."
    ),
    "nameerror — mavjud bo‘lmagan nom": (
        "E’lon qilinmagan o‘zgaruvchi — NameError. "
        "Yozuv xatosi yoki tartib xatosi. "
        "except bilan ushlash mumkin, lekin asosiy yechim — to‘g‘ri nom."
    ),
    "else — xato bo‘lmasa": (
        "try/except dagi else — hech qanday xato bo‘lmasa ishlaydi. "
        "Muvaffaqiyatli yo‘lni ajratish. "
        "finally dan farqli: faqat xatosiz holatda."
    ),
    "finally — har doim": (
        "finally bloki xato bo‘lsin yoki bo‘lmasin ishlaydi. "
        "Fayl yopish, tozalash uchun. "
        "Resurslarni bo‘shatish kafolati."
    ),
    "bir necha xato turi": (
        "except (TypeError, ValueError): bir necha xatoni birga ushlaydi. "
        "Yoki ketma-ket alohida except. "
        "Turli holatlarga turli javob."
    ),
    "as e — xato obyekti": (
        "except Exception as e: xato obyektini e ga oladi. "
        "print(e) bilan tafsilot. "
        "Log va foydalanuvchi xabari uchun."
    ),
    # —— L14 ——
    "yaratish va olish": (
        "dict kalit → qiymat juftliklari: {\"ism\": \"Ali\"}. "
        "d[\"ism\"] bilan qiymat olinadi. "
        "Tez qidiruv va bog‘lanishlar uchun."
    ),
    "get — xavfsiz olish": (
        "get(kalit, default) kalit yo‘q bo‘lsa xato qilmaydi — default qaytaradi. "
        "d[kalit] esa KeyError berishi mumkin. "
        "Ixtiyoriy maydonlar uchun tavsiya."
    ),
    "qo‘shish / o‘zgartirish": (
        "d[kalit] = qiymat — yo‘q bo‘lsa qo‘shadi, bor bo‘lsa almashtiradi. "
        "Bitta sintaksis ikki vazifa. "
        "Lug‘atni to‘ldirish asosi."
    ),
    "keys / values / items": (
        "keys() kalitlar, values() qiymatlar, items() juftliklar. "
        "Aylanish va ko‘rish uchun. "
        "items eng ko‘p ishlatiladi."
    ),
    "items + for": (
        "for k, v in d.items(): har bir juftlikni ochadi. "
        "Lug‘atni chop etish va qayta ishlash. "
        "Unpack bilan qulay."
    ),
    "update": (
        "update({...}) bir necha juftlikni bir yo‘la qo‘shadi/yangilaydi. "
        "Ikki dict ni birlashtirish. "
        "Sozlamalarni qo‘shishda foydali."
    ),
    "pop": (
        "pop(kalit) qiymatni qaytarib, juftlikni o‘chiradi. "
        "list.pop ga o‘xshash g‘oya, lekin kalit bo‘yicha. "
        "Default berish mumkin: pop(k, None)."
    ),
    "setdefault": (
        "setdefault(k, default) — kalit bo‘lsa qiymatini, yo‘q bo‘lsa default yozib qaytaradi. "
        "Hisoblagich/sanoq lug‘atlarida qulay. "
        "get dan farqi — yo‘q bo‘lsa yozib qo‘yadi."
    ),
    "in — kalit bormi": (
        "k in d — kalit mavjudmi (qiymatni emas). "
        "if \"ism\" in d: tekshiruvi. "
        "values ichida qidirish boshqa usul."
    ),
    "sanoq (amaliy)": (
        "Lug‘at bilan elementlar necha marta uchrashini sanash mumkin. "
        "setdefault yoki Counter g‘oyasi. "
        "Matn/ro‘yxat tahlilining klassik misoli."
    ),
    # —— L15 ——
    "dumps — python → json matn": (
        "json.dumps(obj) Python obyektini JSON matniga aylantiradi. "
        "API, fayl, tarmoq uchun universal format. "
        "dict/list asosiy turlar."
    ),
    "loads — json matn → python": (
        "json.loads(matn) JSON matnini Python dict/list ga aylantiradi. "
        "Tashqaridan kelgan ma’lumotni o‘qish. "
        "dumps ning jufti."
    ),
    "roundtrip": (
        "dumps keyin loads — aylana (roundtrip): ma’lumot saqlanib qaytadi. "
        "Format to‘g‘riligini tekshirish. "
        "Seriyalash tushunchasi."
    ),
    "ro‘yxat json": (
        "List ham JSON massiviga aylanadi. "
        "dumps/loads list bilan ham ishlaydi. "
        "Jadvalli ma’lumot uchun."
    ),
    "dump / load — faylga": (
        "dump faylga yozadi, load fayldan o‘qiydi. "
        "dumps/loads matn bilan, dump/load fayl obyekti bilan. "
        "Konfiguratsiya saqlash."
    ),
    "indent — chiroyli yozish": (
        "dumps(..., indent=2) o‘qiladigan, chiqib turadigan JSON beradi. "
        "Debug va qo‘lda tahrir uchun. "
        "Produksiyada ba’zan ixcham (indent yo‘q) saqlanadi."
    ),
    "api javobi g‘oya": (
        "Ko‘p API lar JSON qaytaradi — loads bilan Python ga o‘giriladi. "
        "Kalitlar orqali kerakli maydon olinadi. "
        "Zamonaviy backend/frontend aloqasi."
    ),
    "dict yangilab qayta dumps": (
        "Dict ni o‘zgartirib qayta dumps qilish — yangilangan JSON. "
        "Sozlama o‘zgartirish oqimi. "
        "O‘qish → tahrir → yozish."
    ),
    # —— L16 ——
    "import moduli": (
        "import math modulni yuklaydi; math.sqrt kabi chaqiriladi. "
        "Tayyor funksiyalar kutubxonasidan foydalanish. "
        "Kodni qayta ixtiro qilmaslik."
    ),
    "from ... import ...": (
        "from math import ceil — faqat kerakli nomni oladi. "
        "ceil(3.2) deb to‘g‘ridan-to‘g‘ri chaqirasiz. "
        "Qisqa yozuv, lekin nom to‘qnashuvi ehtimoli."
    ),
    "floor — pastga yaxlitlash": (
        "math.floor kasrni pastga (kichik tomonga) butunlaydi. "
        "ceil tepaga. "
        "Moliyaviy/o‘yin hisoblarida farq qiladi."
    ),
    "fabs — absolyut qiymat": (
        "math.fabs manfiy sonni musbat qiladi (float). "
        "abs() ham bor — umumiyroq. "
        "Masofa, farq modullari."
    ),
    "pow — daraja": (
        "pow(a, b) yoki a ** b daraja. "
        "math.pow float qaytarishi mumkin. "
        "Hisob-kitobda daraja."
    ),
    "random.randint": (
        "randint(a, b) a dan b gacha (ikkalasi ham) tasodifiy butun son. "
        "O‘yin, test, aralash tanlov. "
        "import random kerak."
    ),
    "math.pi va e": (
        "math.pi va math.e — tayyor konstantalar. "
        "Geometriya va ilmiy hisob. "
        "Qo‘lda 3.14 yozishdan aniqroq."
    ),
    "hypot — gipotenuza": (
        "math.hypot(x, y) √(x²+y²) — gipotenuza/masofa. "
        "Ikki tomonli to‘g‘ri burchakli uchburchak. "
        "Koordinata masofasi."
    ),
    "factorial": (
        "math.factorial(n) n! hisoblaydi. "
        "Kombinatorika, ehtimollik. "
        "n manfiy bo‘lmasligi kerak."
    ),
    "datetime.date": (
        "datetime.date sana bilan ishlash: yil-oy-kun. "
        "Bugungi sana, farq, formatlash. "
        "import datetime yoki from datetime import date."
    ),
    "gcd — eng katta umumiy bo‘luvchi": (
        "math.gcd(a, b) eng katta umumiy bo‘luvchi. "
        "Kasrlarni qisqartirish, algoritmlar. "
        "Ikki sonning umumiy bo‘luvchisi."
    ),
    "choice — ro‘yxatdan tanlash": (
        "random.choice(seq) ro‘yxatdan bitta tasodifiy element. "
        "Tasodifiy savol, mukofot, aralash. "
        "Bo‘sh ketma-ketlikda xato."
    ),
}


def _norm_key(h4: str) -> str:
    t = html.unescape(h4)
    t = re.sub(r"^\d+\)\s*", "", t)
    t = t.strip().lower()
    # apostrof / o' vs o‘
    t = t.replace("'", "‘").replace("'", "‘")
    t = t.replace("'", "‘")
    return t


# Normalizatsiya variantlari uchun qo'shimcha kalitlar
_ALIASES = {
    "intersection / &amp; — kesishma (umumiy)": "intersection / & — kesishma (umumiy)",
}


def _lookup(h4: str) -> str | None:
    key = _norm_key(h4)
    if key in EXPLAIN:
        return EXPLAIN[key]
    # alias
    raw = html.unescape(h4)
    raw = re.sub(r"^\d+\)\s*", "", raw).strip().lower()
    for k, v in EXPLAIN.items():
        if k.replace("‘", "'") == raw.replace("‘", "'"):
            return v
    # qisman moslash: sarlavhadagi asosiy so'z
    for k, v in EXPLAIN.items():
        short = k.split("—")[0].split("-")[0].strip()
        if len(short) >= 3 and short in key:
            return v
    return None


def _fallback(h4: str) -> str:
    title = re.sub(r"^\d+\)\s*", "", html.unescape(h4)).strip()
    return (
        f"«{title}» — shu mavzuning amaliy ko‘rinishi. "
        f"Quyidagi kod aynan shu vazifani bajaradi: kerakli buyruq/metodni qo‘llab natijani ekranga chiqaradi. "
        f"Kodni o‘qing, o‘zgartirib ko‘ring va Natija qismida nima chiqishini kuzating — shunda mavzu mustahkamlanadi."
    )


def _plain_len(html_chunk: str) -> int:
    return len(re.sub(r"<[^>]+>", "", html_chunk).strip())


INTROS: dict[int, str] = {
    1: (
        "Python dasturi — kompyuterga berilgan buyruqlar ketma-ketligi. "
        "Eng birinchi qadam: natijani ekranda ko‘rish. Buning uchun print() ishlatiladi. "
        "Quyida matn, son, izoh va bo‘sh qator chiqarishni bosqichma-bosqich ko‘rasiz."
    ),
    2: (
        "O‘zgaruvchi — qiymat saqlanadigan nom. = belgisi taqqoslash emas, balki berish: "
        "o‘ngdagi qiymat chapdagi nomga yoziladi. Matn, son, True/False kabi turlar bor. "
        "Quyida berish, qayta yozish va nom qoidalari ko‘rsatiladi."
    ),
    3: (
        "Matn (str) qo‘shtirnoq ichida yoziladi. Uni ulash, uzunligini topish, "
        "boshini/oxirini tekshirish, katta-kichik harfga o‘girish mumkin. "
        "input() foydalanuvchidan matn oladi. Har bir metodning vazifasi quyida alohida tushuntiriladi."
    ),
    4: (
        "Python da hisob-kitob uchun arifmetik amallar bor: qo‘shish, ayirish, ko‘paytirish, "
        "bo‘lish, butun bo‘lish, qoldiq va daraja. Amal tartibi va int(input()) ham muhim. "
        "Har bir amal nima qilishi quyida alohida yozilgan."
    ),
    5: (
        "Shartlar dasturga qaror qabul qilish imkonini beradi. "
        "if — agar shart True bo‘lsa blok ishlaydi; elif — keyingi shart; else — hech biri mos kelmasa. "
        "==, !=, and, or, not bilan shartlarni yasaysiz. Quyida har biri alohida tushuntiriladi."
    ),
    6: (
        "Takrorlash (sikl) bir xil ishni qayta-qayta bajaradi. "
        "for — ma’lum ketma-ketlik (masalan range) bo‘ylab; while — shart True ekan davom etadi. "
        "break to‘xtatadi, continue shu qadamni o‘tkazib yuboradi. Har bir usul quyida ochib berilgan."
    ),
    7: (
        "Ro‘yxat (list) bir necha qiymatni bitta nom ostida saqlaydi. Indeks 0 dan boshlanadi. "
        "Element qo‘shish, o‘zgartirish, kesish, aylanish mumkin. "
        "Quyida yaratishdan boshlab asosiy amallar tushuntiriladi."
    ),
    8: (
        "Ro‘yxatni o‘zgartirish uchun metodlar bor: insert, remove, pop, sort va boshqalar. "
        "map har bir elementga amal qo‘llaydi, filter shartga moslarini qoldiradi. "
        "Har birining vazifasi quyida alohida yozilgan."
    ),
    9: (
        "Tuple — o‘zgarmas ketma-ketlik (indeks bor, lekin append/o‘zgartirish yo‘q). "
        "Set — unikal elementlar to‘plami; takrorlar yo‘qoladi, qidiruv tez. "
        "Quyida yaratish, metodlar va to‘plam amallari (union, intersection…) tushuntiriladi."
    ),
    10: (
        "Funksiya (def) — qayta chaqiriladigan kod bloki. "
        "Parametr — qabul qiluvchi nom, argument — chaqiruvdagi qiymat. "
        "print ekranga chiqaradi, return esa natijani dasturga qaytaradi. "
        "Default qiymat argument berilmasa ishlaydi. Quyida har biri alohida tushuntiriladi."
    ),
    11: (
        "*args istalgancha oddiy argumentni tuple qilib oladi; **kwargs kalit=qiymatni dict qilib oladi. "
        "Chaqiruvda ro‘yxatni * bilan, lug‘atni ** bilan ochib uzatish mumkin. "
        "Parametrlar tartibi: oddiy → default → *args → **kwargs."
    ),
    12: (
        "Fayl bilan ishlash: open, read/write, with bloki. "
        "Matn va bayt rejimlari, encoding, faylni yopish muhim. "
        "Quyida o‘qish, yozish va xavfsiz with usuli tushuntiriladi."
    ),
    13: (
        "Xato (exception) dastur to‘xtashiga olib kelishi mumkin. "
        "try/except bilan xavfli joyni ushlaysiz; else/finally qo‘shimcha nazorat beradi. "
        "ValueError, ZeroDivisionError, KeyError kabilar quyida ko‘rsatiladi."
    ),
    14: (
        "Lug‘at (dict) — kalit → qiymat juftliklari. "
        "Kalit bo‘yicha tez qidiruv; keys/values/items, get, update, | birlashtirish. "
        "Quyida yaratishdan boshlab asosiy amallar ochib beriladi."
    ),
    15: (
        "JSON — ma’lumotni matn ko‘rinishida uzatish formati. "
        "json.loads/dumps Python obyektiga va aksincha o‘giradi; fayl uchun load/dump. "
        "API va sozlamalar bilan ishlashda juda kerak."
    ),
    16: (
        "import bilan tayyor kutubxonani ulaysiz: math, random, datetime. "
        "Qayta ixtiro qilmasdan sqrt, randint, date kabi vositalardan foydalanasiz. "
        "Har bir modulning odatiy funksiyalari quyida."
    ),
}


def _expand_intro(teach: str, lesson_id: int) -> str:
    intro = INTROS.get(lesson_id)
    if not intro:
        return teach

    def repl(m: re.Match) -> str:
        plain = re.sub(r"<[^>]+>", "", m.group(1))
        if len(plain.strip()) >= 140:
            return m.group(0)
        return f"{m.group(0)[: m.start(1) - m.start()]}{intro}</p>"

    # Faqat birinchi h3 dan keyingi p
    return re.sub(r"(<h3>.*?</h3>\s*<p>)(.*?)(</p>)", lambda m: m.group(1) + intro + m.group(3), teach, count=1, flags=re.S)


def expand_teach_html(teach: str, lesson_id: int | None = None) -> str:
    if not teach:
        return teach
    if lesson_id is not None:
        teach = _expand_intro(teach, lesson_id)

    parts: list[str] = []
    last = 0
    for m in re.finditer(r"<h4>(.*?)</h4>", teach, re.S):
        parts.append(teach[last : m.end()])
        after_start = m.end()
        # Keyingi h4 yoki card oxiri gacha
        nxt = re.search(r"<h4\b|</div>\s*$", teach[after_start:], re.S)
        after_chunk = teach[after_start : after_start + (nxt.start() if nxt else len(teach))]
        # Mavjud p bormi?
        p_m = re.match(r"\s*<p\b[^>]*>(.*?)</p>", after_chunk, re.S)
        explain = _lookup(m.group(1)) or _fallback(m.group(1))
        explain_html = f"\n  <p class=\"teach-explain\">{explain}</p>"

        looked = _lookup(m.group(1))
        if p_m and looked:
            # Lug‘atdagi izohni doim yangilab turamiz
            parts.append(explain_html)
            last = after_start + p_m.end()
            continue
        if p_m and _plain_len(p_m.group(0)) >= 70:
            last = after_start
            continue
        if p_m:
            parts.append(explain_html)
            last = after_start + p_m.end()
            continue
        parts.append(explain_html)
        last = after_start
    parts.append(teach[last:])
    return "".join(parts)


def expand_lessons(lessons: list) -> list:
    for L in lessons:
        if L.get("teach"):
            L["teach"] = expand_teach_html(L["teach"], lesson_id=L.get("id"))
    return lessons
