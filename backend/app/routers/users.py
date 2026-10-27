# -*- coding: utf-8 -*-
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy import func
from sqlalchemy.orm import Session

from ..auth import hash_password, require_admin
from ..database import get_db
from ..models import Progress, User
from ..schemas import UserCreate, UserOut

router = APIRouter(prefix="/api/users", tags=["users"])


@router.get("", response_model=list[UserOut])
def list_users(_: User = Depends(require_admin), db: Session = Depends(get_db)):
    rows = (
        db.query(User, func.count(Progress.id))
        .outerjoin(Progress, (Progress.user_id == User.id) & (Progress.done.is_(True)))
        .group_by(User.id)
        .order_by(User.id.asc())
        .all()
    )
    out = []
    for user, done_count in rows:
        out.append(
            UserOut(
                id=user.id,
                username=user.username,
                role=user.role,
                is_active=user.is_active,
                created_at=user.created_at,
                done_count=int(done_count or 0),
            )
        )
    return out


@router.post("", response_model=UserOut, status_code=status.HTTP_201_CREATED)
def create_user(body: UserCreate, _: User = Depends(require_admin), db: Session = Depends(get_db)):
    username = body.username.strip()
    if db.query(User).filter(User.username == username).first():
        raise HTTPException(status_code=400, detail="Bu login band")
    if body.role != "user":
        raise HTTPException(status_code=400, detail="Faqat oddiy foydalanuvchi ochiladi")
    user = User(
        username=username,
        password_hash=hash_password(body.password),
        role="user",
        is_active=True,
    )
    db.add(user)
    db.commit()
    db.refresh(user)
    return UserOut(
        id=user.id,
        username=user.username,
        role=user.role,
        is_active=user.is_active,
        created_at=user.created_at,
        done_count=0,
    )


@router.patch("/{user_id}/active", response_model=UserOut)
def set_active(
    user_id: int,
    active: bool = Query(...),
    admin: User = Depends(require_admin),
    db: Session = Depends(get_db),
):
    user = db.get(User, user_id)
    if not user:
        raise HTTPException(status_code=404, detail="Topilmadi")
    if user.id == admin.id:
        raise HTTPException(status_code=400, detail="O‘zingizni o‘chira olmaysiz")
    if user.role == "admin":
        raise HTTPException(status_code=400, detail="Adminni o‘chirish mumkin emas")
    user.is_active = active
    db.commit()
    db.refresh(user)
    done = db.query(func.count(Progress.id)).filter(Progress.user_id == user.id, Progress.done.is_(True)).scalar()
    return UserOut(
        id=user.id,
        username=user.username,
        role=user.role,
        is_active=user.is_active,
        created_at=user.created_at,
        done_count=int(done or 0),
    )
