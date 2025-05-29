import React from "react";
import { createStyles } from "antd-style";

interface InfoCardProps {
  title: string;
  description: string | string[];
  borderColor: string;
  borderRadius?: string;
  icon?: React.ReactNode;
}

const useStyles = createStyles(
  (
    _,
    {
      borderColor,
      borderRadius,
    }: { borderColor: string; borderRadius?: string },
  ) => ({
    container: {
      border: `5px solid ${borderColor}`,
      color: "#ffffff",
      backgroundColor: "#1a1a1a",
      borderRadius: borderRadius,
      display: "flex",
      alignItems: "left",
      padding: "4rem",
      position: "relative",
      width: "90%",
    },
    iconWrapper: {
      position: "absolute",
      left: "-2rem",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: borderColor,
      borderRadius: "50%",
      width: "5rem",
      height: "5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    textWrapper: {
      marginLeft: "2rem",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: 600,
      margin: 0,
      textAlign: "left",
    },
    description: {
      fontSize: "1.5rem",
      marginTop: "1rem",
      textAlign: "justify",
    },
    list: {
      fontSize: "1.5rem",
      marginTop: "1rem",
      paddingLeft: "1.5rem",
    },
    listItem: {
      marginBottom: "0.5rem",
      textAlign: "justify",
    },
  }),
);

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  borderColor,
  icon,
  borderRadius,
}) => {
  const { styles } = useStyles({ borderColor, borderRadius });

  return (
    <div className={styles.container}>
      {icon && <div className={styles.iconWrapper}>{icon}</div>}

      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{title}</h2>
        {Array.isArray(description) ? (
          <ul className={styles.list}>
            {description.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.description}>{description}</p>
        )}
      </div>
    </div>
  );
};

export default InfoCard;
