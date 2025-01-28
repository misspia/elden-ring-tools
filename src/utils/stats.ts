import { MAX_CRITICAL_VALUE, MAX_STAT_VALUE } from "@/api/constants/game";
import { AttackStatName, DefenceStatName, StatName } from "@/types/api";

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

export const getMaxStatValue = (statName: AttackStatName | DefenceStatName) =>
  statName === "Crit" ? MAX_CRITICAL_VALUE : MAX_STAT_VALUE;
