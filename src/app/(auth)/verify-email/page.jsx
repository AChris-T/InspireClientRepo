// app/(auth)/verify-email/page.tsx
'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import EmailVerification from '@/components/auth/EmailVerification';

function InvalidMessage() {
  return (
    <div className="text-red-600 text-center mt-10">
      Invalid email or token.
    </div>
  );
}

function EmailVerificationPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const token = searchParams.get('token');

  if (!email || !token) {
    return <InvalidMessage />;
  }

  return <EmailVerification email={email} token={token} />;
}

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <EmailVerificationPage />
    </Suspense>
  );
}
