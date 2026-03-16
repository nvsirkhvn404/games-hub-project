import useGameStoreResponse from "@/hooks/useGameStoreResponse";
import appStore from "../assets/appstore-icon.svg";
import epicGames from "../assets/epic-games-icon.svg";
import gog from "../assets/gog-icon.svg";
import playStore from "../assets/googleplay-icon.svg";
import humbleBundle from "../assets/humblebundle-icon.svg";
import itchIo from "../assets/itch-io-icon.svg";
import microsoft from "../assets/microsoft-icon.svg";
import nintendo from "../assets/nintendo-icon.svg";
import playStation from "../assets/playstation-icon.svg";
import steam from "../assets/steam-icon.svg";
import xbox from "../assets/xbox-icon.svg";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const STORE_LINKS = [
	{ key: "gog.com", value: { src: gog, alt: "GOG" } },
	{ key: "itch.io", value: { src: itchIo, alt: "Itch Io" } },
	{ key: "marketplace.xbox.com", value: { src: xbox, alt: "Xbox" } },
	{ key: "nintendo.com", value: { src: nintendo, alt: "Nintendo" } },
	{ key: "microsoft.com", value: { src: microsoft, alt: "Microsoft" } },
	{ key: "apps.apple.com", value: { src: appStore, alt: "App Store" } },
	{ key: "store.steampowered.com", value: { src: steam, alt: "Steam" } },
	{ key: "epicgames.com", value: { src: epicGames, alt: "Epic Games" } },
	{ key: "play.google.com", value: { src: playStore, alt: "Play Store" } },
	{ key: "humblebundle.com", value: { src: humbleBundle, alt: "Humble Bundle" } },
	{ key: "store.playstation.com", value: { src: playStation, alt: "PlayStation" } },
];

export default function GameStoresLinks({ slug }: { slug: string }) {
	const { data: stores, error: storeError } = useGameStoreResponse(slug!);

	if (storeError) throw storeError;

	return (
		<div className="space-x-2 space-y-5">
			<p className="text-xl font-semibold">Where to buy</p>
			<div className="flex flex-wrap gap-4">
				{stores?.results.map((store) => {
					const link = STORE_LINKS.find((domain) =>
						store.url.includes(domain.key),
					);

					return (
						link && (
							<Tooltip key={store.id}>
								<TooltipTrigger asChild>
									<a
										href={store.url}
										target="_blank"
										rel="noopener noreferrer"
										className="flex p-4 rounded-md bg-muted hover:bg-muted/60 transition-all"
									>
										<img {...link.value} className="size-12 rounded-sm" />
									</a>
								</TooltipTrigger>
								<TooltipContent className="text-xl font-bold">
									{link.value.alt}
								</TooltipContent>
							</Tooltip>
						)
					);
				})}
			</div>
		</div>
	);
}
