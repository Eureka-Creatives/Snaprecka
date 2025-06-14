import { createBrowserRouter } from "react-router-dom";
import UserLayout from "./layout/userLayout";
import UserHome from "./pages/user-home";
import LoginScreen from "./pages/Loginscreen";
import SignupScreen from "./pages/Signupscreen";
import ForgotPassword from "./pages/ForgotPassword";
import AuthLayout from "./layout/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/auth/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: LoginScreen,
      },
      {
        path: "signup",
        Component: SignupScreen,
      },
      {
        path: "reset-password",
        Component: ForgotPassword,
      },
    ],
  },
  {
    path: "/home",
    Component: UserLayout,
    children: [
      {
        index: true,
        Component: UserHome,
      },
    ],
  },
]);
