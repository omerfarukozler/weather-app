import React from 'react'
import { useWeather } from '../context/WeatherContext'

function Card() {
    const { data } = useWeather();
    if (!data) return null
    const date = new Date(data.dt * 1000)
    const formattedDate = date.toLocaleDateString();
    const description = data.weather[0].description
    const iconCode = data.weather[0].icon
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
    return (
        <div className='card'>
            <h3>{formattedDate}</h3>
            <div className='card-icon'>
                <img src={iconUrl} alt="Weather Icon" />
                <h5 style={{color:'white'}}>{description}</h5>
                <p  style={{color:'white', paddingBottom:'15px'}}>{data.main.temp}°C</p>
            </div>
        </div>
    )
}

export default Card
