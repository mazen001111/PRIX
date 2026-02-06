import axios from 'axios'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast';
import { FaGripfire } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useLogin } from '../store/LoginState';

export default function Login() {
  const { login } = useLogin()

  const nav = useNavigate()
  const submit = (values) => {
    let account = {
      identifier: values.email,
      password: values.password
    }
    let endPoint = "/api/auth/local"
    let url = API_URL + endPoint;
    const postData = async () => {
      try {
        let res = await axios.post(url, account)

        if (values.remindMe) {
          login(res.data.jwt, values.remindMe)
        } else {
          sessionStorage.setItem("useLogin", res.data.jwt)
        }

        toast.success("Login Succeded")
        nav("/")
      } catch (error) {
        toast.error(error?.response?.data?.error?.message || "Login failed");

      }
    }
    postData();
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });
  return (
    <div className='w-full h-full flex justify-center items-center py-20'>
      <Formik initialValues={{ remindMe: false, email: "", password: "" }} onSubmit={(values) => submit(values)} validationSchema={validationSchema}>
        <Form className='w-100 max-w-[90%] bg-[#14181f] p-5 rounded-xl flex flex-col gap-3 md:gap-6'>
          <h1 className='text-red-600 text-xl min-[404px]:text-2xl mb-3 font-semibold flex flex-row justify-center gap-2 items-center w-full text-center'>Welcome Back To <h1 className='font-logo font-bold text-xl min-[404px]:text-2xl dark:text-[#ffffff] items-center mt-0.5  flex flex-row'>PRIX<FaGripfire className='text-red-600' /></h1>!</h1>
          <Field autoComplete="" name="email" placeholder="Enter Email" className="bg-[#0c0e12] rounded-lg w-full outline-0 border border-[#8f96a33f] p-3 text-[#8F96A3]  " />
          <ErrorMessage name='email' component={"p"} className='text-red-600 font-light -mt-3 ml-1.5' />
          <Field type="password" autoComplete="" name="password" placeholder="Enter password" className="bg-[#0c0e12] rounded-lg w-full outline-0 border border-[#8f96a33f] p-3 text-[#8F96A3]  " />
          <ErrorMessage name='password' component={"p"} className='text-red-600 font-light -mt-3 ml-1.5' />
          <label className='flex flex-row gap-2 text-[#ffffff] text-md ml-2 -mt-1.5 md:-mt-3 -mb-1.5 md:-mb-3'>
            <Field name="remindMe" type="checkbox" />Remember me
          </label>
          <button type='submit' className='w-full cursor-pointer bg-red-700 text-[#ffffff] font-semibold flex justify-center items-center py-3 rounded-lg'>Login</button>
          <p className='w-full text-center font-medium text-[#ffffff]'>Don't have account ? <Link to={"/Register"} className='text-red-600'>Signup</Link></p>
        </Form>
      </Formik>
    </div>
  )
}
