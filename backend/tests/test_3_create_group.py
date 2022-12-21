import json

import requests


def test_create_group():
    url = "http://localhost:4000/api/groups"

    payload = json.dumps({
        "groupName": "New Group Created using Py Functional test 🐍",
        "members": [
            "63a25f332b818fa640a46270",
            "63a31fa0d74991dc655c7891"
        ]
    })
    headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mzk2YTYzZGU5ZjcxMjMyODQyNjFkYTEiLCJpYXQiOjE2NzE2NDk1MDAsImV4cCI6MTY3MTY1MzEwMH0.CmWuqcPCORYYVul-o0lvDCcl4FKUlTfxbKEGjz-q0sI',
        'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    assert response.status_code == 200
    resp_body = response.json()
    assert resp_body['groupName'] == "New Group Created using Py Functional test 🐍"

    print(response.text)
