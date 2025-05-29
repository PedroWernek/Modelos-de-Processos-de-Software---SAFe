import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/routes/Home";

import "./css/index.css";
import SafeGuide from "./pages/routes/SAFeGuide";
import SAFeModule1 from "./pages/lessons/SAFeModule1";
import ModulesNav from "./pages/routes/LessonNav";
import LessonContent from "./pages/routes/LessonContent";
import Questionnaires from "./pages/routes/Questionnaires";
import SAFeIntroQuest from "./pages/questionnaries/quiz/SAFeIntroQuest";
import { AuthPage } from "./pages/AuthPage";
import SAFeModule2 from "./pages/lessons/SAFeModule2";
import SAFeModule3 from "./pages/lessons/SAFeModule3";

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
      {
        path: "/modulos",
        element: <ModulesNav />,
      },
      {
        path: "/modulos/conteudo",
        element: <LessonContent />,
        children: [
          {
            path: "/modulos/conteudo/modulo-1",
            element: <SAFeModule1 />,
          },
          {
            path: "/modulos/conteudo/modulo-2",
            element: <SAFeModule2 />,
          },
          {
            path: "/modulos/conteudo/modulo-3",
            element: <SAFeModule3 />,
          },
        ],
      },
      {
        path: "/modulos/avaliacao",
        element: <Questionnaires />,
        children: [
          {
            path: "/modulos/avaliacao/1",
            element: <SAFeIntroQuest />,
          },
        ],
      },
      {
        path: "/autenticar", // rever nome
        element: <AuthPage />,
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
