import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
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

export default function Message() {
  const navigate = useNavigate();
  const [currentParams, setCurrentParams] = useState("all");
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

    if (currentWidth <= 996) {
      setClickedInbox(true);
      navigate(`${id}`);
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
            <Inbox
              className={currentFocusMessageId === 1 ? "active" : ""}
              onClick={() => handleChangeFocusMessageId(1)}
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
                  Teressa Trial
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
            </Inbox>
            <Inbox
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
            </Inbox>
            <Inbox
              className={currentFocusMessageId === 3 ? "active" : ""}
              onClick={() => handleChangeFocusMessageId(3)}
            >
              <img
                src="/images/kathryn.png"
                alt="avatar"
                className="avatar-message"
              />
              <TextWrapper>
                <Text
                  weight="semi-bold"
                  size="sm"
                  className="name-from-message"
                >
                  Kathryn Murphy
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
            </Inbox>
            <Inbox
              className={currentFocusMessageId === 4 ? "active" : ""}
              onClick={() => handleChangeFocusMessageId(4)}
            >
              <img
                src="/images/henry.png"
                alt="avatar"
                className="avatar-message"
              />
              <TextWrapper>
                <Text
                  weight="semi-bold"
                  size="sm"
                  className="name-from-message"
                >
                  Courtney Henry
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
            </Inbox>
            <Inbox
              className={currentFocusMessageId === 5 ? "active" : ""}
              onClick={() => handleChangeFocusMessageId(5)}
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
                  Theresa Webb
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
            </Inbox>
            <Inbox
              className={currentFocusMessageId === 6 ? "active" : ""}
              onClick={() => handleChangeFocusMessageId(6)}
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
                  Wade Warren
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
            </Inbox>
            <Inbox
              className={currentFocusMessageId === 7 ? "active" : ""}
              onClick={() => handleChangeFocusMessageId(7)}
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
                  Wade Warren
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
            </Inbox>
          </InboxesWrapper>
        </InboxContainer>
      )}
      {((currentWidth <= 996 && clickedInbox && params.id) ||
        currentWidth >= 996) && (
        <InboxMessagesContainer>
          <BarMessageWrapper>
            <ProfileBarWrapper>
              <img src="/images/teressa.png" alt="avatar" className="avatar" />
              <Profile status="online">
                <Text weight="semi-bold">Teressa Trial</Text>
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
            <MessageWrapper>
              <img src="/images/teressa.png" alt="avatar" className="avatar" />
              <DetailMessage>
                <TextMessageWrapper className="message-wrapper">
                  <Text size="xs" weight="semi-bold">
                    Teressa Trial
                  </Text>
                  <Text className="time">3:20 PM</Text>
                </TextMessageWrapper>
                <MessageText className="message-text">
                  Lorem ispum dolor sit amet minim
                </MessageText>
              </DetailMessage>
            </MessageWrapper>

            <MessageWrapper mine>
              <img src="/images/teressa.png" alt="avatar" className="avatar" />
              <DetailMessage>
                <TextMessageWrapper className="message-wrapper">
                  <Text size="xs" weight="semi-bold" className="name">
                    Sarah Scofild
                  </Text>
                  <Text className="time">3:20 PM</Text>
                </TextMessageWrapper>
                <MessageText className="message-text">
                  Lorem ispum dolor sit amet minim
                </MessageText>
              </DetailMessage>
            </MessageWrapper>

            <MessageWrapper mine>
              <img src="/images/teressa.png" alt="avatar" className="avatar" />
              <DetailMessage>
                <TextMessageWrapper className="message-wrapper">
                  <Text size="xs" weight="semi-bold" className="name">
                    Sarah Scofild
                  </Text>
                  <Text className="time">3:20 PM</Text>
                </TextMessageWrapper>
                <MessageText className="message-text">
                  Lorem ispum dolor sit amet minim
                </MessageText>
              </DetailMessage>
            </MessageWrapper>

            <MessageWrapper>
              <img src="/images/teressa.png" alt="avatar" className="avatar" />
              <DetailMessage>
                <TextMessageWrapper className="message-wrapper">
                  <Text size="xs" weight="semi-bold" className="name">
                    Sarah Scofild
                  </Text>
                  <Text className="time">3:20 PM</Text>
                </TextMessageWrapper>
                <MessageText className="message-text">
                  <img src="/images/img-example-message.png" alt="img" />
                </MessageText>
              </DetailMessage>
            </MessageWrapper>
          </Messages>

          <InputMessageWrapper>
            {showEmoji && (
              <EmojiWrapper
                onMouseMove={() => setShowEmoji(true)}
                onMouseLeave={() => setShowEmoji(false)}
              >
                <Picker disableSkinTonePicker onEmojiClick={handleClickEmoji} />
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
