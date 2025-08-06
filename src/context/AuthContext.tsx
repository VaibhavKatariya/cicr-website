"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { User } from "firebase/auth";

type AuthContextType = {
  user: User | null | undefined;
  loading: boolean;
  isAdmin: boolean;
  checkingAuth: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isAdmin: false,
  checkingAuth: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, loading] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const checkUserRole = async () => {
      if (user) {
        try {
          const tokenResult = await user.getIdTokenResult(true);
          const role = tokenResult.claims.role;
          setIsAdmin(role === "admin");
        } catch (err) {
          console.error("Error fetching user claims:", err);
        }
      }
      setCheckingAuth(false);
    };

    checkUserRole();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, loading, isAdmin, checkingAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);