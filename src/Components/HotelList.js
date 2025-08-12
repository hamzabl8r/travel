import React from 'react';
import HotelCard from './HotelCard';
import { hotelsData } from './HotelData'; 
import './Style/HotelCard.css'; 

const HotelList = () => {
  return (
    <div className="hotel-list-container">
      {hotelsData.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;