import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/routes/Home";

import "./css/index.css";
import SafeGuide from "./pages/routes/SAFeGuide";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // dentro dessas chaves vocês irão colocar as paginas que criarem
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/introducao-safe",
        element: <SafeGuide />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
