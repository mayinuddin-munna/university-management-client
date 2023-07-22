import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import router from "./Router/Routes.jsx";
import AnimatedCursor from "react-animated-cursor";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <AnimatedCursor />
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
