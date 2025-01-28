import React from "react";
import c from "classnames";
import { Text } from "@/components/Text";

type Bar = {
  key: React.Key;
  label: string;
  value: number;
  maxValue: number;
};

export type BarGraphProps = {
  bars: Bar[];
  caption?: React.ReactNode;
  className?: string;
};

export const BarGraph: React.FC<BarGraphProps> = ({
  bars,
  caption,
  className,
}) => {
  return (
    <div
      className={c("flex flex-col w-full gap-2 text-er-gold-500", className)}
    >
      {caption && <div>{caption}</div>}
      {bars.map((bar) => (
        <div key={bar.key} className="w-full flex flex-col gap-0.5">
          <div className="w-full flex justify-between text-er-gold-500">
            <Text>{bar.label}</Text>
            <Text>{bar.value}</Text>
          </div>
          <div className="w-full h-1 bg-er-gold-500/20">
            <div
              className="h-full bg-er-gold-500"
              style={{ width: `${(bar.value / bar.maxValue) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
