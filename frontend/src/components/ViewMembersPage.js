import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/ViewMembersPage.css';

function ViewMembersPage() {
  const [members, setMembers] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/members');
        setMembers(response.data);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };

    fetchMembers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this team member?')) {
      return;
    }

    try {
      const response = await axios.delete(`http://localhost:5000/api/members/${id}`);
      
      if (response.status === 200) {
        setMembers(prevMembers => prevMembers.filter(member => member._id !== id));
        alert('Member deleted successfully!');
      } else {
        throw new Error('Delete operation failed');
      }
    } catch (error) {
      console.error('Delete error:', error.response || error);
      alert(error.response?.data?.message || 'Failed to delete member. Please try again.');
    }
  };

  return (
    <div className="view-members-container">
      <h2>Team Members</h2>
      <div className="members-grid">
        {members.map(member => (
          <div key={member._id} className="member-card">
            <button 
              className="delete-btn"
              onClick={() => handleDelete(member._id)}
              disabled={isDeleting}
            >
              {isDeleting ? '...' : '×'}
            </button>
            {member.profileImage && (
              <img 
                src={`http://localhost:5000/uploads/${member.profileImage}`} 
                alt={member.name} 
                className="member-image"
              />
            )}
            <div className="member-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <Link to={`/member/${member._id}`} className="details-btn">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMembersPage;
