import { Button } from "@/components/Button/Button";
import styled from "styled-components";
import ConfigureBox, {
  ConfigureButtonActions,
  TypingOnDisplayToggle,
  DelayBox,
} from "../ConfigureBox";

const CarouselContentBox = styled.div`
  margin-top: 25px;
`;

const CarouselBoxConfigure = ({ ...props }) => {
  return (
    <ConfigureBox {...props} title="Configure Carousel">
      <CarouselContentBox>
        <TypingOnDisplayToggle />
        <DelayBox />
        <ConfigureButtonActions>
          <Button>Ok</Button>
          <Button bordered color="cb-red">
            Cancel
          </Button>
        </ConfigureButtonActions>
      </CarouselContentBox>
    </ConfigureBox>
  );
};

export default CarouselBoxConfigure;
