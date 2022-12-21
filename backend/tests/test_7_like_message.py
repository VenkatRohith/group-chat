import requests


def test_like_message():
    url = "http://localhost:4000/api/messages/63a3279dd74991dc655c78b2"

    payload = {}
    headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mzk2YTYzZGU5ZjcxMjMyODQyNjFkYTEiLCJpYXQiOjE2NzE2NDk1MDAsImV4cCI6MTY3MTY1MzEwMH0.CmWuqcPCORYYVul-o0lvDCcl4FKUlTfxbKEGjz-q0sI'
    }

    response = requests.request("PATCH", url, headers=headers, data=payload)

    assert response.status_code == 201

    print(response.text)
