interface SectionLayoutProps {
  height?: string;
  display?: string;
  flexDirection?: "row";
  justifyContent?: "center" | "space-between";
}

interface FlexProps {
  width?: string;
  height?: string;
  flexDirection?: "row" | "column";
  justifyContent?: "center" | "space-between" | "flex-end" | "flex-start";
  alignItems?: "center" | "space-between" | "flex-end" | "flex-start";
  flexWrap?: "wrap";
  rowGap?: string;
  columnGap?: string;
}

interface GridProps {
  width?: string;
  height?: string;
  gridTemplateRows: string;
  gridTemplateColumns: string;
  rowGap?: string;
  columnGap?: string;
}

interface TextProps {
  size: "xs" | "sm" | "md" | "lg" | "xl";
  underline?: boolean;
  backgroundColor?: string;
  color?: string;
}

export { SectionLayoutProps, FlexProps, TextProps, GridProps };
