import APIClient from "@/service/api-client";
import { useQuery } from "@tanstack/react-query";
import genres from "@/data/genres";
import ms from "ms";
import type { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

export default function useGenres() {
	return useQuery({
		queryKey: ["genres"],
		queryFn: () => apiClient.getAll({}),
		staleTime: ms("24h"),
		initialData: genres,
	});
}
