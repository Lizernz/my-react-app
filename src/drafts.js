<div className="WeatherForecast-day">{forecast[0].dt}</div>
<WeatherIcon code={forecast[0].weather[0].icon}size={36} />

<div className="WeatherForecast-temperatures">
<span className="WeatherForecast-temperature-max">
{forecast[0].temp.max}°</span>
<span className="WeatherForecast-temperature-min"> {forecast[0].temp.min}°</span>
</div>