import type { AuthSession } from "../types/auth";

const AUTH_SESSION_STORAGE_KEY = "spendwise.auth.session";

export function saveAuthSession(session: AuthSession): void {
  localStorage.setItem(AUTH_SESSION_STORAGE_KEY, JSON.stringify(session));
}

export function getAuthSession(): AuthSession | null {
  const storedSession = localStorage.getItem(AUTH_SESSION_STORAGE_KEY);

  if (!storedSession) {
    return null;
  }

  try {
    return JSON.parse(storedSession) as AuthSession;
  } catch {
    removeAuthSession();
    return null;
  }
}

export function removeAuthSession(): void {
  localStorage.removeItem(AUTH_SESSION_STORAGE_KEY);
}
