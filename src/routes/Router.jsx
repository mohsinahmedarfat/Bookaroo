import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Books from "../pages/books/Books";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books></Books>,
      },
    ],
  },
]);

export default Router;
