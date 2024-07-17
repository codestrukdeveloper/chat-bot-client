import Otn from "@/components/Icons/component-draggable/Otn";
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

const OtnBox = styled(Box)`
  width: 284px;
  height: 101px;
  transition: transform 0.3s;
`;

const StyledNextDot = styled(DotComponent)`
  right: -12px;
  top: 70px;
`;

const StyledReplyDot = styled(DotComponent)`
  left: -12px;
  top: 70px;
`;

const OtnBoxComponent = ({ boxRef, ...props }) => {
  return (
    <OtnBox ref={boxRef} {...props}>
      <BoxNav>
        <BoxName>
          <BoxIcon>
            <Otn />
          </BoxIcon>
          <Text>OTN</Text>
        </BoxName>
        <BoxHamburger>
          <DotBoxHamburger />
          <DotBoxHamburger />
          <DotBoxHamburger />
        </BoxHamburger>
      </BoxNav>
      <StyledNextDot name="Next" />
      <StyledReplyDot dotFirst name="Reply" />
    </OtnBox>
  );
};

export default OtnBoxComponent;
