import React from "react";
import { Outlet } from "@tanstack/react-router";
import { NavigationBar } from "@/routes/Root/NavigationBar";

export const Root: React.FC = () => {
  return (
    <div className="flex flex-start h-full">
      <NavigationBar />
      <div className="ml-2">
        <Outlet />
      </div>
    </div>
  );
};
