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
    label: "Compare",
    items: [
      {
        label: "Ashes of War",
        to: "/ashes",
      },
      {
        label: "Armor",
        to: "/armors",
      },
      {
        label: "Weapons",
        to: "/weapons",
      },
      {
        label: "Enemies",
        to: "/enemies",
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
        label: "Build",
        to: "/build",
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
    <div className="flex-col w-36 p-2.5 bg-er-orange">
      <Link to="/">Home</Link>
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
      <div className="p-1 cursor-pointer" onClick={onClick}>
        {label}
      </div>
      {active &&
        items.map((item) => (
          <div key={item.label} className="ml-3">
            <Link to={item.to}>{item.label}</Link>
          </div>
        ))}
    </div>
  );
};
