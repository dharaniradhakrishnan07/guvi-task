const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const instructorRoutes = require('./routes/instructorRoutes');
const learnerRoutes = require('./routes/learnerRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/mentor-student', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// API Routes
app.use('/api/instructor', instructorRoutes);
app.use('/api/learner', learnerRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
