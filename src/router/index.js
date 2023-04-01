import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Favorite from "../pages/Favorite";
import ProductList from "../pages/ProductList";
import Product from "../pages/Product";

const AuthLayout = () => {
    return <Outlet />
}

export default createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                element: <Login />,
                path: '/login',
            },
            {
                element: <Register />,
                path: '/register',
            },
            {
                element: <Home />,
                path: '/',
            },
            {
                element: <Cart />,
                path: '/cart',
            },
            {
                element: <Favorite />,
                path: '/favorite',
            },
            {
                element: <ProductList />,
                path: '/productList',
            },
            {
                element: <Product />,
                path: '/product',
            },
        ]
    }
])