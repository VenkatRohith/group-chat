# Group-Chat

Simple project for learning MERN stack with JWT authentication

## Tech Stack

- Frontend - **R**eact, Redux, CSS
- Backend - **E**xpress, **N**odeJS
- Database - **M**ongoDB

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
- Clone or Download the zip from github and open in **VSCode**
- There will be two folders frontend & backend
- For backend server
  - Add a new terminal or split terminal
  - Change current directory to **backend** (`cd .\backend\` or `cd backend`)
  - Please ensure `mongod` service is up and running
  - `npm i` - installing dependant modules
  - `npm run dev` - starting the backend server
- For frontend server
  - Change current directory to **frontend** (`cd .\frontend\` or `cd frontend`)
  - `npm i` - installing dependant modules
  - `npm start` - starting the frontend server
