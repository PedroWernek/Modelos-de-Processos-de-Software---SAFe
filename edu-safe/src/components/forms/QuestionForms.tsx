import { useForm } from "react-hook-form";

interface QuestionFormsProps {
  questionNumber?: number;
  difficulty?: "Fácil" | "Médio" | "Difícil";
  questionText?: string;
  options?: string[];
  correctAnswer?: string;
  onSubmit: (data: { selectedOption: string; isCorrect: boolean }) => void;
}

export function QuestionForms({
  questionNumber,
  difficulty,
  questionText,
  options,
  correctAnswer,
  onSubmit,
}: QuestionFormsProps) {
  const { register, handleSubmit } = useForm<{ selectedOption: string }>();

  const handleFormSubmit = (data: { selectedOption: string }) => {
    const isCorrect = data.selectedOption === correctAnswer;
    onSubmit({
      selectedOption: data.selectedOption,
      isCorrect: isCorrect,
    });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="question-form">
      <div className="question-header">
        <span className="question-number">
          Pergunta nº {questionNumber} ---{" "}
        </span>
        <span className="difficulty">Dificuldade: {difficulty}</span>
      </div>

      <h2 className="question-text">{questionText}</h2>

      <div className="options-container">
        {options &&
          options.map((option, index) => (
            <div key={index} className="option">
              <input
                type="radio"
                id={`option-${index}`}
                value={option}
                {...register("selectedOption", { required: true })}
              />
              <label htmlFor={`option-${index}`}>{option}</label>
            </div>
          ))}
      </div>

      <button type="submit" className="submition-button">
        Enviar
      </button>
    </form>
  );
}
