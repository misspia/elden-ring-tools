import React from "react";
import { useMatch } from "@tanstack/react-router";
import { Page } from "@/components/Page";
import { useBoss } from "@/hooks/data";
import { ProfileTitle } from "@/components/ProfileTitle";
import { Loading } from "@/components/Loading";
import { ProfileImage } from "@/components/ProfileImage";
import { Text } from "@/components/Text";
import { ListBox, ListBoxProps } from "@/components/ListBox";

export const BossErrorPage: React.FC = () => {
  return <Page>bosses unavailable</Page>;
};

export const BossPage: React.FC = () => {
  const match = useMatch({ from: "/bosses/$bossId" });
  const { data, isLoading } = useBoss({ bossId: match.params.bossId });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <BossErrorPage />;
  }

  const hpListBox: ListBoxProps = {
    title: "Health",
    theme: "gold",
    items: [
      {
        key: "hp",
        display: data.healthPoints,
      },
    ],
  };

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
          <ListBox {...hpListBox} />
          <ListBox {...locationListBox} />
          <ListBox {...dropsListBox} />
        </div>
      </div>
    </Page>
  );
};
