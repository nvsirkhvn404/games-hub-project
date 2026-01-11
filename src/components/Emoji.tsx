import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import bullsEye from "../assets/bulls-eye.webp";
import type { ImgHTMLAttributes } from "react";

const Emoji = ({ rating, size=8 }: { rating: number; size: number }) => {

	if (rating < 3) return null;

	const emojiMap: {[key: number]: ImgHTMLAttributes<HTMLImageElement>} = {
		3: { src: meh, alt: "meh" },
		4: { src: thumbsUp, alt: "recommended" },
		5: { src: bullsEye, alt: "exceptional" },
	};

	const emoji = emojiMap[rating];
	if (!emoji) return null;

	return <img {...emoji} className={`size-${size} mt-1` }/>;
};

export default Emoji;
