import { useState } from "react";
import { useForm } from "react-hook-form";

interface Option {
  id: number;
  description: string;
}

interface QuestionFormProps {
  questionText: string;
  options: Option[];
  onSubmit?: (data: {
    selectedOptionId: number;
    selectedOptionText: string;
  }) => void;
}

export function QuestionForm({
  questionText,
  options,
  onSubmit,
}: QuestionFormProps) {
  const { register, handleSubmit } = useForm<{
    selectedOptionId: string;
  }>();
  const [answered, setAnswered] = useState(false);
  const [selectedQustionId, setSelectedQustionId] = useState<number>();

  const handleFormSubmit = (data: { selectedOptionId: string }) => {
    const selectedId = parseInt(data.selectedOptionId, 10);
    setSelectedQustionId(parseInt(data.selectedOptionId, 10));

    const selectedAnswer = options.find((opt) => opt.id === selectedId);

    if (!selectedAnswer) {
      console.error("Selected answer not found!", selectedId, options);
      return;
    }

    setAnswered(true);

    if (onSubmit) {
      onSubmit({
        selectedOptionId: selectedId,
        selectedOptionText: selectedAnswer.description,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="question-form">
      <h2 className="question-text">{questionText}</h2>

      <div className="options-container">
        {options.map((option) => (
          <label
            key={option.id}
            htmlFor={`option-${option.id}`}
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: answered
                ? option.id === selectedQustionId
                  ? "lightgreen"
                  : "#333"
                : "#0c1329",
              color: answered
                ? option.id === selectedQustionId
                  ? "black"
                  : "#fff"
                : "#fff",
              padding: "20px",
              borderRadius: "5px",
              marginBottom: "8px",
              cursor: answered ? "default" : "pointer",
              gap: "10px",
              userSelect: "none",
            }}>
            <input
              type="radio"
              id={`option-${option.id}`}
              value={option.id}
              disabled={answered}
              {...register("selectedOptionId", { required: true })}
              style={{ cursor: answered ? "default" : "pointer" }}
            />
            <span>{option.description}</span>
          </label>
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
