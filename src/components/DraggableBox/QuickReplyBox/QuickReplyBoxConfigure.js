import { Button } from "@/components/Button/Button";
import { InputGroup } from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import Select, { Option } from "@/components/Form/Select";
import styled from "styled-components";
import ConfigureBox, { ConfigureButtonActions } from "../ConfigureBox";

const FormQuickReply = styled.form`
  margin-top: 25px;
  width: 100%;
`;

const QuickReplyBoxConfigure = ({ ...props }) => {
  return (
    <ConfigureBox {...props} title="Configure Quick Reply">
      <FormQuickReply>
        <InputGroup className="input-group">
          <Label>Quick reply type</Label>
          <Select>
            <Option>Select</Option>
          </Select>
        </InputGroup>
        <ConfigureButtonActions>
          <Button>Ok</Button>
          <Button bordered color="cb-red">
            Cancel
          </Button>
        </ConfigureButtonActions>
      </FormQuickReply>
    </ConfigureBox>
  );
};

export default QuickReplyBoxConfigure;
