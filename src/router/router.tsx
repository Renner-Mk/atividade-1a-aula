import { createBrowserRouter } from "react-router-dom";
import { ListaCompras } from "../pages/ListaCompras";
import { Home } from "../pages/Home";
import { About } from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/mercado",
    element: <ListaCompras />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
