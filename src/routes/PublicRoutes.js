import Home from "../pages/Home/Home";
import Inventory from './../pages/Inventory';
import Blog from './../pages/Blog';
import Login from './../pages/Login';

export const PublicRoutes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/inventory', name: 'Inventory', Component: Inventory },
    { path: '/blog', name: 'Blog', Component: Blog },
    { path: '/login', name: 'Login', Component: Login }
];