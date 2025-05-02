import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="home-container">
      <header>
        <h1>Team StaticVoid</h1>
        <h2>Student Team Management</h2>
      </header>
      <main>
        <p>Welcome to our Student Team Management Application!</p>
        <div className="home-buttons">
          <Link to="/add-member" className="btn">Add Member</Link>
          <Link to="/view-members" className="btn">View Members</Link>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
