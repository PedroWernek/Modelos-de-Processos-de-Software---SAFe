import { createStyles } from "antd-style";
import React, { useState } from "react";
import {
  faSquareCaretUp,
  faSquareCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";

interface ShowListContentComponentProps {
  icon?: React.ReactNode;
  title: string;
  titleColor?: string;
  texts: string[];
  textColor?: string;
  example?: string;
  exampleColor?: string;
  backgroundCustomColor?: string;
  exampleBackgroundCustomColor?: string;
}

const useStyle = createStyles(
  (
    _: any,
    {
      titleColor,
      textColor,
      backgroundCustomColor,
      exampleBackgroundCustomColor,
      exampleColor,
    }: {
      backgroundCustomColor?: string;
      exampleBackgroundCustomColor?: string;
      titleColor?: string;
      textColor?: string;
      exampleColor?: string;
    },
  ) => ({
    showComponent: {
      display: "flex",
      flexDirection: "column",
      margin: "10px",
      borderRadius: "10px",
      backgroundColor: backgroundCustomColor || "#f0f0f0",
      transition: "0.3s",
      cursor: "pointer",
      padding: " 20px",

      "& .arrow": {
        "&:hover": {
          color: titleColor,
          transform: "scale(1.1)",
        },
      },
      "& .title": {
        color: titleColor || "black",
        fontSize: "2.25dvh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        justifyTracks: "flex-start",
      },
      "& .text": {
        color: textColor || "black",
        fontSize: "2.75dvh",
        padding: "20px",
        paddingLeft: "30px", // <- Adiciona espaço para os bullets aparecerem
        listStyleType: "disc",
        listStylePosition: "outside",
      },
      "& .example": {
        color: exampleColor || "black",
        fontSize: "3dvh", // ana: não achei!
        fontWeight: "bold",
        marginTop: "10px",
        backgroundColor: exampleBackgroundCustomColor || "#f0f0f0",
        padding: "10px",
        borderRadius: "10px",
        width: "fit-content",
      },
    },
  }),
);

const ShowListContentComponent: React.FC<ShowListContentComponentProps> = ({
  icon,
  title,
  titleColor,
  texts,
  textColor,
  example,
  exampleColor,
  exampleBackgroundCustomColor,
  backgroundCustomColor,
}) => {
  const { styles } = useStyle({
    titleColor,
    textColor,
    exampleColor,
    exampleBackgroundCustomColor,
    backgroundCustomColor,
  });
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.showComponent} onClick={() => setVisible(!visible)}>
      <AnimatePresence>
        <div className="title">
          <h1 style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
            {icon}
            {title}
          </h1>

          <motion.div
            animate={{ rotate: visible ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="arrow">
            <FontAwesomeIcon
              icon={visible ? faSquareCaretUp : faSquareCaretDown}
              size="2x"
            />
          </motion.div>
        </div>
        {visible && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
            className="content">
            <ul className="text">
              {texts.map((text, i) => (
                <li key={i} style={{ fontFamily: "'Open Sans', sans-serif" }}>{text}</li>
              ))}
            </ul>
            {example && <div className="example">{example}</div>}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShowListContentComponent;
