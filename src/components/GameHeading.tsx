import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";

export default function GameHeading() {
	const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
	
	const genre = useGenre(genreId);
	const platform = usePlatform(platformId);

	const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

	return (
		<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">{heading}</h1>
	);
}
