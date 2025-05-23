import firebaseAdmin from "../adminApp";
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies';

export const userIsLoggedIn = async (cookieStore: ReadonlyRequestCookies) => {
  try {
    await firebaseAdmin.auth().verifyIdToken(cookieStore.get('token')?.value || '');
    return true;
  } catch (error) {
    return false;
  }
};
