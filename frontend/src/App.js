import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddMemberPage from './components/AddMemberPage';
import ViewMembersPage from './components/ViewMembersPage';
import MemberDetailsPage from './components/MemberDetailsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-member" element={<AddMemberPage />} />
          <Route path="/view-members" element={<ViewMembersPage />} />
          <Route path="/member/:id" element={<MemberDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
