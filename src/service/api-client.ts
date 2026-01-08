import axios, { type AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
	count: number;
	next: string | null;
	results: T[];
}

const axiosInstance = axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "80b4115144cf429c9be9cd6fd1b71120",
  },
});

export default class APICient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll(config: AxiosRequestConfig) {
		return axiosInstance
			.get<FetchResponse<T>>(this.endpoint, config)
			.then((res) => res.data);
	}

	get(id: string) {
		return axiosInstance
			.get<T>(this.endpoint + "/" + id)
			.then((res) => res.data);
	}
}
