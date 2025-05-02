# Team StaticVoid - Student Management System

## Project Description
A full-stack web application for managing student team members. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this application allows teams to manage their members' information efficiently.

## Features
- Add new team members with detailed information
- Upload profile images
- View all team members in a responsive grid
- View detailed member profiles
- Delete team members
- Responsive design for all devices

## Tech Stack
- Frontend: React.js, React Router, Axios
- Backend: Node.js, Express.js
- Database: MongoDB
- File Upload: Multer
- Styling: Custom CSS

## Prerequisites
- Node.js (v14+)
- MongoDB
- npm/yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/akshita1420/Team-StaticVoid.git
cd Team-StaticVoid
```

2. Install backend dependencies:
```bash
cd backend
npm install
```

3. Install frontend dependencies:
```bash
cd frontend
npm install
```

4. Create uploads directory:
```bash
mkdir -p backend/uploads
```

## Running the Application

1. Start MongoDB service

2. Start backend server:
```bash
cd backend
npm start
```

3. Start frontend development server:
```bash
cd frontend
npm start
```

4. Access the application at: http://localhost:3000

## API Endpoints

### Members
- GET `/api/members` - Get all members
- GET `/api/members/:id` - Get member by ID
- POST `/api/members` - Add new member
- DELETE `/api/members/:id` - Delete member

## Project Structure
```
team-staticvoid/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── styles/
│   │   └── App.js
│   └── package.json
├── backend/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── server.js
└── README.md
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first.

## License
MIT
