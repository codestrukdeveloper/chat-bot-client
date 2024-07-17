import { useState } from "react";

import Text from "@/components/Typography/Text";
import { MenuDotIcon } from "@/components/Icons";
import RecentChatIcon from "@/components/Icons/RecentChat";

import {
  AndroidButton,
  AppCardButton,
  AppCardDetail,
  AppCardHeader,
  AppCardWrapper,
  AvatarProfile,
  BorderedWrapper,
  CardMenuCategory,
  HeroHeader,
  IosButton,
  Main,
  MenuCategoryWrapper,
  MenuWrapper,
  Next,
  Prev,
  RecentChatPeople,
  RecentChatWrapper,
  SetupAppsWrapper,
  SetupHeader,
  SetupWrapper,
  StyledCalendar,
  StyledText,
  TextWrapper,
  WrapperColOne,
  WrapperColTwo,
} from "./dashboard.style";
import { PopupContainer } from "@/components/Popup/Popup";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Select, { Option } from "@/components/Form/Select";
import { RichButtonWrapper } from "@/components/Form/Textarea";
import {
  FaCalendarAlt,
  FaEdit,
  FaPlus,
  FaSearch,
  FaTrash,
} from "react-icons/fa";
import { Button } from "@/components/Button/Button";
import { Menu, MenuDropdown, MenuLists } from "@/components/Dropdown/Dropdown";

