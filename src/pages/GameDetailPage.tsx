import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameTrailer from "@/components/GameTrailer";
import ScreenshotGrid from "@/components/ScreenshotGrid";
import useGame from "@/hooks/useGame";
import { useParams } from "react-router";

export default function GameDetailPage() {
	const { slug } = useParams();
	const { data: game, error, isLoading } = useGame(slug!);

	if (isLoading) return <p>Loading...</p>;

	if (error || !game) throw error;

	return (
		<main className="grid lg:grid-cols-2 gap-5 p-10">
			<div>
				<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold my-5">{game.name}</h1>
				<ExpandableText>{game.description_raw}</ExpandableText>
				<GameAttributes game={game}/>
			</div>
			<div>
				<GameTrailer gameId={game.id}/>
				<ScreenshotGrid gameId={game.id}/>
			</div>
		</main>
	);
}
