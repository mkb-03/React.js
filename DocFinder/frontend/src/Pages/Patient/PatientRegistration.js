import React from 'react'

const PatientRegistration = () => {
    return (
        <>
            <section className="vh-75  gradient-custom "  >
                <div className="container py-5 h-75">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration" style={{borderRadius : "15px"}}>
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-2 pb-2 pb-md-0 mb-md-5">Patient Registration Form</h3>
                                    <form method="post" action="/patientAPI" onsubmit="return validateForm()">

                                        <div className="row">
                                            <div className="col-md-6 mb-2">

                                                <div className="form-outline">
                                                    <input type="text" id="name" name="name" className="form-control form-control" required />
                                                    <label className="form-label ms-1" for="name">Name</label>
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-2">

                                                <div className="form-outline">
                                                    <input type="number" id="age" name="age" className="form-control form-control" required />
                                                    <label className="form-label ms-1" for="age">Age</label>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4 d-flex align-items-center">

                                                <div className="form-outline datepicker w-100">
                                                    <input type="text" className="form-control form-control" name="phone_no" id="phone_no" required />
                                                    <label for="phone_no" className="form-label ms-1">Phone Number</label>
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <div className="form-outline">
                                                    <input type="password" id="password" name="password" className="form-control form-control" required />
                                                    <label className="form-label ms-1" for="password">Password</label>
                                                </div>


                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-2 pb-2">

                                                <div className="form-outline">
                                                    <input type="email" id="email" name="email" className="form-control form-control" required />
                                                    <label className="form-label ms-1" for="email">Email</label>
                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-2 pb-2">

                                                <div className="col-6">

                                                    <select className="select form-control" id="city" name="city" required>
                                                        <option value="" selected disabled>Select city</option>
                                                        <option value="Karachi">Karachi</option>
                                                        <option value="Lahore">Lahore</option>
                                                        <option value="Islamabad">Islamabad</option>
                                                        <option value="Rawalpindi">Rawalpindi</option>
                                                        <option value="Faisalabad">Faisalabad</option>
                                                        <option value="Multan">Multan</option>
                                                        <option value="Hyderabad">Hyderabad</option>
                                                        <option value="Peshawar">Peshawar</option>
                                                        <option value="Quetta">Quetta</option>
                                                        <option value="Gujranwala">Gujranwala</option>
                                                    </select>
                                                    <label className="form-label select-label ms-2">City</label>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="mt-1 pt-1">
                                            <input className="btn btn-secondary blue-button-color" type="submit" value="Register" />
                                        </div>

                                    </form>

                                    <p className="mt-3" >Already have an account ? <a href="/patientlogin"> <button className="btn btn-secondary yellow-button-color">Login</button> </a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PatientRegistration