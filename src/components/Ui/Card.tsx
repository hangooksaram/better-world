import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { RefObject, forwardRef } from "react";

interface CardProps {
  backgroundColor: string;
  width?: string;
  mouseEnterHandler: () => void;
  mouseLeaveHandler: () => void;
  clickHandler: () => void;
  children: React.ReactNode;
}

const CardComponent = styled.div(
  (props: { backgroundColor: string; width?: string }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "32px",
    minHeight: "auto",
    borderRadius: "54px",
    fontSize: "48px",
    border: "2px solid black",
    cursor: "pointer",
    margin: "8px",
    backgroundColor: `${props.backgroundColor}`,
    width: `${props.width ?? "100%"}`,
    position: "relative",
    overflow: "hidden",
    color: "white",
  })
);

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
      onMouseEnter={() => mouseEnterHandler}
      onMouseLeave={() => mouseLeaveHandler}
      onClick={clickHandler}
    >
      {children}
    </CardComponent>
  )
);

Card.displayName = "Card";

const MotionCard = motion(Card);

export { Card, MotionCard };
