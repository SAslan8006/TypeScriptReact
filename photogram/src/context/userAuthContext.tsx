import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

interface IUserAuthProviderProps {
  children: React.ReactNode;
}

type LoginData = {
  email: string;
  password: string;
};

type AuthContextData = {
  user: User | null;
  logIn: typeof logIn;
  signUp: typeof signUp;
  logOut: typeof logOut;
  googleSignIn: typeof googleSignIn;
};

const logIn = ({ email, password }: LoginData) => {
  return signInWithEmailAndPassword(auth, email, password);
};
const signUp = ({ email, password }: LoginData) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
const logOut = () => {
  return signOut(auth);
};
const googleSignIn = () => {
  const googleAuthProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleAuthProvider);
};
export const UserAuthContext = createContext<AuthContextData>({
  user: null,
  logIn,
  signUp,
  logOut,
  googleSignIn,
});

export const UserAuthProvider: React.FC<IUserAuthProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("The Logged in user is: ", user);
        setUser(user);
      }
      return () => {
        unsubscribe();
      };
    });
    return unsubscribe;
  });
  const value: AuthContextData = {
    user,
    logIn,
    signUp,
    logOut,
    googleSignIn,
  };
  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(UserAuthContext);
};
