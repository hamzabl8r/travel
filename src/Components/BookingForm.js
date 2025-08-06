import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faUserFriends,
  faChevronDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt as farCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import GuestsPopup from "./GuestsPopup";
import DatePicker from "./DatePicker";
import DestinationsPopup from "./Destination";
import "./Style/Book.css";

const API_KEY = "069ca7c38f8048db841315e6a81d0d8d";

const BookingForm = () => {
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("dim. 10 août — lun. 11 août");
  const [guests, setGuests] = useState("2 adultes · 0 enfant · 1 chambre");

  const [showGuestsPopup, setShowGuestsPopup] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDestinationsPopup, setShowDestinationsPopup] = useState(false);

  const [suggestions, setSuggestions] = useState([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (destination.length > 2) {
        setLoadingSuggestions(true);
        try {
          const response = await axios.get(
            `https://api.geoapify.com/v1/geocode/autocomplete?text=${destination}&apiKey=${API_KEY}`
          );

          const fetchedSuggestions = response.data.features.map((feature) => ({
            name: feature.properties.city || feature.properties.name,
            country: feature.properties.country,
          }));

          setSuggestions(fetchedSuggestions);
        } catch (err) {
          console.error("Error fetching suggestions:", err);
          setSuggestions([]);
        } finally {
          setLoadingSuggestions(false);
        }
      } else {
        setSuggestions([]);
      }
    };

    const timeoutId = setTimeout(() => fetchSuggestions(), 500);
    return () => clearTimeout(timeoutId);
  }, [destination]);

  const handleSearch = () => {
    console.log("Searching for:", { destination, dates, guests });
  };

  const handleSaveDates = (newDates) => {
    const formattedDates = `${new Date(newDates[0]).toLocaleDateString(
      "fr-FR",
      { weekday: "short", day: "2-digit", month: "short" }
    )} — ${new Date(newDates[1]).toLocaleDateString("fr-FR", {
      weekday: "short",
      day: "2-digit",
      month: "short",
    })}`;
    setDates(formattedDates.replace(/\./g, ""));
    setShowDatePicker(false);
  };

  const handleSaveGuests = ({ adults, children, rooms }) => {
    setGuests(`${adults} adultes · ${children} enfant · ${rooms} chambre`);
    setShowGuestsPopup(false);
  };

  const handleSelectDestination = (name) => {
    setDestination(name);
    setShowDestinationsPopup(false);
    setSuggestions([]);
  };

  const handleClearDestination = () => {
    setDestination("");
    setShowDestinationsPopup(false);
  };

  return (
    <div className="booking-form-container">
      <div className="form-input location">
        <FontAwesomeIcon icon={faBed} />
        <input
          type="text"
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
            setShowDestinationsPopup(true);
          }}
          placeholder="Où allez-vous ?"
          onFocus={() => setShowDestinationsPopup(true)}
        />
        {destination && (
          <FontAwesomeIcon
            icon={faTimes}
            className="clear-input"
            onClick={handleClearDestination}
          />
        )}
      </div>
      <div
        className="form-input dates"
        onClick={() => setShowDatePicker(!showDatePicker)}>
        <FontAwesomeIcon icon={farCalendarAlt} />
        <span>{dates}</span>
      </div>
      <div
        className="form-input guests"
        onClick={() => setShowGuestsPopup(!showGuestsPopup)}>
        <FontAwesomeIcon icon={faUserFriends} />
        <span>{guests}</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <button className="search-button" onClick={handleSearch}>
        Rechercher
      </button>

      {showDestinationsPopup && (
        <DestinationsPopup
          destinations={suggestions}
          onSelectDestination={handleSelectDestination}
          loading={loadingSuggestions}
        />
      )}

      {showDatePicker && (
        <DatePicker
          onClose={() => setShowDatePicker(false)}
          onSave={handleSaveDates}
        />
      )}
      {showGuestsPopup && (
        <GuestsPopup
          onClose={() => setShowGuestsPopup(false)}
          onSave={handleSaveGuests}
        />
      )}
    </div>
  );
};

export default BookingForm;
