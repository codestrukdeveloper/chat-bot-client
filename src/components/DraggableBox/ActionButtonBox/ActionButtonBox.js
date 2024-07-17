import ActionButton from "@/components/Icons/component-draggable/ActiobButton";
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

const ActionButtonBox = styled(Box)`
  width: 278px;
  height: 101px;
  transition: transform 0.3s;
`;

const StyledNextDot = styled(DotComponent)`
  right: -12px;
  top: 70px;
`;

const ActionButtonBoxComponent = ({ boxRef, ...props }) => {
  return (
    <ActionButtonBox ref={boxRef} {...props}>
      <BoxNav>
        <BoxName>
          <BoxIcon>
            <ActionButton />
          </BoxIcon>
          <Text>Action Button</Text>
        </BoxName>
        <BoxHamburger>
          <DotBoxHamburger />
          <DotBoxHamburger />
          <DotBoxHamburger />
        </BoxHamburger>
      </BoxNav>
      <StyledNextDot name="Next" />
    </ActionButtonBox>
  );
};

export default ActionButtonBoxComponent;