export default function DashboardPage() {
  const [value] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(null);
  const [showPopupNotes, setShowPopupNotes] = useState(false);
  const navigate = useNavigate();

  const [tileClassName, setTileClassName] = useState(() => {
    return ({ date }) => {
      if (shouldDateBeSelected(date)) {
        return "selected-date";
      }
      return null;
    };
  });

  const handleChangeDay = (value) => {
    setCurrentDate(value.getDate());
    setTileClassName(() => {
      return ({ date }) => {
        if (shouldDateBeSelected(date)) {
          return "selected-date";
        }
        return null;
      };
    });
  };

  let shouldDateBeSelected = (date) => {
    if (date.getDate() === currentDate) {
      return true;
    }

    return false;
  };

  return (
    <>
      <Main>
        <WrapperColOne>
          <HeroHeader>
            <TextWrapper>
              <Text size="3xl" weight="normal" className="welcome-text">
                Welcome, Samantha 👋
              </Text>
              <Text
                size="sm"
                margin="20px 0 0 0"
                style={{ lineHeight: "32px" }}
                className="welcome-desc"
              >
                Welcome to InfinityBot. Offer a superb customer experience
              </Text>
            </TextWrapper>
            <picture>
              <source media="(min-width: 996px)" srcSet="/images/hero-1.svg" />
              <img src="/images/hero-2.svg" alt="hero-header" />
            </picture>
          </HeroHeader>

          <SetupWrapper>
            <BorderedWrapper>
              <SetupHeader>
                <img src="/images/logo-blue-shadow.png" alt="logo" />
                <TextWrapper className="text-wrapper-setup">
                  <StyledText weight="semi-bold">
                    Lets get your set up
                  </StyledText>
                  <Text size="sm" margin="12px 0 0 0" className="desc-setup">
                    Welcome to ChatBot. Amet minim mollit non deserunt
                  </Text>
                </TextWrapper>
                <img
                  src="/images/your-setup.png"
                  alt="hero-illustration"
                  className="setup-header-img"
                />
              </SetupHeader>

              <SetupAppsWrapper>
                <AppCardWrapper>
                  <AppCardHeader>
                    <img src="/images/1.png" alt="mobile-app" />
                    <AppCardDetail>
                      <Text weight="medium" size="sm" className="app-title">
                        Get InfinityBot mobile apps
                      </Text>
                      <Text size="sm" className="app-detail">
                        Use InfinityBot on go
                      </Text>
                    </AppCardDetail>
                  </AppCardHeader>
                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <IosButton>
                      <img src="/images/ios.png" alt="" />
                      IOS
                    </IosButton>
                    <AndroidButton>
                      <img src="/images/android.png" alt="" />
                      Android
                    </AndroidButton>
                  </div>
                </AppCardWrapper>

                <AppCardWrapper>
                  <AppCardHeader>
                    <img src="/images/2.png" alt="mobile-app" />
                    <AppCardDetail>
                      <Text weight="medium" size="sm" className="app-title">
                        Install the InfinityBot on your website
                      </Text>
                      <Text size="sm" className="app-detail">
                        Receive messages from your users.
                      </Text>
                    </AppCardDetail>
                  </AppCardHeader>
                  <AppCardButton>Setup Now</AppCardButton>
                </AppCardWrapper>

                <AppCardWrapper>
                  <AppCardHeader>
                    <img src="/images/4.png" alt="mobile-app" />
                    <AppCardDetail>
                      <Text weight="medium" size="sm" className="app-title">
                        Send automated messages
                      </Text>
                      <Text size="sm" className="app-detail">
                        Automate your marketing by triggering chatbox actions.
                      </Text>
                    </AppCardDetail>
                  </AppCardHeader>
                  <AppCardButton>Setup Now</AppCardButton>
                </AppCardWrapper>

                <AppCardWrapper>
                  <AppCardHeader>
                    <img src="/images/5.svg" alt="mobile-app" />
                    <AppCardDetail>
                      <Text weight="medium" size="sm" className="app-title">
                        Connect to facebook messenger
                      </Text>
                      <Text size="sm" className="app-detail">
                        Respond to messages from Messenger users.
                      </Text>
                    </AppCardDetail>
                  </AppCardHeader>
                  <AppCardButton>Setup Now</AppCardButton>
                </AppCardWrapper>

                <AppCardWrapper>
                  <AppCardHeader>
                    <img src="/images/6.png" alt="mobile-app" />
                    <AppCardDetail>
                      <Text weight="medium" size="sm" className="app-title">
                        Build your Helpdesk
                      </Text>
                      <Text size="sm" className="app-detail">
                        Write articles to help your users.
                      </Text>
                    </AppCardDetail>
                  </AppCardHeader>
                  <AppCardButton>Setup Now</AppCardButton>
                </AppCardWrapper>

                <AppCardWrapper>
                  <AppCardHeader>
                    <img src="/images/7.png" alt="mobile-app" />
                    <AppCardDetail>
                      <Text weight="medium" size="sm" className="app-title">
                        Build your first bot
                      </Text>
                      <Text size="sm" className="app-detail">
                        Build chatbot flows and automate your answers.
                      </Text>
                    </AppCardDetail>
                  </AppCardHeader>
                  <AppCardButton>Setup Now</AppCardButton>
                </AppCardWrapper>
              </SetupAppsWrapper>
            </BorderedWrapper>
          </SetupWrapper>
        </WrapperColOne>

        <WrapperColTwo>
          <Text size="xl" weight="medium" className="menu">
            <MenuDotIcon />
            My Menu
          </Text>
          <MenuWrapper>
            <MenuCategoryWrapper>
              <CardMenuCategory
                onClick={() => navigate("/dashboard/users")}
                bgColor="purple"
                imgFileName="user"
              >
                <Text>Users</Text>
              </CardMenuCategory>

              <CardMenuCategory
                bgColor="yellow"
                imgFileName="notes"
                onClick={() => {
                  if (document.body.clientWidth <= 568) {
                    return navigate("/dashboard/notes");
                  }
                  setShowPopupNotes(!showPopupNotes);
                }}
              >
                <Text>Notes</Text>
              </CardMenuCategory>
              <CardMenuCategory
                bgColor="orange"
                imgFileName="settings"
                onClick={() => navigate("/dashboard/settings")}
              >
                <Text>Settings</Text>
              </CardMenuCategory>
              <CardMenuCategory bgColor="lightblue" imgFileName="logout">
                <Text>Log Out</Text>
              </CardMenuCategory>
            </MenuCategoryWrapper>

            <Text size="xl" weight="medium" className="menu menu--recent-chat">
              <RecentChatIcon />
              Recent Chat
            </Text>

            <RecentChatWrapper>
              <RecentChatPeople className="has-notif" countNotif={12}>
                <AvatarProfile className="img-profile">
                  <img src="/images/jennie.png" alt="jennie" />
                </AvatarProfile>
                <Text weight="medium">Jennie</Text>
              </RecentChatPeople>
              <RecentChatPeople className="has-notif" countNotif={2}>
                <AvatarProfile className="img-profile">
                  <img src="/images/jones.png" alt="jones" />
                </AvatarProfile>
                <Text weight="medium">Jones</Text>
              </RecentChatPeople>
              <RecentChatPeople className="has-notif" countNotif={12}>
                <AvatarProfile className="img-profile">
                  <img src="/images/cameroon.png" alt="cameroon" />
                </AvatarProfile>
                <Text weight="medium">Cameroon</Text>
              </RecentChatPeople>
              <RecentChatPeople>
                <AvatarProfile className="img-profile">
                  <img src="/images/arlene.png" alt="arlene" />
                </AvatarProfile>
                <Text weight="medium">Arlene</Text>
              </RecentChatPeople>
              <RecentChatPeople>
                <AvatarProfile className="img-profile">
                  <img src="/images/diane.png" alt="diane" />
                </AvatarProfile>
                <Text weight="medium">Diane</Text>
              </RecentChatPeople>
            </RecentChatWrapper>

            <StyledCalendar
              prev2Label={null}
              next2Label={null}
              nextLabel={<Next />}
              prevLabel={<Prev />}
              value={value}
              className="calendar"
              onChange={handleChangeDay}
              locale="en-EN"
              tileClassName={tileClassName}
            />
          </MenuWrapper>
        </WrapperColTwo>
      </Main>
      {showPopupNotes && <PopupNotes setShowPopupNotes={setShowPopupNotes} />}
    </>
  );
}

