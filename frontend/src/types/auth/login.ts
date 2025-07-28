export interface loginRequestType {
  email: string;
  password: string;
}

export interface loginResponseType {
  user: {
    email: string;
    firstName: string;
    lastName: string;
    createdAt: string;
    updatedAt: string;
  };
  token: string;
}
