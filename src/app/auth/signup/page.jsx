'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import EmailIcon from '../../../../public/icons/EmailIcon';
import EyesSee from '../../../../public/icons/EyesSee';
import { FaRegUser, FaSleigh } from 'react-icons/fa6';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import AlertIcon from '../../../../public/icons/AlertIcon';
import GoogleIcon from '../../../../public/icons/GoogleIcon';
import Link from 'next/link';
import { useRegisterUserMutation } from '@/redux/authApi';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '@/redux/authSlice';
import { useRouter } from 'next/navigation';
import { setAuthTokens } from '@/utils/auth';

export default function Signup() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [signup, { isLoading }] = useRegisterUserMutation();
  const [errorMessage, setErrorMessage] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });
  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };
  const handleVisibilityClick = (e, field) => {
    e.preventDefault();
    e.stopPropagation();
    togglePasswordVisibility(field);
  };
  const onSubmit = async (data) => {
    try {
      const response = await signup(data).unwrap();
      router.push(`/auth/verify-otp?email=${encodeURIComponent(data.email)}`);
    } catch (error) {
      console.error('Signup failed:', error);
      setErrorMessage(
        error?.data?.message || 'Signup failed. Please try again.'
      );
    }
  };
  return (
    <div className="manrope text-white  w-full flex flex-col gap-14">
      <div className="flex flex-col items-center gap-4">
        <h3 className="font-semibold text-2xl md:text-4xl">
          Welcome to InspireEdge
        </h3>
        <p className="w-full md:w-[500px] px-4 text-sm md:text-base text-gray-200 text-center">
          Welcome to InspireEdge Build smarter, sell faster, and recover more
          with InspireEdge's predictive AI for high-impact commerce.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 px-3 md:px-24"
      >
        <div className="flex flex-col gap-2">
          <label className="block text-sm">Email address</label>
          <div
            className={`${
              errors.email ? 'border-red-100' : 'border-white'
            } flex items-center gap-5 border p-2 rounded-lg `}
          >
            <EmailIcon />
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              type="email"
              className="w-full focus:outline-none text-sm bg-transparent"
              placeholder="Enter your email address"
            />
          </div>
          {errors.email && (
            <p className="text-gray-200 gap-2 text-sm flex items-center">
              <AlertIcon />
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="block text-sm">Password</label>
          <div
            className={`${
              errors.password ? 'border-red-100' : 'border-white'
            } flex items-center gap-5 border p-2 rounded-lg `}
          >
            <div className="flex items-center gap-5 w-full">
              <RiLockPasswordLine color="#929191" className="text-xl" />
              <input
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters',
                  },
                })}
                type={passwordVisibility.password ? 'text' : 'password'}
                className="w-full cursor-pointer focus:outline-none text-sm bg-transparent"
                placeholder="Enter your password (Min 8 Characters)"
              />
            </div>
            <button
              type="button"
              onClick={(e) => handleVisibilityClick(e, 'password')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {passwordVisibility.password ? (
                <FaEyeSlash color="#929191" />
              ) : (
                <FaEye color="#929191" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-gray-200 gap-2 text-sm flex items-center">
              <AlertIcon />
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="block text-sm">Confirm Password</label>
          <div
            className={`${
              errors.confirmPassword ? 'border-red-100' : 'border-white'
            } flex items-center gap-5 border p-2 rounded-lg `}
          >
            <div className="flex items-center gap-5 w-full">
              <RiLockPasswordLine color="#929191" className="text-xl" />
              <input
                {...register('password2', {
                  required: 'Please confirm your password',
                  validate: (value, formValues) =>
                    value === formValues.password || 'Passwords do not match',
                })}
                type={passwordVisibility.confirmPassword ? 'text' : 'password'}
                className="w-full cursor-pointer focus:outline-none text-sm bg-transparent"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="button"
              onClick={(e) => handleVisibilityClick(e, 'confirmPassword')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {passwordVisibility.confirmPassword ? (
                <FaEyeSlash color="#929191" />
              ) : (
                <FaEye color="#929191" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-gray-200 gap-2 text-sm flex items-center">
              <AlertIcon /> {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label className="block text-sm">Business/store name</label>
          <div
            className={`${
              errors.business_name ? 'border-red-100' : 'border-white'
            } flex items-center gap-5 border p-2 rounded-lg `}
          >
            <FaRegUser color="#929191" />
            <input
              {...register('business_name', {
                required: 'Business name is required',
              })}
              type="text"
              className="w-full focus:outline-none text-sm bg-transparent"
              placeholder="Enter your business/store name"
            />
          </div>
          {errors.businessName && (
            <p className="text-gray-200 gap-2 text-sm flex items-center">
              <AlertIcon /> {errors.businessName.message}
            </p>
          )}
        </div>
        <button
          disabled={isLoading}
          className="bg-lemon-100 rounded-lg mt-10 w-full py-3 font-medium text-sm text-black"
        >
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>
        <div className="w-full flex items-center  gap-7">
          <div className="bg-[#E5E5E5] w-full h-[1px]"></div>
          <span>or</span>
          <div className="bg-[#E5E5E5] w-full h-[1px]"></div>
        </div>
        <button className="border-[1px] border-white rounded-lg flex items-center gap-2 justify-center w-full py-3 font-medium text-sm text-white">
          <GoogleIcon /> Continue with Google
        </button>
        <h3 className="flex items-center justify-center font-medium">
          Already have an account?
          <Link href={'/auth/login'} className="text-[#A9C711]">
            Log in
          </Link>
        </h3>
      </form>
    </div>
  );
}
