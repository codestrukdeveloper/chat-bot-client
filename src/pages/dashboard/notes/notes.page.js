import styled from "styled-components";
import { ContentContainer } from "@/layouts/content-container.layout";
import Select, { Option } from "@/components/Form/Select";
import { RichButtonWrapper } from "@/components/Form/Textarea";
import Text from "@/components/Typography/Text";
import { Menu, MenuDropdown, MenuLists } from "@/components/Dropdown/Dropdown";
import { Button } from "@/components/Button/Button";
import { useState } from "react";

import {
  FaCalendarAlt,
  FaEdit,
  FaPlus,
  FaSearch,
  FaTrash,
} from "react-icons/fa";
import { useNavigate, useParams } from "react-router";

const NotesContainer = styled(ContentContainer)`
  display: flex;
  position: relative;
  background: white;

  @media screen and (max-width: 996px) {
    & {
      flex-direction: column;
      height: unset;
    }
  }
`;

const Note = styled.div`
  width: calc(100% - 400px);
  height: 100%;
  position: relative;

  @media screen and (max-width: 996px) {
    width: 100%;
    height: 80vh;
  }
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

  @media screen and (max-width: 996px) {
    width: 100%;
  }
`;

const DateNote = styled(Text)`
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  color: #adb5c2;
  margin-bottom: 10px;
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

  @media screen and (max-width: 996px) {
    font-size: 14px;
    line-height: 21px;
  }
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
  width: 400px;
  height: 100%;
  padding: 25px 15px 5px 15px;

  @media screen and (max-width: 996px) {
    & {
      width: 100%;
      padding: unset;
    }
  }
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

  @media screen and (max-width: 996px) {
    & {
      width: 100%;
      height: 58px;
    }
  }
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

  @media screen and (max-width: 996px) {
    & {
      display: none;
    }
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

  @media screen and (max-width: 996px) {
    & {
      height: 110px;
      padding: 16px;
    }
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

  @media screen and (max-width: 996px) {
    font-size: 14px;
    line-height: 21px;
  }
`;

const NoteListDesc = styled(Text)`
  font-size: 10px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #c1c7d4;
  margin-top: 8px;

  @media screen and (max-width: 996px) {
    font-size: 10px;
    line-height: 15px;
    letter-spacing: -0.02em;
  }
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

  @media screen and (max-width: 996px) {
    font-size: 10px;
    line-height: 15px;
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

  @media screen and (max-width: 996px) {
    width: max-content;

    ul {
      margin-top: unset;

      li {
        font-size: 12px;
        line-height: 18px;

        :hover {
          color: initial;
          background: initial;
        }
      }
    }

    ::before {
      display: none;
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

const Notes = () => {
  const [showDropdown, setShowMenuDropdown] = useState({
    show: false,
    id: null,
  });

  const navigate = useNavigate();
  const { noteId } = useParams();

  return (
    <NotesContainer>
      {noteId && (
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
          <NoteTexts contentEditable />
          <NoteSaveButtonWrapper>
            <NoteSaveButton>Save Notes</NoteSaveButton>
          </NoteSaveButtonWrapper>
        </Note>
      )}
      {!noteId && (
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
              onClick={() => navigate("1")}
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
      )}
    </NotesContainer>
  );
};

export default Notes;
