import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import api from "../../api";
import "../../css/Narrative.css"; // ajuste o caminho conforme sua estrutura
import BloquedPage from "../routes/BloquedPage";

interface NarrativeProps {
  bloqued?: boolean;
}

interface Narrativa {
  texto: string;
}

const Narrative: React.FC<NarrativeProps> = ({ bloqued }) => {
  const { id } = useParams<{ id: string }>();
  const [narrativa, setNarrativa] = useState<Narrativa>();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    window.scrollTo(0, 0);
    api.get(`/api/narrativas/${id}`).then((res) => {
      setNarrativa(res.data);
    });
  }, [id]);

  const paragrafos = narrativa?.texto.split(/\n\s*\n/) || [];

  const transitions = useTransition(paragrafos[index], {
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
    if (index < paragrafos.length - 1) {
      setDirection("down");
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setDirection("up");
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
              {item}
            </animated.div>
          ) : null
        )}
      </div>

      <div className="carousel-controls">
        <button onClick={handlePrev} disabled={index === 0}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <span className="carousel-indicator">
          {index + 1} de {paragrafos.length}
        </span>
        <button onClick={handleNext} disabled={index === paragrafos.length - 1}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default Narrative;
