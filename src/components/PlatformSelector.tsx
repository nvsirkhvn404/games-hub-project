import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import usePlatform from "@/hooks/usePlatform";
import type { Platform } from "@/hooks/usePlatforms";
import usePlatforms from "@/hooks/usePlatforms";

interface Props {
	onSelectPlatform: (platfrom: Platform) => void;
	selectedPlatformId?: number;
}

export default function PlatformSelector({
	onSelectPlatform,
	selectedPlatformId,
}: Props) {
	const { data, error } = usePlatforms();
	const selectedPlatform = usePlatform(selectedPlatformId);

	if (error) return null;

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
							onClick={() => onSelectPlatform(platform)}
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
