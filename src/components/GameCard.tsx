import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type Game from "@/entities/Game";
import getCroppedImageUrl from "@/service/image-url";
import { motion } from "motion/react";
import { Link } from "react-router";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import { useState } from "react";

export default function GameCard({ game }: { game: Game }) {
	const [imgLoaded, setImgLoaded] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
		>
			<motion.div
				whileHover={{ scale: 1.05, boxShadow: 2 }}
				transition={{ duration: 0.2, ease: "easeOut" }}
			>
				<Card>
					<CardHeader className="min-h-40">
						<motion.img
							src={getCroppedImageUrl(game.background_image)}
							alt={game.name}
							onLoad={() => setImgLoaded(true)}
							initial={{ opacity: 0 }}
							animate={imgLoaded ? { opacity: 1 } : { opacity: 0 }}
							transition={{ duration: 0.4, ease: "easeOut" }}
						/>
					</CardHeader>
					<CardContent className="text-xl font-bold">
						<div className="flex items-center justify-between">
							<PlatformIconList
								size="18"
								platforms={game.parent_platforms?.map((p) => p?.platform)}
							/>
							<CriticScore score={game.metacritic} />
						</div>
						<Link to={`/games/${game.slug}`}>{game.name}</Link>
						<Emoji rating={game.rating_top} />
					</CardContent>
				</Card>
			</motion.div>
		</motion.div>
	);
}
