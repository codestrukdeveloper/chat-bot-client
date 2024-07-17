import { Button } from "@/components/Button/Button";
import Toggle from "@/components/Toggle/Toggle";
import Text from "@/components/Typography/Text";
import styled from "styled-components";
import ConfigureBox, { ConfigureButtonActions } from "../ConfigureBox";

const SequenceSingleContent = styled.div`
  margin-top: 25px;
  margin-bottom: 20px;
`;

const ToggleWrapper = styled.div`
  display: flex;
`;

const ToggleContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 103px;
  height: 51px;

  p {
    font-size: ${(props) => props.theme.fontSize["xs"]};
    line-height: 18px;
    color: #292d32;
    margin-bottom: 12px;
  }

  :last-child {
    margin-left: 50px;
  }
`;

const ToggleDetail = styled.div`
  display: flex;

  p {
    font-size: ${(props) => props.theme.fontSize["xs"]};
    line-height: 18px;
    color: #adb5c2;
    margin-left: 10px;
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

const SequenceSingleBoxConfigure = ({ ...props }) => {
  return (
    <ConfigureBox {...props} title="Create Sequence Single">
      <SequenceSingleContent>
        <ToggleWrapper>
          <ToggleContent>
            <Text>Promotional</Text>
            <ToggleDetail>
              <StyledToggle />
              <Text>24 Hours</Text>
            </ToggleDetail>
          </ToggleContent>
          <ToggleContent>
            <Text>Promotional</Text>
            <ToggleDetail>
              <StyledToggle />
              <Text>Daily</Text>
            </ToggleDetail>
          </ToggleContent>
        </ToggleWrapper>
      </SequenceSingleContent>
      <ConfigureButtonActions>
        <Button>Ok</Button>
        <Button bordered color="cb-red">
          Cancel
        </Button>
      </ConfigureButtonActions>
    </ConfigureBox>
  );
};

export default SequenceSingleBoxConfigure;
