import Emoji from "@/components/Emoji";
import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameTrailer from "@/components/GameTrailer";
import PlatformIconList from "@/components/PlatformIconList";
import ScreenshotGrid from "@/components/ScreenshotGrid";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import useGame from "@/hooks/useGame";
import { useParams } from "react-router";

export default function GameDetailPage() {
	const { slug } = useParams();
	const { data: game, error, isLoading } = useGame(slug!);

	if (isLoading) return <p>Loading...</p>;

	if (error || !game) throw error;

	return (
		<div className="flex flex-col gap-5 px-10 min-h-screen">
			<GameTrailer gameId={game.id} bg_image={game.background_image} />

			<main className="grid lg:grid-cols-2 gap-5">
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-2">
						<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold flex  items-center gap-4">
							{game.name}
							<Emoji size={11} rating={game.rating_top} />
						</h1>
						<div className="flex flex-wrap items-center gap-4">
							<PlatformIconList
								size="30"
								platforms={game.parent_platforms.map((p) => p.platform)}
							/>
							<Separator orientation="vertical" />
							<p className="text-2xl font-bold">⭐{game.rating}/5</p>
							<Separator orientation="vertical" />
							<Badge variant={"success"} size={"lg"} className="p-4">
								{game.released}
							</Badge>
						</div>
					</div>
					<ExpandableText>{game.description_raw}</ExpandableText>
				</div>
				<div className="flex flex-col gap-4">
					<ScreenshotGrid gameId={game.id} />
				</div>
			</main>
			<GameAttributes game={game} />
		</div>
	);
}
