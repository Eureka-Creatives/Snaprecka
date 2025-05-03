import { createBrowserRouter } from "react-router-dom";
import UserLayout from "./layout/userLayout";

export const router = createBrowserRouter([
  {
    path: "/home",
    Component: UserLayout,
    children: [],
  },
]);
