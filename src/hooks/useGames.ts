import APIClient from "@/service/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import type { GameQuery } from "@/store";
import type Game from "@/entities/Game";

const apiClient = new APIClient<Game>("/games");

export default function useGames(gameQuery: GameQuery) {
	return useInfiniteQuery({
		queryKey: ["games", gameQuery],
		initialPageParam: 1,
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam,
				},
			}),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
		staleTime: ms("24h"),
	});
}
