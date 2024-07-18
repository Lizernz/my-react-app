import React, { useState, useEffect, useCallback } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

 function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
const [weatherData, setWeatherData] = useState({ready: false});

const search = useCallback(() => {
 const apiKey = "ac209dae1f283fb332a5bb7f50b0f468";
const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
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
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    city: response.data.name,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    icon: response.data.weather[0].icon,
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
      <WeatherInfo info={weatherData} />
      </div> 
  );
} else {
return (
  <div>
Loading..............</div>);

}
}
 

export default Weather;