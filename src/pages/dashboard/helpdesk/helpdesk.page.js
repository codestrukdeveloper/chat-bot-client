import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

import Checkbox from "@/components/Form/Checkbox";
import Globe from "@/components/Icons/Globe";
import { Popup, PopupContainer } from "@/components/Popup/Popup";
import Input, { InputGroup } from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import { MyEditor } from "@/components/Editor/Editor";
import {
  MenuDropdown,
  MenuLists,
  Menu,
  MenuIcon,
} from "@/components/Dropdown/Dropdown";
import { ContentContainer } from "@/layouts/content-container.layout";
import Text from "@/components/Typography/Text";
import Hamburger from "@/components/Hamburger/Hamburger";
import { Button } from "@/components/Button/Button";

import {
  CategoryTitle,
  SidebarCategory,
  CategoryLists,
  ListCategory,
} from "@/components/Sidebar/Sidebar-Category";

import {
  HeaderButtons,
  HeaderCategory,
  HeaderTitle,
} from "@/components/Header/Header-Category";

import {
  FaChevronDown,
  FaChevronUp,
  FaCog,
  FaPlusSquare,
  FaQuestionCircle,
} from "react-icons/fa";

import TableContainer, {
  PaginationTable,
  Table,
  Tbody,
  TD,
  TH,
  Thead,
  TR,
} from "@/components/Table/Table";

import {
  ArrowLeftIcon,
  CloseIcon,
  ExportIcon,
  ExportIcon2,
  ImportIcon,
  TrashIcon,
} from "@/components/Icons";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import useChangeTitleNav from "@/hooks/useChangeTitleNav";
import { TextareaEditor } from "@/components/Form/Textarea";
import FileUpload from "@/components/FileUpload/FileUpload";

export default function HelpdeskPage() {
  const [showMenuCategory, setShowMenuCategory] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPopup, setShowPopup] = useState({
    show: false,
    currentStep: 1,
  });

  const [searchParams] = useSearchParams();
  const currentQuery = searchParams.get("q") ?? "articles";
  const hasTicketParams = searchParams.get("ticketId") ? true : false;
  const hasAction = searchParams.get("action") ?? false;

  const navigate = useNavigate();

  return (
    <>
      <HelpdeskContainer withFadeIn>
        <SidebarCategory isToggledByMobile={showMenuCategory && "open"}>
          <CategoryTitle weight="medium">Helpdesk</CategoryTitle>
          <CategoryLists className="category-list">
            <ListCategory
              className={`${currentQuery === "articles" && "active"}`}
              onClick={() => navigate("?q=articles")}
            >
              <Text size="xs">Articles</Text>
            </ListCategory>
            <ListCategory>
              <Text size="xs">Categories</Text>
            </ListCategory>
          </CategoryLists>

          <CategoryTitle weight="medium">Status</CategoryTitle>
          <CategoryLists className="category-list">
            <ListCategory>
              <Text size="xs">Published</Text>
            </ListCategory>
            <ListCategory>
              <Text size="xs">Draft</Text>
            </ListCategory>
            <ListCategory>
              <Text size="xs">Visible</Text>
            </ListCategory>
            <ListCategory>
              <Text size="xs">Hidden</Text>
            </ListCategory>
          </CategoryLists>

          <CategoryTitle weight="medium">Ticket</CategoryTitle>
          <CategoryLists className="category-list">
            <ListCategory
              className={`${currentQuery === "all-ticket" && "active"}`}
              onClick={() => navigate("?type=ticket&q=all-ticket")}
            >
              <Text size="xs">All ticket</Text>
            </ListCategory>
            <ListCategory>
              <Text size="xs">Open</Text>
            </ListCategory>
            <ListCategory>
              <Text size="xs">Closed</Text>
            </ListCategory>
          </CategoryLists>
        </SidebarCategory>
        <HelpdeskContent>
          {currentQuery === "articles" && (
            <HelpdeskArticles
              setShowDropdown={setShowDropdown}
              setShowPopup={setShowPopup}
              setShowMenuCategory={setShowMenuCategory}
              showDropdown={showDropdown}
              showMenuCategory={showMenuCategory}
            />
          )}
          {currentQuery === "all-ticket" && !hasTicketParams && !hasAction && (
            <AllTicket />
          )}
          {hasAction === "create" && <CreateTicket />}
          {hasTicketParams && <TicketById />}
        </HelpdeskContent>
      </HelpdeskContainer>
      {showPopup.show && (
        <ArticlePopup showPopup={showPopup} setShowPopup={setShowPopup} />
      )}
    </>
  );
}

const StyledHeaderTitleCreateTicket = styled(HeaderTitle)`
  @media screen and (max-width: 996px) {
    text-align: center;
    width: 100%;
  }
`;

const CreateTicket = () => {
  return (
    <>
      <HeaderCategory>
        <StyledHeaderTitleCreateTicket weight="semi-bold">
          Create Ticket
        </StyledHeaderTitleCreateTicket>
      </HeaderCategory>
      <FormAddTicketWrapper as="div">
        <InputGroup className="input-group">
          <Label>Ticket Title</Label>
          <Input placeholder="Write In Here" />
        </InputGroup>
        <InputGroup className="input-group">
          <Label>Subject</Label>
          <Input placeholder="Write In Here" />
        </InputGroup>
        <InputGroup className="input-group">
          <Label>Description</Label>
          <TextareaEditor showButton={false} className="textarea-editor" />
        </InputGroup>
        <InputGroup className="input-group">
          <Label>
            Upload File{" "}
            <span className="normal-text">(Images and pdf only)</span>
          </Label>
          <FileUpload
            showButton
            showDesc={false}
            type="file"
            className="file-upload"
          />
        </InputGroup>
        <Button>Submit</Button>
      </FormAddTicketWrapper>
    </>
  );
};

