import React from "react";
import { createStyles } from "antd-style";
import fundoModulos from "../../assets/fundoMoulos.png";

interface LessonHeaderProps {
  unit: string;
  title: string;
  description?: string;
  textColor?: string;
  backgroundImage?: string;
}

const useStyles = createStyles(
  (
    _,
    {
      textColor,
      backgroundImage,
    }: {
      textColor?: string;
      backgroundImage?: string;
    },
  ) => ({
    container: {
      position: "relative",
      backgroundImage: `url(${fundoModulos}), url(${backgroundImage})`,
      backgroundSize: "cover, contain",
      backgroundPosition: "center, right",
      paddingLeft: "155px",
      height: "100dvh",
      borderRadius: "12px",
      color: textColor || "#ffffff",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "1rem",
    },
    imagemFundo: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,

      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    unidade: {
      fontSize: "1em",
      fontWeight: 500,
    },
    title: {
      fontSize: "2.5em",
      fontWeight: "bold",
      margin: 0,
    },
    line: {
      width: "10%",
      height: "2px",
      backgroundColor: textColor || "#ffffff",
      border: "none",
    },
    description: {
      fontSize: "1rem",
      margin: 0,
      lineHeight: 1.5,
    },
  }),
);

const LessonHeader: React.FC<LessonHeaderProps> = ({
  unit,
  title,
  description,
  backgroundImage,
  textColor,
}) => {
  const { styles } = useStyles({ backgroundImage, textColor });

  return (
    <div className={styles.container}>
      <h2 className={styles.unidade}>{unit}</h2>
      <h1 className={styles.title}>{title}</h1>
      <hr className={styles.line} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default LessonHeader;
