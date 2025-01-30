import { ColorTheme } from "@/types/styles";
import React from "react";
import c from "classnames";
import { Text } from "@/components/Text";
import { Box } from "@/components/Box";

export type ListBoxItem = {
  key: React.Key;
  display: React.ReactNode;
};

export type ListBoxProps = {
  items: ListBoxItem[];
  theme: ColorTheme;
  title?: string;
};
export const ListBox: React.FC<ListBoxProps> = ({ items, theme, title }) => {
  return (
    <div className="flex flex-col gap-1">
      {title && <Box theme={theme}>{title}</Box>}
      <ul
        className={c({
          "text-er-gold-500": theme === "gold",
          "text-er-green-500": theme === "green",
        })}
      >
        {items.map((item) => (
          <li
            key={item.key}
            className="border-b-[1px] border-er-gold-700/50 py-2 px-0.5 last:border-0"
          >
            {typeof item.display === "string" ||
            typeof item.display === "number" ? (
              <Text as="span">{item.display}</Text>
            ) : (
              item.display
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
