import { Button } from "@/components/Button/Button";
import { InputGroup } from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import Select, { Option } from "@/components/Form/Select";
import styled from "styled-components";
import ConfigureBox, { ConfigureButtonActions } from "../ConfigureBox";

const FormNewPostBack = styled.form`
  margin-top: 25px;
  width: 100%;
`;

const NewPostBackConfigure = ({ ...props }) => {
  return (
    <ConfigureBox {...props} title="Configure New Postback">
      <FormNewPostBack>
        <InputGroup className="input-group">
          <Label>Title</Label>
          <Select>
            <Option>Select</Option>
          </Select>
        </InputGroup>
        <InputGroup className="input-group">
          <Label>Choose label(s)</Label>
          <Select>
            <Option>Select</Option>
          </Select>
        </InputGroup>
        <InputGroup className="input-group">
          <Label>Choose sequence</Label>
          <Select>
            <Option>Select a sequence</Option>
          </Select>
        </InputGroup>
        <ConfigureButtonActions>
          <Button>Ok</Button>
          <Button bordered color="cb-red">
            Cancel
          </Button>
        </ConfigureButtonActions>
      </FormNewPostBack>
    </ConfigureBox>
  );
};

export default NewPostBackConfigure;
