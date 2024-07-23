import React, { useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";


function WeatherForecast(props) {

    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {

        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
    return (
    <div className="weatherForecast">
        <div className="row">
            <div className="col">
            <div className="WeatherForecast-day">{forecast[0].dt}</div>
            <WeatherIcon code="scattered-clouds-day" size={36} />

            <div className="WeatherForecast-temperatures">
 <span className="weatherForecast-temperature-max">
    {forecast[0].temp.max}°</span>
 <span className="weatherForecast-temperature-min"> {forecast[0].temp.min}°</span>
 </div>
</div>
</div>
</div>
    );
} else {
let apiKey = "fbef01f4et1b02o0d25c27210a43ef3f";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

}
    }
    



export default WeatherForecast;