import React from "react";
import { Page } from "@/components/Page";
import { useListBosses } from "@/hooks/data";
import { Loading } from "@/components/Loading";
import { PageTitle } from "@/components/PageTitle";
import { Link } from "@tanstack/react-router";
import { ItemPreview } from "@/components/ItemPreview";

export const BossesErrorPage: React.FC = () => {
  return <Page>bosses unavailable</Page>;
};

export const BossesPage: React.FC = () => {
  const { data, isLoading } = useListBosses();

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <BossesErrorPage />;
  }

  return (
    <Page>
      <PageTitle title="Bosses" />
      <div className="flex flex-wrap gap-2">
        {data.map((boss) => (
          <Link key={boss.id} to="/bosses/$bossId" params={{ bossId: boss.id }}>
            <ItemPreview src={boss.image} label={boss.name} shadow />
          </Link>
        ))}
      </div>
    </Page>
  );
};
