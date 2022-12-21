import json

import requests


def test_logout_user():
    url = "http://localhost:4000/api/userLogin/logout"

    payload = json.dumps({
        "phoneNumber": "9876543210"
    })
    headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mzk2YTYzZGU5ZjcxMjMyODQyNjFkYTEiLCJpYXQiOjE2NzE2NDk1MDAsImV4cCI6MTY3MTY1MzEwMH0.CmWuqcPCORYYVul-o0lvDCcl4FKUlTfxbKEGjz-q0sI',
        'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    assert response.status_code == 200
    resp_body = response.json()
    assert resp_body['message'] == "User logged out successfully"

    print(response.text)
