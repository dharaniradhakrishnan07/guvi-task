const express = require('express');
const Learner = require('../schemas/Learner');  // Updated import path
const Instructor = require('../schemas/Instructor');  // Updated import path
const router = express.Router();

// Create a learner
router.post('/create', async (req, res) => {
  try {
    const { name, email } = req.body;
    const learner = new Learner({ name, email });
    await learner.save();
    res.status(201).json(learner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Assign a learner to an instructor
router.post('/assign', async (req, res) => {
  try {
    const { learnerId, instructorId } = req.body;
    const learner = await Learner.findById(learnerId);
    const instructor = await Instructor.findById(instructorId);

    if (!learner || !instructor) {
      return res.status(404).json({ message: 'Learner or Instructor not found' });
    }

    learner.instructor = instructor._id;
    await learner.save();

    res.status(200).json(learner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Assign or Change Instructor for a learner
router.post('/change-instructor', async (req, res) => {
  try {
    const { learnerId, instructorId } = req.body;
    const learner = await Learner.findById(learnerId);
    const instructor = await Instructor.findById(instructorId);

    if (!learner || !instructor) {
      return res.status(404).json({ message: 'Learner or Instructor not found' });
    }

    learner.instructor = instructor._id;
    await learner.save();

    res.status(200).json(learner);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all learners for a particular instructor
router.get('/instructor/:instructorId/learners', async (req, res) => {
  try {
    const instructorId = req.params.instructorId;
    const learners = await Learner.find({ instructor: instructorId });
    res.status(200).json(learners);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get the previously assigned instructor for a learner
router.get('/learner/:learnerId/instructor', async (req, res) => {
  try {
    const learnerId = req.params.learnerId;
    const learner = await Learner.findById(learnerId).populate('instructor');
    if (!learner || !learner.instructor) {
      return res.status(404).json({ message: 'No instructor assigned to this learner' });
    }
    res.status(200).json(learner.instructor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
