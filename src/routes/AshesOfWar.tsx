import React from "react";
import { Page } from "@/components/Page";
import { useListAshes } from "@/hooks/data";
import { ItemPreview } from "@/components/ItemPreview";
import { Link } from "@tanstack/react-router";

export const AshesOfWarErrorPage: React.FC = () => {
  return <div>ashes of war not available</div>;
};

export const AshesOfWarPage: React.FC = () => {
  const { data, isLoading } = useListAshes();

  if (isLoading) {
    return <div>loading</div>;
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
