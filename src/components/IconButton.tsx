import React from "react";
import { Icon } from "@/components/Icon";

type Props = {
  iconName: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const IconButton: React.FC<Props> = ({ iconName, onClick }) => {
  return (
    <button onClick={onClick}>
      <Icon name={iconName} />
    </button>
  );
};
