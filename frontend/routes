import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: Signup,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: 'otp',
        Component: Verification
      },
      {
        path: "admin/employee",
        Component: Login,
      },
    ],
  },
]);