'use client';
import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useVerifyOtpMutation, useResendOtpMutation } from '@/redux/authApi';
import AlertIcon from '../../../../public/icons/AlertIcon';
import Link from 'next/link';
import { setAuthTokens } from '@/utils/auth';
import ArrowBack from '../../../../public/icons/ArrowBack';

const OtpVerification = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const type = searchParams.get('type');
  const [verifyOtp, { isLoading: isVerifying }] = useVerifyOtpMutation();
  const [resendOtp, { isLoading: isResending }] = useResendOtpMutation();
  const inputRef = useRef(null);
  const [state, setState] = useState({
    otp: '',
    errorMessage: '',
    countdown: 60,
    canResend: false,
  });

  useEffect(() => {
    if (!email) {
      router.push(type === 'reset' ? '/auth/forget_password' : '/auth/signup');
    }
  }, [email, router, type]);
  useEffect(() => {
    let timer;
    if (state.countdown > 0) {
      timer = setInterval(() => {
        setState((prev) => ({
          ...prev,
          countdown: prev.countdown - 1,
        }));
      }, 1000);
    } else {
      setState((prev) => ({
        ...prev,
        canResend: true,
      }));
    }
    return () => clearInterval(timer);
  }, [state.countdown]);
  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 6);
    setState((prev) => ({
      ...prev,
      otp: value,
      errorMessage: '',
    }));
  };
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData('text')
      .replace(/[^0-9]/g, '')
      .slice(0, 6);
    setState((prev) => ({
      ...prev,
      otp: pastedData,
      errorMessage: '',
    }));
  };
  const handleBoxClick = () => {
    inputRef.current?.focus();
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (state.otp.length !== 6) {
      setState((prev) => ({
        ...prev,
        errorMessage: 'Please enter all 6 digits',
      }));
      return;
    }

    try {
      const response = await verifyOtp({
        email,
        otp: state.otp,
      }).unwrap();

      if (type === 'reset') {
        //router.push(`/auth/reset-password?token=${response.token}`);
        router.push('/reset-password');
      } else {
        setAuthTokens(response.access, response.refresh);
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('OTP verification failed:', error);
      setState((prev) => ({
        ...prev,
        errorMessage:
          error?.data?.error || 'OTP verification failed. Please try again.',
      }));
    }
  };
  const handleResendOtp = async () => {
    try {
      await resendOtp({ email }).unwrap();
      setState({
        otp: '',
        errorMessage: '',
        countdown: 60,
        canResend: false,
      });
      inputRef.current?.focus();
    } catch (error) {
      console.error('Resend OTP failed:', error?.data);
      setState((prev) => ({
        ...prev,
        errorMessage:
          error?.data?.error || 'Failed to resend OTP. Please try again.',
      }));
    }
  };

  return (
    <div className="manrope text-white w-full flex flex-col gap-14">
      <Link
        href={type === 'reset' ? '/auth/forget_password' : '/auth/signup'}
        className="flex items-center gap-2 w-full px-3 md:px-24"
      >
        <ArrowBack /> Back to {type === 'reset' ? 'forget password' : 'signup'}
      </Link>

      <div className="flex flex-col items-center gap-4">
        <h3 className="font-semibold text-2xl md:text-4xl">Enter OTP </h3>
        <p className="w-full md:w-[500px] px-4 text-sm md:text-base text-gray-200 text-center">
          We've sent a verification code to{' '}
          <span className="text-lemon-100">{email}</span>
        </p>
      </div>

      <form onSubmit={onSubmit} className="space-y-4 px-3 md:px-24">
        <div className="flex flex-col gap-2">
          <div
            className={`${
              state.errorMessage ? 'border-red-100' : 'border-white'
            } flex items-center justify-center p-2 rounded-lg`}
            onClick={handleBoxClick}
            style={{ cursor: 'pointer' }}
          >
            {[...Array(6)].map((_, idx) => (
              <div
                key={idx}
                className="w-12 h-12 md:w-20 md:h-20 flex items-center justify-center border border-gray-500 bg-transparent rounded-md mx-1 text-2xl select-none"
                style={{
                  borderColor: state.otp.length === idx ? '#A9C711' : '#444',
                  boxShadow:
                    state.otp.length === idx ? '0 0 0 2px #A9C711' : 'none',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
              >
                {state.otp[idx] || ''}
              </div>
            ))}
            <input
              ref={inputRef}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              value={state.otp}
              onChange={handleOtpChange}
              onPaste={handlePaste}
              className="absolute opacity-0 pointer-events-none"
              tabIndex={-1}
              autoFocus
            />
          </div>
          {state.errorMessage && (
            <p className="text-gray-200 gap-2 text-sm flex items-center justify-center">
              <AlertIcon />
              {state.errorMessage}
            </p>
          )}
        </div>

        <button
          disabled={isVerifying}
          className="bg-lemon-100 rounded-lg mt-10 w-full py-3 font-medium text-sm text-black"
        >
          {isVerifying
            ? 'Verifying...'
            : type === 'reset'
            ? 'Verify & Reset Password'
            : 'Verify Email'}
        </button>

        <div className="text-center">
          <p className="text-sm text-gray-200">
            Didn't receive the code?{' '}
            {state.canResend ? (
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={isResending}
                className="text-lemon-100 hover:underline"
              >
                {isResending ? 'Resending...' : 'Resend Code'}
              </button>
            ) : (
              <span className="text-gray-400">
                Resend code in {state.countdown}s
              </span>
            )}
          </p>
        </div>
      </form>
    </div>
  );
};

export default function VerifyOtpPage() {
  return;
  <Suspense fallback={<div>Loading...</div>}>
    <OtpVerification />;
  </Suspense>;
}
