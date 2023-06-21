"use client";
import styled from "@emotion/styled";
import { SectionLayoutProps, FlexProps, TextProps, GridProps } from ".";

const Grid = styled.div(
  {
    display: "grid",
  },
  ({
    gridTemplateColumns,
    gridTemplateRows,
    rowGap,
    columnGap,
    width,
    height,
  }: GridProps) => ({
    width: width ?? "100%",
    height: height ?? "100%",
    gridTemplateRows,
    gridTemplateColumns,
    rowGap: rowGap ?? "8px",
    columnGap: columnGap ?? "8px",
    "@media (max-width:1000px)": {
      display: "flex",
      flexDirection: "column",
    },
  })
);

const Flex = styled.div(
  { display: "flex" },
  ({
    width,
    height,
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    rowGap,
    columnGap,
  }: FlexProps) => ({
    width: width ?? "100%",
    height: height ?? "100%",
    flexDirection: flexDirection ?? "row",
    justifyContent: justifyContent ?? "flex-start",
    alignItems: alignItems ?? "flex-start",
    flexWrap: flexWrap ?? "nowrap",
    rowGap: rowGap ?? "8px",
    columnGap: columnGap ?? "8px",
    "@media (max-width: 1000px)": {
      flexDirection: "column",
      width: "100%",
    },
  })
);
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionLayout = styled.section(
  {
    width: "98%",
    margin: "0 auto",
    marginBottom: "8px",
  },
  ({ height, display, flexDirection, justifyContent }: SectionLayoutProps) => ({
    height: height ?? "100vh",
    display: display ?? "",
    flexDirection: flexDirection ?? "column",
    justifyContent: justifyContent ?? "initial",
    "@media (max-width:1000px)": {
      height: "auto",
    },
  })
);
export const textSize = {
  xs: "24px",
  sm: "32px",
  md: "40px",
  lg: "48px",
  xl: "56px",
};

const Text = styled.div(
  ({ size, underline, backgroundColor, color, align }: TextProps) => ({
    fontSize: textSize[size],
    textDecoration: underline ? "underline" : "none",
    backgroundColor,
    color,
    textAlign: align ?? "left",
  })
);
export { Flex, FlexColumn, FlexCenter, SectionLayout, Text, Grid };
