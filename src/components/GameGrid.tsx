
import useGames from "@/hooks/useGames";
import { Fragment } from "react/jsx-runtime";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";
import useGameQueryStore from "@/store";

export default function GameGrid() {
	const gameQuery = useGameQueryStore(s => s.gameQuery);
	const {
		data: games,
		error,
		isLoading,
		isFetchingNextPage,
		hasNextPage,
		fetchNextPage,
	} = useGames(gameQuery);

	if (error) return <p>{error.message}</p>;

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-5">
				{isLoading ? (
					<GameCardSkeleton />
				) : (
					<>
						{games?.pages.map((page, index) => (
							<Fragment key={index}>
								{page.results.map((game) => (
									<GameCard key={game.id} game={game} />
								))}
							</Fragment>
						))}
					</>
				)}
			</div>
			{hasNextPage && (
				<Button
					onClick={() => fetchNextPage()}
					size={"xl"}
					className="font-bold self-center"
					disabled={isFetchingNextPage}
				>
					{isFetchingNextPage ? (
						<div className="flex items-center gap-3">
							<Spinner /> Loading...
						</div>
					) : (
						"Load More"
					)}
				</Button>
			)}
		</>
	);
}
