import React, { useState, useEffect, useCallback } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

 function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
const [weatherData, setWeatherData] = useState({ready: false});

const search = useCallback(() => {
 const apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl)
.then(handleResponse)
.catch(handleError);
}, [city]);

useEffect(() => {
  search();
}, [search]);

function handleError(error) {
  console.error("Error fetching weather data:", error);
}

function handleResponse(response) {
  console.log(response.data); 
  setWeatherData({
    ready: true,
    temperature: response.data.temperature.current,
    humidity: response.data.temperature.humidity,
    wind: response.data.wind.speed,
    city: response.data.city,
    date: new Date(response.data.time * 1000),
    description: response.data.condition.description,
    icon: response.data.condition.icon,
  });
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleCityChange (event) {
setCity(event.target.value);
}

if (weatherData.ready) {
 return (
    <div className="weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
        <input
        type="search"
        placeholder="Enter a city.."
        className="form-control"
        autoFocus="on"
        onChange={handleCityChange}
        />
         </div>
         <div className="col-3">
        <input
        type="submit"
        value="Search"
        className="btn btn-primary w-100"
        />
        </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} />
      </div> 
  );
} else {
return (
  <div>
Loading..............</div>);

}
}
 

export default Weather;