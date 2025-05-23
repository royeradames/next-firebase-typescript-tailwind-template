"use client";
import { auth } from "@/firebase/clientApp";
import { signOut as firebaseSignOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export const signOut = async (router: ReturnType<typeof useRouter>) => {
  await firebaseSignOut(auth);
  router.push("/");
};
