import React, { useState } from "react";
import { QuestionForm } from "../../components/forms/QuestionForms";

import { SAFeIntroQuestions } from "../../data/questionnaries/SAfeIntroQuestions";
import AlertScreen from "./AlertScreen";
import CustomButton from "../../components/random/buttons/CustomButton";
import Carousel from "../../components/random/carousels/Carousel";

const SAFeIntroQuest = () => {
  const [OnAlertScreen, setOnAlertScreen] = useState(true);
  const questionaryName = "Questionário de Introdução ao SAFe";

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
      {OnAlertScreen ? (
        <div
          style={{
            height: "100dvh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="background-2">
          <AlertScreen
            questionaryName={questionaryName}
            limitTime="4"
            qtdQuestions={SAFeIntroQuestions.length}
            xp={10}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <CustomButton
              backgroundColor="#0d183a"
              borderColor="white"
              borderTickness="2px"
              textColor="white"
              text="Voltar"
              linkNav="/modulos"
              width="50px"
            />
            <div
              onClick={() => {
                setOnAlertScreen(false);
              }}>
              <CustomButton
                backgroundColor="#3ac7a6"
                borderColor="#1c1f2c"
                borderTickness="2px"
                textColor="#1c1f2c"
                text="Continuar"
                width="50px"
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="header text-2">
            <h1>{questionaryName}</h1>
          </div>
          <ol className="question-list">
            <Carousel Componentes={Questões}></Carousel>
          </ol>
        </div>
      )}
    </div>
  );
};

export default SAFeIntroQuest;
