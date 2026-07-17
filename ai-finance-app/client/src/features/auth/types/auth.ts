export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  fullName: string;
  email: string;
  password: string;
};

export type AuthResponse = {
  token: string;
  fullName: string;
  email: string;
};

export type AuthenticatedUser = {
  fullName: string;
  email: string;
};

export type AuthSession = {
  token: string;
  user: AuthenticatedUser;
};
