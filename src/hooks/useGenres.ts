import APIClient from "@/service/api-client";
import { useQuery } from "@tanstack/react-query";
import genres from "@/data/genres";
import ms from "ms";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

export default function useGenres() {
	return useQuery({
		queryKey: ["genres"],
		queryFn: () => apiClient.getAll({}),
		staleTime: ms("24h"),
		initialData: genres,
	});
}
