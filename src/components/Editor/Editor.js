import { Editor, EditorState } from "draft-js";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import Text from "../Typography/Text";

export const MyEditor = ({ ...props }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  function focusEditor() {
    editor.current.focus();
  }

  const editor = useRef(null);

  useEffect(() => {
    if (editor.current) {
      focusEditor();
    }
  }, []);

  return (
    <EditorContainer {...props}>
      <Title contentEditable>This Title</Title>
      <HelperWrapper>
        <RichButtonGroup>
          <RichButton type="bold" />
          <RichButton type="italic" />
          <RichButton type="underline" />
        </RichButtonGroup>

        <RichButtonGroup>
          <RichButton type="heading" />
          <RichButton type="heading" />
          <RichButton type="heading" />
        </RichButtonGroup>

        <RichButtonGroup>
          <RichButton type="task" />
        </RichButtonGroup>

        <RichButtonGroup>
          <RichButton type="code" />
          <RichButton type="quote" />
        </RichButtonGroup>

        <RichButtonGroup>
          <RichButton type="link" />
          <RichButton type="image" />
          <RichButton type="giphy" />
          <RichButton type="video" />
        </RichButtonGroup>

        <EditorTab>
          <ContentButton className="active">Content</ContentButton>
          <PreviewButton>Preview</PreviewButton>
        </EditorTab>
      </HelperWrapper>

      <EditorWrapper>
        <Editor
          ref={editor}
          editorState={editorState}
          onChange={(editorState) => setEditorState(editorState)}
        />
      </EditorWrapper>
    </EditorContainer>
  );
};

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ebeef9;
  border-radius: 15px;

  @media screen and (max-width: 996px) {
    height: auto;
    position: relative;
    width: 100%;
    border: unset;
  }
`;

const Title = styled(Text)`
  width: 100%;
  line-height: 24px;
  padding: 16px;
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  color: #292d32;
  text-align: center;
  outline: none;
  border: none;
  border-bottom: 1px solid #ebeef9;

  @media screen and (max-width: 996px) {
    border: 1px solid #ebeef9;
    border-radius: 15px 15px 0px 0px;
  }
`;

const HelperWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 20px;
  position: relative;

  @media screen and (max-width: 996px) {
    width: 100%;
    position: static;
    overflow-y: auto;
    border-left: 1px solid #ebeef9;
    border-right: 1px solid #ebeef9;
    border-bottom: 1px solid #ebeef9;
    padding: 9px 0 9px 10px;
  }
`;

const RichButtonGroup = styled.div`
  border: 1px solid #ebeef9;
  display: flex;
  border-radius: 10px;

  &:not(:last-child) {
    margin-right: 15px;
  }

  @media screen and (max-width: 996px) {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

const RichButton = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  cursor: pointer;

  &:not(:last-child) {
    border-right: 1px solid #ebeef9;
  }

  ::after {
    content: "";
    display: block;
    position: absolute;
    background: url(${(props) => `/images/editor/${props.type}.svg`});
    background-position: center;
    background-repeat: no-repeat;
    inset: 0;
  }
`;

const EditorTab = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 14px;
  background: #f9fafe;
  padding: 5px;
  position: absolute;
  right: 20px;

  button {
    height: 41px;
    padding: 20px 25px;
    border-radius: 14px;
    color: ${(props) => props.theme.colors["cb-purple"]};
    background: transparent;
  }

  @media screen and (max-width: 996px) {
    left: 0;
    right: 0;
    margin: auto;
    top: 145px;
    width: 226px;
    padding: unset;
  }
`;

const ContentButton = styled(Button)`
  &.active {
    background: ${(props) => props.theme.colors["cb-purple"]};
    color: white;
  }
`;

const PreviewButton = styled(ContentButton)``;

const EditorWrapper = styled.div`
  padding: 20px;
  height: calc(100vh - 125px);
  border-top: 1px solid #ebeef9;
  overflow-y: auto;

  @media screen and (max-width: 996px) {
    border-top: unset;
    margin-top: 80px;
    padding: unset;
  }
`;
