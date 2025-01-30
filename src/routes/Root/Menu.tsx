import React from "react";
import c from "classnames";
import { Transition } from "@headlessui/react";
import { RouterPath } from "@/types/routes";
import { useNavigate } from "@tanstack/react-router";
import { Text } from "@/components/Text";

export type MenuItem = {
  key: React.Key;
  label: string;
  to: RouterPath;
};

export type MenuProps = {
  items: MenuItem[];
  onClose: VoidFunction;
  show?: boolean;
};

export const Menu: React.FC<MenuProps> = ({ items, onClose, show }) => {
  const navigate = useNavigate();
  const onNavigate = (to: RouterPath) => {
    onClose();
    // TODO: fix type error
    // @ts-ignore
    navigate({ to });
  };
  return (
    <Transition
      show={show}
      enter="transition duration-300 ease-in-out h-0"
      enterFrom="h-0"
      enterTo="h-fit"
      leave="transition duration-200 ease-in-out h-0"
      leaveFrom="h-0"
      leaveTo="h-fit"
    >
      <div
        className={c(
          "flex w-full p-2",
          "absolute top-[100%] left-0",
          "bg-er-green-900",
          "z-navbar-dropdown",
        )}
      >
        <div className="w-full grow flex flex-col gap-4 items-center justify-center">
          {items.map((item) => (
            <div
              role="link"
              tabIndex={0}
              key={item.key}
              onClick={() => onNavigate(item.to)}
              className="w-full text-center py-1 px-2 cursor-pointer"
            >
              <Text
                as="p"
                styleAs="p"
                className="tracking-widest text-er-gold-300"
              >
                {item.label}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </Transition>
  );
};
