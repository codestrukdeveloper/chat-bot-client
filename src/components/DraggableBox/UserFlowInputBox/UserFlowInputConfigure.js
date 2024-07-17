import { Button } from "@/components/Button/Button";
import { InputGroup } from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import Select, { Option } from "@/components/Form/Select";
import styled from "styled-components";
import ConfigureBox, {
  ConfigureButtonActions,
  TypingOnDisplayToggle,
  DelayBox,
} from "../ConfigureBox";

const FormButtonBox = styled.form`
  margin-top: 25px;
  width: 100%;
`;

const UserFlowInputConfigure = ({ ...props }) => {
  return (
    <ConfigureBox {...props} title="Configure User-Input-Flow">
      <FormButtonBox>
        <InputGroup className="input-group">
          <Label>User input flow</Label>
          <Select>
            <Option>Select flow input</Option>
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
      </FormButtonBox>
    </ConfigureBox>
  );
};

export default UserFlowInputConfigure;
