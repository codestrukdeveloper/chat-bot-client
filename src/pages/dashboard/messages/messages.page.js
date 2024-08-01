import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Picker from "emoji-picker-react";
import { FaRegSmile } from "react-icons/fa";
import Text from "@/components/Typography/Text";
import {
  AttachmentIcon,
  CallIcon,
  CameraIcon,
  MenuIcon,
  SearchIcon,
  SendIcon,
  SilentIcon,
  VoiceIcon,
} from "@/components/Icons";
import {
  MessagesContainer,
  InboxContainer,
  InboxCategoryWrapper,
  TextCategoryWrapper,
  InboxesWrapper,
  Inbox,
  TextWrapper,
  InfoMessageWrapper,
  CountOfMessage,
  MessageText,
  MessageWrapper,
  TextMessageWrapper,
  DetailMessage,
  Dot,
  MenuDot,
  MenuWrapper,
  Tool,
  ToolMessageWrapper,
  Profile,
  ProfileBarWrapper,
  BarMessageWrapper,
  ButtonSendMessage,
  InboxMessagesContainer,
  Messages,
  InputMessageWrapper,
  EmojiWrapper,
  InputMessage,
  SendMessageWrapper,
} from "./messages.style";
import socket from "@/socket/socket";
import { useMessageList } from "@/hooks/useChatList";

