import uvicorn
import os
from dotenv import load_dotenv
from config import settings
from fastapi import FastAPI, APIRouter, Depends
from sqlalchemy.orm import Session
from fastapi.staticfiles import StaticFiles
from routers import front
from db import session

app = FastAPI()


def get_db():
    db = Session()
    try:
        yield db
    finally:
        db.close()


health_router = APIRouter()


@health_router.get("/health")
def health_status() -> dict:
    try:
        conn = session.engine.connect()
        conn.close()
        return {"status": "healthy"}
    except:
        return {"status": "unhealthy"}


app.mount("/static", StaticFiles(directory="public/static"), name="static")
app.include_router(health_router, tags=["api"], prefix="/api")
app.include_router(front.router, tags=["front"])


if __name__ == "__main__":
    load_dotenv()
    ENVIRONMENT = os.environ.get("ENVIRONMENT")
    if ENVIRONMENT == 'development':
        uvicorn.run("main:app", host="localhost",
                    port=8081, reload=True, log_level="info")
