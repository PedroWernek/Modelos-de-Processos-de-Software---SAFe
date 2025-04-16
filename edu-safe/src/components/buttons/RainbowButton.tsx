import { createStyles } from "antd-style";
import React from "react";

const useStyle = createStyles(({ css }) => ({
  RainBowButton: css`
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 12px;
    padding: 1.5dvw 2.5dvh;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    z-index: 0;
    background: transparent;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 12px;
      padding: 2px;
      background: linear-gradient(270deg, lime, blue, purple);
      background-size: 400% 400%;
      z-index: -1;
      transition: 1s;
    }

    &:hover::before {
      animation: rainbowBorder 5s linear infinite;
    }

    &::after {
      content: "";
      position: absolute;
      inset: 2px;
      border-radius: 10px;
      background-color: #1c1f2c;
      z-index: -1;
    }

    @keyframes rainbowBorder {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `,
}));

interface RainbowButtonProps {
  content: string;
}

const RainbowButton: React.FC<RainbowButtonProps> = ({ content }) => {
  const { styles } = useStyle();

  return <button className={styles.RainBowButton}>{content}</button>;
};

export default RainbowButton;
