import json

import requests


def test_send_message():
    url = "http://localhost:4000/api/messages"
    payload = json.dumps({
        "messageDesc": "Message from Py testing 🧪",
        "groupId": "63a31fd5d74991dc655c7896"
    })
    headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mzk2YTYzZGU5ZjcxMjMyODQyNjFkYTEiLCJpYXQiOjE2NzE2NDk1MDAsImV4cCI6MTY3MTY1MzEwMH0.CmWuqcPCORYYVul-o0lvDCcl4FKUlTfxbKEGjz-q0sI',
        'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)
    assert response.status_code == 201

    print(response.text)
