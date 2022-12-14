import { createBrowserRouter } from "react-router-dom";
import BlogDetails from "../BlogDetails/BlogDetails";
import Blog from "../BlogPage/Blog";
import ContactPage from "../ContactPage/ContactPage";
import HomePage from "../Homepage/HomePage";
import Main from "../Layout/Main";
import LoginPage from "../LoginPage/LoginPage";
import Register from "../Register/Register";
import ShopDetails from "../ShopPage/ShopDetails/ShopDetails";
import ShopPage from "../ShopPage/ShopPage";

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
                loader: () => fetch("http://localhost:5000/blogs")
            },
            {
                path: '/blogs/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
            },
            {
                path: 'contact',
                element: <ContactPage></ContactPage>
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
                path: 'shop',
                element: <ShopPage></ShopPage>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/shop/:id',
                element: <ShopDetails></ShopDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
        ]

    }
])

export default router