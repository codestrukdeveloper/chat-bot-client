import Audio from "@/components/Icons/component-draggable/Audio";
import Text from "@/components/Typography/Text";
import styled from "styled-components";
import {
  Box,
  BoxNav,
  BoxName,
  BoxIcon,
  BoxHamburger,
  DotBoxHamburger,
} from "../Box";
import DotComponent from "../Dot";

const AudioBox = styled(Box)`
  width: 284px;
  height: 169px;
  transition: transform 0.3s;
`;

const StyledNextDot = styled(DotComponent)`
  right: -12px;
  top: 70px;
`;

const StyledQuickRepliesDot = styled(DotComponent)`
  right: -12px;
  top: 100px;
`;

const StyledReplyDot = styled(DotComponent)`
  left: -12px;
  top: 130px;
`;

const AudioBoxComponent = ({ boxRef, ...props }) => {
  return (
    <AudioBox ref={boxRef} {...props}>
      <BoxNav>
        <BoxName>
          <BoxIcon>
            <Audio />
          </BoxIcon>
          <Text>Audio</Text>
        </BoxName>
        <BoxHamburger>
          <DotBoxHamburger />
          <DotBoxHamburger />
          <DotBoxHamburger />
        </BoxHamburger>
      </BoxNav>
      <StyledNextDot name="Next" />
      <StyledQuickRepliesDot name="Quick Replies" />
      <StyledReplyDot dotFirst name="Reply" />
    </AudioBox>
  );
};

export default AudioBoxComponent;
