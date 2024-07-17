import styled from "styled-components";
import Input, { InputGroup } from "@/components/Form/Input";

import ConfigureBox, {
  ConfigureButtonActions,
  DelayBox,
  TypingOnDisplayToggle,
} from "../ConfigureBox";

import { Button } from "@/components/Button/Button";
import FileUpload from "@/components/FileUpload/FileUpload";
import Label from "@/components/Form/Label";

const StyledInput = styled(Input)`
  margin: 0 0 15px 0;
`;

const StyledFileUpload = styled(FileUpload)`
  margin-bottom: 15px;
`;

const GenericTemplateBoxConfigure = ({ ...props }) => {
  return (
    <ConfigureBox
      title="Configure Generic Template"
      description="Please provide your reply image"
      {...props}
    >
      <StyledInput placeholder="Put your image url here or click the upload" />
      <StyledFileUpload />
      <InputGroup className="input-group">
        <Label>Image click destination link</Label>
        <Input />
      </InputGroup>
      <InputGroup className="input-group">
        <Label>Title</Label>
        <Input />
      </InputGroup>
      <InputGroup className="input-group">
        <Label>Subtitle</Label>
        <Input />
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

export default GenericTemplateBoxConfigure;
