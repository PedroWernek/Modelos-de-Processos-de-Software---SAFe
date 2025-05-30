import React from "react";
import CustomButton from "../../components/random/buttons/CustomButton";

interface ResultsProps {
  passed: boolean;
  correctAnswers: number;
  minCorrectAnswers: number;
}

const Results: React.FC<ResultsProps> = ({
  passed,
  correctAnswers,
  minCorrectAnswers,
}) => {
  return (
    <div
      className="result-page"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100dvh",
        textAlign: "center",
        padding: "2rem",
      }}>
      <h1>{passed ? "Parabéns! 🎉" : "Que pena! 😞"}</h1>
      <p>
        {passed
          ? `Você passou no quiz com ${correctAnswers} acertos!`
          : `Você acertou ${correctAnswers} de ${minCorrectAnswers} questões necessárias.`}
      </p>

      <CustomButton
        text="Voltar para os Módulos"
        linkNav={localStorage.getItem("token") ? "/modulos" : "/login"}
        backgroundColor={passed ? "#3ac7a6" : "#f56c6c"}
        textColor="#0c1329"
        borderColor="#0c1320"
      />
    </div>
  );
};

export default Results;
