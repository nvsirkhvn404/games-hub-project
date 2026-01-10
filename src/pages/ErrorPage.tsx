import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router";

export default function ErrorPage() {
	const error = useRouteError();

	return (
		<>
			<NavBar />
			<div className="flex flex-col items-center min-h-screen my-30 gap-10">
				{isRouteErrorResponse(error) ? (
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold items-center flex flex-col">
						<span className="text-red-600">404</span> Page Doesn't Exist!
					</h1>
				) : (
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold items-center flex flex-col">
						An unexpected <span className="text-red-600">error</span> occurred!
					</h1>
				)}

				<Link to={"/"}>
					<Button>
						<Home />
						Go Home
					</Button>
				</Link>
			</div>
		</>
	);
}
