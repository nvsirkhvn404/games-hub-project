import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Game } from "@/hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/service/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router";

export default function GameCard({ game }: { game: Game }) {
	return (
		<>
			<Card className="transition-all ease-out duration-200 hover:scale-105 hover:shadow-2xl">
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
					<Link to={`/games/${game.id}`}>{game.name}</Link>
					<Emoji rating={game.rating_top} />
				</CardContent>
			</Card>
		</>
	);
}
