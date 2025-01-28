import React from "react";
import c from "classnames";
import { AsElement, Text } from "@/components/Text";
import { ColorTheme } from "@/types/styles";

type LineProps = {
  theme: ColorTheme;
};
const Line: React.FC<LineProps> = ({ theme }) => {
  return (
    <div
      className={c("h-[1px] grow", {
        "bg-er-green-500": theme === "green",
        "bg-er-gold-700": theme === "gold",
      })}
    />
  );
};

type Props = {
  text: string;
  as: Extract<AsElement, "h1" | "h2" | "h3" | "h4" | "h5">;
  theme: ColorTheme;
  className?: string;
};

export const PageTitle: React.FC<Props> = ({ text, as, theme, className }) => {
  return (
    <div
      className={c(
        "w-full flex items-center gap-x-4",
        {
          "text-er-gold-700": theme === "gold",
          "text-er-green-500": theme === "green",
        },
        className,
      )}
    >
      <Line theme={theme} />
      <Text as={as} styleAs={as}>
        {text}
      </Text>
      <Line theme={theme} />
    </div>
  );
};
