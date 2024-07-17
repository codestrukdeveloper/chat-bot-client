import QuickReply from "@/components/Icons/component-draggable/QuickReply";
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

const QuickReplyBox = styled(Box)`
  width: 284px;
  height: 169px;
  transition: transform 0.3s;
`;

const StyledQuickRepliesDot = styled(DotComponent)`
  right: -12px;
  top: 130px;
`;

const StyledReplyDot = styled(DotComponent)`
  left: -12px;
  top: 130px;
`;

const QuickReplyBoxComponent = ({ boxRef, ...props }) => {
  return (
    <QuickReplyBox ref={boxRef} {...props}>
      <BoxNav>
        <BoxName>
          <BoxIcon>
            <QuickReply />
          </BoxIcon>
          <Text>Quick Reply</Text>
        </BoxName>
        <BoxHamburger>
          <DotBoxHamburger />
          <DotBoxHamburger />
          <DotBoxHamburger />
        </BoxHamburger>
      </BoxNav>
      <StyledQuickRepliesDot name="Quick Replies" />
      <StyledReplyDot dotFirst name="Reply" />
    </QuickReplyBox>
  );
};

export default QuickReplyBoxComponent;
