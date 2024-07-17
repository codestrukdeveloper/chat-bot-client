import { Button } from "@/components/Button/Button";
import FileUpload from "@/components/FileUpload/FileUpload";
import Input from "@/components/Form/Input";
import styled from "styled-components";
import ConfigureBox, {
  ConfigureButtonActions,
  TypingOnDisplayToggle,
  DelayBox,
} from "../ConfigureBox";

const StyledInput = styled(Input)`
  margin: 0 0 15px 0;
`;

const StyledFileUpload = styled(FileUpload)`
  margin-bottom: 15px;
`;

const AudioBoxConfigure = ({ ...props }) => {
  return (
    <ConfigureBox
      title="Configure Audio"
      description="Please provide reply audio url"
      {...props}
    >
      <StyledInput placeholder="Put audio url here or click the upload box" />
      <StyledFileUpload type="audio" />
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

export default AudioBoxConfigure;
