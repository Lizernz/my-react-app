import React, { useState } from "react";

import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

 function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
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
date: new Date(response.data.dt * 1000),
description:response.data.weather[0].description,
iconUrl:
 "http://openweathermap.org/img/wn/10d@2x.png",
  });
}

function handleSubmit(event) {
  event.preventDefault();
  search();
  //search for a city

}

function search (){
  const apiKey = "63214c4281922e3bb72fdf12dada7734";
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
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
        <input type="search"
        placeholder="Enter a city.."
        className="form-control"
        autoFocus="on"
        onChange={handleCityChange}
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
      <WeatherInfo info={weatherData}/>
     
      </div>
      
  );

 
} else {

  search();
return 

"Loading...";
}
}
 

export default Weather;