export interface OTPRequestType {
  email?: string;
  otp: string;
}

export interface OTPResponseType {
  message: string;
  messageID: string;
  otp: string;
  error?: string;
}
