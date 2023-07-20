import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    // element:(),
    children: [],
  },
]);

export default router;
