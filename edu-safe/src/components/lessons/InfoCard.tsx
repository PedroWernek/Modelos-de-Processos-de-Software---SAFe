import React from "react";
import { createStyles } from "antd-style";

interface InfoCardProps {
  title: string;
  description: string;
  borderColor: string;
  icon?: string;
}

const useStyles = createStyles(
  (
    _,
    { borderColor }: { borderColor: string },
  ) => ({
    container: {
      border: `1px solid ${borderColor}`,
      color: "#ffffff",
      backgroundColor: "#1a1a1a",
      borderRadius: "8px", // TODO: REVER COM PEDRO PARA PADRONIZAÇÃO
      display: "flex",
      alignItems: "left",
      padding: "4rem",
      position: "relative",
      width: "90%", // ?? perguntar p o pedro se asi ta bom
    },
    iconWrapper: {
      position: "absolute",
      left: "-2rem", // no exemplo ta mais dentro que fora
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: borderColor,
      borderRadius: "50%",
      padding: "0.5rem",
      width: "5rem",
      height: "5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    iconImage: {
      width: "80%",
      height: "80%", // deppois revemos o tamanho
      objectFit: "cover",
      borderRadius: "50%",
    },
    textWrapper: {
      marginLeft: "2rem", // atencao: valor igual ao iconWrapper left
    },
    title: {
      fontSize: "2rem", // ARRUMAR TAMANHO PADROZINAR
      fontWeight: 600,
      margin: 0,
      textAlign: "left",
    },
    description: {
      fontSize: "1rem", // PADRONIZAR
      marginTop: "1rem",
      textAlign: "justify",
    },
  }),
);

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  borderColor,
  icon,
}) => {
  const { styles } = useStyles({ borderColor });

  return (
    <div className={styles.container}>
      {icon && (
        <div className={styles.iconWrapper}>
          <img src={icon} alt="Icon" className={styles.iconImage} />
        </div>
      )}
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;