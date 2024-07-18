import React from "react";
import FormattedDate from "./FormattedDate";





function WeatherInfo(props) {
    return (
        <div className="weatherInfo">
    <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date.getDay()} />
          </li>
        <li class="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
      <img
      src={props.data.iconUrl}
      alt={props.data.description}
      /> 
     <span className="temperature">{Math.round(props.data.temperature)}</span>
     <span className="unit">°C</span>
     </div>
</div>
    <div className="col-6">
      <ul>
        
        <li>Humidity: {props.data.humidity}</li>
        <li>wind: {props.data.wind}km/h</li>
      </ul>
      </div>
    </div>
    );

}


export default WeatherInfo;