const AllTicket = () => {
  const [, setTitleNav] = useChangeTitleNav();
  const navigate = useNavigate();
  const [searchParams, setSearhcParams] = useSearchParams();

  useEffect(() => {
    setTitleNav("Ticket");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSearhcParams, setTitleNav]);

  return (
    <>
      <HeaderCategory>
        <Hamburger
          lineColor="cb-purple"
          line={2}
          // onClick={() => setShowMenuCategory(!showMenuCategory)}
        />
        <HeaderTitle weight="semi-bold">All Ticket</HeaderTitle>
        <HeaderButtons>
          <Button
            className="show"
            style={{ display: "none" }}
            onClick={() => navigate(`/create-ticket`)}
          >
            <FaPlusSquare style={{ borderRadius: "8px" }} />
            <span>Create Ticket</span>
          </Button>
          <Button className="show" onClick={() => navigate(`/create-ticket`)}>
            <FaPlusSquare style={{ borderRadius: "8px" }} />
            <span>Create Ticket</span>
          </Button>
          <Button
            className="show"
            style={{ display: "none" }}
            onClick={() => navigate(`/create-ticket`)}
          >
            <FaPlusSquare style={{ borderRadius: "8px" }} />
            <span>Create Ticket</span>
          </Button>
        </HeaderButtons>
      </HeaderCategory>
      <TableWrapperAllTicket>
        <Table>
          <Thead></Thead>
          <Tbody>
            <TR className="title-type">
              <TD>Last Updated</TD>
              <TD>
                <PaginationTable className="pagination" currentPage={1} />
              </TD>
            </TR>
            <TR
              onClick={() => navigate(`?${searchParams.toString()}&ticketId=1`)}
            >
              <TD>
                <TicketWrap>
                  <TicketAvatar />
                  <TicketDetailWrap>
                    <TicketTitle>Ticket Not Working</TicketTitle>
                    <TicketDesc>
                      <span>1 Days ago</span>
                      <span>More Department</span>
                    </TicketDesc>
                  </TicketDetailWrap>
                </TicketWrap>
              </TD>
              <TD>
                <TicketButtonsAction>
                  <TicketButton>
                    <img src="/images/tickets/message-text.svg" alt="message" />
                  </TicketButton>
                  <TicketButton>
                    <img src="/images/tickets/global.svg" alt="global" />
                  </TicketButton>
                </TicketButtonsAction>
              </TD>
            </TR>
            <TR>
              <TD>
                <TicketWrap>
                  <TicketAvatar active />
                  <TicketDetailWrap>
                    <TicketTitle>Ticket Not Secure</TicketTitle>
                    <TicketDesc>
                      <span>1 Days ago</span>
                      <span>More Department</span>
                    </TicketDesc>
                  </TicketDetailWrap>
                </TicketWrap>
              </TD>
              <TD>
                <TicketButtonsAction>
                  <TicketButton>
                    <img src="/images/tickets/message-text.svg" alt="message" />
                  </TicketButton>
                  <TicketButton>
                    <img src="/images/tickets/global.svg" alt="global" />
                  </TicketButton>
                </TicketButtonsAction>
              </TD>
            </TR>
            <TR>
              <TD>
                <TicketWrap>
                  <TicketAvatar active />
                  <TicketDetailWrap>
                    <TicketTitle>Loading is very slow very bad</TicketTitle>
                    <TicketDesc>
                      <span>1 Days ago</span>
                      <span>More Department</span>
                    </TicketDesc>
                  </TicketDetailWrap>
                </TicketWrap>
              </TD>
              <TD>
                <TicketButtonsAction>
                  <TicketButton>
                    <img src="/images/tickets/message-text.svg" alt="message" />
                  </TicketButton>
                  <TicketButton>
                    <img src="/images/tickets/global.svg" alt="global" />
                  </TicketButton>
                </TicketButtonsAction>
              </TD>
            </TR>
            <TR>
              <TD>
                <TicketWrap>
                  <TicketAvatar />
                  <TicketDetailWrap>
                    <TicketTitle>Ticket Not Working</TicketTitle>
                    <TicketDesc>
                      <span>1 Days ago</span>
                      <span>More Department</span>
                    </TicketDesc>
                  </TicketDetailWrap>
                </TicketWrap>
              </TD>
              <TD>
                <TicketButtonsAction>
                  <TicketButton>
                    <img src="/images/tickets/message-text.svg" alt="message" />
                  </TicketButton>
                  <TicketButton>
                    <img src="/images/tickets/global.svg" alt="global" />
                  </TicketButton>
                </TicketButtonsAction>
              </TD>
            </TR>
            <TR>
              <TD>
                <TicketWrap>
                  <TicketAvatar />
                  <TicketDetailWrap>
                    <TicketTitle>Ticket Not Working</TicketTitle>
                    <TicketDesc>
                      <span>1 Days ago</span>
                      <span>More Department</span>
                    </TicketDesc>
                  </TicketDetailWrap>
                </TicketWrap>
              </TD>
              <TD>
                <TicketButtonsAction>
                  <TicketButton>
                    <img src="/images/tickets/message-text.svg" alt="message" />
                  </TicketButton>
                  <TicketButton>
                    <img src="/images/tickets/global.svg" alt="global" />
                  </TicketButton>
                </TicketButtonsAction>
              </TD>
            </TR>
            <TR>
              <TD>
                <TicketWrap>
                  <TicketAvatar />
                  <TicketDetailWrap>
                    <TicketTitle>Ticket Not Working</TicketTitle>
                    <TicketDesc>
                      <span>1 Days ago</span>
                      <span>More Department</span>
                    </TicketDesc>
                  </TicketDetailWrap>
                </TicketWrap>
              </TD>
              <TD>
                <TicketButtonsAction>
                  <TicketButton>
                    <img src="/images/tickets/message-text.svg" alt="message" />
                  </TicketButton>
                  <TicketButton>
                    <img src="/images/tickets/global.svg" alt="global" />
                  </TicketButton>
                </TicketButtonsAction>
              </TD>
            </TR>
            <TR>
              <TD>
                <TicketWrap>
                  <TicketAvatar />
                  <TicketDetailWrap>
                    <TicketTitle>Ticket Not Working</TicketTitle>
                    <TicketDesc>
                      <span>1 Days ago</span>
                      <span>More Department</span>
                    </TicketDesc>
                  </TicketDetailWrap>
                </TicketWrap>
              </TD>
              <TD>
                <TicketButtonsAction>
                  <TicketButton>
                    <img src="/images/tickets/message-text.svg" alt="message" />
                  </TicketButton>
                  <TicketButton>
                    <img src="/images/tickets/global.svg" alt="global" />
                  </TicketButton>
                </TicketButtonsAction>
              </TD>
            </TR>
            <TR>
              <TD>
                <TicketWrap>
                  <TicketAvatar />
                  <TicketDetailWrap>
                    <TicketTitle>Ticket Not Working</TicketTitle>
                    <TicketDesc>
                      <span>1 Days ago</span>
                      <span>More Department</span>
                    </TicketDesc>
                  </TicketDetailWrap>
                </TicketWrap>
              </TD>
              <TD>
                <TicketButtonsAction>
                  <TicketButton>
                    <img src="/images/tickets/message-text.svg" alt="message" />
                  </TicketButton>
                  <TicketButton>
                    <img src="/images/tickets/global.svg" alt="global" />
                  </TicketButton>
                </TicketButtonsAction>
              </TD>
            </TR>
          </Tbody>
        </Table>
      </TableWrapperAllTicket>
    </>
  );
};

