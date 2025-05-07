import React, { type ReactNode } from "react";
import NavBar from "./navBar";
import SideNav from "./sideNav/SideNav";

type Props = {
  children: ReactNode;
};

const Shell = ({ children }: Props) => {
  return (
    <>
      <div className="hidden h-screen md:grid grid-cols-custom-sidenav-layout">
        <SideNav />
        <main>{children}</main>
      </div>
      <div className="md:hidden h-screen">
        <NavBar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Shell;