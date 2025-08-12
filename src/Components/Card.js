import React, { useEffect, useState } from 'react';
import './Style/Card.css';

function App() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
     
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockHotels = [
        {
          id: 1,
          name: "Hôtel Majestueux",
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          address: "123 Avenue des Champs, Paris, France",
          price: "189 €",
          rating: 4.7,
          description: "Un hôtel de luxe au cœur de Paris avec vue sur la Tour Eiffel"
        },
        {
          id: 2,
          name: "Résidence Océane",
          image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          address: "45 Boulevard de la Mer, Nice, France",
          price: "145 €",
          rating: 4.5,
          description: "Profitez de la Méditerranée depuis votre chambre"
        },
        {
          id: 3,
          name: "Château Montagne",
          image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          address: "Route des Alpes, Chamonix, France",
          price: "220 €",
          rating: 4.9,
          description: "Retraite alpine avec spa et accès direct aux pistes"
        },
        {
          id: 4,
          name: "Urban Oasis",
          image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/326888700.jpg?k=6b12dd7fc73f82ea2fe96586d667635de350814f3a33e842f4eb8b635b938990&o=",
          address: "789 Rue Moderne, Lyon, France",
          price: "125 €",
          rating: 4.3,
          description: "Design contemporain au centre-ville avec toit-terrasse"
        },
        {
          id: 5,
          name: "Villa Provençale",
          image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          address: "Chemin des Lavandes, Aix-en-Provence, France",
          price: "175 €",
          rating: 4.6,
          description: "Authentique maison provençale avec jardin et piscine"
        },
        {
          id: 6,
          name: "Hôtel du Port",
          image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
          address: "Quai des Marins, Marseille, France",
          price: "135 €",
          rating: 4.2,
          description: "Vue imprenable sur le Vieux-Port et la mer Méditerranée"
        }
      ];
      
      setHotels(mockHotels);
      setLoading(false);
    };

    fetchHotels();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Recherche des meilleurs hôtels pour vous...</p>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Découvrez nos hôtels exceptionnels</h1>
      </header>

      <div className="grid">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="card">
            <div className="card-image">
              <img
                src={hotel.image}
                alt={hotel.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/300x200?text=Pas+d'image";
                }}
              />
              <div className="rating">{hotel.rating} ★</div>
            </div>
            <div className="card-content">
              <h3>{hotel.name}</h3>
              <p className="address">{hotel.address}</p>
              <p className="description">{hotel.description}</p>
              <div className="price-container">
                <span className="price">{hotel.price}</span>
                <span className="per-night">par nuit</span>
              </div>
              <button className="reserve-btn">Réserver maintenant</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;