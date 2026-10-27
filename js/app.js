const KEY = "python-asolari-progress-v3";

const state = {
  lessonId: 1,
  tab: "teach",
  filter: "all",
  exerciseId: null,
  view: "list", // list | work
  showAnswer: false,
  progress: {},
};

function requireAuth() {
  if (!API.token()) {
    location.href = "/login";
    return false;
  }
  return true;
}

function loadProgress() {
  return state.progress || {};
}

function saveProgressLocal(map) {
  state.progress = map;
  try {
    localStorage.setItem(KEY, JSON.stringify(map));
  } catch (_) {}
}

async function saveProgress(map) {
  saveProgressLocal(map);
}

async function syncProgressFromServer() {
  const data = await API.getProgress();
  state.progress = data.progress || {};
  saveProgressLocal(state.progress);
}

function renderUserBar() {
  const el = document.getElementById("user-bar");
  if (!el) return;
  const u = API.user();
  if (!u) {
    el.innerHTML = "";
    return;
  }
  el.innerHTML = `
    <div class="user-bar-inner">
      <span>${esc(u.username)}${u.role === "admin" ? " · admin" : ""}</span>
      <span class="user-bar-links">
        ${u.role === "admin" ? '<a href="/admin">Admin</a>' : ""}
        <button type="button" id="btn-logout">Chiqish</button>
      </span>
    </div>
  `;
  const btn = document.getElementById("btn-logout");
  if (btn) {
    btn.onclick = () => {
      API.clearSession();
      location.href = "/login";
    };
  }
}

function lessonById(id) {
  return COURSE.lessons.find((l) => l.id === id);
}

function allExercises() {
  return COURSE.lessons.flatMap((l) => l.exercises);
}

function renderNav() {
  const nav = document.getElementById("lesson-nav");
  const done = loadProgress();
  nav.innerHTML = COURSE.lessons
    .map((l) => {
      const total = l.exercises.length;
      const ok = l.exercises.filter((e) => done[e.id]).length;
      const active = l.id === state.lessonId ? "active" : "";
      return `<button class="${active}" data-id="${l.id}">
        Dars ${l.id}. ${esc(l.title)}
        <small>${ok}/${total} mashq</small>
      </button>`;
    })
    .join("");
  nav.querySelectorAll("button").forEach((btn) => {
    btn.onclick = () => {
      state.lessonId = Number(btn.dataset.id);
      state.tab = "teach";
      state.exerciseId = null;
      state.view = "list";
      state.showAnswer = false;
      render();
    };
  });
}

function renderProgress() {
  const done = loadProgress();
  const total = allExercises().length;
  const ok = Object.values(done).filter(Boolean).length;
  document.getElementById("progress-text").textContent = `${ok}/${total}`;
  document.getElementById("progress-bar").style.width = `${total ? (ok / total) * 100 : 0}%`;
}

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function setTab(tab) {
  state.tab = tab;
  if (tab !== "practice") {
    state.view = "list";
    state.showAnswer = false;
  }
  document.querySelectorAll("#tabs button").forEach((b) => {
    b.classList.toggle("active", b.dataset.tab === tab);
  });
  document.getElementById("panel-teach").hidden = tab !== "teach";
  document.getElementById("panel-examples").hidden = tab !== "examples";
  document.getElementById("panel-practice").hidden = tab !== "practice";
  document.getElementById("panel-review").hidden = tab !== "review";
}

