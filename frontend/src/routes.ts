import { createBrowserRouter } from "react-router-dom";
import UserLayout from "./layout/userLayout";
import UserHome from "./pages/user-home";
import LoginScreen from "./pages/Loginscreen";
import SignupScreen from "./pages/Signupscreen";
import ForgotPassword from "./pages/ForgotPassword";
import AuthLayout from "./layout/AuthLayout";
import LandingLayout from "./layout/landingLayout";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/error/notFound";
import VerifyOTP from "./pages/VerifyOTP";
import ResetPassword from "./pages/ResetPassword";
import AboutLandingPage from "./pages/AboutLandingPage";
import { CheckAuth } from "./utils/authUser";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingLayout,
    children: [
      {
        index: true,
        Component: LandingPage,
      },
      {
        path: "about",
        Component: AboutLandingPage,
      },
    ],
  },
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
        path: "forgot-password",
        Component: ForgotPassword,
      },
      {
        path: "reset-password",
        Component: ResetPassword,
      },
      {
        path: "verify-otp",
        Component: VerifyOTP,
      },
    ],
  },
  {
    path: "/home",
    Component: UserLayout,
    children: [
      {
        index: true,
        loader: async () => {
          await CheckAuth();
        },
        Component: UserHome,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
