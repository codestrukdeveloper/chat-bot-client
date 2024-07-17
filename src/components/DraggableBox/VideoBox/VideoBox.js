import Video from "@/components/Icons/component-draggable/Video";
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

const VideoBox = styled(Box)`
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

const VideoBoxComponent = ({ boxRef, ...props }) => {
  return (
    <VideoBox ref={boxRef} {...props}>
      <BoxNav>
        <BoxName>
          <BoxIcon>
            <Video />
          </BoxIcon>
          <Text>Video</Text>
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
    </VideoBox>
  );
};

export default VideoBoxComponent;
