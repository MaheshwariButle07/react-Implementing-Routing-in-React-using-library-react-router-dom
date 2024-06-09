import ReactDom from "react-dom/client"
import About from "./views/About/About";
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import Services from "./views/Services/Services";


import { createBrowserRouter , RouterProvider } from "react-router-dom";

const root = ReactDom.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home />
    },

    {
        path:"/about",
        element:<About />
    },

    {
        path:"/contact",
        element:<Contact />
    },

    {
        path:"/services",
        element:<Services />
    },
])

root.render(<RouterProvider router={router}/>)