import ErrorPage from "@/pages/ErrorPage";
import GameDetailPage from "@/pages/GameDetailPage";
import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "", element: <HomePage /> },
			{ path: "games/:slug", element: <GameDetailPage /> },
		],
	},
]);

export default router;
