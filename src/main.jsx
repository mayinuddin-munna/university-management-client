import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AnimatedCursor from "react-animated-cursor";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import router from './Router/Routes.jsx'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatedCursor />
    <RouterProvider router={router} />
  </React.StrictMode>
);
