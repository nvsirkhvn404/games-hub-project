import { ScrollArea } from "./ui/scroll-area";

export default function ExpandableText({ children }: { children: string }) {
	const limit = 300;
	if (children.length <= limit)
		return <p className="wrap-break-word">{children}</p>;

	return (
		<div className="space-x-2 space-y-5">
			<h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">About </h3>
			<ScrollArea className="h-42">{children}</ScrollArea>
		</div>
	);
}
