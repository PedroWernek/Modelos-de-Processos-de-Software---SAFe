import React, { useEffect, useState } from "react";
import { QuestionForm } from "../../../components/forms/QuestionForms";
import AlertScreen from "./AlertScreen";
import CustomButton from "../../../components/random/buttons/CustomButton";
import Carousel from "../../../components/random/carousels/Carousel";
import axios from "axios";

interface QuestionDTO {
  id: number;
  description: string;
  shuffledAnswers: string[];
}

interface QuizDTO {
  id: number;
  xp: number;
  minCorrectAnswers: number;
  questions: QuestionDTO[];
}

const SAFeIntroQuest = () => {
  const [onAlertScreen, setOnAlertScreen] = useState(true);
  const [quiz, setQuiz] = useState<QuizDTO | null>(null);
  const [userXP, setUserXP] = useState(0);

  const questionaryName = "Questionário de Introdução ao SAFe";
  const quizId = 1;

  useEffect(() => {
    axios
      .get<QuizDTO>(`http://localhost:5017/api/quizzes/${quizId}`)
      .then((res) => setQuiz(res.data))
      .catch((err) => {
        alert("Erro ao buscar quiz: " + err.message);
      });
  }, []);

  const handleQuestionSubmit = (isCorrect: boolean) => {
    if (isCorrect && quiz) {
      setUserXP((prev) => prev + quiz.xp);
    }
  };

  const Questoes =
    quiz?.questions.map((questao, index) => () => (
      <li key={questao.id}>
        <QuestionForm
          questionNumber={index + 1}
          questionText={questao.description}
          options={questao.shuffledAnswers}
          correctAnswer={
            quiz.questions[index].shuffledAnswers.find(
              (ans) => ans === questao.shuffledAnswers[0],
            ) || ""
          }
          onSubmit={({ selectedOption }) =>
            handleQuestionSubmit(
              selectedOption === quiz.questions[index].shuffledAnswers[0],
            )
          }
        />
      </li>
    )) || [];

  return (
    <div>
      {onAlertScreen ? (
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
            qtdQuestions={quiz?.questions.length || 0}
            xp={quiz?.xp || 0}
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
            <Carousel Componentes={Questoes}></Carousel>
          </ol>
        </div>
      )}
    </div>
  );
};

export default SAFeIntroQuest;