const TicketById = () => {
  const [toggleCloseTicket, setToggleCloseTicket] = useState(true);

  return (
    <>
      <HeaderCategory>
        <StyledHeaderTitle>
          <TicketCloseHamburger
            className={`${!toggleCloseTicket && "active"}`}
            onClick={() => setToggleCloseTicket(!toggleCloseTicket)}
          >
            <DotHambugerClose />
            <DotHambugerClose />
            <DotHambugerClose />
            {!toggleCloseTicket && (
              <StyledMenuDropdownTicket>
                <MenuLists>
                  <Menu>Close Ticket</Menu>
                </MenuLists>
              </StyledMenuDropdownTicket>
            )}
          </TicketCloseHamburger>
          Ticket Not Working
        </StyledHeaderTitle>
      </HeaderCategory>
      <TicketContents>
        <TicketMessages>
          <TicketMessage>
            <TicketMessageHeader>
              <TicketProfileWrap>
                <TicketProfile>
                  <img
                    alt="avatar"
                    src="/images/tickets/profile/avatar-2.png"
                  />
                </TicketProfile>
                <TicketProfileName>
                  <Text>Lorem Ipsum</Text>
                  <Text>August 2, 2021 (18:00 PM)</Text>
                </TicketProfileName>
              </TicketProfileWrap>
              <TicketLastTime>(1 Days Ago)</TicketLastTime>
            </TicketMessageHeader>
            <TicketMessageContent>
              <Text>Not Good</Text>
            </TicketMessageContent>
          </TicketMessage>
          <TicketMessage>
            <TicketMessageHeader>
              <TicketProfileWrap>
                <TicketProfile>
                  <img
                    alt="avatar"
                    src="/images/tickets/profile/avatar-2.png"
                  />
                </TicketProfile>
                <TicketProfileName>
                  <Text>Lorem Ipsum</Text>
                  <Text>August 2, 2021 (18:00 PM)</Text>
                </TicketProfileName>
              </TicketProfileWrap>
              <TicketLastTime>(1 Days Ago)</TicketLastTime>
            </TicketMessageHeader>
            <TicketMessageContent>
              <Text>Not Good</Text>
            </TicketMessageContent>
          </TicketMessage>
          <TicketMessage>
            <TicketMessageHeader>
              <TicketProfileWrap>
                <TicketProfile>
                  <img
                    alt="avatar"
                    src="/images/tickets/profile/avatar-2.png"
                  />
                </TicketProfile>
                <TicketProfileName>
                  <Text>Lorem Ipsum</Text>
                  <Text>August 2, 2021 (18:00 PM)</Text>
                </TicketProfileName>
              </TicketProfileWrap>
              <TicketLastTime>(1 Days Ago)</TicketLastTime>
            </TicketMessageHeader>
            <TicketMessageContent>
              <Text>Not Good</Text>
            </TicketMessageContent>
          </TicketMessage>
          <TicketMessage>
            <TicketMessageHeader>
              <TicketProfileWrap>
                <TicketProfile>
                  <img
                    alt="avatar"
                    src="/images/tickets/profile/avatar-2.png"
                  />
                </TicketProfile>
                <TicketProfileName>
                  <Text>Lorem Ipsum</Text>
                  <Text>August 2, 2021 (18:00 PM)</Text>
                </TicketProfileName>
              </TicketProfileWrap>
              <TicketLastTime>(1 Days Ago)</TicketLastTime>
            </TicketMessageHeader>
            <TicketMessageContent>
              <Text>Not Good</Text>
            </TicketMessageContent>
          </TicketMessage>
        </TicketMessages>
        <StyledTextareaEditor stickyBottom />
      </TicketContents>
    </>
  );
};

