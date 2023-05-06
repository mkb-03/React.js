import React from 'react'
import { Link } from 'react-router-dom'
var logo = require('../images/logo.png');

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                      <img className='imgSize' src={logo} alt="Netflix" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"> 
                                <Link className="nav-link" to="/Movies">Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Contact">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About Us</Link>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <button type="button" className="btn btn-danger">Sign In</button>
                        </form>
                    </div>
                </div>
            </nav>
           


        </>
    )
}

export default Navbar