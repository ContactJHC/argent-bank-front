import Bidon from "./components/Bidon"
import { Outlet } from "react-router-dom";

export const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { 
            index: true, 
            element: <Bidon /> 
        },
        // {
        //   path: "fiche-logement/:id",
        //   element: <Location />,
        // },
        // {
        //   path: "apropos",
        //   element: <APropos />,
        // },
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
            <Outlet />
            {/* <Bidon /> */}
            {/* <Header />
            <main>
                <Outlet />
            </main>
            <Footer /> */}
        </>
    )
  }

