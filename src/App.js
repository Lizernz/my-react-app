import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container" >
    <h1>Weather App</h1>

   <Weather />
    <footer>
      This project was coded by Elizabeth Lavender
      and is <a href="https://github.com/Lizernz/my-react-app"
      target="_blank"
      rel="noopener noreferrer"
      >
         open-sourced on GitHub
      </a> and on  
      <a href="https://lizernz-react-app.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      >
        Netlify
      </a>
    </footer>
    </div>
    </div>
  );
}

export default App;
