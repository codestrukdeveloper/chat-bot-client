import Images from "@/components/Icons/component-draggable/Images";
import NextDotComponent from "../Dot";
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

const ImagesBox = styled(Box)`
  width: 272px;
  height: 169px;
  transition: transform 0.3s;
`;

const StyledNextDot = styled(NextDotComponent)`
  right: -12px;
  top: 70px;
`;
const StyledQuickRepliesDot = styled(NextDotComponent)`
  right: -12px;
  top: 100px;
`;

const StyledReplyDot = styled(NextDotComponent)`
  left: -12px;
  top: 130px;
`;

const ImagesBoxComponent = ({ boxRef, ...props }) => {
  return (
    <ImagesBox ref={boxRef} {...props}>
      <BoxNav>
        <BoxName>
          <BoxIcon>
            <Images />
          </BoxIcon>
          <Text>Images</Text>
        </BoxName>
        <BoxHamburger>
          <DotBoxHamburger />
          <DotBoxHamburger />
          <DotBoxHamburger />
        </BoxHamburger>
      </BoxNav>
      <StyledNextDot name="Next" />
      <StyledQuickRepliesDot name="Quick Replies" />
      <StyledReplyDot dotFirst name="Reply" />
    </ImagesBox>
  );
};

export default ImagesBoxComponent;
