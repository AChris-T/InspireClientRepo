import React, { useEffect, useState } from 'react';
import { useVerifyEmailMutation } from '@/redux/authApi';

export default function EmailVerification({ email, token }) {
  const [verifyEmail, { isLoading }] = useVerifyEmailMutation();
  const [verificationStatus, setVerificationStatus] = useState('verifying'); // 'verifying', 'success', 'error'
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleVerification = async () => {
      try {
        await verifyEmail({ token, email }).unwrap();
        setVerificationStatus('success');
        setMessage(
          'Email verified successfully! You can now log in to your account.'
        );
      } catch (err) {
        console.error('Verification failed:', err);
        setVerificationStatus('error');
        setMessage(
          err?.data?.error ||
            err?.data?.message ||
            'Email verification failed. Please try again.'
        );
      }
    };

    handleVerification();
  }, [token, verifyEmail]);

  const getStatusContent = () => {
    switch (verificationStatus) {
      case 'verifying':
        return (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lemon-100 mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Verifying Your Email
            </h2>
            <p className="text-gray-200">
              Please wait while we verify your email address...
            </p>
          </div>
        );

      case 'success':
        return (
          <div className="text-center">
            <div className="w-16 h-16 bg-lemon-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Email Verified Successfully!
            </h2>
            <p className="text-gray-200 mb-6">{message}</p>
            <a
              href="/auth/login"
              className="inline-flex items-center px-6 py-3 bg-lemon-100 text-black font-medium rounded-lg hover:bg-lemon-200 transition-colors"
            >
              Continue to Login
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        );

      case 'error':
        return (
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-white mb-2">
              Verification Failed
            </h2>
            <p className="text-gray-200 mb-6">{message}</p>
            <div className="space-y-3">
              <a
                href="/auth/login"
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                Go to Login
              </a>
              <br />
              <a
                href="/auth/signup"
                className="inline-flex items-center px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-colors"
              >
                Try Signing Up Again
              </a>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="manrope text-white w-full flex flex-col gap-14">
      {/*  <div className="flex flex-col items-center gap-4">
        <h3 className="font-semibold text-2xl md:text-4xl">
          Email Verification
        </h3>
        <p className="w-full md:w-[500px] px-4 text-sm md:text-base text-gray-200 text-center">
          Verifying email: {email}
        </p>
      </div> */}

      <div className="flex justify-center">
        <div className="w-full max-w-md px-6">{getStatusContent()}</div>
      </div>
    </div>
  );
}