function renderLesson() {
  const lesson = lessonById(state.lessonId);
  document.getElementById("lesson-title").textContent = `Dars ${lesson.id}. ${lesson.title}`;
  document.getElementById("lesson-sub").textContent = lesson.subtitle;

  document.getElementById("panel-teach").innerHTML = lesson.teach;

  document.getElementById("panel-examples").innerHTML = `
    <div class="card"><h3>Misollar — avval o‘qing, keyin mashqda shu g‘oyani ishlating</h3></div>
    ${lesson.examples
      .map(
        (ex, i) => `
      <article class="card example">
        <div class="cap">Misol ${i + 1}. ${esc(ex.title)}</div>
        <pre class="code">${esc(ex.code)}</pre>
        <p class="why">${esc(ex.why)}</p>
      </article>`
      )
      .join("")}
  `;

  const rows = lesson.review || [];
  document.getElementById("panel-review").innerHTML = `
    <div class="card">
      <h3>Qisqa takrorlash — shu darsda o‘tilganlar</h3>
      <p class="review-lead">Jadvalni ko‘zdan kechiring, keyin mashqlarga o‘ting.</p>
      <table class="method-table review-table">
        <thead>
          <tr><th>#</th><th>Mavzu / buyruq</th><th>Qisqa ma’nosi</th></tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (r, i) => `
            <tr>
              <td>${i + 1}</td>
              <td><code>${esc(r.term)}</code></td>
              <td>${esc(r.meaning)}</td>
            </tr>`
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;

  renderPractice(lesson);
  setTab(state.tab);
}

function labelLevel(level) {
  if (level === "oson") return "oson";
  if (level === "ortacha") return "o‘rtacha";
  return "qiyin";
}

function pyRepr(value) {
  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value === "boolean") return value ? "True" : "False";
  if (value === null) return "None";
  if (Array.isArray(value)) return "[" + value.map(pyRepr).join(", ") + "]";
  return String(value);
}

/** Mashq uchun namuna kod (natija emas — yechim kodi). */
function getAnswer(ex) {
  if (ex.solution && String(ex.solution).trim()) return ex.solution;
  if (ex.hint && /print|def |import |open\(|for |while |if |return |=/.test(ex.hint)) {
    return ex.hint;
  }
  const checks = ex.checks || [];
  const lines = [];
  let onlyNumericStdout = false;
  for (const c of checks) {
    if (c.type === "stdout") {
      const parts = String(c.equals).split("\n");
      onlyNumericStdout = parts.every((p) => /^-?\d+(\.\d+)?$/.test(p));
      // Faqat son chiqishi kerak bo‘lsa — print(2) deb berilmaydi (bu natija, kod emas)
      if (onlyNumericStdout) break;
      for (const p of parts) {
        lines.push(`matn = ${JSON.stringify(p)}\nprint(matn)`);
      }
      break;
    }
    if (c.type === "var") {
      lines.push(`${c.name} = ${pyRepr(c.equals)}`);
    }
    if (c.type === "expr") {
      lines.push(`# Funksiyani yozing, tekshiruv: ${c.code} == ${pyRepr(c.equals)}`);
    }
    if (c.type === "file") {
      lines.push(`with open(${JSON.stringify(c.path)}, "w", encoding="utf-8") as f:`);
      lines.push(`    f.write(${JSON.stringify(c.equals)})`);
    }
  }
  if (lines.length) {
    if (checks.some((c) => c.type === "var")) {
      const names = checks.filter((c) => c.type === "var").map((c) => c.name);
      for (const n of names) lines.push(`print(${n})`);
    }
    return lines.join("\n");
  }
  if (onlyNumericStdout) {
    return (
      "# Bu mashqda faqat javob sonini print qilish yetarli emas.\n" +
      "# Avval o‘zgaruvchiga yozing, hisoblang, keyin print qiling.\n" +
      (ex.hint ? "# Maslahat: " + ex.hint : "# Masalan: daqiqa = 130\\nsoat = daqiqa // 60\\nprint(soat)")
    );
  }
  if (ex.hint) return "# Maslahat:\n# " + ex.hint;
  return "# Bu mashq uchun namuna kod hali yozilmagan.\n# Vazifani o‘qing va o‘zingiz yeching.";
}

