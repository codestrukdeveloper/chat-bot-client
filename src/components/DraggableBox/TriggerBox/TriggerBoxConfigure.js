import styled from "styled-components";
import Input from "@/components/Form/Input";

import ConfigureBox, { ConfigureButtonActions } from "../ConfigureBox";

import { Button } from "@/components/Button/Button";
import Text from "@/components/Typography/Text";

const StyledInput = styled(Input)`
  margin: 0 0 15px 0;
`;

const StyledText = styled(Text)`
  color: #e3e6f3;
  margin-bottom: 25px;
`;

const TriggerBoxConfigure = ({ ...props }) => {
  return (
    <ConfigureBox
      title="Configure Trigger"
      description="Write keywords separating by comma."
      {...props}
    >
      <StyledInput placeholder="Hie, hello" />
      <StyledText size="xs">
        Write down the keywords for which the bot will be triggered.
      </StyledText>
      <ConfigureButtonActions>
        <Button>Ok</Button>
        <Button bordered color="cb-red">
          Cancel
        </Button>
      </ConfigureButtonActions>
    </ConfigureBox>
  );
};

export default TriggerBoxConfigure;
