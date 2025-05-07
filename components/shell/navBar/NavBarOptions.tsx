"use client";

import React, { type ReactNode } from "react";
import { ChartPieSvg, UsersSvg, MessagesSvg, CogSvg, SignOutSvg } from "../../svg";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "../../../utils/genericUtils";

type Props = {
  /** Whether the navbar options are appearing on a small screen, or a collapsed navbar */
  smallScreen?: boolean;
  expanded?: boolean;
};

export default function NavBarOptions({
  smallScreen = false,
  expanded = true,
}: Props) {
  const router = useRouter();

  return (
    <>
      <NavItem
        link="/"
        svgIcon={<ChartPieSvg />}
        title="Dashboard"
        expanded={expanded}
      />
      <NavItem
        link="/users"
        svgIcon={<UsersSvg />}
        title="Users"
        expanded={expanded}
      />
      <NavItem
        link="/messages"
        svgIcon={<MessagesSvg />}
        title="Messages"
        expanded={expanded}
      />
      {smallScreen && (
        <>
          <NavItem link="/settings" svgIcon={<CogSvg />} title="Settings" />
          <button
            onClick={() => signOut(router)}
            className="flex items-center no-underline text-blue-50 hover:text-blue-100 p-3 rounded-md w-full text-left"
          >
            {<SignOutSvg />}
            <div className="font-bold pl-3">Sign Out</div>
          </button>
        </>
      )}
    </>
  );
}

type NavItemProps = {
  link: string;
  svgIcon: ReactNode;
  title: string;
  expanded?: boolean;
};

const NavItem = ({ link, svgIcon, title, expanded = true }: NavItemProps) => {
  const router = useRouter();
  return (
    <Link
      href={link}
      className={`flex items-center no-underline text-blue-50 hover:text-blue-100 p-3 rounded-md ${
        isActivePage(link, router.pathname) ? "bg-indigo-800" : ""
      }`}
    >
      {svgIcon}
      {expanded && <div className="font-bold pl-3">{title}</div>}
    </Link>
  );
};

const isActivePage = (link: string, pathName: string) => {
  return pathName.toLowerCase() === link.toLowerCase();
};
