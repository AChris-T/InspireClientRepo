'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useForgetPasswordMutation } from '@/redux/authApi';
import EmailIcon from '../../../public/icons/EmailIcon';
import AlertIcon from '../../../public/icons/AlertIcon';
import ArrowBack from '../../../public/icons/ArrowBack';
import { emailValidation, InputField } from '../form';

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
      router.push(
        `/verify-otp?email=${encodeURIComponent(data.email)}&type=reset`
      );
    } catch (error) {
      console.error('Forget password failed:', error?.data?.error);
      setErrorMessage(
        error?.data?.error || 'Failed to send reset code. Please try again.'
      );
    }
  };

  return (
    <div className="manrope text-white w-full flex flex-col gap-14">
      <Link
        href={'/login'}
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
        <InputField
          label="Email address"
          type="email"
          placeholder="Enter your email address"
          icon={EmailIcon}
          register={register}
          name="email"
          validation={emailValidation}
          error={errors.email}
        />
        <div className="flex justify-end w-full px-3 items-center">
          {errorMessage && (
            <p className="text-red-400 text-sm flex items-center w-full  gap-2 ">
              <AlertIcon />
              {errorMessage}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-lemon-100 rounded-lg  cursor-pointer w-full py-3 font-medium text-sm text-black"
        >
          {isLoading || isSubmitting ? 'Sending...' : 'Forget Password'}
        </button>
      </form>
    </div>
  );
}
