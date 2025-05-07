import React from "react";
import Shell from "@/components/shell";
import { cookies } from "next/headers";
import { userIsLoggedIn } from "@/firebase/auth/utils";
import { redirect } from "next/navigation";

export default async function Settings() {
  const cookiesStore = cookies();
  const authenticated = await userIsLoggedIn(cookiesStore);

  if (!authenticated) {
    redirect('/login')
  }
  return (
    <Shell>
      <></>
    </Shell>
  );
}
