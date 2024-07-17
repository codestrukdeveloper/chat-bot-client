import styled from "styled-components";

export const MenuDropdown = styled.div`
  width: max-content;
  padding: 10px 27px 10px 10px;
  background: #fff;
  border-radius: 10px;
  position: absolute;
  box-shadow: 0px 38px 73px rgba(0, 0, 0, 0.06);
  right: 0;
  top: 0;
  animation: openDropdown 0.5s forwards;
  transition: 0.5s;
  z-index: 10;

  @keyframes openDropdown {
    from {
      transform: translateY(-10px);
    }
    to {
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 996px) {
    & {
      padding: 20px;
      text-align: left;

      ::before {
        content: "Action";
        display: block;
        margin-top: 25px;
        margin-left: 15px;
        font-size: ${(props) => props.theme.fontSize["sm"]};
        color: #292d32;
        font-weight: 500;
      }
    }
  }
`;

export const MenuLists = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 996px) {
    margin-top: 12px;
  }
`;

export const Menu = styled.li`
  display: flex;
  align-items: center;
  color: #adb5c2;

  :hover {
    color: ${(props) => props.theme.colors["cb-purple"]};

    div {
      background: ${(props) => props.theme.colors["cb-purple"]};
    }

    svg {
      path {
        stroke: white;
      }
    }
  }

  @media screen and (max-width: 996px) {
    & {
      padding: 8px 15px;
      border-radius: 6px;
      font-size: ${(props) => props.theme.fontSize["xs"]};

      :hover {
        background: ${(props) => props.theme.colors["cb-purple"]};
        color: white;
      }
    }
  }
`;

export const MenuIcon = styled.div`
  width: 46px;
  height: 44px;
  border-radius: 10px;
  position: relative;
  margin-right: 11px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 996px) {
    & {
      display: none;
    }
  }

  svg {
    margin: unset !important;
  }
`;
