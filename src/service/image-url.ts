import noImagePlaceholder from "../assets/no-image-placeholder.webp"

export default function getCroppedImageUrl(url: string) {
	if (!url) return noImagePlaceholder;
	
	const target = "media/";
	const index = url.indexOf(target) + target.length;
	if (index === -1) return url;
	return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}
