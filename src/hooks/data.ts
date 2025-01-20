import { useQuery } from "@tanstack/react-query";
import { EldenRingClient } from "@/api/client";
import { ERError, ListAshes, ListAshesResponse } from "@/api/types";

export const useListAshes = () => {
  const erClient = new EldenRingClient();
  return useQuery<ListAshesResponse, ERError>({
    queryKey: [],
    queryFn: async () => {
      try {
        return await erClient.listAshes();
      } catch (e) {
        console.error(e);
        throw e;
      }
    },
  });
};
