import React from "react";
import FormattedDate from "./FormattedDate";
; 




function WeatherInfo(props) {
    return (
        <div className="weatherInfo">
    <h1>{props.info.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.info.date.getDay()} />
          </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">

<weatherIcon code={props.info.icon}
 />

     <span className="temperature">{Math.round(props.info.temperature)}</span>
     <span className="unit">°C</span>
     </div>
    <div className="col-6">
      <ul>
        
        <li>Humidity: {props.info.humidity}</li>
        <li>Wind: {props.info.wind} km/h</li>
      </ul>
      </div>
    </div>
    </div>
    );

}


export default WeatherInfo;
