import styled from "styled-components";

import Text from "../Typography/Text";
import Input from "./Input";
import Label from "./Label";

const CheckboxWrapper = styled.div`
  width: auto;

  label {
    display: flex;
    align-items: center;
    position: relative;

    input {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      opacity: 0;
    }

    input:checked + .custom-checkbox {
      background-color: #2196f3;
      position: relative;
      display: flex;

      ::before {
        content: "";
        display: block;
        position: absolute;
        width: 2.5px;
        top: 2px;
        left: 4px;
        height: 5px;
        border: solid white;
        border-width: 0px 2.5px 2.5px 0;
        transform: rotate(35deg);
      }
    }

    p {
      font-size: ${(props) => props.theme.fontSize["xs"]};
    }
  }
`;

const StyledCheckbox = styled.div`
  width: 17px;
  height: 17px;
  border: 1.5px solid #f1f4f9;
  border-radius: 4px;
  margin-right: 15px;
  position: relative;
  cursor: pointer;
`;

const Checkbox = ({
  children,
  htmlFor,
  inputId,
  LabelclassName,
  textClassName,
  ...props
}) => {
  return (
    <CheckboxWrapper>
      <Label htmlFor={htmlFor} className={LabelclassName} {...props}>
        <Input id={inputId} type="checkbox" />
        <StyledCheckbox className="custom-checkbox" />
        <Text className={textClassName}>{children}</Text>
      </Label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
