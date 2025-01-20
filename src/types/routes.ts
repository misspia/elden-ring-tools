import { router } from "@/routes";

declare module "@tanstack/react-router" {
  interface Register {
    // This infers the type of the router and registers it across the entire project
    router: typeof router;
  }
}

export type RouterPath = keyof (typeof router)["routesByPath"];
