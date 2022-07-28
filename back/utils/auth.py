import os
from datetime import datetime, timedelta
from passlib.context import CryptContext
from typing import Union, Any
from jose import jwt

pwd_context = CryptContext(schemes=["bcrypt"])


def hash_password(password: str) -> str:
    return pwd_context.hash(password)


def verify_password(password: str, hashed: str) -> bool:
    return pwd_context.verify(password, hashed)


REFRESH_TOKEN_EXPIRES = 60 * 24 * 7
ALGORITH = os.environ['ALGORITHM']
JWT_SECRET = os.environ['JWT_SECRET']
JWT_REFRESH = os.environ['JWT_REFRESH']


def create_jwt(subject: str) -> str:
    expire = datetime.utcnow() + timedelta(minutes=30)
    for_encode = {"type": "access_token", "exp": expire,
              "iat": datetime.utcnow(), "sub": subject}
    return jwt.encode(for_encode, JWT_SECRET, ALGORITH)

