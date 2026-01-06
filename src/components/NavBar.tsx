import ThemeToggle from "./ui/ThemeToggle";
import logo from "../assets/logo.webp"

export default function NavBar() {
	return (
		<nav className="flex justify-between items-center w-full px-4 py-4 border-b">
			<div className="flex text-2xl font-bold gap-4 items-center">
				<img src={logo} className="h-10" />
				GamesHub
			</div>
			<div>
				<ThemeToggle />
			</div>
		</nav>
	);
}
