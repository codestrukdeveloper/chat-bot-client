import styled from "styled-components";
import { Button } from "../Button/Button";
import Text from "../Typography/Text";

const FileUploadWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px dashed #f1f4f9;
  padding: 40px 25px;
`;

const FileUploadSupportWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 42px;
    height: 42px;
    margin-bottom: 6px;
  }

  p {
    color: #e3e6f3;
    text-align: center;
    line-height: 18px;
    font-size: ${(props) => props.theme.fontSize["xs"]};
  }

  button {
    border-radius: 9px;
    height: 34px;
    font-size: ${(props) => props.theme.fontSize["xs"]};
    line-height: 18px;
    padding: 8px;
    margin-top: 13px;
  }
`;

const FileUpload = ({
  type = "images",
  showDesc = true,
  showButton = false,
  ...props
}) => {
  return (
    <FileUploadWrapper {...props}>
      <FileUploadSupportWrapper>
        <img
          src={`${
            type === "images"
              ? "/images/galery-export.svg"
              : type === "vid"
              ? "/images/video-export.svg"
              : "/images/audio.svg"
          }`}
          alt="icon"
        />
        {showDesc && (
          <Text>
            Supported types:{" "}
            {type === "images"
              ? "png, jpg, gif"
              : type === "docs"
              ? "doc, docx, pdf, txt, ppt, pptx, xls, xlsx"
              : type === "vid"
              ? "mp4, mkv"
              : "amr, mp3, wav"}
          </Text>
        )}
        {showButton && <Button bordered>Select Files</Button>}
      </FileUploadSupportWrapper>
    </FileUploadWrapper>
  );
};

export default FileUpload;
