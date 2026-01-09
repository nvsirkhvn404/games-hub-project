import type Game from "@/entities/Game";
import type { ReactNode } from "react";
import CriticScore from "./CriticScore";

export default function GameAttributes({ game }: { game: Game }) {
	return (
		<div className="grid grid-cols-2 gap-5 my-5">
			<GameAttribute term="Platfroms">
				{game.parent_platforms.map(({ platform }) => (
					<p key={platform.id}>{platform.name}</p>
				))}
			</GameAttribute>

			<GameAttribute term="Metacritic">
				<CriticScore score={game.metacritic} />
			</GameAttribute>

			<GameAttribute term="Genres">
				{game.genres.map((genre) => (
					<p key={genre.id}>{genre.name}</p>
				))}
			</GameAttribute>

			<GameAttribute term="Publishers">
				{game.publishers.map((publisher) => (
					<p key={publisher.id}>{publisher.name}</p>
				))}
			</GameAttribute>
		</div>
	);
}

interface Props {
	term: string;
	children: ReactNode | ReactNode[];
}

function GameAttribute({ term, children }: Props) {
	return (
		<div>
			<p className="text-muted-foreground">{term}</p>
			{children}
		</div>
	);
}
