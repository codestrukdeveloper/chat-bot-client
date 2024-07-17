import styled from "styled-components";

export const Box = styled.div`
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  border: 1px solid #f1f4f9;
  cursor: move;
  position: absolute;

  &.active {
    border: 1px solid ${(props) => props.theme.colors["cb-purple"]};
  }
`;

export const BoxNav = styled.div`
  display: flex;
  padding: 12px 15px;
  border-bottom: 1px solid #f1f4f9;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
`;

export const BoxName = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;

  p {
    margin-left: 10px;
    color: #292d32;
    font-weight: 500;
    line-height: 24px;
  }
`;

export const BoxIcon = styled.div`
  width: 35px;
  height: 35px;
  background: ${(props) => props.theme.colors["cb-purple"]};
  border-radius: 10px;
  display: flex;

  svg {
    margin: auto;
    width: 17px;

    path {
      fill: white !important;
    }
  }
`;

export const BoxHamburger = styled.div`
  width: 50px;
  height: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  cursor: pointer;
`;

export const DotBoxHamburger = styled.div`
  width: 2.8px;
  height: 2.8px;
  border-radius: 50%;
  background: #c1c7d4;
`;
