const express = require('express');
const Instructor = require('../schemas/Instructor');  // Updated import path
const router = express.Router();

// Create an instructor
router.post('/create', async (req, res) => {
  try {
    const { name, email } = req.body;
    const instructor = new Instructor({ name, email });
    await instructor.save();
    res.status(201).json(instructor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
