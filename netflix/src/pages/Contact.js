import React from 'react'
import { Link } from 'react-router-dom'
let google = require('../images/google.png');
let apple = require('../images/apple.png');

let googleAppstore = "https://play.google.com/store/apps/details?id=com.netflix.mediaclient&pli=1"
let iosAppstore = "https://search.itunes.apple.com/WebObjects/MZContentLink.woa/wa/link?mt=8&path=apps%2fnetflix"

const Contact = () => {
  return (
    <>
      <div className=' mx-5 mt-4' >
        <Link className="btn btn-danger shadow-lg p-2 mb-5 mt-3 rounded" aria-current="page" to="/"> Back to Home</Link>

        <div className="row">
          <div className="col-9 ">
            <h1 className="mt-1 text">Contact Customer Service</h1>
          </div>

          <div className="col-8 ">
            <h2 className="mt-1 h2">Call us from the Netflix app</h2>
            <p className='p'>
              Contacting Netflix is now easier than ever when you contact us from the Netflix app on your Android or iOS phone or tablet! Calling through the app is free - all you need is an internet or cellular connection.
            </p>

            <div className='col-8 pb-4 border-bottom border-secondary'>
              <h6 className='mt-2 h6 ' >Download the Netflix app: </h6>
              <a  href={googleAppstore} target={"_blank"} rel='noopener noreferrer' >
                <img src={google} className='badges' />
              </a>
              <a href={iosAppstore} target={"_blank"} rel='noopener noreferrer' >
                <img src={apple} className='badgesApple' />
              </a>
            </div>

          </div>

          <div className="col-4">
            <b>Popular Questions</b> <br />
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>




      </div>

      <div className=" col-7 mx-5 mt-4">
        <h2 className="mt-1 h2">Call us from any phone</h2>
        <button type="button" className="btn btn-outline-secondary mt-2 px-3">Call Us</button>
      </div>


    </>
  )
}

export default Contact