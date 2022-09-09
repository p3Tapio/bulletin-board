from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Enum, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from pydantic import BaseModel
from pydantic.types import constr
from .db import Base
from .bulletin_models import Bulletin

'''
Apinoi ja korjaa: https://fastapi.tiangolo.com/tutorial/sql-databases/

'''


class UserBase(BaseModel):
    username: constr(min_length=4, max_length=64)


class UserCreate(UserBase):
    password: constr(min_length=5, max_length=64)

    # @validator('username')
    # def unique_username(cls, v):
    #     return v.title()

class User(Base):
    __tablename__ = "Users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    pwd_hash = Column(String, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    bulletins = relationship(
        "Bulletin",
        order_by=Bulletin.created_at,
        back_populates="owner",
        cascade="all, delete"
    )
