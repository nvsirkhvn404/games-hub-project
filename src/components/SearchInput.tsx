import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group";
import useGameQueryStore from "@/store";
import { SearchIcon } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router";

export default function SearchInput() {
	const ref = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();
	const setSearchText = useGameQueryStore((s) => s.setSearchText);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (ref.current) setSearchText(ref.current.value);
				navigate("/");
			}}
			className="flex-1"
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
