import React, { useState, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

    const [cityName, setCityName] = useState('')
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`/${cityName}`)

    }

    const handleOnChange = useCallback((event) => {
        setCityName(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1));
      }, []);
    

    return (
        <div style={{ height: "620px", backgroundColor: "#031633" }}>
            <div className='cityName '>
                Enter the name of city
            </div>
            <form className="row g-2 mt-3 justify-content-center" onSubmit={handleSubmit}>
                <div className="col-auto">
                    <input type="text" className="form-control" id="cityName" value={cityName} placeholder="e.g Lahore" onChange={handleOnChange} />
                </div>
                <div className="col-auto ">
                    <button type="submit" className="btn btn-secondary mb-3" > Check Weather</button>
                </div>
            </form>

        </div>
    )
}

export default Home