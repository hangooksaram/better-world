import styled from "@emotion/styled";

const StyledTag = styled.div(
  {
    width: "150px",
    height: "50px",
    margin: "0px 16px 8px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "48px",
    fontSize: "20px",

    fontWeight: 900,
  },
  ({ color }: { color: string }) => ({
    backgroundColor: color,
  })
);

const Tag = ({
  name,
  proficiency,
}: {
  name: string;
  proficiency: "low" | "medium" | "high" | "veryHigh";
}) => {
  const color = {
    low: "rgba(255, 242, 128,0.5)",
    medium: "rgba(255, 242, 128,1)",
    high: "rgba(158, 207, 255, 0.5)",
    veryHigh: "rgba(158, 207, 255, 1)",
  };
  return <StyledTag color={color[proficiency]}>{name}</StyledTag>;
};

export default Tag;
