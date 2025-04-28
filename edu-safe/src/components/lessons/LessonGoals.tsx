import React from "react";
import { createStyles } from "antd-style";

interface LessonGoalsProps {
  goals: string[];
  backgroundColor?: string;
  textColor?: string;
}

const useStyles = createStyles(
  (
    _,
    {
      backgroundColor,
      textColor,
    }: {
      backgroundColor?: string;
      textColor?: string;
    },
  ) => ({
    container: {
      backgroundColor: backgroundColor || "#1a1a1a",
      padding: "6rem",
      borderRadius: "12px",
      color: textColor || "#ffffff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1rem",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "thin", // acho que n ta funcionando?
      margin: 0,
      textAlign: "center",
    },
    line: {
      width: "15%",
      height: "2px",
      backgroundColor: textColor || "#ffffff",
      border: "none",
      paddingBottom: "0.3rem",
      marginBottom: "3rem",
    },
    lessonGoals: {
      fontSize: "1.25rem", // DEPOIS CONVERSAR SOBRE! OS TAMANHOS DE FONTE!
      margin: 0,
      lineHeight: 1.5,
      listStyleType: "disc",
      paddingLeft: "15dvw",
      alignSelf: "flex-start",
      paddingBottom: "5rem",
    },
  }),
);

const LessonGoals: React.FC<LessonGoalsProps> = ({
  goals,
  backgroundColor,
  textColor,
}) => {
  const { styles } = useStyles({ backgroundColor, textColor });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Objetivos da Unidade</h1>
      <hr className={styles.line} />
      <ul className={styles.lessonGoals}>
        {goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
    </div>
  );
};

export default LessonGoals;
