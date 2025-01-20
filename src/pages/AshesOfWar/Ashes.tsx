import React, { useEffect } from "react";
import { useListAshes } from "@/hooks/data";

export const Ashes: React.FC = () => {
  const { data, isLoading } = useListAshes();

  useEffect(() => {
    console.debug(data);
  }, [data]);

  if (isLoading) {
    return <div>loading</div>;
  }

  if (!data) {
    return <div>Ashes are currently unavailable</div>;
  }
  return (
    <div className="flex-col">
      {data.map((ash) => (
        <div>{ash.name}</div>
      ))}
    </div>
  );
};
