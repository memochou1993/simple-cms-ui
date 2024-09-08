import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './app';

const auth = getAuth(app);

export const signUp = ({ email, password }) => createUserWithEmailAndPassword(auth, email, password);

export const signIn = ({ email, password }) => signInWithEmailAndPassword(auth, email, password);

export const signOut = () => auth.signOut();

export const onAuthStateChanged = (callback) => auth.onAuthStateChanged(callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      resolve(user);
      unsubscribe();
    }, (error) => {
      reject(error);
    });
  });
};

export const getIdToken = () => auth.currentUser.getIdToken();
