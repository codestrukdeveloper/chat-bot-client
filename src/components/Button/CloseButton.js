import styled from "styled-components";
import { CloseIcon } from "../Icons";

const CloseWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background: #f4f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    path {
      stroke: #000;
    }
  }
`;

const CloseButton = ({ ...props }) => {
  return (
    <CloseWrapper {...props}>
      <CloseIcon />
    </CloseWrapper>
  );
};

export default CloseButton;
