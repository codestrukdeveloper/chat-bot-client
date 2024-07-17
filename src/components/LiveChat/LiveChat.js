import styled from "styled-components";
import Textarea from "../Form/Textarea";
import Text from "../Typography/Text";
import { FaChevronDown } from "react-icons/fa";
import { MenuDropdown, MenuLists, Menu } from "../Dropdown/Dropdown";
import { useState } from "react";

const LiveChatWrapper = styled.div`
  background: #ffffff;
  border-radius: 25px;
  border: 8px solid #9663ff;
  position: fixed;
  width: 350px;
  height: 70vh;
  bottom: 40px;
  right: 132px;
  z-index: -10;
  opacity: 0;
  transition: 0.5s;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.04);

  @media screen and (min-width: 1440px) {
    height: 589px;
  }

  &.open {
    z-index: 1000;
    opacity: 1;
    transition: 0.5s;
  }
`;

const LiveChatBoxes = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 17.9885px;
  overflow: hidden;
  z-index: 5;

  ::before {
    content: "";
    display: block;
    position: absolute;
    inset: 0;
    background: url("/images/home/livechat-header.svg") no-repeat;
    background-position: top;
    z-index: -2;
  }
`;

const LiveChatHeader = styled.div`
  width: 100%;
  height: 172.16px;
  padding: 26.98px 23.39px 43.54px; 23.38px;
`;

const LiveChatNav = styled.div`
  display: flex;
  margin-bottom: 10.79px;
  justify-content: space-between;
  align-items: center;
`;

const LiveChatPeople = styled.div`
  width: 104.33px;
  height: 34.18px;
  display: flex;

  img {
    :not(:last-child) {
      margin-right: -12px;
    }
  }
`;

const LiveChatTitle = styled(Text)`
  font-weight: 500;
  font-size: 19.7874px;
  line-height: 30px;
  color: #ffffff;
`;

const LiveChatDesc = styled(Text)`
  margin-top: 8.9px;
  font-size: 12.592px;
  line-height: 19px;
  color: #ffffff;
`;

const LiveChatContent = styled.div`
  padding: 23px;
  font-size: 14.3908px;
  line-height: 22px;
  height: calc(100% - 279px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const LiveChatMessageLeft = styled.div`
  background: #f5f7fb;
  border-radius: 5.39655px 35.977px 35.977px 22.0359px;
  padding: 10.79px 14.39px 10.79px 20.69px;
  margin-bottom: 15.29px;
`;

const LiveChatMessageRight = styled.div`
  border-radius: 35.977px;
  border: 0.899425px solid #7b40f2;
  background: #ffffff;
  padding: 10.79px 14.39px 11.69px 14.39px;
  width: max-content;
  align-self: flex-end;

  :not(:last-child) {
    margin-bottom: 5.4px;
  }
`;

const SendMessage = styled(Textarea)`
  position: absolute;
  bottom: 19px;
  right: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 5;
  height: 97px;
  border-radius: 10.7931px;
  padding: 14px;
  font-size: 14.39px;

  :placeholder {
    color: #e3e6f3;
  }
`;

const LiveChatActions = styled.div`
  display: flex;
  align-items: center;
`;

const LiveChatHamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 3px;
  height: 17px;
  margin-right: 17px;
  cursor: pointer;
`;

const LiveChatDotHamburger = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #ffffff;
`;

const LiveChatDropwdown = styled.div`
  position: relative;
  cursor: pointer;
`;

const StyledLiveChatDropdown = styled(MenuDropdown)`
  top: 36px;
  padding: 14px;
  width: 215px;

  ul {
    li {
      font-size: 14px;
      line-height: 21px;
      color: #292d32;

      :not(:last-child) {
        margin-bottom: 8px;
      }

      img {
        width: 20px;
        height: 20px;
        margin-right: 15px;
      }
    }
  }
`;

const LiveChat = ({ ...props }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <LiveChatWrapper {...props}>
      <LiveChatBoxes>
        <LiveChatHeader>
          <LiveChatNav>
            <LiveChatPeople>
              <img src="/images/home/1.png" alt="1" />
              <img src="/images/home/2.png" alt="1" />
              <img src="/images/home/3.png" alt="1" />
              <img src="/images/home/4.png" alt="1" />
            </LiveChatPeople>
            <LiveChatActions>
              <LiveChatHamburger>
                <LiveChatDotHamburger />
                <LiveChatDotHamburger />
                <LiveChatDotHamburger />
              </LiveChatHamburger>
              <LiveChatDropwdown>
                <FaChevronDown
                  color="white"
                  onClick={() => setShowDropdown(!showDropdown)}
                />
                {showDropdown && (
                  <StyledLiveChatDropdown>
                    <MenuLists>
                      <Menu>
                        <img src="/images/live-chat/helpdesk.svg" alt="" />
                        Helpdesk
                      </Menu>
                      <Menu>
                        <img src="/images/live-chat/ticket.svg" alt="" />
                        Create Ticket
                      </Menu>
                      <Menu>
                        <img src="/images/live-chat/notif.svg" alt="" />
                        Turn off notification
                      </Menu>
                      <Menu>
                        <img src="/images/live-chat/rate.svg" alt="" />
                        Rate this chat
                      </Menu>
                    </MenuLists>
                  </StyledLiveChatDropdown>
                )}
              </LiveChatDropwdown>
            </LiveChatActions>
          </LiveChatNav>
          <LiveChatTitle>Hi There</LiveChatTitle>
          <LiveChatDesc>We usully reply within 5 minutes</LiveChatDesc>
        </LiveChatHeader>
        <LiveChatContent>
          <LiveChatMessageLeft>
            Please choose one of the topics listed below
          </LiveChatMessageLeft>
          <LiveChatMessageRight>
            What is the Chatbots limit?
          </LiveChatMessageRight>
          <LiveChatMessageRight>Edit the initial Message</LiveChatMessageRight>
          <LiveChatMessageRight>How do Chatbots work?</LiveChatMessageRight>
          <LiveChatMessageRight>
            Messenger &amp; Instagram Bots
          </LiveChatMessageRight>
          <LiveChatMessageRight>Go Back to Main Menu</LiveChatMessageRight>
        </LiveChatContent>
        <SendMessage placeholder="Hit the button to respond" />
      </LiveChatBoxes>
    </LiveChatWrapper>
  );
};

export default LiveChat;
