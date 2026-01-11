import GameHeading from "./GameHeading";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";

export default function QuerySection() {
	return (
		<>
			<GameHeading />
			<div className="flex flex-col gap-5">
				<div className="flex justify-between sm:justify-normal gap-5">
					<PlatformSelector />
					<SortSelector />
				</div>
			</div>
		</>
	);
}
