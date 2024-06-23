// src/components/FeedbackDisplay.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackDisplay = () => {
  const [aggregateData, setAggregateData] = useState([]);

  useEffect(() => {
    const fetchAggregateData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/feedback/aggregate');
        setAggregateData(response.data);
      } catch (error) {
        console.error('Error fetching aggregate data:', error.message);
      }
    };

    fetchAggregateData();
  }, []);

  return (
    <div>
      <h2>Feedback Aggregate Data</h2>
      <ul>
        {aggregateData.map((item) => (
          <li key={item._id}>
            Category: {item._id}, Avg Rating: {item.avgRating.toFixed(2)}, Count: {item.count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackDisplay;
