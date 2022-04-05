import React, { Component } from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';
import { toast } from 'react-toastify';
import axios from 'axios';
import "./register.css"


const Login = (props) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password:'',
        },
        validationSchema: yup.object({
            email: yup.string()
                  .email('Enter Valid Email Address')
                  .strict()
                  .trim()
                  .required('This Field Is Required'),
            password: yup.string()
                  .strict()
                  .trim()
                  .required('This Field Is Required'),
        }),
        onSubmit: (data) => {

              axios.post('http://localhost:5000/api/login',data)
              .then (res => {
                  localStorage.setItem('auth',JSON.stringify(res.data));
                  props.history.push('/home')
              })
              .catch(err =>{
                  toast.error(err.response.data)
              })

            // toast.success("Success Notification !");
        }
    });

  return (
    <div className="container mt-4">
        <div className="jumbotron">
            <h4>Login</h4>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input name="email" className="form-control" type="text" onChange={formik.handleChange} value={formik.values.email} />
                    {formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input name="password" className="form-control" type="password" onChange={formik.handleChange}  value={formik.values.password}/>
                    {formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" type="submit">Submit</button>
                    <a href="#"
                        onClick={() => {
                            window.location.href = 'register';
                        }}
                        >
                            Register
                        </a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login;