export default function UpdatedChatComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentParams, setCurrentParams] = useState("all");
  const [currentMessage, setCurrentMessage] = useState("");
  const [openedUser, setOpenedUser] = useState(null);
  const { chatsList, loading, error } = useMessageList();
  const [combinedMessages, setCombinedMessages] = useState([]);
  const queryParams = new URLSearchParams(location.search);
  const socketIdQuery = queryParams.get("socketId");
  const servicesQuery = queryParams.get("services");
  const serviceId = queryParams.get("id");

  const [currentFocusMessageId, setCurrentFocusMessageId] = useState(null);
  const [typing, setTyping] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(null);
  const [clickedInbox, setClickedInbox] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const params = useParams();

  const inputMessageRef = useRef();

  useEffect(() => {
    const currentWidth = window.innerWidth;
    setCurrentWidth(currentWidth);

    window.addEventListener("resize", (e) => {
      const width = e.target.innerWidth;
      setCurrentWidth(width);
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  useEffect(() => {
    if (chatsList && chatsList.length > 0) {
      const initialCombinedMessages = chatsList.map((chat) => ({
        id: chat.id,
        socketId: chat.for,
        serviceId: chat.serviceId,
        messages: chat.messages.map((msg) => ({
          ...msg,
          message: msg.content,
          time: new Date(msg.createdAt),
          sentBy: msg.sentBy === "user" ? chat.to : "system",
        })),
      }));
      setCombinedMessages(initialCombinedMessages);
    }
  }, [chatsList]);

  useEffect(() => {
    socket.connect();
    socket.on("message", (data) => {
      const { from, message, sentBy, time } = data;
      updateMessages(from, message, sentBy, time);
    });

    return () => {
      socket.off("message");
    };
  }, [combinedMessages]);

  const updateMessages = (from, message, sentBy, time) => {
    setCombinedMessages((prevMessages) => {
      const existingUserIndex = prevMessages.findIndex(
        (msg) => msg.socketId === from
      );
      if (existingUserIndex !== -1) {
        const updatedMessages = [...prevMessages];
        updatedMessages[existingUserIndex] = {
          ...updatedMessages[existingUserIndex],
          messages: [
            ...updatedMessages[existingUserIndex].messages,
            { message, time: new Date(time), sentBy },
          ],
        };
        return updatedMessages;
      } else {
        return [
          ...prevMessages,
          {
            socketId: from,
            messages: [{ message, time: new Date(time), sentBy }],
          },
        ];
      }
    });

    if (socketIdQuery === from) {
      setOpenedUser((prevUser) => ({
        ...prevUser,
        messages: [
          ...(prevUser?.messages || []),
          { message, time: new Date(time), sentBy },
        ],
      }));
    }
  };

  const handleClickTextCategory = (e, category) => {
    e.preventDefault();
    navigate(`?category=${category}`);
    setCurrentParams(category);
  };

  const handleChangeFocusMessageId = (id) => {
    setCurrentFocusMessageId(id);
    navigate(`?services=${servicesQuery}&id=${serviceId}&socketId=${id}`);
    const currentUserWithMessage = combinedMessages.find(
      (userWithMessage) => userWithMessage.socketId === id
    );
    setOpenedUser(currentUserWithMessage);
    if (currentWidth <= 996) {
      setClickedInbox(true);
      navigate(`?socketId=${id}`);
    }
  };

  const handleMaxLengthInputMessage = (e) => {
    setTyping(true);
    const currentTextLength = e.target.textContent.length;
    const maxLength = 250;
    if (currentTextLength > maxLength && e.key !== "Backspace") {
      e.preventDefault();
    }
  };

  const handleKeyUpInput = (e) => {
    const currentTextLength = e.target.textContent.length;
    if (currentTextLength <= 0) {
      setTyping(false);
    }
  };

  const handleClickEmoji = (emojiObject) => {
    inputMessageRef.current.textContent += emojiObject.emoji;
    setTyping(true);
  };

  const sendMessage = () => {
    const message = inputMessageRef.current.textContent;
    if (message.trim()) {
      socket.emit("message", {
        message,
        sentBy: "system",
        to: socketIdQuery,
      });
      updateMessages(socketIdQuery, message, "system", new Date());
      inputMessageRef.current.textContent = "";
      setTyping(false);
    }
  };

  const renderInboxes = () => {
    return combinedMessages.map((userWithMessage) => (
      <Inbox
        key={userWithMessage.socketId}
        className={
          currentFocusMessageId === userWithMessage.socketId ? "active" : ""
        }
        onClick={() => handleChangeFocusMessageId(userWithMessage.socketId)}
      >
        <img
          src="/images/teressa.png"
          alt="avatar"
          className="avatar-message"
        />
        <TextWrapper>
          <Text weight="semi-bold" size="sm" className="name-from-message">
            {userWithMessage.socketId}
          </Text>
          <Text size="sm" className="piece-message">
            {
              userWithMessage.messages[userWithMessage.messages.length - 1]
                .message
            }
          </Text>
        </TextWrapper>
        <InfoMessageWrapper>
          <Text size="xs">
            {timeAgo(
              userWithMessage.messages[userWithMessage.messages.length - 1].time
            )}
          </Text>
          <CountOfMessage className="count-message">
            {userWithMessage.messages.filter((msg) => !msg.isRead).length}
          </CountOfMessage>
        </InfoMessageWrapper>
      </Inbox>
    ));
  };

  const renderMessages = () => {
    return openedUser?.messages.map((msg, index) => (
      <MessageWrapper key={index} mine={msg.sentBy === "system"}>
        <img src="/images/teressa.png" alt="avatar" className="avatar" />
        <DetailMessage>
          <TextMessageWrapper className="message-wrapper">
            <Text size="xs" weight="semi-bold" className="name">
              {msg.sentBy === "system" ? "Admin" : openedUser.socketId}
            </Text>
            <Text className="time">{convertToReadableFormat(msg.time)}</Text>
          </TextMessageWrapper>
          <MessageText className="message-text">{msg.message}</MessageText>
        </DetailMessage>
      </MessageWrapper>
    ));
  };

  return (
    <MessagesContainer>
      {(!params.id || currentWidth >= 996) && (
        <InboxContainer>
          <InboxCategoryWrapper>
            {["all", "unread", "unresolved", "filters"].map((category) => (
              <TextCategoryWrapper
                key={category}
                onClick={(e) => handleClickTextCategory(e, category)}
              >
                <Text
                  size="sm"
                  weight="medium"
                  className={currentParams === category ? "active" : ""}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Text>
              </TextCategoryWrapper>
            ))}
          </InboxCategoryWrapper>
          <InboxesWrapper>{renderInboxes()}</InboxesWrapper>
        </InboxContainer>
      )}
      {((currentWidth <= 996 && clickedInbox && params.id) ||
        currentWidth >= 996) &&
        openedUser && (
          <InboxMessagesContainer>
            <BarMessageWrapper>
              <ProfileBarWrapper>
                <img
                  src="/images/teressa.png"
                  alt="avatar"
                  className="avatar"
                />
                <Profile status="online">
                  <Text weight="semi-bold">{openedUser.socketId}</Text>
                  <Text size="xs" className="status">
                    Online
                  </Text>
                </Profile>
              </ProfileBarWrapper>
              <ToolMessageWrapper>
                <Tool>
                  <SilentIcon />
                  <CameraIcon />
                  <CallIcon />
                  <MenuIcon />
                </Tool>
                <MenuWrapper>
                  <SearchIcon />
                  <MenuDot>
                    <Dot />
                    <Dot />
                    <Dot />
                  </MenuDot>
                </MenuWrapper>
              </ToolMessageWrapper>
            </BarMessageWrapper>

            <Messages>{renderMessages()}</Messages>

            <InputMessageWrapper>
              {showEmoji && (
                <EmojiWrapper
                  onMouseEnter={() => setShowEmoji(true)}
                  onMouseLeave={() => setShowEmoji(false)}
                >
                  <Picker
                    disableSkinTonePicker
                    onEmojiClick={handleClickEmoji}
                  />
                </EmojiWrapper>
              )}
              <FaRegSmile
                className="emoji-icon"
                color="#AFAEB1"
                onMouseEnter={() => setShowEmoji(true)}
              />
              <InputMessage
                typing={typing}
                contentEditable
                placeholder="Your messages"
                data-max-length={250}
                onKeyDown={handleMaxLengthInputMessage}
                onKeyUp={handleKeyUpInput}
                ref={inputMessageRef}
              />
              <SendMessageWrapper>
                <VoiceIcon />
                <AttachmentIcon />
                <ButtonSendMessage onClick={sendMessage}>
                  <SendIcon />
                </ButtonSendMessage>
              </SendMessageWrapper>
            </InputMessageWrapper>
          </InboxMessagesContainer>
        )}
    </MessagesContainer>
  );
}

const convertToReadableFormat = (date) => {
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);
  return `${hours}:${minutes}:${seconds}`;
};

function timeAgo(date) {
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInSec = Math.floor(diffInMs / 1000);
  const seconds = diffInSec % 60;
  const minutes = Math.floor(diffInSec / 60) % 60;
  const hours = Math.floor(diffInSec / 3600) % 24;
  const days = Math.floor(diffInSec / 86400);

  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  if (seconds > 0) return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  return "just now";
}
