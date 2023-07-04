import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";
import Radio from "./pages/Radio/Radio";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/work",
        element: <Work />,
        children: [{ path: "/work/radio", element: <Radio /> }],
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
