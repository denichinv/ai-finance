import { API_BASE_URL } from "../config/api";
import { getAuthSession } from "../features/auth/storage/authStorage";

export async function authenticatedFetch(
  path: string,
  options: RequestInit = {},
): Promise<Response> {
  const session = getAuthSession();

  if (!session) {
    throw new Error("You must be logged in to make this request.");
  }

  const headers = new Headers(options.headers);
  headers.set("Authorization", `Bearer ${session.token}`);

  return fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });
}
