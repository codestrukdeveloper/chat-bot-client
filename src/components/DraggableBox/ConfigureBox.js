import styled from "styled-components";
import CloseButton from "../Button/CloseButton";
import Text from "@/components/Typography/Text";
import Toogle from "../Toggle/Toggle";

export const ConfigureBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 15px;
  border-radius: 0px 15px 15px 0px;
  border: 1px solid #f1f4f9;
  background: #ffffff;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  overflow-y: auto;
  animation: openConfigure 0.5s forwards;
  overflow-x: hidden;

  .input-group {
    :not(:last-child) {
      margin-bottom: 15px;
    }
  }

  @keyframes openConfigure {
    from {
      width: 0px;
    }

    to {
      width: 325px;
    }
  }

  label {
    font-weight: 400;
    font-size: ${(props) => props.theme.fontSize["xs"]};
    color: #292d32;
  }
`;

const ConfigureClose = styled(CloseButton)`
  position: absolute;
  right: 20px;
`;

const ConfigureTitle = styled(Text)`
  line-height: 24px;
  text-align: center;
  padding-top: 48px;
`;

const ConfigureDescription = styled(Text)`
  font-size: ${(props) => props.theme.fontSize["xs"]};
  line-height: 18px;
  color: #292d32;
  margin: 25px 0 12px 0;
`;

const DelayBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

const DelayBoxTitle = styled(Text)`
  font-size: 12px;
  line-height: 18px;
  color: #292d32;
  margin-bottom: 7.96px;
`;

const DelayRange = styled.input.attrs({ type: "range" })`
  // overflow: hidden;
  // -webkit-appearance: none;
  // position: relative;

  // ::-webkit-slider-runnable-track {
  //   height: 4px;
  //   -webkit-appearance: none;
  //   color: red;
  //   overflow: visible;
  //   background: #c8cfd7;
  // }

  // ::-webkit-slider-thumb {
  //   -webkit-appearance: none;
  //   width: 14px;
  //   height: 14px;
  //   border-radius: 50%;
  //   position: absolute;
  //   top: -7px;
  //   background: ${(props) => props.theme.colors["cb-purple"]};
  // }
`;

const TypingOnDisplayToogleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const TypingOnDisplayToogleTitle = styled(Text)`
  font-size: 12px;
  line-height: 18px;
  color: #292d32;
  margin-bottom: 12px;
`;

const StyledToogle = styled(Toogle)`
  width: 40px;
  height: 21px;

  ::after {
    top: 3.41px;
    left: 3.41px;
    bottom: 3.41px;
    width: 13.89px;
    height: 14.19px;
  }
`;

export const TypingOnDisplayToggle = () => {
  return (
    <TypingOnDisplayToogleWrapper>
      <TypingOnDisplayToogleTitle>Typing On Display</TypingOnDisplayToogleTitle>
      <StyledToogle />
    </TypingOnDisplayToogleWrapper>
  );
};

export const DelayBox = ({ title = "Delay in reply - 0 sec", ...props }) => {
  return (
    <DelayBoxWrapper>
      <DelayBoxTitle>{title}</DelayBoxTitle>
      <DelayRange />
    </DelayBoxWrapper>
  );
};

export const ConfigureButtonActions = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  button {
    padding: 8px 15px;
    border-radius: 8px;
    width: max-content;
  }
`;

const ConfigureBox = ({ title, description, onClick, children, ...props }) => {
  const handleClickConfigure = (e, callback = () => {}) => {
    e.stopPropagation();
    callback();
  };

  return (
    <ConfigureBoxWrapper
      {...props}
      onClick={(e) => handleClickConfigure(e, onClick)}
    >
      <ConfigureClose />
      <ConfigureTitle>{title}</ConfigureTitle>
      {description && (
        <ConfigureDescription>{description}</ConfigureDescription>
      )}
      {children}
    </ConfigureBoxWrapper>
  );
};

export default ConfigureBox;
