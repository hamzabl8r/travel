import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DestinationCard from './DestinationCard';
import './Style/Search.css';

const DestinationSearch = () => {
  const [destinations, setDestinations] = useState([]);
  const [query, setQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setDestinations([]);
      setLoading(false);
      return;
    };

    const fetchDestinations = async () => {
      setLoading(true);
      setError(null);
      const options = {
        method: 'GET',
        url: '/api/v1/hotels/searchDestination',
        params: { query: query },
        headers: {
          'x-rapidapi-key':  'd45ad24960mshac5f892057aec85p181cdcjsnf57a0bb8bc0e',
          'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
        }
      };
      try {
        const response = await axios.request(options);
        setDestinations(response.data.data || []);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDestinations();
  }, [query]);

  const handleSearch = () => {
    setQuery(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <h1>Find Your Next Destination</h1>
      <div className="search-bar">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="e.g., London, Paris, Tunis..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading && <div className="status-message">Searching...</div>}
      {error && <div className="status-message">Error: Could not fetch data.</div>}
      
      {!loading && !error && (
        <div className="destinations-grid">
          {destinations.length > 0 ? (
            destinations.map((dest) => (
              <DestinationCard key={dest.dest_id} destination={dest} />
            ))
          ) : ""}
        </div>
      )}
    </div>
  );
};

export default DestinationSearch;