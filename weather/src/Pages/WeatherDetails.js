import React from 'react'

const WeatherDetails = () => {

    async function getWeather(){
        try {
            
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=lahore&appid=ba0fbe3ba356d819fc1351fe5ca089a2&units=metric`)

            const data = await response.json()
            console.log(data);
            if(data)
            {
                
            }

        } catch (error) {
            console.log(error)
        }
    }

    getWeather();

    return (
        <div className="container text-center mt-5">

            <div className="row align-items-start">
                <div className="col">
                    Temperature
                </div>
                <div className="col">
                    Rain
                </div>
                <div className="col">
                    Wind
                </div>
            </div>
        </div>
    )
}

export default WeatherDetails