import Condition from "@/components/Icons/component-draggable/Condition";
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

const ConditionBox = styled(Box)`
  width: 284px;
  height: 169px;
  transition: transform 0.3s;
`;

const StyledNextDot = styled(DotComponent)`
  right: -12px;
  top: 70px;
`;

const StyledQuickRepliesDot = styled(DotComponent)`
  right: -12px;
  top: 100px;
`;

const StyledReplyDot = styled(DotComponent)`
  left: -12px;
  top: 130px;
`;

const ConditionBoxComponent = ({ boxRef, ...props }) => {
  return (
    <ConditionBox ref={boxRef} {...props}>
      <BoxNav>
        <BoxName>
          <BoxIcon>
            <Condition />
          </BoxIcon>
          <Text>Condition</Text>
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
    </ConditionBox>
  );
};

export default ConditionBoxComponent;
