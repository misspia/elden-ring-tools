import { MAX_CRITICAL_VALUE, MAX_STAT_VALUE } from "@/api/constants/game";
import {
  AmmoStatName,
  AttackStatName,
  DamageNegationStatName,
  DefenceStatName,
  ResistanceStatName,
  StatName,
} from "@/types/api";

const statNameMap: Record<StatName, string> = {
  Phy: "Physical",
  Mag: "Magic",
  Fire: "Fire",
  Ligt: "Lightning",
  Holy: "Holy",
};

export const attackStatNameMap: Record<AttackStatName, string> = {
  ...statNameMap,
  Crit: "Critical",
};

export const defenceStatNameMap: Record<DefenceStatName, string> = {
  ...statNameMap,
  Boost: "Boost",
};

export const getAttackStatDisplayName = (attackStatName: AttackStatName) =>
  attackStatNameMap[attackStatName];
export const getDefenceStatDisplayName = (defenceStatName: DefenceStatName) =>
  defenceStatNameMap[defenceStatName];

export const getAmmoStatDisplayName = (ammoStatName: AmmoStatName) =>
  String(ammoStatName).charAt(0).toUpperCase() + String(ammoStatName).slice(1);

export const getMaxStatValue = (
  statName: AttackStatName | DefenceStatName | AmmoStatName,
) =>
  statName === "Crit" || statName === "critical"
    ? MAX_CRITICAL_VALUE
    : MAX_STAT_VALUE;

const damageNegationStatNameMap: Record<DamageNegationStatName, string> = {
  Phy: "Physical",
  Strike: "Strike",
  Slash: "Slash",
  Pierce: "Pierce",
  Magic: "Magic",
  Fire: "Fire",
  Ligt: "Lightning",
  Holy: "Holy",
};

export const getDamageNegationDisplayName = (
  damageNegationName: DamageNegationStatName,
) => damageNegationStatNameMap[damageNegationName];

const resistanceStatNameMap: Record<ResistanceStatName, string> = {
  Immunity: "Immunity",
  Robustness: "Robustness",
  Focus: "Focus",
  Vitality: "Vitality",
  Poise: "Poise",
};
export const getResistanceDisplayName = (
  resistanceStatName: ResistanceStatName,
) => resistanceStatNameMap[resistanceStatName];
