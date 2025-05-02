import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/AddMemberPage.css';

function AddMemberPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    rollNumber: '',
    email: '',
    year: '',
    degree: '',
    aboutProject: '',
    hobbies: '',
    certificate: '',
    internship: '',
    aim: '',
    image: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      
      // Append text fields
      Object.keys(formData).forEach(key => {
        if (key !== 'image') {
          data.append(key, formData[key]);
        }
      });
      
      // Append image file separately
      if (formData.image) {
        data.append('profileImage', formData.image);
      }

      const response = await axios.post('http://localhost:5000/api/members', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        alert('Team member added successfully!');
        navigate('/view-members');
      }
    } catch (error) {
      console.error('Error adding member:', error);
      alert(error.response?.data?.message || 'Failed to add member. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="add-member-container">
      <h2>Add New Team Member</h2>
      <form onSubmit={handleSubmit} className="add-member-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" required 
            onChange={(e) => setFormData({...formData, name: e.target.value})} />
        </div>

        <div className="form-group">
          <label>Role</label>
          <input 
            type="text" 
            name="role" 
            required 
            onChange={(e) => setFormData({...formData, role: e.target.value})}
          />
        </div>

        <div className="form-group">
          <label>Roll Number</label>
          <input type="text" name="rollNumber" required 
            onChange={(e) => setFormData({...formData, rollNumber: e.target.value})} />
        </div>

        <div className="form-group email">
          <label>SRMIST Email</label>
          <input type="email" name="email" required 
            onChange={(e) => setFormData({...formData, email: e.target.value.toLowerCase()})} />
        </div>

        <div className="form-group">
          <label>Year</label>
          <select name="year" required 
            onChange={(e) => setFormData({...formData, year: e.target.value})}>
            <option value="">Select Year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
            <option value="4">4th Year</option>
          </select>
        </div>

        <div className="form-group">
          <label>Degree</label>
          <input type="text" name="degree" required 
            onChange={(e) => setFormData({...formData, degree: e.target.value})} />
        </div>

        <div className="form-group">
          <label>About Project</label>
          <textarea name="aboutProject" required 
            onChange={(e) => setFormData({...formData, aboutProject: e.target.value})} />
        </div>

        <div className="form-group hobbies">
          <label>Hobbies (comma separated)</label>
          <input type="text" name="hobbies" placeholder="e.g., reading, coding, music" required 
            onChange={(e) => setFormData({...formData, hobbies: e.target.value})} />
        </div>

        <div className="form-group">
          <label>Certificates</label>
          <textarea name="certificate" required 
            onChange={(e) => setFormData({...formData, certificate: e.target.value})} />
        </div>

        <div className="form-group">
          <label>Internship Experience</label>
          <textarea name="internship" required 
            onChange={(e) => setFormData({...formData, internship: e.target.value})} />
        </div>

        <div className="form-group">
          <label>Your Aim</label>
          <textarea name="aim" required 
            onChange={(e) => setFormData({...formData, aim: e.target.value})} />
        </div>

        <div className="file-input-container">
          <label>Professional Photo</label>
          <input type="file" name="image" accept="image/*" required 
            onChange={(e) => setFormData({...formData, image: e.target.files[0]})} />
        </div>

        <button 
          type="submit" 
          className="submit-btn" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Adding...' : 'Add Member'}
        </button>
      </form>
    </div>
  );
}

export default AddMemberPage;
