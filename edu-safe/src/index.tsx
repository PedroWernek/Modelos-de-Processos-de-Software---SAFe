import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import LessonSample from "./pages/lessons/LessonSample";
import Home from "./pages/routes/Home";

import "./css/index.css";
import SafeGuide from "./pages/routes/SAFeGuide";
import SAFeIntro from "./pages/modules/beginner/SAFeIntro";
import ModulesNav from "./pages/routes/ModulesNav";
import ModulesContent from "./pages/routes/ModulesContent";
import Questionnaires from "./pages/routes/Questionnaires";
import SAFeIntroQuest from "./pages/questionnaries/beginner/SAFeIntroQuest";

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
        element: <ModulesContent />,
        children: [
          {
            path: "/modulos/conteudo/iniciante/1",
            element: <SAFeIntro />,
          },
        ],
      },
      {
        path: "/modulos/avaliacao",
        element: <Questionnaires />,
        children: [
          {
            path: "/modulos/avaliacao/basico/1",
            element: <SAFeIntroQuest />,
          },
        ],
      },
      {
        path: "/teste-ana",
        element: <LessonSample />,
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
