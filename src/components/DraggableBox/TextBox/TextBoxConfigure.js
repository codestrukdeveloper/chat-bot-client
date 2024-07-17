import { Button } from "@/components/Button/Button";
import Textarea from "@/components/Form/Textarea";
import Text from "@/components/Typography/Text";
import styled from "styled-components";
import ConfigureBox, {
  ConfigureButtonActions,
  DelayBox,
  TypingOnDisplayToggle,
} from "../ConfigureBox";

const StyledTextArea = styled(Textarea)`
  width: 295px;
  height: 197px;
  margin-bottom: 25px;
`;

const WrapperButtonName = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;

  button {
    width: 87px;
    height: 34px;
    font-size: ${(props) => props.theme.fontSize["xs"]};
  }
`;

const CustomButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  background: transparent;
  color: ${(props) => props.theme.colors["cb-purple"]};

  p {
    font-size: ${(props) => props.theme.fontSize["xs"]};
  }
`;

const ConfigureTextBox = ({ ...props }) => {
  return (
    <ConfigureBox
      {...props}
      title="Configure Text Message"
      description="Please provide your reply message"
    >
      <WrapperButtonName>
        <CustomButton>
          <Text>Custom</Text>
          <img alt="arrow-down" src="/images/arrow-down.svg" />
        </CustomButton>
        <Button bordered>F. Name</Button>
        <Button bordered>L. Name</Button>
      </WrapperButtonName>
      <StyledTextArea />
      <TypingOnDisplayToggle />
      <DelayBox />
      <ConfigureButtonActions>
        <Button>Ok</Button>
        <Button bordered color="cb-red">
          Cancel
        </Button>
      </ConfigureButtonActions>
    </ConfigureBox>
  );
};

export default ConfigureTextBox;
