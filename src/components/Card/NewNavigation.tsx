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
  handlePointClick: (id: number) => void;
}

const NavigationStyledComponent = styled.div((props) => ({}));

const NewNavigationCard: React.FC<NavigationCardProps> = ({
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
    <MotionCard
      ref={el}
      backgroundColor="blue"
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
    </MotionCard>
  );
};

export default NewNavigationCard;
