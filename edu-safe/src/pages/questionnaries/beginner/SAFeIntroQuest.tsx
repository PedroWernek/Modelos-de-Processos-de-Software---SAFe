import React from "react";
import { QuestionForm } from "../../../components/forms/QuestionForms";

import { SAFeIntroQuestions } from "../../../data/questionnaries/SAfeIntroQuestions";
import Carousel from "../../../components/random/carousels/Carousel";

const SAFeIntroQuest = () => {
  const Questões = SAFeIntroQuestions.map((questao, index) => () => (
    <li>
      <QuestionForm
        key={index}
        questionText={questao.pergunta}
        options={questao.opcoes}
        correctAnswer={questao.resposta_correta}
        onSubmit={(data) => {
          const isCorrect = data.selectedOption === questao.resposta_correta;
          console.log(
            `Resposta ${isCorrect ? "correta" : "incorreta"} para a pergunta: ${
              questao.pergunta
            }`,
          );
        }}
      />
    </li>
  ));

  return (
    <div>
      <div className="header text-2">
        <h1>Questionário de Introdução ao SAFe</h1>
      </div>
      <ol className="question-list">
        <Carousel Componentes={Questões}></Carousel>
      </ol>
    </div>
  );
};

export default SAFeIntroQuest;
