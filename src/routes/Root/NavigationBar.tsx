import React, { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import c from "classnames";
import { RouterPath } from "@/types/routes";
import { Menu, MenuItem } from "@/routes/Root/Menu";
import { Text } from "@/components/Text";

type NavGroup = {
  label: string;
  items?: MenuItem[];
  to?: RouterPath;
};

const navGroups: NavGroup[] = [
  {
    label: "Game",
    items: [
      {
        key: "Ashes of War",
        label: "Ashes of War",
        to: "/ashes",
      },
      {
        key: "Armor",
        label: "Armor",
        to: "/armors",
      },
      {
        key: "Weapons",
        label: "Weapons",
        to: "/weapons",
      },
      {
        key: "Enemies",
        label: "Enemies",
        to: "/enemies",
      },
    ],
  },
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Tools",
    items: [
      {
        key: "Calculator",
        label: "Calculator",
        to: "/calculator",
      },
      {
        key: "Build",
        label: "Build",
        to: "/build",
      },
    ],
  },
];

export const NavigationBar: React.FC = () => {
  const [isNavBarActive, setIsNavBarActive] = useState(false);

  return (
    <div
      className={c(
        "fixed bottom-2 left-[50%] -translate-x-[50%] h-navbar",
        "rounded-b-xl",
        "flex justify-center items-center",
        "bg-er-green-900 shadow-navbar z-navbar",
        {
          "transition duration-0 delay-200 rounded-t-xl": !isNavBarActive,
        },
      )}
    >
      {navGroups.map((group, index) => (
        <NavItem
          key={index}
          {...group}
          onActivateNavBar={() => setIsNavBarActive(true)}
          onDeactivateNavBar={() => setIsNavBarActive(false)}
        />
      ))}
    </div>
  );
};

type NavItemProps = NavGroup & {
  onActivateNavBar: VoidFunction;
  onDeactivateNavBar: VoidFunction;
};

const NavItem: React.FC<NavItemProps> = ({
  label,
  to,
  items,
  onActivateNavBar,
  onDeactivateNavBar,
}) => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const navigate = useNavigate();

  const onActivateMenu = () => {
    if (!items || (items && items.length === 0)) return;
    onActivateNavBar();
    setIsMenuActive(true);
  };

  const onDeactivateMenu = () => {
    onDeactivateNavBar();
    setIsMenuActive(false);
  };

  const onNavigateTo = () => {
    if (!to) return;
    // @ts-ignore
    navigate({ to });
  };

  return (
    <div
      className="flex flex-col justify-center h-full px-6 py-2 cursor-pointer"
      onMouseEnter={onActivateMenu}
      onMouseLeave={onDeactivateMenu}
      onClick={onNavigateTo}
    >
      <Menu
        show={isMenuActive}
        items={items ?? []}
        onClose={onDeactivateMenu}
      />
      <div
        className={c(
          "flex items-center justify-center px-4",
          "h-full w-full rounded-xl ",
          "transition duration-100 ease-in-out",
          {
            "bg-er-green-800": isMenuActive,
          },
        )}
      >
        <Text className="font-bold text-er-gold-500">{label}</Text>
      </div>
    </div>
  );
};
