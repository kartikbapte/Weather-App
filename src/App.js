import logo from './logo.svg';
import './App.css';
import React from 'react';
import CityInput from './components/CityInput';
import CityWeather from './components/CityWeather';


function App() {
  const [city, setCity] = React.useState("");
  const [cityWeather, setCityWeather] = React.useState({main: "", wind: "", weather:[{0:{main:"", description: ""}}]});
  
  const fetchCityWeather =() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
      )
      .then((response) => response.json())
      .then((result) => {
          console.log("Result is", result);
          setCityWeather(result);
        })
  }
  return (
    <>
      <CityInput city={city} setCity={setCity} fetchCityWeather={fetchCityWeather}/>
      <CityWeather cityWeather = {cityWeather} />
    </>
    
  );
}

export default App;
