import platforms from "@/data/platforms";
import apiClient, { type FetchResponse } from "@/service/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export default function usePlatform() {
	return useQuery({
		queryKey: ["platform"],
		queryFn: () =>
			apiClient
				.get<FetchResponse<Platform>>("/platforms/lists/parents")
				.then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000, //24h
		initialData: { count: platforms.length, results: platforms },
	});
}
