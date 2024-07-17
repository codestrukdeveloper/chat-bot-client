import styled, { css } from "styled-components";

const StyleHeading = css`
  color: ${(props) => props.theme.colors["cb-black"]};
`;

export const H1 = styled.h1`
  ${(props) =>
    props.color ? `color: ${(props) => props.color}` : StyleHeading};
  font-size: 2em;
  font-weight: ${(props) => props.theme.fontWeight[props.weight || "bold"]};
`;

export const H2 = styled.h2`
  ${(props) => (props.color ? props.theme.colors[props.color] : StyleHeading)};
  font-size: 1.5em;
  font-weight: ${(props) => props.theme.fontWeight[props.weight || "bold"]};
`;

export const H3 = styled.h3`
  ${(props) => (props.color ? props.theme.colors[props.color] : StyleHeading)};
  font-size: 1.25em;
  font-weight: ${(props) => props.theme.fontWeight[props.weight || "bold"]};
`;

export const H4 = styled.h4`
  ${(props) => (props.color ? props.theme.colors[props.color] : StyleHeading)};
  font-size: 1em;
  font-weight: ${(props) => props.theme.fontWeight[props.weight || "bold"]};
`;

export const H5 = styled.h5`
  ${(props) => (props.color ? props.theme.colors[props.color] : StyleHeading)};
  font-size: 0.875em;
  font-weight: ${(props) => props.theme.fontWeight[props.weight || "bold"]};
`;

export const H6 = styled.h6`
  ${(props) => (props.color ? props.theme.colors[props.color] : StyleHeading)};
  font-size: 0.75em;
  font-weight: ${(props) => props.theme.fontWeight[props.weight || "bold"]};
`;
