import { Outlet } from "@tanstack/react-router";
import { MenuComponent } from "../components/menu/MenuComponent";

export default function MainLayout() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--background)", color: "var(--text)" }}
    >
      <Outlet />
      <MenuComponent />
    </div>
  );
}
