import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Login from "./components/Login/Login"

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
          element: <Login />,
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

