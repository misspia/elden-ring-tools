import { GetAshByIdResponse, ListAshesResponse } from "@/types/api";

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
}
