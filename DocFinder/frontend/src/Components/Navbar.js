import React from 'react';
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-2 mt-1 nav-text">
                <div className="container-fluid">
                    <Link className="navbar-brand  " to="/">
                        <span className='yellow-colour' >Doc</span>
                        <span className='blue-colour'>Finder</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Find Doctor</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">About Us</Link>
                            </li>

                        </ul>

                        <div className="d-flex" >

                            <div className="dropdown show me-2">
                                <Link className="btn btn-secondary blue-button-color " to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Register
                                </Link>

                                <div className="dropdown-menu custom-dropdown-menu me-2" aria-labelledby="dropdownMenuLink">
                                    <Link className="dropdown-item" to="/patientRegistration">Patient</Link>
                                    <Link className="dropdown-item" to="/doctorRegistration">Doctor</Link>
                                </div>
                            </div>

                            <div className="dropdown show me-4">
                                <Link className="btn btn-secondary blue-button-color " to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Log In
                                </Link>

                                <div className="dropdown-menu custom-dropdown-menu me-2" aria-labelledby="dropdownMenuLink">
                                    <Link className="dropdown-item  " to="/patientlogin">Patient</Link>
                                    <Link className="dropdown-item" to="/doctorlogin">Doctor</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>



        </>
    )
}





export default Navbar