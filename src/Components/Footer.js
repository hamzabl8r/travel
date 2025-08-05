import React from 'react';
import './Style/footer.css';
import { Send, Mail, Map, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="./image/logo.png" alt="TravelEase Logo" />
          
          <p>
            Your trusted partner in creating unforgettable travel experiences 
            around the world.
          </p>
        </div>

           <div className="footer-links">
             <h2>Quick Links</h2>
             <ul>
               <li><a href="#home">About Us</a></li>
               <li><a href="#destinations">Destinations</a></li>
               <li><a href="#packages">Packages</a></li>
               <li><a href="#about">Contact</a></li>
             </ul>
           </div>

           <div className="footer-support">
             <h2>Support</h2>
             <ul>
               <li><a href="#faq">FAQ</a></li>
               <li><a href="#help">Help Center</a></li>
               <li><a href="#terms">Terms & Conditions</a></li>
               <li><a href="#privacy">Privacy Policy</a></li>
             </ul>
           </div>

           <div className="footer-contact">
             <h2>Contact Info</h2>
             <ul>
               <li><Phone /> 216 12 456 789</li>
            <li>< Mail/> support@travelease.com</li>
            <li><MapPin/>123 Travel St, tunis, Gabes</li>
         </ul>
          
       </div>       </div>

      <hr />
     <div className="footer-bottom">
        <p>© 2025 TravelEase Travel Agency. All rights reserved.</p>
      </div>
 </footer>
   );
}; 

export default Footer;


