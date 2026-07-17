import { useState, type ReactNode } from "react";
import { AuthContext, type AuthContextValue } from "./AuthContext";
import {
  getAuthSession,
  removeAuthSession,
} from "../storage/authStorage";
import type { AuthSession } from "../types/auth";

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<AuthSession | null>(getAuthSession);

  const logout = () => {
    removeAuthSession();
    setSession(null);
  };

  const value: AuthContextValue = {
    user: session?.user ?? null,
    isAuthenticated: session !== null,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
