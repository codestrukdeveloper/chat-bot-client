import styled from "styled-components";
import { Button } from "../Button/Button";
import Select, { Option } from "./Select";

const Textarea = styled.textarea`
  border-radius: 10px;
  border: 1px solid #f1f4f9;
  padding: 10px;
`;

const TextareaEditorWrapper = styled.div`
  border-radius: 13px;
  border: 1px solid #e3e6f3;
  // margin-top: 25px;
  padding: 15px;
  background: white;
  height: 171px;

  ${(props) =>
    props.stickyBottom &&
    `
    & {
      position: sticky;
      bottom: 0;
    }
  `}

  .btn-send {
    width: 192px;
    justify-content: center;
    position: absolute;
    bottom: 15px;
    right: 15px;
  }

  .textarea {
    padding: 5px;
    border: unset;
    width: 100%;
    height: calc(100% - 45px);
    overflow-y: auto;
    margin-top: 16px;

    ::placeholder {
      font-size: ${(props) => props.theme.fontSize["sm"]};
      color: #c1c7d4;
      line-height: 21px;
    }
  }
`;

const HeaderTextareEditor = styled.div`
  box-shadow: 0px 0px 37px 3px rgba(0, 0, 0, 0.02);
  border-radius: 13px;
  width: 334px;
  padding: 12px 16px;
  display: flex;
  align-items: center;

  select {
    height: unset;
    padding: unset;
    margin: unset;
    border: unset;
  }
`;

export const RichButtonWrapper = styled.div`
  display: flex;
  margin-left: 20px;

  img {
    cursor: pointer;
    :not(:last-child) {
      margin-right: 15px;
    }
  }
`;

export const TextareaEditor = ({
  showButton = true,
  showSelect = true,
  ...props
}) => {
  return (
    <TextareaEditorWrapper {...props}>
      <HeaderTextareEditor>
        {showSelect && (
          <Select>
            <Option>Normal</Option>
          </Select>
        )}
        <RichButtonWrapper>
          <img src="/images/editor/bold.svg" alt="bold" />
          <img src="/images/editor/italic.svg" alt="italic" />
          <img src="/images/editor/underline.svg" alt="underline" />
          <img src="/images/editor/paperclip.svg" alt="clip" />
          <img src="/images/editor/image.svg" alt="images" />
          <img src="/images/editor/link.svg" alt="link" />
        </RichButtonWrapper>
      </HeaderTextareEditor>
      <Textarea
        className="textarea"
        placeholder="Type your Message here"
      ></Textarea>
      {showButton && <Button className="btn-send">Send Message</Button>}
    </TextareaEditorWrapper>
  );
};

export default Textarea;
