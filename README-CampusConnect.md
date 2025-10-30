📝 CampusConnect Blog Application
🔹 Project Overview

CampusConnect is a MERN stack blog application designed for university students to share posts, browse content by categories, and engage with other users through comments.
The application demonstrates full-stack integration, including a React front-end, Express.js/Node.js back-end, MongoDB database, and JWT-based authentication.

Key Features:

Create, edit, and delete posts

Categorize posts for easier browsing

Comment on posts and engage with the community

User authentication (register/login) with protected routes

Responsive design with a clean and modern UI

🛠️ Technologies Used

Front-end: React.js, React Router, Tailwind CSS, Axios

Back-end: Node.js, Express.js

Database: MongoDB with Mongoose

Authentication: JWT (JSON Web Token)

Other Tools: Vite, Nodemailer for email verification

📸 Screenshots

Home Page


Post List View


Single Post View


Create/Edit Post Form


Categories View


User Profile


(Replace with your actual screenshots in the screenshots folder.)

🗂️ Project Structure
/client
  /src
    /components
    /pages
    App.jsx
    main.jsx
/server
  /models
  /routes
  /middleware
  server.js
.env

⚙️ Setup Instructions
Prerequisites

Node.js v18+

MongoDB installed locally or a MongoDB Atlas account

Steps

Clone the repository:

git clone <your-repo-url>


Server setup:

cd server
npm install


Create .env file based on .env.example:

MONGO_URI=<your-mongo-uri>
PORT=5000
JWT_SECRET=<your-secret>
EMAIL_USER=<your-gmail>
EMAIL_PASS=<your-gmail-password>
CLIENT_URL=http://localhost:5173


Start the server:

npm run dev


Client setup:

cd client
npm install
npm run dev


Visit the front-end at http://localhost:5173 (or the port Vite provides)

📡 API Endpoints
Posts
Method	Endpoint	Description
GET	/api/posts	Get all posts
GET	/api/posts/:id	Get a single post by ID
POST	/api/posts	Create a new post (protected)
PUT	/api/posts/:id	Update a post by ID (protected)
DELETE	/api/posts/:id	Delete a post by ID (protected)
Categories
Method	Endpoint	Description
GET	/api/categories	Get all categories
POST	/api/categories	Create a new category (protected)
Users / Auth
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login existing user
GET	/api/profile	Get authenticated user profile (protected)

Sample API request:

GET /api/posts
Authorization: Bearer <token>


Sample Response:

[
  {
    "id": "6501a2c4b1234",
    "title": "My First Post",
    "content": "This is the content of my first post.",
    "author": "John Doe",
    "date": "2025-10-30",
    "comments": []
  }
]

🎨 Front-End Features

Two-column post list with responsive layout

Individual post view with comments

Post form for creating/editing posts

Categories with search and filter

Sidebar navigation

Home page with website description and styled text

Responsive design with Tailwind CSS

🔐 Authentication

JWT-based login and registration

Protected routes for creating/editing posts

Email verification via Nodemailer

✅ Deliverables Met

Full MERN stack integration

CRUD functionality for posts and categories

User authentication with protected routes

Responsive UI and clean layout

API documentation included

Screenshots