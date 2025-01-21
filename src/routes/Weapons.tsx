import { ItemPreview } from "@/components/ItemPreview";
import { Loading } from "@/components/Loading";
import { useListWeapons } from "@/hooks/data";
import { Link } from "@tanstack/react-router";
import React from "react";

export const WeaponsErrorPage: React.FC = () => {
  return <div>Weapons unavailable</div>;
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
    <div>
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
    </div>
  );
};
