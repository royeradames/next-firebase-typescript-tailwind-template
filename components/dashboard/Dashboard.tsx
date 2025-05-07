"use client";

import React from "react";
import Shell from "@/components/shell";
import Content from "@/components/content/Content";
import { useAuth } from "@/firebase/auth/auth";
import Image from "next/image";
const Dashboard = () => {
  const { user } = useAuth();
  function UserDisplay() {
    if (!user?.displayName) {
      return (
        <span className="animate-pulse bg-gray-200 rounded h-[0.7rem] w-24 inline-block"></span>
      );
    }
    return (
      <span className="font-medium text-gray-900">{user.displayName}</span>
    );
  }
  const UserImage = () => {
    if (!user?.photoURL) {
      return <div className="animate-pulse bg-gray-200 rounded-full w-16 h-16"></div>;
    }
    return <Image src={user.photoURL} alt="User profile" width={64} height={64} className="rounded-full" />;
  };
  return (
    <>
      <Shell>
        <Content title="Dashboard">
          <section>
            <div className="mb-4">
              <UserImage />
            </div>
            <h2>
              Welcome <UserDisplay /> 
            </h2>
            <p>This is the dashboard</p>
            <p>You can see your messages, settings, and users here</p>
          </section>
        </Content>
      </Shell>
    </>
  );
};

export default Dashboard;