function openExercise(id) {
  state.exerciseId = id;
  state.view = "work";
  state.showAnswer = false;
  renderPractice(lessonById(state.lessonId));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function backToList() {
  state.view = "list";
  state.exerciseId = null;
  state.showAnswer = false;
  renderPractice(lessonById(state.lessonId));
}

function renderPractice(lesson) {
  CodeEditor.destroy();
  const done = loadProgress();
  const list = lesson.exercises.filter((e) => state.filter === "all" || e.level === state.filter);
  const panel = document.getElementById("panel-practice");

  if (state.view === "work" && state.exerciseId) {
    const current = lesson.exercises.find((e) => e.id === state.exerciseId);
    if (!current) {
      state.view = "list";
      return renderPractice(lesson);
    }
    const n = lesson.exercises.indexOf(current) + 1;
    const answer = getAnswer(current);
    panel.innerHTML = `
      <div class="work-top">
        <button type="button" class="back-btn" id="btn-back">← Mashqlar ro‘yxati</button>
        <span class="chip ${current.level} ${done[current.id] ? "done" : ""}">${labelLevel(current.level)}</span>
        <span class="work-num">Mashq ${n} / 30</span>
      </div>
      <div class="card workspace focus-work">
        <div class="work-head">
          <h3>${esc(current.title)}</h3>
          <p class="task">${esc(current.task)}</p>
          ${current.hint && current.hint !== answer ? `<p class="hint">Maslahat: ${esc(current.hint)}</p>` : ""}
          ${current.stdin ? `<p class="hint">Dastur kiritishi (input): <code>${esc(current.stdin)}</code></p>` : ""}
        </div>
        <div class="editor-label-row">
          <label class="field-label" for="editor">Sizning kodingiz</label>
          <span class="editor-tips">Taklif: yozing yoki Ctrl+Space · qavs/qo‘shtirnoq avtomatik · Tab = 4 bo‘shliq</span>
        </div>
        <textarea class="editor" id="editor" spellcheck="false"></textarea>
        <div class="actions">
          <button class="primary" id="btn-check">Tekshirish</button>
          <button class="secondary" id="btn-reset">Qayta yozish</button>
          <button class="secondary" id="btn-toggle-answer">${state.showAnswer ? "Javobni yashirish" : "Javobni ko‘rsatish"}</button>
        </div>
        <div class="result" id="result">Natija shu yerda chiqadi.</div>
        <section class="answer-box" id="answer-box" ${state.showAnswer ? "" : "hidden"}>
          <div class="answer-head">
            <h4>Javob</h4>
            <button type="button" class="ghost-sm" id="btn-copy-answer">Javobni kodga olish</button>
          </div>
          <p class="answer-note">Avval o‘zingiz yozib ko‘ring. Qiynalsangiz — shu yerdan o‘qing va tushunib oling.</p>
          <pre class="code answer-code" id="answer-code">${esc(answer)}</pre>
        </section>
      </div>
    `;

    CodeEditor.mount(document.getElementById("editor"), current.starter || "");

    document.getElementById("btn-back").onclick = backToList;
    document.getElementById("btn-reset").onclick = () => {
      CodeEditor.setValue(current.starter || "");
      document.getElementById("result").className = "result";
      document.getElementById("result").textContent = "Natija shu yerda chiqadi.";
    };
    document.getElementById("btn-check").onclick = () => checkCurrent(current);
    document.getElementById("btn-toggle-answer").onclick = () => {
      state.showAnswer = !state.showAnswer;
      const box = document.getElementById("answer-box");
      const btn = document.getElementById("btn-toggle-answer");
      box.hidden = !state.showAnswer;
      btn.textContent = state.showAnswer ? "Javobni yashirish" : "Javobni ko‘rsatish";
    };
    document.getElementById("btn-copy-answer").onclick = () => {
      CodeEditor.setValue(answer);
      state.showAnswer = true;
      const box = document.getElementById("answer-box");
      const btn = document.getElementById("btn-toggle-answer");
      if (box) box.hidden = false;
      if (btn) btn.textContent = "Javobni yashirish";
    };
    return;
  }

  // Ro‘yxat ko‘rinishi
  panel.innerHTML = `
    <div class="filters">
      <button data-f="all" class="${state.filter === "all" ? "active" : ""}">Hammasi (30)</button>
      <button data-f="oson" class="${state.filter === "oson" ? "active" : ""}">Oson (10)</button>
      <button data-f="ortacha" class="${state.filter === "ortacha" ? "active" : ""}">O‘rtacha (10)</button>
      <button data-f="qiyin" class="${state.filter === "qiyin" ? "active" : ""}">Qiyin (10)</button>
    </div>
    <p class="list-hint">Mashqni bosing — faqat shu mashq uchun ishlash oynasi ochiladi.</p>
    <div class="ex-list">
      ${list
        .map((e) => {
          const n = lesson.exercises.indexOf(e) + 1;
          return `<button type="button" class="ex-item" data-ex="${e.id}">
            <span class="num">${n}</span>
            <span class="chip ${e.level} ${done[e.id] ? "done" : ""}">${labelLevel(e.level)}</span>
            <span class="ex-title">${esc(e.title)}${done[e.id] ? " — bajarildi" : ""}</span>
            <span class="ex-go">Ochish →</span>
          </button>`;
        })
        .join("")}
    </div>
  `;

  panel.querySelectorAll(".filters button").forEach((b) => {
    b.onclick = () => {
      state.filter = b.dataset.f;
      renderPractice(lessonById(state.lessonId));
    };
  });
  panel.querySelectorAll(".ex-item").forEach((b) => {
    b.onclick = () => openExercise(b.dataset.ex);
  });
}

async function checkCurrent(exercise) {
  const resultEl = document.getElementById("result");
  const code = CodeEditor.getValue();
  resultEl.className = "result";
  resultEl.textContent = "Tekshirilmoqda...";
  try {
    const out = await PythonRunner.runAndCheck(code, exercise);
    if (out.error) {
      resultEl.className = "result bad";
      resultEl.textContent = "Xato:\n" + out.error + (out.stdout ? "\n\nChiqish:\n" + out.stdout : "");
      return;
    }
    const failed = (out.results || []).filter((r) => !r.ok);
    if (failed.length === 0 && (out.results || []).length) {
      resultEl.className = "result ok";
      resultEl.textContent =
        "To‘g‘ri. Dars yuzasidan shu mashq yopildi.\n\nDastur chiqishi:\n" + (out.stdout || "(bo‘sh)");
      const map = { ...loadProgress(), [exercise.id]: true };
      saveProgressLocal(map);
      try {
        const data = await API.setProgress(exercise.id, true);
        state.progress = data.progress || map;
        saveProgressLocal(state.progress);
      } catch (_) {
        // offline/local — lokal progress saqlanadi
      }
      renderNav();
      renderProgress();
    } else if (!(out.results || []).length) {
      resultEl.className = "result";
      resultEl.textContent = "Chiqish:\n" + (out.stdout || "(bo‘sh)");
    } else {
      resultEl.className = "result bad";
      resultEl.textContent =
        failed.map((f) => f.msg).join("\n\n") + "\n\nDastur chiqishi:\n" + (out.stdout || "(bo‘sh)");
    }
  } catch (err) {
    resultEl.className = "result bad";
    resultEl.textContent = "Tekshiruv ishlamadi: " + err.message;
  }
}

function render() {
  renderNav();
  renderProgress();
  renderLesson();
}

document.getElementById("tabs").onclick = (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;
  setTab(btn.dataset.tab);
};

async function boot() {
  if (!requireAuth()) return;
  const st = document.getElementById("py-status");
  renderUserBar();
  try {
    await API.me();
    await syncProgressFromServer();
  } catch (err) {
    if (err.status === 401 || err.status === 403) {
      API.clearSession();
      location.href = "/login";
      return;
    }
    // Server yo‘q — lokal progress
    try {
      state.progress = JSON.parse(localStorage.getItem(KEY) || "{}");
    } catch (_) {
      state.progress = {};
    }
  }
  render();
  try {
    await PythonRunner.load();
    st.textContent = "Python tayyor — mashqlarni tekshirishingiz mumkin";
    st.className = "py-status ok";
  } catch (err) {
    st.textContent = "Python yuklanmadi. Internetni yoqing yoki server orqali oching.";
    st.className = "py-status err";
  }
}

boot();
