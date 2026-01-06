import { SearchIcon } from "lucide-react";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import { useRef } from "react";

interface Props {
	onSearch: (searchText: string) => void;
}

export default function SearchInput({ onSearch }: Props) {
	const ref = useRef<HTMLInputElement>(null);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (ref.current) onSearch(ref.current.value);
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
