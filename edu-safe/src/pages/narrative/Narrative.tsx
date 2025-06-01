import React, { JSX, use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import api from "../../api";
import "../../css/Narrative.css";
import BloquedPage from "../routes/BloquedPage";
import CustomButton from "../../components/random/buttons/CustomButton";

interface NarrativeProps {
  bloqued?: boolean;
}

interface Narrativa {
  texto: string;
}

const Narrative: React.FC<NarrativeProps> = ({ bloqued }) => {
  const { id } = useParams<{ id: string }>();
  const [conteudo, setConteudo] = useState<(string | JSX.Element)[]>([]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    api.get(`/api/narrativas/${id}`).then((res) => {
      const paragrafos = res.data.texto.split(/\n\s*\n/);
      const customButton = (
        <div onClick={handleSubmit}>
          <CustomButton
            text="Concluir narrativa"
            backgroundColor="#3ac7a6"
            textColor="#0c1329"
            borderColor="#0c1320"
          />
        </div>
      );
      setConteudo([...paragrafos, customButton]);
    });
  }, [id]);

  const handleSubmit = () => {
    console.log("Narrativa concluída");

    api
      .post(`/api/narrativas/${id}/submit`)
      .then((res) => {
        console.log("Narrativa concluída com sucesso:", res.data);
        navigate("/modulos");
      })
      .catch((error) => {
        console.error("Erro ao concluir a narrativa:", error);
      });
  };

  const transitions = useTransition(conteudo[index], {
    key: index,
    from:
      direction === "down"
        ? { opacity: 0, transform: "translateY(-100%)" }
        : { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave:
      direction === "down"
        ? { opacity: 0, transform: "translateY(100%)" }
        : { opacity: 0, transform: "translateY(-100%)" },
    config: { tension: 280, friction: 30 },
  });

  const handleNext = () => {
    if (index < conteudo.length - 1) {
      setDirection("up");
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setDirection("down");
      setIndex((prev) => prev - 1);
    }
  };

  if (bloqued) return <BloquedPage />;

  return (
    <div className="narrative-container">
      <div className="carousel-content">
        {transitions((style, item) =>
          item ? (
            <animated.div className="flashcard" style={style}>
              {React.isValidElement(item) ? item : <p>{item}</p>}
            </animated.div>
          ) : null,
        )}
      </div>

      <div className="carousel-controls">
        <button onClick={handlePrev} disabled={index === 0}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
        <span className="carousel-indicator">
          {index + 1} de {conteudo.length}
        </span>
        <button onClick={handleNext} disabled={index === conteudo.length - 1}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </div>
    </div>
  );
};

export default Narrative;
