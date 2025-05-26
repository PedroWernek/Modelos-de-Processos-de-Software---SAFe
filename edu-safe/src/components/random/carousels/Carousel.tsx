import { createStyles } from "antd-style";
import React, { useState } from "react";

interface ModuleCarouselProps {
  Componentes: React.ComponentType[];
  hasAula?: boolean | false;
  hasBorder?: boolean | false;
}

const useStyle = createStyles((css) => ({
  CarouselContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    overflow: "hidden",
    backgroundColor: "#2b2c28",
    padding: "1rem",
  },
  CarouselContent: {
    display: "flex",
    flexDirection: "row",
    transition: "transform 0.5s ease-in-out",
    width: "100%",
  },
  CarouselItem: {
    flex: "0 0 100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "1rem",
    borderRadius: "16px",
  },
  CarouselNavButtons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
  },
  CarouselNavButton: {
    backgroundColor: "#131515",
    color: "#fffafb",
    border: "none",
    padding: "0.5rem 1rem",
    margin: "auto 0.5rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1.5rem",
    transition: "background-color 1s ease",
    "&:hover": {
      backgroundColor: "#fffafb",
      color: "#131515",
    },
    [css.token.screenXS]: {
      padding: "0.4rem 0.8rem",
      fontSize: "0.8rem",
    },
  },
  CarouselNavDots: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    marginTop: "0.5rem",
  },
  CarouselNavDot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#fffafb",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
    "&.active": {
      backgroundColor: "#7de2d1",
    },
    "&:hover": {
      backgroundColor: "#339989",
    },
  },
}));

const Carousel: React.FC<ModuleCarouselProps> = ({
  Componentes,
  hasAula,
  hasBorder,
}) => {
  const { styles } = useStyle();
  const [index, setIndex] = useState(0);

  const anterior = () =>
    setIndex(
      (anterior) => (anterior - 1 + Componentes.length) % Componentes.length,
    );
  const prox = () =>
    setIndex((anterior) => (anterior + 1) % Componentes.length);

  return (
    <div className={styles.CarouselContainer}>
      {/* Modulos */}
      <div
        className={styles.CarouselContent}
        style={{ transform: `translateX(-${index * 100}%)` }}>
        {Componentes.map((Componente, i) => (
          <div key={i} className={styles.CarouselItem}>
            {hasBorder ? (
              <div>
                <Componente />
              </div>
            ) : (
              <div>
                <Componente />
              </div>
            )}
            {hasAula && (
              <p
                style={{
                  color: "#7de2d1",
                  paddingTop: "1rem",
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  transform: "translateX(0)",
                }}>
                Módulo {i + 1}
              </p>
            )}
          </div>
        ))}
      </div>
      {/* Botão de navegação */}
      <div className={styles.CarouselNavButtons}>
        <button className={styles.CarouselNavButton} onClick={anterior}>
          Anterior
        </button>

        <div className={styles.CarouselNavDots}>
          {Componentes.map((_, i) => (
            <button
              key={i}
              className={`${styles.CarouselNavDot} ${
                index === i ? "active" : ""
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button className={styles.CarouselNavButton} onClick={prox}>
          Proximo
        </button>
      </div>
    </div>
  );
};

export default Carousel;
