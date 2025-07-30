'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import VerificationOTP from '@/components/auth/VerificationOTP';

function InvalidMessage() {
  return (
    <div className="text-red-600 text-center mt-10">
      Invalid email or token.
    </div>
  );
}

export default function page() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  if (!email) {
    return <InvalidMessage />;
  }

  return <VerificationOTP email={email} />;
}