const HelpdeskArticles = ({
  setShowDropdown,
  setShowPopup,
  setShowMenuCategory,
  showDropdown,
  showMenuCategory,
}) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.querySelector(".page-title-nav").textContent = "Articles";
  }, []);

  return (
    <>
      <HeaderCategory>
        <Hamburger
          lineColor="cb-purple"
          line={2}
          onClick={() => setShowMenuCategory(!showMenuCategory)}
        />
        <HeaderTitle weight="semi-bold">Articles</HeaderTitle>
        <HeaderButtons>
          <Button color="cb-blue" onClick={() => navigate("/docs")}>
            <FaQuestionCircle />
            Documentation
          </Button>
          <Button
            onClick={() => setShowPopup((prev) => ({ ...prev, show: true }))}
          >
            <FaPlusSquare style={{ borderRadius: "8px" }} />
            <span>New Article</span>
          </Button>
          <Button
            onClick={() => setShowDropdown(!showDropdown)}
            bordered
            style={{ position: "relative" }}
          >
            Actions <FaChevronDown />
            {showDropdown && (
              <StyledMenuDropdown>
                <MenuLists>
                  <Menu>
                    <MenuIcon>
                      <ExportIcon />
                    </MenuIcon>
                    View my helpdesk
                  </Menu>
                  <Menu>
                    <MenuIcon>
                      <Globe />
                    </MenuIcon>
                    Add a new language
                  </Menu>
                  <Menu>
                    <MenuIcon>
                      <ImportIcon />
                    </MenuIcon>
                    Import articles
                  </Menu>
                  <Menu>
                    <MenuIcon>
                      <ExportIcon2 />
                    </MenuIcon>
                    Export articles
                  </Menu>
                  <Menu>
                    <MenuIcon>
                      <TrashIcon />
                    </MenuIcon>
                    Destroy curent language
                  </Menu>
                </MenuLists>
              </StyledMenuDropdown>
            )}
          </Button>
        </HeaderButtons>
      </HeaderCategory>
      <TableWrapper>
        <Table>
          <Thead>
            <TR>
              <TH>Article Title</TH>
              <TH>Status</TH>
              <TH>Statistics</TH>
              <TH>Last Update</TH>
              <TH>Actions</TH>
            </TR>
          </Thead>
          <Tbody>
            <TR className="title-type">
              <TD colSpan={4}>Social</TD>
              <TD colSpan={1}>
                <PaginationTable className="pagination" currentPage={1} />
                <Button
                  onClick={() => setShowDropdown(!showDropdown)}
                  bordered
                  style={{ position: "relative" }}
                >
                  Actions <FaChevronDown />
                  {showDropdown && (
                    <StyledMenuDropdown>
                      <MenuLists>
                        <Menu>
                          <MenuIcon>
                            <ExportIcon />
                          </MenuIcon>
                          View my helpdesk
                        </Menu>
                        <Menu>
                          <MenuIcon>
                            <Globe />
                          </MenuIcon>
                          Add a new language
                        </Menu>
                        <Menu>
                          <MenuIcon>
                            <ImportIcon />
                          </MenuIcon>
                          Import articles
                        </Menu>
                        <Menu>
                          <MenuIcon>
                            <ExportIcon2 />
                          </MenuIcon>
                          Export articles
                        </Menu>
                        <Menu>
                          <MenuIcon>
                            <TrashIcon />
                          </MenuIcon>
                          Destroy curent language
                        </Menu>
                      </MenuLists>
                    </StyledMenuDropdown>
                  )}
                </Button>
              </TD>
            </TR>
            <TR>
              <TD>
                <Checkbox
                  htmlFor={`checkbox1`}
                  inputId={`checkbox1`}
                  textClassName="text-checkbox"
                >
                  Lorem Ipsum Campaign
                </Checkbox>
              </TD>
              <TD>Draft</TD>
              <TD>
                <span>1 Visits</span>
              </TD>
              <TD>
                <span>3 Nov</span>
              </TD>
              <TD>
                <span className="setting-icon">
                  <FaCog
                    size="18px"
                    color="#CED2E0"
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </TD>
            </TR>
            <TR>
              <TD>
                <Checkbox
                  htmlFor={`checkbox2`}
                  inputId={`checkbox2`}
                  textClassName="text-checkbox"
                >
                  Lorem Ipsum Campaign
                </Checkbox>
              </TD>
              <TD>Draft</TD>
              <TD>
                <span>1 Visits</span>
              </TD>
              <TD>
                <span>3 Nov</span>
              </TD>
              <TD>
                <span className="setting-icon">
                  <FaCog
                    size="18px"
                    color="#CED2E0"
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </TD>
            </TR>
            <TR>
              <TD>
                <Checkbox
                  htmlFor={`checkbox3`}
                  inputId={`checkbox3`}
                  textClassName="text-checkbox"
                >
                  Lorem Ipsum Campaign
                </Checkbox>
              </TD>
              <TD>Draft</TD>
              <TD>
                <span>1 Visits</span>
              </TD>
              <TD>
                <span>3 Nov</span>
              </TD>
              <TD>
                <span className="setting-icon">
                  <FaCog
                    size="18px"
                    color="#CED2E0"
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </TD>
            </TR>
            <TR>
              <TD>
                <Checkbox
                  htmlFor={`checkbox4`}
                  inputId={`checkbox4`}
                  textClassName="text-checkbox"
                >
                  Lorem Ipsum Campaign
                </Checkbox>
              </TD>
              <TD>Draft</TD>
              <TD>
                <span>1 Visits</span>
              </TD>
              <TD>
                <span>3 Nov</span>
              </TD>
              <TD>
                <span className="setting-icon">
                  <FaCog
                    size="18px"
                    color="#CED2E0"
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </TD>
            </TR>
            <TR>
              <TD>
                <Checkbox
                  htmlFor={`checkbox5`}
                  inputId={`checkbox5`}
                  textClassName="text-checkbox"
                >
                  Lorem Ipsum Campaign
                </Checkbox>
              </TD>
              <TD>Draft</TD>
              <TD>
                <span>1 Visits</span>
              </TD>
              <TD>
                <span>3 Nov</span>
              </TD>
              <TD>
                <span className="setting-icon">
                  <FaCog
                    size="18px"
                    color="#CED2E0"
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </TD>
            </TR>
            <TR>
              <TD>
                <Checkbox
                  htmlFor={`checkbox6`}
                  inputId={`checkbox6`}
                  textClassName="text-checkbox"
                >
                  Lorem Ipsum Campaign
                </Checkbox>
              </TD>
              <TD>Draft</TD>
              <TD>
                <span>1 Visits</span>
              </TD>
              <TD>
                <span>3 Nov</span>
              </TD>
              <TD>
                <span className="setting-icon">
                  <FaCog
                    size="18px"
                    color="#CED2E0"
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </TD>
            </TR>
            <TR>
              <TD>
                <Checkbox
                  htmlFor={`checkbox7`}
                  inputId={`checkbox7`}
                  textClassName="text-checkbox"
                >
                  Lorem Ipsum Campaign
                </Checkbox>
              </TD>
              <TD>Draft</TD>
              <TD>
                <span>1 Visits</span>
              </TD>
              <TD>
                <span>3 Nov</span>
              </TD>
              <TD>
                <span className="setting-icon">
                  <FaCog
                    size="18px"
                    color="#CED2E0"
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </TD>
            </TR>
            <TR>
              <TD>
                <Checkbox
                  htmlFor={`checkbox8`}
                  inputId={`checkbox8`}
                  textClassName="text-checkbox"
                >
                  Lorem Ipsum Campaign
                </Checkbox>
              </TD>
              <TD>Draft</TD>
              <TD>
                <span>1 Visits</span>
              </TD>
              <TD>
                <span>3 Nov</span>
              </TD>
              <TD>
                <span className="setting-icon">
                  <FaCog
                    size="18px"
                    color="#CED2E0"
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </TD>
            </TR>
            <TR>
              <TD>
                <Checkbox
                  htmlFor={`checkbox9`}
                  inputId={`checkbox9`}
                  textClassName="text-checkbox"
                >
                  Lorem Ipsum Campaign
                </Checkbox>
              </TD>
              <TD>Draft</TD>
              <TD>
                <span>1 Visits</span>
              </TD>
              <TD>
                <span>3 Nov</span>
              </TD>
              <TD>
                <span className="setting-icon">
                  <FaCog
                    size="18px"
                    color="#CED2E0"
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </TD>
            </TR>
            <TR>
              <TD>
                <Checkbox
                  htmlFor={`checkbox10`}
                  inputId={`checkbox10`}
                  textClassName="text-checkbox"
                >
                  Lorem Ipsum Campaign
                </Checkbox>
              </TD>
              <TD>Draft</TD>
              <TD>
                <span>1 Visits</span>
              </TD>
              <TD>
                <span>3 Nov</span>
              </TD>
              <TD>
                <span className="setting-icon">
                  <FaCog
                    size="18px"
                    color="#CED2E0"
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </TD>
            </TR>
          </Tbody>
        </Table>
        <PaginationTable
          colorPrevNext="#adb5c2"
          className="pagination-mobile"
          currentPage={1}
        />
      </TableWrapper>
    </>
  );
};

