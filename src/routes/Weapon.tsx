import React from "react";
import { useMatch } from "@tanstack/react-router";
import { Loading } from "@/components/Loading";
import { useWeapon } from "@/hooks/data";
import { ItemPreview } from "@/components/ItemPreview";
import { Table, TableProps } from "@/components/Table";
import { getAttributeDisplayName } from "@/utils/attributes";
import {
  getAttackStatDisplayName,
  getDefenceStatDisplayName,
} from "@/utils/stats";
import { Page } from "@/components/Page";

export const WeaponErrorPage: React.FC = () => {
  return <Page>Weapon unavailable</Page>;
};

export const WeaponPage: React.FC = () => {
  const match = useMatch({ from: "/weapons/$weaponId" });
  const { data, isLoading } = useWeapon({ weaponId: match.params.weaponId });

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <WeaponErrorPage />;
  }

  const requiredAttributeTable: TableProps = {
    caption: {
      text: "Required attributes",
      side: "top",
      type: "default",
    },
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

  const scalingTable: TableProps = {
    caption: {
      text: "Scaling",
      side: "top",
      type: "default",
    },
    body: data.scalesWith.map((attribute) => ({
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
          display: attribute.scaling,
        },
      ],
    })),
  };

  const attackStatsTable: TableProps = {
    caption: {
      text: "Attack",
      side: "top",
      type: "default",
    },
    body: data.attack.map((stat) => ({
      key: stat.name,
      items: [
        {
          type: "head",
          key: stat.name,
          display: getAttackStatDisplayName(stat.name),
        },
        {
          type: "data",
          key: `${stat.name}-value`,
          display: stat.amount,
        },
      ],
    })),
  };

  const defenceStatsTable: TableProps = {
    caption: {
      text: "Defence",
      side: "top",
      type: "default",
    },
    body: data.defence.map((stat) => ({
      key: stat.name,
      items: [
        {
          type: "head",
          key: stat.name,
          display: getDefenceStatDisplayName(stat.name),
        },
        {
          type: "data",
          key: `${stat.name}-value`,
          display: stat.amount,
        },
      ],
    })),
  };

  const miscTable: TableProps = {
    body: [
      {
        key: "weight",
        items: [
          {
            type: "head",
            key: "label",
            display: "Weight",
          },
          {
            type: "data",
            key: "value",
            display: data.weight,
          },
        ],
      },
      {
        key: "category",
        items: [
          {
            type: "head",
            key: "label",
            display: "Category",
          },
          {
            type: "data",
            key: "value",
            display: data.category,
          },
        ],
      },
    ],
  };

  return (
    <Page className="flex flex-col gap-2 items-center">
      <h1>{data.name}</h1>
      <ItemPreview label={data.name} src={data.image} />
      <div className="text-center">{data.description}</div>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
        <Table className="md:w-36" {...attackStatsTable} />
        <Table className="md:w-36" {...defenceStatsTable} />
        <Table className="md:w-36" {...requiredAttributeTable} />
        <Table className="md:w-36" {...scalingTable} />
        <Table className="md:w-36" {...miscTable} />
      </div>
    </Page>
  );
};
