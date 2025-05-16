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
    backgroundColor: "#0d183a",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
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
    backgroundColor: "#0d183a",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  },
  CarouselNavButtons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginTop: "0.75rem",
    justifyContent: "center",
  },
  CarouselNavButton: {
    backgroundColor: "#1890ff",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    margin: "auto 0.5rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "2rem",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#40a9ff",
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
    gap: "0.5rem",
    marginTop: "0.5rem",
  },
  CarouselNavDot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#ccc",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s",
    "&.active": {
      backgroundColor: "#1890ff",
    },
    "&:hover": {
      backgroundColor: "#40a9ff",
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
                  color: "#a773ff",
                  paddingTop: "1rem",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  textAlign: "center",
                  transform: "translateX(0)",
                }}>
                Aula {i + 1}
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
