# -*- coding: utf-8 -*-
from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from .auth import hash_password
from .config import get_settings
from .database import Base, SessionLocal, engine
from .models import User
from .routers import auth_routes, progress, users

settings = get_settings()
ROOT = Path(__file__).resolve().parents[2]

app = FastAPI(title="Python kursi API", version="1.0.0")

origins = [o.strip() for o in settings.cors_origins.split(",") if o.strip()]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins if origins != ["*"] else ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_routes.router)
app.include_router(users.router)
app.include_router(progress.router)


def seed_admin() -> None:
    db = SessionLocal()
    try:
        existing = db.query(User).filter(User.username == settings.admin_username).first()
        if existing:
            # .env dagi parol o‘zgarsa — admin parolini yangilash
            existing.password_hash = hash_password(settings.admin_password)
            existing.is_active = True
            existing.role = "admin"
            db.commit()
            return
        db.add(
            User(
                username=settings.admin_username,
                password_hash=hash_password(settings.admin_password),
                role="admin",
                is_active=True,
            )
        )
        db.commit()
        print(f"Admin yaratildi: {settings.admin_username}")
    finally:
        db.close()


@app.on_event("startup")
def on_startup() -> None:
    Base.metadata.create_all(bind=engine)
    seed_admin()


@app.get("/api/health")
def health():
    return {"ok": True}


# Statik sayt (Render da bitta servis)
if (ROOT / "index.html").exists():
    app.mount("/css", StaticFiles(directory=str(ROOT / "css")), name="css")
    app.mount("/js", StaticFiles(directory=str(ROOT / "js")), name="js")

    @app.get("/")
    def index():
        return FileResponse(ROOT / "index.html")

    @app.get("/admin")
    def admin_page():
        return FileResponse(ROOT / "admin.html")

    @app.get("/login")
    def login_page():
        return FileResponse(ROOT / "login.html")
