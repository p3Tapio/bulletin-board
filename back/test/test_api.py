from fastapi.testclient import TestClient
from app.api import app

client = TestClient(app)


def test_health_route():
    response = client.get('/health/')
    assert response.status_code == 200
    assert response.json() == {"status": "healthy"}
