import { Button } from "@/components/Button/Button";
import { InputGroup } from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import Select, { Option } from "@/components/Form/Select";
import styled from "styled-components";
import ConfigureBox, { ConfigureButtonActions } from "../ConfigureBox";

const FormButtonBox = styled.form`
  margin-top: 25px;
  width: 100%;
`;

const ButtonBoxConfigure = ({ ...props }) => {
  return (
    <ConfigureBox {...props} title="Configure Button">
      <FormButtonBox>
        <InputGroup className="input-group">
          <Label>Button text</Label>
          <Select>
            <Option>Select flow campaign</Option>
          </Select>
        </InputGroup>
        <InputGroup className="input-group">
          <Label>Button type</Label>
          <Select>
            <Option>Select </Option>
          </Select>
        </InputGroup>
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

export default ButtonBoxConfigure;
