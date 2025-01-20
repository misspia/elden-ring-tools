import { useQuery } from "@tanstack/react-query";
import { EldenRingClient } from "@/api/client";
import { ERError, ListAshes } from "@/types/api";
import { LIST_ASHES_QUERY } from "@/api/constants/queries";

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
