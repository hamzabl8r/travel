import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const GuestsPopup = ({ onClose, onSave }) => {
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);
    const [pets, setPets] = useState(false);

    const handleIncrement = (type) => {
        if (type === 'adults') setAdults(prev => prev + 1);
        if (type === 'children') setChildren(prev => prev + 1);
        if (type === 'rooms') setRooms(prev => prev + 1);
    };

    const handleDecrement = (type) => {
        if (type === 'adults' && adults > 1) setAdults(prev => prev - 1);
        if (type === 'children' && children > 0) setChildren(prev => prev - 1);
        if (type === 'rooms' && rooms > 1) setRooms(prev => prev - 1);
    };

    const handleSave = () => {
        onSave({ adults, children, rooms });
        onClose();
    };

    return (
        <div className="guests-popup-container">
            <div className="guests-counter-row">
                <span>Adultes</span>
                <div className="counter-controls">
                    <button onClick={() => handleDecrement('adults')} disabled={adults <= 1}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span>{adults}</span>
                    <button onClick={() => handleIncrement('adults')}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
            <div className="guests-counter-row">
                <span>Enfants</span>
                <div className="counter-controls">
                    <button onClick={() => handleDecrement('children')} disabled={children <= 0}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span>{children}</span>
                    <button onClick={() => handleIncrement('children')}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
            <div className="guests-counter-row">
                <span>Chambres</span>
                <div className="counter-controls">
                    <button onClick={() => handleDecrement('rooms')} disabled={rooms <= 1}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span>{rooms}</span>
                    <button onClick={() => handleIncrement('rooms')}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>

            <div className="pet-toggle-section">
                <p>Vous voyagez avec votre animal ?</p>
                <label className="switch">
                    <input type="checkbox" checked={pets} onChange={() => setPets(!pets)} />
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="pet-info-links">
                <p>Les animaux d'assistance ne sont pas considérés comme des animaux de compagnie.</p>
                <a href="#">En savoir plus sur les voyages avec un animal d'assistance</a>
            </div>

            <button className="btn-terminer" onClick={handleSave}>Terminer</button>
        </div>
    );
};

export default GuestsPopup;