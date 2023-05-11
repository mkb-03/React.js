import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const WeatherDetails = () => {
    const [weatherData, setWeatherData] = useState('')
    const { cityName } = useParams()

    useEffect(() => {
        const getWeatherData = async () => {

            try {

                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ba0fbe3ba356d819fc1351fe5ca089a2&units=metric`)

                const data = await response.json()
                console.log(data);
                
                setWeatherData(data)

                // if(data)
                // {
                //     const {
                        
                //     } = newData
                // }


            } catch (error) {
                console.log(error)
            }

        }
        getWeatherData();

    }, [cityName])


    return (

        <div style={{ height: "620px", backgroundColor: "#031633" }}>
            <div className="container text-center pt-5 " >
                <h2>{cityName}</h2>
                <table className="table table-bordered mt-5 border border-white">
                    <thead>
                        <tr >
                            <th scope="col">Temerature</th>
                            <th scope="col">Wind</th>
                            <th scope="col">Other</th>

                        </tr>
                    </thead>
                    <tbody className='mt-5'>
                        <tr >
                            <td >Temperature: {weatherData.main && Math.trunc(weatherData.main.temp)}  °C </td>
                            <td>Speed: {weatherData.wind && weatherData.wind.speed} m/s</td>
                            <td>Humidity: {weatherData.main && weatherData.main.humidity}%</td>

                        </tr>
                        <tr>

                            <td>Max: {weatherData.main && Math.trunc(weatherData.main.temp_max)}  °C</td>
                            <td>Degree: {weatherData.wind && weatherData.wind.speed} m/s</td>
                            <td>Cloud: {weatherData.clouds && weatherData.clouds.all}%</td>

                        </tr>
                        <tr>

                            <td >Min: {weatherData.main && Math.trunc(weatherData.main.temp_min)}  °C</td>
                            <td >Pressure: {weatherData.main && weatherData.main.pressure} hPa</td>
                            <td >Weather: {weatherData.weather && weatherData.weather[0].main}</td>

                        </tr>
                    </tbody>
                </table>

                <Link to="/">
                    <button type="submit" className="btn btn-secondary mt-3" > Check again </button>
                </Link>

            </div>
        </div>
    )
}

export default WeatherDetails