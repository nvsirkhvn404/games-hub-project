import { Link } from "react-router";
import logo from "../assets/logo.webp";
import ThemeToggle from "./ui/ThemeToggle";

export default function NavBar() {
	return (
		<nav className="flex justify-between items-center w-full px-4 py-4 border-b">
			<Link to={"/"} className="flex text-2xl font-bold gap-4 items-center">
				<img src={logo} className="h-10" />
				GamesHub
			</Link>
			<div>
				<ThemeToggle />
			</div>
		</nav>
	);
}
