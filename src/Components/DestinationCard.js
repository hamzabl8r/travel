import React from 'react';

const DestinationCard = ({ destination }) => {
  const imageUrl = destination.image_url || `https://via.placeholder.com/400x300?text=${destination.name}`;

  return (
    <div className="destination-card">
      <img src={imageUrl} alt={destination.name} />
      <div className="destination-card-content">
        <h3>{destination.name}</h3>
        <p>{destination.country}</p>
        <p>{destination.description}</p>
      </div>
    </div>
  );
};

export default DestinationCard;