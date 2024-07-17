import styled from "styled-components";
import { H2 } from "../Typography/Heading";

export const HeaderCategory = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 996px) {
    & {
      background: white;
      border: 10px solid #f9fafe;
      border-radius: 15px;
      align-items: center;
      padding: 6px;

      h2 {
        font-size: ${(props) => props.theme.fontSize["lg"]};
      }

      button:nth-child(2) {
        margin-right: unset !important;
        padding: 10px 12px;

        svg {
          margin-right: unset;
        }
      }

      button:nth-child(2) span {
        display: none;
      }
    }
  }
`;

export const HeaderTitle = styled(H2)`
  font-size: 26px;
  line-height: 39px;
`;

export const HeaderButtons = styled.div`
  align-items: center;
  display: flex;

  button:not(button:nth-child(3)) {
    margin-right: 25px;
  }

  button:nth-child(3) {
    svg {
      margin-right: unset;
      margin-left: 8px;
    }
  }

  @media screen and (max-width: 996px) {
    button:nth-child(1),
    button:nth-child(3) {
      display: none;
    }
  }
`;
