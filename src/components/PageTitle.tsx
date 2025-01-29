import React from "react";
import { Text } from "@/components/Text";

type Props = {
  title: string;
};

export const PageTitle: React.FC<Props> = ({ title }) => {
  return (
    <Text as="h1" styleAs="h1" className="text-er-gold-500">
      {title}
    </Text>
  );
};
