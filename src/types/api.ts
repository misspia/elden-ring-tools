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
  | "Holy"; // Holy

export type AttackStatName = StatName | "Crit"; // Critical

export type DefenceStatName = StatName | "Boost";

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

export type Shield = {
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

export type ListShields = Shield[];

export type ListShieldsResponse = ERResponse & {
  data: ListShields;
};

export type GetShieldByIdResponse = ERResponse & {
  data: Shield;
};

export type AmmoStatName =
  | "physical"
  | "magic"
  | "fire"
  | "lightning"
  | "holy"
  | "critical";

export type AmmoType = "Pierce" | null;

export type AmmoStat = {
  name: AmmoStatName;
  amount: number;
};

export type Ammo = {
  id: string;
  name: string;
  image: string;
  description: string;
  type: string;
  passive: string;
  attackPower: AmmoStat[];
};

export type ListAmmos = Shield[];

export type ListAmmosResponse = ERResponse & {
  data: ListAmmos;
};

export type GetAmmoByIdResponse = ERResponse & {
  data: Ammo;
};

export type DamageNegationStatName =
  | "Phy"
  | "Strike"
  | "Slash"
  | "Pierce"
  | "Magic"
  | "Fire"
  | "Ligt"
  | "Holy";

export type DamageNegation = {
  name: DamageNegationStatName;
  amount: number;
};

export type ResistanceStatName =
  | "Immunity"
  | "Robustness"
  | "Focus"
  | "Vitality"
  | "Poise";

export type Resistance = {
  name: ResistanceStatName;
  amount: number;
};

export type Armor = {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  weight: number;
  dmgNegation: DamageNegation[];
  resistance: Resistance[];
};

export type ListArmors = Armor[];

export type ListArmorsResponse = ERResponse & {
  data: ListArmors;
};

export type GetArmorByIdResponse = ERResponse & {
  data: Armor;
};

export type Creature = {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  drops: string[];
};

export type ListCreatures = Creature[];

export type ListCreaturesResponse = ERResponse & {
  data: ListCreatures;
};

export type GetCreatureByIdResponse = ERResponse & {
  data: Creature;
};

export type Boss = {
  id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  drops: string[];
  healthPoints: string;
};

export type ListBosses = Boss[];

export type ListBossesResponse = ERResponse & {
  data: ListBosses;
};

export type GetBossByIdResponse = ERResponse & {
  data: Boss;
};

export type NPC = {
  id: string;
  name: string;
  image: string;
  location: string;
  quote: string | null;
  role: string;
};

export type ListNPCs = NPC[];

export type ListNPCsResponse = ERResponse & {
  data: ListNPCs;
};

export type GetNPCByIdResponse = ERResponse & {
  data: NPC;
};
