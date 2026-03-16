import Emoji from "@/components/Emoji";
import ExpandableText from "@/components/AboutSection";
import GameAttributes from "@/components/GameAttributes";
import PlatformIconList from "@/components/PlatformIconList";
import MediaSection from "@/components/MediaSection";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";

import useGame from "@/hooks/useGame";
import { useParams } from "react-router";
import useGameStoreResponse from "@/hooks/useGameStoreResponse";

export default function GameDetailPage() {
	const { slug } = useParams();
	const { data: game, error: gameError, isLoading: isGameLoading } = useGame(slug!);
	const { data: stores, error: StoreError } = useGameStoreResponse(slug!);

	console.log(stores);

	if (isGameLoading)
		return (
			<div className="flex justify-center items-center gap-5 min-h-screen">
				<Spinner className="text-4xl sm:text-5xl md:text-6xl size-10" />
				<h2 className="text-3xl sm:text-4xl md:text-5xl">Loading...</h2>
			</div>
		);

	if (gameError || StoreError || !game) throw Error;

	return (
		<main className="flex flex-col px-5 sm:px-10 py-10 min-h-screen w-full items-center">
			<div className="flex flex-col gap-5 max-w-5xl">
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl sm:text-4xl font-bold">
						{game.name}
					</h1>
					<div className="flex flex-wrap items-center gap-4">
						<PlatformIconList
							size="30"
							platforms={game.parent_platforms.map((p) => p.platform)}
						/>
						<Separator orientation="vertical" />
						<p className="text-xl font-smibold">⭐{game.rating}/5</p>
						<Separator orientation="vertical" />
						<Emoji size={11} rating={game.rating_top} />
					</div>
				</div>
				<div className="flex flex-col-reverse md:flex-row sm:gap-16">
					<div className="flex flex-col gap-5">
						<MediaSection gameId={game.id} />
						<ExpandableText>{game.description_raw}</ExpandableText>
						<div className="space-x-2 space-y-5">
							<p className="text-xl font-semibold">Where to buy</p>
							<div className="flex flex-wrap gap-4">
								{stores?.results.map((store) => <a href={store.url} target="_blank" className="bg-muted px-4 py-3 rounded-md hover:bg-muted/60 transition-all"><p className="wrap-anywhere"  >Platform</p></a>)}
							</div>
						</div>
					</div>
					<div className="flex flex-col sm:min-w-75">
						<img src={game.background_image} className="rounded-xl" />
						<GameAttributes game={game} />
					</div>
				</div>
			</div>
		</main>
	);
}
