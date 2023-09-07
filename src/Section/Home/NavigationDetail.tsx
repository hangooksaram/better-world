"use client";
import { css } from "@emotion/css";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface NavigationDetailProps {
  content: string;
  isMouseEntered: string;
}

const NavigationDetail = ({ content }: NavigationDetailProps) => {
  const el = useRef<HTMLDivElement>(null);
  const [elementWidth, setElementWidth] = useState("");
  useEffect(() => {
    setElementWidth(el!.current!.clientWidth.toString());
  }, [el]);
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
        ref={el}
        className={css`
          position: absolute;
          font-size: 80px;
          font-weight: bold;
          z-index: 1;
          white-space: nowrap;
          top: 30%;
        `}
        animate={{
          x: [120, -parseInt(elementWidth)],
        }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        {content}
      </motion.div>
    </motion.div>
  );
};

export default NavigationDetail;
