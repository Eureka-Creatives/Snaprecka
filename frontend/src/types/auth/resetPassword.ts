export interface resetPasswordRequestType {
  email: string;
  newPassword: string;
  confirmPassword: string;
}

export interface resetPasswordResponseType {
  message: string;
  error?: string;
}
