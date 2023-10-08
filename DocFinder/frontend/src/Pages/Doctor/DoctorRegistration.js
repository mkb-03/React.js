import React,{useState} from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const DoctorRegistration = () => {

    const [registrationMessage, setRegistrationMessage] = useState('');

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required').max(30, 'Name must be at most 30 characters'),
        speciality: Yup.string().required('Specialty is required'),
        experience: Yup.number().required('Experience is required').positive().integer(),
        city: Yup.string().required('City is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        gender: Yup.string().required('Gender is required').oneOf(['Male', 'Female', 'Other'], 'Invalid gender'),
        phone_no: Yup.string()
            .required('Phone Number is required')
            .matches(/^\d{11}$/, 'Invalid phone number (must be 11 digits)'),
        password: Yup.string()
            .required('Password is required')
            .matches(/^\d{1,8}$/, 'Password must contain all digits and not more than 8 digits'),
        hospital_name: Yup.string().required('Hospital Name is required'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            speciality: '',
            experience: '',
            city: '',
            email: '',
            gender: '',
            phone_no: '',
            password: '',
            hospital_name: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await fetch('/doctorAPI', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (response.status === 200) {
                    setRegistrationMessage('Registration successful.');
                    // You can redirect the user to a login page or show a success message here.
                } else {
                    const data = await response.json();
                    setRegistrationMessage(data.error || 'An error occurred during registration.');
                }
            } catch (error) {
                console.error('Error occurred:', error);
                setRegistrationMessage('An error occurred during registration.');
            }
        },
    
    });

    return (
        <>
            <section className="vh-75 background gradient-custom">
                <div className="container py-5 h-75">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col-12 col-lg-9 col-xl-7">
                            <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-3 p-md-5">
                                    <h3 className="mb-2 pb-1 pb-md-0 mb-md-2">Doctor Registration Form</h3>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6 mb-2">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        className={`form-control form-control ${formik.errors.name && formik.touched.name ? 'is-invalid' : ''}`}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.name}
                                                        required
                                                    />
                                                    <label className="form-label ms-1" htmlFor="name">
                                                        Name
                                                    </label>
                                                </div>
                                                {formik.touched.name && formik.errors.name ? (
                                                    <div className="invalid-feedback">{formik.errors.name}</div>
                                                ) : null}
                                            </div>
                                            <div className="col-md-6 mb-2">
                                                <div className="form-outline">
                                                    <select
                                                        id="speciality"
                                                        name="speciality"
                                                        className={`form-select ${formik.errors.speciality && formik.touched.speciality ? 'is-invalid' : ''}`}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.speciality}
                                                        required
                                                    >
                                                        <option value="" disabled>
                                                            Select Specialty
                                                        </option>
                                                        <option value="Nutritionist">Nutritionist</option>
                                                        <option value="Gynecologist">Gynecologist</option>
                                                        <option value="Gastroenterologist">Gastroenterologist</option>
                                                        <option value="Skin-specialist">Skin Specialist</option>
                                                        <option value="Eye-specialist">Eye Specialist</option>
                                                        <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
                                                        <option value="Endocrinologists">Endocrinologists</option>
                                                        <option value="General Surgeon">General Surgeon</option>
                                                    </select>
                                                    <label className="form-label ms-1" htmlFor="speciality">
                                                        Specialty
                                                    </label>
                                                </div>
                                                {formik.touched.speciality && formik.errors.speciality ? (
                                                    <div className="invalid-feedback">{formik.errors.speciality}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                       
                                        {/* Experience */}
                                        <div className="row">
                                            <div className="col-md-6 mb-2 pb-2">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        id="experience"
                                                        name="experience"
                                                        step="0.1"
                                                        className={`form-control form-control ${formik.errors.experience && formik.touched.experience ? 'is-invalid' : ''}`}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.experience}
                                                        required
                                                    />
                                                    <label className="form-label ms-1" htmlFor="experience">
                                                        Experience (in years)
                                                    </label>
                                                </div>
                                                {formik.touched.experience && formik.errors.experience ? (
                                                    <div className="invalid-feedback">{formik.errors.experience}</div>
                                                ) : null}
                                            </div>
                                            {/* City */}
                                            <div className="col-md-6 mb-2 pb-2">
                                                <div className="col-6">
                                                    <select
                                                        className={`select form-control ${formik.errors.city && formik.touched.city ? 'is-invalid' : ''}`}
                                                        id="city"
                                                        name="city"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.city}
                                                        required
                                                    >
                                                        <option value=""  disabled>
                                                            Select City
                                                        </option>
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
                                                {formik.touched.city && formik.errors.city ? (
                                                    <div className="invalid-feedback">{formik.errors.city}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        {/* Email */}
                                        <div className="row">
                                            <div className="col-md-6 mb-2 pb-2">
                                                <div className="form-outline">
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        className={`form-control form-control ${formik.errors.email && formik.touched.email ? 'is-invalid' : ''}`}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.email}
                                                        required
                                                    />
                                                    <label className="form-label ms-1" htmlFor="email">
                                                        Email
                                                    </label>
                                                </div>
                                                {formik.touched.email && formik.errors.email ? (
                                                    <div className="invalid-feedback">{formik.errors.email}</div>
                                                ) : null}
                                            </div>
                                            {/* Gender */}
                                            <div className="col-md-6 mb-2 pb-2">
                                                <div className="col-6">
                                                    <select
                                                        className={`select form-control ${formik.errors.gender && formik.touched.gender ? 'is-invalid' : ''}`}
                                                        id="gender"
                                                        name="gender"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.gender}
                                                        required
                                                    >
                                                        <option value="1">Select Gender</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Other">Other</option>
                                                    </select>
                                                    <label className="form-label select-label ms-2">Gender</label>
                                                </div>
                                                {formik.touched.gender && formik.errors.gender ? (
                                                    <div className="invalid-feedback">{formik.errors.gender}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        {/* Phone Number */}
                                        <div className="row">
                                            <div className="col-md-6 mb-2 d-flex align-items-center">
                                                <div className="form-outline datepicker w-100">
                                                    <input
                                                        type="text"
                                                        className={`form-control form-control ${formik.errors.phone_no && formik.touched.phone_no ? 'is-invalid' : ''}`}
                                                        name="phone_no"
                                                        id="phone_no"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.phone_no}
                                                        required
                                                    />
                                                    <label htmlFor="phone_no" className="form-label ms-1">
                                                        Phone Number
                                                    </label>
                                                </div>
                                                {formik.touched.phone_no && formik.errors.phone_no ? (
                                                    <div className="invalid-feedback">{formik.errors.phone_no}</div>
                                                ) : null}
                                            </div>
                                            {/* Password */}
                                            <div className="col-md-6 mb-2">
                                                <div className="form-outline">
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        className={`form-control form-control ${formik.errors.password && formik.touched.password ? 'is-invalid' : ''}`}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.password}
                                                        required
                                                    />
                                                    <label className="form-label ms-1" htmlFor="password">
                                                        Password
                                                    </label>
                                                </div>
                                                {formik.touched.password && formik.errors.password ? (
                                                    <div className="invalid-feedback">{formik.errors.password}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        {/* Hospital Name */}
                                        <div className="row">
                                            <div className="col-md-6 mb-2 d-flex align-items-center">
                                                <div className="form-outline datepicker w-100">
                                                    <input
                                                        type="text"
                                                        className={`form-control form-control ${formik.errors.hospital_name && formik.touched.hospital_name ? 'is-invalid' : ''}`}
                                                        name="hospital_name"
                                                        id="hospital_name"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.hospital_name}
                                                        required
                                                    />
                                                    <label htmlFor="hospital_name" className="form-label ms-1">
                                                        Hospital Name
                                                    </label>
                                                </div>
                                                {formik.touched.hospital_name && formik.errors.hospital_name ? (
                                                    <div className="invalid-feedback">{formik.errors.hospital_name}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        {/* Submit button */}
                                        <div className="mt-2 pt-2">
                                            <button type="submit" className="btn btn-secondary blue-button-color">
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                    <p className="mt-3">
                                        Already have an account ?{' '}
                                        <a href="/doctorlogin">
                                            {' '}
                                            <button className="btn btn-secondary yellow-button-color">LogIn here</button>{' '}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DoctorRegistration;
