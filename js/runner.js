const PythonRunner = (() => {
  let pyodide = null;
  let loading = null;

  async function load() {
    if (pyodide) return pyodide;
    if (loading) return loading;
    loading = loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/",
    }).then((p) => {
      pyodide = p;
      return p;
    });
    return loading;
  }

  function pyStr(value) {
    return JSON.stringify(value ?? "");
  }

  function wrapAsReturn(userCode, exercise) {
    const setup = exercise.setup || "";
    const stdin = exercise.stdin || "";
    const checks = exercise.checks || [];
    return `
import sys, io, json, traceback, os

import glob
for _path in glob.glob("*.txt"):
    try:
        os.remove(_path)
    except Exception:
        pass

sys.stdin = io.StringIO(${pyStr(stdin)})
_stdout = io.StringIO()
_real_out, _real_err = sys.stdout, sys.stderr
sys.stdout = _stdout
sys.stderr = io.StringIO()

_error = ""
_ns = {"__name__": "__main__"}
try:
    exec(${pyStr(setup)}, _ns, _ns)
    exec(${pyStr(userCode)}, _ns, _ns)
except Exception:
    _error = traceback.format_exc()

_out = _stdout.getvalue()
sys.stdout, sys.stderr = _real_out, _real_err

def _norm(s):
    return str(s).replace("\\r\\n", "\\n").strip()

def _eq(a, b):
    if isinstance(a, float) or isinstance(b, float):
        try:
            return abs(float(a) - float(b)) < 1e-6
        except Exception:
            return False
    return a == b

_results = []
if not _error:
    for _c in json.loads(${pyStr(JSON.stringify(checks))}):
        _ok = False
        _msg = ""
        _t = _c.get("type")
        try:
            if _t == "stdout":
                got = _out if not _c.get("strip", True) else _norm(_out)
                exp = _c.get("equals", "")
                if _c.get("strip", True):
                    exp = _norm(exp)
                _ok = got == exp
                if not _ok:
                    _msg = "Kutilgan natija:\\n" + str(_c.get("equals", "")) + "\\n\\nSizniki:\\n" + _out
            elif _t == "stdout_contains":
                _ok = str(_c.get("text", "")) in _out
                if not _ok:
                    _msg = "Chiqishda shu matn bo'lishi kerak: " + str(_c.get("text", ""))
            elif _t == "var":
                name = _c.get("name")
                if name not in _ns:
                    _ok = False
                    _msg = name + " degan o'zgaruvchi topilmadi. Nomini to'g'ri yozing."
                else:
                    _ok = _eq(_ns[name], _c.get("equals"))
                    if not _ok:
                        _msg = name + " qiymati " + repr(_c.get("equals")) + " bo'lishi kerak, hozir: " + repr(_ns[name])
            elif _t == "expr":
                val = eval(_c.get("code"), _ns, _ns)
                _ok = _eq(val, _c.get("equals"))
                if not _ok:
                    _msg = _c.get("code") + " natijasi " + repr(_c.get("equals")) + " bo'lishi kerak, hozir: " + repr(val)
            elif _t == "file":
                path = _c.get("path")
                if not os.path.exists(path):
                    _ok = False
                    _msg = path + " fayli yaratilmadi"
                else:
                    with open(path, "r", encoding="utf-8") as f:
                        got = f.read()
                    exp = _c.get("equals", "")
                    _ok = _norm(got) == _norm(exp) if _c.get("strip", True) else got == exp
                    if not _ok:
                        _msg = path + " ichidagi matn mos kelmadi.\\nKutilgan:\\n" + exp + "\\nSizniki:\\n" + got
            elif _t == "code_contains":
                src = ${pyStr(userCode)}
                needle = _c.get("text", "")
                _ok = needle in src
                if not _ok:
                    _msg = "Kodda shuni ishlating: " + needle
            else:
                _msg = "Noma'lum tekshiruv"
        except Exception:
            _ok = False
            _msg = traceback.format_exc()
        _results.append({"ok": bool(_ok), "msg": _msg})
else:
    _results.append({"ok": False, "msg": "Kod xato bilan to'xtadi"})

json.dumps({"error": _error, "stdout": _out, "results": _results}, ensure_ascii=False)
`;
  }

  async function runAndCheck(userCode, exercise) {
    const py = await load();
    const returned = await py.runPythonAsync(wrapAsReturn(userCode, exercise));
    return JSON.parse(returned);
  }

  return { load, runAndCheck };
})();
