import useScreenshots from "@/hooks/useScreenshots";
import { XIcon } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from "./ui/carousel";
import useTrailers from "@/hooks/useTrailers";

export default function MediaSection({ gameId }: { gameId: number }) {
	const {
		data: screenshots,
		isLoading: screenshotsLoadingStatus,
		error: screenshotsError,
	} = useScreenshots(gameId);
	const {
		data: trailers,
		isLoading: trailersLoadingStatus,
		error: trailersError,
	} = useTrailers(gameId);
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [modal, setModal] = useState(false);
	const [api, setApi] = useState<CarouselApi>();

	useEffect(() => {
		if (!api || activeIndex === null) return;

		api.scrollTo(activeIndex, false);
	}, [api, activeIndex]);

	if (
		!screenshots ||
		screenshotsLoadingStatus ||
		!trailers ||
		trailersLoadingStatus
	)
		return null;

	if (screenshotsError) throw screenshotsError;
	if (trailersError) throw trailersError;

	const firstTrailer = trailers?.results[0];

	return (
		<>
			<h3 className="text-xl sm:text-2xl font-semibold">Media</h3>
			<div className="flex flex-col select-none">
				<Carousel opts={{ loop: true }}>
					<CarouselContent>
						{firstTrailer && (
							<CarouselItem>
								<video
									src={firstTrailer.data["max"]}
									poster={firstTrailer.preview}
									controls
									muted
									autoPlay
									className="rounded-xl"
								/>
							</CarouselItem>
						)}
						{screenshots.results.map((file, index) => (
							<CarouselItem key={file.id}>
								<motion.div
									layoutId={`${index}`}
									onClick={() => {
										setActiveIndex(index);
										setModal(!modal);
									}}
								>
									<img src={file.image} className="rounded-xl cursor-pointer touch-pinch-zoom" />
								</motion.div>
							</CarouselItem>
						))}
					</CarouselContent>
					<div className="flex justify-center gap-5 mt-5">
						<CarouselPrevious className="static translate-y-0" />
						<CarouselNext className="static translate-y-0" />
					</div>
				</Carousel>
			</div>

			{activeIndex !== null && modal && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.2 }}
					className="fixed inset-0 z-50 min-h-screen w-full flex flex-col items-center justify-center backdrop-blur-xs select-none"
				>
					<Carousel className="max-w-3xl" setApi={setApi} opts={{ loop: true }}>
						<CarouselContent className="p-2">
							{screenshots.results.map((file) => (
								<CarouselItem key={file.id}>
									<div>
										<img
											src={file.image}
											className="rounded-xl cursor-pointer w-full"
										/>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<div className="flex items-center justify-center gap-5 mt-5">
							<CarouselPrevious className="static translate-y-0" />
							<Button
								className="h-10 w-10"
								size={"xl"}
								variant={"destructive-outline"}
								onClick={() => setModal(!modal)}
							>
								<XIcon />
							</Button>
							<CarouselNext className="static translate-y-0" />
						</div>
					</Carousel>
				</motion.div>
			)}
		</>
	);
}
