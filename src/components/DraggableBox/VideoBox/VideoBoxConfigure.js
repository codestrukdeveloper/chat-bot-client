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

const VideoBoxConfigure = ({ ...props }) => {
  return (
    <ConfigureBox
      title="Configure Video"
      description="Please provide your reply video url"
      {...props}
    >
      <StyledInput placeholder="Put your image url here or click the upload" />
      <StyledFileUpload type="vid" />
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

export default VideoBoxConfigure;