const StyledPopupContainer = styled(PopupContainer)`
  z-index: 9999;

  @media screen and (max-width: 568px) {
    display: none;
  }
`;

const NotesPopup = styled.div`
  width: 794px;
  height: 550px;
  border-radius: 26px;
  background: #ffffff;
  display: flex;
`;

const Note = styled.div`
  padding: 50px 45px;
  height: 100%;
  border-right: 0.75px solid #e3e6f3;
  width: 526px;
  position: relative;
`;

const DateNote = styled(Text)`
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  color: #adb5c2;
  margin-bottom: 10px;
`;

const NoteTitle = styled(Text)`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 18px;
  outline: none;
  color: #292d32;
`;

const NoteTexts = styled.div`
  outline: none;
  width: 100%;
  height: calc(100% - 200px);
  overflow-y: auto;
  color: #292d32;
  font-size: 11px;
  line-height: 16px;
  position: relative;
`;

const NoteNav = styled.div`
  display: flex;
  width: max-content;
  margin-bottom: 32px;
  height: 43px;
  padding: 12px 16px 10px 16px;
  background: #fff;
  box-shadow: 0px 0px 37px 3px rgba(0, 0, 0, 0.02);
  border-radius: 13px;
  filter: drop-shadow(0px 28px 33px rgba(0, 0, 0, 0.03));

  select {
    margin: unset;
    padding: unset;
    border: unset;
  }
`;

const DueDateWrapper = styled.div`
  width: 241px;
  height: 38px;
  padding: 5px;
  background: #ffffff;
  box-shadow: 0px 2px 33px rgba(0, 0, 0, 0.06);
  border-radius: 7px;
  margin-bottom: 15px;
  display: flex;
  cursor: pointer;
`;

const TextContent = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 10px;
    line-height: 15px;
  }

  :first-child {
    padding-right: 12px;
    border-right: 0.75px solid #f1f4f9;
  }

  :last-child {
    padding-left: 12px;
    p {
      color: ${(props) => props.theme.colors["cb-purple"]};
    }
  }
`;

const CalendarIconWrapper = styled.div`
  background: #7b40f2;
  border-radius: 7px;
  width: 40px;
  height: 28px;
  margin-right: 12px;
  padding: 4px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoteLists = styled.div`
  width: calc(100% - 526px);
  height: 100%;
  padding: 25px 15px 5px 15px;
`;

const NoteListNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;

const NewNoteButton = styled(Button)`
  padding: 10px 8px;
  width: 190px;
  height: 38px;
  background: #e6daff;
  border-radius: 10px;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #7b40f2;
  justify-content: center;
`;

const SearchNoteIcon = styled.div`
  cursor: pointer;
  width: 38px;
  height: 38px;
  padding: 10px;
  background: #f9fafe;
  border-radius: 10px;
  color: #c1c7d4;
  display: flex;

  svg {
    margin: auto;
  }
`;

const NoteList = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  padding: 12px 12px 12px 16px;
  background: #f9fafd;
  border-radius: 9px;

  :hover {
    background: ${(props) => props.theme.colors["cb-purple"]};

    .title,
    .desc,
    .time {
      color: white;
    }
  }

  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

const NoteListsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 63px);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

const NoteListHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NoteListTitle = styled(Text)`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #292d32;
`;

const NoteListDesc = styled(Text)`
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #c1c7d4;
  margin-top: 8px;
`;

const NoteListDetail = styled.div`
  display: flex;
  align-items: center;

  p {
    font-weight: 500;
    color: #c1c7d4;
    font-size: 8px;
    line-height: 12px;
    margin-right: 13px;
  }
`;

const NoteListHamburgerWrapper = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

const NoteListHamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 2.16px;
  height: 10.48px;
  margin: auto;
`;

const NoteListHamburgerDot = styled.div`
  width: 2.16px;
  height: 2.16px;
  background: #ffffff;
  border-radius: 50%;
