import type Game from "@/entities/Game";
import { Fragment, type ReactNode } from "react";
import CriticScore from "./CriticScore";
import { Separator } from "./ui/separator";
import { Link } from "react-router";

export default function GameAttributes({ game }: { game: Game }) {
	const {
		genres,
		metacritic,
		parent_platforms,
		publishers,
		esrb_rating,
		released,
		website,
		playtime,
	} = game;

	return (
		<div className="flex flex-wrap gap-4 my-5 max-w-5xl">
			<GameAttribute term="Release Date">{released}</GameAttribute>

			{metacritic && (
				<GameAttribute term="Metacritic">
					<CriticScore score={metacritic} />
				</GameAttribute>
			)}

			{playtime > 0 && (
				<GameAttribute term="Playtime (in hours)">{playtime}</GameAttribute>
			)}

			{esrb_rating && (
				<GameAttribute term="Age Rating">{esrb_rating.name}</GameAttribute>
			)}

			<GameAttribute term="Genres">
				{genres.map((genre, index) => (
					<Fragment key={genre.id}>
						<p>{genre.name}</p> <SeparatorLogic index={index} data={genres} />
					</Fragment>
				))}
			</GameAttribute>

			<GameAttribute term="Publishers">
				{publishers.map((publisher, index) => (
					<Fragment key={publisher.id}>
						<p>{publisher.name}</p>
						<SeparatorLogic index={index} data={publishers} />
					</Fragment>
				))}
			</GameAttribute>

			{website && (
				<GameAttribute term="Website">
					<Link
						to={website}
						className="underline"
					>
						{website}
					</Link>
				</GameAttribute>
			)}

			<GameAttribute term="Platfroms">
				{parent_platforms.map(({ platform }, index) => (
					<Fragment key={platform.id}>
						<p>{platform.name}</p>
						<SeparatorLogic index={index} data={parent_platforms} />
					</Fragment>
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
		<div className="bg-muted px-4 py-3 rounded-md hover:bg-muted/60 transition-all">
			<p className="text-muted-foreground">{term}</p>
			<div className="flex gap-2 flex-wrap wrap-anywhere">{children}</div>
		</div>
	);
}

function SeparatorLogic({ index, data }: { index: number; data: object[] }) {
	return <>{index < data.length - 1 && <Separator orientation="vertical" />}</>;
}
