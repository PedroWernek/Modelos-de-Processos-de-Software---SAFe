import { faBolt, faClock, faListUl } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface AlertScreenProps {
  questionaryName: string;
  limitTime?: string;
  qtdQuestions?: number;
  xp: number;
}

const AlertScreen: React.FC<AlertScreenProps> = ({
  questionaryName,
  limitTime,
  qtdQuestions,
  xp,
}) => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <h1 className="text-2">Questionário</h1>
      <p
        className="text-2"
        style={{
          borderTop: "1px solid ",
          color: "#c8fff4",
          padding: "10px",
        }}>
        Prepare-se para o questionário de proficiência em{" "}
        <strong>{questionaryName}.</strong>
      </p>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "30px",
        }}>
        <li className="alert-list">
          <FontAwesomeIcon icon={faClock} size="4x" />
          <p>
            <strong>{limitTime} minutos </strong>
            de duração
          </p>
        </li>
        <li className="alert-list">
          <FontAwesomeIcon icon={faListUl} size="4x" />
          <p>
            <strong>{qtdQuestions} questões </strong>
            no total
          </p>
        </li>
        <li className="alert-list">
          <FontAwesomeIcon icon={faBolt} size="4x" color="yellow" />
          <p>
            <strong>+{xp} XP </strong>
            ao concluir o questionário
          </p>
        </li>
      </ul>
      <p className="text-2">Para alcançar o sucesso nesse questionário:</p>
      <ul
        style={{
          display: "flex",
          flexDirection: "row",

          width: "30dvw",
          gap: "30px",
          fontSize: "0.8em",
          padding: "30px",
        }}
        className="text-2">
        <li>Selecione apenas urna opção correta para cada;</li>
        <li>Acerte no mínimo do para concluir a aula;</li>
        <li>Conclua o questionário dentro do ternpo de duração;</li>
      </ul>
      <p className="text-2" style={{ textAlign: "center" }}>
        Estamos trabalhando e torcendo pelo seu sucesso. <br />
        <strong>Desejamos boa sorte no questionário!</strong>
      </p>
    </div>
  );
};

export default AlertScreen;
