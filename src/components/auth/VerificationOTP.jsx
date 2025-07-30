'use client';
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  useForgetPasswordMutation,
  useVerifyOtpMutation,
} from '@/redux/authApi';

export default function VerificationOTP({ email }) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [message, setMessage] = useState({ type: '', text: '' });
  const inputRefs = useRef([]);
  const router = useRouter();

  const [verifyEmail, { isLoading }] = useVerifyOtpMutation();
  const [resendOtp, { isLoading: isResending }] = useForgetPasswordMutation();

  const handleChange = (e, idx) => {
    const value = e.target.value.replace(/\D/g, '');
    if (!value) return;
    const newOtp = [...otp];
    newOtp[idx] = value[0];
    setOtp(newOtp);
    if (idx < 5 && value) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      inputRefs.current[idx - 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });
    const code = otp.join('');
    if (code.length !== 6) {
      setMessage({ type: 'error', text: 'Please enter the 6-digit code.' });
      return;
    }
    try {
      await verifyEmail({ email, otp: code }).unwrap();
      router.push(`/reset-password?email=${encodeURIComponent(email)}&otp=${encodeURIComponent(code)}`);
    } catch (err) {
      setMessage({
        type: 'error',
        text:
          err?.data?.error ||
          err?.data?.message ||
          'OTP verification failed. Please try again.',
      });
    }
  };
  const handleResend = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });
    try {
      await resendOtp({ email }).unwrap();
      setMessage({
        type: 'info',
        text: 'A new code has been sent to your email.',
      });
    } catch (err) {
      setMessage({
        type: 'error',
        text:
          err?.data?.error ||
          err?.data?.message ||
          'Failed to resend code. Please try again.',
      });
    }
  };

  const getMessageColor = (type) => {
    switch (type) {
      case 'error':
        return 'text-red-400';
      case 'success':
        return 'text-lemon-100';
      case 'info':
        return 'text-lemon-100';
      default:
        return '';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-black-100 text-white">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xs flex flex-col items-center gap-8"
      >
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Enter OTP</h2>
          <p className="text-gray-300 text-sm mb-6">
            We've sent a 6-digit code to your email, please enter it below to
            verify your identity
          </p>
        </div>
        <div className="flex gap-3 justify-center mb-2">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              ref={(el) => (inputRefs.current[idx] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              className="w-12 h-12 text-center text-2xl rounded bg-black border border-gray-600 focus:border-lemon-100 outline-none"
              value={digit}
              onChange={(e) => handleChange(e, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              autoFocus={idx === 0}
            />
          ))}
        </div>
        {message.text && (
          <div className={`${getMessageColor(message.type)} text-sm mb-2`}>
            {message.text}
          </div>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-lemon-100 text-black font-medium rounded py-3 mt-2 mb-2 disabled:opacity-60"
        >
          {isLoading ? 'Verifying...' : 'Confirm'}
        </button>
        <div className="text-center text-sm text-gray-400">
          Don't receive a code?{' '}
          <button
            type="button"
            className="text-lemon-100 underline ml-1"
            onClick={handleResend}
            disabled={isResending}
          >
            {isResending ? 'Resending...' : 'Resend'}
          </button>
        </div>
      </form>
    </div>
  );
}
