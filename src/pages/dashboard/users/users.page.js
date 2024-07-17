import styled from "styled-components";

import {
  CategoryLists,
  CategoryTitle,
  ListCategory,
  SidebarCategory,
} from "@/components/Sidebar/Sidebar-Category";

import Text from "@/components/Typography/Text";
import { ContentContainer } from "@/layouts/content-container.layout";
import {
  HeaderButtons,
  HeaderCategory,
  HeaderTitle,
} from "@/components/Header/Header-Category";
import { Button } from "@/components/Button/Button";
import { FaChevronDown, FaPlusSquare, FaQuestionCircle } from "react-icons/fa";
import { useNavigate } from "react-router";
import TableContainer, {
  PaginationTable,
  Table,
  Tbody,
  TD,
  TH,
  Thead,
  TR,
} from "@/components/Table/Table";
import Checkbox from "@/components/Form/Checkbox";
import Hamburger from "@/components/Hamburger/Hamburger";
import { useState } from "react";
import { Ratings } from "@/components/Ratings/Ratings";
import { InputWrapper } from "@/components/Form/v2/Input";
import Label from "@/components/Form/Label";
import Input from "@/components/Form/Input";
import Select, { Option } from "@/components/Form/Select";
import FileUpload from "@/components/FileUpload/FileUpload";

const UsersContainer = styled(ContentContainer)`
  display: flex;
  position: relative;
`;

