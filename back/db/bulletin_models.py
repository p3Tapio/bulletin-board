from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Enum, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .db import Base
from pydantic import BaseModel
import enum

class BulletinBase(BaseModel):
  header: str
  description: str


class Category(enum.Enum):
    FORSALE = 'ForSale'
    HOUSING = 'Housing'
    JOBS = 'Jobs'
    SERVICES = 'Services'


class Bulletin(Base):
    __tablename__ = "Bulletins"

    id = Column(Integer, primary_key=True, index=True)
    header = Column(String, nullable=False)
    description = Column(String, nullable=False)
    category = Column(Enum(Category))
    image_url = Column(String)
    image_name = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now(), index=True)
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
    ownner_id = Column(Integer, ForeignKey("Users.id"))
    owner = relationship('User', back_populates="bulletins")