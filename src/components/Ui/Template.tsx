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
const NavigationStyledComponent = styled.div(
  (props: { width: string; backgroundColor: string }) => ({
    display: "flex",
    justifyontent: "center",
    alignItems: "center",
    padding: "32px",
    minHeight: "auto",
    borderRadius: "54px",
    fontSize: "48px",
    border: "2px solid black",
    cursor: "pointer",
    margin: "8px",
    backgroundColor: `${props.backgroundColor}`,
    width: `${props.width || "100%"}px`,
    position: "relative",
    overflow: "hidden",
    color: "white",
  })
);
export { FlexCenter, SectionLayout, NavigationStyledComponent };
