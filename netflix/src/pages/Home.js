import React from 'react'

const Home = () => {
    return (
        <>
            <div className='backgroundImg'>
                <p className='tagline'>
                    Unlimited movies, TV shows, and more.
                </p>
                <p className='watchTagline'>
                    Watch anywhere. Cancel anytime.
                </p>
                <p className='emailTagline'>
                    Ready to watch? Enter your email to create or restart your membership
                </p>

                <form className="row g-3 justify-content-center mt-2" onSubmit={e => { e.preventDefault(); }}>

                    <div className="col-auto">
                        <label htmlFor="staticEmail2" className="visually-hidden ">Email</label>
                        <input type="email" className="form-control " id="staticEmail2" placeholder="Email" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-danger mb-3">Get Started</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Home