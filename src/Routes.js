import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import User from "./pages/User/User"

export const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { 
            index: true, 
            element: <Home /> 
        },
        // {
        //   path: "fiche-logement/:id",
        //   element: <Location />,
        // },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/user",
          element: <User />
        },
        // { 
        //     path: "*", 
        //     element: <NotFound /> 
        // },
      ],
    },
]

  function Layout() {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
            {/* <Bidon /> */}
            {/* <Header />
            <main>
                <Outlet />
            </main>
            <Footer /> */}
        </>
    )
  }

