// Pages
import Bookmarks from "../pages/Bookmarks";
import Games from "../pages/Games";
import Home from "../pages/Home";
import Watch from "../pages/Watch";

// routes
const routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/watch",
		component: Watch,
	},
	{
		path: "/groups",
		component: Home,
	},
	{
		path: "/gaming",
		component: Games,
	},
	{
		path: "/bookmarks",
		component: Bookmarks,
	},
];

export default routes;
