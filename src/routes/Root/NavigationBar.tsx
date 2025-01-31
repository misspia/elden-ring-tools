import React, { useEffect, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import c from "classnames";
import { RouterPath } from "@/types/routes";
import { Menu, MenuItem } from "@/routes/Root/Menu";
import { Text } from "@/components/Text";

type NavGroup = {
  label: React.ReactNode;
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
        key: "Shields",
        label: "Shields",
        to: "/shields",
      },
      {
        key: "Ammos",
        label: "Ammos",
        to: "/ammos",
      },
      {
        key: "Enemies",
        label: "Enemies",
        to: "/enemies",
      },
      {
        key: "Bosses",
        label: "Bosses",
        to: "/bosses",
      },
      {
        key: "NPCs",
        label: "NPCs",
        to: "/npcs",
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
  const [isScrollAtTop, setIsScrollAtTop] = useState(true);

  useEffect(() => {
    const setScrollState: EventListener = () => {
      setIsScrollAtTop(window.scrollY === 0);
    };

    if (!window) return;
    window.addEventListener("scroll", setScrollState);

    return () => {
      window.removeEventListener("scroll", setScrollState);
    };
  }, [window]);

  return (
    <div
      className={c(
        "sticky top-0 z-navbar",
        " w-full flex items-center justify-center",
        "gap-x-3",
        "transition duration-300 ease-in-out",
        {
          "bg-er-green-900/80": !isScrollAtTop && !isNavBarActive,
          "bg-er-green-900": isNavBarActive,
          "bg-transparent": isScrollAtTop && !isNavBarActive,
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
      className="flex flex-col justify-center p-1 cursor-pointer"
      onMouseEnter={onActivateMenu}
      onMouseLeave={onDeactivateMenu}
      onClick={onNavigateTo}
    >
      <div
        className={c(
          "flex items-center justify-center p-2",
          "transition duration-100 ease-in-out",
          {
            "bg-er-green-800": isMenuActive,
          },
        )}
      >
        <Text className="font-bold text-er-gold-500 tracking-widest">
          {label}
        </Text>
      </div>
      <Menu
        show={isMenuActive && !!items?.length}
        items={items ?? []}
        onClose={onDeactivateMenu}
      />
    </div>
  );
};
