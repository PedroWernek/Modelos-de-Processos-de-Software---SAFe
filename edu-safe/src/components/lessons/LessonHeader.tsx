import React from "react";
import { createStyles } from "antd-style";

interface LessonHeaderProps {
  title: string;
  description: string;
  backgroundColor?: string;
  textColor?: string;
}

const useStyles = createStyles((
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
      padding: "2rem",
      borderRadius: "12px",
      color: textColor || "#ffffff",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "1rem",
    },
    unidade: {
      fontSize: "1.2rem",
      fontWeight: 500,
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      margin: 0,
    },
    line: {
      width: "100%",
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
  title,
  description,
  backgroundColor,
  textColor,
}) => {
  const { styles } = useStyles({ backgroundColor, textColor });

  return (
    <div className={styles.container}>
      <h2 className={styles.unidade}>Unidade</h2>
      <h1 className={styles.title}>{title}</h1>
      <hr className={styles.line} />
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default LessonHeader;