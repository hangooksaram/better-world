"use client";
import { css } from "@emotion/css";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import NavigationDetail from "./NavigationDetail";
import { Scrollbar } from "smooth-scrollbar/scrollbar";
import styled from "@emotion/styled";
import { MotionCard } from "../../components/Ui/Card/Card";
import { AnimatePresence } from "framer-motion";
interface NavigationCardProps {
  id: number;
  text: string;
  backgroundColor: string;
  link: string;
  width?: string;
  detail: string;
  handlePointClick: (id: number) => void;
}

export const fadeAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const NavigationCard: React.FC<NavigationCardProps> = ({
  id,
  backgroundColor,
  text,
  link,
  width,
  detail,
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
    <MotionCard
      ref={el}
      backgroundColor={backgroundColor}
      width={width}
      mouseEnterHandler={() => setIsMouseEntered(text)}
      mouseLeaveHandler={() => setIsMouseEntered("")}
      clickHandler={() => handlePointClick(id)}
      whileHover={{ scale: 0.95 }}
      transition={{
        duration: 0.2,
      }}
    >
      <AnimatePresence>
        {!isMouseEntered.includes(text) && (
          <motion.div
            className={css`
              font-weight: bold;
              font-size: 24px;
            `}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeAnimation}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMouseEntered.includes(text) && (
          <NavigationDetail
            isMouseEntered={isMouseEntered}
            width={elementWidth}
            content={detail}
          />
        )}
      </AnimatePresence>
    </MotionCard>
  );
};

export default NavigationCard;
