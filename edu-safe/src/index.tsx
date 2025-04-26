import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import LessonSample from "./pages/lessons/LessonSample";
import Home from "./pages/routes/Home";


import "./css/index.css";
import SafeGuide from "./pages/routes/SAFeGuide";
import Modules from "./pages/routes/Modules";
import { QuestionForms } from "./components/forms/QuestionForms";

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
        element: <Modules />,
      },
      {
        path: "/teste-ana",
        element: <LessonSample />,
      },
      {
        path: "/teste-enzo",
        element:  <QuestionForms 
        questionNumber={1}
        difficulty="Médio"
        questionText="Tá funcionando?"
        options={["Sim", "Não", "Talvez", "Mais ou menos", "Cadê",]}
        correctAnswer="Sim"
        onSubmit={(result) => {
          console.log(`Resposta selecionada: ${result.selectedOption}`);
          console.log(`Resposta ${result.isCorrect ? 'correta' : 'incorreta'}`);
        }}
        />,
      }
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
