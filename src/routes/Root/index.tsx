import React from "react";
import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { NavigationBar } from "@/routes/Root/NavigationBar";

export const Root: React.FC = () => {
  return (
    <div className="flex flex-start h-full w-full pb-navbar-height">
      <ScrollRestoration />
      <Outlet />
      <NavigationBar />
    </div>
  );
};
