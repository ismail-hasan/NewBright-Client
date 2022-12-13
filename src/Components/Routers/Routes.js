import { createBrowserRouter } from "react-router-dom";
import BlogDetails from "../BlogDetails/BlogDetails";
import Blog from "../BlogPage/Blog";
import ContactPage from "../ContactPage/ContactPage";
import HomePage from "../Homepage/HomePage";
import Main from "../Layout/Main";
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
                path: '/blog',
                element: <Blog></Blog>,
                loader: () => fetch("http://localhost:5000/blogs")
            },
            {
                path: '/blog',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
            },
            {
                path: 'contact',
                element: <ContactPage></ContactPage>
            },
            {
                path: 'shop',
                element: <ShopPage></ShopPage>,
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/ShopDetails/:id',
                element: <ShopDetails></ShopDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
        ]

    }
])

export default router