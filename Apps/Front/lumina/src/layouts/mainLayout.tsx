import { Outlet } from "@tanstack/react-router";
import { MenuComponent } from "../components/menu/MenuComponent";

export default function MainLayout() {
  return (
    <div>
      <Outlet />
      <MenuComponent />
    </div>
  );
}