const ArticlePopup = ({ showPopup, setShowPopup }) => {
  return (
    <PopupContainer>
      {showPopup.currentStep === 1 ? (
        <CreateTitleArticlePopup setShowPopup={setShowPopup} />
      ) : (
        <CreateNewArticlePopup
          setShowPopup={setShowPopup}
          showPopup={showPopup}
        />
      )}
    </PopupContainer>
  );
};

const CreateTitleArticlePopup = ({ setShowPopup }) => {
  return (
    <ArticlePopupWrapper>
      <TextTitleWrapper>
        <Text weight="medium" size="lg">
          Add an article to your helpdesk
        </Text>
        <Text size="xs" className="desc">
          The article will be added to the helpdesk language: English
        </Text>
      </TextTitleWrapper>
      <InputGroupWrapper>
        <InputGroup>
          <Label requiredIcon>Title of the article</Label>
          <Input placeholder="Enter a title for your article..." />
        </InputGroup>
      </InputGroupWrapper>
      <ButtonWrapperNewArticle>
        <CreateArticleButton
          onClick={() => setShowPopup((prev) => ({ ...prev, currentStep: 2 }))}
        >
          Create Article
        </CreateArticleButton>
      </ButtonWrapperNewArticle>
      <CloseWrapper
        onClick={() => setShowPopup({ show: false, currentStep: 1 })}
      >
        <CloseIcon />
      </CloseWrapper>
    </ArticlePopupWrapper>
  );
};

