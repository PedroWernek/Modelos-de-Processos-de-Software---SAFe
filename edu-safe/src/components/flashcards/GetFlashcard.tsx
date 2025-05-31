import React, { useEffect, useState } from "react";
import { useTransition, animated, useSpring } from "@react-spring/web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import api from "../../api";

interface FlashCard {
  id: number;
  lessonId: number;
  name: string;
  description: string;
}

interface FlashCardProps {
  front: string;
  back: string;
}

interface CarouselProps {
  lessonId: number;
}

const FlashCard: React.FC<FlashCardProps> = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);

  const flipAnimation = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const cardStyle: React.CSSProperties = {
    width: "500px",
    height: "300px",
    perspective: "1000px",
    cursor: "pointer",
  };

  const innerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    height: "100%",
  };

  const frontBackStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    padding: "2rem",
    backfaceVisibility: "hidden",
    backgroundColor: "#0c1329",
    color: "#c8fff4",
  };

  return (
    <div style={cardStyle} onClick={() => setFlipped(!flipped)}>
      <div style={innerStyle}>
        <animated.div
          style={{
            ...frontBackStyle,
            opacity: flipAnimation.opacity.to((o) => 1 - o),
            transform: flipAnimation.transform,
          }}>
          {front}
        </animated.div>
        <animated.div
          style={{
            ...frontBackStyle,
            backgroundColor: "#283969",
            opacity: flipAnimation.opacity,
            transform: flipAnimation.transform.to(
              (t) => `${t} rotateY(180deg)`,
            ),
          }}>
          {back}
        </animated.div>
      </div>
    </div>
  );
};

const FlashCardCarousel: React.FC<CarouselProps> = ({ lessonId }) => {
  const [flashCards, setFlashCards] = useState<FlashCard[]>([]);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  useEffect(() => {
    api
      .get(`/api/flash-cards/lessonId/${lessonId}`)
      .then((res) => setFlashCards(res.data))
      .catch((err) => console.error("Erro ao buscar flashcards:", err));
  }, [lessonId]);

  const transitions = useTransition(flashCards[index], {
    key: flashCards[index]?.id,
    from:
      direction === "right"
        ? { opacity: 0, transform: "translateX(100%)" }
        : { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave:
      direction === "right"
        ? { opacity: 0, transform: "translateX(-100%)" }
        : { opacity: 0, transform: "translateX(100%)" },
    config: { tension: 300, friction: 30 },
  });

  const handleNext = () => {
    setDirection("right");
    setIndex((prev) => (prev + 1) % flashCards.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setIndex((prev) => (prev - 1 + flashCards.length) % flashCards.length);
  };

  return (
    <div
      className="question-form"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
      }}>
      <div
        className="header"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}>
        <div
          style={{
            width: "500px",
            height: "300px",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          {transitions((style, item) =>
            item ? (
              <animated.div
                style={{
                  ...style,
                  position: "absolute",
                  width: "500px",
                  height: "300px",
                }}>
                <FlashCard front={item.name} back={item.description} />
              </animated.div>
            ) : null,
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
          }}>
          <button onClick={handlePrev} className="submission-button">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <p style={{ fontSize: "1em", color: "#c8fff4", marginTop: "1rem" }}>
            {index + 1} de {flashCards.length}
          </p>
          <button onClick={handleNext} className="submission-button">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashCardCarousel;
