import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from './Footer';

const CityDetails = () => {
  const { cityName } = useParams();
  const [itineraries, setItineraries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItineraries = async () => {
      try {
        const response = await fetch(`/api/itineraries/${encodeURIComponent(cityName)}`);
        if (!response.ok) {
          throw new Error("Failed to fetch itineraries");
        }
        const data = await response.json();
        setItineraries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItineraries();
  }, [cityName]);

  if (loading) return <p>Loading itineraries...</p>;
  if (error) return <p>Error: {error}</p>;
  if (itineraries.length === 0) return <p>No itineraries found for {cityName}.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Itineraries for {cityName}</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {itineraries.map((itinerary) => (
          <li key={itinerary._id} style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "20px", borderRadius: "8px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={itinerary.profilePicture}
                alt="Host"
                width="60"
                height="60"
                style={{ borderRadius: "50%", marginRight: "15px", objectFit: "cover" }}
              />
              <h3>{itinerary.title}</h3>
            </div>
            <p><strong>Rating:</strong> {itinerary.rating} ⭐</p>
            <p><strong>Duration:</strong> {itinerary.duration}</p>
            <p><strong>Price:</strong> {itinerary.price}</p>
            <p><strong>Tags:</strong> {itinerary.hashtags.join(", ")}</p>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default CityDetails;

