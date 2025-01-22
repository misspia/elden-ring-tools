import React from "react";
import { ItemPreview } from "@/components/ItemPreview";
import { Loading } from "@/components/Loading";
import { Page } from "@/components/Page";
import { useListWeapons } from "@/hooks/data";
import { Link } from "@tanstack/react-router";

export const WeaponsErrorPage: React.FC = () => {
  return <Page>Weapons unavailable</Page>;
};

export const WeaponsPage: React.FC = () => {
  const { data, isLoading } = useListWeapons();

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <WeaponsErrorPage />;
  }

  return (
    <Page>
      <h1>Weapons page</h1>
      <div className="flex flex-wrap gap-2">
        {data.map((weapon) => (
          <Link
            key={weapon.id}
            to="/weapons/$weaponId"
            params={{ weaponId: weapon.id }}
          >
            <ItemPreview src={weapon.image} label={weapon.name} shadow />
          </Link>
        ))}
      </div>
    </Page>
  );
};
