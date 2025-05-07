import React from "react";
import Shell from "@/components/shell";
import Content from "@/components/content/Content";
import { userIsLoggedIn } from "@/firebase/auth/utils";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Messages() {
  const cookiesStore = cookies();
  const authenticated = await userIsLoggedIn(cookiesStore);

  if (!authenticated) {
    redirect('/login')
  }
  
  return (
    <Shell>
      <Content title="Messages">
        <>Messages</>
      </Content>
    </Shell>
  );
}

