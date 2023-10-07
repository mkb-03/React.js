import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <div className='backgroundImage mt-2 '>
                <div className="container pt-3">
                    <h1 className="text-center pt-5">Welcome to <span className="yellow-colour" >DocFinder</span></h1>

                    <div className="row align-items-center">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <h4 className="mt-5 mx-5 text-center">
                                Looking for a Doctor near you?
                            </h4>

                            <div className="mt-4 mx-5 text-center">
                                <span className="dropdown dropdown-center show ms-2">
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

                    <h2 className="text-center blue-colour mt-5 pt-5">Book an Online Appointment</h2>


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
                            Find Doctor
                        </a>
                    </div>


                </div>
            </section>

            {/* Testimonials */}
            <section className="mt-5 pb-5">
                <h2 className="text-center blue-colour mt-5 pt-5">Our User Reviews</h2>
                <div className="container">
                    <div
                        id="testimonialCarousel"
                        className="carousel slide text-center carousel-dark border rounded shadow pt-5 pb-5 mt-5"
                    >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    className="rounded-circle shadow-1-strong mb-4"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                                    alt="avatar"
                                    style={{ width: '150px' }}
                                />
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <h6 className="mb-3">Maria Kate</h6>
                                        <p>
                                            <i className="fa fa-quote-left pe-2"></i>
                                            I had an amazing experience using DocFinder to find a doctor for my recent health concern. The platform made it so easy to browse through a list of qualified doctors in my area, read their profiles, and book an appointment.
                                        </p>
                                    </div>
                                </div>
                                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                    <li><i className="fa fa-star fa-sm"></i></li>
                                    <li><i className="fa fa-star fa-sm"></i></li>
                                    <li><i className="fa fa-star fa-sm"></i></li>
                                    <li><i className="fa fa-star fa-sm"></i></li>
                                    <li><i className="fa fa-star fa-sm"></i></li>
                                </ul>
                            </div>
                            <div className="carousel-item">
                                <img
                                    className="rounded-circle shadow-1-strong mb-4"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                                    alt="avatar"
                                    style={{ width: '150px' }}
                                />
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <h5 className="mb-3">John Doe</h5>

                                        <p className="text-muted">
                                            <i className="fa fa-quote-left pe-2"></i>
                                            DocFinder truly made a difference in my healthcare journey. After a quick search, I found a doctor who specialized in the exact condition I was dealing with. Not only did the doctor provide me with expert advice, but they also took the time to explain everything in a way that I could understand.
                                        </p>
                                    </div>
                                </div>
                                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                    <li><i className="fa fa-star fa-sm"></i></li>
                                    <li><i className="fa fa-star fa-sm"></i></li>
                                    <li><i className="fa fa-star fa-sm"></i></li>
                                    <li><i className="fa fa-star fa-sm"></i></li>
                                    <li><i className="fa fa-star fa-sm"></i></li>
                                </ul>
                            </div>
                            <div className="carousel-item">
                                <img
                                    className="rounded-circle shadow-1-strong mb-4"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                    alt="avatar"
                                    style={{ width: '150px' }}
                                />
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <h5 className="mb-3">Anna Deynah</h5>

                                        <p className="text-muted">
                                            <i className="fa fa-quote-left pe-2"></i>
                                            I was skeptical about finding a doctor online, but DocFinder exceeded my expectations. I selected a doctor based on patient reviews and ratings, and it turned out to be a fantastic choice. The doctor was not only knowledgeable but also very patient.
                                        </p>
                                    </div>
                                </div>
                                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                    <li><i className="fa fa-star fa-sm"></i></li>
                                    <li><i className="fa fa-star fa-sm"></i></li>
                                    <li><i className="fa fa-star fa-sm"></i></li>
                                    <li><i className="fa fa-star fa-sm"></i></li>
                                    <li><i className="fa fa-star fa-sm"></i></li>
                                </ul>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>

            <footer class="blue-background text-white py-4 mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <h5 className='yellow-colour' >About Us</h5>
                            <p>DocFinder simplifies healthcare by connecting you with trusted doctors and practitioners.</p>
                        </div>
                        <div class="col-md-4">
                            <h5 className='yellow-colour' >Quick Links</h5>
                            <ul class="list-unstyled  ">
                                <li><a className='custom-link' href="#">Home</a></li>
                                <li><a className='custom-link' href="#">Services</a></li>
                                <li><a className='custom-link' href="#">Find Doctor</a></li>
                                <li><a className='custom-link' href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <h5 className='yellow-colour' >Contact Us</h5>
                            <address>
                                <p><i class="fa fa-map-marker me-1"></i> 123 Main St, City</p>
                                <p><i class="fa fa-phone me-1 "></i> (123) 456-7890</p>
                                <p><i class="fa fa-envelope me-1 "></i> info@example.com</p>
                            </address>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Home