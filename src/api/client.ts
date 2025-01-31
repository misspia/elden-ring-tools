import {
  GetAmmoByIdResponse,
  GetArmorByIdResponse,
  GetAshByIdResponse,
  GetBossByIdResponse,
  GetCreatureByIdResponse,
  GetNPCByIdResponse,
  GetShieldByIdResponse,
  GetWeaponByIdResponse,
  ListAmmosResponse,
  ListArmorsResponse,
  ListAshesResponse,
  ListBossesResponse,
  ListCreaturesResponse,
  ListNPCsResponse,
  ListShieldsResponse,
  ListWeaponsResponse,
} from "@/types/api";

const DEFAULT_LIMIT_PARAM = "?limit=500";

export class EldenRingClient {
  private readonly hostname: string;

  constructor() {
    this.hostname = "https://eldenring.fanapis.com/api/";
  }

  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(this.hostname + endpoint, options);

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return (await response.json()) as T;
  }

  public listAshes() {
    return this.fetch<ListAshesResponse>("ashes");
  }

  public getAshById({ ashId }: { ashId: string }) {
    return this.fetch<GetAshByIdResponse>(`ashes/${ashId}`);
  }

  public listWeapons() {
    return this.fetch<ListWeaponsResponse>(`weapons${DEFAULT_LIMIT_PARAM}`);
  }

  public getWeaponById({ weaponId }: { weaponId: string }) {
    return this.fetch<GetWeaponByIdResponse>(`weapons/${weaponId}`);
  }

  public listShields() {
    return this.fetch<ListShieldsResponse>(`shields${DEFAULT_LIMIT_PARAM}`);
  }

  public getShieldById({ shieldId }: { shieldId: string }) {
    return this.fetch<GetShieldByIdResponse>(`shields/${shieldId}`);
  }

  public listAmmos() {
    return this.fetch<ListAmmosResponse>(`ammos${DEFAULT_LIMIT_PARAM}`);
  }

  public getAmmoById({ ammoId }: { ammoId: string }) {
    return this.fetch<GetAmmoByIdResponse>(`ammos/${ammoId}`);
  }

  public listArmors() {
    return this.fetch<ListArmorsResponse>(`armors${DEFAULT_LIMIT_PARAM}`);
  }

  public getArmorById({ armorId }: { armorId: string }) {
    return this.fetch<GetArmorByIdResponse>(`armors/${armorId}`);
  }

  public listCreatures() {
    return this.fetch<ListCreaturesResponse>(`creatures${DEFAULT_LIMIT_PARAM}`);
  }

  public getCreatureById({ creatureId }: { creatureId: string }) {
    return this.fetch<GetCreatureByIdResponse>(`creatures/${creatureId}`);
  }

  public listBosses() {
    return this.fetch<ListBossesResponse>(`bosses${DEFAULT_LIMIT_PARAM}`);
  }

  public getBossById({ bossId }: { bossId: string }) {
    return this.fetch<GetBossByIdResponse>(`bosses/${bossId}`);
  }

  public listNPCs() {
    return this.fetch<ListNPCsResponse>(`npcs${DEFAULT_LIMIT_PARAM}`);
  }

  public getNPCById({ npcId }: { npcId: string }) {
    return this.fetch<GetNPCByIdResponse>(`npcs/${npcId}`);
  }
}
