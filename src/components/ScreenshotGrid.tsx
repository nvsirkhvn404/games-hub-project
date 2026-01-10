import useScreenshots from "@/hooks/useScreenshots";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import { useState } from "react";

export default function ScreenshotGrid({ gameId }: { gameId: number }) {
	const { data, isLoading, error } = useScreenshots(gameId);  
	const [screenshots, setScreenshots] = useState(data?.results);
	if (!data) return null;

	if (isLoading) return null;

	if (error) throw error;

	return (
		<div className="p-10 select-none">
			<Carousel>
				<CarouselContent>
					{screenshots?.map((file) => (
						<CarouselItem key={file.id} className="md:basis-1/2">
							<div className="">
								<img src={file.image} className="rounded-xl cursor-pointer hover:opacity-90 transition" />
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
