import React from "react";
import { useMatch } from "@tanstack/react-router";
import { Page } from "@/components/Page";
import { useCreature } from "@/hooks/data";
import { ProfileTitle } from "@/components/ProfileTitle";
import { Loading } from "@/components/Loading";
import { ProfileImage } from "@/components/ProfileImage";
import { Text } from "@/components/Text";
import { ListBox, ListBoxProps } from "@/components/ListBox";

export const EnemyErrorPage: React.FC = () => {
  return <Page>enemy unavailable</Page>;
};

export const EnemyPage: React.FC = () => {
  const match = useMatch({ from: "/enemies/$enemyId" });
  const { data, isLoading } = useCreature({ creatureId: match.params.enemyId });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <EnemyErrorPage />;
  }

  const locationListBox: ListBoxProps = {
    title: "Locations",
    theme: "gold",
    items: data.location.split(",").map((location) => ({
      key: location,
      display: location,
    })),
  };

  const dropsListBox: ListBoxProps = {
    title: "Drops",
    theme: "gold",
    items: data.drops.map((drop) => ({
      key: drop,
      display: drop,
    })),
  };

  return (
    <Page className="flex flex-col items-center gap-y-10">
      <ProfileTitle title={data.name} theme="gold" />
      <div className="grow w-full flex justify-center items-center gap-x-10">
        <div className="flex flex-col gap-y-10 items-center">
          <ProfileImage src={data.image} alt={`Image of ${data.name}`} />
          <Text className="text-center text-er-gold-500 w-full md:w-80">
            {data.description}
          </Text>
        </div>
        <div className="flex flex-col gap-10">
          <ListBox {...locationListBox} />
          <ListBox {...dropsListBox} />
        </div>
      </div>
    </Page>
  );
};
