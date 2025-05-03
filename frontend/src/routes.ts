import { createBrowserRouter } from "react-router-dom";
import UserLayout from "./layout/userLayout";
import UserHome from "./pages/user-home";
import Login from "./pages/login-screen";
export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Login,
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
  ],
);