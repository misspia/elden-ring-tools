import React from "react";
import c from "classnames";
import { Text } from "@/components/Text";
import { ColorTheme } from "@/types/styles";

type Props = {
  theme: ColorTheme;
  children?: React.ReactNode;
  className?: string;
};

export const Box: React.FC<Props> = ({ theme, children, className }) => {
  return (
    <div className={c("flex flex-col gap-0.5", className)}>
      <div
        className={c("px-2 py-0 font-bold", {
          "bg-er-gold-500 text-er-black": theme === "gold",
          "bg-er-green-500 text-er-black": theme === "green",
        })}
      >
        {typeof children === "string" || typeof children === "number" ? (
          <Text as="p">{children}</Text>
        ) : (
          children
        )}
      </div>
    </div>
  );
};
