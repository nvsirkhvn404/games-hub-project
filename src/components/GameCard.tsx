import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Game } from "@/hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/service/image-url";
import Emoji from "./Emoji";

export default function GameCard({ game }: { game: Game }) {
	return (
		<>
			<Card>
				<CardHeader>
					<img src={getCroppedImageUrl(game.background_image)} alt={game.name} />
				</CardHeader>
				<CardContent className="text-xl font-bold">
					<div className="flex items-center justify-between">
						<PlatformIconList
							platforms={game.parent_platforms.map((p) => p.platform)}
						/>
					<CriticScore score={game.metacritic} />
					</div>
					{game.name}
					<Emoji rating={game.rating_top} />
				</CardContent>
			</Card>
		</>
	);
}
