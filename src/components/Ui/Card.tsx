"use client";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { forwardRef } from "react";

interface CardComponentProps {
  backgroundColor?: string;
  width?: string;
  onClick?: () => void;
}

interface CardProps {
  backgroundColor?: string;
  width?: string;
  mouseEnterHandler?: () => void;
  mouseLeaveHandler?: () => void;
  clickHandler?: () => void;
  children: React.ReactNode;
}

const CardComponent = styled.div((props: CardComponentProps) => ({
  backgroundColor: props.backgroundColor ?? "white",
  width: props.width ?? "100%",
  cursor: props.onClick ? "pointer" : "default",
  padding: "32px",
  minHeight: "auto",
  borderRadius: "54px",
  margin: "8px",
  position: "relative",
  overflow: "hidden",
}));

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      backgroundColor,
      width,
      mouseEnterHandler,
      mouseLeaveHandler,
      clickHandler,
      children,
    },
    ref
  ) => (
    <CardComponent
      ref={ref}
      backgroundColor={backgroundColor}
      width={width}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onClick={clickHandler}
    >
      {children}
    </CardComponent>
  )
);

Card.displayName = "Card";

const MotionCard = motion(Card);

export { Card, MotionCard, CardComponent };
