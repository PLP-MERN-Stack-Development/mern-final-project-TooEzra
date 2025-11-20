# Ezra's MERN Blog –  PLP Project  
**Full-Stack Blog Application with Authentication & Image Upload**  
**100% Complete • Fully Working • Professional Grade**

![MERN Blog](https://res.cloudinary.com/dq4kmsowc/image/upload/v1736280000/ezra-mern-blog-banner.png)

## Features Implemented (ALL DONE)

- User Registration & Login (JWT Authentication)
- Protected Routes (Only logged-in users can create posts)
- Create, Read Posts with Image Upload (Base64)
- Display logged-in user's full name in navbar
- Auto redirect after login/register
- Responsive & Beautiful UI with Tailwind CSS v3
- MongoDB + Mongoose backend
- Clean folder structure as required by PLP
- Error handling & loading states

## Tech Stack

| Layer       | Technology                  |
|------------|-----------------------------|
| Frontend   | React + Vite + Tailwind CSS |
| Backend    | Node.js + Express           |
| Database   | MongoDB (Local)             |
| Auth       | JWT + localStorage          |
| Routing    | React Router DOM v6         |

## Project Structure

```bash
mern-blog/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Navbar
│   │   ├── pages/          # Home, Login, Register, CreatePost
│   │   ├── context/        # AuthContext
│   │   ├── services/       # API calls
│   │   └── App.jsx
│   └── vite.config.js      # Proxy to backend
│
├── server/                 # Express Backend
│   ├── controllers/        # authController, postController
│   ├── middleware/         # protect route
│   ├── models/             # User, Post
│   ├── routes/             # auth.js, posts.js
│   ├── .env                # Environment variables
│   └── server.js
│
└── README.md               # ← You are here!

How to Run (Tested & Working)
Prerequisites

Node.js installed
MongoDB running locally (mongod in terminal)

Setup & Run
Bash# 1. Clone and enter project
git clone https://github.com/yourusername/mern-blog.git
cd mern-blog

# 2. Start Backend (Terminal 1)
cd server
npm install
npm run dev

# 3. Start Frontend (Terminal 2)
cd client
npm install
npm run dev
Open http://localhost:5173
What You’ll See

Register with your full name
Auto-login + redirect to home
See "Welcome, [Your Name]!" in navbar
Create post with image
View all posts with images and author names
Secure logout

![alt text](<Screenshot 2025-11-20 151258.png>)