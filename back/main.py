import uvicorn
import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from routers import front, api

app = FastAPI()

app.mount("/static", StaticFiles(directory="public/static"), name="static")

app.include_router(api.router, tags=["api"], prefix="/api")
app.include_router(front.router, tags=["front"])

if __name__ == "__main__":
    load_dotenv()
    ENVIRONMENT = os.environ.get("ENVIRONMENT")
    if ENVIRONMENT == 'development':
        uvicorn.run("main:app", host="0.0.0.0",
                    port=8081, reload=True, log_level="info")
