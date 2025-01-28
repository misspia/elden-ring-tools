import React from "react";
import c from "classnames";

type Props = {
  filled?: boolean;
  children?: React.ReactNode;
  className?: string;
};

export const Diamond: React.FC<Props> = ({ filled, children, className }) => {
  return (
    <div
      className={c(
        "w-8 h-8 rotate-45",
        "border border-er-gold-500",
        {
          "bg-transparent text-er-gold-500": !filled,
          "bg-er-gold-500 text-er-black font-bold": filled,
        },
        className,
      )}
    >
      <div
        className={c(
          "w-full h-full flex flex-col items-center justify-center",
          "-rotate-45",
        )}
      >
        {children}
      </div>
    </div>
  );
};
