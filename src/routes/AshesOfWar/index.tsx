import React from "react";
import { Ashes } from "@/routes/AshesOfWar/Ashes";
import { Page } from "@/components/Page";

export const AshesOfWarErrorPage: React.FC = () => {
  return <div>ashes of war not available</div>;
};

export const AshesOfWarPage: React.FC = () => {
  return (
    <Page>
      <h1 className="mb-2 capitalize">ashes of war</h1>
      <Ashes />
    </Page>
  );
};
