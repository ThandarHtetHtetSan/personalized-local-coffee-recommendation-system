import React from 'react';

const CoffeeCard = ({ recommendations }) => {
  return (
    <div className="coffee-card">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Recommendations</h2>
      {recommendations.length === 0 ? (
        <p>No recommendations yet. Please select filters and click Recommend.</p>
      ) : (
        <ul>
          {recommendations.map((recommendation, index) => (
            <li key={index}>{recommendation}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CoffeeCard;


