import styled from "@emotion/styled";
import React from "react";
import { textSize } from "./Template";

// const StyledAnchor = styled.a`
//   background-size: 200% 100%;
//   background-image: linear-gradient(
//     to right,
//     transparent 50%,
//     var(--primary-color) 50%
//   );
//   transition: background-position 0.5s;
//   :hover {
//     background-position: -100% 0%;
//   }
//   text-decoration: underline;
//   font-size: ${(props: string) => props.size};
// `;

const StyledAnchor = styled.a(
  {
    backgroundSize: "200% 100%",
    backgroundImage:
      "linear-gradient(to right, transparent 50%, var(--primary-color) 50% )",
    transition: "background-position 0.5s",
    ":hover": {
      backgroundPosition: "-100% 0%",
    },
    textDecoration: "underline",
  },
  ({ size }: { size?: string }) => ({
    fontSize: size,
  })
);

const Link = ({
  href,
  size,
  children,
}: {
  href: string;
  children: React.ReactNode;
  size: "xs" | "sm" | "md" | "lg" | "xl";
}) => {
  return (
    <StyledAnchor target="_blank" size={textSize[size]} href={href}>
      {children}
    </StyledAnchor>
  );
};

export default Link;
