import React, { useState } from "react";
import "./App.css";
import Weather from "./components/Weather";

function App() {
  const [city, setCity] = useState("");

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <p>Click to show</p>
      <div className="search-box">
        <input
          type="radio"
          placeholder="Enter city name"
          onChange={handleInputChange}
        />
      </div>
      {city && <Weather city={city} />}
    </div>
  );
}

export default App;
