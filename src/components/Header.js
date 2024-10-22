import React, { useState } from 'react';
import cities from '../CitiesList';
import { useWeather } from '../context/WeatherContext';

function Header() {
  const { setSelectedCity } = useWeather()
  const [selectedCity, setSelectedCityLocal] = useState("istanbul")

  const handleCityChange = (e) => {
    setSelectedCityLocal(e.target.value)
    setSelectedCity(e.target.value)
  }

  return (
    <div className='header'>
      <h1>Hava Durumu</h1>
      <h3>Şehir Seçiniz</h3>
      <select value={selectedCity} onChange={handleCityChange} style={{ width: 100 }}>
        {cities.map((city, index) => (
          <option key={index} value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
}

export default Header;
