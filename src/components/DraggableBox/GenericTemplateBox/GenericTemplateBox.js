import GenericTemplate from "@/components/Icons/component-draggable/GenericTemplate";
import Text from "@/components/Typography/Text";
import styled from "styled-components";
import NextDotComponent from "../Dot";
import {
  Box,
  BoxNav,
  BoxName,
  BoxIcon,
  BoxHamburger,
  DotBoxHamburger,
} from "../Box";

const GenericTemplateBox = styled(Box)`
  width: 284px;
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

const GenericTemplateBoxComponent = ({ boxRef, ...props }) => {
  return (
    <GenericTemplateBox ref={boxRef} {...props}>
      <BoxNav>
        <BoxName>
          <BoxIcon>
            <GenericTemplate />
          </BoxIcon>
          <Text>Generic Template</Text>
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
    </GenericTemplateBox>
  );
};

export default GenericTemplateBoxComponent;
