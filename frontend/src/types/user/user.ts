export interface user {
  createdAt: string;
  email: string;
  firstName: string;
  lastName: string;
  id: string;
  updatedAt: string;
}

export interface userDetailsResponseType {
  user: user;
  message: string;
}
