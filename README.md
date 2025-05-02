# Team StaticVoid - Student Management System

## Project Description
A full-stack MERN application for managing student team members. This application allows adding, viewing, and managing detailed information about team members including their academic and professional details.

## Features
- Add new team members with details and profile images
- View all team members
- View individual member details
- Responsive and modern UI design
- Delete team members
- Upload and manage profile images
- Detailed member profiles with academic and professional information
- Clean and intuitive user interface

## Technologies Used
- Frontend: React.js
- Backend: Node.js, Express
- Database: MongoDB
- Styling: CSS
- File Upload: Multer
- HTTP Client: Axios
- Routing: React Router DOM

## Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/akshita1420/Team-StaticVoid.git
   cd Team-StaticVoid
   ```
2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```
3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```
4. Create uploads directory:
   ```bash
   mkdir -p backend/uploads
   ```

## Running the Application
1. Start the backend server:
   ```
   cd backend
   node server.js
   ```
2. Start the frontend development server:
   ```
   cd frontend
   npm start
   ```
3. Access the application at: http://localhost:3000

## API Endpoints
- `GET /api/members`: Retrieve all team members
- `GET /api/members/:id`: Retrieve a specific team member
- `POST /api/members`: Add a new team member
- `DELETE /api/members/:id`: Delete a team member

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

## Additional Notes
- Ensure MongoDB is running locally
- Profile images are stored in the `backend/uploads/` directory
- All API endpoints are prefixed with `/api`
- Make sure to have write permissions for the uploads directory

## Contributing
Pull requests are welcome. For major changes, please open an issue first.

## License
MIT
