import React, { useEffect, useState } from "react";
import "../../css/Story.css";

interface Question {
  id: number;
  description: string;
  shuffledAnswers: string[];
}

interface Quiz {
  id: number;
  questions: Question[];
}

export default function InteractiveStory() {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    async function loadQuiz() {
      const response = await fetch("/api/quizzes/i-stories");
      const stories = await response.json();
      if (stories.length > 0) {
        const res = await fetch(`/api/quizzes/${stories[0].id}`);
        const data = await res.json();
        setQuiz(data);
      }
    }
    loadQuiz();
  }, []);

  function handleAnswer(answer: string) {
    setAnswers([...answers, answer]);
    if (quiz && currentIndex < quiz.questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCompleted(true);
    }
  }

  if (!quiz) return <p>Carregando...</p>;

  if (completed)
    return (
      <div className="story-box">
        <h2>Você terminou sua jornada!</h2>
        <p>Suas escolhas:</p>
        <ul>
          {answers.map((ans, i) => (
            <li key={i}>{ans}</li>
          ))}
        </ul>
        <button onClick={() => window.location.reload()}>Recomeçar</button>
      </div>
    );

  const question = quiz.questions[currentIndex];

  return (
    <div className="story-box">
      <div className="story-text">{question.description}</div>
      <div className="story-options">
        {question.shuffledAnswers.map((ans, index) => (
          <button key={index} onClick={() => handleAnswer(ans)}>
            {ans}
          </button>
        ))}
      </div>
      <p className="story-progress">
        Parte {currentIndex + 1} de {quiz.questions.length}
      </p>
    </div>
  );
}
