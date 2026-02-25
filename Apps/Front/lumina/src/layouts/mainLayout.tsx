import { Outlet, useRouterState } from "@tanstack/react-router";
import { MenuComponent } from "../components/menu/MenuComponent";

export default function MainLayout() {
  const { location } = useRouterState();
  const pathname = location.pathname;

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--background)", color: "var(--text)" }}
    >
      <Outlet />

      {pathname.startsWith("/Manga") ? null : (
        <div>
          <MenuComponent />
        </div>
      )}
    </div>
  );
}
