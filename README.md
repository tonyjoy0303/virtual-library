# Virtual Library Management System

A full-stack application for managing a virtual library with React frontend and Node.js backend.

## Project Structure

```
virtual-library-management/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── config/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── utils/
│   └── package.json
└── README.md
```

## Setup Instructions

### Backend Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a .env file in the root directory with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/virtual_library
   PORT=5000
   JWT_SECRET=your_jwt_secret_key_here
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

## Features

- User authentication and authorization
- Book management (add, edit, delete, search)
- Category management
- User profile management
- Book borrowing and return system
- Admin dashboard
- Search and filter functionality

## Technologies Used

- Frontend: React.js, Material-UI
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT 