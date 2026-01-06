import useGenres, { type Genre } from "@/hooks/useGenre";
import { GenreListSkeleton } from "./GenreListSkeleton";
import { Button } from "./ui/button";
import getCroppedImageUrl from "@/service/image-url";

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenreId?: number;
}

export default function GenreList({ onSelectGenre, selectedGenreId }: Props) {
	const { data: genres, isLoading, error } = useGenres();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	if (error) return null;

	return (
		<div className="hidden sm:flex flex-col">
			<h2 className="text-2xl sm:text-3xl md:text-4xl m-4 font-bold ">
				Genres
			</h2>
			{isLoading ? (
				<div className="hidden sm:flex sm:flex-col space-y-4 px-4">
					{skeletons.map((skeleton) => (
						<GenreListSkeleton key={skeleton} />
					))}
				</div>
			) : (
				<ul className="space-y-4 mx-4">
					{genres?.results.map((genre) => (
						<li
							key={genre.id}
							className={
								genre.id === selectedGenreId
									? " bg-secondary text-secondary-foreground rounded-xl px-4 py-2"
									: "bg-card rounded-xl px-4 p-2"
							}
						>
							<div className="flex items-center">
								<img
									src={getCroppedImageUrl(genre.image_background)}
									className="size-10 rounded-lg object-cover"
								/>
								<Button
									onClick={() => onSelectGenre(genre)}
									variant="link"
									className={
										genre.id === selectedGenreId
											? "font-bold text-lg"
											: "font-bold"
									}
								>
									{genre.name}
								</Button>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
