import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const WeatherDetails = () => {
    const [weatherData, setWeatherData] = useState(null)
    const { cityName } = useParams()

    useEffect(() => {
        const getWeatherData = async () => {

            try {

                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=ba0fbe3ba356d819fc1351fe5ca089a2&units=metric`)

                const data = await response.json()
                console.log(data);
                setWeatherData(data)

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
                <table className="table mt-5 ">
                    <thead>
                        <tr >
                            <th scope="col">Temerature</th>
                            <th scope="col">Wind</th>
                            <th scope="col">Humidity</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >Temperature:  </td>
                            <td></td>
                            <td>Max Temperature</td>

                        </tr>
                        <tr>

                            <td>Max: </td>
                            <td>Thornton</td>
                            <td>Thornton</td>

                        </tr>
                        <tr>

                            <td >Min: </td>
                            <td >Larry the Bird</td>
                            <td >Larry the Bird</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default WeatherDetails