import { useState, useEffect } from "react";
import actions from "../server";
const api_key = import.meta.env.VITE_SOME_KEY;

const Weather = ({ lat, lon, name }) => {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    actions.getWeather(lat, lon, api_key).then((data) => {
      setWeatherData({
        temp: data.main.temp,
        wind: data.wind.speed,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      });
    });
  }, []);

  if (!weatherData) return null;

  return (
    <div>
      <h2>Weather in {name}</h2>
      <p>Temperature: {weatherData.temp} Celcius</p>
      <img src={weatherData.icon} />
      <p>Wind: {weatherData.wind} m/s</p>
    </div>
  );
};

export default Weather;
