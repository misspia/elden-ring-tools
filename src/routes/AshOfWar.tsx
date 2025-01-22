import React from "react";
import { useMatch } from "@tanstack/react-router";
import { useAsh } from "@/hooks/data";
import { Loading } from "@/components/Loading";
import { Page } from "@/components/Page";

export const AshOfWarErrorPage: React.FC = () => {
  return <Page>ashes of war not available</Page>;
};

export const AshOfWarPage: React.FC = () => {
  const match = useMatch({ from: "/ashes/$ashId" });
  const { data, isLoading } = useAsh({ ashId: match.params.ashId });

  if (isLoading) {
    return <Loading />;
  }
  if (!data) {
    return <AshOfWarErrorPage />;
  }

  return (
    <Page className="flex">
      <h1>{data.name}</h1>
      <div>id: {match.params.ashId}</div>
    </Page>
  );
};
