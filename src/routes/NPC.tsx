import React from "react";
import { useMatch } from "@tanstack/react-router";
import { Page } from "@/components/Page";
import { useNPC } from "@/hooks/data";
import { ProfileTitle } from "@/components/ProfileTitle";
import { Loading } from "@/components/Loading";
import { ProfileImage } from "@/components/ProfileImage";
import { Text } from "@/components/Text";
import { ListBox, ListBoxProps } from "@/components/ListBox";

export const NPCErrorPage: React.FC = () => {
  return <Page>NPC unavailable</Page>;
};

export const NPCPage: React.FC = () => {
  const match = useMatch({ from: "/npcs/$npcId" });
  const { data, isLoading } = useNPC({ npcId: match.params.npcId });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <NPCErrorPage />;
  }

  const locationListBox: ListBoxProps = {
    title: "Locations",
    theme: "gold",
    items: data.location.split(",").map((location) => ({
      key: location,
      display: location,
    })),
  };

  return (
    <Page className="flex flex-col items-center gap-y-10">
      <ProfileTitle title={data.name} subtitle={data.role} theme="gold" />
      <div className="grow w-full flex justify-center items-center gap-x-10">
        <div className="flex flex-col gap-y-10 items-center">
          <ProfileImage src={data.image} alt={`Image of ${data.name}`} />
          {!!data.quote && (
            <Text className="text-center text-er-gold-500 w-full md:w-80">
              "{data.quote}"
            </Text>
          )}
        </div>
        <div className="flex flex-col gap-10">
          <ListBox {...locationListBox} />
        </div>
      </div>
    </Page>
  );
};
