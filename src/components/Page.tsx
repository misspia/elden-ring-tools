import React from "react";
import c from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string; // css classes for children wrapper
};

export const Page: React.FC<Props> = ({ children, className }) => {
  return <div className={c("flex flex-col", className)}>{children}</div>;
};
