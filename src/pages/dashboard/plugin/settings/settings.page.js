import Text from "@/components/Typography/Text";
import { ContentContainer } from "@/layouts/content-container.layout";
// import { scrollZoom } from "@/utils/tools/scrollZoom";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import TextBox from "@/components/DraggableBox/TextBox/TextBox";
import ImagesBox from "@/components/DraggableBox/ImagesBox/ImagesBox";
import ButtonBox from "@/components/DraggableBox/ButtonBox/ButtonBox";
import GenericTemplateBox from "@/components/DraggableBox/GenericTemplateBox/GenericTemplateBox";
import ConfigureTextBox from "@/components/DraggableBox/TextBox/TextBoxConfigure";
import ImagesBoxConfigure from "@/components/DraggableBox/ImagesBox/ImagesBoxConfigure";
import GenericTemplateBoxConfigure from "@/components/DraggableBox/GenericTemplateBox/GenericTemplateBoxConfigure";
import ButtonBoxConfigure from "@/components/DraggableBox/ButtonBox/ButtonBoxConfigure";

function SettingPlugin() {
  const { name } = useParams();

  const transformName = name
    .split("")
    .map((value, index) => (index === 0 ? value.toUpperCase() : value))
    .join("");

  useEffect(() => {
    const pageTitleNavElement = document.querySelector(".page-title-nav");
    pageTitleNavElement.textContent = `Settings ${transformName}`;
  }, [transformName]);

  if (name === "bot") {
    return <BotSettings />;
  }

  return <div></div>;
}

let pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;

const BotSettings = () => {
  const droppableRef = useRef(),
    boxRef = useRef(),
    imagesRef = useRef(),
    buttonRef = useRef(),
    genericTemplateRef = useRef();

  const [currentActiveBox, setCurrentActive] = useState(null);

  useEffect(() => {
    if (droppableRef) {
      // new scrollZoom(
      //   droppableRef,
      //   4,
      //   0.5,
      //   [boxRef, imagesRef, buttonRef, genericTemplateRef],
      //   0.5
      // );
    }
  }, [droppableRef]);

  const handleMouseDownOnBox = (e, element) => {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;

    const box = element.current;

    document.onmousemove = (e) => handleMouseMoveBox(e, box);
    document.onmouseup = handleMouseUpBox;
  };

  const handleMouseUpBox = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  };

  const handleMouseMoveBox = (e, element) => {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    element.style.left = `${element.offsetLeft - pos1}px`;
    element.style.top = `${element.offsetTop - pos2}px`;
  };

  const handleClickDroppableContainer = (e) => {
    setCurrentActive(null);
  };

  const handleClickBoxDraggable = (e, boxName) => {
    e.stopPropagation();
    setCurrentActive(boxName);
  };

  return (
    <BotSettingsContainer>
      <ComponentLists>
        <DraggableList draggable>
          <ThumbList type="text" />
          <Text>Text</Text>
        </DraggableList>
        <DraggableList draggable>
          <ThumbList type="images" />
          <Text>Images</Text>
        </DraggableList>
        <DraggableList draggable>
          <ThumbList type="generic-template" />
          <Text>Generic Template</Text>
        </DraggableList>
        <DraggableList draggable>
          <ThumbList type="carousel" />
          <Text>Carousel</Text>
        </DraggableList>
        <DraggableList draggable>
          <ThumbList type="carousel-single" />
          <Text>Carousel Single</Text>
        </DraggableList>
        <DraggableList draggable>
          <ThumbList type="audio" />
          <Text>Audio</Text>
        </DraggableList>
        <DraggableList draggable>
          <ThumbList type="video" />
          <Text>Video</Text>
        </DraggableList>
        <DraggableList draggable>
          <ThumbList type="file" />
          <Text>File</Text>
        </DraggableList>
        <DraggableList draggable>
          <ThumbList type="facebook-media" />
          <Text>Facebook Media</Text>
        </DraggableList>
        <DraggableList draggable>
          <ThumbList type="user-flow-input" />
          <Text>User Flow Input</Text>
        </DraggableList>
        <DraggableList draggable>
          <ThumbList type="otn" />
          <Text>OTN</Text>
        </DraggableList>
        <DraggableList draggable>
          <ThumbList type="button" />
          <Text>Button</Text>
        </DraggableList>
        <DraggableList draggable>
          <ThumbList type="quick-reply" />
          <Text>Quick Reply</Text>
        </DraggableList>
        <DraggableList draggable>
          <ThumbList type="condition" />
          <Text>Condition</Text>
        </DraggableList>
        <DraggableList draggable>
          <ThumbList type="new-sequence" />
          <Text>New Sequence</Text>
        </DraggableList>
        <DraggableList draggable>
          <ThumbList type="sequence-single" />
          <Text>Sequence Single</Text>
        </DraggableList>
        <DraggableList draggable>
          <ThumbList type="sequence-single" />
          <Text>Sequence Single</Text>
        </DraggableList>
        <DraggableList draggable>
          <ThumbList type="action-button" />
          <Text>Action Button</Text>
        </DraggableList>
        <DraggableList draggable>
          <ThumbList type="trigger" />
          <Text>Trigger</Text>
        </DraggableList>
        <DraggableList draggable>
          <ThumbList type="new-postback" />
          <Text>New Postback</Text>
        </DraggableList>
      </ComponentLists>
      <DroppableContainer
        onClick={handleClickDroppableContainer}
        ref={droppableRef}
      >
        <StyledTextBox
          boxRef={boxRef}
          onMouseDown={(e) => handleMouseDownOnBox(e, boxRef)}
          onClick={(e) => handleClickBoxDraggable(e, "text-box")}
          className={`${currentActiveBox === "text-box" && "active"}`}
        />
        <StyledImagesBox
          boxRef={imagesRef}
          onMouseDown={(e) => handleMouseDownOnBox(e, imagesRef)}
          onClick={(e) => handleClickBoxDraggable(e, "images-box")}
          className={`${currentActiveBox === "images-box" && "active"}`}
        />
        <StyledButtonBox
          boxRef={buttonRef}
          onMouseDown={(e) => handleMouseDownOnBox(e, buttonRef)}
          onClick={(e) => handleClickBoxDraggable(e, "button-box")}
          className={`${currentActiveBox === "button-box" && "active"}`}
        />
        <StyledGenericTemplateBox
          boxRef={genericTemplateRef}
          onMouseDown={(e) => handleMouseDownOnBox(e, genericTemplateRef)}
          onClick={(e) => handleClickBoxDraggable(e, "generic-template-box")}
          className={`${
            currentActiveBox === "generic-template-box" && "active"
          }`}
        />
        {currentActiveBox === "text-box" && <ConfigureTextBox />}
        {currentActiveBox === "images-box" && <ImagesBoxConfigure />}
        {currentActiveBox === "generic-template-box" && (
          <GenericTemplateBoxConfigure />
        )}
        {currentActiveBox === "button-box" && <ButtonBoxConfigure />}
      </DroppableContainer>
    </BotSettingsContainer>
  );
};

