import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import routeGenerator from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { studentPaths } from "./student.routes";
import { facultyPaths } from "./faculty.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <>Error</>,
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(studentPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routeGenerator(facultyPaths),
  },
  {
    path: "/admin",
    element: <App />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
