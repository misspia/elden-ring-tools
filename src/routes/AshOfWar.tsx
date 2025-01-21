import React from "react";
import { useMatch } from "@tanstack/react-router";
import { useAsh } from "@/hooks/data";

export const AshOfWarErrorPage: React.FC = () => {
  return <div>ashes of war not available</div>;
};

export const AshOfWarPage: React.FC = () => {
  const match = useMatch({ from: "/ashes/$ashId" });
  const { data, isLoading } = useAsh({ ashId: match.params.ashId });

  if (isLoading) {
    return <div>loading</div>;
  }
  if (!data) {
    return <AshOfWarErrorPage />;
  }

  return (
    <div className="flex">
      <h1>{data.name}</h1>
      <div>id: {match.params.ashId}</div>
    </div>
  );
};
