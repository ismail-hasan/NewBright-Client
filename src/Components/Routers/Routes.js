import { createBrowserRouter } from "react-router-dom";
import ContactPage from "../ContactPage/ContactPage";
import HomePage from "../Homepage/HomePage";
import Main from "../Layout/Main";

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
                path: 'contact',
                element: <ContactPage></ContactPage>
            }
        ]

    }
])

export default router