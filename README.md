# 🚀 Task Manager API

A **full stack Task Manager** built with:

- **Backend:** Node.js, Express, MongoDB, Mongoose  

- **Frontend:** React + Tailwind CSS

- **Features:** Add, update, delete, and mark tasks as complete ✅

# 🚀 Project Structure

      task-manager-app/
      │
      ├── backend/       # Express + MongoDB API
      ├── frontend/      # React + Tailwind UI
      └── README.md

# ⚙️ Backend Setup

      1. Navigate to the backend folder: cd backend

[![Node.js](https://img.shields.io/badge/Node.js-v18-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-blue)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

A simple **Task Manager backend API** built with **Node.js and Express**.

This project demonstrates **basic CRUD operations** (Create, Read, Update, Delete) for tasks. Currently, tasks are stored in-memory (array) — future updates will include database integration and frontend.

## ✅ Features (Implemented)

- GET `/tasks` → Retrieve all tasks
- POST `/tasks` → Add a new task
- PUT `/tasks/:id` → Update a task by ID
- DELETE `/tasks/:id` → Delete a task by ID

## 💻 Installation

1. Clone the repo:

      git clone https://github.com/auzahm/task-manager-app.git

2. Navigate into the project folder

      cd task-manager-app

3. Install dependencies

      npm install

4. Start the server:
   
      node server.js

      The server will run at: http://localhost:3000

## 🚀 Usage Examples

1. GET all tasks
GET http://localhost:3000/tasks

2. POST a new task
POST http://localhost:3000/tasks

    Body (JSON): {"title": "Finish Node.js API"}

4. PUT update a task
PUT http://localhost:3000/tasks/1

    Body (JSON): {"title": "Updated Task", "completed": true}

6. DELETE a task
DELETE http://localhost:3000/tasks/1

## 🌟 Future Work

1. Connect to MongoDB/Postgres for persistent storage
2. Add React frontend for a full-stack experience
3. Deploy to AWS or Heroku

## 👤 Author
**Auzah Mansoor**

Web & Cloud Developer | GitHub: [auzahm](https://github.com/auzahm)