const BotSettingsContainer = styled(ContentContainer)`
  display: flex;
  position: relative;
  border: 1px solid #f1f4f9;
  border-radius: 15px;
  overflow: hidden;

  @media screen and (max-width: 996px) {
    & {
      height: auto;
    }
  }
`;

const ComponentLists = styled.div`
  width: 173px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 25px 23px 25px 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  -webkit-text-fill-color: black;
  color: rgba(0, 0, 0, 0);
  transition: 1s;

  :hover {
    color: rgba(238, 239, 244, 1);
    transition: 1s;
  }

  ::-webkit-scrollbar,
  ::-webkit-scrollbar-thumb {
    width: 9px;
    border: 3px solid transparent;
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-track {
    margin: 25px 0;
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 3px;
    border-radius: 20px;
  }
`;

const DraggableList = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  width: 50px;
  // height: 71px;
  margin-bottom: 15px;

  p {
    font-size: 10px;
    line-height: 15px;
    text-align: center;
    font-weight: 500;
    padding-top: 6px;
  }
`;

const ThumbList = styled.div`
  width: 100%;
  height: 50px;
  padding: 13px;
  border-radius: 10px;
  background: #f9fafe;
  position: relative;
  display: flex;
  cursor: move;

  ::after {
    content: "";
    display: block;
    position: absolute;
    inset: 0;
    background: url(${(props) =>
      `/images/component-draggable/${props.type}.svg`});
    background-position: center;
    background-repeat: no-repeat;
  }

  ::before {
    content: "";
    display: block;
    position: absolute;
    inset: 0;
    background: white;
    width: 24px;
    height: 24px;
    margin: auto;
    box-shadow: 0px 6px 19px rgba(123, 64, 242, 0.4);
  }
`;

const DroppableContainer = styled.div`
  width: calc(100% - 173px);
  height: 100%;
  border-left: 1px solid #f1f4f9;
  padding: 16px;
  background: url("/images/4dot.svg");
  background-position: center 16px;
  background-color: #f9fafe;
  transform-origin: 0 0;
  position: relative;
  // overflow: auto;
`;

const StyledTextBox = styled(TextBox)`
  top: 228px;
  left: 37px;
`;

const StyledImagesBox = styled(ImagesBox)`
  top: 82px;
  left: 420px;
`;

const StyledButtonBox = styled(ButtonBox)`
  top: 302px;
  left: 417px;
`;

const StyledGenericTemplateBox = styled(GenericTemplateBox)`
  top: 141px;
  left: 752px;
  right: 49px;
`;

export default SettingPlugin;
