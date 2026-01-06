import platforms from "@/data/platforms";
import APIClient from "@/service/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export default function usePlatforms() {
	return useQuery({
		queryKey: ["platforms"],
		queryFn: () => apiClient.getAll({}),
		staleTime: ms("24h"),
		initialData: platforms,
	});
}
