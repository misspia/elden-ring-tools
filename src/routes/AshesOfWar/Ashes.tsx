import React from "react";
import { useListAshes } from "@/hooks/data";

export const Ashes: React.FC = () => {
  const { data, isLoading } = useListAshes();

  if (isLoading) {
    return <div>loading</div>;
  }

  if (!data) {
    return <div>Ashes are currently unavailable</div>;
  }
  return (
    <div className="flex-col">
      {data.map((ash, index) => (
        <div key={index}>{ash.name}</div>
      ))}
    </div>
  );
};
