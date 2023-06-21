"use client";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { forwardRef } from "react";

interface StyledCardProps {
  backgroundColor?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  onClick?: () => void;
}

interface CardProps {
  backgroundColor?: string;
  width?: string;
  mouseEnterHandler?: () => void;
  mouseLeaveHandler?: () => void;
  onClick?: () => void;
  children: React.ReactNode;
}

const StyledCard = styled.div((props: StyledCardProps) => ({
  backgroundColor: props.backgroundColor ?? "white",
  width: props.width ?? "100%",
  height: props.height ?? "auto",
  cursor: props.onClick ? "pointer" : "default",
  padding: "32px",
  minHeight: "auto",
  borderRadius: props.borderRadius ?? "54px",
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
      onClick,
      children,
    },
    ref
  ) => (
    <StyledCard
      ref={ref}
      backgroundColor={backgroundColor}
      width={width}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onClick={onClick}
    >
      {children}
    </StyledCard>
  )
);

Card.displayName = "Card";

const MotionCard = motion(Card);

export { Card, MotionCard, StyledCard };
