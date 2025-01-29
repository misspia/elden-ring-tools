import React from "react";
import { Page } from "@/components/Page";
import { PageTitle } from "@/components/PageTitle";
import { useListArmors } from "@/hooks/data";
import { Loading } from "@/components/Loading";
import { Link } from "@tanstack/react-router";
import { ItemPreview } from "@/components/ItemPreview";

export const ArmorsErrorPage: React.FC = () => {
  return <Page>Armors unavailable</Page>;
};

export const ArmorsPage: React.FC = () => {
  const { data, isLoading } = useListArmors();

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <ArmorsErrorPage />;
  }

  return (
    <Page>
      <PageTitle title="Armors" />
      <div className="flex flex-wrap gap-2">
        {data.map((armor) => (
          <Link
            key={armor.id}
            to="/armors/$armorId"
            params={{ armorId: armor.id }}
          >
            <ItemPreview src={armor.image} label={armor.name} shadow />
          </Link>
        ))}
      </div>
    </Page>
  );
};
