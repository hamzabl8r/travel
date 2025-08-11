import React, { useEffect, useState } from "react";
import "./Style/Card.css";

export default function Card() {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "a56437826emsh8e1c7cb4bfb8cabp103ddajsn33826d272c12";

  useEffect(() => {
    // Étape 1 : récupérer le destinationId avec les coordonnées (latitude & longitude)
    const locationUrl = new URL(
      "https://booking-com15.p.rapidapi.com/api/v1/hotels/locations"
    );
    locationUrl.search = new URLSearchParams({
      latitude: "19.24232736426361",
      longitude: "72.85841985686734",
      locale: "en-us",
    });

    fetch(locationUrl, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
      },
    })
      .then((res) => res.json())
      .then((locationData) => {
        // console.log("Location data:", locationData);

        if (!locationData || locationData.length === 0) {
          throw new Error("Destination introuvable");
        }

        const destinationId = locationData[0].dest_id;
        // Étape 2 : récupérer la liste des hôtels avec destinationId
        const hotelsUrl = new URL(
          "https://booking-com15.p.rapidapi.com/api/v1/hotels/search"
        );
        hotelsUrl.search = new URLSearchParams({
          dest_id: destinationId,
          checkin_date: "2025-08-11",
          checkout_date: "2025-08-12",
          adults_number: "1",
          order_by: "price",
          units: "metric",
          locale: "en-us",
          currency: "EUR",
          page_number: "1",
          room_number: "1",
        });

        return fetch(hotelsUrl, {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
          },
        });
      })
      .then((res) => res.json())
      .then((hotelData) => {
        // console.log("Hotels data:", hotelData);

        if (hotelData.result && hotelData.result.length > 0) {
          const results = hotelData.result.map((hotel) => ({
            id: hotel.hotel_id || Math.random(),
            name: hotel.hotel_name || "Nom inconnu",
            image:
              hotel.main_photo_url ||
              "https://via.placeholder.com/250x180?text=Pas+d'image",
            address: hotel.address || "Adresse non disponible",
            price: hotel.price || "Prix non disponible",
          }));

          setHotels(results);
        } else {
          setHotels([]);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors de la récupération des hôtels :", err);
        setHotels([]);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement des hôtels...</p>;

  if (hotels.length === 0)
    return <p>Aucun hôtel trouvé pour cette recherche.</p>;

  return (
    <div className="grid">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="card">
          <img
            src={hotel.image}
            alt={hotel.name}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/250x180?text=Pas+d'image";
            }}
          />
          <h3>{hotel.name}</h3>
          <p>{hotel.address}</p>
          <span>{hotel.price}</span>
          <button>Réserver</button>
        </div>
      ))}
    </div>
  );
}
