import { useQuery } from "@tanstack/react-query";
import { EldenRingClient } from "@/api/client";
import { Ash, ERError, ListAshes } from "@/types/api";
import { GET_ASH_BY_ID_QUERY, LIST_ASHES_QUERY } from "@/api/constants/queries";

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
