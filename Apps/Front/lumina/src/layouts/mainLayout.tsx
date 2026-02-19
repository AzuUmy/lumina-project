import { Outlet } from "@tanstack/react-router";
import { Menu } from "../components/menu/menu";

export default function MainLayout() {
  return (
    <div>
      <Outlet />
      <Menu />
    </div>
  );
}
