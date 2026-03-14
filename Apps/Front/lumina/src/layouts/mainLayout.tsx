import { Outlet, useRouterState } from "@tanstack/react-router";
import { useRef } from "react";
import { MenuComponent } from "../components/menu/MenuComponent";
import { TopMenuComponent } from "../components/menu/topMenuComponent";

export default function MainLayout() {
  const { location } = useRouterState();
  const pathname = location.pathname;
  const currentIndex = location.state.__TSR_index ?? 0;
  const prevIndexRef = useRef(currentIndex);
  const isBackNavigation = currentIndex < prevIndexRef.current;
  prevIndexRef.current = currentIndex;

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--background)", color: "var(--text)" }}
    >
      <div
        key={pathname}
        className={`route-transition ${
          isBackNavigation
            ? "route-transition-back"
            : "route-transition-forward"
        }`}
      >
        <Outlet />
      </div>

      <div className="bg-red-400">
        {["/Manga", "/Volume"].some((path) => pathname.startsWith(path)) && (
          <div>
            <TopMenuComponent />
          </div>
        )}
      </div>

      <div>
        {["/Manga", "/Volume"].some((path) =>
          pathname.startsWith(path),
        ) ? null : (
          <div>
            <MenuComponent />
          </div>
        )}
      </div>
    </div>
  );
}
