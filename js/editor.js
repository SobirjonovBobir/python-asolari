/**
 * CodeMirror asosidagi editor:
 * - qavs / qo'shtirnoq juftligi
 * - print, def, if... takliflari
 * - qator raqamlari, Tab bilan bo'shliq
 */
const CodeEditor = (() => {
  let cm = null;

  const WORDS = [
    "print", "input", "def", "return", "if", "elif", "else", "for", "while",
    "in", "not", "and", "or", "True", "False", "None", "pass", "break", "continue",
    "len", "range", "list", "dict", "tuple", "set", "str", "int", "float", "bool",
    "open", "with", "as", "import", "from", "append", "insert", "remove", "pop",
    "extend", "clear", "index", "count", "sort", "reverse", "split", "join", "strip",
    "upper", "lower", "replace", "startswith", "endswith", "sorted", "sum",
    "min", "max", "abs", "round", "enumerate", "zip", "map", "filter", "lambda",
    "try", "except", "finally", "raise", "args", "kwargs",
    "startswith", "endswith", "find", "replace", "split", "strip",
    "add", "discard", "union", "intersection", "difference", "issubset",
    "keys", "values", "items", "update", "setdefault", "popitem", "get",
    "dumps", "loads", "dump", "load", "readline", "readlines", "seek",
    "math", "random", "datetime", "os", "json", "sqrt", "ceil", "floor",
    "randint", "choice", "seed", "date", "timedelta", "factorial",
    "ValueError", "ZeroDivisionError", "IndexError", "KeyError", "TypeError",
    "NameError", "FileNotFoundError",
  ];

  const SNIPPETS = {
    print: "print()",
    def: "def nomi():\n    ",
    for: "for i in range():\n    ",
    while: "while :\n    ",
    if: "if :\n    ",
    elif: "elif :\n    ",
    else: "else:\n    ",
    with: 'with open("fayl.txt", "r", encoding="utf-8") as f:\n    ',
    import: "import ",
  };

  function pythonHint(editor) {
    const cur = editor.getCursor();
    const token = editor.getTokenAt(cur);
    let start = token.start;
    let end = cur.ch;
    let word = token.string;

    if (/[^\w]/.test(word) && word !== ".") {
      word = "";
      start = end = cur.ch;
    } else if (token.end > cur.ch) {
      word = word.slice(0, cur.ch - token.start);
      end = cur.ch;
    }

    const lower = word.toLowerCase();
    const list = [];
    const seen = new Set();

    function add(text, displayText) {
      if (seen.has(text)) return;
      seen.add(text);
      list.push({ text, displayText: displayText || text });
    }

    for (const w of WORDS) {
      if (!lower || w.toLowerCase().startsWith(lower)) {
        if (SNIPPETS[w] && w.toLowerCase() === lower) add(SNIPPETS[w], w + " — shablon");
        else if (SNIPPETS[w] && w.startsWith(lower) && lower.length >= 2) add(SNIPPETS[w], w + " — shablon");
        else add(w);
      }
    }

    // Kod ichidagi o'zgaruvchi / funksiya nomlari
    const code = editor.getValue();
    const extras = code.match(/\b[a-zA-Z_][a-zA-Z0-9_]*/g) || [];
    for (const name of extras) {
      if (lower && name.toLowerCase().startsWith(lower) && name !== word) add(name);
    }

    list.sort((a, b) => a.text.localeCompare(b.text));
    return {
      list: list.slice(0, 40),
      from: CodeMirror.Pos(cur.line, start),
      to: CodeMirror.Pos(cur.line, end),
    };
  }

  function mount(textarea, initialValue) {
    destroy();
    if (typeof CodeMirror === "undefined") {
      textarea.value = initialValue || "";
      return null;
    }

    textarea.value = initialValue || "";
    const themeName =
      (typeof window !== "undefined" && window.__cmTheme) ||
      (document.body.classList.contains("theme-dark") ? "material-darker" : "eclipse");
    cm = CodeMirror.fromTextArea(textarea, {
      mode: "python",
      theme: themeName,
      lineNumbers: true,
      lineWrapping: true,
      indentUnit: 4,
      tabSize: 4,
      indentWithTabs: false,
      autofocus: true,
      matchBrackets: true,
      autoCloseBrackets: true,
      styleActiveLine: true,
      extraKeys: {
        Tab: (ed) => {
          if (ed.somethingSelected()) ed.indentSelection("add");
          else ed.replaceSelection("    ", "end");
        },
        "Shift-Tab": (ed) => ed.indentSelection("subtract"),
        "Ctrl-Space": "autocomplete",
        "Ctrl-/": "toggleComment",
        "Cmd-/": "toggleComment",
      },
      hintOptions: {
        hint: pythonHint,
        completeSingle: false,
        alignWithWord: true,
      },
    });

    cm.on("inputRead", (ed, change) => {
      if (change.origin !== "+input") return;
      const ch = change.text[0];
      if (!ch || !/[a-zA-Z_]/.test(ch)) return;
      CodeMirror.commands.autocomplete(ed, null, { completeSingle: false });
    });

    cm.setSize("100%", 260);
    setTimeout(() => cm.refresh(), 30);
    return cm;
  }

  function getValue() {
    if (cm) return cm.getValue();
    const el = document.getElementById("editor");
    return el ? el.value : "";
  }

  function setValue(text) {
    if (cm) {
      cm.setValue(text || "");
      cm.focus();
      return;
    }
    const el = document.getElementById("editor");
    if (el) el.value = text || "";
  }

  function destroy() {
    if (cm) {
      cm.toTextArea();
      cm = null;
    }
  }

  function setTheme(name) {
    window.__cmTheme = name;
    if (cm) {
      cm.setOption("theme", name);
      setTimeout(() => cm.refresh(), 20);
    }
  }

  return { mount, getValue, setValue, destroy, setTheme };
})();