const StyledEditor = styled(MyEditor)`
  @media screen and (max-width: 996px) {
    margin-top: 30px;
  }
`;

const CreateNewArticlePopup = ({ setShowPopup, showPopup }) => {
  const [clickedSettingEditor, setClickedSettingEditor] = useState(false);

  return (
    <>
      <NewArticlePopupWrapper>
        <HeaderMobile>
          <ArrowLeftIcon />
        </HeaderMobile>
        <StyledEditor />
        <CloseWrapper
          className="close"
          onClick={() => setShowPopup({ show: false, currentStep: 1 })}
        >
          <CloseIcon />
        </CloseWrapper>
        <ButtonWrapper
          className={`${showPopup.currentStep === 2 && "fixed-bottom"}`}
        >
          <SettingWrapper className={clickedSettingEditor && "open-setting"}>
            <FlexWrap>
              <img src="/images/templates.svg" alt="template" />
              <Text size="sm" className="name">
                Templates
              </Text>
            </FlexWrap>
            <FlexWrap>
              <img src="/images/setting.svg" alt="setting" />
              <Text size="sm" className="name">
                Options
              </Text>
            </FlexWrap>
            <FlexWrap>
              <Text size="sm">Send In:</Text>
              <SendInWrapper>
                <input type="checkbox" />
                <Text size="sm">Chat</Text>
                <input type="checkbox" className="email-input" />
                <Text size="sm">Email</Text>
              </SendInWrapper>
            </FlexWrap>
            <FlexWrap>
              <Text size="sm">Send as:</Text>
              <ProfileWrap>
                <img src="/images/avatar-default.svg" alt="avatar" />
                <Text size="sm">Veven Night</Text>
                <FaChevronUp />
              </ProfileWrap>
            </FlexWrap>
            <FlexWrap>
              <Text size="sm">Recipients: 1</Text>
            </FlexWrap>
          </SettingWrapper>

          <SettingEditorWrapper
            onClick={() => setClickedSettingEditor(!clickedSettingEditor)}
            className="set"
          >
            <FaCog color="#7B40F2" />
          </SettingEditorWrapper>
          <Button onClick={() => setShowPopup({ show: false, currentStep: 1 })}>
            Save Draft
          </Button>
        </ButtonWrapper>
      </NewArticlePopupWrapper>
    </>
  );
};

const HelpdeskContainer = styled(ContentContainer)`
  display: flex;
  position: relative;
`;

const HelpdeskContent = styled.div`
  width: calc(100% - 208px);
  border: 1px solid #f1f4f9;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 29px 30px;

  @media screen and (max-width: 996px) {
    & {
      width: 100%;
      padding: unset;
      border: unset;
    }
  }
`;

const StyledMenuDropdown = styled(MenuDropdown)`
  top: 53px;
`;

