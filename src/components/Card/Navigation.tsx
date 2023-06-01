import { css } from "@emotion/css";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import NavigationDetail from "./NavigationDetail";
import { Scrollbar } from "smooth-scrollbar/scrollbar";

interface NavigationCardProps {
  id: number;
  text: string;
  backgroundColor: string;
  link: string;
  width?: string;
  handlePointClick: (id: number) => void;
}

const NavigationCard: React.FC<NavigationCardProps> = ({
  id,
  backgroundColor,
  text,
  link,
  width,
  handlePointClick,
}) => {
  const clickHandler = () => {
    handlePointClick(id);
  };
  const el = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState<string>("");
  const [elementWidth, setElementWidth] = useState("");
  useEffect(() => {
    setElementWidth(el!.current!.clientWidth.toString());
  }, [el]);

  return (
    <motion.div
      ref={el}
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 32px;
        width: 100%;
        min-height: auto;
        border-radius: 54px;
        font-size: 48px;
        border: 2px solid black;
        cursor: pointer;
        margin: 8px;
        background-color: ${backgroundColor};
        width: ${width};
        position: relative;
        overflow: hidden;
      `}
      whileHover={{ scale: 0.95 }}
      transition={{
        duration: 0.2,
      }}
      onMouseEnter={() => setIsMouseEntered(text)}
      onMouseLeave={() => setIsMouseEntered("")}
      onClick={clickHandler}
    >
      {isMouseEntered === text ? (
        <NavigationDetail width={elementWidth} />
      ) : (
        <motion.div
          className={css`
            font-weight: bold;
          `}
          whileHover={{ opacity: 0 }}
        >
          {text}
        </motion.div>
      )}
    </motion.div>
  );
};

export default NavigationCard;
