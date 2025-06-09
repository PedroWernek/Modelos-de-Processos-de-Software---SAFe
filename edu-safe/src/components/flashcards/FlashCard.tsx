import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";

interface FlashCardProps {
  front: string;
  back: string;
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
export default FlashCard;
