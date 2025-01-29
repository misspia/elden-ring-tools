import React from "react";
import c from "classnames";
import { Text } from "./Text";

type Theme = "gold" | "green";
type Size = "sm" | "md" | "lg";

type Props = {
  src?: string;
  size?: Size;
  /**
   * Color theme defaults to gold
   */
  theme?: Theme;
  alt?: string;
  className?: string;
};

export const ProfileImage: React.FC<Props> = ({
  src,
  size = "md",
  theme = "gold",
  alt,
  className,
}) => {
  return (
    <div
      className={c(
        "p-3 relative z-0",
        "w-full h-full",
        "flex items-center justify-center",
        "border",
        {
          "border-er-green-500": theme === "green",
          "border-er-gold-300": theme === "gold",
          "md:w-36 md:h-36": size === "sm",
          "md:w-64 md:h-64": size === "md",
          "md:w-80 md:h-80": size === "lg",
        },
        className,
      )}
    >
      <div
        className={c(
          "w-[75%] h-[75%] md:w-[85%] md:h-[85%]",
          "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rotate-45",
          "border z-[-1]",
          {
            "border-er-green-500/50": theme === "green",
            "border-er-gold-300/50": theme === "gold",
          },
        )}
      />
      <div
        className={c(
          "w-[100%] h-[100%] ",
          "absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
          "border rounded-full",
          {
            "border-er-green-500/50": theme === "green",
            "border-er-gold-300/50": theme === "gold",
          },
        )}
      />
      {src ? (
        <img src={src} alt={alt} className="w-full h-auto" />
      ) : (
        <Text as="span" className="text-er-gold-300">
          Image Unavailable
        </Text>
      )}
    </div>
  );
};
