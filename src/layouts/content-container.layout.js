import { fadeIn } from "@/utils/animation/fadeIn-animation";
import styled, { css } from "styled-components";

const fadeInAnimation = css`
  animation: ${fadeIn} 0.3s forwards;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: calc(100vh - 154px);

  ${(props) => props.withFadeIn && fadeInAnimation}
`;
