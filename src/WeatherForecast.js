import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";



function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);
            
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    function load() {
        let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
        let longitude = props.coordinates.longitude;
        let latitude = props.coordinates.latitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    if (loaded) {    
    return (
    <div className="weatherForecast">
    <div className="row">
    {forecast.map(function (dailyForecast, index){
    if (index < 5) {
    return (
    <div className="col" key={index}>
    <WeatherForecastDay data={dailyForecast} />       
</div>
);
 } else {
    return null;
 }
})}
</div>
</div>
    );
} else {
  
load();
return null;

}
    }


export default WeatherForecast;