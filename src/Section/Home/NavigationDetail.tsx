"use client";
import { css } from "@emotion/css";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";
import { fadeAnimation } from "./Navigation";

interface NavigationDetailProps {
  width: string;
  content: string;
  isMouseEntered: string;
}

const NavigationDetail = ({
  width,
  content,
  isMouseEntered,
}: NavigationDetailProps) => {
  return (
    <motion.div
      className={css`
        height: 100%;
        display: flex;
        align-items: center;
      `}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <motion.div
        className={css`
          position: absolute;
          font-size: 80px;
          font-weight: bold;
          z-index: 1;
          white-space: nowrap;
          top: 30%;
        `}
        animate={{
          x: [parseInt(width) + 100, -(parseInt(width) + 800)],
        }}
        transition={{ duration: 10 }}
      >
        {content}
      </motion.div>
    </motion.div>
  );
};

export default NavigationDetail;
