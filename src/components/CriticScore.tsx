import { Badge } from "./ui/badge";

export default function CriticScore({ score }: { score: number }) {
	if (!score) return null;
	const color = score > 75 ? "success" : score > 50 ? "warning" : "error";

	return (
		<Badge size="lg" variant={color} className="font-bold p-2">
			{score}
		</Badge>
	);
}
