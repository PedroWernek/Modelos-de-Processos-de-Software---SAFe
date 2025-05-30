import React, { useEffect, useState } from "react";
import { QuestionForm } from "../../../components/forms/QuestionForms";
import AlertScreen from "./AlertScreen";
import CustomButton from "../../../components/random/buttons/CustomButton";
import Carousel from "../../../components/random/carousels/Carousel";
import axios from "axios";

interface Answer {
  id: number; // Corrigido: era 'Id'
  description: string;
}

interface Question {
  id: number;
  description: string;
  shuffledAnswers: Answer[];
}

interface Quiz {
  id: number;
  xp: number;
  minCorrectAnswers: number;
  questions: Question[];
}

const SAFeIntroQuest = () => {
  const [onAlertScreen, setOnAlertScreen] = useState(true);
  const [quiz, setQuiz] = useState<Quiz>({
    id: 0,
    xp: 0,
    minCorrectAnswers: 0,
    questions: [],
  });

  const [userAnswers, setUserAnswers] = useState<[number, string][]>([]); // [ [ID_PERGUNTA, TEXTO_RESPOSTA] ]

  const questionaryName = "Questionário de Introdução ao SAFe";
  const quizId = 2;

  useEffect(() => {
    axios
      .get(`http://localhost:5017/api/quizzes/${quizId}`)
      .then((res) => {
        const fixedQuiz: Quiz = {
          ...res.data,
          questions: res.data.questions.map((q: any) => ({
            id: q.id,
            description: q.description,
            shuffledAnswers: q.shuffledAnswers.map(
              (answerText: string, index: number) => ({
                id: index, // Garantindo ID numérico
                description: answerText,
              }),
            ),
          })),
        };

        setQuiz(fixedQuiz);
        console.log("Quiz carregado:", fixedQuiz);
      })
      .catch((err) => {
        alert("Erro ao buscar quiz: " + err.message);
      });
  }, []);

  const handleAnswerSubmit = (questionId: number, answerText: string) => {
    setUserAnswers((prev) => [...prev, [questionId, answerText]]);
    console.log("Respostas até agora:", [
      ...userAnswers,
      [questionId, answerText],
    ]);

    if (quiz.questions.length === userAnswers.length - 1) {
      setOnAlertScreen(true);
      console.log("Todas as perguntas respondidas, mostrando alerta.");
    } else {
      console.log("Ainda faltam perguntas a serem respondidas.");
      console.log(
        `Perguntas respondidas: ${userAnswers.length}, Total: ${quiz.questions.length}`,
      );
    }
  };

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
            qtdQuestions={quiz.questions?.length || 0}
            xp={quiz.xp}
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
            <div onClick={() => setOnAlertScreen(false)}>
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
            <Carousel
              Componentes={quiz.questions.map((question) => (
                <QuestionForm
                  key={question.id}
                  questionText={question.description}
                  options={question.shuffledAnswers}
                  onSubmit={({ selectedOptionText }) => {
                    handleAnswerSubmit(question.id, selectedOptionText);
                  }}
                />
              ))}
            />
          </ol>
        </div>
      )}
    </div>
  );
};

export default SAFeIntroQuest;
