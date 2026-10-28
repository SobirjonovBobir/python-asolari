# -*- coding: utf-8 -*-
"""O'rgatish <pre class=\"code\"> bloklaridan keyin Natija: qo'shadi (blok ichida)."""
from __future__ import annotations

import html
import io
import os
import re
import threading
from contextlib import redirect_stdout
from pathlib import Path
from tempfile import TemporaryDirectory

PRE_RE = re.compile(r"<pre class=\"code\">(.*?)</pre>", re.DOTALL)
# Eski formatlarni tozalash
WRAP_RE = re.compile(
    r'<div class="code-wrap">\s*<pre class="code">(.*?)</pre>\s*'
    r'<div class="code-out">.*?</div>\s*</div>',
    re.DOTALL,
)
OUT_AFTER_PRE_RE = re.compile(
    r"(</pre>)\s*<div class=\"code-out\">.*?</div>",
    re.DOTALL,
)

RUN_TIMEOUT_SEC = 1.2


def _fake_input_for(code: str):
    if re.search(r"while\s+True|while\s+1\b", code):
        if re.search(r"\bint\s*\(\s*input", code):
            seq = iter(["3", "5", "0"])
        else:
            seq = iter(["Ali", "stop", ""])

        def fake(*_a, **_k):
            try:
                return next(seq)
            except StopIteration:
                return "0" if re.search(r"\bint\s*\(\s*input", code) else ""

        return fake

    if re.search(r"\bint\s*\(\s*input\s*\(", code) or re.search(
        r"\bfloat\s*\(\s*input\s*\(", code
    ):
        vals = iter(["5", "3", "2", "1"])

        def fake_num(*_a, **_k):
            try:
                return next(vals)
            except StopIteration:
                return "1"

        return fake_num

    texts = iter(["Ali", "test", "ok"])

    def fake_text(*_a, **_k):
        try:
            return next(texts)
        except StopIteration:
            return "Ali"

    return fake_text


def _exec_code(code: str, g: dict, buf: io.StringIO) -> None:
    with TemporaryDirectory() as tmp:
        old = Path.cwd()
        try:
            os.chdir(tmp)
            with redirect_stdout(buf):
                exec(compile(code, "<teach>", "exec"), g, g)
        finally:
            os.chdir(old)


def _run_snippet(code: str) -> str | None:
    code = html.unescape(code).strip()
    if not code:
        return None
    if not re.search(r"\bprint\s*\(", code):
        return None
    lines = [
        ln
        for ln in code.splitlines()
        if ln.strip() and not ln.strip().startswith("#")
    ]
    if not lines:
        return None

    buf = io.StringIO()
    g: dict = {
        "__name__": "__main__",
        "input": _fake_input_for(code),
    }
    err: list = []

    def runner() -> None:
        try:
            _exec_code(code, g, buf)
        except SystemExit:
            pass
        except Exception as ex:
            err.append(ex)

    t = threading.Thread(target=runner, daemon=True)
    t.start()
    t.join(timeout=RUN_TIMEOUT_SEC)
    if t.is_alive():
        return None
    if err:
        return None

    out = buf.getvalue()
    if out == "" and re.search(r"print\s*\(\s*\)", code):
        return "\n"
    if out == "":
        return None
    return out


def _format_out(text: str) -> str:
    if text.endswith("\n") and text.count("\n") == 1:
        text = text[:-1]
    esc = html.escape(text, quote=False)
    if "\n" in text:
        return (
            '<div class="code-out">'
            '<div class="code-out-label">Natija</div>'
            f'<pre class="code-out-pre">{esc}</pre>'
            "</div>"
        )
    return (
        '<div class="code-out">'
        '<div class="code-out-label">Natija</div>'
        f'<code class="code-out-val">{esc}</code>'
        "</div>"
    )


def _strip_old_outputs(teach: str) -> str:
    teach = WRAP_RE.sub(r'<pre class="code">\1</pre>', teach)
    teach = OUT_AFTER_PRE_RE.sub(r"\1", teach)
    return teach


def annotate_teach_html(teach: str) -> str:
    if not teach:
        return teach
    teach = _strip_old_outputs(teach)

    parts: list[str] = []
    last = 0
    for m in PRE_RE.finditer(teach):
        parts.append(teach[last : m.start()])
        code_html = m.group(1)
        result = _run_snippet(code_html)
        if result is not None:
            parts.append(
                '<div class="code-wrap">'
                f'<pre class="code">{code_html}</pre>'
                f"{_format_out(result)}"
                "</div>"
            )
        else:
            parts.append(m.group(0))
        last = m.end()
    parts.append(teach[last:])
    return "".join(parts)


def annotate_lessons(lessons: list) -> list:
    for L in lessons:
        if L.get("teach"):
            L["teach"] = annotate_teach_html(L["teach"])
    return lessons
