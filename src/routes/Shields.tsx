import React from "react";
import { Page } from "@/components/Page";
import { useListShields } from "@/hooks/data";
import { Loading } from "@/components/Loading";
import { PageTitle } from "@/components/PageTitle";
import { Link } from "@tanstack/react-router";
import { ItemPreview } from "@/components/ItemPreview";

export const ShieldsErrorPage: React.FC = () => {
  return <Page>Shields unavailable</Page>;
};

export const ShieldsPage: React.FC = () => {
  const { data, isLoading } = useListShields();

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <ShieldsErrorPage />;
  }

  return (
    <Page>
      <PageTitle title="Shields" />
      <div className="flex flex-wrap gap-2">
        {data.map((shield) => (
          <Link
            key={shield.id}
            to="/shields/$shieldId"
            params={{ shieldId: shield.id }}
          >
            <ItemPreview src={shield.image} label={shield.name} shadow />
          </Link>
        ))}
      </div>
    </Page>
  );
};
