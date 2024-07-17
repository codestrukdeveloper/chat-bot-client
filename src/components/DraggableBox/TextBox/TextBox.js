import TextComponent from "@/components/Icons/component-draggable/Text";
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
import NextDotComponent from "../Dot";

const TextBox = styled(Box)`
  width: 272px;
  height: 194px;
  transition: transform 0.3s;
`;

const StyledNextDot = styled(NextDotComponent)`
  right: -12px;
  top: 70px;
`;
const StyledButtonDot = styled(NextDotComponent)`
  right: -12px;
  top: 100px;
`;
const StyledQuickRepliesDot = styled(NextDotComponent)`
  right: -12px;
  top: 130px;
`;

const StyledReplyDot = styled(NextDotComponent)`
  left: -12px;
  top: 160px;
`;

const TextBoxComponent = ({ boxRef, ...props }) => {
  return (
    <TextBox ref={boxRef} {...props}>
      <BoxNav>
        <BoxName>
          <BoxIcon>
            <TextComponent />
          </BoxIcon>
          <Text>Text</Text>
        </BoxName>
        <BoxHamburger>
          <DotBoxHamburger />
          <DotBoxHamburger />
          <DotBoxHamburger />
        </BoxHamburger>
      </BoxNav>
      <StyledNextDot name="Next" />
      <StyledButtonDot name="Button" />
      <StyledQuickRepliesDot name="Quick Replies" />
      <StyledReplyDot dotFirst name="Reply" />
    </TextBox>
  );
};

export default TextBoxComponent;
