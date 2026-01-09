import type Screenshot from "@/entities/Screenshot";
import APICient from "@/service/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

export default function useScreenshots(gameId: number) {
	const apiClient = new APICient<Screenshot>(`/games/${gameId}/screenshots`);

	return useQuery({
		queryKey: ["screenshots", gameId],
		queryFn: () => apiClient.getAll({}),
		staleTime: ms("24h"),
	});
}
