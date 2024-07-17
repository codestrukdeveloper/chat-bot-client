import NewPostBack from "@/components/Icons/component-draggable/NewPostback";
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

const NewPostBackBox = styled(Box)`
  width: 284px;
  height: 131px;
  transition: transform 0.3s;
`;

const StyledNextDot = styled(DotComponent)`
  right: -12px;
  top: 70px;
`;

const StyledTriggerDot = styled(DotComponent)`
  left: -12px;
  top: 70px;
`;

const StyledReplyDot = styled(DotComponent)`
  left: -12px;
  top: 100px;
`;

const NewPostBackBoxComponent = ({ boxRef, ...props }) => {
  return (
    <NewPostBackBox ref={boxRef} {...props}>
      <BoxNav>
        <BoxName>
          <BoxIcon>
            <NewPostBack />
          </BoxIcon>
          <Text>New Post Back</Text>
        </BoxName>
        <BoxHamburger>
          <DotBoxHamburger />
          <DotBoxHamburger />
          <DotBoxHamburger />
        </BoxHamburger>
      </BoxNav>
      <StyledNextDot name="Next" />
      <StyledTriggerDot dotFirst name="Trigger" />
      <StyledReplyDot dotFirst name="Reply" />
    </NewPostBackBox>
  );
};

export default NewPostBackBoxComponent;
