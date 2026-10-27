# -*- coding: utf-8 -*-
"""Dars 7–16: list, tuple/set, funksiya, fayl, try, dict, json, kutubxona."""
from helpers import stdout, var, expr, file_eq, contains, pack, block, ex

def lessons():
    out = []

    out.append({
        "id": 7,
        "title": "Ro‘yxatlar asosi (list)",
        "subtitle": "Yaratish, indeks, kesish, len, for, append.",
        "teach": """
<div class="card">
  <h3>List — o‘zgaruvchan ketma-ketlik</h3>
  <pre class="code">meva = ["olma", "anor", "uzum"]
print(meva[0])      # olma
print(meva[-1])     # uzum
print(len(meva))
meva.append("behi")</pre>
  <p>Indeks 0 dan. <code>meva[0:2]</code> — kesish. <code>for x in meva</code> — aylanib chiqish.</p>
  <div class="callout"><strong>Eslatma:</strong> <code>startswith</code> list metod emas — u <strong>matn (str)</strong> metodi (3-dars). Keyingi darsda list metodlari to‘liq.</div>
</div>
""",
        "examples": [
            {"title": "Indeks", "code": "a = [10, 20, 30]\nbirinci = a[0]\nikkinchi = a[1]\nprint(birinci)\nprint(ikkinchi)", "why": "10 keyin 20 — avval o‘zgaruvchiga oldik."},
            {"title": "append", "code": "a = [1]\na.append(2)\nprint(a)", "why": "[1, 2]"},
            {"title": "for + if", "code": "sonlar = [1, 2, 3, 4]\nfor n in sonlar:\n    if n != 3:\n        print(n)", "why": "5–6 dars bog‘lash: 3 dan boshqalar."},
            {"title": "Yig‘indi", "code": "sonlar = [10, 20, 30]\nyigindi = 0\nfor n in sonlar:\n    yigindi = yigindi + n\nprint(yigindi)", "why": "60"},
        ],
        "exercises": pack(7, block(
            [
                ex(title="Yaratish", task="sonlar=[1,2,3] va print.", checks=var("sonlar", [1,2,3], stdout("[1, 2, 3]"))),
                ex(title="Birinchi", task="a=[7,8,9], print(a[0]) → 7", checks=stdout("7")),
                ex(title="Oxirgi", task="a=[7,8,9], print(a[-1]) → 9", checks=stdout("9")),
                ex(title="len", task="len([1,2,3,4]) → 4", checks=stdout("4")),
                ex(title="append", task="a=[1]; a.append(5); print(a)", checks=stdout("[1, 5]")),
                ex(title="Ismlar", task='["Ali","Vali"][1] → Vali', checks=stdout("Vali")),
                ex(title="for", task="for x in [10,20]: print(x)", checks=stdout("10\n20")),
                ex(title="O‘zgartirish", task="a=[0,0]; a[0]=4; print(a)", checks=stdout("[4, 0]")),
                ex(title="Bo‘sh", task="len([]) → 0", checks=stdout("0")),
                ex(title="Ikkinchi", task="[5,6,7][1] → 6", checks=stdout("6")),
            ],
            [
                ex(title="Yig‘indi", task="[1,2,3,4] yig‘indisi 10", checks=stdout("10")),
                ex(title="Max", task="[3,9,2] → 9", checks=stdout("9")),
                ex(title="Kesish", task="[1,2,3,4][0:2] → [1,2]", checks=stdout("[1, 2]")),
                ex(title="2 append", task="[] ga 8,9 → [8,9]", checks=stdout("[8, 9]")),
                ex(title="in", task='"a" in ["a","b"] → True', checks=stdout("True")),
                ex(title="input list", task="Ikki int → [4,5]", checks=stdout("[4, 5]"), stdin="4\n5"),
                ex(title="Teskari", task="1,2,3 → 3\\n2\\n1", checks=stdout("3\n2\n1")),
                ex(title="[0]*3", task="print([0]*3)", checks=stdout("[0, 0, 0]")),
                ex(title="join", task='" ".join(["a","b","c"])', checks=stdout("a b c")),
                ex(title="len so‘z", task='len(["bir","ikki","uch"]) → 3', checks=stdout("3")),
            ],
            [
                ex(title="Juftlar", task="[1..6] juftlari 2 4 6", checks=stdout("2\n4\n6")),
                ex(title="O‘rtacha", task="[10,20,30] → 20.0", checks=stdout("20.0")),
                ex(title="index", task='["x","y","z"].index("y") → 1', checks=stdout("1")),
                ex(title="a+b", task="[1,2]+[3]", checks=stdout("[1, 2, 3]")),
                ex(title="pop", task="[1,2,3].pop() dan keyin [1,2]", checks=stdout("[1, 2]")),
                ex(title="min", task="min([5,1,8]) → 1", checks=stdout("1")),
                ex(title="kvadrat", task="[2,3,4] → 4 9 16", checks=stdout("4\n9\n16")),
                ex(title="count", task="[1,2,1,1].count(1) → 3", checks=stdout("3")),
                ex(title="unique", task="[1,1,2,2,3] → 1 2 3", checks=stdout("1\n2\n3")),
                ex(title="Matritsa", task="[[1,2],[3,4]] → 1\\n3", checks=stdout("1\n3")),
            ],
        )),
    })

    out.append({
        "id": 8,
        "title": "Ro‘yxat metodlari, map, filter",
        "subtitle": "insert, remove, pop, del, sort, reverse, extend, map, filter.",
        "teach": """
<div class="card">
  <h3>List metodlari</h3>
  <table class="method-table">
    <tr><th>Metod</th><th>Vazifa</th></tr>
    <tr><td><code>append(x)</code></td><td>Oxiriga qo‘shish</td></tr>
    <tr><td><code>insert(i, x)</code></td><td>i joyiga qo‘yish</td></tr>
    <tr><td><code>extend(b)</code></td><td>Boshqa listni qo‘shish</td></tr>
    <tr><td><code>remove(x)</code></td><td>Qiymat bo‘yicha o‘chirish</td></tr>
    <tr><td><code>pop(i)</code></td><td>Indeks bo‘yicha olib tashlash</td></tr>
    <tr><td><code>del a[i]</code></td><td>O‘chirish (statement)</td></tr>
    <tr><td><code>clear()</code></td><td>Tozalash</td></tr>
    <tr><td><code>sort()</code> / <code>reverse()</code></td><td>Tartiblash / teskarilash</td></tr>
    <tr><td><code>index</code> / <code>count</code></td><td>Qidirish / sanash</td></tr>
  </table>
  <pre class="code">print(list(map(lambda x: x*2, [1,2,3])))
print(list(filter(lambda x: x%2==0, [1,2,3,4])))</pre>
  <div class="callout"><code>startswith</code> bu yerda yo‘q — chunki u <strong>str</strong> metodi (3-dars).</div>
</div>
""",
        "examples": [
            {"title": "insert", "code": "a = [1, 3]\na.insert(1, 2)\nprint(a)", "why": "[1, 2, 3] — o‘rtaga qo‘yildi."},
            {"title": "remove va pop", "code": "a = [1, 2, 3]\na.remove(2)\noxirgi = a.pop()\nprint(a)\nprint(oxirgi)", "why": "[1] va 3"},
            {"title": "map", "code": "sonlar = [2, 3]\nkvadratlar = list(map(lambda x: x * x, sonlar))\nprint(kvadratlar)", "why": "[4, 9]"},
            {"title": "filter + !=", "code": "a = [1, 2, 3, 4, 5]\njuft = list(filter(lambda x: x % 2 == 0, a))\nprint(juft)", "why": "[2, 4]"},
            {"title": "Murakkab zanjir", "code": "a = [3, 1, 2]\na.sort()\na.append(4)\nprint(a)", "why": "[1, 2, 3, 4]"},
        ],
        "exercises": pack(8, block(
            [
                ex(title="insert 0", task="[2,3] boshiga 1 → [1,2,3]", checks=stdout("[1, 2, 3]")),
                ex(title="insert 1", task="[1,3] ga 2 → [1,2,3]", checks=stdout("[1, 2, 3]")),
                ex(title="remove", task="[1,2,3].remove(2) → [1,3]", checks=stdout("[1, 3]")),
                ex(title="pop", task="[1,2,3].pop() → [1,2]", checks=stdout("[1, 2]")),
                ex(title="pop 0", task="[10,20,30].pop(0) → [20,30]", checks=stdout("[20, 30]")),
                ex(title="del", task="del a[1] → [1,3]", checks=stdout("[1, 3]")),
                ex(title="clear", task="clear → []", checks=stdout("[]")),
                ex(title="extend", task="[1].extend([2,3])", checks=stdout("[1, 2, 3]")),
                ex(title="index", task="[4,5,6].index(5) → 1", checks=stdout("1")),
                ex(title="count", task="[1,1,2].count(1) → 2", checks=stdout("2")),
            ],
            [
                ex(title="sort", task="[3,1,2].sort() → [1,2,3]", checks=stdout("[1, 2, 3]")),
                ex(title="sorted", task="sorted([3,1,2])", checks=stdout("[1, 2, 3]")),
                ex(title="reverse", task="[1,2,3].reverse()", checks=stdout("[3, 2, 1]")),
                ex(title="map *2", task="[1,2,3] → [2,4,6]", checks=stdout("[2, 4, 6]")),
                ex(title="filter juft", task="[1..6] juftlari [2,4,6]", checks=stdout("[2, 4, 6]")),
                ex(title="map kv", task="[2,3,4] → [4,9,16]", checks=stdout("[4, 9, 16]")),
                ex(title="remove birinchi", task="[2,1,2].remove(2) → [1,2]", checks=stdout("[1, 2]")),
                ex(title="insert oxir", task="[1,2].insert(2,3)", checks=stdout("[1, 2, 3]")),
                ex(title="extend str", task='["a"].extend(["b","c"])', checks=stdout("['a', 'b', 'c']")),
                ex(title="pop qiymat", task="x=[7,8].pop(); print(x) → 8", checks=stdout("8")),
            ],
            [
                ex(title="sort reverse", task="sort(reverse=True) → [3,2,1]", checks=stdout("[3, 2, 1]")),
                ex(title="filter >10", task="[5,12,8,20] → [12,20]", checks=stdout("[12, 20]")),
                ex(title="map str", task="map(str,[1,2])", checks=stdout("['1', '2']")),
                ex(title="Zanjir", task="sort + append 4 → [1,2,3,4]", checks=stdout("[1, 2, 3, 4]")),
                ex(title="del slice", task="del a[1:3] → [0,3]", checks=stdout("[0, 3]")),
                ex(title="index c", task='["a","b","c"].index("c") → 2', checks=stdout("2")),
                ex(title="map+filter", task="juftlar kvadrati [4,16]", checks=stdout("[4, 16]")),
                ex(title="sorted asl", task="sorted keyin asl: [1,2]\\n[2,1]", checks=stdout("[1, 2]\n[2, 1]")),
                ex(title="count remove", task="[1,1,1].remove(1); count → 2", checks=stdout("2")),
                ex(title="comprehension", task="[x*10 for x in [1,2,3]]", checks=stdout("[10, 20, 30]")),
            ],
        )),
    })

    # --- 9 tuple set ---
    out.append({
        "id": 9,
        "title": "Tuple va set",
        "subtitle": "O‘zgarmas ketma-ketlik (tuple) va unikal to‘plam (set) + metodlar.",
        "teach": """
<div class="card">
  <h3>Tuple — o‘zgarmas ketma-ketlik</h3>
  <p>Qavs: <code>(1, 2, 3)</code>. Indeks bor, lekin elementni o‘zgartirish / <code>append</code> yo‘q.</p>

  <h4>1) Yaratish va indeks</h4>
  <pre class="code">t = (10, 20, 30)
birinci = t[0]
print(birinci)</pre>

  <h4>2) len — uzunlik</h4>
  <pre class="code">t = (1, 2, 3, 4)
print(len(t))</pre>

  <h4>3) count — necha marta</h4>
  <pre class="code">t = (1, 2, 1, 1)
nechta = t.count(1)
print(nechta)</pre>

  <h4>4) index — qayerda</h4>
  <pre class="code">t = (4, 5, 6)
joy = t.index(5)
print(joy)</pre>

  <h4>5) Bitta elementli tuple</h4>
  <pre class="code">t = (5,)
print(t)</pre>

  <h4>6) list → tuple</h4>
  <pre class="code">a = [1, 2]
t = tuple(a)
print(t)</pre>

  <h4>7) + ulash</h4>
  <pre class="code">a = (1, 2)
b = (3,)
natija = a + b
print(natija)</pre>

  <h4>8) * takrorlash</h4>
  <pre class="code">t = (0,) * 3
print(t)</pre>

  <h4>9) in — bor-yo‘q</h4>
  <pre class="code">t = (1, 2, 3)
print(2 in t)</pre>

  <h4>10) Unpack — ochib olish</h4>
  <pre class="code">a, b = (3, 4)
print(a + b)</pre>

  <h3>Set — takrorlanmas to‘plam</h3>
  <p>Jingalak qavs: <code>{1, 2, 3}</code>. Tartib kafolatlanmaydi. Indeks yo‘q.</p>

  <h4>11) Yaratish (takror yo‘qoladi)</h4>
  <pre class="code">s = {1, 2, 2, 3}
print(len(s))</pre>

  <h4>12) add — qo‘shish</h4>
  <pre class="code">s = {1, 2}
s.add(3)
print(sorted(s))</pre>

  <h4>13) in set</h4>
  <pre class="code">s = {1, 2}
print(1 in s)</pre>

  <h4>14) discard — o‘chirish (xatosiz)</h4>
  <pre class="code">s = {1, 2, 3}
s.discard(2)
print(sorted(s))</pre>

  <h4>15) remove — o‘chirish (yo‘q bo‘lsa xato)</h4>
  <pre class="code">s = {1, 2}
s.remove(1)
print(sorted(s))</pre>

  <h4>16) clear — tozalash</h4>
  <pre class="code">s = {1, 2}
s.clear()
print(s)</pre>

  <h4>17) union / | — birlashtirish</h4>
  <pre class="code">a = {1, 2}
b = {2, 3}
birlash = a | b
print(sorted(birlash))</pre>

  <h4>18) intersection / &amp; — kesishma (umumiy)</h4>
  <pre class="code">a = {1, 2, 3}
b = {2, 3, 4}
kesish = a & b
print(sorted(kesish))</pre>

  <h4>19) difference / - — farq (faqat chapda)</h4>
  <pre class="code">a = {1, 2, 3}
b = {2}
farq = a - b
print(sorted(farq))</pre>

  <h4>20) symmetric_difference / ^ — simmetrik farq</h4>
  <pre class="code">a = {1, 2}
b = {2, 3}
sim = a ^ b
print(sorted(sim))</pre>

  <h4>21) issubset — ichida joylashganmi</h4>
  <pre class="code">kichik = {1, 2}
katta = {1, 2, 3}
print(kichik.issubset(katta))</pre>

  <h4>22) issuperset — qamrab oladimi</h4>
  <pre class="code">katta = {1, 2, 3}
kichik = {1, 2}
print(katta.issuperset(kichik))</pre>

  <h4>23) update — ko‘p element qo‘shish</h4>
  <pre class="code">s = {1}
s.update([2, 3])
print(sorted(s))</pre>

  <h4>24) copy — nusxa (asl o‘zgarmaydi)</h4>
  <pre class="code">s = {1, 2}
t = s.copy()
t.add(3)
print(sorted(s))</pre>

  <h4>25) list → set (unikal)</h4>
  <pre class="code">sozlar = ["a", "b", "a"]
unikal = set(sozlar)
print(len(unikal))</pre>

  <div class="callout"><strong>Qachon nima?</strong> List — tartib + o‘zgaradi. Tuple — o‘zgarmas ma’lumot. Set — unikal elementlar, tezkor «bor-yo‘q», union/intersection/difference.</div>
</div>
""",
        "examples": [
            {"title": "Tuple yaratish va indeks", "code": "t = (10, 20, 30)\nbirinci = t[0]\nprint(birinci)", "why": "10 — birinchi element."},
            {"title": "len (tuple)", "code": "t = (1, 2, 3, 4)\nuzunlik = len(t)\nprint(uzunlik)", "why": "4"},
            {"title": "count", "code": "t = (1, 2, 1, 1)\nnechta = t.count(1)\nprint(nechta)", "why": "3 — bir necha marta uchraydi."},
            {"title": "index", "code": "t = (4, 5, 6)\njoy = t.index(5)\nprint(joy)", "why": "1 — 5 shu indeksda."},
            {"title": "Bitta elementli tuple", "code": "t = (5,)\nprint(t)", "why": "(5,) — vergul shart, aks holda oddiy son."},
            {"title": "list → tuple", "code": "a = [1, 2]\nt = tuple(a)\nprint(t)", "why": "(1, 2)"},
            {"title": "tuple + ulash", "code": "a = (1, 2)\nb = (3,)\nnatija = a + b\nprint(natija)", "why": "(1, 2, 3) — yangi tuple."},
            {"title": "tuple * takror", "code": "t = (0,) * 3\nprint(t)", "why": "(0, 0, 0)"},
            {"title": "in (tuple)", "code": "t = (1, 2, 3)\nbor = 2 in t\nprint(bor)", "why": "True"},
            {"title": "Unpack", "code": "a, b = (3, 4)\nyigindi = a + b\nprint(yigindi)", "why": "7"},
            {"title": "Set yaratish", "code": "s = {1, 2, 2, 3}\nprint(len(s))", "why": "3 — takror 2 bir marta qoladi."},
            {"title": "add", "code": "s = {1, 2}\ns.add(3)\nprint(sorted(s))", "why": "[1, 2, 3]"},
            {"title": "in (set)", "code": "s = {1, 2}\nprint(1 in s)", "why": "True — tezkor tekshiruv."},
            {"title": "discard", "code": "s = {1, 2, 3}\ns.discard(2)\nprint(sorted(s))", "why": "[1, 3] — yo‘q element bo‘lsa ham xato bermaydi."},
            {"title": "remove", "code": "s = {1, 2}\ns.remove(1)\nprint(sorted(s))", "why": "[2] — element yo‘q bo‘lsa xato."},
            {"title": "clear", "code": "s = {1, 2}\ns.clear()\nprint(s)", "why": "set() — bo‘sh to‘plam."},
            {"title": "union (|)", "code": "a = {1, 2}\nb = {2, 3}\nbirlash = a | b\nprint(sorted(birlash))", "why": "[1, 2, 3] — hammasi, takrorsiz."},
            {"title": "intersection (&)", "code": "a = {1, 2, 3}\nb = {2, 3, 4}\nkesish = a & b\nprint(sorted(kesish))", "why": "[2, 3] — faqat umumiy."},
            {"title": "difference (-)", "code": "a = {1, 2, 3}\nb = {2}\nfarq = a - b\nprint(sorted(farq))", "why": "[1, 3] — a da bor, b da yo‘q."},
            {"title": "symmetric (^)", "code": "a = {1, 2}\nb = {2, 3}\nsim = a ^ b\nprint(sorted(sim))", "why": "[1, 3] — umumiy emaslar."},
            {"title": "issubset", "code": "kichik = {1, 2}\nkatta = {1, 2, 3}\nprint(kichik.issubset(katta))", "why": "True — kichik kattaning ichida."},
            {"title": "issuperset", "code": "katta = {1, 2, 3}\nkichik = {1, 2}\nprint(katta.issuperset(kichik))", "why": "True — katta kichikni qamrab oladi."},
            {"title": "update", "code": "s = {1}\ns.update([2, 3])\nprint(sorted(s))", "why": "[1, 2, 3]"},
            {"title": "copy", "code": "s = {1, 2}\nt = s.copy()\nt.add(3)\nprint(sorted(s))", "why": "[1, 2] — asl s o‘zgarmadi."},
            {"title": "list → set (unikal)", "code": "sozlar = ['a', 'b', 'a', 'c']\nunikal = set(sozlar)\nprint(len(unikal))", "why": "3 — takrorlar yo‘qoladi."},
        ],
        "exercises": pack(9, block(
            [
                ex(title="tuple yaratish", task="t=(1,2,3); print(t)", checks=var("t", (1,2,3), stdout("(1, 2, 3)"))),
                ex(title="tuple indeks", task="(7,8,9)[0] → 7", checks=stdout("7")),
                ex(title="tuple len", task="len((1,2,3,4)) → 4", checks=stdout("4")),
                ex(title="tuple count", task="(1,2,1).count(1) → 2", checks=stdout("2")),
                ex(title="tuple index", task="(4,5,6).index(5) → 1", checks=stdout("1")),
                ex(title="set yaratish", task="s={1,2,3}; print(sorted(s))", checks=stdout("[1, 2, 3]")),
                ex(title="set add", task="{1,2}.add(3); sorted print", checks=stdout("[1, 2, 3]")),
                ex(title="in set", task="1 in {1,2} → True", checks=stdout("True")),
                ex(title="tuple bir element", task="t=(5,); print(t)", checks=stdout("(5,)")),
                ex(title="list→tuple", task="print(tuple([1,2]))", checks=stdout("(1, 2)")),
            ],
            [
                ex(title="tuple +", task="(1,2)+(3,) → (1,2,3)", checks=stdout("(1, 2, 3)")),
                ex(title="tuple *", task="(0,)*3", checks=stdout("(0, 0, 0)")),
                ex(title="discard", task="s={1,2,3}; s.discard(2); print(sorted(s))", checks=stdout("[1, 3]")),
                ex(title="remove set", task="s={1,2}; s.remove(1); print(sorted(s))", checks=stdout("[2]")),
                ex(title="union", task="print(sorted({1,2}|{2,3}))", checks=stdout("[1, 2, 3]")),
                ex(title="intersection", task="print(sorted({1,2,3}&{2,3,4}))", checks=stdout("[2, 3]")),
                ex(title="difference", task="print(sorted({1,2,3}-{2}))", checks=stdout("[1, 3]")),
                ex(title="set unikal", task="print(sorted(set([1,1,2,2,3])))", checks=stdout("[1, 2, 3]")),
                ex(title="issubset", task="print({1,2}.issubset({1,2,3}))", checks=stdout("True")),
                ex(title="clear set", task="s={1}; s.clear(); print(s)", checks=stdout("set()")),
            ],
            [
                ex(title="issuperset", task="print({1,2,3}.issuperset({1,2}))", checks=stdout("True")),
                ex(title="symmetric", task="print(sorted({1,2}^{2,3}))", checks=stdout("[1, 3]")),
                ex(title="tuple unpack", task="a,b=(3,4); print(a+b)", checks=stdout("7")),
                ex(title="update set", task="s={1}; s.update([2,3]); print(sorted(s))", checks=stdout("[1, 2, 3]")),
                ex(title="frozenset emas, copy", task="s={1,2}; t=s.copy(); t.add(3); print(sorted(s))", checks=stdout("[1, 2]")),
                ex(title="tuple in", task="print(2 in (1,2,3))", checks=stdout("True")),
                ex(title="set len", task="len({1,2,2,3}) → 3", checks=stdout("3")),
                ex(title="intersection_update g‘oya", task="print(sorted(set('ab') & set('bc')))", checks=stdout("['b']")),
                ex(title="tuple nested", task="print(((1,2),(3,4))[1][0])", checks=stdout("3")),
                ex(title="Amaliy unikal", task="sozlar=['a','b','a']; print(len(set(sozlar))) → 2", checks=stdout("2")),
            ],
        )),
    })

    # --- 10 functions ---
    out.append({
        "id": 10,
        "title": "Funksiyalar asosi (def)",
        "subtitle": "Argumentsiz / argumentli, return, default qiymat.",
        "teach": """
<div class="card">
  <h3>def — qayta ishlatiladigan blok</h3>
  <h4>Argumentsiz</h4>
  <pre class="code">def salom():
    print("Salom")
salom()</pre>
  <h4>Argumentli + return</h4>
  <pre class="code">def qoshing(a, b):
    return a + b
print(qoshing(2, 3))</pre>
  <h4>Default argument</h4>
  <pre class="code">def daraja(x, n=2):
    return x ** n</pre>
  <div class="callout">Parametr — def dagi nom. Argument — chaqiruvdagi qiymat. <code>print</code> ekranga, <code>return</code> dasturga qaytaradi.</div>
</div>
""",
        "examples": [
            {"title": "Argumentsiz", "code": "def ikki():\n    print(2)\nikki()", "why": "2"},
            {"title": "return", "code": "def kv(x):\n    return x * x\nnatija = kv(4)\nprint(natija)", "why": "Avval chaqirib o‘zgaruvchiga, keyin print. 16"},
            {"title": "default", "code": "def salom(ism=\"Mehmon\"):\n    xabar = \"Salom, \" + ism\n    print(xabar)\nsalom()\nsalom(\"Ali\")", "why": "Mehmon keyin Ali"},
            {"title": "if ichida", "code": "def tekshir(n):\n    if n != 0:\n        return \"bor\"\n    return \"nol\"\nprint(tekshir(5))", "why": "Funksiya + != . Natija: bor"},
        ],
        "exercises": pack(10, block(
            [
                ex(title="salom()", task="def salom(): print('salom'); chaqiring", checks=contains("def", stdout("salom"))),
                ex(title="besh", task="def besh(): return 5", checks=expr("besh()", 5)),
                ex(title="kv", task="def kv(x): return x*x", checks=expr("kv(6)", 36)),
                ex(title="qoshing", task="def qoshing(a,b): return a+b", checks=expr("qoshing(2,10)", 12)),
                ex(title="chiqar", task="def chiqar(): print(7); chiqar()", checks=stdout("7")),
                ex(title="ism", task="def ism(): return 'Omar'", checks=expr("ism()", "Omar")),
                ex(title="nol", task="def nol(): return 0", checks=expr("nol()", 0)),
                ex(title="ikki_barobar", task="def ikki_barobar(n): return n*2", checks=expr("ikki_barobar(9)", 18)),
                ex(title="juftmi", task="def juftmi(n): return n%2==0", checks=expr("juftmi(4)", True)),
                ex(title="ayir", task="def ayir(a,b): return a-b", checks=expr("ayir(5,8)", -3)),
            ],
            [
                ex(title="max2", task="def max2(a,b): kattasi", checks=expr("max2(3,11)", 11)),
                ex(title="len_soz", task="def len_soz(s): return len(s)", checks=expr("len_soz('abcd')", 4)),
                ex(title="print_n", task="def print_n(n): print(n); print_n(4)", checks=stdout("4")),
                ex(title="yigindi3", task="def yigindi3(a,b,c): return a+b+c", checks=expr("yigindi3(1,2,3)", 6)),
                ex(title="teskarisi", task="def teskarisi(x): return not x", checks=expr("teskarisi(False)", True)),
                ex(title="salom_ism", task="salom_ism('Ali') → Salom, Ali", checks=stdout("Salom, Ali")),
                ex(title="default", task="def daraja(x,n=2): return x**n — daraja(5)==25", checks=expr("daraja(5)", 25)),
                ex(title="default 2", task="daraja(2,3)==8", checks=expr("daraja(2,3)", 8)),
                ex(title="abs_oddiy", task="abs_oddiy(-4)==4", checks=expr("abs_oddiy(-4)", 4)),
                ex(title="oxirgi", task="oxirgi([5,6,7])==7", checks=expr("oxirgi([5,6,7])", 7)),
            ],
            [
                ex(title="faktorial", task="faktorial(5)==120", checks=expr("faktorial(5)", 120)),
                ex(title="teskari", task="teskari('abc')=='cba'", checks=expr("teskari('abc')", "cba")),
                ex(title="yigindi", task="yigindi([1,2,3,4])==10", checks=expr("yigindi([1,2,3,4])", 10)),
                ex(title="juftlar", task="juftlar([1,2,3,4,5])==[2,4]", checks=expr("juftlar([1,2,3,4,5])", [2,4])),
                ex(title="nechta", task="nechta('banana','a')==3", checks=expr("nechta('banana','a')", 3)),
                ex(title="minmax", task="minmax([3,1,9,2])==[1,9]", checks=expr("minmax([3,1,9,2])", [1,9])),
                ex(title="takrorla", task="takrorla('ab',3)=='ababab'", checks=expr("takrorla('ab',3)", "ababab")),
                ex(title="is_adult", task="is_adult(18)==True", checks=expr("is_adult(18)", True)),
                ex(title="orta", task="orta(10,20)==15.0", checks=expr("orta(10,20)", 15.0)),
                ex(title="default ism", task="salom() → Salom, Mehmon", checks=stdout("Salom, Mehmon")),
            ],
        )),
    })

    # --- 11 args ---
    out.append({
        "id": 11,
        "title": "*args va **kwargs",
        "subtitle": "O‘zgaruvchan va kalitli argumentlar.",
        "teach": """
<div class="card">
  <h3>*args — tuple, **kwargs — dict</h3>
  <pre class="code">def yigindi(*args):
    return sum(args)
print(yigindi(1,2,3))

def info(**kwargs):
    print(kwargs.get("ism"))
info(ism="Ali", yosh=20)</pre>
  <p>Tartib: oddiy → default → <code>*args</code> → <code>**kwargs</code>. Chaqiruvda ochish: <code>f(*[1,2])</code>, <code>f(**{'a':1})</code>.</p>
</div>
""",
        "examples": [
            {"title": "*args", "code": "def s(*a):\n    return sum(a)\nprint(s(1,2,3))", "why": "6"},
            {"title": "**kwargs", "code": "def g(**k):\n    print(k['x'])\ng(x=5)", "why": "5"},
            {"title": "ochish", "code": "def add(a,b):\n    return a+b\nprint(add(*[10,4]))", "why": "14"},
        ],
        "exercises": pack(11, block(
            [
                ex(title="yig", task="def yig(*args): return sum(args) — yig(1,2,3)==6", checks=expr("yig(1,2,3)", 6)),
                ex(title="nechta", task="def nechta(*args): return len(args)", checks=expr("nechta(1,2,3,4)", 4)),
                ex(title="bir", task="def bir(*args): return args[0]", checks=expr("bir(9,8,7)", 9)),
                ex(title="ol", task="def ol(**kw): return kw.get('ism')", checks=expr("ol(ism='Ali',yosh=1)", "Ali")),
                ex(title="kalitlar", task="def kalitlar(**kw): return sorted(kw.keys())", checks=expr("kalitlar(b=1,a=2)", ["a","b"])),
                ex(title="chiq", task="def chiq(*args):\n for x in args: print(x)\nchiq(1,2)", checks=stdout("1\n2")),
                ex(title="yig2", task="yig(10,20)==30", checks=expr("yig(10,20)", 30)),
                ex(title="bo‘sh", task="yig()==0", checks=expr("yig()", 0)),
                ex(title="max", task="eng_katta(*a) — eng_katta(3,9,2)==9", checks=expr("eng_katta(3,9,2)", 9)),
                ex(title="yosh", task="def yosh(**kw): return kw['yosh']", checks=expr("yosh(yosh=18,ism='A')", 18)),
            ],
            [
                ex(title="mix", task="def f(a,*args): return a+sum(args) — f(1,2,3)==6", checks=expr("f(1,2,3)", 6)),
                ex(title="join", task="birlashtir('a','b','c')=='a-b-c'", checks=expr("birlashtir('a','b','c')", "a-b-c")),
                ex(title="len kw", task="nech(**kw) — nech(x=1,y=2)==2", checks=expr("nech(x=1,y=2)", 2)),
                ex(title="ochish", task="print(yig(*[1,2,3])) → 6", checks=stdout("6")),
                ex(title="kop", task="kop(2,3,4)==24", checks=expr("kop(2,3,4)", 24)),
                ex(title="default+args", task="f(5,1,1)==7 (x+len)", checks=expr("f(5,1,1)", 7)),
                ex(title="yig_kw", task="yig_kw(a=1,b=2,c=3)==6", checks=expr("yig_kw(a=1,b=2,c=3)", 6)),
                ex(title="tuple type", task="type(args).__name__ == 'tuple'", checks=expr("t(1,2)", "tuple")),
                ex(title="dict type", task="type(kw).__name__ == 'dict'", checks=expr("t(a=1)", "dict")),
                ex(title="show", task="show(x=7) → 7", checks=stdout("7")),
            ],
            [
                ex(title="full", task="f(1,2,3,4,x=5)==15", checks=expr("f(1,2,3,4,x=5)", 15)),
                ex(title="juftlar", task="juftlar(1,2,3,4,5)==[2,4]", checks=expr("juftlar(1,2,3,4,5)", [2,4])),
                ex(title="fmt", task="fmt(ism='Ali',yosh=20)=='Ali-20'", checks=expr("fmt(ism='Ali',yosh=20)", "Ali-20")),
                ex(title="orta", task="orta(10,20)==15.0", checks=expr("orta(10,20)", 15.0)),
                ex(title="ochish dict", task="print(f(**{'ism':'Bob','yosh':1}))", checks=stdout("Bob")),
                ex(title="uzun", task="uzun('ab','c')==3", checks=expr("uzun('ab','c')", 3)),
                ex(title="bor", task="bor(token='x')==True", checks=expr("bor(token='x')", True)),
                ex(title="min", task="eng_kichik(5,1,8)==1", checks=expr("eng_kichik(5,1,8)", 1)),
                ex(title="bir_ikki", task="bir_ikki(1,2,3,4)==[1,2]", checks=expr("bir_ikki(1,2,3,4)", [1,2])),
                ex(title="dump", task="dump(1,2,x=3,y=4) → 2\\n2", checks=stdout("2\n2")),
            ],
        )),
    })

    # --- 12 files expanded ---
    out.append({
        "id": 12,
        "title": "Fayllar (to‘liq)",
        "subtitle": "r, w, a, r+, rb, read, readline, readlines, write, seek.",
        "teach": """
<div class="card">
  <h3>Fayl bilan ishlash</h3>
  <pre class="code">with open("a.txt", "w", encoding="utf-8") as f:
    f.write("Salom\\nDunyo")

with open("a.txt", "r", encoding="utf-8") as f:
    print(f.read())
    # yoki:
    # f.seek(0)
    # print(f.readlines())</pre>
  <table class="method-table">
    <tr><th>Rejim</th><th>Ma’nosi</th></tr>
    <tr><td><code>"r"</code></td><td>Faqat o‘qish (matn)</td></tr>
    <tr><td><code>"w"</code></td><td>Yozish (eski o‘chadi)</td></tr>
    <tr><td><code>"a"</code></td><td>Oxiriga qo‘shish</td></tr>
    <tr><td><code>"r+"</code></td><td>O‘qish + yozish (fayl bo‘lishi kerak)</td></tr>
    <tr><td><code>"rb"</code> / <code>"wb"</code></td><td>Binary (baytlar) — rasmlar, audio</td></tr>
  </table>
  <h4>O‘qish usullari</h4>
  <table class="method-table">
    <tr><th>Metod</th><th>Vazifa</th></tr>
    <tr><td><code>read()</code></td><td>Butun fayl (yoki N belgi)</td></tr>
    <tr><td><code>readline()</code></td><td>Bitta qator</td></tr>
    <tr><td><code>readlines()</code></td><td>Barcha qatorlar — list</td></tr>
    <tr><td><code>seek(0)</code></td><td>Kursor boshiga</td></tr>
    <tr><td><code>write(s)</code> / <code>writelines</code></td><td>Yozish</td></tr>
  </table>
  <pre class="code"># r+ misol
with open("a.txt", "r+", encoding="utf-8") as f:
    eski = f.read()
    f.seek(0)
    f.write("YANGI\\n" + eski)

# rb misol
with open("a.bin", "wb") as f:
    f.write(b"ABC")
with open("a.bin", "rb") as f:
    data = f.read()
print(data)  # b'ABC'</pre>
  <div class="callout"><code>with</code> faylni yopadi. Binary da <code>encoding</code> ishlatilmaydi — baytlar bilan ishlaysiz.</div>
</div>
""",
        "examples": [
            {"title": "readlines", "code": 'with open("t.txt", "w", encoding="utf-8") as f:\n    f.write("a\\nb\\n")\nwith open("t.txt", encoding="utf-8") as f:\n    qatorlar = f.readlines()\nnechta = len(qatorlar)\nprint(nechta)', "why": "Avval listga, keyin len. Natija: 2"},
            {"title": "readline", "code": 'with open("p.txt", "w", encoding="utf-8") as f:\n    f.write("bir\\nikki")\nwith open("p.txt", encoding="utf-8") as f:\n    birinchi = f.readline().strip()\nprint(birinchi)', "why": "bir"},
            {"title": "r+", "code": 'with open("x.txt", "w", encoding="utf-8") as f:\n    f.write("eski")\nwith open("x.txt", "r+", encoding="utf-8") as f:\n    matn = f.read()\n    f.seek(0)\n    f.write("YANGI")\nprint(matn)', "why": "O‘qish+yozish. Eski matn print: eski"},
            {"title": "rb/wb", "code": 'with open("b.bin", "wb") as f:\n    f.write(b"hi")\nwith open("b.bin", "rb") as f:\n    data = f.read()\nprint(data)', "why": "b'hi' — binary baytlar"},
            {"title": "endswith + fayl", "code": 'nom = "data.txt"\nif nom.endswith(".txt"):\n    with open(nom, "w", encoding="utf-8") as f:\n        f.write("ok")\n    print("yozildi")', "why": "3+5+12 dars birga."},
        ],
        "exercises": pack(12, block(
            [
                ex(title="Yozish", task='salom.txt ga «Salom»', checks=file_eq("salom.txt", "Salom")),
                ex(title="OK", task="ok.txt ga OK", checks=file_eq("ok.txt", "OK")),
                ex(title="read", task="data.txt ni read qilib print (Anor)", setup='open("data.txt","w",encoding="utf-8").write("Anor")', checks=stdout("Anor")),
                ex(title="42", task="n.txt ga 42", checks=file_eq("n.txt", "42")),
                ex(title="with", task="with open bilan b.txt ga Python", checks=contains("with", file_eq("b.txt", "Python"))),
                ex(title="readlines len", task="q.txt da 2 qator — len(readlines())", setup='open("q.txt","w",encoding="utf-8").write("a\\nb\\n")', checks=stdout("2")),
                ex(title="readline", task="p.txt dan readline().strip() print (bir)", setup='open("p.txt","w",encoding="utf-8").write("bir\\nikki")', checks=stdout("bir")),
                ex(title="append a", task="log.txt A bor, a rejimida B → AB", setup='open("log.txt","w",encoding="utf-8").write("A")', checks=file_eq("log.txt", "AB")),
                ex(title="wb bayt", task='z.bin fayliga "wb" rejimida b"XY" yozing (write).', checks=contains("wb")),
                ex(title="rb o‘qish", task='Avval z.bin ga wb bilan b"AB" yozing, keyin "rb" da o‘qib print qiling. Natija: b\'AB\'', checks=contains("rb", stdout("b'AB'"))),
            ],
            [
                ex(title="Ikki qator", task="t.txt: Bir\\nIkki", checks=file_eq("t.txt", "Bir\nIkki")),
                ex(title="readlines print", task="r.txt qatorlarini strip qilib print", setup='open("r.txt","w",encoding="utf-8").write("a\\nb")', checks=stdout("a\nb")),
                ex(title="r+ o‘qish", task="x.txt da salom. r+ da o‘qib print", setup='open("x.txt","w",encoding="utf-8").write("salom")', checks=contains("r+", stdout("salom"))),
                ex(title="r+ yozish", task="x.txt da Hi. r+ da o‘qib, seek(0), YANGI yozing.", setup='open("x.txt","w",encoding="utf-8").write("Hi")', checks=contains("r+", file_eq("x.txt", "YANGI"))),
                ex(title="Nusxa", task="from.txt → to.txt", setup='open("from.txt","w",encoding="utf-8").write("copy")', checks=file_eq("to.txt", "copy")),
                ex(title="input yoz", task="input → out.txt (Qalam)", stdin="Qalam", checks=file_eq("out.txt", "Qalam")),
                ex(title="writelines", task="nums.txt ga writelines(['1\\n','2\\n','3\\n'])", checks=file_eq("nums.txt", "1\n2\n3")),
                ex(title="strip fayl", task="p.txt strip → x", setup='open("p.txt","w",encoding="utf-8").write("  x  ")', checks=stdout("x")),
                ex(title="rb len", task='wb b"ABCD", rb read, print(len(...)) → 4', checks=stdout("4")),
                ex(title="read N", task="m.txt dan read(3) → Pyt", setup='open("m.txt","w",encoding="utf-8").write("Python")', checks=stdout("Pyt")),
            ],
            [
                ex(title="Yig‘indi", task="sum.txt 3\\n4\\n5 → 12", setup='open("sum.txt","w",encoding="utf-8").write("3\\n4\\n5")', checks=stdout("12")),
                ex(title="readlines for", task="har qator oldiga - : -a\\n-b", setup='open("pre.txt","w",encoding="utf-8").write("a\\nb")', checks=stdout("-a\n-b")),
                ex(title="Juftlar fayl", task="in2 → even.txt juftlar", setup='open("in2.txt","w",encoding="utf-8").write("1\\n2\\n3\\n4")', checks=file_eq("even.txt", "2\n4")),
                ex(title="r+ qo‘shish", task="a.txt da A. r+ seek oxiriga, B qo‘shing → AB", setup='open("a.txt","w",encoding="utf-8").write("A")', checks=contains("r+", file_eq("a.txt", "AB")), hint="f.seek(0,2) yoki read keyin write"),
                ex(title="CSV", task="Ali,20 → 20", setup='open("csv.txt","w",encoding="utf-8").write("Ali,20")', checks=stdout("20")),
                ex(title="rb slice", task='b"HELLO" yozing, rb da o‘qib [:2] print → b\'HE\'', checks=stdout("b'HE'")),
                ex(title="upper fayl", task="up.txt upper → OK", setup='open("up.txt","w",encoding="utf-8").write("ok")', checks=stdout("OK")),
                ex(title="Birlash", task="a1+a2 → bir.txt", setup='open("a1.txt","w",encoding="utf-8").write("A"); open("a2.txt","w",encoding="utf-8").write("B")', checks=file_eq("bir.txt", "AB")),
                ex(title="Teskari qator", task="bir\\nikki → ikki\\nbir", setup='open("r.txt","w",encoding="utf-8").write("bir\\nikki")', checks=stdout("ikki\nbir")),
                ex(title="Hisobot", task="hisob.txt ga Jami: 15", checks=file_eq("hisob.txt", "Jami: 15")),
            ],
        )),
    })

    # --- 13 try ---
    out.append({
        "id": 13,
        "title": "Xatolar: try / except",
        "subtitle": "ValueError, ZeroDivisionError, else, finally.",
        "teach": """
<div class="card">
  <h3>try / except</h3>
  <pre class="code">try:
    n = int(input())
    print(10 / n)
except ValueError:
    print("Son kiriting")
except ZeroDivisionError:
    print("0 ga bo‘lib bo‘lmaydi")
else:
    print("muvaffaqiyat")
finally:
    print("tugadi")</pre>
  <p><code>else</code> — xato bo‘lmasa. <code>finally</code> — har doim.</p>
</div>
""",
        "examples": [
            {"title": "ValueError", "code": "matn = 'a'\ntry:\n    n = int(matn)\nexcept ValueError:\n    n = None\n    print('xato')\nelse:\n    print(n)", "why": "xato — int bo‘lmadi"},
            {"title": "ZeroDivision", "code": "a = 1\nb = 0\ntry:\n    natija = a / b\nexcept ZeroDivisionError:\n    natija = None\n    print('nol')\nprint(natija)", "why": "nol keyin None"},
            {"title": "else/finally", "code": "try:\n    n = int('3')\nexcept ValueError:\n    print('e')\nelse:\n    print(n)\nfinally:\n    print('tugadi')", "why": "3 keyin tugadi"},
            {"title": "endswith + try", "code": 'nom = "a.txt"\ntry:\n    if not nom.endswith(".txt"):\n        raise ValueError("kengaytma")\n    print("ok")\nexcept ValueError:\n    print("xato")', "why": "ok — oldingi darslar + try"},
        ],
        "exercises": pack(13, block(
            [
                ex(title="ValueError", task="int('x') ushlab print('xato')", checks=contains("except", stdout("xato"))),
                ex(title="ZeroDiv", task="1/0 → print('nol')", checks=stdout("nol")),
                ex(title="int ok", task="print(int('5'))", checks=stdout("5")),
                ex(title="son emas", task="int('ab') → 'son emas'", checks=stdout("son emas")),
                ex(title="IndexError", task="[1][5] → 'indeks'", checks=stdout("indeks")),
                ex(title="KeyError", task="{}['a'] → 'yoq'", checks=stdout("yoq")),
                ex(title="else", task="int('2') else print(n)", checks=stdout("2")),
                ex(title="finally", task="print(1) finally print(2)", checks=stdout("1\n2")),
                ex(title="TypeError", task="'a'+1 → 'tur'", checks=stdout("tur")),
                ex(title="NameError", task="mavjud_emas → 'nom'", checks=stdout("nom")),
            ],
            [
                ex(title="input xato", task="int(input()) — a → xato", checks=stdout("xato"), stdin="a"),
                ex(title="input ok", task="int(input()) — 7", checks=stdout("7"), stdin="7"),
                ex(title=" /0", task="10//n — 0 → nol", checks=stdout("nol"), stdin="0"),
                ex(title=" //2", task="10//n — 2 → 5", checks=stdout("5"), stdin="2"),
                ex(title="ValueError msg", task="int('z') → son", checks=stdout("son"), stdin="z"),
                ex(title="else finally", task="ok\\nend", checks=stdout("ok\nend")),
                ex(title="list ok", task="a[1] → 2", checks=stdout("2")),
                ex(title="list xato", task="a[9] → -1", checks=stdout("-1")),
                ex(title="float ok", task="float('3.5')", checks=stdout("3.5")),
                ex(title="float xato", task="float('x') → xato", checks=stdout("xato")),
            ],
            [
                ex(title="bol None", task="bol(1,0) print None", checks=stdout("None")),
                ex(title="safe_int 0", task="safe_int('x') → 0", checks=stdout("0")),
                ex(title="safe_int 12", task="safe_int('12') → 12", checks=stdout("12")),
                ex(title="tuple except", task="(ValueError, TypeError) → bad", checks=stdout("bad")),
                ex(title="as e", task="type(e).__name__ → ValueError", checks=stdout("ValueError")),
                ex(title="FileNotFound", task="open yo‘q fayl → topilmadi", checks=stdout("topilmadi")),
                ex(title="Ichki", task="1/0 ichki → ich", checks=stdout("ich")),
                ex(title="else ok", task="100//5 → 20\\nok", checks=stdout("20\nok"), stdin="5"),
                ex(title="KeyError get", task="d['b'] xato → get a → 1", checks=stdout("1")),
                ex(title="*2", task="int(s)*2 — 3 → 6", checks=stdout("6"), stdin="3"),
            ],
        )),
    })

    # --- 14 dict ---
    out.append({
        "id": 14,
        "title": "Lug‘at (dict)",
        "subtitle": "Kalit → qiymat. get, keys, values, items, update, pop…",
        "teach": """
<div class="card">
  <h3>dict — kalit orqali qiymat</h3>
  <pre class="code">talaba = {"ism": "Ali", "yosh": 20}
print(talaba["ism"])
print(talaba.get("ball", 0))  # yo‘q bo‘lsa 0
talaba["yosh"] = 21
talaba["guruh"] = "A"</pre>
  <table class="method-table">
    <tr><th>Metod / amal</th><th>Vazifa</th></tr>
    <tr><td><code>d[k]</code> / <code>d[k]=v</code></td><td>O‘qish / yozish</td></tr>
    <tr><td><code>get(k, default)</code></td><td>Xavfsiz o‘qish</td></tr>
    <tr><td><code>keys()</code></td><td>Kalitlar</td></tr>
    <tr><td><code>values()</code></td><td>Qiymatlar</td></tr>
    <tr><td><code>items()</code></td><td>(kalit, qiymat) juftliklar</td></tr>
    <tr><td><code>update({...})</code></td><td>Bir nechtasini yangilash</td></tr>
    <tr><td><code>pop(k)</code></td><td>Kalitni olib tashlash</td></tr>
    <tr><td><code>popitem()</code></td><td>Oxirgi juftlikni olish</td></tr>
    <tr><td><code>setdefault(k, v)</code></td><td>Yo‘q bo‘lsa qo‘yish</td></tr>
    <tr><td><code>clear()</code></td><td>Tozalash</td></tr>
    <tr><td><code>copy()</code></td><td>Nusxa</td></tr>
    <tr><td><code>k in d</code></td><td>Kalit bormi</td></tr>
    <tr><td><code>del d[k]</code></td><td>O‘chirish</td></tr>
  </table>
  <pre class="code">for k, v in talaba.items():
    print(k, v)</pre>
  <div class="callout">Kalit odatda str/int (o‘zgarmas tur). List kalit bo‘lolmaydi — tuple bo‘la oladi.</div>
</div>
""",
        "examples": [
            {"title": "Yaratish", "code": 'talaba = {"ism": "Ali", "yosh": 20}\nism = talaba["ism"]\nyosh = talaba.get("yosh")\nprint(ism)\nprint(yosh)', "why": "Ali va 20"},
            {"title": "get default", "code": 'd = {"a": 1}\nqiymat = d.get("c", 0)\nprint(qiymat)', "why": "0 — kalit yo‘q"},
            {"title": "items + if", "code": 'd = {"a": 1, "b": 10, "c": 5}\nfor k, v in d.items():\n    if v != 1:\n        print(k)', "why": "b va c — != bilan filtr"},
            {"title": "update/pop", "code": 'd = {"a": 1}\nd.update({"b": 2})\nolingan = d.pop("a")\nprint(olingan)\nprint(d)', "why": "1 keyin {'b': 2}"},
            {"title": "Murakkab sanoq", "code": "sozlar = ['a', 'b', 'a']\nd = {}\nfor s in sozlar:\n    d[s] = d.get(s, 0) + 1\nprint(d['a'])", "why": "2 — dict + for + get"},
        ],
        "exercises": pack(14, block(
            [
                ex(title="Yaratish", task='d={"ism":"Ali"}; print(d["ism"])', checks=stdout("Ali")),
                ex(title="get", task='d={"a":1}; print(d.get("b",0))', checks=stdout("0")),
                ex(title="yozish", task='d={}; d["x"]=5; print(d["x"])', checks=stdout("5")),
                ex(title="in", task='print("a" in {"a":1})', checks=stdout("True")),
                ex(title="keys", task='print(sorted({"b":1,"a":2}.keys()))', checks=stdout("['a', 'b']")),
                ex(title="values", task='print(sorted({"a":2,"b":1}.values()))', checks=stdout("[1, 2]")),
                ex(title="len", task='print(len({"a":1,"b":2}))', checks=stdout("2")),
                ex(title="get bor", task='print({"a":9}.get("a"))', checks=stdout("9")),
                ex(title="bo‘sh", task="d={}; print(d)", checks=stdout("{}")),
                ex(title="o‘zgartirish", task='d={"yosh":18}; d["yosh"]=19; print(d["yosh"])', checks=stdout("19")),
            ],
            [
                ex(title="items", task='for k,v in {"a":1}.items(): print(k); print(v)', checks=stdout("a\n1")),
                ex(title="update", task='d={"a":1}; d.update({"b":2}); print(sorted(d.keys()))', checks=stdout("['a', 'b']")),
                ex(title="pop", task='d={"a":1,"b":2}; print(d.pop("a")); print(d)', checks=stdout("1\n{'b': 2}")),
                ex(title="setdefault", task='d={}; print(d.setdefault("x",10)); print(d["x"])', checks=stdout("10\n10")),
                ex(title="del", task='d={"a":1,"b":2}; del d["a"]; print(d)', checks=stdout("{'b': 2}")),
                ex(title="clear", task='d={"a":1}; d.clear(); print(d)', checks=stdout("{}")),
                ex(title="copy", task='a={"x":1}; b=a.copy(); b["x"]=2; print(a["x"])', checks=stdout("1")),
                ex(title="fromkeys", task='print(dict.fromkeys(["a","b"], 0))', checks=stdout("{'a': 0, 'b': 0}")),
                ex(title="popitem", task='d={"a":1}; print(d.popitem())', checks=stdout("('a', 1)")),
                ex(title="values sum", task='print(sum({"a":1,"b":2,"c":3}.values()))', checks=stdout("6")),
            ],
            [
                ex(title="Ichma-ich", task='d={"u":{"ism":"Ali"}}; print(d["u"]["ism"])', checks=stdout("Ali")),
                ex(title="sanoq", task="sozlar=['a','b','a']; d={}\nfor s in sozlar: d[s]=d.get(s,0)+1\nprint(d['a']) → 2", checks=stdout("2")),
                ex(title="merge |", task='print(({"a":1}|{"b":2})["b"])', checks=stdout("2")),
                ex(title="update ustun", task='d={"a":1}; d.update({"a":9}); print(d["a"])', checks=stdout("9")),
                ex(title="keys list", task='print(list({"z":1,"y":2}.keys())) yoki sorted', checks=stdout("['y', 'z']"), hint="sorted(...)"),
                ex(title="get zanjir", task='d={"a":{"b":5}}; print(d.get("a",{}).get("b"))', checks=stdout("5")),
                ex(title="filter values", task='d={"a":1,"b":10,"c":5}; print(sorted([k for k,v in d.items() if v>=5]))', checks=stdout("['b', 'c']")),
                ex(title="setdefault list", task='d={}; d.setdefault("nums", []).append(3); print(d["nums"])', checks=stdout("[3]")),
                ex(title="dict comp", task='print({x: x*x for x in [1,2,3]})', checks=stdout("{1: 1, 2: 4, 3: 9}")),
                ex(title="Amaliy", task='talaba={"ism":"Omar","ball":95}; ekranga Omar:95 chiqaring', checks=stdout("Omar:95"), hint="print(talaba['ism']+':'+str(talaba['ball']))"),
            ],
        )),
    })

    # --- 15 json ---
    out.append({
        "id": 15,
        "title": "JSON",
        "subtitle": "dict/list ↔ matn. dumps, loads, dump, load — API va fayllar uchun.",
        "teach": """
<div class="card">
  <h3>JSON nima?</h3>
  <p>JSON — ma’lumotni matn qilib uzatish formati (saytlar, API, sozlamalar). Python <code>dict</code>/<code>list</code> ga juda o‘xshaydi.</p>
  <pre class="code">import json

data = {"ism": "Ali", "yosh": 20}
matn = json.dumps(data)      # Python → JSON matn
print(matn)                  # {"ism": "Ali", "yosh": 20}

qayta = json.loads(matn)     # JSON matn → Python
print(qayta["ism"])</pre>
  <table class="method-table">
    <tr><th>Funksiya</th><th>Vazifa</th></tr>
    <tr><td><code>json.dumps(obj)</code></td><td>Python obyekt → JSON <strong>matn</strong></td></tr>
    <tr><td><code>json.loads(s)</code></td><td>JSON matn → Python obyekt</td></tr>
    <tr><td><code>json.dump(obj, file)</code></td><td>Faylga JSON yozish</td></tr>
    <tr><td><code>json.load(file)</code></td><td>Fayldan JSON o‘qish</td></tr>
  </table>
  <pre class="code">with open("data.json", "w", encoding="utf-8") as f:
    json.dump({"ok": True}, f)

with open("data.json", "r", encoding="utf-8") as f:
    print(json.load(f))</pre>
  <div class="callout"><strong>Farq:</strong> <code>dumps/loads</code> — matn bilan (s harfi = string). <code>dump/load</code> — fayl bilan. API javobi odatda JSON matn — <code>loads</code> qilasiz.</div>
  <p>Moslik: JSON object ↔ dict, array ↔ list, string ↔ str, number ↔ int/float, true/false/null ↔ True/False/None.</p>
</div>
""",
        "examples": [
            {"title": "dumps/loads", "code": "import json\ndata = {'a': 1}\nmatn = json.dumps(data)\nqayta = json.loads(matn)\nprint(matn)\nprint(qayta['a'])", "why": "Avval matn, keyin dict. 1"},
            {"title": "list JSON", "code": "import json\nmatn = '[1, 2, 3]'\nsonlar = json.loads(matn)\nprint(sonlar)", "why": "[1, 2, 3]"},
            {"title": "fayl dump/load", "code": "import json\ndata = {'x': 5}\nwith open('t.json', 'w', encoding='utf-8') as f:\n    json.dump(data, f)\nwith open('t.json', 'r', encoding='utf-8') as f:\n    olingan = json.load(f)\nprint(olingan['x'])", "why": "5 — fayl orqali"},
            {"title": "API g‘oya", "code": "import json\njavob = '{\"token\": \"abc\", \"ok\": true}'\nobj = json.loads(javob)\nif obj.get('ok') != False:\n    print(obj['token'])", "why": "JSON + dict.get + != . Natija: abc"},
        ],
        "exercises": pack(15, block(
            [
                ex(title="import", task="import json; print(json.dumps({'a':1}))", checks=contains("import json", stdout('{"a": 1}'))),
                ex(title="loads", task="print(json.loads('{\"x\": 5}')['x'])", checks=stdout("5")),
                ex(title="list dumps", task="print(json.dumps([1,2,3]))", checks=stdout("[1, 2, 3]")),
                ex(title="loads list", task="print(json.loads('[10,20]')[1])", checks=stdout("20")),
                ex(title="True", task="print(json.loads('true'))", checks=stdout("True")),
                ex(title="None", task="print(json.loads('null'))", checks=stdout("None")),
                ex(title="dumps str", task='print(json.dumps("salom"))', checks=stdout('"salom"')),
                ex(title="keys", task="print(sorted(json.loads('{\"b\":1,\"a\":2}').keys()))", checks=stdout("['a', 'b']")),
                ex(title="yosh", task='d=json.loads(\'{"yosh":18}\'); print(d["yosh"])', checks=stdout("18")),
                ex(title="roundtrip", task="s=json.dumps({'n':3}); print(json.loads(s)['n'])", checks=stdout("3")),
            ],
            [
                ex(title="dump fayl", task='json.dump({"ok":True}, open("a.json","w",encoding="utf-8"))', checks=contains("dump", file_eq("a.json", '{"ok": true}'))),
                ex(title="load fayl", task="a.json dan load — setup bor", setup='open("a.json","w",encoding="utf-8").write(\'{"v":7}\')', checks=stdout("7"), hint="print(json.load(open(...))['v'])"),
                ex(title="ensure_ascii", task="print('ok' in json.dumps({'s':'salom'}, ensure_ascii=False))", checks=stdout("True")),
                ex(title="nested", task="print(json.loads('{\"u\":{\"ism\":\"Ali\"}}')['u']['ism'])", checks=stdout("Ali")),
                ex(title="array len", task="print(len(json.loads('[1,2,3,4]')))", checks=stdout("4")),
                ex(title="dumps indent", task="s=json.dumps({'a':1}, indent=2); print('a' in s)", checks=stdout("True")),
                ex(title="False", task="print(json.loads('false'))", checks=stdout("False")),
                ex(title="update json", task="d=json.loads('{\"a\":1}'); d['b']=2; print(json.loads(json.dumps(d))['b'])", checks=stdout("2")),
                ex(title="list dict", task="print(json.loads('[{\"id\":1}]')[0]['id'])", checks=stdout("1")),
                ex(title="type", task="print(type(json.loads('{}')).__name__)", checks=stdout("dict")),
            ],
            [
                ex(title="API g‘oya", task="javob='{\"token\":\"abc\"}'; print(json.loads(javob)['token'])", checks=stdout("abc")),
                ex(title="dump load", task="json.dump({'k':9}, open('k.json','w',encoding='utf-8')); print(json.load(open('k.json',encoding='utf-8'))['k'])", checks=stdout("9")),
                ex(title="sort_keys", task="print(json.dumps({'b':1,'a':2}, sort_keys=True))", checks=stdout('{"a": 2, "b": 1}')),
                ex(title="xato loads", task="try: json.loads('{bad')\\nexcept json.JSONDecodeError: print('xato')", checks=stdout("xato")),
                ex(title="config", task="cfg={'host':'localhost','port':8080}; print(json.loads(json.dumps(cfg))['port'])", checks=stdout("8080")),
                ex(title="list append json", task="a=json.loads('[1,2]'); a.append(3); print(a)", checks=stdout("[1, 2, 3]")),
                ex(title="get json", task="print(json.loads('{\"a\":1}').get('b',0))", checks=stdout("0")),
                ex(title="bytes emas, str", task="print(isinstance(json.dumps([1]), str))", checks=stdout("True")),
                ex(title="Fayl write read", task="data.json ga {\"jami\":15} dump, load qilib jami print", checks=stdout("15")),
                ex(title="Birlashtirish", task="a=json.loads('{\"a\":1}'); b=json.loads('{\"b\":2}'); print((a|b)['b'])", checks=stdout("2")),
            ],
        )),
    })

    # --- 16 libraries ---
    out.append({
        "id": 16,
        "title": "Kutubxonalar (import)",
        "subtitle": "math, random, datetime — tayyor vositalar.",
        "teach": """
<div class="card">
  <h3>import — tayyor kod</h3>
  <pre class="code">import math
print(math.sqrt(16))

import random
random.seed(1)

from datetime import date
print(date(2026, 10, 27).year)</pre>
  <div class="callout">JSON/API bilan ishlashda ham kutubxona kerak bo‘ladi. Tokenni kodga yozmang.</div>
</div>
""",
        "examples": [
            {"title": "math", "code": "import math\nprint(math.ceil(2.1))", "why": "3"},
            {"title": "random", "code": "import random\nrandom.seed(0)\nprint(random.randint(5,5))", "why": "5"},
            {"title": "date", "code": "from datetime import date\nprint(date(2026,1,1).year)", "why": "2026"},
        ],
        "exercises": pack(16, block(
            [
                ex(title="sqrt", task="math.sqrt(9) → 3.0", checks=contains("import math", stdout("3.0"))),
                ex(title="pi", task="math.pi (3.14...)", checks=contains("math.pi", [{"type":"stdout_contains","text":"3.14"}])),
                ex(title="ceil", task="ceil(2.2) → 3", checks=stdout("3")),
                ex(title="floor", task="floor(2.8) → 2", checks=stdout("2")),
                ex(title="fabs", task="fabs(-3) → 3.0", checks=stdout("3.0")),
                ex(title="pow", task="pow(2,3) → 8.0", checks=stdout("8.0")),
                ex(title="randint", task="seed(0); randint(5,5) → 5", checks=stdout("5")),
                ex(title="year", task="date(2026,1,1).year", checks=stdout("2026")),
                ex(title="e", task="int(math.e) → 2", checks=stdout("2")),
                ex(title="sqrt16", task="int(sqrt(16)) → 4", checks=stdout("4")),
            ],
            [
                ex(title="hypot", task="hypot(3,4) → 5.0", checks=stdout("5.0")),
                ex(title="factorial", task="factorial(5) → 120", checks=stdout("120")),
                ex(title="choice", task="choice([10,10,10]) → 10", checks=stdout("10")),
                ex(title="month", task="date(...).month → 10", checks=stdout("10")),
                ex(title="log10", task="log10(100) → 2.0", checks=stdout("2.0")),
                ex(title="trunc", task="trunc(3.9) → 3", checks=stdout("3")),
                ex(title="randrange", task="randrange(2,3) → 2", checks=stdout("2")),
                ex(title="days", task="farq .days → 1", checks=stdout("1")),
                ex(title="gcd", task="gcd(12,8) → 4", checks=stdout("4")),
                ex(title="degrees", task="int(degrees(pi)) → 180", checks=stdout("180")),
            ],
            [
                ex(title="Yuza", task="r=2 round(pi*r**2,2) → 12.57", checks=stdout("12.57")),
                ex(title="sample", task="sorted(sample([1,2,3],3))", checks=stdout("[1, 2, 3]")),
                ex(title="weekday", task="weekday() → 1", checks=stdout("1")),
                ex(title="comb", task="comb(5,2) → 10", checks=stdout("10")),
                ex(title="isqt", task="isqrt(10) → 3", checks=stdout("3")),
                ex(title="prod", task="prod([2,3,4]) → 24", checks=stdout("24")),
                ex(title="hour", task="datetime hour → 15", checks=stdout("15")),
                ex(title="log2", task="int(log(8,2)) → 3", checks=stdout("3")),
                ex(title="dist", task="dist → 5.0", checks=stdout("5.0")),
                ex(title="sqrt list", task="[4,9,16] → 2 3 4", checks=stdout("2\n3\n4")),
            ],
        )),
    })

    return out
