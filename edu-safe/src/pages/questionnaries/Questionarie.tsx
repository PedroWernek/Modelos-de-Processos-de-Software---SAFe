import React, { use, useEffect, useRef, useState } from "react";
import { QuestionForm } from "../../components/forms/QuestionForms";
import AlertScreen from "./AlertScreen";
import CustomButton from "../../components/random/buttons/CustomButton";
import Carousel from "../../components/random/carousels/Carousel";
import axios from "axios";
import api from "../../api";
import { useNavigate, useParams } from "react-router-dom";
import BloquedPage from "../routes/BloquedPage";

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

interface QuestionarieProps {
  bloqued?: boolean;
}

const Questionarie: React.FC<QuestionarieProps> = ({ bloqued }) => {
  const navigate = useNavigate();
  const [onAlertScreen, setOnAlertScreen] = useState(true);
  const [quiz, setQuiz] = useState<Quiz>({
    id: 0,
    xp: 0,
    minCorrectAnswers: 0,
    questions: [],
  });

  const [userAnswers, setUserAnswers] = useState<
    [questionId: number, selectedAnswer: string][]
  >([]); //

  const params = useParams();
  const quizId = params.id;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Você precisa estar autenticado para acessar o questionário.");
      navigate("/modulos");
      return;
    }

    if (!quizId) return;

    api
      .get(`/api/quizzes/${quizId}`)
      .then((res) => {
        const fixedQuiz: Quiz = {
          ...res.data,
          questions: res.data.questions.map((q: any) => ({
            id: q.id,
            description: q.description,
            shuffledAnswers: q.shuffledAnswers.map(
              (answerText: string, index: number) => ({
                id: index,
                description: answerText,
              }),
            ),
          })),
        };

        setQuiz(fixedQuiz);
      })
      .catch((err) => {
        alert("Erro ao buscar quiz: " + err.message);
        navigate("/modulos");
      });
  }, [quizId]);

  const handleAnswerSubmit = (questionId: number, answerText: string) => {
    setUserAnswers((prev) => [...prev, [questionId, answerText]]);
  };

  const PostAwsers = () => {
    if (userAnswers.length < quiz.questions.length) {
      alert(
        `Você precisa responder todas as perguntas antes de enviar! Respostas dadas: ${userAnswers.length}, Total de perguntas: ${quiz.questions.length}`,
      );
      return;
    }

    const formattedAnswers = userAnswers.map(
      ([questionId, selectedAnswer]) => ({
        questionId,
        selectedAnswer,
      }),
    );

    api
      .post(`/api/quizzes/${quiz.id}/submit`, formattedAnswers, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const { message, correctAnswers } = res.data;
        navigate("/modulos/avaliacao/resultado", {
          state: {
            message,
            correctAnswers,
            passed: message.toLowerCase().includes("passou"),
            minCorrectAnswers: quiz.minCorrectAnswers,
          },
        });
      })
      .catch((err) => {
        alert("Erro ao enviar respostas: " + err.message);
      });
  };

  return (
    <>
      {bloqued ? (
        <>
          <BloquedPage />
        </>
      ) : !quiz ? (
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
        <div
          style={{
            height: "100dvh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <div>
            <div className="header text-2" style={{ margin: "-20px" }}>
              <h1 className="text-2">Questionário</h1>
            </div>
            <ol className="question-list">
              <Carousel
                Componentes={quiz.questions.map((question) => (
                  <li>
                    <QuestionForm
                      key={question.id}
                      questionText={question.description}
                      options={question.shuffledAnswers}
                      onSubmit={({ selectedOptionText }) => {
                        handleAnswerSubmit(question.id, selectedOptionText);
                      }}
                    />
                  </li>
                ))}
              />
            </ol>
            <div
              className="goToModules"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                marginBottom: "40px",
              }}>
              <button onClick={PostAwsers} className="submission-button">
                Post Awsers
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Questionarie;
