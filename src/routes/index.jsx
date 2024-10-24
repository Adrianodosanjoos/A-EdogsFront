import { createBrowserRouter } from "react-router-dom";

import { Home } from "../containers/home";
import { Login } from "../containers/Login";
import { Register } from "../containers/Register";

export const router = createBrowserRouter([

    {
        path: "/",
        element: <Home />,
    },

    {
        path: "/Login",
        element: <Login />,
    },

    {
        path: "/cadastro",
        element: <Register />,
    },
   
]);
