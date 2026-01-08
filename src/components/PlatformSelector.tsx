import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";

export default function PlatformSelector() {
	const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
	const setPlatformId = useGameQueryStore(s => s.setPlatformId);
	const { data, error } = usePlatforms()
	
	const selectedPlatform = usePlatform(selectedPlatformId);

	if (error) return error.message;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">
					{selectedPlatform?.name || "Platforms"}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="start">
				<DropdownMenuGroup>
					{data?.results.map((platform) => (
						<DropdownMenuItem
							onClick={() => setPlatformId(platform.id)}
							key={platform.id}
						>
							{platform.name}
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
