import React, { useState }from "react";


function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius")

    function showFahrenheit(event) {
     event.preventDefault();
     setUnit("fahrenheit");
    }

function showCelsius (event) {
    event.preventDefault();
    setUnit("celsius");
}

function toFahrenheit(celsius) {
    return ( props.celsius * 9/5 + 32)
}

if (unit === "celsius") {
    return (
        <div className="WeatherTemperature">
            <span className="temperature">{Math.round(props.celsius)}</span>
            <span className="unit">
                °C | <a href="/" onClick={showFahrenheit}>°F</a>
            </span>
        </div>
    );
} else {
    const fahrenheit = toFahrenheit(props.celsius);
    return (
        <div className="WeatherTemperature">
            <span className="temperature">{Math.round(fahrenheit)}</span>
            <span className="unit">
                <a href="/" onClick={showCelsius}>°C</a> | °F
            </span>
        </div>
    );
}
}


export default WeatherTemperature;