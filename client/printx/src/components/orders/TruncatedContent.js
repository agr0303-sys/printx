import React, { useState } from 'react';

const TruncatedContent = ({ value }) => {
  const [showAll, setShowAll] = useState(false);

  const handleClick = () => {
    setShowAll(!showAll);
  };

  const truncatedValue = (text) => {
    const stringValue = String(text); // Ensure text is a string
    return showAll || stringValue.length <= 30
      ? stringValue
      : stringValue.slice(0, 23) + '...';
  };

  return (
    <span>
      {typeof value === 'number' ? `₹ ${truncatedValue(value)}` : truncatedValue(value)}
      {String(value).length > 30 && (
        <button onClick={handleClick}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </span>
  );
};

export default TruncatedContent;
