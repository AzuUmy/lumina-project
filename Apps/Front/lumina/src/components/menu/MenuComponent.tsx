import {
  HomeRounded,
  HomeOutlined,
  LocalFireDepartmentRounded,
  LocalFireDepartmentOutlined,
} from "@mui/icons-material";
import { useNavigate, useRouterState } from "@tanstack/react-router";

export function MenuComponent() {
  const navigate = useNavigate();
  const { location } = useRouterState();
  const pathname = location.pathname;

  const isHome = pathname.toLowerCase() === "/home";
  const isHot = pathname.toLowerCase() === "/hot";

  return (
    <section>
      <div className="show-mobile-only">
        <div className="fixed bottom-0 right-0 left-0 flex justify-center pb-5">
          <div
            className="rounded-full flex justify-center gap-5 backdrop-blur-md border"
            style={{
              backgroundColor: "color-mix(in srgb, var(--border) 72%, transparent)",
              borderColor: "var(--border)",
              color: "var(--text)",
              padding: "0.85rem 1rem",
            }}
          >
            <button
              type="button"
              onClick={() => navigate({ to: "/Home" })}
              className="p-3 rounded-full transition-all duration-200 ease-in-out cursor-pointer"
              style={{
                backgroundColor: isHome ? "var(--text)" : "transparent",
                color: isHome ? "var(--background)" : "var(--text)",
                transform: isHome ? "scale(1.08)" : "scale(1)",
              }}
            >
              {isHome ? <HomeRounded className="w-8! h-8!" /> : <HomeOutlined className="w-7! h-7!" />}
            </button>

            <button
              type="button"
              onClick={() => navigate({ to: "/Hot" })}
              className="p-3 rounded-full transition-all duration-200 ease-in-out cursor-pointer"
              style={{
                backgroundColor: isHot ? "var(--text)" : "transparent",
                color: isHot ? "var(--background)" : "var(--text)",
                transform: isHot ? "scale(1.08)" : "scale(1)",
              }}
            >
              {isHot ? (
                <LocalFireDepartmentRounded className="w-8! h-8!" />
              ) : (
                <LocalFireDepartmentOutlined className="w-7! h-7!" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
