from main import app


@app.get("/health", tags=["health"])
async def read_root() -> dict:
    return {"status": "healthy"}
