export interface forgotPasswordRequestType {
  email: string;
}

export interface forgotPasswordResponseType {
  message: string;
  messageID: string;
  OTP: string;
}