const ArticlePopupWrapper = styled(Popup)`
  width: 614px;
  height: 364px;
  position: relative;

  @media screen and (max-width: 996px) {
    & {
      position: fixed;
      inset: 0;
      height: 100vh;
      overflow-y: auto;
      width: 100%;
      border-radius: unset;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

const TableWrapper = styled(TableContainer)`
  margin-top: 30px;
  height: calc(100vh - 283.5px);
  padding-right: 15px;
  overflow-y: auto;

  .pagination-mobile {
    display: none;
  }

  table {
    thead {
      tr {
        th:first-child {
          text-align: left;
        }

        th:last-child {
          text-align: right;
        }
      }
    }

    tbody {
      tr.title-type {
        .pagination {
          display: flex;
        }

        button {
          display: none;
        }
      }

      tr:not(tr:first-child) {
        td {
          :first-child {
            color: #292d32;
            p {
              font-weight: 500;
            }
          }

          :nth-child(2) {
            color: #adb5c2;
            font-weight: 500;
          }

          :nth-child(3) {
            span {
              display: block;
              color: #fff;
              margin: auto;
              padding: 6px 15px;
              background: #1d0e3d;
              border-radius: 24px;
              width: max-content;
              line-height: 18px;
              font-weight: 500;
            }
          }

          :nth-child(4) {
            color: #292d32;
            line-height: 18px;
            font-weight: 500;
          }

          :last-child {
            text-align: right;
            padding: 11px 36px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 996px) {
    & {
      height: unset;

      .pagination-mobile {
        display: flex;
        margin-bottom: 27px;
        padding-right: unset;
        width: 100%;
        justify-content: center;
      }

      table {
        tbody {
          tr.title-type {
            .pagination {
              display: none;
            }

            button {
              display: flex;

              svg {
                margin-right: unset;
                margin-left: 8px;
              }
            }
          }
        }

        tr {
          :not(tr:nth-child(1)) td {
            span {
              font-size: ${(props) => props.theme.fontSize["xs"]};
            }

            :first-child {
              display: none;
            }

            ::before {
              color: #adb5c2;
            }

            :nth-child(2) {
              order: 2;

              ::before {
                content: "Status";
              }
            }

            :nth-child(3) {
              order: 3;
              align-items: center;

              span {
                margin: unset !important;
              }

              ::before {
                content: "Statistics";
                font-weight: 500;
              }
            }

            :nth-child(4) {
              order: 4;
              padding-bottom: 35px;

              ::before {
                content: "Last Update";
              }
            }

            :nth-child(5) {
              order: 1;
              align-items: center;
              justify-content: flex-end;
              position: relative;

              ::before {
                width: 172px;
                content: "Lorem Ipsum Campaign";
                color: #292d32;
                font-weight: 500;
                position: absolute;
                left: 25px;
                word-break: break;
              }
            }
          }
        }
      }
    }
  }
`;

const TextTitleWrapper = styled.div`
  text-align: center;
  margin-top: 60px;

  .desc {
    color: #adb5c2;
    line-height: 26px;
    margin-top: 15px;
  }

  @media screen and (max-width: 996px) {
    margin-top: unset;
  }
`;

const InputGroupWrapper = styled.div`
  margin-top: 34px;
`;

const ButtonWrapperNewArticle = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const CreateArticleButton = styled(Button)`
  margin-top: 42px;
  padding: 15px 64px;
`;

const CloseWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background: #f4f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 16px;

  svg {
    path {
      stroke: #000;
    }
  }

  @media screen and (max-width: 996px) {
    top: 24px;
    right: 24px;
  }
`;

const NewArticlePopupWrapper = styled(Popup)`
  width: 1242px;
  height: 728px;
  position: relative;
  padding: 30px 80px;
  overflow: hidden;

  @media screen and (max-width: 996px) {
    height: auto;
    width: 100%;
    border-radius: unset;
    position: fixed;
    inset: 0;
    padding: 20px;

    .close {
      display: none;
    }
  }
`;

const SettingWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 996px) {
    & {
      position: fixed;
      left: 0;
      right: 0;
      bottom: -376px;
      height: 376px;
      transition: 0.5s;
      flex-direction: column;
      background: white;
      padding: 24px 22px;
      box-shadow: 0px -5px 22px rgba(0, 0, 0, 0.05);
      z-index: 300;

      ::before {
        content: "Settings";
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 25px;
      }

      &.open-setting {
        transition: 0.5s;
        bottom: 0;
      }
    }
  }
`;

const FlexWrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 20px;
  }

  .name {
    margin-left: 10px;
  }

  @media screen and (max-width: 996px) {
    & {
      margin-bottom: 25px;

      :last-child {
        display: none;
      }
    }

    &:not(:first-child) {
      margin-left: unset;
    }
  }
`;

const SendInWrapper = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;

  .email-input {
    margin-left: 14px;
  }
`;

const ProfileWrap = styled.div`
  padding: 6px 10px;
  display: flex;
  border-radius: 6px;
  border: 1px solid #f1f4f9;
  background: #ffffff;
  margin-left: 10px;
  align-items: center;

  p {
    margin-left: 6px;
  }

  svg {
    margin-left: 10px;
    width: 15px;
    height: 15px;
  }
`;

const ButtonWrapper = styled.div`
  // width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 104px;
  background: #f9fafe;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;

  button {
    width: 220px;
    justify-content: center;
  }

  @media screen and (max-width: 996px) {
    & {
      position: relative;
      height: 71px;

      button {
        position: absolute;
        right: 20px;
        top: 10px;
        bottom: 10px;
      }

      &.fixed-bottom {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        margin-left: unset;
        margin-right: unset;
        border-radius: 0px 0px 20px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
          right: 20px;
          border-radius: 6px;
        }

        .set {
          position: absolute;
          left: 20px;
          cursor: pointer;
        }
      }
    }
  }
`;

const SettingEditorWrapper = styled.div`
  display: none;
  padding: 8px;
  width: 40px;
  height: 40px;
  background: #ffffff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 996px) {
    & {
      display: flex;
      z-index: 500;
    }
  }
`;

const HeaderMobile = styled.div`
  display: none;

  svg {
    cursor: pointer;
  }

  @media screen and (max-width: 996px) {
    display: flex;
    position: sticky;
    align-items: center;
    top: -20px;
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.05);
    height: 72px;
    padding-left: 20px;
    margin: -20px -20px 0 -20px;
  }
`;

const TableWrapperAllTicket = styled(TableContainer)`
  height: calc(100% - 17px);
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 996px) {
    height: auto;
    margin-top: 21px;
  }

  table {
    tbody {
      tr {
        td {
          :first-child {
            color: #292d32;
            line-height: 21px;
            font-size: ${(props) => props.theme.fontSize["sm"]};
            font-weight: ${(props) => props.theme.fontWeight["medium"]};
          }
        }

        :not(:first-child) {
          @media screen and (min-width: 768px) {
            :hover {
              background-color: #f9fafe;
            }
          }

          td {
            :first-child {
              p {
                font-weight: 500;
                font-size: 14px;
                line-height: 21px;
              }

              // span {
              //   display: none;
              // }
            }
          }
        }
      }
    }
  }
`;

const TicketWrap = styled.div`
  display: flex;
  align-items: center;
