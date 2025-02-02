const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

// Manually specify the collection name as 'instructor' (singular)
const Instructor = mongoose.model('Instructor', instructorSchema, 'instructor');

module.exports = Instructor;
