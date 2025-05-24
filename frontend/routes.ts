import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./src/pages/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [{ index: true, Component: LandingPage }],
  },
]);
