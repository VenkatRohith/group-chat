# Group Chat

Simple application which provides web services to facilitate group chat and manage data

## Tech Stack

- Backend - Express, NodeJS
- Database - MongoDB

## Project Details

- Admin APIs (only admin can add users)
  - Manage Users (create user, edit user)

- Any User (normal user, admin user)
  - Authentication APIs (login, logout)

- Groups (Normal User)
  - Manage groups (create, delete, search and add members, etc). All users are visible to all users.

- Group Messages (Normal User)
  - Send messages in group
  - Likes message, etc

## Project setup

- Prerequisite - Should have **mongodb community server** and **node installed**
- Clone the branch or Download the zip from github and open in **VSCode**
- There will be two folders frontend & backend
- For backend server
  - Add a new terminal or split terminal
  - Change current directory to **backend** (`cd .\backend\` or `cd backend`)
  - Please ensure `mongod` service is up and running
  - create a file and name it **.env**. Add the below env variables

    ```text
      # any port which is not occupied
      PORT=4000

      # MongoDB Coneection String
      DB_CONN_STRING=mongodb://127.0.0.1:27017

      # Database name where all the documents are stored
      DB_NAME=group-chat

      # Frontend server URL for cors policy
      CLIENT_INSTANCE_URL=http://localhost:3000

      # To generate a JWT token (recommend generating some strong long
      # password using a generator and assign it here)
      SECRET=

      # Token expiry in hours
      TOKEN_EXPIRY_IN_HOURS=1
    ```

  - `npm i` - installing dependant modules
  - `npm start` - starting the backend server
- For frontend server
  - Change current directory to **frontend** (`cd .\frontend\` or `cd frontend`)
  - `npm i` - installing dependant modules
  - `npm start` - starting the frontend server
- For functional testing
  - prerequisite is to have **python3**
  - Once python3 is installed, need to install requests & pytest library if not installed
  - `pip3 install -U requests pytest pytest-html`
