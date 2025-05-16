import { createStyles } from "antd-style";
import React, { useState } from "react";

interface ModuleCarouselProps {
  Componentes: React.ComponentType[];
  hasAula?: boolean | false;
  hasBorder?: boolean | false;
}

const useStyle = createStyles((css) => ({
  CarrouselContainer: {
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
  CarrouselContent: {
    display: "flex",
    flexDirection: "row",
    transition: "transform 0.5s ease-in-out",
    width: "100%",
  },
  CarrouselItem: {
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
  CarrouselNavButtons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginTop: "0.75rem",
    justifyContent: "center",
  },
  CarrouselNavButton: {
    backgroundColor: "#1890ff",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "0.9rem",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#40a9ff",
    },
    [css.token.screenXS]: {
      padding: "0.4rem 0.8rem",
      fontSize: "0.8rem",
    },
  },
  CarrouselNavDots: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    marginTop: "0.5rem",
  },
  CarrouselNavDot: {
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

const Carrousel: React.FC<ModuleCarouselProps> = ({
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
    <div className={styles.CarrouselContainer}>
      {/* Modulos */}
      <div
        className={styles.CarrouselContent}
        style={{ transform: `translateX(-${index * 100}%)` }}>
        {Componentes.map((Componente, i) => (
          <div key={i} className={styles.CarrouselItem}>
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
                  fontSize: "2.5rem",
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
      <div className={styles.CarrouselNavButtons}>
        <button className={styles.CarrouselNavButton} onClick={anterior}>
          Anterior
        </button>

        <div className={styles.CarrouselNavDots}>
          {Componentes.map((_, i) => (
            <button
              key={i}
              className={`${styles.CarrouselNavDot} ${
                index === i ? "active" : ""
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button className={styles.CarrouselNavButton} onClick={prox}>
          Proximo
        </button>
      </div>
    </div>
  );
};

export default Carrousel;
