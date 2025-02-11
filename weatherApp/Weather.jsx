import React, { useState } from 'react'
import axios from 'axios'

function Weather() {
    const [city,setCity]=useState();
    const [weather, setWeather]=useState();

    const handleCityChange=(event)=>{
        setCity(event.target.value)
    }

    const fetchWeather=async ()=>{
        try{
            const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'4d13e0bff4d647054b3fa7d858829848'}`)
            setWeather(response)
            console.log(response)
        }
        catch(error){
            console.log("Error",error)
        }
    }
    const handleClick=()=>{
        fetchWeather();
    }
  return (
    <div className='weather-container'>Weather
        <input type="text"  placeholder='enter city name' value={city} onChange={handleCityChange}/>
        <button onClick={handleClick}>Get Weather</button>
        {weather && <>
        <div className='weather-info'>
            <h3>{weather.data.name}</h3>
            <p>Temp is {weather.data.main.temp }</p>
            <p>{weather.data.weather[0].description}</p>
        </div>
        </>}
    </div>
  )
}

export default Weather