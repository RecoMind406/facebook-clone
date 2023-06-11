// Pages
import Fanpage from "../pages/Fanpage";
import ForgotPassword from "../pages/ForgotPassword";
import Games from "../pages/Games";
import Bookmarks from "../pages/Bookmarks";
import Home from "../pages/Home";
import Login from "../pages/Login";

// routes
const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/forgot-password",
        component: ForgotPassword,
    },
    {
        path: "/bookmarks",
        component: Bookmarks,
    },
    {
        path: "/games",
        component: Games,
    },
    {
        path: "/fanpage",
        component: Fanpage,
    },
];

export default routes;
