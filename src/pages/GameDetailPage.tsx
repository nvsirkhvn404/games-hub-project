import ExpandableText from "@/components/ExpandableText";
import useGame from "@/hooks/useGame";
import { useParams } from "react-router";

export default function GameDetailPage() {
	const { slug } = useParams();
	const { data: game, error, isLoading } = useGame(slug!);

	if (isLoading) return <p>Loading...</p>;

	if (error || !game) throw error;

	return (
		<main className="flex flex-col gap-5 p-10">
			<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">{game.name}</h1>
			<ExpandableText>{game.description_raw}</ExpandableText>
		</main>
	);
}
