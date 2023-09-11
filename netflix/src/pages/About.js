import React from 'react'
import { Link } from 'react-router-dom';

let img = require('../images/about.png');
const About = () => {
  return (
    <>
      <div className='mt-4 mx-5' >
        <Link className="btn btn-danger shadow p-2 mt-3 mb-5 rounded " aria-current="page" to="/"> Back to Home</Link>

        <h1 className="mt-1 text">What is Netflix ?</h1>
        <div className=' mt-4 '>
          <img src={img} alt="" className='aboutImg' />
        </div>
      </div>
      <div className='mx-5 mt-5 col-7 pb-5 p'>
        <p>
          Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies on an internet-connected device.  <br /><br />
          Depending on your plan, you can also download TV shows and movies to your iOS, Android, or Windows 10 device and watch without an internet connection.<br /><br />
          If you're already a member and would like to learn more about using Netflix, visit Getting started with Netflix.


        </p>
      </div>
    </>
  )
}

export default About