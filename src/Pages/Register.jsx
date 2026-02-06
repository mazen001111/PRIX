import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast';
import { FaGripfire } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

export default function Register() {

  const submit = (values) => {
    let account = {
      username: values.username,
      email: values.email,
      password: values.password
    }
    let endPoint = "/api/auth/local/register"
    let url = API_URL + endPoint;
    const postData = async () => {
      try {
        let res = await axios.post(url, account)
        sessionStorage.setItem("useLogin", res.data.jwt)
      } catch (error) {
        toast.error(error?.response?.data?.error?.message || "Register failed");
      }
    }
    postData();

  }
  const registerValidationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .required('Username is required'),

    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),

    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
  });
  return (
    <div className='w-full h-full flex justify-center items-center py-20'>
      <Formik initialValues={{ username: "", email: "", password: "", confirmPassword: "" }} onSubmit={(values) => submit(values)} validationSchema={registerValidationSchema}>
        <Form className='w-100 max-w-[90%] bg-[#14181f] p-5 rounded-xl flex flex-col gap-3 md:gap-6'>
          <div className='text-red-600 text-2xl mb-5 font-semibold flex flex-row justify-center gap-2 items-center w-full text-center'>Welcome To <h1 className='font-logo font-bold text-2xl dark:text-[#ffffff] items-center mt-0.5  flex flex-row'>PRIX<FaGripfire className='text-red-600' /></h1>!</div>
          <Field autoComplete="" name="username" type="text" placeholder="Enter username" className="bg-[#0c0e12] rounded-lg w-full outline-0 border border-[#8f96a33f] p-3 text-[#8F96A3]  " />
          <ErrorMessage name='username' component={"p"} className='text-red-600 font-light -mt-3 ml-1.5' />
          <Field autoComplete="" name="email" type="email" placeholder="Enter Email" className="bg-[#0c0e12] rounded-lg w-full outline-0 border border-[#8f96a33f] p-3 text-[#8F96A3]  " />
          <ErrorMessage name='email' component={"p"} className='text-red-600 font-light -mt-3 ml-1.5' />
          <Field autoComplete="" type="password" name="password" placeholder="Enter password" className="bg-[#0c0e12] rounded-lg w-full outline-0 border border-[#8f96a33f] p-3 text-[#8F96A3]  " />
          <ErrorMessage name='password' component={"p"} className='text-red-600 font-light -mt-3 ml-1.5' />
          <Field autoComplete="" type="password" name="confirmPassword" placeholder="Confirm Password" className="bg-[#0c0e12] rounded-lg w-full outline-0 border border-[#8f96a33f] p-3 text-[#8F96A3]  " />
          <ErrorMessage name='confirmPassword' component={"p"} className='text-red-600 font-light -mt-3 ml-1.5' />
          <button type='submit' className='w-full cursor-pointer bg-red-700 text-[#ffffff] font-semibold flex justify-center items-center py-3 rounded-lg'>Register</button>
          <p className='w-full text-center font-medium text-[#ffffff]'>Already Have Account ? <Link to={"/Login"} className='text-red-600'>Login</Link></p>
        </Form>
      </Formik>
    </div>
  )
}
