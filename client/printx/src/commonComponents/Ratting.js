import React, { useState } from 'react';

const Rating = ({ initialValue, onChange }) => {
  const [rating, setRating] = useState(initialValue);

  const handleClick = (value) => {
    setRating(value);
    if (onChange) {
      onChange(value);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          onClick={() => handleClick(i)}
          className={`text-6xl cursor-pointer ${i <= rating ? 'text-yellow-500' : 'text-gray-400'}`} // Apply Tailwind classes here
        >
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default Rating;
