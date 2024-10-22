import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [data, setData] = useState()
    const [selectedCity, setSelectedCity] = useState()
    const apiKey = 'df97bf821d6500d3982e09463ac13b41'
    useEffect(() => {
        if (selectedCity) {
            axios(`https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}&units=metric&lang=tr`)
                .then((res) => setData(res.data))
                .catch((err) => console.log(err))
        }
    }, [selectedCity])
    const values = {
        data,
        setData,
        setSelectedCity,
    }
    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext)