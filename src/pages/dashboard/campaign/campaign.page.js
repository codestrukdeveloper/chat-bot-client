import { useMemo, useState } from "react";
import { useTable } from "react-table";

import {
  FaChevronDown,
  FaChevronUp,
  FaCog,
  FaPlusSquare,
  FaQuestionCircle,
} from "react-icons/fa";

import { Button } from "@/components/Button/Button";
import Text from "@components/Typography/Text";
import { CloseIcon, NextIcon } from "@/components/Icons";
import { Popup } from "@/components/Popup/Popup";
import { Card } from "@/components/Card/Card";
import Checkbox from "@/components/Form/Checkbox";
import {
  PaginationTable,
  Table,
  Tbody,
  TD,
  TH,
  Thead,
  TR,
} from "@/components/Table/Table";
import Hamburger from "@/components/Hamburger/Hamburger";

import {
  CategoryLists,
  CategoryTitle,
  ListCategory,
  SidebarCategory,
} from "@/components/Sidebar/Sidebar-Category";

import {
  HeaderButtons,
  HeaderCategory,
  HeaderTitle,
} from "@/components/Header/Header-Category";
import {
  CampaignContainer,
  CampaignContent,
  CloseWrapper,
  PopupContentRecepient,
  RecipientPopup,
  RecipientPopupTitle,
  StatusDotBar,
  StatusWrapper,
  StyledPopupContainerRecipient,
  TableWrapper,
  PopupButton,
  InputCampaign,
  LabelNameCampaign,
  NameCampaignWrapper,
  StatusDot,
  CardsCampaignRecipient,
  InputSearchContact,
  TableWrapperContact,
  AvailableTemplateWrapper,
  CardTemplatesWrapper,
  CardTemplate,
  CardTemplateHeader,
  ContentTemplate,
  CardTemplateAction,
  ButtonWrapper,
  SettingWrapper,
  FlexWrap,
  SendInWrapper,
  ProfileWrap,
  SettingEditorWrapper,
  StyledPopupContainer,
  StatusDotText,
  CardCampaignRecipient,
  TextAvailableTemplate,
  PopupWrapper,
  HeaderPopup,
  TextHeaderPopupWrapper,
  NumberText,
  ContentPopup,
  TypeCampaignCards,
} from "./campaign.style";
import { useNavigate } from "react-router";
import { MyEditor } from "@/components/Editor/Editor";
import styled from "styled-components";

const StyledMyEditor = styled(MyEditor)`
  & {
    height: 479px;
    margin-top: 40px;
  }
`;

export default function CampaignPage() {
  const [showPopup, setShowPopup] = useState({
    newCampaign: {
      show: false,
      maxStep: 2,
      minStep: 1,
    },
    campaignRecipient: {
      show: false,
      maxStep: 6,
      minStep: 3,
    },

    currentStep: 1,
  });

  const [showMenuCategory, setShowMenuCategory] = useState(false);

  const data = useMemo(() => {
    return [
      {
        col4: "3 Nov",
      },
      {
        col4: "3 Nov",
      },
      {
        col4: "3 Nov",
      },
    ];
  }, []);

  const columns = useMemo(() => {
    let i = 0;
    return [
      {
        Header: "Campaign Name",
        Cell: () => {
          return (
            <Checkbox
              htmlFor={`checkbox-${++i}`}
              inputId={`checkbox-${i}`}
              textClassName="text-checkbox"
            >
              Lorem Ipsum Campaign
            </Checkbox>
          );
        },
      },
      {
        Header: "Status",
        Cell: (props) => {
          if (Number(props.row.id) === 2) {
            return <span className="not-configured">Not Configured</span>;
          }
          return <span className="ready-activate">Ready To Activate</span>;
        },
      },
      {
        Header: "Contacts",
        Cell: (props) => {
          if (Number(props.row.id) === 2) {
            return <span className="recipients">1 Recipients</span>;
          }
          return <span className="reached">1 Reached</span>;
        },
      },
      {
        Header: "Last Update",
        accessor: "col4",
      },
    ];
  }, []);

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  const navigate = useNavigate();

  return (
    <>
      <CampaignContainer withFadeIn>
        <SidebarCategory isToggledByMobile={showMenuCategory && "open"}>
          <CategoryTitle weight="medium">Types</CategoryTitle>
          <CategoryLists className="category-list">
            <ListCategory>
              <Text size="xs">All Types</Text>
            </ListCategory>
            <ListCategory>
              <Text size="xs">Automated</Text>
            </ListCategory>
            <ListCategory>
              <Text size="xs">One-Shot</Text>
            </ListCategory>
          </CategoryLists>

          <CategoryTitle weight="medium">Tags</CategoryTitle>
          <CategoryLists className="category-list">
            <ListCategory>
              <Text size="xs">All Tags</Text>
            </ListCategory>
          </CategoryLists>

          <CategoryTitle weight="medium">Templates</CategoryTitle>
          <CategoryLists className="category-list">
            <ListCategory>
              <Text size="xs">All Templates</Text>
            </ListCategory>
            <ListCategory>
              <Text size="xs">InfinityBot Templates</Text>
            </ListCategory>
            <ListCategory>
              <Text size="xs">Your Templates</Text>
            </ListCategory>
          </CategoryLists>
        </SidebarCategory>
        <CampaignContent>
          <HeaderCategory>
            <Hamburger
              lineColor="cb-purple"
              line={2}
              onClick={() => setShowMenuCategory(!showMenuCategory)}
            />
            <HeaderTitle weight="semi-bold">All Types</HeaderTitle>
            <HeaderButtons>
              <Button color="cb-blue" onClick={() => navigate("/docs")}>
                <FaQuestionCircle />
                Documentation
              </Button>
              <Button
                onClick={() =>
                  setShowPopup((prev) => ({
                    ...prev,
                    newCampaign: {
                      ...prev.newCampaign,
                      show: true,
                    },
                  }))
                }
              >
                <FaPlusSquare style={{ borderRadius: "8px" }} />
                <span>New Campaign</span>
              </Button>
              <Button bordered>
                Actions <FaChevronDown />{" "}
              </Button>
            </HeaderButtons>
          </HeaderCategory>
          <TableWrapper>
            <Table {...getTableProps()}>
              <Thead>
                {headerGroups.map((headerGroup) => (
                  <TR {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <TH
                        className={column.id}
                        key={column.id}
                        {...column.getHeaderProps()}
                      >
                        {column.render("Header")}
                      </TH>
                    ))}
                    <TH colSpan={2}>Actions</TH>
                  </TR>
                ))}
              </Thead>
              <Tbody {...getTableBodyProps()}>
                <TR className="title-type">
                  <TD colSpan={4}>Automated Campaign</TD>
                  <TD colSpan={1}>
                    <PaginationTable currentPage={1} />
                  </TD>
                </TR>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <TR key={row.id}>
                      {row.cells.map((cell) => {
                        return (
                          <TD {...cell.getCellProps()}>
                            <span>{cell.render("Cell")}</span>
                          </TD>
                        );
                      })}
                      <TD>
                        <span className="setting-icon">
                          <FaCog
                            size="18px"
                            color="#CED2E0"
                            style={{ cursor: "pointer" }}
                          />
                        </span>
                        <span className="next-icon">
                          <NextIcon />
                        </span>
                      </TD>
                    </TR>
                  );
                })}
              </Tbody>

              <Tbody {...getTableBodyProps()}>
                <TR className="title-type">
                  <TD colSpan={4}>One Shot Campaign</TD>
                  <TD colSpan={1}>
                    <PaginationTable currentPage={1} />
                  </TD>
                </TR>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <TR key={row.id}>
                      {row.cells.map((cell) => {
                        return (
                          <TD {...cell.getCellProps()}>
                            <span>{cell.render("Cell")}</span>
                          </TD>
                        );
                      })}
                      <TD>
                        <span className="setting-icon">
                          <FaCog
                            size="18px"
                            color="#CED2E0"
                            style={{ cursor: "pointer" }}
                          />
                        </span>
                        <span className="next-icon">
                          <NextIcon />
                        </span>
                      </TD>
                    </TR>
                  );
                })}
              </Tbody>

              <Tbody {...getTableBodyProps()}>
                <TR className="title-type">
                  <TD colSpan={4}>One Shot Campaign</TD>
                  <TD colSpan={1}>
                    <PaginationTable currentPage={1} />
                  </TD>
                </TR>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <TR key={row.id}>
                      {row.cells.map((cell) => {
                        return (
                          <TD {...cell.getCellProps()}>
                            <span>{cell.render("Cell")}</span>
                          </TD>
                        );
                      })}
                      <TD>
                        <span className="setting-icon">
                          <FaCog
                            size="18px"
                            color="#CED2E0"
                            style={{ cursor: "pointer" }}
                          />
                        </span>
                        <span className="next-icon">
                          <NextIcon />
                        </span>
                      </TD>
                    </TR>
                  );
                })}
              </Tbody>
            </Table>
          </TableWrapper>
        </CampaignContent>
      </CampaignContainer>

      <NewCampaignPopup showPopup={showPopup} setShowPopup={setShowPopup} />
      <RecepientsCampaignPopup
        showPopup={showPopup}
        setShowPopup={setShowPopup}
      />
    </>
  );
}

const RecepientsCampaignPopup = ({ setShowPopup, showPopup }) => {
  let {
    currentStep,
    campaignRecipient: { show, minStep, maxStep },
  } = showPopup;

  const [clickedSettingEditor, setClickedSettingEditor] = useState(false);

  if (show && currentStep >= minStep && currentStep <= maxStep) {
    return (
      <StyledPopupContainerRecipient>
        <RecipientPopup>
          <RecipientPopupTitle>
            <Text weight="medium" size="xl" style={{ lineHeight: "30px" }}>
              Select your campaign recipients
            </Text>
            <CloseWrapper
              onClick={() =>
                setShowPopup((prev) => ({
                  ...prev,
                  campaignRecipient: {
                    ...prev.campaignRecipient,
                    show: false,
                  },
                  newCampaign: {
                    ...prev.newCampaign,
                    show: false,
                  },
                  currentStep: 1,
                }))
              }
            >
              <CloseIcon />
            </CloseWrapper>
          </RecipientPopupTitle>
          <PopupContentRecepient>
            <StatusWrapper>
              <StatusDotBar>
                <StatusDot
                  className={`${currentStep <= maxStep && "active"}`}
                />
                <StatusDot
                  className={`${
                    currentStep >= minStep + 1 &&
                    currentStep <= maxStep &&
                    "active"
                  }`}
                />
                <StatusDot
                  className={`${
                    currentStep >= minStep + 2 &&
                    currentStep <= maxStep &&
                    "active"
                  }`}
                />
                <StatusDot
                  className={`${
                    currentStep >= minStep + 3 &&
                    currentStep <= maxStep &&
                    "active"
                  }`}
                />
              </StatusDotBar>
              <StatusDotText>
                <Text className={`${currentStep <= maxStep && "active"}`}>
                  Recipients
                </Text>
                <Text
                  className={`${
                    currentStep >= minStep + 1 &&
                    currentStep <= maxStep &&
                    "active"
                  }`}
                >
                  Templates
                </Text>
                <Text
                  className={`${
                    currentStep >= minStep + 2 &&
                    currentStep <= maxStep &&
                    "active"
                  }`}
                >
                  Editor
                </Text>
                <Text
                  className={`${
                    currentStep >= minStep + 3 &&
                    currentStep <= maxStep &&
                    "active"
                  }`}
                >
                  Analytics
                </Text>
              </StatusDotText>
            </StatusWrapper>

            {currentStep === minStep && (
              <>
                <CardsCampaignRecipient>
                  <CardCampaignRecipient>
                    <img
                      src="/images/send-all-contact.png"
                      alt="send-all-contact"
                    />
                    <Text>Send to all contacts</Text>
                  </CardCampaignRecipient>
                  <CardCampaignRecipient>
                    <img
                      src="/images/send-selected-contact.png"
                      alt="send-selected-contact"
                    />
                    <Text>Send to selected contacts</Text>
                  </CardCampaignRecipient>
                  <CardCampaignRecipient>
                    <img
                      src="/images/send-contact-filter.png"
                      alt="send-filter-contact"
                    />
                    <Text>Send to a contact filter...</Text>
                  </CardCampaignRecipient>
                  <CardCampaignRecipient>
                    <img
                      src="/images/send-segment-contact.png"
                      alt="send-segment-contact"
                    />
                    <Text>Send to a segment of contacts</Text>
                  </CardCampaignRecipient>
                </CardsCampaignRecipient>
                <InputSearchContact placeholder="Search in all contacts..." />
                <TableWrapperContact>
                  <table>
                    <thead>
                      <tr>
                        <th colSpan={2}>
                          This message targets all your contacts.
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Checkbox htmlFor="checkbox" inputId="checkbox">
                            Lorem Ipsum Campaign
                          </Checkbox>
                        </td>
                        <td>Test@gmail.com</td>
                      </tr>
                    </tbody>
                  </table>
                </TableWrapperContact>
              </>
            )}

            {currentStep === minStep + 1 && (
              <AvailableTemplateWrapper>
                <TextAvailableTemplate>
                  <Text weight="medium" size="lg">
                    Your available templates
                  </Text>
                  <Text size="sm">
                    We listed here all the HTML templates you saved for a later
                    use. To create a new HTML template or use Markdown instead,
                    you can skip this step.
                  </Text>
                </TextAvailableTemplate>
                <CardTemplatesWrapper>
                  <CardTemplate>
                    <CardTemplateHeader>
                      <img src="/images/landing-logo.svg" alt="logo" />
                    </CardTemplateHeader>
                    <ContentTemplate>
                      <Text size="xs" weight="medium">
                        Hi! This is your default email template
                      </Text>
                      <Text>Lorem Ipsum Dis Amet</Text>
                      <Text>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet.
                      </Text>
                    </ContentTemplate>
                    <CardTemplateAction>
                      <Text>Crisp Example HTML Template</Text>
                      <Button
                        onClick={() =>
                          setShowPopup((prev) => ({
                            ...prev,
                            currentStep: maxStep - 1,
                          }))
                        }
                        color="white"
                      >
                        Use this template
                      </Button>
                    </CardTemplateAction>
                  </CardTemplate>
                </CardTemplatesWrapper>
              </AvailableTemplateWrapper>
            )}

            {currentStep === minStep + 2 && <StyledMyEditor />}
          </PopupContentRecepient>
          <ButtonWrapper className={`${currentStep === 5 && "fixed-bottom"}`}>
            {currentStep === minStep + 2 ? (
              <SettingWrapper
                className={clickedSettingEditor && "open-setting"}
              >
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
            ) : (
              <div></div>
            )}
            {currentStep === 5 && (
              <SettingEditorWrapper
                onClick={() => setClickedSettingEditor(!clickedSettingEditor)}
                className="set"
              >
                <FaCog color="#7B40F2" />
              </SettingEditorWrapper>
            )}
            <Button
              onClick={() =>
                setShowPopup((prev) => ({
                  ...prev,
                  currentStep:
                    currentStep >= 7
                      ? currentStep
                      : currentStep === 4
                      ? maxStep
                      : currentStep + 1,
                }))
              }
            >
              {currentStep === minStep && <>Save &amp; Next</>}
              {currentStep === minStep + 1 && "Ignore This Step"}
              {currentStep === minStep + 2 && "Save Draft"}
            </Button>
          </ButtonWrapper>
        </RecipientPopup>
      </StyledPopupContainerRecipient>
    );
  }

  return <></>;
};

const NewCampaignPopup = ({ setShowPopup, showPopup }) => {
  let {
    currentStep,
    newCampaign: { show, maxStep },
  } = showPopup;

  const [activeCard, setActiveCard] = useState(null);

  if (show && currentStep <= maxStep) {
    return (
      <StyledPopupContainer>
        <PopupWrapper>
          <Popup.Title
            className="title"
            onClickClose={() =>
              setShowPopup((prev) => ({
                ...prev,
                newCampaign: {
                  ...prev.newCampaign,
                  show: false,
                },
                currentStep: 1,
              }))
            }
          >
            Create a New Campaign
          </Popup.Title>
          <HeaderPopup>
            <TextHeaderPopupWrapper>
              <NumberText className={`${currentStep === 1 && "active"}`}>
                1
              </NumberText>
              <Text size="sm" weight="medium">
                Campaign Type
              </Text>
            </TextHeaderPopupWrapper>
            <TextHeaderPopupWrapper>
              <NumberText className={`${currentStep === 2 && "active"}`}>
                2
              </NumberText>
              <Text size="sm" weight="medium">
                Campaign Name
              </Text>
            </TextHeaderPopupWrapper>
          </HeaderPopup>
          <ContentPopup>
            <Text weight="medium" className="title-content">
              {currentStep === 1
                ? "Select the type of campaign to create"
                : "Pick a name for your campaign"}
            </Text>
            <Text size="xs" className="desc-content">
              {currentStep === 1
                ? `You can create either a one-shot, one-use campaign; or an
                    automated, continuous campaign that gets sent per-contact when
                    an event triggers.`
                : "The campaign name is visible to all targeted contacts. It is used as the subject of the email your contacts will receive."}
            </Text>
            {currentStep === 1 && (
              <TypeCampaignCards>
                <Card
                  className={`${activeCard === 1 && "active"}`}
                  onClick={() => setActiveCard(1)}
                >
                  <img src="/images/one-shot.png" alt="one-shot-campaign" />
                  <Text weight="medium" size="sm">
                    One-Shot Campaign
                  </Text>
                  <Text className="card-desc">
                    Sent once to all targeted contacts, eg. a product
                    newsletter.
                  </Text>
                </Card>
                <Card
                  className={`${activeCard === 2 && "active"}`}
                  onClick={() => setActiveCard(2)}
                >
                  <img src="/images/automated.png" alt="one-shot-campaign" />
                  <Text weight="medium" size="sm">
                    Automated Campaign
                  </Text>
                  <Text className="card-desc">
                    Sent automatically based on events, eg. remind inactive
                    contacts.
                  </Text>
                </Card>
              </TypeCampaignCards>
            )}

            {currentStep === 2 && (
              <NameCampaignWrapper>
                <LabelNameCampaign htmlFor="name">
                  <Text weight="medium" size="sm">
                    Name of the Campaign{" "}
                    <span style={{ color: "#FF6060" }}>*</span>
                  </Text>
                </LabelNameCampaign>
                <InputCampaign
                  required
                  placeholder="Enter the name of the campaign..."
                />
              </NameCampaignWrapper>
            )}
            <PopupButton
              disabled={!activeCard}
              className={`${activeCard && "active"} ${
                currentStep === 2 && "name-campaign-active"
              }`}
              onClick={() =>
                setShowPopup((prev) => ({
                  ...prev,
                  currentStep: currentStep > maxStep ? 3 : ++currentStep,
                  campaignRecipient: {
                    ...prev.campaignRecipient,
                    show: currentStep > maxStep,
                  },
                }))
              }
            >
              {currentStep === 1
                ? "Continue With This Campaign Type"
                : "Start configuring My Campaign"}
            </PopupButton>
          </ContentPopup>
        </PopupWrapper>
      </StyledPopupContainer>
    );
  }

  return <></>;
};
