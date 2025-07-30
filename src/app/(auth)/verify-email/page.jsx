'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import EmailVerification from '@/components/auth/EmailVerification';

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
  const token = searchParams.get('token');

  if (!email || !token) {
    return <InvalidMessage />;
  }

  return <EmailVerification email={email} token={token} />;
}
