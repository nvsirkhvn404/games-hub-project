import GameGrid from "@/components/GameGrid";
import GenreList from "@/components/GenreList";
import QuerySection from "@/components/QuerySection";

export default function HomePage() {
	return (
		<main className="grid grid-cols-2">
			<GenreList />
			<div className="flex flex-col gap-5 p-5 col-span-full border-l">
				<QuerySection />
				<GameGrid />
			</div>
		</main>
	);
}
