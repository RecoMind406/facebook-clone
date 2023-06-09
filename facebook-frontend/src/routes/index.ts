// Pages
import Bookmarks from "../pages/Bookmarks";
import Group from "../pages/Group";
import Home from "../pages/Home";

// routes
const routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/groups",
		component: Group,
	},
	{
		path: "/bookmarks",
		component: Bookmarks,
	},
];

export default routes;
