import React from 'react';
import Rating from 'react-rating-stars-component';

const StarRating = ({ value }) => {
  const calculateValue = () => {
    // Round the rating value to the nearest half
    return Math.round(value * 2) / 2;
  };

  return (
    <Rating
      value={calculateValue()}
      count={5} // total number of stars
      size={24} // size of the stars
      edit={false} // disable editing
      isHalf={true} // enable half-star display
      activeColor="#ffd700" // color of active stars
    />
  );
};

export default StarRating;
