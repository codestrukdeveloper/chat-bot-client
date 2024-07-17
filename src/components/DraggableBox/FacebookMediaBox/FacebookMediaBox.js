import FacebookMedia from "@/components/Icons/component-draggable/FacebookMedia";
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

const FacebookMediaBox = styled(Box)`
  width: 284px;
  height: 194px;
  transition: transform 0.3s;
`;

const StyledNextDot = styled(DotComponent)`
  right: -12px;
  top: 70px;
`;
const StyledButtonDot = styled(DotComponent)`
  right: -12px;
  top: 100px;
`;
const StyledQuickRepliesDot = styled(DotComponent)`
  right: -12px;
  top: 130px;
`;

const StyledReplyDot = styled(DotComponent)`
  left: -12px;
  top: 160px;
`;

const FacebookMediaBoxComponent = ({ boxRef, ...props }) => {
  return (
    <FacebookMediaBox ref={boxRef} {...props}>
      <BoxNav>
        <BoxName>
          <BoxIcon>
            <FacebookMedia />
          </BoxIcon>
          <Text>Facebook Media</Text>
        </BoxName>
        <BoxHamburger>
          <DotBoxHamburger />
          <DotBoxHamburger />
          <DotBoxHamburger />
        </BoxHamburger>
      </BoxNav>
      <StyledNextDot name="Dot" />
      <StyledButtonDot name="Buttons" />
      <StyledQuickRepliesDot name="Quick Replies" />
      <StyledReplyDot dotFirst name="Reply" />
    </FacebookMediaBox>
  );
};

export default FacebookMediaBoxComponent;
