import React, { useState } from 'react';
import './Weather.css'; // For styling
const Weather = () => {
const [city, setCity] = useState('');
const [weather, setWeather] = useState(null);
const [error, setError] = useState('');
const apiKey = '58c580c90c0541c36ad920dfefaedd3c'

const fetchWeather = async () => {
if (!city) {
setError('Please enter a city name.');
return;
}
try {
const response = await
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metr
ic`);
const data = await response.json();
if (data.cod === 200) {



setWeather({
temperature: data.main.temp,
description: data.weather[0].description,
city: data.name,
country: data.sys.country,
});
setError('');
} else {
setWeather(null);
setError('City not found.');
}
} catch (error) {
setWeather(null);
setError('Error fetching weather data.');
}
};
const handleSubmit = (e) => {
e.preventDefault();
fetchWeather();
};
return (
<div className="weather">
<h1>Weather Forecast</h1>
<form onSubmit={handleSubmit}>
<input
type="text"
value={city}
onChange={(e) => setCity(e.target.value)}
placeholder="Enter city name"
/>
<button type="submit">Get Weather</button>
</form>
{error && <p className="error">{error}</p>}
{weather && (
<div className="weather-info">
<h2>{weather.city}, {weather.country}</h2>
<p>Temperature: {weather.temperature}°C</p>
<p>Description: {weather.description}</p>
</div>
)}
</div>
);
};



export default Weather;