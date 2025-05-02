# StaticVoid Team Management System

## Project Description
A full-stack MERN application for managing the StaticVoid team members, featuring member profiles, academic details, and professional information.

## Features
- Add new team members with details and profile images
- View all team members
- View individual member details
- Responsive and modern UI design

## Technologies Used
- Frontend: React.js
- Backend: Node.js, Express
- Database: MongoDB
- Styling: CSS

## Project Structure
```
staticvoid-team/
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

## Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation Steps
1. Clone the repository
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

## API Documentation
### Endpoints
- `GET /api/members`
  - Returns all team members
  - Response: Array of member objects

- `GET /api/members/:id`
  - Returns specific member details
  - Response: Single member object

- `POST /api/members`
  - Add new team member
  - Accepts multipart/form-data
  - Required fields: name, role, email, profileImage

- `DELETE /api/members/:id`
  - Remove team member
  - Returns success message

## Environment Setup
1. MongoDB connection: `mongodb://localhost:27017/staticvoid-team`
2. Backend port: 5000
3. Frontend port: 3000

## Contributing
Pull requests are welcome. For major changes, please open an issue first.

## License
MIT

## Additional Notes
- Ensure MongoDB is running locally
- Profile images are stored in the `backend/uploads/` directory
