import styled from "@emotion/styled";

const FlexCenter = styled.div`
  width: 100%;
  height: auto;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface SectionLayoutProps {
  height?: string;
  display?: string;
  flexDirection?: "row";
  justifyContent?: "center" | "space-between";
}

const SectionLayout = styled.section(
  {
    width: "100vw",
    padding: "16px",
  },
  ({ height, display, flexDirection, justifyContent }: SectionLayoutProps) => ({
    height: height ?? "100vh",
    display: display ?? "",
    flexDirection: flexDirection ?? "column",
    justifyContent: justifyContent ?? "initial",
  })
);

export { FlexCenter, SectionLayout };
