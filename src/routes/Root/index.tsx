import React from "react";
import { Outlet, ScrollRestoration } from "@tanstack/react-router";
import { NavigationBar } from "@/routes/Root/NavigationBar";

export const Root: React.FC = () => {
  return (
    <div className="flex flex-start flex-col h-full w-full min-h-lvh">
      <NavigationBar />
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};
