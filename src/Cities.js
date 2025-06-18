import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchCities } from "./store/actions/cityActions";
import { Link } from "react-router-dom";
import Footer from './components/Footer';

const Cities = ({ cities, fetchCities }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  const filteredCities = Array.isArray(cities)
    ? cities.filter((city) =>
        city.name.toLowerCase().startsWith(search.toLowerCase())
      )
    : [];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Explore Cities</h2>
      <input
        type="text"
        placeholder="Search cities"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px", width: "300px" }}
      />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredCities.map((city) => (
          <li key={city._id} style={{ marginBottom: "20px" }}>
            <Link
              to={`/city/${encodeURIComponent(city.name)}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h3>{city.name}, {city.country}</h3>
              <img
                src={city.image}
                alt={city.name}
                width="300"
                style={{ borderRadius: "10px" }}
              />
            </Link>
          </li>
        ))}
      </ul>
       <Footer /> 
    </div>
  );
};

const mapStateToProps = (state) => ({
  cities: state.cityReducer.cities,
});

export default connect(mapStateToProps, { fetchCities })(Cities);