`;

const StyledMenuDropdown = styled(MenuDropdown)`
  top: 21px;
  padding: 10px;
  width: 121px;

  .menu-list {
    li {
      font-size: 12px;
      line-height: 18px;
      color: #292d32;

      :last-child {
        color: #ff6060;
      }

      :not(:last-child) {
        margin-bottom: 8px;
      }

      svg {
        margin-right: 13px;
      }
    }
  }
`;

const NoteSaveButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  left: 0;
  bottom: 30px;
  right: 0;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const NoteSaveButton = styled(Button)`
  background: #7b40f2;
  box-shadow: 0px 17px 33px rgba(123, 64, 242, 0.12);
  border-radius: 19px;
  padding: 11px;
  width: 105px;
  height: 38px;
  font-size: 10px;
  line-height: 15px;
  justify-content: center;
`;

const PopupNotes = ({ setShowPopupNotes }) => {
  const [showDropdown, setShowMenuDropdown] = useState({
    show: false,
    id: null,
  });

  return (
    <StyledPopupContainer onClick={() => setShowPopupNotes(false)}>
      <NotesPopup onClick={(e) => e.stopPropagation()}>
        <Note>
          <NoteNav>
            <Select>
              <Option>Normal</Option>
            </Select>
            <RichButtonWrapper>
              <img src="/images/editor/bold.svg" alt="bold" />
              <img src="/images/editor/italic.svg" alt="italic" />
              <img src="/images/editor/underline.svg" alt="underline" />
              <img src="/images/editor/text-left.svg" alt="text left" />
              <img src="/images/editor/text-center.svg" alt="text center" />
              <img
                src="/images/editor/text-justify-center.svg"
                alt="text justify center"
              />
            </RichButtonWrapper>
          </NoteNav>
          <DateNote>10 January 2021</DateNote>
          <NoteTitle contentEditable>Tes Tes Notes</NoteTitle>
          <DueDateWrapper>
            <TextContent>
              <CalendarIconWrapper>
                <FaCalendarAlt color="white" />
              </CalendarIconWrapper>
              <Text weight="medium">Due Date</Text>
            </TextContent>
            <TextContent>
              <Text weight="medium">15 January 2021</Text>
            </TextContent>
          </DueDateWrapper>
          <NoteTexts contentEditable></NoteTexts>
          <NoteSaveButtonWrapper>
            <NoteSaveButton>
              <FaEdit />
              Save Notes
            </NoteSaveButton>
          </NoteSaveButtonWrapper>
        </Note>
        <NoteLists>
          <NoteListNav>
            <NewNoteButton>
              <FaPlus /> Add new notes
            </NewNoteButton>
            <SearchNoteIcon>
              <FaSearch />
            </SearchNoteIcon>
          </NoteListNav>
          <NoteListsWrapper>
            <NoteList
              onMouseLeave={() =>
                setShowMenuDropdown({
                  show: false,
                  id: null,
                })
              }
            >
              <NoteListHeader>
                <NoteListTitle className="title">Here Tes Notes</NoteListTitle>
                <NoteListDetail>
                  <Text className="time">35 min ago</Text>
                  <NoteListHamburgerWrapper
                    onClick={() =>
                      setShowMenuDropdown({
                        show: true,
                        id: 1,
                      })
                    }
                  >
                    <NoteListHamburger>
                      <NoteListHamburgerDot />
                      <NoteListHamburgerDot />
                      <NoteListHamburgerDot />
                    </NoteListHamburger>
                    {showDropdown.show && showDropdown.id === 1 && (
                      <StyledMenuDropdown>
                        <MenuLists className="menu-list">
                          <Menu>
                            <FaEdit />
                            Edit Notes
                          </Menu>
                          <Menu>
                            <FaTrash />
                            Delete
                          </Menu>
                        </MenuLists>
                      </StyledMenuDropdown>
                    )}
                  </NoteListHamburgerWrapper>
                </NoteListDetail>
              </NoteListHeader>
              <NoteListDesc className="desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet...
              </NoteListDesc>
            </NoteList>
            <NoteList
              onMouseLeave={() =>
                setShowMenuDropdown({
                  show: false,
                  id: null,
                })
              }
            >
              <NoteListHeader>
                <NoteListTitle className="title">Here Tes Notes</NoteListTitle>
                <NoteListDetail>
                  <Text className="time">35 min ago</Text>
                  <NoteListHamburgerWrapper
                    onClick={() =>
                      setShowMenuDropdown({
                        show: true,
                        id: 2,
                      })
                    }
                  >
                    <NoteListHamburger>
                      <NoteListHamburgerDot />
                      <NoteListHamburgerDot />
                      <NoteListHamburgerDot />
                    </NoteListHamburger>
                    {showDropdown.show && showDropdown.id === 2 && (
                      <StyledMenuDropdown>
                        <MenuLists className="menu-list">
                          <Menu>
                            <FaEdit />
                            Edit Notes
                          </Menu>
                          <Menu>
                            <FaTrash />
                            Delete
                          </Menu>
                        </MenuLists>
                      </StyledMenuDropdown>
                    )}
                  </NoteListHamburgerWrapper>
                </NoteListDetail>
              </NoteListHeader>
              <NoteListDesc className="desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet...
              </NoteListDesc>
            </NoteList>
            <NoteList
              onMouseLeave={() =>
                setShowMenuDropdown({
                  show: false,
                  id: null,
                })
              }
            >
              <NoteListHeader>
                <NoteListTitle className="title">Here Tes Notes</NoteListTitle>
                <NoteListDetail>
                  <Text className="time">35 min ago</Text>
                  <NoteListHamburgerWrapper
                    onClick={() =>
                      setShowMenuDropdown({
                        show: true,
                        id: 3,
                      })
                    }
                  >
                    <NoteListHamburger>
                      <NoteListHamburgerDot />
                      <NoteListHamburgerDot />
                      <NoteListHamburgerDot />
                    </NoteListHamburger>
                    {showDropdown.show && showDropdown.id === 3 && (
                      <StyledMenuDropdown>
                        <MenuLists className="menu-list">
                          <Menu>
                            <FaEdit />
                            Edit Notes
                          </Menu>
                          <Menu>
                            <FaTrash />
                            Delete
                          </Menu>
                        </MenuLists>
                      </StyledMenuDropdown>
                    )}
                  </NoteListHamburgerWrapper>
                </NoteListDetail>
              </NoteListHeader>
              <NoteListDesc className="desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet...
              </NoteListDesc>
            </NoteList>
            <NoteList
              onMouseLeave={() =>
                setShowMenuDropdown({
                  show: false,
                  id: null,
                })
              }
            >
              <NoteListHeader>
                <NoteListTitle className="title">Here Tes Notes</NoteListTitle>
                <NoteListDetail>
                  <Text className="time">35 min ago</Text>
                  <NoteListHamburgerWrapper
                    onClick={() =>
                      setShowMenuDropdown({
                        show: true,
                        id: 4,
                      })
                    }
                  >
                    <NoteListHamburger>
                      <NoteListHamburgerDot />
                      <NoteListHamburgerDot />
                      <NoteListHamburgerDot />
                    </NoteListHamburger>
                    {showDropdown.show && showDropdown.id === 4 && (
                      <StyledMenuDropdown>
                        <MenuLists className="menu-list">
                          <Menu>
                            <FaEdit />
                            Edit Notes
                          </Menu>
                          <Menu>
                            <FaTrash />
                            Delete
                          </Menu>
                        </MenuLists>
                      </StyledMenuDropdown>
                    )}
                  </NoteListHamburgerWrapper>
                </NoteListDetail>
              </NoteListHeader>
              <NoteListDesc className="desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet...
              </NoteListDesc>
            </NoteList>
            <NoteList
              onMouseLeave={() =>
                setShowMenuDropdown({
                  show: false,
                  id: null,
                })
              }
            >
              <NoteListHeader>
                <NoteListTitle className="title">Here Tes Notes</NoteListTitle>
                <NoteListDetail>
                  <Text className="time">35 min ago</Text>
                  <NoteListHamburgerWrapper
                    onClick={() =>
                      setShowMenuDropdown({
                        show: true,
                        id: 5,
                      })
                    }
                  >
                    <NoteListHamburger>
                      <NoteListHamburgerDot />
                      <NoteListHamburgerDot />
                      <NoteListHamburgerDot />
                    </NoteListHamburger>
                    {showDropdown.show && showDropdown.id === 5 && (
                      <StyledMenuDropdown>
                        <MenuLists className="menu-list">
                          <Menu>
                            <FaEdit />
                            Edit Notes
                          </Menu>
                          <Menu>
                            <FaTrash />
                            Delete
                          </Menu>
                        </MenuLists>
                      </StyledMenuDropdown>
                    )}
                  </NoteListHamburgerWrapper>
                </NoteListDetail>
              </NoteListHeader>
              <NoteListDesc className="desc">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet...
              </NoteListDesc>
            </NoteList>
          </NoteListsWrapper>
        </NoteLists>
      </NotesPopup>
    </StyledPopupContainer>
  );
};
