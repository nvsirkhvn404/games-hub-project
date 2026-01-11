import type Genre from "./Genre";
import type Platform from "./Platform";
import type Publisher from "./Publisher";

export default interface Game {
	id: number;
	name: string;
	slug: string;
	genres: Genre[];
	publishers: Publisher[];
	description_raw: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
	esrb_rating: { id: number; slug: string; name: string };
	released: string;
	website: string;
}
