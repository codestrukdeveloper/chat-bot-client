import ButtonDraggable from "@/components/Icons/component-draggable/Button";
import Text from "@/components/Typography/Text";
import NextDotComponent from "../Dot";
import styled from "styled-components";
import {
  Box,
  BoxNav,
  BoxName,
  BoxIcon,
  BoxHamburger,
  DotBoxHamburger,
} from "../Box";

const ButtonBox = styled(Box)`
  width: 284px;
  height: 169px;
  transition: transform 0.3s;
`;

const StyledNextDot = styled(NextDotComponent)`
  right: -12px;
  top: 130px;
`;

const StyledReplyDot = styled(NextDotComponent)`
  left: -12px;
  top: 130px;
`;

const ButtonBoxComponent = ({ boxRef, ...props }) => {
  return (
    <ButtonBox ref={boxRef} {...props}>
      <BoxNav>
        <BoxName>
          <BoxIcon>
            <ButtonDraggable />
          </BoxIcon>
          <Text>Button</Text>
        </BoxName>
        <BoxHamburger>
          <DotBoxHamburger />
          <DotBoxHamburger />
          <DotBoxHamburger />
        </BoxHamburger>
      </BoxNav>
      <StyledNextDot name="Next" />
      <StyledReplyDot dotFirst name="Reply" />
    </ButtonBox>
  );
};

export default ButtonBoxComponent;
