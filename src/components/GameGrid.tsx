import type { GameQuery } from "@/App";
import useGames from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

export default function GameGrid({ gameQuery }: { gameQuery: GameQuery }) {
	const { data: games, error, isLoading } = useGames(gameQuery);

	if (error) return <p>{error.message}</p>;

	return (
		<>
			{isLoading ? (
				<GameCardSkeleton />
			) : (
				<>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
						{games?.results.map((game) => (
							<GameCard key={game.id} game={game} />
						))}
					</div>
				</>
			)}
		</>
	);
}
