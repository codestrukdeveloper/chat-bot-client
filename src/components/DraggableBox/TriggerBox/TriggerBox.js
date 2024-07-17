import styled from "styled-components";
import { Box } from "../Box";
import DotComponent from "../Dot";

const TriggerBox = styled(Box)`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  transition: transform 0.3s;
  box-shadow: unset;
  display: flex;

  img {
    margin: 20px auto auto auto;
  }
`;

const ConnectDot = styled(DotComponent)`
  right: -12px;
  top: 78px;
`;

const TriggerBoxComponent = ({ boxRef, ...props }) => {
  return (
    <TriggerBox ref={boxRef} {...props}>
      <img src="/images/component-draggable/trigger.svg" alt="trigger" />
      <ConnectDot />
    </TriggerBox>
  );
};

export default TriggerBoxComponent;
