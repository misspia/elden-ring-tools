import { ItemPreview } from "@/components/ItemPreview";
import { Loading } from "@/components/Loading";
import { Page } from "@/components/Page";
import { PageTitle } from "@/components/PageTitle";
import { useListCreatures } from "@/hooks/data";
import { Link } from "@tanstack/react-router";
import React from "react";

export const EnemiesErrorPage: React.FC = () => {
  return <Page>enemies unavailable</Page>;
};

export const EnemiesPage: React.FC = () => {
  const { data, isLoading } = useListCreatures();
  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <EnemiesErrorPage />;
  }

  return (
    <Page>
      <PageTitle title="Enemies" />
      <div className="flex flex-wrap gap-2">
        {data.map((enemy) => (
          <Link
            key={enemy.id}
            to="/enemies/$enemyId"
            params={{ enemyId: enemy.id }}
          >
            <ItemPreview src={enemy.image} label={enemy.name} shadow />
          </Link>
        ))}
      </div>
    </Page>
  );
};
