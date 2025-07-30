'use client';
import ResetPasswordForm from '@/components/auth/ResetPasswordForm';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function resetpassword() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const otp = searchParams.get('otp');
  if (!email || !otp) {
    return (
      <div className="text-red-600 text-center mt-10">
        Invalid email or token.
      </div>
    );
  }
  return <ResetPasswordForm email={email} otp={otp} />;
}
