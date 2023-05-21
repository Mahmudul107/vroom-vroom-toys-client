import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Login/Registration/Registration";
import Blogs from "../Pages/Blogs/Blogs";
import SingleToyDetails from "../Pages/ToyDetails/SingleToyDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AllToys from "../Pages/Shared/AllToys";
import MyToys from "../Pages/Shared/MyToys";
import AddAToy from "../Pages/Shared/AddAToy";
import ErrorPage from "./PrivateRoute/ErrorPage";
import ToyDetails from "../Pages/Shared/ToyDetails/ToyDetails";
import UpdateToy from "../Pages/Shared/ToysTable/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "allToys",
        element: <AllToys />,
        loader: () => fetch("http://localhost:5000/addToy"),
      },
      {
        path: "myToys",
        element: <MyToys />,
      },
      {
        path: "add-a-toy",
        element: <AddAToy />,
      },
      {
        path: "toyDetails/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/addToy/${params.id}`),
      },
      {
        path: "single-toy-details/:id",
        element: <SingleToyDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cars/${params.id}`),
      },
      {
        path: 'myToys/updateToyDetails/:id',
        element: <UpdateToy/>,
        loader: ({ params }) => fetch(`http://localhost:5000/updateToy/${params.id}`)
      },
    ],
  },
]);

export default router;
