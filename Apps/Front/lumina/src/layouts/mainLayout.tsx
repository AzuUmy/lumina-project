import { Outlet } from "@tanstack/react-router";

export default function MainLayout() {
  return (
    <div>
      <h1>Main layout</h1>
      <Outlet />
    </div>
  );
}