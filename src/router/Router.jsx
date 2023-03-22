import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";
import Auth from "../pages/Auth";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/carrito",
        element:<Cart/>
    },
    {
        path:"/auth",
        element:<Auth/>
    }
])

export default router