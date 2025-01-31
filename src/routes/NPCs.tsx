import React from "react";
import { Page } from "@/components/Page";
import { useListNPCs } from "@/hooks/data";
import { Loading } from "@/components/Loading";
import { PageTitle } from "@/components/PageTitle";
import { Link } from "@tanstack/react-router";
import { ItemPreview } from "@/components/ItemPreview";

export const NPCsErrorPage: React.FC = () => {
  return <Page>NPCs unavailable</Page>;
};

export const NPCsPage: React.FC = () => {
  const { data, isLoading } = useListNPCs();

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <NPCsErrorPage />;
  }

  return (
    <Page>
      <PageTitle title="NPCs" />
      <div className="flex flex-wrap gap-2">
        {data.map((npc) => (
          <Link key={npc.id} to="/npcs/$npcId" params={{ npcId: npc.id }}>
            <ItemPreview src={npc.image} label={npc.name} shadow />
          </Link>
        ))}
      </div>
    </Page>
  );
};
