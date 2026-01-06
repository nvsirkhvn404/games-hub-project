import type { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";

export default function GameHeading({ gameQuery }: { gameQuery: GameQuery }) {
	const genre = useGenre(gameQuery.genreId);
	const platform = usePlatform(gameQuery.platformId);
	const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

	return (
		<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">{heading}</h1>
	);
}
