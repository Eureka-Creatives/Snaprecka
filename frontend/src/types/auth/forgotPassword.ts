export interface forgotPasswordRequestType {
  email: string;
}

export interface forgotPasswordResponseType {
  message: string;
  messageId: string;
  OTP: string;
}
