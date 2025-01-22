import { QueryClient } from "@tanstack/react-query";

export type AppContext = {
  queryClient: QueryClient;
};

export type ERError = {
  success: false;
};

export type ERResponse = {
  success: boolean;
  count: number;
};

export type Ash = {
  id: string;
  name: string;
  image: string;
  description: string;
  affinity: string;
  skill: string;
};

export type ListAshes = Ash[];

export type ListAshesResponse = ERResponse & {
  data: ListAshes;
};

export type GetAshByIdResponse = ERResponse & {
  data: Ash;
};

export type StatName =
  | "Phy" // Physical
  | "Mag" // Magic
  | "Fire" // Fire
  | "Ligt" // Lightning
  | "Holy" // Holy

export type AttackStatName 
= StatName 
| 'Crit' // Critical

export type DefenceStatName 
= StatName 
| 'Boost' 

export type AttackStat = {
  name: AttackStatName;
  amount: number;
};

export type DefenceStat = {
  name: DefenceStatName;
  amount: number;
};


export type AttributeName =
  | "Str" // Strength
  | "Dex" // Dexterity
  | "Arc" // Arcane
  | "Int" // Intelligence
  | "Fai" // Faith
  | "-"; // no scaling value in this case

export type ScaleValue = "S" | "A" | "B" | "C" | "D" | "E" | "?";

export type ScaleStat = {
  name: AttributeName;
  scaling: ScaleValue;
};

export type Attribute = {
  name: AttributeName;
  amount: number;
};

export type Weapon = {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  weight: number;
  attack: AttackStat[];
  defence: DefenceStat[];
  requiredAttributes: Attribute[];
  scalesWith: ScaleStat[];
};

export type ListWeapons = Weapon[];

export type ListWeaponsResponse = ERResponse & {
  data: ListWeapons;
};

export type GetWeaponByIdResponse = ERResponse & {
  data: Weapon;
};
