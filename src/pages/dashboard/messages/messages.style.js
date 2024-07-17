import styled from "styled-components";
import { fadeIn } from "@/utils/animation/fadeIn-animation";

export const MessagesContainer = styled.div`
  width: 100%;
  display: flex;
  height: calc(100vh - 154px);
  border-top: 1px solid #f1f4f9;
  border-left: 1px solid #f1f4f9;
  border-bottom: 1px solid #f1f4f9;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  animation: ${fadeIn} 0.3s forwards;

  @media screen and (max-width: 996px) {
    & {
      flex-direction: column;
      border: unset;
      border-radius: unset;
      height: auto;
    }
  }
`;

export const InboxContainer = styled.div`
  width: 410px;
  padding: 25px 5px 13px 5px;

  @media screen and (max-width: 996px) {
    & {
      width: 100%;
      padding: unset;
    }
  }
`;

export const InboxCategoryWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 35px;
  color: #afaeb1;
  line-height: 21px;

  p {
    cursor: pointer;
  }

  p.active {
    color: ${(props) => props.theme.colors["cb-purple"]};
    position: relative;
    transition: 0.5s;

    ::after {
      content: "";
      display: block;
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 100%;
      background-color: ${(props) => props.theme.colors["cb-purple"]};
      bottom: -8px;
      left: calc(50% - 4px);
    }
  }

  @media screen and (max-width: 996px) {
    & {
      padding: 0 19px;
    }
  }
`;

export const TextCategoryWrapper = styled.a``;

export const InboxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 46px);
  margin-top: 40px;
  overflow-y: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    background: transparent;
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    margin-bottom: 20px;
  }

  ::-webkit-scrollbar-thumb {
    background: #e5d9fc;
    border-radius: 20px;
  }

  @media screen and (max-width: 996px) {
    & {
      height: unset;
      margin-top: 30px;
    }
  }
`;

export const Inbox = styled.div`
  width: calc(100% - 5px);
  height: 90px;
  border-radius: 15px;
  padding: 20px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: default;
  margin-right: 7px;

  &.active {
    color: white;
    background: ${(props) => props.theme.colors["cb-purple"]};

    .name-from-message {
      color: white;
    }

    .count-message {
      background: white;
    }
  }

  :hover {
    color: white;
    background: ${(props) => props.theme.colors["cb-purple"]};

    .name-from-message {
      color: white;
    }

    .count-message {
      background: white;
    }
  }

  .name-from-message {
    color: ${(props) => props.theme.colors["cb-purple"]};
    line-height: 21px;
    font-weight: 600px;
  }

  .piece-message {
    width: 209px;
    margin-top: 6px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 16.78px;
  }

  .avatar-message {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }

  @media screen and (max-width: 996px) {
    & {
      margin-bottom: 10px;
      margin-right: unset;

      .piece-message {
        width: 174px;
      }
    }
  }

  @media screen and (max-width: 390px) {
    & {
      .piece-message {
        width: 100px;
      }
    }
  }
`;

export const InboxMessagesContainer = styled.div`
  background: #f9fafe;
  width: calc(100% - 410px);
  position: relative;

  ::after {
    content: "";
    display: block;
    position: absolute;
    top: -1px;
    bottom: -1px;
    right: -20px;
    width: 20px;
    background: #f9fafe;
    border-bottom: 1px solid #f1f4f9;
    border-top: 1px solid #f1f4f9;
  }

  @media screen and (max-width: 996px) {
    & {
      width: 100%;
      height: calc(100vh - 89px);

      ::before {
        content: "";
        display: block;
        position: absolute;
        left: -20px;
        bottom: 0;
        top: 0;
        width: 20px;
        background: #f9fafe;
      }

      ::after {
        z-index: -1;
        border: unset;
      }
    }
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CountOfMessage = styled.div`
  width: 41px;
  border-radius: 13px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors["cb-purple"]};
  font-size: ${(props) => props.theme.fontSize["xs"]};
  padding: 2px 15px;
  font-weight: 500;
  margin-top: 9px;
  background: rgba(123, 64, 242, 0.2);
  line-height: 21px;
`;

export const BarMessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  height: 89px;
  width: 100%;
  padding: 20px 23px;
  position: relative;

  ::after {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    top: 0;
    bottom: 0;
    right: -20px;
    background: white;
    z-index: 1;
  }

  @media screen and (max-width: 996px) {
    & {
      padding: unset;
      border-top: 1px solid #f9fafe;

      ::before {
        content: "";
        display: block;
        position: absolute;
        width: 20px;
        top: 0;
        bottom: 0;
        left: -20px;
        background: white;
        z-index: 1;
      }

      ::after {
        top: -1px;
      }

      svg {
        width: 24px;
      }
    }
  }
`;

export const ProfileBarWrapper = styled.div`
  display: flex;

  .avatar {
    width: 50px;
    height: 50px;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto auto auto 16px;

  .status {
    color: #afaeb1;
    margin-top: 4px;
    position: relative;
    padding-left: 10px;

    ::before {
      content: "";
      display: block;
      width: 5px;
      height: 5px;
      border-radius: 100%;
      position: absolute;
      left: 0;
      top: 4px;
      background: ${(props) =>
        props.status === "online" ? "#00ED18" : "#ED000E"};
    }
  }
`;

