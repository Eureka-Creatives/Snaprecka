import { createBrowserRouter } from "react-router-dom";
import UserLayout from "./layout/userLayout";
import UserHome from "./pages/user-home";

export const router = createBrowserRouter(
  [
    {
      path: "/",
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