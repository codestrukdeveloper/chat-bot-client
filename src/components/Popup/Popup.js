import styled from "styled-components";
import { CloseIcon } from "../Icons";
import Text from "../Typography/Text";

export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
`;

const StyledPopup = styled.div`
  border-radius: 20px;
  background: white;
  padding: 20px;
`;

const StyledPopupTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
`;

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

export const Popup = ({ children, ...props }) => {
  return <StyledPopup {...props}>{children}</StyledPopup>;
};

Popup.Title = function ({ children, className, onClickClose, ...props }) {
  return (
    <StyledPopupTitleWrapper className={className}>
      <Text weight="medium" {...props} style={{ lineHeight: "24px" }}>
        {children}
      </Text>
      <CloseWrapper onClick={onClickClose}>
        <CloseIcon />
      </CloseWrapper>
    </StyledPopupTitleWrapper>
  );
};
