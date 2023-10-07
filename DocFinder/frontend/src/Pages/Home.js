import React,{useEffect} from 'react'
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

            <section className='mt-5 pb-5 ' >
                <h2 className="text-center blue-colour mt-5 pt-5">Our User Reviews</h2>
                <div className="container">


                    <div id="testimonialCarousel" className="carousel slide text-center carousel-dark border rounded shadow pt-5 pb-5 mt-5" data-mdb-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="rounded-circle shadow-1-strong mb-4"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
                                    style={{ width: '150px' }} />
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <h6 className="mb-3">Maria Kate</h6>
                                        
                                        <p >
                                            <i className="fa fa-quote-left pe-2"></i>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                            doloremque.
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
                                <img className="rounded-circle shadow-1-strong mb-4"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
                                    style={{ width: '150px' }} />
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <h5 className="mb-3">John Doe</h5>
                                        <p>Web Developer</p>
                                        <p className="text-muted">
                                            <i className="fa fa-quote-left pe-2"></i>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                            nesciunt sint eligendi reprehenderit reiciendis.
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
                                <img className="rounded-circle shadow-1-strong mb-4"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" style={{ width: '150px' }} />
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <h5 className="mb-3">Anna Deynah</h5>
                                        <p>UX Designer</p>
                                        <p className="text-muted">
                                            <i className="fa fa-quote-left pe-2"></i>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                            doloremque.
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
                        <button className="carousel-control-prev" type="button" data-mdb-target="#testimonialCarousel"
                            data-mdb-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-mdb-target="#testimonialCarousel"
                            data-mdb-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home