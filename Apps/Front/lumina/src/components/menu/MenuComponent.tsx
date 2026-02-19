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

  return (
    <section>
      <div className="show-mobile-only">
        <div className="fixed bottom-0 right-0 left-0 flex justify-center">
          <div className="p-5 bg-gray-500/30 rounded-full flex justify-center gap-5 backdrop-blur-md">
            <div
              onClick={() => navigate({ to: "/Home" })}
              className={`p-3 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${pathname === "/Home" ? "bg-white text-black scale-110" : "bg-none hover:bg-white/10"}`}
              
            >
              {pathname === "/Home" ? <HomeRounded className="w-8! h-8!"/> : <HomeOutlined className="w-7! h-7!" />}
            </div>
            <div
              onClick={() => navigate({ to: "/Hot" })}
              className={`p-3 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${pathname === "/Hot" ? "bg-white text-black scale-110" : "bg-none hover:bg-white/10"
              }`}
            >
              {pathname === "/Hot" ? (
                <LocalFireDepartmentRounded className="w-8! h-8! " />
              ) : (
                <LocalFireDepartmentOutlined className="w-7! h-7!" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
