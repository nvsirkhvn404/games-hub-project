import Emoji from "@/components/Emoji";
import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import PlatformIconList from "@/components/PlatformIconList";
import ScreenshotGrid from "@/components/ScreenshotGrid";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";

import useGame from "@/hooks/useGame";
import { useParams } from "react-router";

export default function GameDetailPage() {
	const { slug } = useParams();
	const { data: game, error, isLoading } = useGame(slug!);

	if (isLoading)
		return (
			<div className="flex justify-center items-center gap-5 min-h-screen">
				<Spinner className="text-4xl sm:text-5xl md:text-6xl size-10" />
				<h2 className="text-3xl sm:text-4xl md:text-5xl">Loading...</h2>
			</div>
		);

	if (error || !game) throw error;

	return (
		<main className="flex flex-col px-5 sm:px-10 py-10 min-h-screen w-full items-center">
			<div className="flex flex-col gap-5 max-w-5xl">
				<div>
					<h1 className="text-3xl sm:text-4xl md:text-4xl font-bold">
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
				<div className="flex flex-col-reverse md:flex-row gap-5">
					<div className="flex flex-col gap-5">
						<ScreenshotGrid gameId={game.id} />
						<ExpandableText>{game.description_raw}</ExpandableText>
					</div>
					<div className="flex flex-col">
						<img src={game.background_image} className="rounded-xl" />
						<GameAttributes game={game} />
					</div>
				</div>
			</div>
		</main>
	);
}
