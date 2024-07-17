import styled from "styled-components";
import { InputGroup } from "@/components/Form/Input";

import ConfigureBox, { ConfigureButtonActions } from "../ConfigureBox";
import Toggle from "@/components/Toggle/Toggle";

import { Button } from "@/components/Button/Button";
import Text from "@/components/Typography/Text";
import { FaPlus } from "react-icons/fa";
import Label from "@/components/Form/Label";
import Select, { Option } from "@/components/Form/Select";

const ConditionBoxContent = styled.div`
  margin-top: 25px;
  margin-bottom: 20px;
`;

const ToggleWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const ToggleContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 55px;
  height: 51px;

  p {
    font-size: ${(props) => props.theme.fontSize["xs"]};
    line-height: 18px;
    color: #292d32;
    margin-bottom: 12px;
  }

  :last-child {
    width: 67px;
    margin-left: 50px;
  }
`;

const StyledToggle = styled(Toggle)`
  width: 40px;
  height: 21px;

  ::after {
    top: 3.41px;
    left: 3.41px;
    bottom: 3.41px;
    width: 13.89px;
    height: 14.19px;
  }
`;

const FieldNameWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 18px;
  align-items: center;

  p {
    line-height: 21px;
  }
`;

const FieldIcon = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  border-radius: 50%;
  background: ${(props) => props.theme.colors["cb-purple"]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  svg {
    transform: scale(0.8);
  }
`;

const InputGroupWrap = styled.div`
  display: flex;

  & > div {
    width: 96px;
    :not(:last-child) {
      margin-right: 4px;
    }
  }

  select {
    padding: 15px;
  }

  :not(:last-child) {
    margin-bottom: 30px;
  }
`;

const ConditionBoxConfigure = ({ ...props }) => {
  return (
    <ConfigureBox title="Configure Condition" {...props}>
      <ConditionBoxContent>
        <ToggleWrapper>
          <ToggleContent>
            <Text>All Match</Text>
            <StyledToggle />
          </ToggleContent>
          <ToggleContent>
            <Text>Any Match</Text>
            <StyledToggle />
          </ToggleContent>
        </ToggleWrapper>

        <FieldNameWrapper>
          <Text size="sm">System Field</Text>
          <FieldIcon>
            <FaPlus color="white" />
          </FieldIcon>
        </FieldNameWrapper>

        <InputGroupWrap>
          <InputGroup>
            <Label>Variable</Label>
            <Select>
              <Option>Select</Option>
            </Select>
          </InputGroup>
          <InputGroup>
            <Label>Operator</Label>
            <Select>
              <Option>Select</Option>
            </Select>
          </InputGroup>
          <InputGroup>
            <Label>Gender</Label>
            <Select>
              <Option>Select</Option>
            </Select>
          </InputGroup>
        </InputGroupWrap>

        <FieldNameWrapper>
          <Text size="sm">Custom Field</Text>
          <FieldIcon>
            <FaPlus color="white" />
          </FieldIcon>
        </FieldNameWrapper>

        <InputGroupWrap>
          <InputGroup>
            <Label>Variable</Label>
            <Select>
              <Option>Select</Option>
            </Select>
          </InputGroup>
          <InputGroup>
            <Label>Operator</Label>
            <Select>
              <Option>Select</Option>
            </Select>
          </InputGroup>
          <InputGroup>
            <Label>Value</Label>
            <Select>
              <Option>Select</Option>
            </Select>
          </InputGroup>
        </InputGroupWrap>
      </ConditionBoxContent>
      <ConfigureButtonActions>
        <Button>Ok</Button>
        <Button bordered color="cb-red">
          Cancel
        </Button>
      </ConfigureButtonActions>
    </ConfigureBox>
  );
};

export default ConditionBoxConfigure;
