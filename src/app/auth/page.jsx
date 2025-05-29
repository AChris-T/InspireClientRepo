import { redirect } from 'next/navigation';
import React from 'react';

export default function Auth() {
  redirect('/Auth/login'); // Automatically redirects

  return <div >Hello</div>;
}
