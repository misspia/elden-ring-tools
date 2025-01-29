import React from "react";
import { useMatch } from "@tanstack/react-router";
import { Loading } from "@/components/Loading";
import { useArmor } from "@/hooks/data";
import { Table, TableProps } from "@/components/Table";
import {
  getResistanceDisplayName,
  getDamageNegationDisplayName,
} from "@/utils/stats";
import { Page } from "@/components/Page";
import { Text } from "@/components/Text";
import { ProfileImage } from "@/components/ProfileImage";
import { BarGraph, BarGraphProps } from "@/components/BarGraph";
import { ProfileTitle } from "@/components/ProfileTitle";
import {
  MAX_DAMAGE_NEGATION_VALUE,
  MAX_RESISTANCE_VALUE,
} from "@/api/constants/game";

export const ArmorErrorPage: React.FC = () => {
  return <Page>Armor unavailable</Page>;
};

export const ArmorPage: React.FC = () => {
  const match = useMatch({ from: "/armors/$armorId" });
  const { data, isLoading } = useArmor({ armorId: match.params.armorId });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <ArmorErrorPage />;
  }

  const attackBarGraph: BarGraphProps = {
    caption: (
      <Text as="h5" styleAs="h5">
        Damage Negation
      </Text>
    ),
    bars: data.dmgNegation.map((stat) => ({
      key: stat.name,
      label: getDamageNegationDisplayName(stat.name),
      value: stat.amount,
      maxValue: MAX_DAMAGE_NEGATION_VALUE,
    })),
  };

  const resistanceBarGraph: BarGraphProps = {
    caption: (
      <Text as="h5" styleAs="h5">
        Resistance
      </Text>
    ),
    bars: data.resistance.map((stat) => ({
      key: stat.name,
      label: getResistanceDisplayName(stat.name),
      value: stat.amount,
      maxValue: MAX_RESISTANCE_VALUE,
    })),
  };

  const weightTable: TableProps = {
    theme: "gold",
    body: [
      {
        key: "weight",
        items: [
          {
            key: "weight",
            type: "head",
            display: "weight",
          },
          {
            key: "weight-value",
            type: "data",
            display: data.weight,
          },
        ],
      },
    ],
  };

  return (
    <Page>
      <ProfileTitle
        title={data.name}
        subtitle={data.category}
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
          <div className="grow grid gap-10 grid-cols-1 md:grid-cols-2">
            <BarGraph {...attackBarGraph} />
            <BarGraph {...resistanceBarGraph} />
            <div className="flex flex-col gap-4">
              <Table {...weightTable} />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
