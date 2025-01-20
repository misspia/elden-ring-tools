import { RouterPath } from "@/types/routes";
import { Link } from "@tanstack/react-router";
import React, { useState } from "react";

type NavItem = {
  label: string;
  to: RouterPath;
};

type NavGroup = {
  label: string;
  items: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    label: "Equipment",
    items: [
      {
        label: "Ashes of War",
        to: "/ashes",
      },
      {
        label: "Armor",
        to: "/armor",
      },
    ],
  },
  {
    label: "Tools",
    items: [
      {
        label: "Calculator",
        to: "/calculator",
      },
      {
        label: "Builder",
        to: "/builder",
      },
    ],
  },
];

export const NavigationBar: React.FC = () => {
  const [activeGroupIndex, setActiveGroupIndex] = useState<number>(0);

  const onGroupClick = (index: number) => {
    setActiveGroupIndex(index);
  };

  return (
    <div className="flex-col w-full bg-er-orange">
      <Link to="/">home</Link>
      {navGroups.map((group, index) => (
        <NavGroup
          key={index}
          active={index === activeGroupIndex}
          onClick={() => onGroupClick(index)}
          {...group}
        />
      ))}
    </div>
  );
};

type NavGroupProps = NavGroup & { active: boolean; onClick: VoidFunction };

const NavGroup: React.FC<NavGroupProps> = ({
  label,
  items,
  active,
  onClick,
}) => {
  return (
    <div className="">
      <div className="cursor-pointer" onClick={onClick}>
        {label}
      </div>
      {active &&
        items.map((item) => (
          <div key={item.label}>
            <Link to={item.to}>{item.label}</Link>
          </div>
        ))}
    </div>
  );
};
