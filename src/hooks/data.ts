import { useQuery } from "@tanstack/react-query";
import { EldenRingClient } from "@/api/client";
import {
  Armor,
  Ash,
  Creature,
  ERError,
  ListArmors,
  ListAshes,
  ListCreatures,
  ListWeapons,
  Weapon,
} from "@/types/api";
import {
  GET_ARMOR_BY_ID,
  GET_ASH_BY_ID_QUERY,
  GET_CREATURE_BY_ID,
  GET_WEAPON_BY_ID,
  LIST_ARMORS_QUERY,
  LIST_ASHES_QUERY,
  LIST_CREATURES_QUERY,
  LIST_WEAPONS_QUERY,
} from "@/api/constants/queries";

export const useListAshes = () => {
  const erClient = new EldenRingClient();
  return useQuery<ListAshes, ERError>({
    queryKey: [LIST_ASHES_QUERY],
    queryFn: async () => {
      try {
        const response = await erClient.listAshes();
        return response.data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  });
};

export const useAsh = ({ ashId }: { ashId: string }) => {
  const erClient = new EldenRingClient();
  return useQuery<Ash, ERError>({
    queryKey: [GET_ASH_BY_ID_QUERY, ashId],
    enabled: !!ashId,
    queryFn: async () => {
      try {
        const response = await erClient.getAshById({ ashId });
        return response.data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  });
};

export const useListWeapons = () => {
  const erClient = new EldenRingClient();
  return useQuery<ListWeapons, ERError>({
    queryKey: [LIST_WEAPONS_QUERY],
    queryFn: async () => {
      try {
        const response = await erClient.listWeapons();
        return response.data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  });
};

export const useWeapon = ({ weaponId }: { weaponId: string }) => {
  const erClient = new EldenRingClient();
  return useQuery<Weapon, ERError>({
    queryKey: [GET_WEAPON_BY_ID, weaponId],
    enabled: !!weaponId,
    queryFn: async () => {
      try {
        const response = await erClient.getWeaponById({ weaponId });
        return response.data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  });
};

export const useListArmors = () => {
  const erClient = new EldenRingClient();
  return useQuery<ListArmors, ERError>({
    queryKey: [LIST_ARMORS_QUERY],
    queryFn: async () => {
      try {
        const response = await erClient.listArmors();
        return response.data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  });
};

export const useArmor = ({ armorId }: { armorId: string }) => {
  const erClient = new EldenRingClient();
  return useQuery<Armor, ERError>({
    queryKey: [GET_ARMOR_BY_ID, armorId],
    enabled: !!armorId,
    queryFn: async () => {
      try {
        const response = await erClient.getArmorById({ armorId });
        return response.data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  });
};

export const useListCreatures = () => {
  const erClient = new EldenRingClient();
  return useQuery<ListCreatures, ERError>({
    queryKey: [LIST_CREATURES_QUERY],
    queryFn: async () => {
      try {
        const response = await erClient.listCreatures();
        return response.data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  });
};

export const useCreature = ({ creatureId }: { creatureId: string }) => {
  const erClient = new EldenRingClient();
  return useQuery<Creature, ERError>({
    queryKey: [GET_CREATURE_BY_ID, creatureId],
    enabled: !!creatureId,
    queryFn: async () => {
      try {
        const response = await erClient.getCreatureById({ creatureId });
        return {
          ...response.data,
          drops: response.data.drops.filter((drop) => drop !== ""),
        };
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  });
};
