import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import useTrailers from "@/hooks/useTrailers";

export default function GameTrailer({
	gameId,
	bg_image,
}: {
	gameId: number;
	bg_image: string;
}) {
	const { data, isLoading, error } = useTrailers(gameId);

	if (isLoading) return null;

	if (error) throw error;

	const first = data?.results[0];
	return (
		<div className="flex flex-col items-center p-5">
			{first ? (
				<Carousel opts={{ loop: true }} className="max-w-4xl">
					<CarouselContent>
						<CarouselItem>
							<img src={bg_image} className="rounded-xl" />
						</CarouselItem>
						<CarouselItem>
							first ? (
							<video
								src={first.data[480]}
								poster={first.preview}
								controls
								className="rounded-xl"
							/>
							) : null;
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			) : (
				<img src={bg_image} className="rounded-xl max-w-4xl" />
			)}
		</div>
	);
}
