import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PatientRegistration = () => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required').max(30, 'Name must be at most 30 characters'),
        age: Yup.number().required('Age is required').integer('Age must be an integer').min(18, 'Age must be at least 18'),
        phone_no: Yup.string()
            .required('Phone Number is required')
            .matches(/^\d{11}$/, 'Invalid phone number (must be 11 digits)'),
        password: Yup.string()
            .required('Password is required')
            .matches(/^\d{1,8}$/, 'Password must contain all digits and not more than 8 digits'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        city: Yup.string().required('City is required'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            phone_no: '',
            password: '',
            email: '',
            city: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                console.log('Fetching data from:', '/patientAPI');
                const response = await fetch('http://127.0.0.1:5000/patientAPI', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (response.ok) {
                    // Handle success response here
                    alert('Registration pending.');
                    // Redirect user or show success message
                } else {
                    // Handle error response here
                    const data = await response.json();
                    console.log(data);
                    alert('An error occurred during registration.');
                }
            } catch (error) {
                console.error('Error occurred:', error);
                alert('An error occurred during registration.');
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
                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-2 pb-2 pb-md-0 mb-md-5">Patient Registration Form</h3>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6 mb-2">
                                                <div className="form-outline">
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        className={`form-control ${formik.errors.name && formik.touched.name ? 'is-invalid' : ''}`}
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
                                                    <input
                                                        type="number"
                                                        id="age"
                                                        name="age"
                                                        className={`form-control ${formik.errors.age && formik.touched.age ? 'is-invalid' : ''}`}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.age}
                                                        required
                                                    />
                                                    <label className="form-label ms-1" htmlFor="age">
                                                        Age
                                                    </label>
                                                </div>
                                                {formik.touched.age && formik.errors.age ? (
                                                    <div className="invalid-feedback">{formik.errors.age}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4 d-flex align-items-center">
                                                <div className="form-outline datepicker w-100">
                                                    <input
                                                        type="text"
                                                        className={`form-control ${formik.errors.phone_no && formik.touched.phone_no ? 'is-invalid' : ''}`}
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
                                            <div className="col-md-6 mb-2">
                                                <div className="form-outline">
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        className={`form-control ${formik.errors.password && formik.touched.password ? 'is-invalid' : ''}`}
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
                                        <div className="row">
                                            <div className="col-md-6 mb-2 pb-2">
                                                <div className="form-outline">
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        className={`form-control ${formik.errors.email && formik.touched.email ? 'is-invalid' : ''}`}
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
                                            <div className="col-md-6 mb-2 pb-2">
                                                <div className="col-6">
                                                    <select
                                                        className={`form-control ${formik.errors.city && formik.touched.city ? 'is-invalid' : ''}`}
                                                        id="city"
                                                        name="city"
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        value={formik.values.city}
                                                        required
                                                    >
                                                        <option value=""disabled>
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
                                        <div className="mt-1 pt-1">
                                            <button className="btn btn-secondary blue-button-color" type="submit">
                                                Register
                                            </button>
                                        </div>
                                    </form>
                                    <p className="mt-3">
                                        Already have an account ?{' '}
                                        <a href="/patientlogin">
                                            <button className="btn btn-secondary yellow-button-color">Login</button>
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

export default PatientRegistration;
