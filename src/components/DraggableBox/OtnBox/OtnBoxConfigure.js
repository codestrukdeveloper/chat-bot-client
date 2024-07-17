import styled from "styled-components";
import Input, { InputGroup } from "@/components/Form/Input";

import ConfigureBox, {
  ConfigureButtonActions,
  DelayBox,
  TypingOnDisplayToggle,
} from "../ConfigureBox";

import { Button } from "@/components/Button/Button";
import Label from "@/components/Form/Label";
import Select, { Option } from "@/components/Form/Select";

const StyledInput = styled(Input)`
  margin: 0 0 15px 0;
`;

const OtnBoxConfigure = ({ ...props }) => {
  return (
    <ConfigureBox
      title="Configure One Time Notification"
      description="Title"
      {...props}
    >
      <StyledInput placeholder="Put your facebook page here" />
      <InputGroup className="input-group">
        <Label>OTN postback ID</Label>
        <Select>
          <Option>Select</Option>
        </Select>
      </InputGroup>
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

export default OtnBoxConfigure;
