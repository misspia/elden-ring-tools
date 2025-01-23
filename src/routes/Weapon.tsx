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
import { Text } from "@/components/Text";
import c from "classnames";

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
      text: (
        <Text as="h5" styleAs="h5">
          Required attributes
        </Text>
      ),
      side: "top",
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
      text: (
        <Text as="h5" styleAs="h5">
          Scaling
        </Text>
      ),
      side: "top",
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
      text: (
        <Text as="h5" styleAs="h5">
          Attack
        </Text>
      ),
      side: "top",
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
      text: (
        <Text as="h5" styleAs="h5">
          Defence
        </Text>
      ),
      side: "top",
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
      <Text as="h1" styleAs="h1">
        {data.name}
      </Text>
      <ItemPreview label={data.name} src={data.image} />
      <Text className="text-center">{data.description}</Text>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
        <div
          className={c(
            "p-3 ",
            // "border border-0.5 border-er-green-300",
            // "shadow-er-green-300 shadow-md inset-shadow-er-green-300 inset-shadow-sm"
            "border-y border-er-green-300",
          )}
        >
          <Table className="md:w-36" {...attackStatsTable} />
        </div>
        <Table className="md:w-36" {...defenceStatsTable} />
        <Table className="md:w-36" {...requiredAttributeTable} />
        <Table className="md:w-36" {...scalingTable} />
        <Table className="md:w-36" {...miscTable} />
      </div>
    </Page>
  );
};
