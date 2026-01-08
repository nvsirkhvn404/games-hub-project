import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import type { Platform } from "@/hooks/usePlatforms";
import type { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
	FaAndroid,
	FaApple,
	FaLinux,
	FaPlaystation,
	FaWindows,
	FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";

export default function PlatformIconList({
	platforms,
}: {
	platforms: Platform[];
}) {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendoswitch,
		mac: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		ios: MdPhoneIphone,
		web: BsGlobe,
	};
	return (
		<div className="flex flex-wrap gap-1.5 text-neutral-600 my-2">
			{platforms.map(({ id, slug, name }) => {
				const Icon = iconMap[slug];
				if (!Icon) return null;
				return (
					<Tooltip key={id || slug}>
						<TooltipTrigger>
							<Icon size={"16"} />
						</TooltipTrigger>
						<TooltipContent className="">{name}</TooltipContent>
					</Tooltip>
				);
			})}
		</div>
	);
}
