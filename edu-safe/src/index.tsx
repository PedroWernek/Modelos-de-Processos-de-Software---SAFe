import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";

import "./css/index.css";
import ExplicacaoSAFe from "./routes/conteudo/modulos/pagina-principal/ExplicacaoSAFe";

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
        path: "/explicacao-safe",
        element: <ExplicacaoSAFe />,
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
