import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import SearchInput from "./components/SearchInput";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
	genreId?: number;
	platformId?: number;
	sortOrder: string;
	searchText: string;
}

export default function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		<div className="flex flex-col">
			<NavBar />
			<main className="grid grid-cols-2">
				<div className="col-end-1">
					<GenreList
						onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })}
						selectedGenreId={gameQuery.genreId}
					/>
				</div>
				<div className="flex flex-col gap-5 p-5 col-span-full border-l">
					<GameHeading gameQuery={gameQuery} />
					<div className="flex flex-col gap-5">
						<SearchInput
							onSearch={(searchText) =>
								setGameQuery({ ...gameQuery, searchText })
							}
						/>
						<div className="flex justify-between sm:justify-normal gap-5">
							<PlatformSelector
								onSelectPlatform={(platform) =>
									setGameQuery({ ...gameQuery, platformId: platform.id })
								}
								selectedPlatformId={gameQuery.platformId}
							/>
							<SortSelector
								onSelectSortOrder={(sortOrder) =>
									setGameQuery({ ...gameQuery, sortOrder })
								}
								sortOrder={gameQuery.sortOrder}
							/>
						</div>
					</div>
					<GameGrid gameQuery={gameQuery} />
				</div>
			</main>
		</div>
	);
}
