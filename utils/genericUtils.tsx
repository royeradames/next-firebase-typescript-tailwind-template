"use client";
import { auth } from "@/firebase/clientApp";
import { signOut as firebaseSignOut } from "firebase/auth";
import { NextRouter } from "next/router";

export const signOut = async (router: NextRouter) => {
  await firebaseSignOut(auth);
  router.push("/");
};
