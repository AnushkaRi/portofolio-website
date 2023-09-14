import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";
import Radio from "./pages/Radio/Radio";
import Blackjack from "./pages/Blackjack/Blackjack";
import WorldClock from "./pages/WorldClock/WorldClock";
import ToDo from "./pages/ToDo/ToDo";
import Chat from "./pages/Chat/Chat";
import Weather from "./pages/Weather/Weather";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/portofolio-website",
        element: <Home />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/radio",
        element: <Radio />,
      },
      {
        path: "/worldclock",
        element: <WorldClock />,
      },
      {
        path: "/todo",
        element: <ToDo />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/blackjack",
        element: <Blackjack />,
      },
      {
        path: "/weather",
        element: <Weather />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
