import React from 'react'

const DoctorRegistration = () => {
  return (
    <>
        <section class="vh-75 background gradient-custom"  >
  <div class="container py-5 h-75">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style={{borderRadius:' 15px'}}>
          <div class="card-body p-3 p-md-5">
            <h3 class="mb-2 pb-1 pb-md-0 mb-md-2">Doctor Registration Form</h3>
            <form  method="post" action="/doctorAPI" onsubmit="return validateForm()" >

              <div class="row">
                <div class="col-md-6 mb-2">

                  <div class="form-outline">
                    <input type="text" id="name" name="name" class="form-control form-control" required/>
                    <label class="form-label ms-1" for="name">Name</label>
                  </div>

                </div>
                <div class="col-md-6 mb-2">
                  <div class="form-outline">
                    <select id="speciality" name="speciality" class="form-select" required>
                      <option value="" selected disabled>Select Specialty</option>
                      <option value="Nutritionist">Nutritionist</option>
                      <option value="Gynecologist">Gynecologist</option>
                      <option value="Gastroenterologist">Gastroenterologist</option>
                      <option value="Skin-specialist">Skin Specialist</option>
                      <option value="Eye-specialist">Eye Specialist</option>
                      <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
                      <option value="Endocrinologists">Endocrinologists</option>
                      <option value="General Surgeon">General Surgeon</option>
                    </select>
                    <label class="form-label ms-1" for="speciality">Specialty</label>
                  </div>
                </div>
              </div>

                <div class="row">
                <div class="col-md-6 mb-2 pb-2">

                  <div class="form-outline">
                    <input type="text" id="experience" name="experience" step="0.1" class="form-control form-control" required/>
                    <label class="form-label ms-1" for="experience" >Experience (in years)</label>
                  </div>

                </div>
                <div class="col-md-6 mb-2 pb-2">

                <div class="col-6">

                  <select class="select form-control" id="city" name="city" required>
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
                  <label class="form-label select-label ms-2">City</label>

                </div>

                </div>

              </div>

                 <div class="row">
                <div class="col-md-6 mb-2 pb-2">

                  <div class="form-outline">
                    <input type="email" id="email" name="email"  class="form-control form-control" required/>
                    <label class="form-label ms-1" for="email">Email</label>
                  </div>

                </div>
                <div class="col-md-6 mb-2 pb-2">

                <div class="col-6">

                  <select class="select form-control" id="gender" name="gender">

                    <option value="1">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <label class="form-label select-label ms-2">Gender</label>

                </div>

                </div>

              <div class="row">
                <div class="col-md-6 mb-2 d-flex align-items-center">

                  <div class="form-outline datepicker w-100">
                    <input type="text" class="form-control form-control" name="phone_no" id="phone_no" required/>
                    <label for="phone_no" class="form-label ms-1">Phone Number</label>
                  </div>

                </div>
                <div class="col-md-6 mb-2">
                     <div class="form-outline">
                    <input type="password" id="password" name="password" class="form-control form-control" required/>
                    <label class="form-label ms-1" for="password">Password</label>
                  </div>


                </div>
              </div>
                     <div class="row">
                <div class="col-md-6 mb-2 d-flex align-items-center">

                  <div class="form-outline datepicker w-100">
                    <input type="text" class="form-control form-control" name="hospital_name"  id="hospital_name" required/>
                    <label for="hospital_name" class="form-label ms-1">Hospital Name:</label>
                  </div>

                </div>
                     </div>

              </div>

              <div class="mt-2 pt-2">
                <input class="  btn btn-secondary blue-button-color" type="submit" value="Register" />
              </div>

            </form>

               <p class="mt-3" >Already have an account ? <a href="/doctorlogin"> <button class="btn btn-secondary yellow-button-color">LogIn here</button> </a></p>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>    
    </>
  )
}

export default DoctorRegistration