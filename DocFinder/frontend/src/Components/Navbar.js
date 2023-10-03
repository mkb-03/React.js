import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg p-2 mt-1 nav-text">
                <div className="container-fluid">
                    <a className="navbar-brand  " href="#">
                        <span className='yellow-colour' >Doc</span>
                        <span className='blue-colour'>Finder</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Find Doctor</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>

                        </ul>

                        <div class="d-flex" >

                            <div class="dropdown show me-2">
                                <a class="btn btn-secondary blue-button-color " href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Register
                                </a>

                                <div class="dropdown-menu custom-dropdown-menu me-2" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item" href="/patientRegistration">Patient</a>
                                    <a class="dropdown-item" href="/doctorRegistration">Doctor</a>
                                </div>
                            </div>

                            <div class="dropdown show me-4">
                                <a class="btn btn-secondary blue-button-color " href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Log In
                                </a>

                                <div class="dropdown-menu custom-dropdown-menu me-2" aria-labelledby="dropdownMenuLink">
                                    <a class="dropdown-item  " href="/patientlogin">Patient</a>
                                    <a class="dropdown-item" href="/doctorlogin">Doctor</a>
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