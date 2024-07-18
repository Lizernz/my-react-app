import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

 function Weather(props) {
const [ready, setReady] = useState({ready: false});
const [weatherData, setWeatherData] = useState({});

function handleResponse(response) {
  console.log(response.data);
 setWeatherData({
ready: true,
temperature:response.data.main.temp,
humidity:response.data.main.humidity,
wind: response.data.wind.speed,
city: response.data.name,
date: "Wednesday 07:00",
description:response.data.weather[0].description,
iconUrl:
 "https://w7.pngwing.com/pngs/530/127/png-transparent-weather-forecasting-national-weather-service-weather-radar-weather-atmosphere-cloud-weather-forecasting-thumbnail.png",
  });
}


if (weatherData.ready) {
 return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
        <input type="search"
        placeholder="Enter a city.."
        className="form-control"
        autoFocus="on"
        />
         </div>
         <div className="col-3">
        <input type="submit"
        value="Search"
        className="btn btn-primary w-100"
        />
        </div>
        </div>
      </form>
      <h1>{weatherData.city}</h1>
      <ul>
        <li>{weatherData.date}</li>
        <li class="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
        <div className="clearfix">
      <img
      src={weatherData.iconUrl}
      alt={weatherData.description}
      /> 
     <span className="temperature">{Math.round(weatherData.temperature)}</span>
     <span className="unit">°C</span>
     </div>
</div>
    <div className="col-6">
      <ul>
        
        <li>Humidity: {weatherData.humidity}</li>
        <li>wind: {weatherData.wind}km/h</li>
      </ul>
      </div>

      </div>
      </div>
  );

 
} else {

const apiKey = "63214c4281922e3bb72fdf12dada7734";

let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return "Loading...";
}
}
 

export default Weather;