import { createContext } from "react";
import type { AuthenticatedUser } from "../types/auth";

export type AuthContextValue = {
  user: AuthenticatedUser | null;
  isAuthenticated: boolean;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);
