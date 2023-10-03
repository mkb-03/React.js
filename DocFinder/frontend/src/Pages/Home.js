import React from 'react'

const Home = () => {
    return (
        <>
            <div  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/header-bg.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', Height: '100%', width:'100vw' }}>
                <div class="container">
                    <h1 class="text-center pt-5">Welcome to <span class="yellow-colour" >Doc</span><span class="yellow-colour" >Finder</span></h1>

                    <div class="row align-items-center">
                        <div class="col-1"></div>
                        <div class="col-10">
                            <h4 class="mt-5 mx-5">
                                Having trouble finding a Doctor near you and booking an appointment?
                            </h4>

                            <h5 class="mt-2 mx-5">
                                Register as a patient or a doctor to get started:
                                <span class="dropdown show me-2">
                                    <a class="btn btn-secondary yellow-button-color" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Register
                                    </a>

                                    <div class="dropdown-menu custom-dropdown-menu me-2" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item" href="/patientRegistration">Patient</a>
                                        <a class="dropdown-item" href="/doctorRegistration">Doctor</a>
                                    </div>
                                </span>
                            </h5>
                        </div>
                        <div class="col-1"></div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home