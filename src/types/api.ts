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
