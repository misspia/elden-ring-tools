import React from "react";
import c from "classnames";
import { Text } from "@/components/Text";
import { ColorTheme } from "@/types/styles";
import { Box } from "@/components/Box";

type LineProps = {
  theme: ColorTheme;
  decorationSide: "left" | "right";
};
const Line: React.FC<LineProps> = ({ theme, decorationSide }) => {
  return (
    <div
      className={c("flex grow items-center", {
        "flex-row": decorationSide === "left",
        "flex-row-reverse": decorationSide === "right",
      })}
    >
      <div
        className={c("h-4 w-4 border-r-2 border-t-2 hidden md:block", {
          "border-er-green-500": theme === "green",
          "border-er-gold-700": theme === "gold",
          "rotate-45 -translate-x-[1px]": decorationSide === "left",
          "rotate-[225deg] translate-x-[1px]": decorationSide === "right",
        })}
      />
      <div
        className={c("h-[1px] grow", {
          "bg-er-green-500": theme === "green",
          "bg-er-gold-700": theme === "gold",
        })}
      />
    </div>
  );
};

type Props = {
  title: string;
  theme: ColorTheme;
  subtitle?: string;
  className?: string;
};

export const PageTitle: React.FC<Props> = ({
  title,
  theme,
  subtitle,
  className,
}) => {
  return (
    <div className={c("w-full flex flex-col items-center", className)}>
      <div
        className={c("w-full flex items-center gap-x-4", {
          "text-er-gold-700": theme === "gold",
          "text-er-green-500": theme === "green",
        })}
      >
        <Line theme={theme} decorationSide="right" />
        <Text as="h1" styleAs="h1" className="text-center">
          {title}
        </Text>
        <Line theme={theme} decorationSide="left" />
      </div>
      {subtitle && (
        <Box theme={theme} className="mt-2">
          <Text as="h2" styleAs="h5">
            {subtitle}
          </Text>
        </Box>
      )}
    </div>
  );
};
