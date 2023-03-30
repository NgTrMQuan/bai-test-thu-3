import React, { useState } from "react";

const WeatherForm = (props) => {
  const [city, setCity] = useState("");

  const inputChangedHandler = (event) => {
    setCity(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={inputChangedHandler}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
