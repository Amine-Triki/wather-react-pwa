import './Weather.css'

import { Helmet } from 'react-helmet-async';

import  { useState, useEffect } from 'react';
import axios from 'axios';

import { spiral } from 'ldrs'

spiral.register()

const Weather = () => {
  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState('sfax');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const result = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=d2fb835a98794ce0814203429230910&q=${inputValue}&aqi=yes`
        );
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchWeatherData(); 
  
  }, [inputValue]);

  return (
    <main className="d-flex justify-content-center align-items-center">
      <Helmet>
        <title>Weather</title>
      </Helmet> 
      {data.current ? (
        <div className="card shadow-lg p-3 mb-5 bg-body rounded border border-info" style={{ width: '20rem' }}>
          <div className="card-body">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              placeholder="City"
              className="form-control"
            />
            <h6 className="card-text">Last update {data.current.last_updated}</h6>
            <div>
              <img src={data.current.condition.icon} alt="icon" />
              <span>{data.current.condition.text}</span>
            </div>
            <p className="card-text">Location region name: {data.location.name}</p>
            <p className="card-text">Location region: {data.location.region}</p>
            <p className="card-text">Location country: {data.location.country}</p>
            <p className="card-text">Location tz_id: {data.location.tz_id}</p>
            <p className="card-text">Temperature in °C: {data.current.temp_c}</p>
            <p className="card-text">Temperature in °F: {data.current.temp_f}</p>
            <p className="card-text">Humidity: {data.current.humidity}</p>
            <p className="card-text">Gust kph: {data.current.gust_kph}</p>
            <p className="card-text">Gust mph: {data.current.gust_mph}</p>
          </div>
        </div>
      ) : (
        <div>
          
            <l-spiral
            size="40"
            speed="0.9" 
            color="black" 
            >

            </l-spiral>
        </div>
      )}
    </main>
  );
};

export default Weather;
