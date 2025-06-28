export interface signupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface loginFormData {
  email: string;
  password: string;
}

export interface forgotPasswordFormData {
  email: string;
}
