import { useState, type ReactNode } from "react";
import { AuthContext, type AuthContextValue } from "./AuthContext";
import {
  login as loginRequest,
  register as registerRequest,
} from "../api/auth";
import {
  getAuthSession,
  removeAuthSession,
  saveAuthSession,
} from "../storage/authStorage";
import type {
  AuthResponse,
  AuthSession,
  LoginRequest,
  RegisterRequest,
} from "../types/auth";

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<AuthSession | null>(getAuthSession);

  const startSession = (authResponse: AuthResponse) => {
    const nextSession: AuthSession = {
      token: authResponse.token,
      user: {
        fullName: authResponse.fullName,
        email: authResponse.email,
      },
    };

    saveAuthSession(nextSession);
    setSession(nextSession);
  };

  const login = async (data: LoginRequest) => {
    const authResponse = await loginRequest(data);
    startSession(authResponse);
  };

  const register = async (data: RegisterRequest) => {
    const authResponse = await registerRequest(data);
    startSession(authResponse);
  };

  const logout = () => {
    removeAuthSession();
    setSession(null);
  };

  const value: AuthContextValue = {
    user: session?.user ?? null,
    isAuthenticated: session !== null,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
