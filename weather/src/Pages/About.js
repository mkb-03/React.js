import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div style={{ height: "620px", backgroundColor: "#031633" }}>
            <h2 className='pt-5 pb-5 border-bottom border-top'>About Us</h2>

            <div className="container">
                <p className="mt-3">We are a weather checker company that tells you the details of weather in your desired city. When you enter the name of your city we will tell you about the following details in your city: </p>
                <ul className="mt-3">
                    <li>Current Temperature</li>
                    <li>Minimum Temperature</li>
                    <li>Maximum Temperature</li>
                    <li>Wind Speed </li>
                    <li>Wind Degree</li>
                    <li>Atmospheric Pressure</li>
                    <li>Humidity</li>
                    <li>Clouds</li>
                    <li>Weather</li>
                </ul>

                <p>
                    Want to check weather details in your city ?
                </p>

                <Link to="/">
                    <button type="submit" className="btn btn-secondary mt-1" > Click Here </button>
                </Link>

            </div>
        </div>
    )
}

export default About