// src/models.js

const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  category: String,
  rating: Number,
  comments: String
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = {
  Feedback
};
