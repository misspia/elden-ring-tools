import {
  GetArmorByIdResponse,
  GetAshByIdResponse,
  GetBossByIdResponse,
  GetCreatureByIdResponse,
  GetWeaponByIdResponse,
  ListArmorsResponse,
  ListAshesResponse,
  ListBossesResponse,
  ListCreaturesResponse,
  ListWeaponsResponse,
} from "@/types/api";

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
    const params = "?limit=307"; // total num weapons
    return this.fetch<ListWeaponsResponse>(`weapons${params}`);
  }

  public getWeaponById({ weaponId }: { weaponId: string }) {
    return this.fetch<GetWeaponByIdResponse>(`weapons/${weaponId}`);
  }

  public listArmors() {
    const params = "?limit=568"; // total num armors
    return this.fetch<ListArmorsResponse>(`armors${params}`);
  }

  public getArmorById({ armorId }: { armorId: string }) {
    return this.fetch<GetArmorByIdResponse>(`armors/${armorId}`);
  }

  public listCreatures() {
    const params = "?limit=115"; // total num creatures
    return this.fetch<ListCreaturesResponse>(`creatures${params}`);
  }

  public getCreatureById({ creatureId }: { creatureId: string }) {
    return this.fetch<GetCreatureByIdResponse>(`creatures/${creatureId}`);
  }

  public listBosses() {
    const params = "?limit=106"; // total num bosses
    return this.fetch<ListBossesResponse>(`bosses${params}`);
  }

  public getBossById({ bossId }: { bossId: string }) {
    return this.fetch<GetBossByIdResponse>(`bosses/${bossId}`);
  }
}
