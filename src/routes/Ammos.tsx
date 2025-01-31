import React from "react";
import { Page } from "@/components/Page";
import { useListAmmos } from "@/hooks/data";
import { Loading } from "@/components/Loading";
import { PageTitle } from "@/components/PageTitle";
import { Link } from "@tanstack/react-router";
import { ItemPreview } from "@/components/ItemPreview";

export const AmmosErrorPage: React.FC = () => {
  return <Page>Ammos unavailable</Page>;
};

export const AmmosPage: React.FC = () => {
  const { data, isLoading } = useListAmmos();

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <AmmosErrorPage />;
  }

  return (
    <Page>
      <PageTitle title="Ammos" />
      <div className="flex flex-wrap gap-2">
        {data.map((ammo) => (
          <Link key={ammo.id} to="/ammos/$ammoId" params={{ ammoId: ammo.id }}>
            <ItemPreview src={ammo.image} label={ammo.name} shadow />
          </Link>
        ))}
      </div>
    </Page>
  );
};