`;

const TicketDetailWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const TicketTitle = styled(Text)`
  cursor: pointer;
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  font-size: ${(props) => props.theme.fontSize["xs"]};
  line-height: 18px;
`;

const TicketDesc = styled.div`
  display: flex;
  font-size: 10px;
  line-height: 15px;
  margin-top: 2px;

  span {
    color: #292d32;

    :first-child {
      margin-right: 8px;
    }
  }
`;

const TicketAvatar = styled.div`
  width: 43px;
  height: 43px;
  border-radius: 21.5px;
  border: 1.5px solid #f1f4f9;
  position: relative;
  background: #f1f4f9;
  margin-right: 20px;
  z-index: 5;

  ::after {
    content: "";
    display: block;
    position: absolute;
    inset: 0;
    background: url("/images/tickets/profile/avatar.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 24px 24px;
    z-index: 2;
    transform: translateX(1px);
  }

  ::before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #adb5c2;
    border: 1.5px solid #f1f4f9;
    z-index: 3;
  }

  ${(props) =>
    props.active &&
    `
    ::before {
      background: #32B874;
      border: 1.5px solid #F1F4F9;
    }
  `}
`;

const TicketButtonsAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const TicketButton = styled.div`
  width: 40px;
  height: 40px;
  background: #f9fafe;
  border-radius: 10px;
  padding: 8px;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }

  :last-child {
    margin-left: 12px;
  }
`;

const TicketContents = styled.div`
  height: calc(100% - 64px);
  margin-top: 30px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors["cb-purple"]};
    border-radius: 20px;
  }

  @media screen and (max-width: 996px) {
    height: calc(100% - 94px);
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 0;
    }
  }
`;

const TicketMessage = styled.div`
  border-radius: 15px;
  border: 1px solid #e3e6f3;
  padding: 20px;

  :not(:last-child) {
    margin-bottom: 15px;
  }

  :last-child {
    height: 186px;
  }
`;

const TicketProfileWrap = styled.div`
  display: flex;
`;

const TicketLastTime = styled(Text)`
  font-size: ${(props) => props.theme.fontSize["xs"]};
  line-height: 18px;
  color: #cfcfde;
`;

const TicketProfileName = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;

  p {
    :first-child {
      line-height: 21px;
      font-weight: ${(props) => props.theme.fontWeight["medium"]};
      color: #292d32;
      font-size: ${(props) => props.theme.fontSize["sm"]};
    }

    :last-child {
      font-size: ${(props) => props.theme.fontSize["xs"]};
      line-height: 18px;
      color: #cfcfde;
    }
  }
`;

const TicketProfile = styled.div`
  width: 41px;
  height: 41px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const TicketMessageHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TicketMessageContent = styled.div`
  padding-left: 57px;
  margin-top: 20px;
  line-height: 24px;
  font-weight: 500;
`;

const TicketMessages = styled.div`
  display: flex;
  flex-direction: column;
`;

const TicketCloseHamburger = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid #e3e6f3;
  padding: 10px 17px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;

  &.active {
    border-color: ${(props) => props.theme.colors["cb-purple"]};
    transition: 0.3s;

    span {
      background: ${(props) => props.theme.colors["cb-purple"]};
    }
  }

  @media screen and (max-width: 996px) {
    // display: none;
  }
`;

const DotHambugerClose = styled.span`
  width: 4px;
  height: 4px;
  display: block;
  background: #e3e6f3;
  border-radius: 50%;
`;

const StyledHeaderTitle = styled(HeaderTitle)`
  display: flex;
  align-items: center;

  @media screen and (max-width: 996px) {
    justify-content: center;
    // width: 100%;
  }
`;

const StyledMenuDropdownTicket = styled(MenuDropdown)`
  background: #ffffff;
  box-shadow: 0px 13px 64px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  width: 164px;
  padding: 13px 16px;
  left: 0;
  top: 46px;

  ul {
    li {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: #292d32;
    }
  }

  @media screen and (max-width: 996px) {
    ::before {
      display: none;
    }

    ul {
      margin-top: unset;
    }
  }
`;

const StyledTextareaEditor = styled(TextareaEditor)`
  margin-top: 25px;
`;

const FormAddTicketWrapper = styled.form`
  margin-top: 15px;
  height: calc(100% - 49px);
  overflow-y: auto;

  input,
  textarea {
    box-shadow: 0px 0px 37px 3px rgba(0, 0, 0, 0.01);
    border-radius: 11px;
    border: 1px solid #e2e5f2;
  }

  label {
    font-size: ${(props) => props.theme.fontSize["base"]};
    line-height: 24px;
  }

  input {
    padding: 22px 20px;
    font-size: ${(props) => props.theme.fontSize["base"]};
    font-weight: 400;
    font-style: normal;

    ::placeholder {
      font-size: ${(props) => props.theme.fontSize["base"]};
      line-height: 24px;
      color: #c1c7d4;
      font-style: normal;
      font-weight: 400;
    }
  }

  .input-group {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }

  .textarea-editor,
  .file-upload {
    margin-top: 14px;
  }

  .file-upload {
    width: 424px;
    height: 171px;
  }

  & > button {
    width: 192px;
    height: 49px;
    justify-content: center;
  }

  @media screen and (max-width: 996px) {
    ::-webkit-scrollbar {
      width: 0px;
    }

    height: auto;

    .file-upload {
      width: 100%;
    }
  }
`;
