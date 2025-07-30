'use client';

import React from 'react';
import GoogleIcon from '../../../public/icons/GoogleIcon';
import { useGoogleAuthMutation } from '@/redux/authApi';

export default function GoogleAuth() {
  const [googleAuth, { isLoading }] = useGoogleAuthMutation();

  const handleClick = async () => {
    try {
      await googleAuth().unwrap(); // Trigger GET request
      // Optionally show success toast or redirect
    } catch (err) {
      console.error('GoogleAuth GET request failed:', err);
      // Optionally show error toast
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      className="border border-white rounded-lg flex items-center gap-2 justify-center w-full py-3 font-medium text-sm text-white hover:bg-white/10 transition"
    >
      <GoogleIcon />
      Continue with Google
    </button>
  );
}
