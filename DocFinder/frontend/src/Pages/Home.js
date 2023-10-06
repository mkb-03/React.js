import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div  className='backgroundImage'>
                <div className="container">
                    <h1 className="text-center pt-5">Welcome to <span className="yellow-colour" >Doc</span><span className="yellow-colour" >Finder</span></h1>

                    <div className="row align-items-center">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <h4 className="mt-5 mx-5 text-center">
                                Looking for a Doctor near you?
                            </h4>

                            <div className="mt-4 mx-5 text-center">
                                <span className="dropdown show ms-2">
                                    <a className="btn btn-secondary yellow-button-color" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Get Started
                                    </a>

                                    <div className="dropdown-menu custom-dropdown-menu me-2" aria-labelledby="dropdownMenuLink">
                                        <Link className="dropdown-item" href="/patientRegistration">Register as Patient</Link>
                                        <Link className="dropdown-item" href="/doctorRegistration">Register as Doctor</Link>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home