import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Movie from "./pages/Movie.jsx";
import Actors from "./pages/Actors.jsx";
import Directors from "./pages/Directors.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const routes = createBrowserRouter([
   {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
   },
   {
    path: "/movie/:id",
    element: <Movie />,
    errorElement: <ErrorPage />
   },
   {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />
   },
   {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />
   }
  ]);

export default routes;