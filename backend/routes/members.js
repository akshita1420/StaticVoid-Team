const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const TeamMember = require('../models/TeamMember');

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// POST: Add a new team member
router.post('/members', upload.single('profileImage'), async (req, res) => {
  try {
    const { name, role, email, additionalDetails } = req.body;
    const profileImage = req.file ? req.file.filename : '';

    const newMember = new TeamMember({
      name,
      role,
      email,
      profileImage,
      additionalDetails
    });

    await newMember.save();
    res.status(201).json(newMember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET: Retrieve all team members
router.get('/members', async (req, res) => {
  try {
    const members = await TeamMember.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET: Retrieve a specific team member by ID
router.get('/members/:id', async (req, res) => {
  try {
    const member = await TeamMember.findById(req.params.id);
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }
    res.json(member);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE: Remove a team member by ID
router.delete('/members/:id', async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: 'Member ID is required' });
    }

    const deletedMember = await TeamMember.findByIdAndDelete(id);
    if (!deletedMember) {
      return res.status(404).json({ message: 'Member not found' });
    }

    // Delete the profile image if it exists
    if (deletedMember.profileImage) {
      const fs = require('fs');
      const imagePath = path.join(__dirname, '..', 'uploads', deletedMember.profileImage);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    res.status(200).json({ 
      message: 'Member deleted successfully',
      deletedMember 
    });
  } catch (error) {
    console.error('Delete error:', error);
    res.status(500).json({ 
      message: 'Error deleting member', 
      error: error.message 
    });
  }
});

module.exports = router;
