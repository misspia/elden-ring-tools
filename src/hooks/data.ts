import { useQuery } from "@tanstack/react-query";
import { EldenRingClient } from "@/api/client";
import {
  Ammo,
  Armor,
  Ash,
  Boss,
  Creature,
  ERError,
  ListAmmos,
  ListArmors,
  ListAshes,
  ListBosses,
  ListCreatures,
  ListNPCs,
  ListShields,
  ListWeapons,
  NPC,
  Shield,
  Weapon,
} from "@/types/api";
import {
  GET_AMMO_BY_ID_QUERY,
  GET_ARMOR_BY_ID_QUERY,
  GET_ASH_BY_ID_QUERY,
  GET_BOSS_BY_ID_QUERY,
  GET_CREATURE_BY_ID_QUERY,
  GET_NPC_BY_ID_QUERY,
  GET_SHIELD_BY_ID_QUERY,
  GET_WEAPON_BY_ID_QUERY,
  LIST_AMMOS_QUERY,
  LIST_ARMORS_QUERY,
  LIST_ASHES_QUERY,
  LIST_BOSSES_QUERY,
  LIST_CREATURES_QUERY,
  LIST_NPCS_QUERY,
  LIST_SHIELDS_QUERY,
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
    queryKey: [GET_WEAPON_BY_ID_QUERY, weaponId],
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

export const useListShields = () => {
  const erClient = new EldenRingClient();
  return useQuery<ListShields, ERError>({
    queryKey: [LIST_SHIELDS_QUERY],
    queryFn: async () => {
      try {
        const response = await erClient.listShields();
        return response.data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  });
};

export const useShield = ({ shieldId }: { shieldId: string }) => {
  const erClient = new EldenRingClient();
  return useQuery<Shield, ERError>({
    queryKey: [GET_SHIELD_BY_ID_QUERY, shieldId],
    enabled: !!shieldId,
    queryFn: async () => {
      try {
        const response = await erClient.getShieldById({ shieldId });
        return response.data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  });
};

export const useListAmmos = () => {
  const erClient = new EldenRingClient();
  return useQuery<ListAmmos, ERError>({
    queryKey: [LIST_AMMOS_QUERY],
    queryFn: async () => {
      try {
        const response = await erClient.listAmmos();
        return response.data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  });
};

export const useAmmo = ({ ammoId }: { ammoId: string }) => {
  const erClient = new EldenRingClient();
  return useQuery<Ammo, ERError>({
    queryKey: [GET_AMMO_BY_ID_QUERY, ammoId],
    enabled: !!ammoId,
    queryFn: async () => {
      try {
        const response = await erClient.getAmmoById({ ammoId });
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
    queryKey: [GET_ARMOR_BY_ID_QUERY, armorId],
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
    queryKey: [GET_CREATURE_BY_ID_QUERY, creatureId],
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

export const useListBosses = () => {
  const erClient = new EldenRingClient();
  return useQuery<ListBosses, ERError>({
    queryKey: [LIST_BOSSES_QUERY],
    queryFn: async () => {
      try {
        const response = await erClient.listBosses();
        return response.data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  });
};

export const useBoss = ({ bossId }: { bossId: string }) => {
  const erClient = new EldenRingClient();
  return useQuery<Boss, ERError>({
    queryKey: [GET_BOSS_BY_ID_QUERY, bossId],
    enabled: !!bossId,
    queryFn: async () => {
      try {
        const response = await erClient.getBossById({ bossId });
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

export const useListNPCs = () => {
  const erClient = new EldenRingClient();
  return useQuery<ListNPCs, ERError>({
    queryKey: [LIST_NPCS_QUERY],
    queryFn: async () => {
      try {
        const response = await erClient.listNPCs();
        return response.data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  });
};

export const useNPC = ({ npcId }: { npcId: string }) => {
  const erClient = new EldenRingClient();
  return useQuery<NPC, ERError>({
    queryKey: [GET_NPC_BY_ID_QUERY, npcId],
    enabled: !!npcId,
    queryFn: async () => {
      try {
        const response = await erClient.getNPCById({ npcId });
        return response.data;
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  });
};
