import React from "react";
import c from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Page: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={c(
        "w-full h-full flex flex-col box-border pt-2 pb-10 md:pb-2 px-4 md:px-6",
        className,
      )}
    >
      {children}
    </div>
  );
};
