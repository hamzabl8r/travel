import { MapPin, Quote, Star } from 'lucide-react';
import React from 'react'

const FeedBack = ( {feedback}) => {
  return (
     <div className="feedback-card">
      <div className="card-header">
        <div className="stars">
         
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20}   color={i < feedback.rating ? "#FFD700" : "#ccc"} // étoiles actives/inactives
              fill={i < feedback.rating ? "#FFD700" : "none"} />
          ))}
        </div>
          <p className="feedback-text">{feedback.text}</p>
        <Quote className="quote-icon" size={40}/>
      </div>
      <div className="client-info">
        <img src={feedback.avatar} alt={feedback.name} className="client-avatar" />
        <div className="client-details">
          <div className="client-name">{feedback.name}</div>
          <div className="client-location">
            <MapPin size={16} color="#ff7e5f"/> {feedback.location}
          </div>
        </div>
      </div>
    </div>
  );
}

 

export default FeedBack
