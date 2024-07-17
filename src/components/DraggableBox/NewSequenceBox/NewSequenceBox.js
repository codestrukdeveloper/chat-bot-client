import NewSequence from "@/components/Icons/component-draggable/NewSequence";
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

const NewSequenceBox = styled(Box)`
  width: 272px;
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

const NewSequenceBoxComponent = ({ boxRef, ...props }) => {
  return (
    <NewSequenceBox ref={boxRef} {...props}>
      <BoxNav>
        <BoxName>
          <BoxIcon>
            <NewSequence />
          </BoxIcon>
          <Text>New Sequence</Text>
        </BoxName>
        <BoxHamburger>
          <DotBoxHamburger />
          <DotBoxHamburger />
          <DotBoxHamburger />
        </BoxHamburger>
      </BoxNav>
      <StyledNextDot name="Next" />
      <StyledReplyDot dotFirst name="Reply" />
    </NewSequenceBox>
  );
};

export default NewSequenceBoxComponent;
