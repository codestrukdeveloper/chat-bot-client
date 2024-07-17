import styled from "styled-components";

const Label = styled.label`
  font-size: ${(props) => props.theme.fontSize["sm"]};
  font-weight: ${(props) => props.theme.fontWeight["medium"]};

  ${(props) =>
    props.requiredIcon &&
    `
    &::after {
      content: "*";
      display: inline-block;
      color: #FF6060;
    }
  `}

  &.normal-text, .normal-text {
    font-weight: 400;
  }
`;

export const LabelDescription = styled.span`
  margin-top: 2px;
  color: #ced2e0;
  line-height: 21px;
  font-size: ${(props) => props.theme.fontSize["sm"]};
`;

export default Label;
