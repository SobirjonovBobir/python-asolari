# Python asoslari — kurs platformasi

16 dars + mashqlar (Pyodide). **2 rol:** `admin` va `user`. Yangi foydalanuvchini **faqat admin** ochadi.

## Stack

- Frontend: HTML / JS / Pyodide (mavjud kurs)
- Backend: FastAPI
- DB: PostgreSQL
- Deploy: Neon (Postgres) + Render (API + static)

## Lokal ishga tushirish (tez)

Lokalda default **SQLite** (Docker shart emas). Deployda **Postgres (Neon)**.

```bash
copy .env.example .env
python -m pip install -r backend/requirements.txt
set PYTHONPATH=.
uvicorn backend.app.main:app --reload --host 127.0.0.1 --port 8000
```

Yoki `server.bat` ni oching.

Brauzer: http://127.0.0.1:8000/

- Login: `admin` / `Malr1ne`
- Admin: http://127.0.0.1:8000/admin — yangi o‘quvchi ochish
- Kurs: http://127.0.0.1:8000/

### Ixtiyoriy: lokal Postgres (Docker)

```bash
docker compose up -d db
```

`.env` ichida:

```env
DATABASE_URL=postgresql+psycopg://python:python@localhost:5432/python_course
```

## Bepul ochiq URL (hozir — Cloudflare Tunnel)

1. `server.bat` (port 8000) ishlayotgan bo‘lsin
2. `deploy-tunnel.bat` ni oching — terminalda `https://….trycloudflare.com` chiqadi
3. Shu linkni boshqalarga yuboring (kompyuter yoqilgan + tunnel ochiq bo‘lishi kerak)

## Doimiy bepul hosting (Render)

1. Loyihani GitHub ga yuklang
2. [Render Blueprint](https://dashboard.render.com/select-repo?type=blueprint) → repo tanlang (`render.yaml`)
3. Free Web + Free Postgres (30 kun) deploy bo‘ladi
4. Login: `admin` / `Malr1ne` (kerak bo‘lsa .env da almashtiring)

Alternativa: Neon Postgres + Render Web Service — `DATABASE_URL`, `SECRET_KEY`, `ADMIN_*` env.

## API qisqacha

| Method | Path | Kim |
|--------|------|-----|
| POST | `/api/auth/login` | hammaga |
| GET | `/api/auth/me` | login |
| GET/POST | `/api/progress` | login |
| GET/POST | `/api/users` | faqat admin |
| PATCH | `/api/users/{id}/active` | faqat admin |

## Keyin o‘zgartirish

- Yangi dars/mashq: `tools/lessons_*.py` → `python tools/build_data.py` → qayta deploy
- Dizayn: `css/style.css`, `index.html`
- Progress va userlar Postgres da qoladi
