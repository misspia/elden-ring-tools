import { useQuery } from "@tanstack/react-query";
import { EldenRingClient } from "@/api/client";
import { ERError, ListAshes } from "@/api/types";

export const useListAshes = () => {
  const erClient = new EldenRingClient();
  return useQuery<ListAshes, ERError>({
    queryKey: [],
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
