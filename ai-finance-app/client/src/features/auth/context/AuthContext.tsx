import { createContext } from "react";
import type {
  AuthenticatedUser,
  LoginRequest,
  RegisterRequest,
} from "../types/auth";

export type AuthContextValue = {
  user: AuthenticatedUser | null;
  isAuthenticated: boolean;
  login: (data: LoginRequest) => Promise<void>;
  register: (data: RegisterRequest) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);
