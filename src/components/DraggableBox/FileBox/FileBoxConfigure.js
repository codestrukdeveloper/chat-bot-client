import styled from "styled-components";
import Input from "@/components/Form/Input";

import ConfigureBox, {
  ConfigureButtonActions,
  DelayBox,
  TypingOnDisplayToggle,
} from "../ConfigureBox";

import { Button } from "@/components/Button/Button";
import FileUpload from "@/components/FileUpload/FileUpload";

const StyledInput = styled(Input)`
  margin: 0 0 15px 0;
`;

const StyledFileUpload = styled(FileUpload)`
  margin-bottom: 15px;
`;

const FileBoxConfigure = ({ ...props }) => {
  return (
    <ConfigureBox
      title="Configure File"
      description="Please provide file URL"
      {...props}
    >
      <StyledInput placeholder="Put file url here or click the upload box" />
      <StyledFileUpload type="docs" />
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

export default FileBoxConfigure;
