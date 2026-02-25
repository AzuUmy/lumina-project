import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  redirect,
} from "@tanstack/react-router";
import { Home } from "../pages/Home";
import MainLayout from "../layouts/mainLayout";
import { Hot } from "../pages/Hot";
import {Manga} from "../pages/Manga"

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
  path: "/Home",
  component: Home,
});

const HotRoute = createRoute({
  getParentRoute: () => MainLayoutRoute,
  path: "/Hot",
  component: Hot,
});

const indexRoute = createRoute({
  getParentRoute: () => MainLayoutRoute,
  path: "/",
  beforeLoad: () => {
    throw redirect({ to: "/Home" });
  },
});

const mangaRoute = createRoute({
  getParentRoute: () => MainLayoutRoute,
  path: "/Manga",
  validateSearch: (search: Record<string, unknown>) => ({
    id: typeof search.id === "string" ? search.id : "",
  }),
  component: Manga,

});

export const routeTree = rootRoute.addChildren([
  MainLayoutRoute.addChildren([indexRoute, HomeRoute, HotRoute, mangaRoute]),
]);

export const Router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof Router;
  }
}
