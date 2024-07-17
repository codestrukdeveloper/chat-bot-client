import SequenceSingle from "@/components/Icons/component-draggable/SequnceSingle";
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

const SequenceSingleBox = styled(Box)`
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

const SequenceSingleBoxComponent = ({ boxRef, ...props }) => {
  return (
    <SequenceSingleBox ref={boxRef} {...props}>
      <BoxNav>
        <BoxName>
          <BoxIcon>
            <SequenceSingle />
          </BoxIcon>
          <Text>Sequence Single</Text>
        </BoxName>
        <BoxHamburger>
          <DotBoxHamburger />
          <DotBoxHamburger />
          <DotBoxHamburger />
        </BoxHamburger>
      </BoxNav>
      <StyledNextDot name="Next" />
      <StyledReplyDot dotFirst name="Reply" />
    </SequenceSingleBox>
  );
};

export default SequenceSingleBoxComponent;
