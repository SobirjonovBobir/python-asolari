import json
from pathlib import Path
t = Path("js/data.js").read_text(encoding="utf-8")
d = json.loads(t[t.find("{") : t.rfind("}") + 1])
for L in d["lessons"]:
    print(f"L{L['id']:2d} review={len(L.get('review') or [])}")
print("sample L11:", d["lessons"][10]["review"][:2])
