// src/routes.js

const express = require('express');
const { Feedback } = require('./models'); // Ensure correct import

const router = express.Router();

// POST /feedback - Submit feedback
router.post('/', async (req, res) => {
  const { category, rating, comments } = req.body;

  try {
    const newFeedback = new Feedback({
      category,
      rating,
      comments
    });

    await newFeedback.save();

    res.status(201).json(newFeedback); // Return the saved feedback
  } catch (error) {
    console.error('Error saving feedback:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

// GET /feedback/aggregate - Aggregate feedback data
router.get('/aggregate', async (req, res) => {
  try {
    const aggregateData = await Feedback.aggregate([
      // Example aggregation stages
      { $group: { _id: '$category', avgRating: { $avg: '$rating' }, count: { $sum: 1 } } },
    ]);

    res.json(aggregateData);
  } catch (error) {
    console.error('Error fetching aggregate feedback:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = {
  feedbackRouter: router
};
