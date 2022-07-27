from fastapi import FastAPI, Request, APIRouter
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

templates = Jinja2Templates(directory="public")
router = APIRouter()


@router.get("/{full_path:path}")
async def read_index(request: Request, full_path: str):
    return templates.TemplateResponse("index.html", {"request": request})
