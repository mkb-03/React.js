import React from 'react'

const Home = () => {


    return (
        <div style={{ height: "620px", backgroundColor: "#031633" }}>
            <div className='cityName'>
                Enter the name of city
            </div>
            <form className="row g-2 mt-3 justify-content-center">
                <div className="col-auto">
                    <input type="text" className="form-control" id="text" placeholder="e.g Lahore" />
                </div>
                <div className="col-auto ">
                    <button type="submit" className="btn btn-primary mb-3"> Check </button>
                </div>
            </form>
 
        </div>
    )
}

export default Home