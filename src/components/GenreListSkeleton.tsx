import { Skeleton } from "@/components/ui/skeleton";
export function GenreListSkeleton() {
	return (
		<div className="bg-card rounded-xl px-4 p-2">
			<div className="flex items-center gap-2">
				<Skeleton className="h-10 w-10 rounded-lg" />
				<Skeleton className="h-5 w-42" />
			</div>
		</div>
	);
}
