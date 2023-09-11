import React from 'react'
import { Link } from 'react-router-dom';

const Movies = ({ movieItems }) => {
  return (
    <>
      <div className='mt-5 mx-5 ' >
        <Link className="btn btn-danger shadow p-2  mb-5 rounded " aria-current="page" to="/"> Back to Home</Link>
        <h1 className="text">Latest Movies: </h1>

        <div className="container mx-5 mt-5 row row-cols-1 row-cols-md-3">

          {movieItems.map((movieItem) => {
            const { id, title, image, year, rating } = movieItem
            
            return (
              <div className='col mb-4' key={id}  >
                
                <div className= "card mt-3 " style={{ width: '18rem', display : 'flex', flexWrap : 'wrap' }}>
                  <img src={image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className="card-title mt-2">{title}</h4>
                    <h5 className="card-title mt-3">Release year: {year}</h5>
                    <h6 className="card-title mt-2">Rating: {rating}</h6>
                    <Link to= {`/MovieDetails/${id}`} className="btn btn-danger mt-4">Details</Link>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </>
  )
}

export default Movies