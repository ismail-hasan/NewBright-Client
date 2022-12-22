import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../AboutPage/AboutPage";
import BlogDetails from "../BlogDetails/BlogDetails";
import Blog from "../BlogPage/Blog";
import CartPage from "../CartPage/CartPage";
import ContactPage from "../ContactPage/ContactPage";
import HomePage from "../Homepage/HomePage";
import Main from "../Layout/Main";
import LoginPage from "../LoginPage/LoginPage";
import Register from "../Register/Register";
import ShopDetails from "../ShopPage/ShopDetails/ShopDetails";
import ShopPage from "../ShopPage/ShopPage";
import WishList from "../WishList/WishList";
import PrivetRouter from "./PrivetRouter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>,
                loader: () => fetch("https://bright-ecommerce.vercel.app/blogs")
            },
            {
                path: '/blogs/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`https://bright-ecommerce.vercel.app/blogs/${params.id}`)
            },
            {
                path: 'contact',
                element: <ContactPage></ContactPage>
            },
            {
                path: 'about',
                element: <AboutPage></AboutPage>
            },
            {
                path: 'login',
                element: <LoginPage></LoginPage>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'wishlist',
                element: <PrivetRouter><WishList></WishList></PrivetRouter>,
                loader: () => fetch('https://bright-ecommerce.vercel.app/wishlists')
            },
            {
                path: 'cart',
                element: <PrivetRouter><CartPage></CartPage></PrivetRouter>,
            },
            {
                path: 'shop',
                element: <ShopPage></ShopPage>,
                loader: () => fetch('https://bright-ecommerce.vercel.app/products')
            },
            {
                path: '/shop/:id',
                element: <ShopDetails></ShopDetails>,
                loader: ({ params }) => fetch(`https://bright-ecommerce.vercel.app/products/${params.id}`)
            },
        ]

    }
])

export default router