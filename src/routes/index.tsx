import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {
  createHashHistory,
  createRootRouteWithContext,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { AppContext } from "@/types/api";
import { HomePage } from "@/routes/Home";

import { AshesOfWarPage } from "@/routes/AshesOfWar";
import { NotFoundPage } from "@/routes/NotFound";
import { Root } from "@/routes/Root";
import { ArmorPage } from "@/routes/Armor";
import { CalculatorPage } from "@/routes/Calculator";
import { BuilderPage } from "@/routes/Builder";
import { WeaponsPage } from "@/routes/Weapons";

/**
 * Routes
 */
export const rootRoute = createRootRouteWithContext<AppContext>()({
  component: Root,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const ashesOfWarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "ashes",
  component: AshesOfWarPage,
});

const armorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "armor",
  component: ArmorPage,
});

const weaponsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "weapons",
  component: WeaponsPage,
});

const calculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "calculator",
  component: CalculatorPage,
});

const builderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "builder",
  component: BuilderPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  ashesOfWarRoute,
  armorRoute,
  weaponsRoute,
  calculatorRoute,
  builderRoute,
]);

/**
 * Router
 */
const hashHistory = createHashHistory();
const queryClient = new QueryClient();

export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPage,
  history: hashHistory,
  context: { queryClient },
});

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
