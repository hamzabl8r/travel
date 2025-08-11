import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const DestinationsPopup = ({ destinations, onSelectDestination, loading }) => {
    return (
        <div className="destinations-popup-container">
            <h4 className="popup-title">Destinations en vogue</h4>
            <div className="destinations-list">
                {loading && <div className="loading-message">Loading suggestions...</div>}
                {!loading && destinations.length > 0 && (
                    destinations.map((dest) => (
                        <div
                            key={dest.dest_id}
                            className="destination-item"
                            onClick={() => onSelectDestination(dest)}
                        >
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="location-icon" />
                            <div className="destination-text">
                                <p className="destination-name">{dest.name}</p>
                                <span className="destination-country">{dest.country}</span>
                            </div>
                        </div>
                    ))
                )}
                {!loading && destinations.length === 0 && (
                    <div className="no-results">No destinations found.</div>
                )}
            </div>
        </div>
    );
};

export default DestinationsPopup;