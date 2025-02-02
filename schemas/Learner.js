const mongoose = require('mongoose');

const learnerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor', default: null },
});

// Manually specify the collection name as 'learner' (singular)
const Learner = mongoose.model('Learner', learnerSchema, 'learner');

module.exports = Learner;
