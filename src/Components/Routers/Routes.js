import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Homepage/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage></HomePage>
    }
])

export default router