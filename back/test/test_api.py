from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_health_status_route():
    response = client.get('/api/health')
    assert response.status_code == 200
    assert response.json() == {"status": "healthy"}
