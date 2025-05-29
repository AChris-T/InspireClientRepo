'use client';
import React, { useRef, useState } from 'react';
import EmailIcon from '../../../../public/icons/EmailIcon';
import AlertIcon from '../../../../public/icons/AlertIcon';
import ArrowBack from '../../../../public/icons/ArrowBack';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

export default function ForgetPassword() {
  const [step, setStep] = useState(1); // Step 1: Email, Step 2: OTP
  const [otp, setOtp] = useState(['', '', '', '', '', '']); // Initialize OTP
  const [error, setError] = useState(false);
  const otpRefs = useRef([]);

  const handleOtpChange = (index, value) => {
    if (/^\d$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== '' && index < otp.length - 1) {
        otpRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log('Form Data:', data);
    // Simulate API call then go to OTP step
    setStep(2);
  };

  return (
    <div className="manrope text-white w-full flex flex-col gap-14">
      <Link
        href={'./Auth/login'}
        className="flex items-center gap-2 w-full px-3 md:px-24"
      >
        <ArrowBack /> Back to login
      </Link>

      <div className="flex flex-col items-center gap-4">
        <h3 className="font-semibold text-2xl md:text-4xl">
          {step === 1 ? 'Forget Password' : 'Enter OTP'}
        </h3>
        <p className="w-full md:w-[500px] px-4 text-sm md:text-base text-gray-200 text-center">
          {step === 1
            ? 'Enter your email address linked to your account, and we’ll send a one-time code to verify your identity.'
            : 'We’ve sent a 6-digit code to your email ,please enter it below to verify your identity'}
        </p>
      </div>

      {step === 1 && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 px-3 md:px-24"
        >
          <div className="flex flex-col gap-2">
            <label className="block text-sm">Email address</label>
            <div
              className={`flex items-center gap-5 border p-2 rounded-lg ${
                errors.email ? 'border-red-100' : 'border-white'
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
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-lemon-100 rounded-lg mt-10 cursor-pointer w-full py-3 font-medium text-sm text-black"
          >
            {isSubmitting ? 'Sending...' : 'Send Email'}
          </button>
        </form>
      )}
      {step === 2 && (
        <div className="space-y-6 px-3 md:px-24 w-full flex flex-col items-center">
          <div className="flex gap-4 justify-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (otpRefs.current[index] = el)}
                className={`w-12 h-14 text-center text-2xl font-semibold rounded-lg border 
            ${
              error ? 'border-red-500' : 'border-white'
            } bg-transparent focus:outline-none`}
              />
            ))}
          </div>
          {error && (
            <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
              <AlertIcon /> Invalid OTP. Please try again.
            </p>
          )}
          <button className="bg-lemon-100 rounded-lg mt-4 cursor-pointer w-full py-3 font-medium text-sm text-black">
            Verify OTP
          </button>
          <h3 className="flex items-center text-sm justify-center font-medium">
            Don’t receive a code?
            <Link href={'/Auth/login'} className="text-[#A9C711]">
              Resend
            </Link>
          </h3>
        </div>
      )}
    </div>
  );
}
