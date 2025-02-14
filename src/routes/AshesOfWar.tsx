import React from "react";
import { Page } from "@/components/Page";
import { useListAshes } from "@/hooks/data";
import { ItemPreview } from "@/components/ItemPreview";
import { Link } from "@tanstack/react-router";
import { Loading } from "@/components/Loading";

export const AshesOfWarErrorPage: React.FC = () => {
  return <Page>ashes of war not available</Page>;
};

export const AshesOfWarPage: React.FC = () => {
  const { data, isLoading } = useListAshes();

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <AshesOfWarErrorPage />;
  }

  return (
    <Page>
      <h1 className="mb-2 capitalize">ashes of war</h1>
      <div className="w-full flex gap-5 flex-wrap">
        {data.map((ash) => (
          <Link key={ash.id} to="/ashes/$ashId" params={{ ashId: ash.id }}>
            <ItemPreview label={ash.name} src={ash.image} shadow />
          </Link>
        ))}
      </div>
    </Page>
  );
};
