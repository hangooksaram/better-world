"use client";
import { useMoveHorizontalAnimation } from "@/hooks/useMoveHorizontalAnimation";
import { css } from "@emotion/css";
import { motion } from "framer-motion";
import React, { ReactNode, SetStateAction, useRef } from "react";

interface NavigationDetailProps {
  content: string;
  isMouseEntered: string;
  contentPosition: number;
  setContentPosition: React.Dispatch<SetStateAction<number>>;
}

const NavigationDetail = ({
  content,
  contentPosition,
  setContentPosition,
}: NavigationDetailProps) => {
  const el = useRef<HTMLDivElement>(null);
  useMoveHorizontalAnimation(el, contentPosition, setContentPosition);

  return (
    <MotionNavigationDetail>
      <div
        ref={el}
        className={css`
          position: absolute;
          font-size: 80px;
          font-weight: bold;
          z-index: 1;
          white-space: nowrap;
          top: 30%;
          left: 0;
        `}
      >
        {content}
      </div>
    </MotionNavigationDetail>
  );
};

const MotionNavigationDetail = ({ children }: { children: ReactNode }) => (
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
        duration: 0.3,
      },
    }}
    exit={{
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    }}
  >
    {children}
  </motion.div>
);

export default NavigationDetail;
