import APICient from "@/service/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import type { Game } from "@/entities/Game";

const apiClient = new APICient<Game>("/games");

export default function useGame(slug: string) {
	return useQuery({
		queryKey: ["game", slug],
		queryFn: () =>
			apiClient.get(slug),
		staleTime: ms("24h"),
	});
}
