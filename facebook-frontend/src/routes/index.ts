// Pages
import Fanpage from "../pages/Fanpage";
import ForgotPassword from "../pages/ForgotPassword";
import Games from "../pages/Games";
import Bookmarks from "../pages/Bookmarks";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Watch from "../pages/Watch";
import Groups from "~/pages/Groups";
import { Marketplace } from "~/pages/Marketplace";
import { Profile } from "~/pages/Profile";

// routes
const publicRoutes = [
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/forgot-password",
        component: ForgotPassword,
    },
];
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
        path: "/marketplace",
        component: Marketplace,
    },
    {
        path: "/groups",
        component: Groups,
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
        path: "/profile/:id",
        component: Profile,
    },
];

export default { routes, publicRoutes };
