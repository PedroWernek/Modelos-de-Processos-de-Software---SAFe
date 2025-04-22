import { createStyles } from "antd-style";
import React from "react";
import { Link } from "react-router-dom";

interface RainbowButtonProps {
  backgroundColor: string;
  text?: string;
  textColor?: string;
  hasRambow?: boolean;
  borderColor?: string;
  borderTickness?: string;
  link: string;
}

const useStyle = createStyles(
  (
    _,
    {
      backgroundColor,
      textColor,
      hasRambow,
      borderColor,
      borderTickness,
    }: RainbowButtonProps,
  ) => ({
    RainBowButton: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: textColor,
      border: "none",
      borderRadius: "12px",
      padding: "1.5dvw 2.5dvh",
      margin: "1.5dvh",
      cursor: "pointer",
      transition: "all 0.3s",
      position: "relative",
      zIndex: 0,
      background: "transparent",
      textDecoration: "none",

      ...(hasRambow
        ? {
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "12px",
              padding: "2px",
              background: "linear-gradient(270deg, lime, blue, purple)",
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
            border: `${borderTickness} solid ${borderColor || "transparent"}`,
            backgroundColor: backgroundColor,
          }),
    },
  }),
);

const CustomButton: React.FC<RainbowButtonProps> = ({
  backgroundColor,
  text,
  textColor,
  hasRambow,
  borderColor,
  borderTickness,
  link,
}) => {
  const { styles } = useStyle({
    backgroundColor,
    textColor,
    hasRambow,
    borderColor,
    borderTickness,
    link: "",
  });

  return (
    <Link to={link} className={styles.RainBowButton}>
      {text}
    </Link>
  );
};

export default CustomButton;
