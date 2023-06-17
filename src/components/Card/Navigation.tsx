"use client";
import { css } from "@emotion/css";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import NavigationDetail from "./NavigationDetail";
import { Scrollbar } from "smooth-scrollbar/scrollbar";
import styled from "@emotion/styled";
import { MotionCard } from "../Ui/Card";

interface NavigationCardProps {
  id: number;
  text: string;
  backgroundColor: string;
  link: string;
  width?: string;
  detail: string;
  handlePointClick: (id: number) => void;
}

const NavigationStyledComponent = styled.div((props) => ({}));

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
      width="48%"
      mouseEnterHandler={() => setIsMouseEntered(text)}
      mouseLeaveHandler={() => setIsMouseEntered("")}
      clickHandler={() => handlePointClick(id)}
      whileHover={{ scale: 0.95 }}
      transition={{
        duration: 0.2,
      }}
    >
      {isMouseEntered === text ? (
        <NavigationDetail width={elementWidth} content={detail} />
      ) : (
        <motion.div
          className={css`
            font-weight: bold;
            font-size: 24px;
          `}
          whileHover={{ opacity: 0 }}
        >
          {text}
        </motion.div>
      )}
    </MotionCard>
  );
};

export default NavigationCard;
