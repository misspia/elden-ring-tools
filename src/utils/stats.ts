import { AttackStatName, DefenceStatName, StatName } from "@/types/api";

const statNameMap: Record<StatName, string> = {
  'Phy': 'Physical',
  'Mag': 'Magic',
  'Fire': 'Fire',
  'Ligt': 'Lightning',
  'Holy': 'Holy',
} 

export const attackStatNameMap: Record<AttackStatName, string> = {
  ...statNameMap,
  'Crit': 'Critical',
}

export const defenceStatNameMap: Record<DefenceStatName, string> = {
  ...statNameMap,
  'Boost': 'Boost',
}

export const getAttackStatDisplayName = (attackStatName: AttackStatName) => attackStatNameMap[attackStatName];
export const getDefenceStatDisplayName = (defenceStatName: DefenceStatName) => defenceStatNameMap[defenceStatName];
