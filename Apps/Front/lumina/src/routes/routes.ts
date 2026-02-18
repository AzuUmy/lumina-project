import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  redirect,
} from "@tanstack/react-router";
import { Home } from "../pages/Home";
import MainLayout from "../layouts/mainLayout";

const rootRoute = createRootRoute({
  component: Outlet,
});

const MainLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "main-layout",
  component: MainLayout,
});

const HomeRoute = createRoute({
  getParentRoute: () => MainLayoutRoute,
  path: "/home",
  component: Home,
});

const indexRoute = createRoute({
  getParentRoute: () => MainLayoutRoute,
  path: "/",
  beforeLoad: () => {
    throw redirect({ to: "/home" });
  },
});

export const routeTree = rootRoute.addChildren([
  MainLayoutRoute.addChildren([indexRoute, HomeRoute]),
]);

export const Router = createRouter({
  routeTree,
});



declare module "@tanstack/react-router" {
  interface Register {
    router: typeof Router;
  }
}
