"use client";
import { css } from "@emotion/css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import NavigationDetail from "./NavigationDetail";
import { MotionCard } from "../../components/Ui/Card/Card";
import { AnimatePresence } from "framer-motion";
interface NavigationCardProps {
  id: number;
  text: string;
  backgroundColor: string;
  link: string;
  width?: string;
  detail: string;
  scrollToPage: (id: number) => void;
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
  width,
  detail,
  scrollToPage,
}) => {
  const [isMouseEntered, setIsMouseEntered] = useState<string>("");
  const [contentPosition, setContentPosition] = useState(0);
  return (
    <MotionCard
      backgroundColor={backgroundColor}
      width={width}
      mouseEnterHandler={() => setIsMouseEntered(text)}
      mouseLeaveHandler={() => setIsMouseEntered("")}
      onClick={() => scrollToPage(id)}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        type: "spring",
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.2,
          delay: id / 10,
        },
      }}
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
            content={detail}
            contentPosition={contentPosition}
            setContentPosition={setContentPosition}
          />
        )}
      </AnimatePresence>
    </MotionCard>
  );
};

export default NavigationCard;
