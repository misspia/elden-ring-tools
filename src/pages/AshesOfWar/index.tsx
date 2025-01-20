import React from "react";
import { Ashes } from "@/pages/AshesOfWar/Ashes";
import { Page } from "@/components/Page";

export const AshesOfWarPage: React.FC = () => {
  return (
    <Page>
      <h1 className="mb-2 capitalize">ashes of war</h1>
      <Ashes />
    </Page>
  );
};
