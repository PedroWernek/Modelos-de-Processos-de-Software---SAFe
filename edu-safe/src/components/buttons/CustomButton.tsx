import { createStyles } from "antd-style";
import React from "react";
import { Link } from "react-router-dom";
import "../../css/index.css";

interface RainbowButtonProps {
  backgroundColor: string;
  text?: string;
  textColor?: string;
  hasRainbow?: boolean;
  borderColor?: string;
  borderThickness?: string;
  link: string;
  width?: string;
  height?: string;
}

const useStyle = createStyles(
  (
    _,
    {
      backgroundColor,
      textColor,
      hasRainbow: hasRainbow,
      borderColor,
      borderThickness,
      width,
      height,
    }: RainbowButtonProps,
  ) => ({
    RainbowButton: {
      fontSize: "1.75dvw",
      fontWeight: "bold",
      color: textColor,
      border: "none",
      borderRadius: "12px",
      padding: `${width || "1.5dvw"} ${height || "2.5dvh"}`,
      margin: "2.5dvh",
      cursor: "pointer",
      transition: "all 0.3s",
      position: "relative",
      zIndex: 0,
      background: "transparent",
      textDecoration: "none",

      ...(hasRainbow
        ? {
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "12px",
              padding: "2px",
              background: "linear-gradient(270deg, #fffafb, #7de2d1, #339989)",
              backgroundSize: "400% 400%",
              zIndex: -1,
              transition: "1s",
            },
            "&:hover::before": {
              animation: "rainbowBorder 5s linear infinite",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              inset: "2px",
              borderRadius: "12px",
              backgroundColor: backgroundColor,
              zIndex: -1,
            },
            "@keyframes rainbowBorder": {
              "0%": { backgroundPosition: "0% 50%" },
              "50%": { backgroundPosition: "100% 50%" },
              "100%": { backgroundPosition: "0% 50%" },
            },
          }
        : {
            border: `${borderThickness} solid ${borderColor || "transparent"}`,
            backgroundColor: backgroundColor,

            "&:hover": {
              opacity: 0.7,
            },
          }),
    },
  }),
);

const CustomButton: React.FC<RainbowButtonProps> = ({
  backgroundColor,
  text,
  textColor,
  hasRainbow,
  borderColor,
  borderThickness,
  link,
  width,
  height,
}) => {
  const { styles } = useStyle({
    backgroundColor,
    textColor,
    hasRainbow: hasRainbow || false,
    borderColor,
    borderThickness,
    link: "",
    width,
    height,
  });

  return (
    <Link to={link} className={styles.RainbowButton}>
      {text}
    </Link>
  );
};

export default CustomButton;
