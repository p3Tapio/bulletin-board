from fastapi import APIRouter, Depends, HTTPException
from db.db import get_db
from utils import auth
from db.user_models import User, UserCreate
from utils.auth import create_jwt
router = APIRouter()


@router.post("/register")
async def create_user(user: UserCreate) -> dict:
    db_gen = get_db()
    db = next(db_gen)
    existing_user = db.query(User).filter(
        User.username == user.username).first()

    if existing_user:
        raise HTTPException(status_code=400, detail="Username already in use")

    user = User(
        username=user.username,
        pwd_hash=auth.hash_password(user.password)
    )

    db.add(user)
    db.commit()
    db.refresh(user)
    jtw = create_jwt(user.username)

    return {
        "username": user.username,
        "id": user.id,
        "bulletins": user.bulletins,
        "auth": {
          "access_token": jtw
        }
    }
