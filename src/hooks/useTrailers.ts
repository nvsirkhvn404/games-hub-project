import APICient from "@/service/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import type Trailer from "@/entities/Trailer";

export default function useTrailers(gameId: number) {
	const apiClient = new APICient<Trailer>(`/games/${gameId}/movies`);
	return useQuery({
		queryKey: ["trailers", gameId],
		queryFn: () => apiClient.getAll({}),
		staleTime: ms("24h"),
	});
}
