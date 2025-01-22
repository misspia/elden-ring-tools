import { Page } from "@/components/Page";
import React from "react";

export const EnemiesErrorPage: React.FC = () => {
  return <Page>enemies unavailable</Page>;
};

export const EnemiesPage: React.FC = () => {
  return (
    <Page>
      <h1>enemies page</h1>
    </Page>
  );
};
