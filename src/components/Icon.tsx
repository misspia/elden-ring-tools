import React from "react";

type Props = {
  name: string;
};

export const Icon: React.FC<Props> = ({ name }) => {
  return <div>{name}</div>;
};
