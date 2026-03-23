import { Outlet, useRouterState } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { MenuComponent } from "../components/Navigation/MenuComponent";
import { TopMenuComponent } from "../components/Navigation/TopMenuComponent";
import { TopMenuTitleProvider } from "../shared/TopMenuTitleContext";

export default function MainLayout() {
  const { location } = useRouterState();
  const pathname = location.pathname;
  const currentIndex = location.state.__TSR_index ?? 0;
  const prevIndexRef = useRef(currentIndex);
  const isBackNavigation = currentIndex < prevIndexRef.current;
  prevIndexRef.current = currentIndex;
  const [titleElement, setTitleElement] = useState<HTMLDivElement | null>(null);
  const [titleText, setTitleText] = useState("");

  return (
    <TopMenuTitleProvider
      titleElement={titleElement}
      setTitleElement={setTitleElement}
      titleText={titleText}
      setTitleText={setTitleText}
    >
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
          {["/Manga", "/Volume", "/Reader"].some((path) => pathname.startsWith(path)) && (
            <div>
              <TopMenuComponent />
            </div>
          )}
        </div>

        <div>
          {["/Manga", "/Volume", "/Reader"].some((path) =>
            pathname.startsWith(path),
          ) ? null : (
            <div>
              <MenuComponent />
            </div>
          )}
        </div>
      </div>
    </TopMenuTitleProvider>
  );
}
