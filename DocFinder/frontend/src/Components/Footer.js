import React from 'react'

const Footer = () => {
    return (
        <>

            <footer className="blue-background text-white py-4 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5 className='yellow-colour' >About Us</h5>
                            <p>DocFinder simplifies healthcare by connecting you with trusted doctors and practitioners.</p>
                        </div>
                        <div className="col-md-4">
                            <h5 className='yellow-colour' >Quick Links</h5>
                            <ul className="list-unstyled  ">
                                <li><a className='custom-link' href="/">Home</a></li>
                                <li><a className='custom-link' href="#">Services</a></li>
                                <li><a className='custom-link' href="#">Find Doctor</a></li>
                                <li><a className='custom-link' href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5 className='yellow-colour' >Contact Us</h5>
                            <address>
                                <p><i className="fa fa-map-marker me-1"></i> 123 Main St, City</p>
                                <p><i className="fa fa-phone me-1 "></i> (123) 456-7890</p>
                                <p><i className="fa fa-envelope me-1 "></i> info@example.com</p>
                            </address>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer