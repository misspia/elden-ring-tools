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
      enter="transition duration-300 ease-in-out"
      enterFrom="translate-y-[calc(100% + 100px)] opacity-100"
      enterTo="translate-y-0 opacity-100"
      leave="transition duration-200 ease-in-out"
      leaveFrom=" opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={c(
          "absolute bottom-[100%] left-0 w-full",
          "rounded-t-xl shadow-navbar-menu",
          "flex flex-col items-center gap-10 p-6 bg-er-green-900",
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
