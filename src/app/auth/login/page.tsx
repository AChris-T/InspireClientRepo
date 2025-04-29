'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PasswordVisibility from '@/Constant/PasswordVisibility';
import Link from 'next/link';
import Image from 'next/image';
import google from '../../../../public/image/google.png'
import microsoft from '../../../../public/image/microsoft.png'
import apple from '../../../../public/image/apple.png'

export default function page() {
  const { inputType, toggleVisibility, icon } = PasswordVisibility();

  return (
    <div className='flex flex-col gap-4 robbot'>
      <h3 className='text-[#393939] text-[32px] font-bold robbot'>Login</h3>
      <h3 className='text-[#393939] text-base font-normal robbot'>Login to Your InspireEdge Account</h3>
      <div>
      <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().min(6, 'Min 6 characters').required('Required'),
      })}
      onSubmit={(values, { resetForm }) => {
        console.log('Form submitted:', values);
        resetForm();
      }}
    >
      {() => (
        <Form className="mt-[32px] flex flex-col gap-[24px]">

          <div >
            <label htmlFor="email" className="block font-normal robbot text-black-100 mb-1">Email address</label>
            <Field
              name="email"
              type="email"
              placeholder='Enter your email'
              className="mt-1 w-full px-2 py-3 border-1 border-[#F2F2F2] rounded focus:outline-none focus:ring-1 focus:ring-lightPurple-100"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 mt-1 text-sm" />
          </div>

          <div>
            <label htmlFor="password" className="block font-normal robbot text-black-100 mb-1">Password</label>
            <div className="relative">
              <Field
                name="password"
                type={inputType}
                placeholder='Enter your password'
                className="mt-1 w-full px-2 border-1 py-3 border-[#F2F2F2] rounded focus:outline-none focus:ring-1 focus:ring-lightPurple-100"
                />
              <span
                onClick={toggleVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-lg"
              >
                {icon}
              </span>
            </div>
            <ErrorMessage name="password" component="div" className="text-red-500 mt-1 text-sm" />
          </div>
          <div className='flex justify-end text-blue-100'>
          <Link href='' className='text-sm hover:underline'>Forget Password</Link>
          </div>

          <button
            type="submit"
            className="w-full bg-black-200 font-bold text-base text-white py-5 rounded hover:bg-lightPurple-100 transition"
          >
            Login
          </button>
        </Form>
      )}
    </Formik>
    <div className='mt-[38px]'>
      <h3 className='text-gray-100'>Continue with</h3>
      <div className='mt-2 justify-between flex bg-[#DEDEDE33] p-4 rounded-full'>
        <Image src={google} alt='google' />
        <Image src={microsoft} alt='google' />
        <Image src={apple} alt='google' />
      </div>
    </div>
    <div className='mt-3 text-[#707070]'>
    Do not have an Account?<Link href={''} className='text-blue-100'> Signup  </Link>  </div>
      </div>
    </div>
  )
}
