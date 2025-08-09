export interface loginRequestType {
  email: string;
  password: string;
}

export interface loginResponseType {
  token: string;
  message: string;
  isAuthenticated: boolean;
}
