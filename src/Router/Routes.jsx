import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Books from "../pages/Books/Books";
import BookDetails from "../pages/Books/BookDetails";
import About from "../pages/About/About";
import LoadingSpinner from "../pages/Shared/LoadingSpinner/LoadingSpinner";
import Login from "../pages/Register/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import AddMarks from "../pages/AddMarks/AddMarks";
import Result from "../pages/Result/Result";

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
        path: "/books",
        element: <Books />,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "book/:id",
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/loader",
        element: <LoadingSpinner />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/addMarks",
        element: <AddMarks />,
      },
      {
        path: "/dashboard/result",
        element: <Result />,
      },
    ],
  },
]);

export default router;
