import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";

export default function GameCardSkeleton() {
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

	return(
		<>
      {skeletons.map((skeleton) => (
        <Card key={skeleton} className="overflow-hidden min-h-75 ">
          <CardHeader className="p-0">
            <Skeleton className="h-40 w-full rounded-none" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Skeleton className="h-4 mt-1" />
              <Skeleton className="h-6" />
              <Skeleton className="h-6" />
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
