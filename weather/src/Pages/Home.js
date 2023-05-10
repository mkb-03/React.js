import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

    const [cityName, setCityName] = useState('')
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`/${cityName}`)
    }

    return (
        <div style={{ height: "620px", backgroundColor: "#031633" }}>
            <div className='cityName'>
                Enter the name of city
            </div>
            <form className="row g-2 mt-3 justify-content-center" onSubmit={handleSubmit}>
                <div className="col-auto">
                    <input type="text" className="form-control" id="cityName" value={cityName} placeholder="e.g Lahore" onChange={(event) => setCityName(event.target.value)} />
                </div>
                <div className="col-auto ">
                    <button type="submit" className="btn btn-primary mb-3" > Check </button>
                </div>
            </form>

        </div>
    )
}

export default Home