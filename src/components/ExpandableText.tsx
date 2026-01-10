import { useState } from "react";
import { Button } from "./ui/button";

export default function ExpandableText({ children }: { children: string }) {
	const [expanded, setExpanded] = useState(false);

	const limit = 300;
	if (children.length <= limit)
		return <p className="wrap-break-word">{children}</p>;

	return (
		<div className="space-x-2">
			<p className="inline wrap-break-word text-xl text-muted-foreground">
				{expanded ? children : <>{children.substring(0, limit)}...</>}
			</p>
			<Button className="h-5 w-20" onClick={() => setExpanded(!expanded)}>
				{expanded ? "Show Less" : "Read More"}
			</Button>
		</div>
	);
}
