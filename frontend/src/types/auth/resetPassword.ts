export interface resetPasswordRequestType {
  newPassword: string;
  confirmPassword: string;
}

export interface resetPasswordResponseType {
  message: string;
  error?: string;
}
