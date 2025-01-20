import React from "react";
import c from "classnames";
import { NavigationBar } from "@/components/NavigationBar";

type Props = {
  children: React.ReactNode;
  className?: string; // css classes for children wrapper
};

export const Page: React.FC<Props> = ({ children, className }) => {
  return (
    <div className="flex flex-start h-full">
      <NavigationBar />
      <div className={c("ml-2", className)}>{children}</div>
    </div>
  );
};
