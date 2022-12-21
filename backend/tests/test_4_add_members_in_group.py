import requests


def test_add_members_in_group():

    url = "http://localhost:4000/api/groups/63a31fd5d74991dc655c7896/63a25f332b818fa640a46270"

    payload = {}
    headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2Mzk2YTYzZGU5ZjcxMjMyODQyNjFkYTEiLCJpYXQiOjE2NzE2NDk1MDAsImV4cCI6MTY3MTY1MzEwMH0.CmWuqcPCORYYVul-o0lvDCcl4FKUlTfxbKEGjz-q0sI'
    }

    response = requests.request("PATCH", url, headers=headers, data=payload)

    assert response.status_code == 200
    resp_body = response.json()
    assert resp_body['userName'] == "Gray"
    assert resp_body['groupName'] == "New Test Group🤩"

    print(response.text)
