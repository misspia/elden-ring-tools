import React from "react";
import { useMatch } from "@tanstack/react-router";
import { Page } from "@/components/Page";
import { useAmmo } from "@/hooks/data";
import { ProfileTitle } from "@/components/ProfileTitle";
import { Loading } from "@/components/Loading";
import { ProfileImage } from "@/components/ProfileImage";
import { Text } from "@/components/Text";
import { BarGraph, BarGraphProps } from "@/components/BarGraph";
import { getAmmoStatDisplayName, getMaxStatValue } from "@/utils/stats";
import { ListBox, ListBoxProps } from "@/components/ListBox";

export const AmmoErrorPage: React.FC = () => {
  return <Page>Ammo unavailable</Page>;
};

export const AmmoPage: React.FC = () => {
  const match = useMatch({ from: "/ammos/$ammoId" });
  const { data, isLoading } = useAmmo({ ammoId: match.params.ammoId });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <AmmoErrorPage />;
  }

  const attackPowerBarGraph: BarGraphProps = {
    caption: (
      <Text as="h5" styleAs="h5">
        Attack
      </Text>
    ),
    bars: data.attackPower.map((stat) => ({
      key: stat.name,
      label: getAmmoStatDisplayName(stat.name),
      value: stat.amount,
      maxValue: getMaxStatValue(stat.name),
    })),
  };

  const passiveListBox: ListBoxProps = {
    title: "Passive",
    theme: "gold",
    items: [
      {
        key: "passive",
        display:
          data.passive === "- " || data.passive === "-" ? "none" : data.passive,
      },
    ],
  };

  return (
    <Page className="flex flex-col gap-2 items-center">
      <ProfileTitle
        title={data.name}
        subtitle={data.type}
        theme="gold"
        className="my-10"
      />
      <div className="w-full flex flex-col md:flex-row justify-center gap-4">
        <div className="grow flex flex-col justify-center items-center gap-10">
          <ProfileImage src={data.image} alt={`Image of ${data.name}`} />
          <Text className="text-center w-full md:w-80 text-er-gold-500">
            {data.description}
          </Text>
        </div>
        <div className="grow flex flex-col gap-6">
          <div className="flex gap-2"></div>
          <div className="grow flex flex-col gap-10">
            <BarGraph {...attackPowerBarGraph} />
            <ListBox {...passiveListBox} />
          </div>
        </div>
      </div>
    </Page>
  );
};
