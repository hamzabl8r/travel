import React from 'react';
import './Style/HotelCard.css';
const StarRating = ({ stars }) => {
  return (
    <div className="star-rating">
      {'⭐'.repeat(stars)}
    </div>
  );
};

const HotelCard = ({ hotel }) => {
  const { image, type, name, location, stars, rating, ratingText, reviews, isGenius } = hotel;

  return (
    <div className="hotel-card">
      <div className="card-image-container">
        <img src={image} alt={`View of ${name}`} className="card-image" />
        <button className="like-button">♡</button>
      </div>
      <div className="card-details">
        <div className="card-line-1">
          <span className="hotel-type">{type}</span>
          <StarRating stars={stars} />
          {isGenius && <span className="genius-badge">Genius</span>}
        </div>
        <h3 className="hotel-name">{name}</h3>
        <p className="hotel-location">{location}</p>
        <div className="card-rating-section">
          <div className="rating-box">
            <span className="rating-score">{rating.toFixed(1)}</span>
          </div>
          <div className="rating-text-group">
            <span className="rating-text">{ratingText}</span>
            <span className="review-count">{reviews} commentaires</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;