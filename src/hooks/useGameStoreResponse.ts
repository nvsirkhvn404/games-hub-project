import type GameStoreResponse from "@/entities/GameStoreResponse";
import APICient from "@/service/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new APICient<GameStoreResponse>("/games");

export default function useGameStoreResponse(slug: string) {
  const storeEndpoint = slug + "/stores"
  return useQuery({
    queryKey: ["stores", slug],
    queryFn: () =>
      apiClient.get(storeEndpoint),
    staleTime: ms("24h"),
  });
}