const UsersContent = styled.div`
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

const TableWrapper = styled(TableContainer)`
  margin-top: 30px;
  height: calc(100vh - 283.5px);
  padding-right: 15px;
  overflow-y: auto;
  overflow-x: hidden;

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
      tr {
        :not(:first-child) {
          td {
            :last-child {
              text-align: right;

              div {
                display: flex;
                align-items: center;
                width: max-content;
                margin: auto;

                .trash-icon {
                  width: 40px;
                  height: 40px;
                  background: #f9fafe;
                  border-radius: 10px;
                  display: flex;
                  margin-left: 10px;

                  img {
                    width: 24px;
                    height: 24px;
                    margin: auto;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 996px) {
    & {
      height: unset;

      tr {
        :not(:first-child) {
          td {
            ::before {
              color: #adb5c2;
            }

            :first-child {
              display: none;
            }

            :nth-child(2) {
              order: 2;
              ::before {
                content: "Email";
              }
            }

            :nth-child(3) {
              order: 3;
              ::before {
                content: "User Type";
              }
            }

            :nth-child(4) {
              order: 4;
              ::before {
                content: "Department";
              }
            }

            :nth-child(5) {
              order: 5;
              padding-bottom: 35px;
              ::before {
                content: "Rating";
              }
            }

            :nth-child(6) {
              order: 1;
              align-items: center;
              justify-content: flex-end;
              position: relative;

              ::before {
                content: "Lorem Ipsum";
                color: #292d32;
                font-weight: 500;
                position: absolute;
                left: 25px;
                word-break: break;
              }

              div {
                margin: unset !important;
              }
            }
          }
        }
      }
    }
  }
`;

function Users() {
  const navigate = useNavigate();
  const [showMenuCategory, setShowMenuCategory] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("all-users");

  const handleClickListCategory = (current) => {
    setCurrentMenu(current);
    setShowMenuCategory(false);
  };

  return (
    <UsersContainer>
      <SidebarCategory isToggledByMobile={showMenuCategory && "open"}>
        <CategoryTitle weight="medium">User Management</CategoryTitle>
        <CategoryLists className="category-list">
          <ListCategory
            onClick={() => handleClickListCategory("all-users")}
            className={currentMenu === "all-users" && "active"}
          >
            <Text size="xs">All Users</Text>
          </ListCategory>
          <ListCategory
            onClick={() => handleClickListCategory("add-user")}
            className={currentMenu === "new-user" && "active"}
          >
            <Text size="xs">Add New</Text>
          </ListCategory>
        </CategoryLists>
      </SidebarCategory>
      <UsersContent>
        {currentMenu === "all-users" ? (
          <>
            <HeaderCategory>
              <Hamburger
                lineColor="cb-purple"
                line={2}
                onClick={() => setShowMenuCategory(!showMenuCategory)}
              />
              <HeaderTitle>Users List</HeaderTitle>
              <HeaderButtons>
                <Button color="cb-blue" onClick={() => navigate("/docs")}>
                  <FaQuestionCircle />
                  Documentation
                </Button>
                <Button onClick={() => setCurrentMenu("add-user")}>
                  <FaPlusSquare style={{ borderRadius: "8px" }} />
                  <span>Add New</span>
                </Button>
                <Button bordered style={{ position: "relative" }}>
                  Actions <FaChevronDown />
                </Button>
              </HeaderButtons>
            </HeaderCategory>
            <TableWrapper>
              <Table>
                <Thead>
                  <TR>
                    <TH>Name</TH>
                    <TH>Email</TH>
                    <TH>User Type</TH>
                    <TH>Department</TH>
                    <TH>Rating</TH>
                    <TH>Action</TH>
                  </TR>
                </Thead>
                <Tbody>
                  <TR className="title-type">
                    <TD colSpan={5}></TD>
                    <TD colSpan={1}>
                      <PaginationTable currentPage={1} />
                    </TD>
                  </TR>
                  <TR>
                    <TD>
                      <Checkbox>Devon Lane</Checkbox>
                    </TD>
                    <TD>
                      <span>tanya.hill@example.com</span>
                    </TD>
                    <TD>
                      <span>Operator</span>
                    </TD>
                    <TD>
                      <span></span>
                    </TD>
                    <TD>
                      <Ratings />
                    </TD>
                    <TD>
                      <div>
                        <span className="setting-icon">
                          <img src="/images/edit2.svg" alt="edit" />
                        </span>
                        <span className="trash-icon">
                          <img src="/images/trash-red.svg" alt="delete" />
                        </span>
                      </div>
                    </TD>
                  </TR>
                  <TR>
                    <TD>
                      <Checkbox>Devon Lane</Checkbox>
                    </TD>
                    <TD>
                      <span>tanya.hill@example.com</span>
                    </TD>
                    <TD>
                      <span>Operator</span>
                    </TD>
                    <TD>
                      <span></span>
                    </TD>
                    <TD>
                      <Ratings />
                    </TD>
                    <TD>
                      <div>
                        <span className="setting-icon">
                          <img src="/images/edit2.svg" alt="edit" />
                        </span>
                        <span className="trash-icon">
                          <img src="/images/trash-red.svg" alt="delete" />
                        </span>
                      </div>
                    </TD>
                  </TR>
                  <TR>
                    <TD>
                      <Checkbox>Devon Lane</Checkbox>
                    </TD>
                    <TD>
                      <span>tanya.hill@example.com</span>
                    </TD>
                    <TD>
                      <span>Operator</span>
                    </TD>
                    <TD>
                      <span></span>
                    </TD>
                    <TD>
                      <Ratings />
                    </TD>
                    <TD>
                      <div>
                        <span className="setting-icon">
                          <img src="/images/edit2.svg" alt="edit" />
                        </span>
                        <span className="trash-icon">
                          <img src="/images/trash-red.svg" alt="delete" />
                        </span>
                      </div>
                    </TD>
                  </TR>
                  <TR>
                    <TD>
                      <Checkbox>Devon Lane</Checkbox>
                    </TD>
                    <TD>
                      <span>tanya.hill@example.com</span>
                    </TD>
                    <TD>
                      <span>Operator</span>
                    </TD>
                    <TD>
                      <span></span>
                    </TD>
                    <TD>
                      <Ratings />
                    </TD>
                    <TD>
                      <div>
                        <span className="setting-icon">
                          <img src="/images/edit2.svg" alt="edit" />
                        </span>
                        <span className="trash-icon">
                          <img src="/images/trash-red.svg" alt="delete" />
                        </span>
                      </div>
                    </TD>
                  </TR>
                  <TR>
                    <TD>
                      <Checkbox>Devon Lane</Checkbox>
                    </TD>
                    <TD>
                      <span>tanya.hill@example.com</span>
                    </TD>
                    <TD>
                      <span>Operator</span>
                    </TD>
                    <TD>
                      <span></span>
                    </TD>
                    <TD>
                      <Ratings />
                    </TD>
                    <TD>
                      <div>
                        <span className="setting-icon">
                          <img src="/images/edit2.svg" alt="edit" />
                        </span>
                        <span className="trash-icon">
                          <img src="/images/trash-red.svg" alt="delete" />
                        </span>
                      </div>
                    </TD>
                  </TR>
                  <TR>
                    <TD>
                      <Checkbox>Devon Lane</Checkbox>
                    </TD>
                    <TD>
                      <span>tanya.hill@example.com</span>
                    </TD>
                    <TD>
                      <span>Operator</span>
                    </TD>
                    <TD>
                      <span></span>
                    </TD>
                    <TD>
                      <Ratings />
                    </TD>
                    <TD>
                      <div>
                        <span className="setting-icon">
                          <img src="/images/edit2.svg" alt="edit" />
                        </span>
                        <span className="trash-icon">
                          <img src="/images/trash-red.svg" alt="delete" />
                        </span>
                      </div>
                    </TD>
                  </TR>
                  <TR>
                    <TD>
                      <Checkbox>Devon Lane</Checkbox>
                    </TD>
                    <TD>
                      <span>tanya.hill@example.com</span>
                    </TD>
                    <TD>
                      <span>Operator</span>
                    </TD>
                    <TD>
                      <span></span>
                    </TD>
                    <TD>
                      <Ratings />
                    </TD>
                    <TD>
                      <div>
                        <span className="setting-icon">
                          <img src="/images/edit2.svg" alt="edit" />
                        </span>
                        <span className="trash-icon">
                          <img src="/images/trash-red.svg" alt="delete" />
                        </span>
                      </div>
                    </TD>
                  </TR>
                  <TR>
                    <TD>
                      <Checkbox>Devon Lane</Checkbox>
                    </TD>
                    <TD>
                      <span>tanya.hill@example.com</span>
                    </TD>
                    <TD>
                      <span>Operator</span>
                    </TD>
                    <TD>
                      <span></span>
                    </TD>
                    <TD>
                      <Ratings />
                    </TD>
                    <TD>
                      <div>
                        <span className="setting-icon">
                          <img src="/images/edit2.svg" alt="edit" />
                        </span>
                        <span className="trash-icon">
                          <img src="/images/trash-red.svg" alt="delete" />
                        </span>
                      </div>
                    </TD>
                  </TR>
                  <TR>
                    <TD>
                      <Checkbox>Devon Lane</Checkbox>
                    </TD>
                    <TD>
                      <span>tanya.hill@example.com</span>
                    </TD>
                    <TD>
                      <span>Operator</span>
                    </TD>
                    <TD>
                      <span></span>
                    </TD>
                    <TD>
                      <Ratings />
                    </TD>
                    <TD>
                      <div>
                        <span className="setting-icon">
                          <img src="/images/edit2.svg" alt="edit" />
                        </span>
                        <span className="trash-icon">
                          <img src="/images/trash-red.svg" alt="delete" />
                        </span>
                      </div>
                    </TD>
                  </TR>
                </Tbody>
              </Table>
            </TableWrapper>
          </>
        ) : (
          <AddUserForm
            setShowMenuCategory={setShowMenuCategory}
            showMenuCategory={showMenuCategory}
          />
        )}
      </UsersContent>
    </UsersContainer>
  );
}

const HeaderCategoryAddUser = styled(HeaderCategory)`
  @media screen and (max-width: 996px) {
    justify-content: center;
    position: relative;

    .hamburger {
      position: absolute;
      left: 0;
    }
  }
`;

const AddUserFormWrapper = styled.form`
  margin-top: 24px;
  height: calc(100% - 68px);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors["cb-purple"]};
    border-radius: 20px;
  }

  input,
  textarea,
  select {
    box-shadow: 0px 0px 37px 3px rgba(0, 0, 0, 0.01);
    border-radius: 11px;
    background: #ffffff;
    border: 1px solid #e2e5f2;

    :placeholder {
      color: #c1c7d4;
    }
  }

  @media screen and (max-width: 996px) {
    height: auto;
    padding-bottom: 34px;
  }
`;

const StyledInputWrapper = styled(InputWrapper)`
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const StyledFileUpload = styled(FileUpload)`
  width: 424px;
  margin-top: 14px;

  @media screen and (max-width: 996px) {
    width: auto;
  }
`;

const StyledSubmitButton = styled(Button)`
  width: 192px;
  height: 49px;
  justify-content: center;
`;

const AddUserForm = ({ setShowMenuCategory, showMenuCategory }) => {
  return (
    <>
      <HeaderCategoryAddUser>
        <Hamburger
          className="hamburger"
          lineColor="cb-purple"
          line={2}
          onClick={() => setShowMenuCategory(!showMenuCategory)}
        />
        <HeaderTitle>Add New</HeaderTitle>
      </HeaderCategoryAddUser>
      <AddUserFormWrapper>
        <StyledInputWrapper>
          <Label>Name</Label>
          <Input placeholder="Write in here" />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <Label>Email</Label>
          <Input placeholder="Write in here" />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <Label>Password</Label>
          <Input placeholder="Write in here" />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <Label>Confirm Password</Label>
          <Input placeholder="Write in here" />
        </StyledInputWrapper>
        <StyledInputWrapper>
          <Label>User Type</Label>
          <Select>
            <Option>Operator</Option>
          </Select>
        </StyledInputWrapper>
        <StyledInputWrapper>
          <Label>Department</Label>
          <Select>
            <Option>Operator</Option>
          </Select>
        </StyledInputWrapper>
        <StyledInputWrapper>
          <Label>Profile Picture</Label>
          <StyledFileUpload showDesc={false} showButton />
        </StyledInputWrapper>
        <StyledSubmitButton>Submit</StyledSubmitButton>
      </AddUserFormWrapper>
    </>
  );
};

export default Users;
