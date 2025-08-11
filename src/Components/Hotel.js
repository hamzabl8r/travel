import React from 'react';
import './Style/HotelCard.css';

const HotelCard = ({ hotel, onSelect }) => {
  return (
    <div className="hotel-card" onClick={onSelect}>
      <img src={hotel.photoMainUrl} alt={hotel.hotel_name} />
      <div className="hotel-card-content">
        <h3>{hotel.hotel_name}</h3>
        <p>Rating: {hotel.reviewScore || 'N/A'}</p>
        <p>
          Price: {hotel.priceBreakdown?.grossPrice?.currency}{' '}
          {hotel.priceBreakdown?.grossPrice?.value?.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default HotelCard;