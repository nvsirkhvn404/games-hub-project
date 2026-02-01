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

export default function ScreenshotGrid({ gameId }: { gameId: number }) {
	const { data, isLoading, error } = useScreenshots(gameId);
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const [modal, setModal] = useState(false);
	const [api, setApi] = useState<CarouselApi>();

	useEffect(() => {
		if (!api || activeIndex === null) return;

		api.scrollTo(activeIndex, false);
	}, [api, activeIndex]);

	if (!data || isLoading) return null;

	if (error) throw error;

	return (
		<>
				<h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
					Screenshots
				</h3>
			<div className="flex flex-col px-10 select-none">
				<Carousel opts={{ loop: true }}>
					<CarouselContent>
						{data.results.map((file, index) => (
							<CarouselItem key={file.id}>
								<motion.div
									layoutId={`${index}`}
									onClick={() => {
										setActiveIndex(index);
										setModal(!modal);
									}}
								>
									<img src={file.image} className="rounded-xl cursor-pointer" />
								</motion.div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
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
							{data.results.map((file) => (
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
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>

					<Button
						className="font-bold rounded-full h-10 w-10"
						size={"xl"}
						onClick={() => setModal(!modal)}
					>
						<XIcon />
					</Button>
				</motion.div>
			)}
		</>
	);
}
