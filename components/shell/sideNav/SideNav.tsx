"use client";

import React, { createContext, useContext } from "react";
import { CogSvg, SignOutSvg, GitHubSvg, LogoSvg } from "../../svg";
import NavBarOptions from "../navBar/NavBarOptions";
import Link from "next/link";
import { signOut } from "../../../utils/genericUtils";
import useLocalStorage from "../../../utils/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic';

const CollapsedContext = createContext(false);

// Create a client-side only version of the SideNavContent
const SideNavContent = () => {
  const [expanded, setExpanded] = useLocalStorage("collapsed", false);

  return (
    <CollapsedContext.Provider value={expanded}>
      <div className="flex flex-col bg-gray-800 text-green-50 px-6 py-4">
        <SideNavHeader />
        <SideNavMenu />
        <SideNavFooter setExpanded={setExpanded} />
      </div>
    </CollapsedContext.Provider>
  );
};

// Export a client-side only version of the SideNav
export default dynamic(() => Promise.resolve(SideNavContent), { ssr: false });

const SideNavHeader = () => {
  const collapsed = useContext(CollapsedContext);

  return (
    <div className="flex items-center ml-2 pb-8">
      <Link
        href="/"
        className="text-xl font-bold no-underline text-blue-50 hover:text-blue-100"
      >
        <LogoSvg width="2.5rem" height="2.5rem" className="inline" />
        {!collapsed && <div className="inline ml-2">My App</div>}
      </Link>
    </div>
  );
};

const SideNavMenu = () => {
  const collapsed = useContext(CollapsedContext);

  return (
    <nav className="space-y-2">
      <NavBarOptions smallScreen={false} expanded={!collapsed} />
    </nav>
  );
};

type sideNavFooterProps = {
  setExpanded: (expanded: boolean) => void;
};

const SideNavFooter = ({ setExpanded }: sideNavFooterProps) => {
  const collapsed = useContext(CollapsedContext);
  const router = useRouter();

  return (
    <>
      <Link
        href="/settings"
        className="flex ml-1 items-end mt-auto px-1 no-underline text-blue-50 opacity-70 hover:opacity-100"
      >
        <CogSvg />
        {!collapsed && <div className="pl-2">Settings</div>}
      </Link>
      <button
        onClick={() => signOut(router)}
        className="flex ml-1 items-center mt-3 px-1 pb-2 no-underline text-blue-50 opacity-70 hover:opacity-100 w-full text-left"
      >
        <SignOutSvg />
        {!collapsed && <div className="pl-2">Sign Out</div>}
      </button>
      <hr></hr>
      <div className="flex pt-2">
        <div className="text-blue-50 opacity-70 hover:opacity-100 flex-2 justify-start mx-2 py-1">
          <a
            href="https://github.com/ahern55/next-firebase-typescript"
            target={"_blank"}
            rel="noreferrer"
          >
            <GitHubSvg />
          </a>
        </div>
        <div className="text-right flex-1 align-middle">
          <button
            onClick={() => {
              setExpanded(!collapsed);
            }}
          >
            {collapsed ? ">" : "<"}
          </button>
        </div>
      </div>
    </>
  );
};
