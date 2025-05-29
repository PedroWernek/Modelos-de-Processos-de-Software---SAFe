import React, { useEffect, useState } from "react";
import { QuestionForm } from "../../../components/forms/QuestionForms";
import AlertScreen from "./AlertScreen";
import CustomButton from "../../../components/random/buttons/CustomButton";
import Carousel from "../../../components/random/carousels/Carousel";
import axios from "axios";

interface Answer {
  Id: number;
  Description: string;
  IsCorrect: boolean;
}

interface Question {
  Id: number;
  Description: string;
  ShuffledAnswers: Answer[];
}

interface Quiz {
  Id: number;
  XP: number;
  MinCorrectAnswers: number;
  Questions: Question[];
}

const SAFeIntroQuest = () => {
  const [onAlertScreen, setOnAlertScreen] = useState(true);
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [userXP, setUserXP] = useState(0);

  const questionaryName = "Questionário de Introdução ao SAFe";
  const quizId = 1;

  useEffect(() => {
    axios
      .get(`http://localhost:5017/api/quizzes/${quizId}`)
      .then((res) => {
        console.log("Quiz fetched:", res.data);
        setQuiz(res.data);
        setUserXP(res.data.XP);
        axios.get(`http://localhost:5017/api/quizzes/${quizId}`);
      })
      .catch((err) => {
        alert("Erro ao buscar quiz: " + err.message);
      });
  }, []);

  return (
    <div>
      {!quiz ? (
        <p>Carregando quiz...</p>
      ) : onAlertScreen ? (
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
            qtdQuestions={quiz.Questions?.length || 0}
            xp={quiz.XP}
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
            {/* <Carousel Componentes={Questoes}></Carousel> */}
          </ol>
        </div>
      )}
    </div>
  );
};

export default SAFeIntroQuest;
