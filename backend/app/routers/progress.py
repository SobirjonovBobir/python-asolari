# -*- coding: utf-8 -*-
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..auth import get_current_user
from ..database import get_db
from ..models import Progress, User
from ..schemas import ProgressMapOut, ProgressSetIn

router = APIRouter(prefix="/api/progress", tags=["progress"])


@router.get("", response_model=ProgressMapOut)
def get_progress(user: User = Depends(get_current_user), db: Session = Depends(get_db)):
    rows = db.query(Progress).filter(Progress.user_id == user.id, Progress.done.is_(True)).all()
    return ProgressMapOut(progress={r.exercise_id: True for r in rows})


@router.post("", response_model=ProgressMapOut)
def set_progress(
    body: ProgressSetIn,
    user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    row = (
        db.query(Progress)
        .filter(Progress.user_id == user.id, Progress.exercise_id == body.exercise_id)
        .first()
    )
    if row:
        row.done = body.done
    else:
        db.add(Progress(user_id=user.id, exercise_id=body.exercise_id, done=body.done))
    db.commit()
    rows = db.query(Progress).filter(Progress.user_id == user.id, Progress.done.is_(True)).all()
    return ProgressMapOut(progress={r.exercise_id: True for r in rows})
