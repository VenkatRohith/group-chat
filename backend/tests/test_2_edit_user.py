import json

import requests


def test_edit_user():
    url = "http://localhost:4000/api/users/63a34d66652cdf8ca345eae7"

    payload = json.dumps({
        "firstName": "Captain",
        "lastName": "America"
    })
    headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mzk2YTYzZGU5ZjcxMjMyODQyNjFkYTEiLCJpYXQiOjE2NzE2NDk1MDAsImV4cCI6MTY3MTY1MzEwMH0.CmWuqcPCORYYVul-o0lvDCcl4FKUlTfxbKEGjz-q0sI',
        'Content-Type': 'application/json'
    }

    response = requests.request("PATCH", url, headers=headers, data=payload)

    assert response.status_code == 200
    resp_body = response.json()
    assert resp_body['firstName'] == "Captain"

    print(response.text)
