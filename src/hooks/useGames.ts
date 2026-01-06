import type { GameQuery } from "@/App";
import useData from "./useData";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

export default function useGames(gameQuery: GameQuery) {
	return useData<Game>("/games", [gameQuery], {
		params: {
			genres: gameQuery.genre?.id,
			parent_platforms: gameQuery.platform?.id,
			ordering: gameQuery.sortOrder,
			search: gameQuery.searchText,
		},
	});
}
