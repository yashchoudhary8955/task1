// src/components/FeedbackForm.js

import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [category, setCategory] = useState('Product Features');
  const [rating, setRating] = useState(1);
  const [comments, setComments] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/feedback', { category, rating, comments });
      console.log(response.data);
      setSuccess(true);
      // Optionally reset the form fields after successful submission
      setCategory('Product Features');
      setRating(1);
      setComments('');
    } catch (error) {
      console.error('Error submitting feedback:', error.message);
      setError('Error submitting feedback. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Feedback submitted successfully!</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Product Features">Product Features</option>
            <option value="Product Pricing">Product Pricing</option>
            <option value="Product Usability">Product Usability</option>
          </select>
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
          />
        </div>
        <div>
          <label>Comments:</label>
          <textarea value={comments} onChange={(e) => setComments(e.target.value)} />
        </div>
        <button type="submit" disabled={submitting}>Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
