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

import { Root } from "@/routes/Root";
import { NotFoundPage } from "@/routes/NotFound";
import { AshesOfWarErrorPage, AshesOfWarPage } from "@/routes/AshesOfWar";
import { AshOfWarErrorPage, AshOfWarPage } from "@/routes/AshOfWar";
import { ArmorPage, ArmorErrorPage } from "@/routes/Armor";
import { ArmorsErrorPage, ArmorsPage } from "@/routes/Armors";
import { WeaponsErrorPage, WeaponsPage } from "@/routes/Weapons";
import { WeaponErrorPage, WeaponPage } from "@/routes/Weapon";
import { EnemiesErrorPage, EnemiesPage } from "@/routes/Enemies";
import { EnemyErrorPage, EnemyPage } from "@/routes/Enemy";
import { CalculatorPage } from "@/routes/Calculator";
import { BuildPage, BuildErrorPage } from "@/routes/Build";
import { BossesErrorPage, BossesPage } from "@/routes/Bosses";
import { BossErrorPage, BossPage } from "@/routes/Boss";
import { NPCsErrorPage, NPCsPage } from "@/routes/NPCs";
import { NPCErrorPage, NPCPage } from "@/routes/NPC";

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
});

const ashesOfWarIndexRoute = createRoute({
  getParentRoute: () => ashesOfWarRoute,
  path: "/",
  component: AshesOfWarPage,
  errorComponent: AshesOfWarErrorPage,
});

const ashOfWarRoute = createRoute({
  getParentRoute: () => ashesOfWarRoute,
  path: "$ashId",
  component: AshOfWarPage,
  errorComponent: AshOfWarErrorPage,
});

const armorsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "armors",
});

const armorsIndexRoute = createRoute({
  getParentRoute: () => armorsRoute,
  path: "/",
  component: ArmorsPage,
  errorComponent: ArmorsErrorPage,
});

const armorRoute = createRoute({
  getParentRoute: () => armorsRoute,
  path: "$armorId",
  component: ArmorPage,
  errorComponent: ArmorErrorPage,
});

const weaponsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "weapons",
});

const weaponsIndexRoute = createRoute({
  getParentRoute: () => weaponsRoute,
  path: "/",
  component: WeaponsPage,
  errorComponent: WeaponsErrorPage,
});

const weaponRoute = createRoute({
  getParentRoute: () => weaponsRoute,
  path: "$weaponId",
  component: WeaponPage,
  errorComponent: WeaponErrorPage,
});

const enemiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "enemies",
});

const enemiesIndexRoute = createRoute({
  getParentRoute: () => enemiesRoute,
  path: "/",
  component: EnemiesPage,
  errorComponent: EnemiesErrorPage,
});

const enemeyRoute = createRoute({
  getParentRoute: () => enemiesRoute,
  path: "$enemyId",
  component: EnemyPage,
  errorComponent: EnemyErrorPage,
});

const bossesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "bosses",
});

const bossesIndexRoute = createRoute({
  getParentRoute: () => bossesRoute,
  path: "/",
  component: BossesPage,
  errorComponent: BossesErrorPage,
});

const bossRoute = createRoute({
  getParentRoute: () => bossesRoute,
  path: "$bossId",
  component: BossPage,
  errorComponent: BossErrorPage,
});

const NPCsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "npcs",
});

const NPCsIndexRoute = createRoute({
  getParentRoute: () => NPCsRoute,
  path: "/",
  component: NPCsPage,
  errorComponent: NPCsErrorPage,
});

const NPCRoute = createRoute({
  getParentRoute: () => NPCsRoute,
  path: "$npcId",
  component: NPCPage,
  errorComponent: NPCErrorPage,
});

const calculatorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "calculator",
  component: CalculatorPage,
});

const builderRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "build",
  component: BuildPage,
  errorComponent: BuildErrorPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  ashesOfWarRoute.addChildren([ashesOfWarIndexRoute, ashOfWarRoute]),
  armorsRoute.addChildren([armorsIndexRoute, armorRoute]),
  weaponsRoute.addChildren([weaponsIndexRoute, weaponRoute]),
  enemiesRoute.addChildren([enemiesIndexRoute, enemeyRoute]),
  bossesRoute.addChildren([bossesIndexRoute, bossRoute]),
  NPCsRoute.addChildren([NPCsIndexRoute, NPCRoute]),
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
