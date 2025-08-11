import React from 'react'
import FeedBack from './FeedBack'
import './Style/feedback.css';



const feedbacks = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    text: "TravelEase made our honeymoon in Santorini absolutely perfect. Every detail was taken care of, and the recommendations were spot on!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    text: "I've used many travel agencies, but TravelEase stands out. Their customer service is exceptional and they always find the best deals.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "Madrid, Spain",
    text: "Amazing trip planning!",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200&q=80",
    rating: 3
  }
];
function FeedbackSection() {
  return (
    <section className="feedback-section container">
      <header>
        <h1>What Our Travelers Say</h1>
        <p className="subtitle">Real experiences from real travelers</p>
      </header>

      <div className="feedback-list">
        {feedbacks.map(fb => (
          <FeedBack key={fb.id} feedback={fb} />
        ))}
      </div>

      
    </section>
  );
}

export default FeedbackSection
