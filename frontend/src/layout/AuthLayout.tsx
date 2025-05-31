import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="flex items-stretch min-w-full min-h-screen">
      <Outlet />
    </main>
  );
}
