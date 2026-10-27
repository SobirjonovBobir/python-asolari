# -*- coding: utf-8 -*-
from datetime import datetime
from typing import Literal

from pydantic import BaseModel, Field


class TokenOut(BaseModel):
    access_token: str
    token_type: str = "bearer"
    role: Literal["admin", "user"]
    username: str


class LoginIn(BaseModel):
    username: str = Field(min_length=2, max_length=64)
    password: str = Field(min_length=4, max_length=128)


class UserCreate(BaseModel):
    username: str = Field(min_length=2, max_length=64)
    password: str = Field(min_length=4, max_length=128)
    role: Literal["user"] = "user"


class UserOut(BaseModel):
    id: int
    username: str
    role: str
    is_active: bool
    created_at: datetime
    done_count: int = 0

    model_config = {"from_attributes": True}


class MeOut(BaseModel):
    id: int
    username: str
    role: str


class ProgressMapOut(BaseModel):
    progress: dict[str, bool]


class ProgressSetIn(BaseModel):
    exercise_id: str = Field(min_length=3, max_length=32)
    done: bool = True
