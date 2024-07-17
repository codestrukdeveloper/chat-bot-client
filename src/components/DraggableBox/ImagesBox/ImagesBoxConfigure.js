import ConfigureBox, {
  ConfigureButtonActions,
  DelayBox,
  TypingOnDisplayToggle,
} from "../ConfigureBox";

import { Button } from "@/components/Button/Button";
import Input from "@/components/Form/Input";
import styled from "styled-components";
import FileUpload from "@/components/FileUpload/FileUpload";

const StyledInput = styled(Input)`
  margin: 0 0 15px 0;
`;

const StyledFileUpload = styled(FileUpload)`
  margin-bottom: 15px;
`;

const ImagesBoxConfigure = ({ ...props }) => {
  return (
    <ConfigureBox
      title="Configure Image"
      description="Please provide your reply image"
      {...props}
    >
      <StyledInput placeholder="Put your image url here or click the upload" />
      <StyledFileUpload />
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

export default ImagesBoxConfigure;
