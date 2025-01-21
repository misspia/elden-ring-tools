import React from "react";
import { useMatch } from "@tanstack/react-router";
import { Loading } from "@/components/Loading";
import { useWeapon } from "@/hooks/data";
import { ItemPreview } from "@/components/ItemPreview";

export const WeaponErrorPage: React.FC = () => {
  return <div>Weapon unavailable</div>;
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

  return (
    <div className="flex flex-col gap-2">
      <h1>{data.name}</h1>
      <ItemPreview label={data.name} src={data.image} />
      <div>{data.description}</div>
    </div>
  );
};
