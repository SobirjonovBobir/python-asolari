const API = (() => {
  const TOKEN_KEY = "python-course-token";
  const USER_KEY = "python-course-user";

  function base() {
    // Bir xil origin (FastAPI static) yoki localda alohida :8000
    if (location.port === "8080" || location.protocol === "file:") {
      return "http://127.0.0.1:8000";
    }
    return "";
  }

  function token() {
    return localStorage.getItem(TOKEN_KEY) || "";
  }

  function user() {
    try {
      return JSON.parse(localStorage.getItem(USER_KEY) || "null");
    } catch {
      return null;
    }
  }

  function setSession(data) {
    localStorage.setItem(TOKEN_KEY, data.access_token);
    localStorage.setItem(
      USER_KEY,
      JSON.stringify({ username: data.username, role: data.role })
    );
  }

  function clearSession() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  async function request(path, options = {}) {
    const headers = Object.assign({ "Content-Type": "application/json" }, options.headers || {});
    const t = token();
    if (t) headers.Authorization = "Bearer " + t;
    const res = await fetch(base() + path, Object.assign({}, options, { headers }));
    let body = null;
    const text = await res.text();
    try {
      body = text ? JSON.parse(text) : null;
    } catch {
      body = { detail: text };
    }
    if (!res.ok) {
      const msg = (body && (body.detail || body.message)) || res.statusText;
      const err = new Error(typeof msg === "string" ? msg : JSON.stringify(msg));
      err.status = res.status;
      throw err;
    }
    return body;
  }

  return {
    base,
    token,
    user,
    setSession,
    clearSession,
    login: (username, password) =>
      request("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      }),
    me: () => request("/api/auth/me"),
    getProgress: () => request("/api/progress"),
    setProgress: (exercise_id, done = true) =>
      request("/api/progress", {
        method: "POST",
        body: JSON.stringify({ exercise_id, done }),
      }),
    listUsers: () => request("/api/users"),
    createUser: (username, password) =>
      request("/api/users", {
        method: "POST",
        body: JSON.stringify({ username, password, role: "user" }),
      }),
    setActive: (id, active) =>
      request("/api/users/" + id + "/active?active=" + (active ? "true" : "false"), {
        method: "PATCH",
      }),
  };
})();
