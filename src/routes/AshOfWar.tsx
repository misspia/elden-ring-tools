import React from "react";
import { useMatch } from "@tanstack/react-router";
import { useAsh } from "@/hooks/data";
import { Loading } from "@/components/Loading";
import { Page } from "@/components/Page";
import { ProfileTitle } from "@/components/ProfileTitle";
import { ProfileImage } from "@/components/ProfileImage";
import { Text } from "@/components/Text";

export const AshOfWarErrorPage: React.FC = () => {
  return <Page>ashes of war not available</Page>;
};

export const AshOfWarPage: React.FC = () => {
  const match = useMatch({ from: "/ashes/$ashId" });
  const { data, isLoading } = useAsh({ ashId: match.params.ashId });

  if (isLoading) {
    return <Loading />;
  }
  if (!data) {
    return <AshOfWarErrorPage />;
  }

  return (
    <Page className="flex flex-col items-center justify-center gap-10">
      <ProfileTitle
        title={data.name}
        subtitle={`Skill: ${data.skill}`}
        theme="gold"
      />
      <ProfileImage src={data.image} alt={`Image of ${data.name}`} />
      {data.affinity}
      <Text className="text-center w-full md:w-96 text-er-gold-500">
        {data.description}
      </Text>
    </Page>
  );
};
