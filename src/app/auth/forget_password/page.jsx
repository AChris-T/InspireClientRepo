'use client';
import React, { useState } from 'react';
import EmailIcon from '../../../../public/icons/EmailIcon';
import AlertIcon from '../../../../public/icons/AlertIcon';
import ArrowBack from '../../../../public/icons/ArrowBack';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useForgetPasswordMutation } from '@/redux/authApi';

export default function ForgetPassword() {
  const router = useRouter();
  const [forgetPassword, { isLoading }] = useForgetPasswordMutation();
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await forgetPassword(data).unwrap();
      router.push(`/auth/verify-otp?email=${encodeURIComponent(data.email)}&type=reset`);
    } catch (error) {
      console.error('Forget password failed:', error);
      setErrorMessage(
        error?.data?.message || 'Failed to send reset code. Please try again.'
      );
    }
  };

  return (
    <div className="manrope text-white w-full flex flex-col gap-14">
      <Link
        href={'/auth/login'}
        className="flex items-center gap-2 w-full px-3 md:px-24"
      >
        <ArrowBack /> Back to login
      </Link>

      <div className="flex flex-col items-center gap-4">
        <h3 className="font-semibold text-2xl md:text-4xl">Forget Password</h3>
        <p className="w-full md:w-[500px] px-4 text-sm md:text-base text-gray-200 text-center">
          Enter your email address linked to your account, and we'll send a
          one-time code to verify your identity.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 px-3 md:px-24"
      >
        <div className="flex flex-col gap-2">
          <label className="block text-sm">Email address</label>
          <div
            className={`flex items-center gap-5 border p-2 rounded-lg ${
              errors.email || errorMessage ? 'border-red-100' : 'border-white'
            }`}
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
          {errorMessage && (
            <p className="text-gray-200 gap-2 text-sm flex items-center">
              <AlertIcon />
              {errorMessage}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading || isSubmitting}
          className="bg-lemon-100 rounded-lg mt-10 cursor-pointer w-full py-3 font-medium text-sm text-black"
        >
          {isLoading || isSubmitting ? 'Sending...' : 'Send Reset Code'}
        </button>
      </form>
    </div>
  );
}
