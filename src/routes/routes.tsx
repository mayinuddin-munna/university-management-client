import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import AdminLayout from "../components/layout/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <>Error</>,
    children: [
      {
        path: "about",
        element: <div>About</div>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <>Error</>,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);

export default router;
