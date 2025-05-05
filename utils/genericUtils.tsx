import { useRouter } from "next/navigation";
import firebase from "../firebase/clientApp";

export const signOut = async () => {
  await firebase.auth().signOut();
  const router = useRouter();
  router.push("/");
};
