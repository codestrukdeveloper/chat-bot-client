import styled from "styled-components";
import Text from "../Typography/Text";

export const SidebarCategory = styled.aside`
  width: 208px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background: ${(props) => props.theme.colors["cb-purple"]};
  padding: 30px 15px;
  color: white;
  overflow-y: auto;

  .category-list {
    margin-top: 12px;
  }

  ::-webkit-scrollbar {
    background: transparent;
  }

  @media screen and (max-width: 996px) {
    & {
      max-height: 50vh;
      ${(props) =>
        props.isToggledByMobile
          ? `
        display: block
      `
          : `display: none`};

      position: absolute;
      background: white;
      z-index: 10;
      box-shadow: 0px 22px 63px rgba(0, 0, 0, 0.06);
      border-radius: 11px;
      top: 76px;

      & > p {
        color: #292d32;
      }

      ul {
        color: #c7c7c7;
      }

      ::before {
        content: "";
        position: absolute;
        display: block;
        top: -23px;
        left: 30px;
        height: 8px;
        border-top: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid white;
        border-left: 8px solid transparent;
      }
    }
  }
`;

export const CategoryTitle = styled(Text)`
  line-height: 21px;
  font-size: ${(props) => props.theme.fontSize["sm"]};
  padding-left: 15px;

  &:not(&:nth-child(1)) {
    margin-top: 24px;
  }
`;

export const CategoryLists = styled.ul``;

export const ListCategory = styled.li`
  line-height: 18px;
  padding: 8px 15px;
  cursor: pointer;

  :hover {
    background: rgba(255, 255, 255, 0.12);
    border-radius: 6px;
  }

  &.active {
    background: rgba(255, 255, 255, 0.12);
    border-radius: 6px;
  }

  @media screen and (max-width: 996px) {
    & {
      :hover {
        background: ${(props) => props.theme.colors["cb-purple"]};
        color: white;
      }
    }
  }
`;
