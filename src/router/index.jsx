import LayoutPublic from "../layout/LayoutPublic"
import Error from "../pages/Error"
import Home from "../pages/Home"
import Leaderboard from "../pages/Leaderboard"
import Perfil from "../pages/Perfil"
import Contacto from "../pages/Contacto"
import Jugador from "../pages/Jugador"
import { createBrowserRouter } from "react-router-dom"
import Favoritos from "../pages/Favoritos"
import Register from "../pages/Register"
import Login from "../pages/Login"


export const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <Error />,
      element: <LayoutPublic />,
      children: [
        {
          // path: '/',
          index: true,
          element: <Home />,
        },
        {
          path: '/Leaderboard',
          element: <Leaderboard />,
        },
        {
          path: '/Leaderboard/:username',
          element: <Jugador />
        },
        {
          path: '/Perfil',
          element: <Perfil />
        },
        {
          path: '/Perfil',
          element: <Perfil />
        },
        {
          path: '/Contacto',
          element: <Contacto />
        },
        {
          path: '/Favorito',
          element: <Favoritos />
        },
        {
          path: '/Register',
          element: <Register />
        },
        {
          path: '/Login',
          element: <Login />
        }
      ],
    },
  ])