export const ToolMessageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Tool = styled.div`
  background: #f5f7fb;
  border-radius: 10px;
  padding: 13px 19px;
  margin-right: 27px;
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;
  }

  svg:not(svg:nth-child(4)) {
    margin-right: 22px;
  }

  @media screen and (max-width: 996px) {
    & {
      margin-right: unset;
      padding: 13px 16px;

      svg:nth-child(3),
      svg:nth-child(4) {
        display: none;
      }

      svg:nth-child(2) {
        margin-right: unset !important;
      }
    }
  }
`;

export const MenuWrapper = styled.div`
  display: flex;

  svg {
    cursor: pointer;

    path {
      stroke: black;
    }
  }

  @media screen and (max-width: 996px) {
    svg {
      display: none;
    }
  }
`;

export const MenuDot = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  height: 22px;
  width: 22px;
  justify-content: space-between;
  margin-left: 17px;

  @media screen and (max-width: 996px) {
    margin-left: 16px;
    width: 4px;
  }
`;

export const Dot = styled.span`
  display: block;
  width: 4px;
  height: 4px;
  margin: auto;
  border-radius: 50%;
  background: black;
`;

export const InputMessageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 81px;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 17px 25px;
  background: white;

  .emoji-icon {
    cursor: pointer;
    margin-right: 16px;
    font-size: ${(props) => props.theme.fontSize["lg"]};

    :hover {
      fill: ${(props) => props.theme.colors["cb-purple"]};
    }
  }

  ::after {
    content: "";
    display: block;
    position: absolute;
    width: 20px;
    top: 0;
    bottom: 0;
    right: -20px;
    background: white;
    z-index: 1;
  }

  @media screen and (max-width: 996px) {
    & {
      padding: unset;
      transform: translateY(20px);

      ::before {
        content: "";
        display: block;
        position: absolute;
        width: 20px;
        top: 0;
        bottom: 0;
        left: -20px;
        background: white;
        z-index: 1;
      }
    }
  }
`;

export const InputMessage = styled.div`
  width: calc(100% - 163px);
  border: none;
  outline: none;
  font-size: ${(props) => props.theme.fontSize["sm"]};
  position: relative;
  z-index: 2;

  ::placeholder {
    color: #c1c7d4;
  }

  ::before {
    content: "${(props) => (props.typing ? "" : props.placeholder)}";
    position: absolute;
    top: 0:
    left: 0;
    display: block;
    z-index: -1;
    cursor: text;
    color: #AFAEB1
  }
`;

export const SendMessageWrapper = styled.div`
  display: flex;
  align-items: center;

  svg {
    cursor: pointer;

    :not(svg:nth-child(2)) {
      margin-right: 19px;
    }
  }
`;

export const ButtonSendMessage = styled.button`
  background: ${(props) => props.theme.colors["cb-purple"]};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  margin-left: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: unset !important;
  }
`;

export const Messages = styled.div`
  width: 100%;
  height: calc(100% - 171px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 30px 50px;

  ::-webkit-scrollbar {
    background: transparent;
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors["cb-purple"]};
    border-radius: 20px;
  }

  @media screen and (max-width: 996px) {
    & {
      padding: 20px 0 0 0;

      ::-webkit-scrollbar-thumb {
        background: white;
        display: none;
      }

      ::-webkit-scrollbar {
        width: 0px;
        display: none;
      }
    }
  }
`;

export const MessageWrapper = styled.div`
  min-width: 267px;
  display: flex;
  margin-bottom: 10px;
  align-self: ${(props) => props.mine && "flex-end"};

  ${(props) =>
    props.mine &&
    `
      & {
        align-self: flex-end;
        
        @media screen and (max-width: 996px) {
          justify-content: flex-end;
        }

        .name {
          order: 2;
          margin-left: 9px;
        }
        
        .time {
          margin-left: unset !important;
          order: 1;
        }

        .avatar {
          order: 2;
          margin-right: unset !important;
          margin-left: 15px;
        }

        .message-text { 
          border-top-right-radius: unset;
          border-top-left-radius: 10px;
          background: ${props.theme.colors["cb-purple"]};
          color: white;
        }

        .message-wrapper {
          justify-content: flex-end;
        }
      }
  `}

  .avatar {
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }

  @media screen and (max-width: 996px) {
    & {
      width: 100%;

      .message-text {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

export const DetailMessage = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const MessageText = styled.div`
  background: white;
  padding: 13px 15px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  font-size: 12px;
  line-height: 18px;
  margin-top: 8px;
`;

export const TextMessageWrapper = styled.div`
  display: flex;
  align-items: center;

  .time {
    font-size: 10px;
    margin-left: 9px;
  }
`;

export const EmojiWrapper = styled.div`
  position: absolute;
  top: -330px;
`;