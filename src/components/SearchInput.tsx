import { SearchIcon } from "lucide-react";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import { useRef } from "react";
import useGameQueryStore from "@/store";

export default function SearchInput() {
	const ref = useRef<HTMLInputElement>(null);
	const setSearchText = useGameQueryStore(s => s.setSearchText);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (ref.current) setSearchText(ref.current.value);
			}}
		>
			<InputGroup>
				<InputGroupInput placeholder="Search" size="lg" ref={ref} />
				<InputGroupAddon>
					<SearchIcon />
				</InputGroupAddon>
			</InputGroup>
		</form>
	);
}
