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
import Questionarie from "./pages/questionnaries/Questionarie";
import { AuthPage } from "./pages/AuthPage";
import SAFeModule2 from "./pages/lessons/SAFeModule2";
import SAFeModule3 from "./pages/lessons/SAFeModule3";
import { ListFlashcard } from "./components/flashcards/ListFlashcard";
import { AddFlashcard } from "./components/flashcards/AddFlashcard";
import ResultsWrapper from "./pages/questionnaries/ResultWrapper";
import FlashCard from "./pages/flashcards/FlashCard";

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
        path: "/flash-cards/listar",
        element: <ListFlashcard />,
      },
      {
        path: "/flash-cards/adicionar",
        element: <AddFlashcard />,
      },
      {
        path: "/flash-cards/editar/:id",
        element: <AddFlashcard />,
      },

      {
        path: "/modulos/avaliacao",
        element: <Questionnaires />,
        children: [
          {
            path: "/modulos/avaliacao/:id",
            element: <Questionarie />,
          },
          {
            path: "/modulos/avaliacao/resultado",
            element: <ResultsWrapper />,
          },
        ],
      },
      {
        path: "/autenticar", // rever nome
        element: <AuthPage />,
      },

      {
        path: "/flash-card/:id",
        element: <FlashCard />,
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
