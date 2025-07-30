'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useLoginMutation } from '@/redux/authApi';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '@/redux/authSlice';
import { useRouter } from 'next/navigation';
import { setAuthTokens } from '@/utils/auth';
import AlertToast from '@/components/common/AlertToast';
import {
  InputField,
  PasswordField,
  emailValidation,
  passwordValidation,
} from '@/components/form';
import EmailIcon from '../../../public/icons/EmailIcon';
import GoogleAuth from './GoogleAuth';

export default function SignInForm() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [signIn, { isLoading }] = useLoginMutation();
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
      const response = await signIn(data).unwrap();
      setToastType('success');
      setToastMessage('Login successful! Redirecting to dashboard...');
      setShowToast(true);
      if (response.token) {
        setAuthTokens(response.token);
      }
      if (response.isStoreConnected) {
        router.push('/dashboard');
      } else {
        router.push('/connect-store');
      }
      dispatch(loginSuccess(response));
    } catch (error) {
      console.log('SignIn failed:', error);
      setToastType('error');
      setToastMessage(
        error?.data?.error ||
          error?.data?.message ||
          'SignIn failed. Please try again.'
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
        <Link
          href={'/forgetpassword'}
          className="text-[#A9C711] flex w-full items-center justify-end "
        >
          Forget Password?
        </Link>
        <button
          disabled={isLoading}
          className="bg-lemon-100 cursor-pointer rounded-lg  w-full py-3 font-medium text-sm text-black"
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </button>

        <div className="w-full flex items-center gap-7">
          <div className="bg-[#E5E5E5] w-full h-[1px]"></div>
          <span>or</span>
          <div className="bg-[#E5E5E5] w-full h-[1px]"></div>
        </div>
        <GoogleAuth />

        <h3 className="flex items-center text-sm gap-2 justify-center font-medium">
          Don't have an account?
          <Link href={'/signup'} className="text-[#A9C711]">
            Sign up
          </Link>
        </h3>
      </form>
    </div>
  );
}
