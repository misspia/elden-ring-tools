import React from "react";
import c from "classnames";

type Theme = "gold" | "green";
type Size = "sm" | "md" | "lg";

type Props = {
  src: string;
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
        "border",
        {
          "border-er-green-500": theme === "green",
          "border-er-gold-300": theme === "gold",
          "md:w-36 md:h-36": size === "sm",
          "md:w-48 md:h-48": size === "md",
          "md:w-64 md:h-64": size === "lg",
        },
        className,
      )}
    >
      <div
        className={c(
          // "w-[80%] h-[80%] absolute top-[50%] left-[50%] -translate-1/2 rotate-45 z-[-1]",
          "w-full h-full absolute top-0 left-0 rotate-45 z-[-1]",
          "border",
          {
            "border-er-green-500": theme === "green",
            "border-er-gold-300": theme === "gold",
          },
        )}
      ></div>
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
};
