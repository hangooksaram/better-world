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
    border: "1px solid rgba(158, 207, 255, 1)",
    fontWeight: 900,
  },
  ({ color }: { color: string }) => ({
    backgroundColor: color,
  })
);

const Tag = ({ name }: { name: string }) => {
  return <StyledTag color="white">{name}</StyledTag>;
};

export default Tag;
