import React from 'react';
import { cookies } from 'next/headers';
import { userIsLoggedIn } from '@/firebase/auth/utils';
import Dashboard from '@/components/dashboard';
import Splash from '@/components/splash';

export default async function Home() {
  const cookieStore = cookies();
  const authenticated = await userIsLoggedIn(cookieStore);

  return (
    <div>
      {!authenticated && <Splash />}
      {authenticated && <Dashboard />}
    </div>
  );
} 