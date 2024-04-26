import axios from "axios";

const baseUrlCountries = "https://studies.cs.helsinki.fi/restcountries/api/";

const getCountries = () => {
  return axios.get(`${baseUrlCountries}/all`).then((response) => response.data);
};

const getWeather = (lat, lon, key) => {
  return axios
    .get(
      `${`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`}`
    )
    .then((response) => response.data);
};

export default {
  getCountries,
  getWeather,
};
