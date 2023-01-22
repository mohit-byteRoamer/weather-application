import './App.css';
import React from "react"
import Weathershow from "./Weacthershow"
import axios from 'axios';
function App() {
  let [weather, setWeather] = React.useState(20)
  let onClick = function (city, country) {
    let api = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&appid=86d519f419fa7fd800e560b1df1b1b42&units=metric";
    axios.get(api).then((response) => {
      setWeather(response.data.main.temp);
    })
  }


  return (
    <div className="App">
      <Weathershow weather={weather} onClick={onClick}></Weathershow>
    </div>
  );
}

export default App;
