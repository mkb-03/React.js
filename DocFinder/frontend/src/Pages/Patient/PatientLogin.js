import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const PatientLogin = () => {
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await fetch('http://127.0.0.1:5000/patientLogin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });

                if (response.ok) {
                    // Redirect to the patientMainPage
                    // You can use react-router or another method for navigation
                    window.location.href = '/patientMainPage';
                } else {
                    const errorMessage = await response.text();
                    alert(errorMessage);
                }
            } catch (error) {
                console.error('Error occurred:', error);
                alert('Error: Unexpected response from the server.');
            }
        },
    });

    return (
        <section className="vh-75 gradient-custom background">
            <div className="container py-5 h-75">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }}>
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-2 pb-2 pb-md-0 mb-md-5">Patient Login</h3>
                                <form onSubmit={formik.handleSubmit}>
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
                                                {formik.touched.email && formik.errors.email && (
                                                    <div className="invalid-feedback">{formik.errors.email}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
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
                                                {formik.touched.password && formik.errors.password && (
                                                    <div className="invalid-feedback">{formik.errors.password}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2 pt-2">
                                        <button type="submit" className="btn btn-secondary blue-button-color">
                                            Login
                                        </button>
                                    </div>
                                </form>
                                <p className="mt-3">
                                    Don't have an account ?{' '}
                                    <a href="/patientRegistration">
                                        <button className="btn btn-secondary yellow-button-color">Register</button>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PatientLogin;
