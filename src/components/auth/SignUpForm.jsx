'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegUser } from 'react-icons/fa6';
import Link from 'next/link';
import { useRegisterUserMutation } from '@/redux/authApi';
import AlertToast from '@/components/common/AlertToast';
import {
  InputField,
  PasswordField,
  emailValidation,
  passwordValidation,
  confirmPasswordValidation,
  businessNameValidation,
} from '@/components/form';
import GoogleIcon from '../../../public/icons/GoogleIcon';
import EmailIcon from '../../../public/icons/EmailIcon';
import GoogleAuth from './GoogleAuth';

export default function SignUpForm() {
  const [signup, { isLoading }] = useRegisterUserMutation();
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');
  const [toastMessage, setToastMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await signup(data).unwrap();
      setToastType('success');
      setToastMessage(
        'An email has been sent to your email address. Please check your inbox to verify your account.'
      );
      setShowToast(true);
    } catch (error) {
      console.error('Signup failed:', error);
      setToastType('error');
      setToastMessage(
        error?.data?.error ||
          error?.data?.message ||
          'Signup failed. Please try again.'
      );
      setShowToast(true);
    }
  };

  return (
    <div className="manrope text-white w-full flex flex-col gap-14">
      <AlertToast
        open={showToast}
        onClose={() => setShowToast(false)}
        type={toastType}
        message={toastMessage}
      />

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

        <PasswordField
          label="Password"
          placeholder="Enter your password (Min 8 Characters)"
          register={register}
          name="password"
          validation={passwordValidation}
          error={errors.password}
        />

        <PasswordField
          label="Confirm Password"
          placeholder="Confirm your password"
          register={register}
          name="password2"
          validation={confirmPasswordValidation('password')}
          error={errors.password2}
        />

        <InputField
          label="Business/store name"
          type="text"
          placeholder="Enter your business/store name"
          icon={FaRegUser}
          register={register}
          name="businessName"
          validation={businessNameValidation}
          error={errors.businessName}
        />

        <button
          disabled={isLoading}
          className="bg-lemon-100 cursor-pointer rounded-lg mt-10 w-full py-3 font-medium text-sm text-black"
        >
          {isLoading ? 'Signing up...' : 'Sign Up'}
        </button>

        <div className="w-full flex items-center gap-7">
          <div className="bg-[#E5E5E5] w-full h-[1px]"></div>
          <span>or</span>
          <div className="bg-[#E5E5E5] w-full h-[1px]"></div>
        </div>

        <GoogleAuth />
        <h3 className="flex items-center gap-1 justify-center text-sm font-medium">
          Already have an account?
          <Link href={'/login'} className="text-[#A9C711]">
            Log in
          </Link>
        </h3>
      </form>
    </div>
  );
}
