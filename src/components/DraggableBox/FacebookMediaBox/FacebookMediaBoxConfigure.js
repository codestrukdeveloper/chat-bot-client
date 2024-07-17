import styled from "styled-components";
import Input from "@/components/Form/Input";

import ConfigureBox, {
  ConfigureButtonActions,
  DelayBox,
  TypingOnDisplayToggle,
} from "../ConfigureBox";

import { Button } from "@/components/Button/Button";

const StyledInput = styled(Input)`
  margin: 0 0 15px 0;
`;

const FacebookMediaBoxConfigure = ({ ...props }) => {
  return (
    <ConfigureBox
      title="Facebook Media URL"
      description="Facebook Media URL"
      {...props}
    >
      <StyledInput placeholder="Put your facebook page here" />
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

export default FacebookMediaBoxConfigure;
