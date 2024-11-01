import { createBrowserRouter } from "react-router-dom";

import { Home } from "../containers/home";
import { Login } from "../containers/Login";
import { Register } from "../containers/Register";
import { Menu } from "../containers/Menu";
import { Header } from "../components/Header";

export const router = createBrowserRouter([

    {
        path: "/",
        element:    
        <>
        
        <Header />
        <Home />
        </>,
    },

    {
        path: "/Login",
        element: <Login />,
    },

    {
        path: "/cadastro",
        element: <Register />,
    },

    {
        path: "/cardapio",
        element: <Menu />,
    },
   
   
]);
