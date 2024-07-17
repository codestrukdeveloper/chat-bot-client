import styled from "styled-components";
import { css } from "styled-components";

const cssDefaultButton = css`
  background: ${(props) => props.theme.colors[props.color ?? "cb-purple"]};
`;

export const Button = styled.button`
  width: max-content;
  padding: 13px 18px;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  ${(props) =>
    props.bordered
      ? `border: 1px solid ${
          props.theme.colors[props.color ?? "cb-purple"]
        }; color: ${props.theme.colors[props.color ?? "cb-purple"]}`
      : cssDefaultButton};
  font-size: ${(props) => props.theme.fontSize["sm"]};
  display: inline-flex;
  align-items: center;

  svg {
    margin-right: 7px;
  }
`;
