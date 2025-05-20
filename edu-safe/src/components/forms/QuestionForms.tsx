import { useState } from "react";
import { useForm } from "react-hook-form";

interface QuestionFormProps {
  questionNumber?: number;
  difficulty?: "Fácil" | "Médio" | "Difícil";
  questionText: string;
  options: string[];
  correctAnswer: string;
  onSubmit?: (data: { selectedOption: string; isCorrect: boolean }) => void;
}

export function QuestionForm({
  questionNumber,
  difficulty,
  questionText,
  options,
  correctAnswer,
  onSubmit,
}: QuestionFormProps) {
  const { register, handleSubmit } = useForm<{ selectedOption: string }>();

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  //mudar a cor do fundo e da alternativa selecionada
  const getBackgroundColor = (option: string): string => {
    if (!answered) return "#0c1329";
    if (option === correctAnswer) return "lightgreen";
    if (option === selectedOption) return "lightcoral";
    return "#0c1329";
  };

  //mudar a cor do texto da alternativa selecionada
  const getTextgroundColor = (option: string): string => {
    if (!answered) return "white";
    if (option === correctAnswer || option === selectedOption) return "black";
    return "white";
  };

  const handleFormSubmit = (data: { selectedOption: string }) => {
    const isCorrect = data.selectedOption === correctAnswer;
    setSelectedOption(data.selectedOption);
    setAnswered(true);

    if (onSubmit) {
      onSubmit({ selectedOption: data.selectedOption, isCorrect });
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="question-form">
      {(questionNumber || difficulty) && (
        <div className="question-header">
          {questionNumber && (
            <span className="question-number">
              Pergunta nº {questionNumber} ---{" "}
            </span>
          )}
          {difficulty && (
            <span className="difficulty">Dificuldade: {difficulty}</span>
          )}
        </div>
      )}

      <h2 className="question-text">{questionText}</h2>

      <div className="options-container">
        {options.map((option, index) => (
          <div
            key={index}
            className="option"
            style={{
              backgroundColor: getBackgroundColor(option),
              color: getTextgroundColor(option),
              padding: "20px",
              borderRadius: "5px",
              marginBottom: "8px",
            }}>
            <input
              type="radio"
              id={`option-${index}`}
              value={option}
              disabled={answered}
              {...register("selectedOption", { required: true })}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>

      {!answered && (
        <button type="submit" className="submission-button">
          Enviar
        </button>
      )}
    </form>
  );
}
