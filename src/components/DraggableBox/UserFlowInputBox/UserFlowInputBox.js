import UserFlowInput from "@/components/Icons/component-draggable/UserFlowInput";
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

const UserFlowInputBox = styled(Box)`
  width: 272px;
  height: 101px;
  transition: transform 0.3s;
`;

const StyledReplyDot = styled(DotComponent)`
  left: -12px;
  top: 70px;
`;

const UserFlowInputBoxComponent = ({ boxRef, ...props }) => {
  return (
    <UserFlowInputBox ref={boxRef} {...props}>
      <BoxNav>
        <BoxName>
          <BoxIcon>
            <UserFlowInput />
          </BoxIcon>
          <Text>User Flow Input</Text>
        </BoxName>
        <BoxHamburger>
          <DotBoxHamburger />
          <DotBoxHamburger />
          <DotBoxHamburger />
        </BoxHamburger>
      </BoxNav>
      <StyledReplyDot dotFirst name="Reply" />
    </UserFlowInputBox>
  );
};

export default UserFlowInputBoxComponent;
