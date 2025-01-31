import React from "react";
import { useMatch } from "@tanstack/react-router";
import { Page } from "@/components/Page";
import { useShield } from "@/hooks/data";
import { ProfileTitle } from "@/components/ProfileTitle";
import { Loading } from "@/components/Loading";
import { ProfileImage } from "@/components/ProfileImage";
import { Text } from "@/components/Text";
import { BarGraph, BarGraphProps } from "@/components/BarGraph";
import { Table, TableProps } from "@/components/Table";
import { Diamond } from "@/components/Diamond";
import {
  getAttackStatDisplayName,
  getDefenceStatDisplayName,
  getMaxStatValue,
} from "@/utils/stats";
import { getAttributeDisplayName } from "@/utils/attributes";

export const ShieldErrorPage: React.FC = () => {
  return <Page>Shield unavailable</Page>;
};

export const ShieldPage: React.FC = () => {
  const match = useMatch({ from: "/shields/$shieldId" });
  const { data, isLoading } = useShield({ shieldId: match.params.shieldId });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <ShieldErrorPage />;
  }

  const requiredAttributeTable: TableProps = {
    caption: {
      text: (
        <Text as="h5" styleAs="h5">
          Required attributes
        </Text>
      ),
      side: "top",
    },
    theme: "gold",
    body: data.requiredAttributes.map((attribute) => ({
      key: attribute.name,
      items: [
        {
          type: "head",
          key: attribute.name,
          display: getAttributeDisplayName(attribute.name),
        },
        {
          type: "data",
          key: `${attribute.name}-value`,
          display: attribute.amount,
        },
      ],
    })),
  };

  const attackBarGraph: BarGraphProps = {
    caption: (
      <Text as="h5" styleAs="h5">
        Attack
      </Text>
    ),
    bars: data.attack.map((stat) => ({
      key: stat.name,
      label: getAttackStatDisplayName(stat.name),
      value: stat.amount,
      maxValue: getMaxStatValue(stat.name),
    })),
  };

  const defenceBarGraph: BarGraphProps = {
    caption: (
      <Text as="h5" styleAs="h5">
        Defence
      </Text>
    ),
    bars: data.defence.map((stat) => ({
      key: stat.name,
      label: getDefenceStatDisplayName(stat.name),
      value: stat.amount,
      maxValue: getMaxStatValue(stat.name),
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
    <Page className="flex flex-col gap-2 items-center">
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
            <BarGraph {...defenceBarGraph} />
            <div className="flex flex-col gap-4">
              <Table {...requiredAttributeTable} />
              <Table {...weightTable} />
            </div>
            <div className="flex flex-col items-center gap-1">
              <Text as="h5" className="text-er-gold-500">
                Scaling
              </Text>
              <div className="flex gap-8">
                {data.scalesWith.map((scale) => (
                  <div
                    key={scale.name}
                    className="flex flex-col gap-3 items-center"
                  >
                    <Text className="text-er-gold-500">{scale.name}</Text>
                    <Diamond filled>{scale.scaling}</Diamond>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};
