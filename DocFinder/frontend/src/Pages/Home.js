import React from 'react'

const Home = () => {
    return (
        <>
            <div  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/header-bg.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '75vh', width:'100%' }}>
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
                                        <a className="dropdown-item" href="/patientRegistration">Patient</a>
                                        <a className="dropdown-item" href="/doctorRegistration">Doctor</a>
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