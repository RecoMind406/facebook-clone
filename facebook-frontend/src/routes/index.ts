// Pages
import Fanpage from "../pages/Fanpage";
import ForgotPassword from "../pages/ForgotPassword";
import Games from "../pages/Games";
import Bookmarks from "../pages/Bookmarks";
import Games from "../pages/Games";
import Home from "../pages/Home";
import Login from "../pages/Login";
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
  {
    path: "/fanpage",
    component: Fanpage,
  },
  {
        path: "/login",
        component: Login,
   },
    {
        path: "/forgot-password",
        component: ForgotPassword,
    },
];

export default routes;
