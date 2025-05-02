import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/MemberDetailsPage.css';

function MemberDetailsPage() {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    const fetchMemberDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/members/${id}`);
        setMember(response.data);
      } catch (error) {
        console.error('Error fetching member details:', error);
      }
    };

    fetchMemberDetails();
  }, [id]);

  if (!member) return <div>Loading...</div>;

  return (
    <div className="member-details-container">
      <div className="member-details-header">
        <div className="profile-image-container">
          <img 
            src={`http://localhost:5000/uploads/${member.profileImage}`} 
            alt={member.name} 
          />
        </div>
        <div className="member-basic-info">
          <h2>{member.name}</h2>
          <span className="role-badge">{member.role}</span>
        </div>
      </div>

      <div className="info-section">
        <h3>Contact Information</h3>
        <div className="info-item">
          <span className="info-label">Email</span>
          <span className="info-value">{member.email}</span>
        </div>
      </div>

      <div className="info-section">
        <h3>Professional Details</h3>
        <div className="info-item">
          <span className="info-label">Role</span>
          <span className="info-value">{member.role}</span>
        </div>
        {member.department && (
          <div className="info-item">
            <span className="info-label">Department</span>
            <span className="info-value">{member.department}</span>
          </div>
        )}
      </div>

      <Link to="/view-members" className="back-button">
        ← Back to Members List
      </Link>
    </div>
  );
}

export default MemberDetailsPage;
