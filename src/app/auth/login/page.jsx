'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import EmailIcon from '../../../../public/icons/EmailIcon';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { RiLockPasswordLine } from 'react-icons/ri';
import AlertIcon from '../../../../public/icons/AlertIcon';
import GoogleIcon from '../../../../public/icons/GoogleIcon';
import Link from 'next/link';
import { useLoginMutation } from '@/redux/authApi';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '@/redux/authSlice';
import { useRouter } from 'next/navigation';
import { setAuthTokens } from '@/utils/auth';

const LoginForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();
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
      const response = await login(data).unwrap();
      setAuthTokens(response.access, response.refresh);
      dispatch(
        loginSuccess({
          user: response.user,
          token: response.access,
        })
      );

      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage(
        error?.data?.message || 'Login failed. Please try again.'
      );
    }
  };
  return (
    <div className="manrope text-white  w-full flex flex-col gap-14">
      <div className="flex flex-col items-center gap-4">
        <h3 className="font-semibold text-2xl md:text-4xl">
          Your Edge Awaits{' '}
        </h3>
        <p className="w-full md:w-[500px] px-4 text-sm md:text-base text-gray-200 text-center">
          Log in to your InspireEdge workspace to optimize, recover, and guide
          your next best move
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
              errors.email || errorMessage ? 'border-red-100' : 'border-white'
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
              errors.password || errorMessage
                ? 'border-red-100'
                : 'border-white'
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
          <div className="flex items-center justify-between mt-2">
            <div className="text-gray-200 text-sm flex items-center gap-1">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>

            <Link
              href={'/auth/forget_password'}
              className="text-lemon-100 text-sm hover:underline"
            >
              Forget Password?
            </Link>
          </div>
        </div>
        <button
          disabled={isLoading}
          className="bg-lemon-100 rounded-lg mt-10 w-full py-3 font-medium text-sm text-black"
        >
          {isLoading ? 'Logging in...' : 'Login'}
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
          Don't have an account?
          <Link href={'/auth/signup'} className="text-[#A9C711]">
            Sign Up
          </Link>
        </h3>
      </form>
    </div>
  );
};

export default function LoginPage() {
  return <LoginForm />;
}
