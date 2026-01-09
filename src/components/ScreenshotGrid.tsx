import useScreenshots from "@/hooks/useScreenshots";

export default function ScreenshotGrid({ gameId }: { gameId: number }) {
	const { data, isLoading, error } = useScreenshots(gameId);

	if (isLoading) return null;

	if (error) throw error;

	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
			{data?.results.map((file) => (
				<img key={file.id} src={file.image} className="rounded-xl" />
			))}
		</div>
	);
}
