import Carousel from "@/components/Icons/component-draggable/Carousel";
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

const CarouselBox = styled(Box)`
  width: 272px;
  height: 194px;
  transition: transform 0.3s;
`;

const StyledNextDot = styled(DotComponent)`
  right: -12px;
  top: 70px;
`;

const StyledItemsDot = styled(DotComponent)`
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

const CarouselBoxComponent = ({ boxRef, ...props }) => {
  return (
    <CarouselBox ref={boxRef} {...props}>
      <BoxNav>
        <BoxName>
          <BoxIcon>
            <Carousel />
          </BoxIcon>
          <Text>Carousel</Text>
        </BoxName>
        <BoxHamburger>
          <DotBoxHamburger />
          <DotBoxHamburger />
          <DotBoxHamburger />
        </BoxHamburger>
      </BoxNav>
      <StyledNextDot name="Next" />
      <StyledItemsDot name="Items" />
      <StyledQuickRepliesDot name="Quick Replies" />
      <StyledReplyDot dotFirst name="Reply" />
    </CarouselBox>
  );
};

export default CarouselBoxComponent;
