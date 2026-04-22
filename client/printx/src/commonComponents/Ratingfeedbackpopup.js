import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import Rating from './Ratting'; // Import the Rating component
import API_BASE_URL from '../apiConfig';
const RatingPopup = ({ open, onClose,order }) => {
  const [rating, setRating] = useState(0); // State to hold the rating value
  const [feedback, setFeedback] = useState(''); // State to hold the feedback text

  // Function to handle changes to the rating
  const handleRatingChange = (value) => {
    setRating(value);
  };

  // Function to handle changes to the feedback text
  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async() => {
    // Handle submission of rating and feedback
    // You can send the data to the backend or perform any other action
    try {
       
      } catch (error) {
        console.error("ratings  error:", error);
        throw error;
      }
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
    onClose(); // Close the dialog
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Give Ratings and Feedback</DialogTitle>
      <DialogContent>
        {/* Render the Rating component with initial value and onChange function */}
        <Rating initialValue={rating} onChange={handleRatingChange} />
        <TextField
          label="Feedback"
          value={feedback}
          onChange={handleFeedbackChange}
          fullWidth
          margin="normal"
          variant="outlined"
          placeholder="Enter your feedback"
          multiline
          rows={4}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit}>Submit</Button>
        <Button onClick={onClose}>Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RatingPopup;
