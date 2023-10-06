import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div className='backgroundImage mt-2 '>
                <div className="container">
                    <h1 className="text-center pt-5">Welcome to <span className="yellow-colour" >DocFinder</span></h1>

                    <div className="row align-items-center">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <h4 className="mt-5 mx-5 text-center">
                                Looking for a Doctor near you?
                            </h4>

                            <div className="mt-4 mx-5 text-center">
                                <span className="dropdown show ms-2">
                                    <a className="btn btn-secondary yellow-button-color shadow" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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

            <section className='background mt-5 pb-5'  >
                <div className="container mt-5 ">

                    <h2 className="text-center blue-colour mt-5 pt-5">Book an online <span className="" >Appointment</span></h2>


                    <div className="row row-cols-1 row-cols-md-3 g-4 pt-5 ">
                        <div className="col">
                            <div className="card p-3 align-items-center shadow">
                                <img src={process.env.PUBLIC_URL + '/icon-home-1.svg'} className="card-img-top img-fluid  " alt="image-1" />
                                <div className="card-body">
                                    <h5 className="card-title yellow-colour text-center m-2 ">FIND A DOCTOR</h5>
                                    <p className="card-text text-center m-2 ">Find a well qualified and experienced Doctor in your city.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card p-3 align-items-center shadow">
                                <img src={process.env.PUBLIC_URL + '/icon-home-2.svg'} className="card-img-top img-fluid  " alt="image-2" />
                                <div className="card-body">
                                    <h5 className="card-title yellow-colour text-center m-2 ">VIEW PROFILE</h5>
                                    <p className="card-text text-center m-2 ">Visit profile of our registered Doctors before booking and appointment.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card p-3 align-items-center shadow">
                                <img src={process.env.PUBLIC_URL + '/icon-home-3.svg'} className="card-img-top img-fluid  " alt="image-3" />
                                <div className="card-body">
                                    <h5 className="card-title yellow-colour text-center m-2 ">BOOK A VISIT</h5>
                                    <p className="card-text text-center m-2 ">Check available options to book an appointment with a Doctor.</p>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="text-center">
                    <a className="btn btn-secondary yellow-button-color mt-5 shadow  " href="#" role="button" >
                        Find A Doctor
                    </a>
                    </div>
                    

                </div>
            </section>

        </>
    )
}

export default Home