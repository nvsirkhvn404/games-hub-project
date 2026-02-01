import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type Game from "@/entities/Game";
import getCroppedImageUrl from "@/service/image-url";
import { motion } from "motion/react";
import { Link } from "react-router";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

export default function GameCard({ game }: { game: Game }) {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9, y: 20 }}
			animate={{ opacity: 1, scale: 1, y: 0 }}
		>
			<Card className="transition-all ease-out duration-200 hover:scale-105 hover:shadow-2xl">
				<CardHeader>
					<img
						src={getCroppedImageUrl(game.background_image)}
						alt={game.name}
					/>
				</CardHeader>
				<CardContent className="text-xl font-bold">
					<div className="flex items-center justify-between">
						<PlatformIconList
							size="18"
							platforms={game.parent_platforms.map((p) => p.platform)}
						/>
						<CriticScore score={game.metacritic} />
					</div>
					<Link to={`/games/${game.slug}`}>{game.name}</Link>
					<Emoji rating={game.rating_top} />
				</CardContent>
			</Card>
		</motion.div>
	);
}
