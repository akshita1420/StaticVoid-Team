const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  rollNumber: { type: String, required: true },
  email: { type: String, required: true },
  year: { type: String, required: true },
  degree: { type: String, required: true },
  aboutProject: { type: String, required: true },
  hobbies: { type: String, required: true },
  certificate: { type: String, required: true },
  internship: { type: String, required: true },
  aim: { type: String, required: true },
  profileImage: { type: String }
});

module.exports = mongoose.model('TeamMember', teamMemberSchema);
