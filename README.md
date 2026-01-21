🚀 DevTinder — Developer Networking Platform

DevTinder is a Tinder-inspired developer networking platform that helps developers discover, connect, and collaborate with other developers based on interests, skills, and activity feed.
The platform is built using microservices architecture with a scalable backend and a modern React frontend.

📌 Key Features

👤 Developer Profiles

📰 Personalized Developer Feed

👍 Like / 👎 Pass System

🤝 Connection Requests & Matches

🔐 JWT-based Authentication

🧩 Microservices Architecture

🌐 API Gateway Routing

📊 MongoDB with Mongoose ODM

🧱 System Architecture
Client (React)
     |
API Gateway (Node + Express)
     |
------------------------------------------------
| Auth Service | User Service | Feed Service | Connection Service |
------------------------------------------------
                 |
              MongoDB


Each service has its own business logic and database access layer.

🛠 Tech Stack
Frontend

React.js

Axios

React Router

Tailwind CSS / Material UI

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

REST APIs

DevOps (Optional)

Docker

Docker Compose

Nginx

📁 Project Structure
devtinder/
│
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── routes/
│       └── App.jsx
│
├── backend/
│   ├── gateway-service/
│   ├── auth-service/
│   ├── user-service/
│   ├── feed-service/
│   └── connection-service/
│
├── docker-compose.yml
└── README.md

⚙️ Installation & Setup
🔹 Prerequisites

Node.js (v18+)

MongoDB

Git

🔹 Clone Repository
git clone https://github.com/your-username/devtinder.git
cd devtinder

⚙️ Backend Setup (Microservices)
Step 1: Install Dependencies

For each service:

cd backend/auth-service
npm install


Repeat for all services.

Step 2: Environment Variables

Create .env in each service:

PORT=5001
MONGO_URI=mongodb://localhost:27017/devtinder
JWT_SECRET=devtinder_secret


Gateway Service:

PORT=5000
AUTH_SERVICE_URL=http://localhost:5001
USER_SERVICE_URL=http://localhost:5002
FEED_SERVICE_URL=http://localhost:5003
CONNECTION_SERVICE_URL=http://localhost:5004

Step 3: Start MongoDB
mongod


OR using Docker:

docker run -d -p 27017:27017 mongo

Step 4: Run Services
npm run dev


Run each service in separate terminals:

Service	Port
Gateway	5000
Auth	5001
User	5002
Feed	5003
Connection	5004
