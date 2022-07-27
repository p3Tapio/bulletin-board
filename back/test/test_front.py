from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_front_served():
    response = client.get('/')
    content = response.content.decode('UTF-8')
    assert '<!DOCTYPE html>' in content
    assert response.status_code == 200
