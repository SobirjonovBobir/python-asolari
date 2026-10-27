# -*- coding: utf-8 -*-
from functools import lru_cache
from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict

_ROOT_ENV = Path(__file__).resolve().parents[2] / ".env"


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=str(_ROOT_ENV) if _ROOT_ENV.exists() else ".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )

    # Lokal: sqlite:///./python_course.db  |  Deploy: postgresql://... (Neon)
    database_url: str = "sqlite:///./python_course.db"
    secret_key: str = "dev-change-me-in-production-use-long-random-string"
    access_token_expire_minutes: int = 60 * 24 * 7  # 7 kun
    admin_username: str = "admin"
    admin_password: str = "admin123"
    cors_origins: str = "*"

    def sqlalchemy_url(self) -> str:
        url = self.database_url.strip()
        if url.startswith("postgresql+psycopg2://"):
            return "postgresql+psycopg://" + url[len("postgresql+psycopg2://") :]
        if url.startswith("postgresql://"):
            return "postgresql+psycopg://" + url[len("postgresql://") :]
        if url.startswith("postgres://"):
            return "postgresql+psycopg://" + url[len("postgres://") :]
        return url


@lru_cache
def get_settings() -> Settings:
    return Settings()
