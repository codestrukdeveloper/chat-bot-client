import { Button } from "@/components/Button/Button";
import Input, { InputGroup } from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import Select, { Option } from "@/components/Form/Select";
import Text from "@/components/Typography/Text";
import styled from "styled-components";
import ConfigureBox, {
  ConfigureButtonActions,
  DelayBox,
} from "../ConfigureBox";

const FormSequenceBox = styled.form`
  margin-top: 25px;
  width: 100%;

  .desc {
    margin: 25px 0;
    font-size: ${(props) => props.theme.fontSize["xs"]};
    line-height: 18px;
    text-align: center;

    color: #e3e6f3;
  }
`;

const InputGroupWrap = styled.div`
  display: flex;
  margin-bottom: 25px;
  justify-content: space-between;

  & > div {
    width: 143px;
  }
`;

const NewSequenceBoxConfigure = ({ ...props }) => {
  return (
    <ConfigureBox {...props} title="Configure New Sequence">
      <FormSequenceBox>
        <InputGroup className="input-group">
          <Label>Sequence Name</Label>
          <Input />
        </InputGroup>
        <Text className="desc">
          The following fields are required for non-promotional daily sequences.
        </Text>
        <InputGroupWrap>
          <InputGroup>
            <Label>Starting Time</Label>
            <Select>
              <Option>Select</Option>
            </Select>
          </InputGroup>
          <InputGroup>
            <Label>Closing Time</Label>
            <Select>
              <Option>Select</Option>
            </Select>
          </InputGroup>
        </InputGroupWrap>
        <InputGroup className="input-group">
          <Label>Choose label(s)</Label>
          <Select>
            <Option>Select</Option>
          </Select>
        </InputGroup>
        <InputGroup className="input-group">
          <Label>Timezone</Label>
          <Select>
            <Option>Select</Option>
          </Select>
        </InputGroup>
        <InputGroup className="input-group">
          <Label>Message Tag</Label>
          <Select>
            <Option>Select</Option>
          </Select>
        </InputGroup>
        <DelayBox />
        <ConfigureButtonActions>
          <Button>Ok</Button>
          <Button bordered color="cb-red">
            Cancel
          </Button>
        </ConfigureButtonActions>
      </FormSequenceBox>
    </ConfigureBox>
  );
};

export default NewSequenceBoxConfigure;
