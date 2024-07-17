import { Button } from "@/components/Button/Button";
import { InputGroup } from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import Select, { Option } from "@/components/Form/Select";
import styled from "styled-components";
import ConfigureBox, { ConfigureButtonActions } from "../ConfigureBox";

const FormActionBox = styled.form`
  margin-top: 25px;
  width: 100%;
`;

const ActionButtonBoxConfigure = ({ ...props }) => {
  return (
    <ConfigureBox {...props} title="Configure Action Button">
      <FormActionBox>
        <InputGroup className="input-group">
          <Label>Actions</Label>
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
      </FormActionBox>
    </ConfigureBox>
  );
};

export default ActionButtonBoxConfigure;
