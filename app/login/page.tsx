import React from "react";
import Auth from "@/components/auth";
import { userIsLoggedIn } from "@/firebase/auth/utils";
import { LogoSvg } from "@/components/svg";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const Login= async () => {
  const cookiesStore = await cookies();
  const authenticated = await userIsLoggedIn(cookiesStore);

  if (authenticated) {
    redirect('/');
  }

  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center text-center overflow-hidden bg-cover bg-gradient-to-tr from-blue-300 to-indigo-800 py-6 sm:py-6">
        <div className="flex justify-center text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl pb-5">
          <LogoSvg width="2.5rem" height="2.5rem" />
          <div className="pl-2">My App</div>
        </div>
        <Auth />
      </div>
    </>
  );
};

export default Login;
