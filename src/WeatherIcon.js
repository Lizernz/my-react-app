import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

function WeatherIcon(props) {
const codeMapping = {
    "01d": "CLEAR-DAY",
    "01n": "CLEAR-NIGHT",
    "02d": "PARTLY-CLOUDY-DAY",
    "02n": "PARTLY-CLOUDY-NIGHT",
    "03d": "PARTLY-CLOUDY-DAY",
    "03n": "PARTLY-CLOUDY-NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "010d": "RAIN",
    "010n": "RAIN",
    "011d": "RAIN",
    "011n": "RAIN",
    "013d": "SNOW",
    "013n": "SNOW",
    "050d": "FOG",
    "050n": "FOG",
   
};

    return(
        <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="red"
        size={55}
        animate={true}
      />
    ); 
}

  


  export default WeatherIcon; 






 

 




















