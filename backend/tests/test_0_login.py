import json

import requests


def test_login_user():
    url = "http://localhost:4000/api/userLogin/login"

    payload = json.dumps({
        "phoneNumber": "9876543210",
        "password": "Test@1234"
    })
    headers = {
        'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    assert response.status_code == 200
    resp_body = response.json()
    assert resp_body['token'] != ""
    assert resp_body['message'] == "User logged in successfully"

    print(response.text)
