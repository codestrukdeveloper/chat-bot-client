import { useState, useEffect, useRef } from "react";
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

export default function Message() {
  const navigate = useNavigate();
  const [currentParams, setCurrentParams] = useState("all");

  const [messages, setMessages] = useState([]);
  const [openedUser, setOpenedUser] = useState();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("socketId");
  const servicesQuery = queryParams.get("services");

  console.log("SocketId", query);
  const [currentFocusMessageId, setCurrentFocusMessageId] = useState(1);

  const [typing, setTyping] = useState(false); // when typing input message
  const [currentWidth, setCurrentWidth] = useState(null);
  const [clickedInbox, setClickedInbox] = useState(false); // when someone has'nt click inbox (for mobile)
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
  }, []);

  const handleClickTextCategory = (e, category) => {
    e.preventDefault();
    navigate(`?category=${category}`);
    setCurrentParams(category);
  };

  const handleChangeFocusMessageId = (id) => {
    setCurrentFocusMessageId(id);

    navigate(`?services=${servicesQuery}&socketId=${id}`);
    const currentUserWithMessage = messages?.find(
      (userWithMessage) => userWithMessage.socketId === id
    );
    setOpenedUser(currentUserWithMessage);
    console.log("opened User", currentUserWithMessage);
    if (currentWidth <= 996) {
      setClickedInbox(true);
      // navigate(`${id}`);
      navigate(`?socketId=${id}`);
    }
  };

  const handleMaxLengthInputMessage = (e) => {
    setTyping(true);

    const currentTextLength = Number(e.target.outerText.length);
    const maxLength = Number(e.target.dataset.maxLength);

    if (currentTextLength > maxLength && e.key !== "Backspace") {
      e.preventDefault();
    }
  };

  const handleKeyUpInput = (e) => {
    const currentTextLength = Number(e.target.outerText.length);

    if (currentTextLength <= 0) {
      setTyping(false);
    }
  };

  const handleClickEmoji = (e, emojiObject) => {
    inputMessageRef.current.innerText += emojiObject.emoji;
    setTyping(true);
  };

  useEffect(() => {
    // Listen for messages
    socket.connect();
    socket.on("message", (data) => {
      const { from, message, sentBy, time } = data;
      console.log("MesageRecie", data);
      const existingUser = messages?.find((msg) => msg.socketId === from);
      console.log("Found", existingUser);

      if (existingUser) {
        // Update the existing user's message
        const updatedMessages = messages.map((msg) =>
          msg.socketId === from
            ? {
                ...msg,
                messages: [
                  ...msg.messages,
                  {
                    message: message,
                    time,
                    sentBy,
                  },
                ],
              }
            : msg
        );
        console.log("updatedMessages", updatedMessages);

        const query = queryParams.get("socketId");
        console.log(query, from, query === from);

        if (query === from) {
          const currentUserWithMessage = messages?.find(
            (userWithMessage) => userWithMessage.socketId === query
          );
          setOpenedUser({
            from: from,
            messages: [
              ...currentUserWithMessage.messages,
              {
                message: message,
                time,
                sentBy,
              },
            ],
          });
        }
        setMessages(updatedMessages);
      } else {
        // Add new user with the received message
        const newUser = {
          socketId: from,
          messages: [
            {
              message: message,
              time,
              sentBy,
            },
          ],
        };
        setMessages([...messages, newUser]);
      }

      console.log("Received message:", messages);
    });

    // Clean up on unmount
    return () => {
      socket.off("message");
    };
  }, [messages]);

  console.log("messages", messages);
  return (
    <MessagesContainer>
      {(!params.id || currentWidth >= 996) && (
        <InboxContainer>
          <InboxCategoryWrapper>
            <TextCategoryWrapper
              onClick={(e) => handleClickTextCategory(e, "all")}
            >
              <Text
                size="sm"
                weight="medium"
                className={currentParams === "all" && "active"}
              >
                All
              </Text>
            </TextCategoryWrapper>
            <TextCategoryWrapper
              onClick={(e) => handleClickTextCategory(e, "unread")}
            >
              <Text
                size="sm"
                weight="medium"
                className={currentParams === "unread" && "active"}
              >
                Unread
              </Text>
            </TextCategoryWrapper>
            <TextCategoryWrapper
              onClick={(e) => handleClickTextCategory(e, "unresolved")}
            >
              <Text
                size="sm"
                weight="medium"
                className={currentParams === "unresolved" && "active"}
              >
                Unresolved
              </Text>
            </TextCategoryWrapper>
            <TextCategoryWrapper
              onClick={(e) => handleClickTextCategory(e, "filters")}
            >
              <Text
                size="sm"
                weight="medium"
                className={currentParams === "filters" && "active"}
              >
                Filters
              </Text>
            </TextCategoryWrapper>
          </InboxCategoryWrapper>
          <InboxesWrapper>
            {messages?.map((userWithMessage, index) => (
              <Inbox
                className={currentFocusMessageId === 1 ? "active" : ""}
                onClick={() =>
                  handleChangeFocusMessageId(userWithMessage.socketId)
                }
              >
                <img
                  src="/images/teressa.png"
                  alt="avatar"
                  className="avatar-message"
                />
                <TextWrapper>
                  <Text
                    weight="semi-bold"
                    size="sm"
                    className="name-from-message"
                  >
                    {userWithMessage.socketId}
                  </Text>
                  <Text size="sm" className="piece-message">
                    {
                      userWithMessage.messages.at(
                        userWithMessage.messages.length - 1
                      ).message
                    }
                  </Text>
                </TextWrapper>
                <InfoMessageWrapper>
                  <Text size="xs">1 Hour ago</Text>
                  <CountOfMessage className="count-message">15</CountOfMessage>
                </InfoMessageWrapper>
              </Inbox>
            ))}
            {/* <Inbox
              className={currentFocusMessageId === 2 ? "active" : ""}
              onClick={() => handleChangeFocusMessageId(2)}
            >
              <img
                src="/images/ralph.png"
                alt="avatar"
                className="avatar-message"
              />
              <TextWrapper>
                <Text
                  weight="semi-bold"
                  size="sm"
                  className="name-from-message"
                >
                  Ralph Edwards
                </Text>
                <Text size="sm" className="piece-message">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, delectus.
                </Text>
              </TextWrapper>
              <InfoMessageWrapper>
                <Text size="xs">1 Hour ago</Text>
                <CountOfMessage className="count-message">15</CountOfMessage>
              </InfoMessageWrapper>
            </Inbox> */}
          </InboxesWrapper>
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

            <Messages>
              {openedUser?.messages &&
                openedUser?.messages?.map((msg) => (
                  // <MessageWrapper mine>
                  //   <img
                  //     src="/images/teressa.png"
                  //     alt="avatar"
                  //     className="avatar"
                  //   />
                  //   <DetailMessage>
                  //     <TextMessageWrapper className="message-wrapper">
                  //       <Text size="xs" weight="semi-bold" className="name">
                  //         Admin
                  //       </Text>
                  //       <Text className="time">3:20 PM</Text>
                  //     </TextMessageWrapper>
                  //     <MessageText className="message-text">
                  //       Lorem ispum dolor sit amet minim
                  //     </MessageText>
                  //   </DetailMessage>
                  // </MessageWrapper>

                  <MessageWrapper mine={msg.sentBy === "system"}>
                    <img
                      src="/images/teressa.png"
                      alt="avatar"
                      className="avatar"
                    />
                    <DetailMessage>
                      <TextMessageWrapper className="message-wrapper">
                        <Text size="xs" weight="semi-bold" className="name">
                          {openedUser.socketId}
                        </Text>
                        <Text className="time">
                          {convertToReadableFormat(msg.time)}
                        </Text>
                      </TextMessageWrapper>
                      <MessageText className="message-text">
                        {/* <img src="/images/img-example-message.png" alt="img" /> */}
                        {msg.message}
                      </MessageText>
                    </DetailMessage>
                  </MessageWrapper>
                ))}
            </Messages>

            <InputMessageWrapper>
              {showEmoji && (
                <EmojiWrapper
                  onMouseMove={() => setShowEmoji(true)}
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
                onMouseMove={() => setShowEmoji(true)}
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
                <ButtonSendMessage>
                  <SendIcon />
                </ButtonSendMessage>
              </SendMessageWrapper>
            </InputMessageWrapper>
          </InboxMessagesContainer>
        )}
    </MessagesContainer>
  );
}

const convertToReadableFormat = (isoString) => {
  const date = new Date(isoString);

  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  const seconds = ("0" + date.getSeconds()).slice(-2);

  return `${hours}:${minutes}:${seconds}`;
};
