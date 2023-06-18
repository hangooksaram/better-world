"use client";
import { css } from "@emotion/css";
import { motion, useAnimate } from "framer-motion";
import { useRef } from "react";

interface NavigationDetailProps {
  width: string;
  content: string;
}

const NavigationDetail = ({ width, content }: NavigationDetailProps) => {
  return (
    <motion.div
      className={css`
        position: absolute;
        white-space: nowrap;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 48px;
        font-weight: bold;
      `}
      animate={{ x: [parseInt(width) + 100, -(parseInt(width) + 800)] }}
      transition={{ repeat: Infinity, duration: 7 }}
    >
      {content}
    </motion.div>
  );
};

export default NavigationDetail;
