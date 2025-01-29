import React from "react";
import c from "classnames";
import { Text } from "@/components/Text";

type Props = {
  label: string;
  /**
   * image url source
   */
  src?: string;
  shadow?: boolean;
  className?: string;
};

export const ItemPreview: React.FC<Props> = ({
  label,
  src,
  shadow,
  className,
}) => {
  const formattedLabel = label.replace("Ash Of War: ", "");
  return (
    <div
      className={c(
        "flex justify-center items-center",
        "w-44 h-44 rounded-lg",
        "bg-er-black",
        "cursor-pointer",
        "transition-all duration-300",
        "hover:bg-white ",
        { "shadow-xl": shadow },
        className,
      )}
    >
      {src ? (
        <img src={src} alt={label} className="w-full h-auto" />
      ) : (
        <div className="text-center text-er-gold-500">
          <div className="bold">{formattedLabel}</div>
          <Text as="span">(Image Unavailable)</Text>
        </div>
      )}
    </div>
  );
};
