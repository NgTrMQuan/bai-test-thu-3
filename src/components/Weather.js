import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);

  const API_KEY = '90a5a70875ea415cba7134558233003';
  const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

  useEffect(() => {
    if (city) {
      axios
        .get(`${BASE_URL}?key=${API_KEY}&q=${city}`)
        .then((response) => {
          setWeather(response.data);
        })
        .catch((error) => {
          setError(error.response.data.error.message);
          setWeather({});
        });
    }
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    setError(null);
    setWeather({});
    setCity(e.target.elements.city.value.toLowerCase());
  };

  return (
    <div>
      <h2>Enter the city</h2>
      <form onSubmit={handleSearch}>
        <input type="text" name="city" placeholder="Enter city" />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {weather.current && (
        <div>
          <h3>{weather.location.name}, {weather.location.country}</h3>
          <p>{weather.current.condition.text}</p>
          <img src={weather.current.condition.icon} alt="weather icon" />
          <p>{weather.current.temp_c}°C</p>
          <p>Feels like {weather.current.feelslike_c}°C</p>
          <p>Humidity: {weather.current.humidity}%</p>
          <p>Wind: {weather.current.wind_kph} km/h</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
