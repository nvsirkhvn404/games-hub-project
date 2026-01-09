import platforms from "@/data/platforms";
import APIClient from "@/service/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import type Platform from "../entities/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export default function usePlatforms() {
	return useQuery({
		queryKey: ["platforms"],
		queryFn: () => apiClient.getAll({}),
		staleTime: ms("24h"),
		initialData: platforms,
	});
}
