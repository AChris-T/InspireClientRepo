// app/(auth)/verify-otp/page.tsx
'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import VerificationOTP from '@/components/auth/VerificationOTP';

function InvalidMessage() {
  return (
    <div className="text-red-600 text-center mt-10">
      Invalid email or token.
    </div>
  );
}

function OTPPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');

  if (!email) {
    return <InvalidMessage />;
  }

  return <VerificationOTP email={email} />;
}

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <OTPPage />
    </Suspense>
  );
}
