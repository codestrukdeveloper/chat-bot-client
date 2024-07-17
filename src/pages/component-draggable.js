import ActionButtonBoxComponent from "@/components/DraggableBox/ActionButtonBox/ActionButtonBox";
import ActionButtonBoxConfigure from "@/components/DraggableBox/ActionButtonBox/ActionButtonBoxConfigure";
import AudioBoxComponent from "@/components/DraggableBox/AudioBox/AudioBox";
import AudioBoxConfigure from "@/components/DraggableBox/AudioBox/AudioBoxConfigure";
import ButtonBoxComponent from "@/components/DraggableBox/ButtonBox/ButtonBox";
import ButtonBoxConfigure from "@/components/DraggableBox/ButtonBox/ButtonBoxConfigure";
import CarouselBoxComponent from "@/components/DraggableBox/CarouselBox/CarouselBox";
import CarouselBoxConfigure from "@/components/DraggableBox/CarouselBox/CarouselBoxConfigure";
import CarouselSingleBoxComponent from "@/components/DraggableBox/CarouselSingleBox/CarouselSingleBox";
import CarouselSingleBoxConfigure from "@/components/DraggableBox/CarouselSingleBox/CarouselSingleBoxConfigure";
import ConditionBoxComponent from "@/components/DraggableBox/ConditionBox/ConditionBox";
import ConditionBoxConfigure from "@/components/DraggableBox/ConditionBox/ConditionBoxConfigure";
import FacebookMediaBoxComponent from "@/components/DraggableBox/FacebookMediaBox/FacebookMediaBox";
import FacebookMediaBoxConfigure from "@/components/DraggableBox/FacebookMediaBox/FacebookMediaBoxConfigure";
import FileBoxComponent from "@/components/DraggableBox/FileBox/FileBox";
import FileBoxConfigure from "@/components/DraggableBox/FileBox/FileBoxConfigure";
import GenericTemplateBoxComponent from "@/components/DraggableBox/GenericTemplateBox/GenericTemplateBox";
import GenericTemplateBoxConfigure from "@/components/DraggableBox/GenericTemplateBox/GenericTemplateBoxConfigure";
import ImagesBoxComponent from "@/components/DraggableBox/ImagesBox/ImagesBox";
import ImagesBoxConfigure from "@/components/DraggableBox/ImagesBox/ImagesBoxConfigure";
import NewPostBackBoxComponent from "@/components/DraggableBox/NewPostBackBox.js/NewPostBackBox";
import NewPostBackConfigure from "@/components/DraggableBox/NewPostBackBox.js/NewPostBackConfigure";
import NewSequenceBoxComponent from "@/components/DraggableBox/NewSequenceBox/NewSequenceBox";
import NewSequenceBoxConfigure from "@/components/DraggableBox/NewSequenceBox/NewSequenceBoxConfigure";
import OtnBoxComponent from "@/components/DraggableBox/OtnBox/OtnBox";
import OtnBoxConfigure from "@/components/DraggableBox/OtnBox/OtnBoxConfigure";
import QuickReplyBoxComponent from "@/components/DraggableBox/QuickReplyBox/QuickReplyBox";
import QuickReplyBoxConfigure from "@/components/DraggableBox/QuickReplyBox/QuickReplyBoxConfigure";
import SequenceSingleBoxComponent from "@/components/DraggableBox/SequenceSingleBox/SequenceSingleBox";
import SequenceSingleBoxConfigure from "@/components/DraggableBox/SequenceSingleBox/SequenceSingleBoxConfigure";
import TextBox from "@/components/DraggableBox/TextBox/TextBox";
import ConfigureTextBox from "@/components/DraggableBox/TextBox/TextBoxConfigure";
import TriggerBoxComponent from "@/components/DraggableBox/TriggerBox/TriggerBox";
import TriggerBoxConfigure from "@/components/DraggableBox/TriggerBox/TriggerBoxConfigure";
import UserFlowInputBoxComponent from "@/components/DraggableBox/UserFlowInputBox/UserFlowInputBox";
import UserFlowInputConfigure from "@/components/DraggableBox/UserFlowInputBox/UserFlowInputConfigure";
import VideoBoxComponent from "@/components/DraggableBox/VideoBox/VideoBox";
import VideoBoxConfigure from "@/components/DraggableBox/VideoBox/VideoBoxConfigure";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 20px;
  position: relative;

  & > div > div {
    position: relative;
  }
`;

const ComponentBoxed = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

const ConfigureBoxed = styled(ComponentBoxed)`
  // grid-template-columns: repeat(, 1fr);
  gap: 2rem;

  & > div {
    height: max-content;
  }
`;

function ComponentDraggable() {
  return (
    <Container>
      <h1>Component Box</h1> <br />
      <ComponentBoxed>
        <TextBox />
        <ImagesBoxComponent />
        <ButtonBoxComponent />
        <GenericTemplateBoxComponent />
        <CarouselBoxComponent />
        <AudioBoxComponent />
        <CarouselSingleBoxComponent />
        <FileBoxComponent />
        <UserFlowInputBoxComponent />
        <FacebookMediaBoxComponent />
        <OtnBoxComponent />
        <ConditionBoxComponent />
        <SequenceSingleBoxComponent />
        <QuickReplyBoxComponent />
        <TriggerBoxComponent />
        <NewSequenceBoxComponent />
        <ActionButtonBoxComponent />
        <NewPostBackBoxComponent />
        <VideoBoxComponent />
      </ComponentBoxed>
      <br />
      <hr />
      <br />
      <h1>Configure Box</h1>
      <br />
      <ConfigureBoxed>
        <ConfigureTextBox />
        <ImagesBoxConfigure />
        <GenericTemplateBoxConfigure />
        <ButtonBoxConfigure />
        <CarouselBoxConfigure />
        <AudioBoxConfigure />
        <CarouselSingleBoxConfigure />
        <FileBoxConfigure />
        <VideoBoxConfigure />
        <UserFlowInputConfigure />
        <FacebookMediaBoxConfigure />
        <OtnBoxConfigure />
        <SequenceSingleBoxConfigure />
        <QuickReplyBoxConfigure />
        <ActionButtonBoxConfigure />
        <NewPostBackConfigure />
        <NewSequenceBoxConfigure />
        <TriggerBoxConfigure />
        <ConditionBoxConfigure />
      </ConfigureBoxed>
    </Container>
  );
}

export default ComponentDraggable;
