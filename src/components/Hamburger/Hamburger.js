import styled from "styled-components";

export const HamburgerWrapper = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 996px) {
    display: none;
  }
`;

export const StyledHamburger = styled.div`
  width: 20px;
  height: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 14px;
`;

export const HamburgerLine = styled.span`
  display: block;
  height: 2px;
  width: 100%;
  background: ${(props) =>
    props.theme.colors[props.lineColor ?? "rgb(23, 40, 55)"]};
  border-radius: 30px;
`;

export default function Hamburger({ line, lineColor, ...props }) {
  const lineOfHamburger = [];
  let start = 1;

  for (let i = start; i <= line; i++) {
    lineOfHamburger.push(
      <HamburgerLine key={`line-${i}`} lineColor={lineColor} />
    );
  }

  return (
    <HamburgerWrapper {...props}>
      <StyledHamburger>{lineOfHamburger}</StyledHamburger>
    </HamburgerWrapper>
  );
}
