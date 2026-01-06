import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import type { Platform } from "@/hooks/usePlatforms";
import type { IconType } from "react-icons";

export default function PlatformIconList({ platforms }
  : { platforms: Platform[] }) {
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
			<div className="flex flex-wrap gap-1.5 text-neutral-600 my-2 ">
			{platforms.map((platform) => {
				const Icon = iconMap[platform.slug];
				if (!Icon) return null;
				return <Icon key={platform.id ?? platform.slug} size={"15"}/>;
			})}
		</div>
	);
}
