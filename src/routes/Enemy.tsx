import React from "react";
import { Page } from "@/components/Page";

export const EnemyErrorPage: React.FC = () => {
  return <Page>enemy unavailable</Page>;
};

export const EnemyPage: React.FC = () => {
  return (
    <Page>
      <h1>enemy page</h1>
    </Page>
  );
};
