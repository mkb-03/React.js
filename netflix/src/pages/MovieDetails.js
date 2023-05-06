import React from 'react'
import data from '../data'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const MovieDetails = () => {
    const { id } = useParams();
    // console.log(id)
    const movie = data.find(item => item.id === parseInt(id))
    const { title, image, year, rating, description, duration } = movie
    return (
        <>
            <div className='mt-5 mx-5 ' >
                <Link className="btn btn-danger shadow-lg p-2 rounded " aria-current="page" to="/"> Back to Home</Link>
                <h1 className="mt-5 text">Details: </h1>
            </div>

            <div className="container mt-5">
                <div className="card mb-3 shadow-lg p-2 mt-2 mb-5 rounded" style={{maxWidth: '600px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={image} className="img-fluid rounded-start " style={{minHeight: '100%'}} alt="..." />
                        </div>
                        <div className="col-md-8 ">
                            <div className="card-body ">
                                <h3 className="card-title mt-2">{title}</h3>
                                <h5 className="card-title mt-4">Release year: {year}</h5>
                                <h6 className="card-title mt-2">Rating: {rating}</h6>
                                <h6 className="card-title mt-2"> {duration}</h6>
                                <p className='card-title mt-3'>{description}</p>
                                <button className="btn btn-danger mt-3 shadow-lg p-2 rounded ">Watch Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MovieDetails