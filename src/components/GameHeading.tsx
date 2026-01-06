import type { GameQuery } from "@/App";
import useGenres from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatforms";

export default function GameHeading({ gameQuery }: { gameQuery: GameQuery }) {
	const { data: genres } = useGenres();
	const genre  = genres?.results.find(g => g.id === gameQuery.genreId);

	const { data: platforms } = usePlatform();
	const platform  = platforms?.results.find(p => p.id === gameQuery.genreId);

	const heading = `${platform?.name || ""} ${
		genre?.name || ""
	} Games`;

	return (
		<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">{heading}</h1>
	);
}
