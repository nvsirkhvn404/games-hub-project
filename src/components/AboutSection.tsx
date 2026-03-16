import { ScrollArea } from "./ui/scroll-area";

export default function AboutSection({ children }: { children: string }) {
	return (
		<div className="space-x-2 space-y-5">
			<h3 className="text-xl sm:text-2xl font-semibold">About</h3>
			<ScrollArea className="h-42 pr-4">{children}</ScrollArea>
		</div>
	);
}
