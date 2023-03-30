import React from "react";

const CityList = ({ cities, onSelectCity }) => {
  return (
    <div>
      <h2>Chọn thành phố</h2>
      <ul>
        {cities.map((city, index) => (
          <li key={index} onClick={() => onSelectCity(city.name)}>
            {city.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
