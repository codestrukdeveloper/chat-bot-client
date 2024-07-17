import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaChevronDown,
  FaGlobe,
  FaPlusSquare,
  FaQuestionCircle,
} from "react-icons/fa";

import Checkbox from "@/components/Form/Checkbox";
import Text from "@/components/Typography/Text";
import { Button } from "@/components/Button/Button";
import Hamburger from "@/components/Hamburger/Hamburger";
import { Menu, MenuIcon, MenuLists } from "@/components/Dropdown/Dropdown";
import { ExportIcon2, ImportIcon } from "@/components/Icons";

import {
  CategoryLists,
  CategoryTitle,
  ListCategory,
  SidebarCategory,
} from "@/components/Sidebar/Sidebar-Category";

import {
  PaginationTable,
  Table,
  Tbody,
  TD,
  TH,
  Thead,
  TR,
} from "@/components/Table/Table";

import {
  HeaderButtons,
  HeaderCategory,
  HeaderTitle,
} from "@/components/Header/Header-Category";

import {
  ContactContainer,
  ContactContent,
  StyledMenuDropdown,
  TableWrapper,
} from "./contacts.style";

function Contact() {
  const [showMenuCategory, setShowMenuCategory] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <ContactContainer>
      <SidebarCategory isToggledByMobile={showMenuCategory && "open"}>
        <CategoryTitle weight="medium">Contacts</CategoryTitle>
        <CategoryLists className="category-list">
          <ListCategory>
            <Text size="xs">All Contacts</Text>
          </ListCategory>
          <ListCategory>
            <Text size="xs">Deleted</Text>
          </ListCategory>
        </CategoryLists>
      </SidebarCategory>
      <ContactContent>
        <HeaderCategory>
          <Hamburger
            lineColor="cb-purple"
            line={2}
            onClick={() => setShowMenuCategory(!showMenuCategory)}
          />
          <HeaderTitle>All Contacts</HeaderTitle>
          <HeaderButtons>
            <Button color="cb-blue" onClick={() => navigate("/docs")}>
              <FaQuestionCircle />
              Documentation
            </Button>
            <Button>
              <FaPlusSquare style={{ borderRadius: "8px" }} />
              <span>New Contact</span>
            </Button>
            <Button
              bordered
              onClick={() => setShowDropdown(!showDropdown)}
              style={{ position: "relative" }}
            >
              Actions <FaChevronDown />
              {showDropdown && (
                <StyledMenuDropdown>
                  <MenuLists>
                    <Menu>
                      <MenuIcon>
                        <ImportIcon />
                      </MenuIcon>
                      Import contact profiles
                    </Menu>
                    <Menu>
                      <MenuIcon>
                        <ExportIcon2 />
                      </MenuIcon>
                      Export contact profiles
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
                <TH>Name</TH>
                <TH>Email</TH>
                <TH>Country</TH>
                <TH>Status</TH>
                <TH>Actions</TH>
              </TR>
            </Thead>
            <Tbody>
              <TR className="title-type">
                <TD colSpan={4}></TD>
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
                  <span>
                    <FaGlobe color="#7B40F2" /> Indonesian
                  </span>
                </TD>
                <TD>
                  <span className="ready-activate">Ready To Activate</span>
                </TD>
                <TD>
                  <span className="setting-icon">
                    <img src="/images/trash-red.svg" alt="delete" />
                  </span>
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
                  <span>
                    <FaGlobe color="#7B40F2" /> Indonesian
                  </span>
                </TD>
                <TD>
                  <span className="ready-activate">Ready To Activate</span>
                </TD>
                <TD>
                  <span className="setting-icon">
                    <img src="/images/trash-red.svg" alt="delete" />
                  </span>
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
                  <span>
                    <FaGlobe color="#7B40F2" /> Indonesian
                  </span>
                </TD>
                <TD>
                  <span className="ready-activate">Ready To Activate</span>
                </TD>
                <TD>
                  <span className="setting-icon">
                    <img src="/images/trash-red.svg" alt="delete" />
                  </span>
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
                  <span>
                    <FaGlobe color="#7B40F2" /> Indonesian
                  </span>
                </TD>
                <TD>
                  <span className="ready-activate">Ready To Activate</span>
                </TD>
                <TD>
                  <span className="setting-icon">
                    <img src="/images/trash-red.svg" alt="delete" />
                  </span>
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
                  <span>
                    <FaGlobe color="#7B40F2" /> Indonesian
                  </span>
                </TD>
                <TD>
                  <span className="ready-activate">Ready To Activate</span>
                </TD>
                <TD>
                  <span className="setting-icon">
                    <img src="/images/trash-red.svg" alt="delete" />
                  </span>
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
                  <span>
                    <FaGlobe color="#7B40F2" /> Indonesian
                  </span>
                </TD>
                <TD>
                  <span className="ready-activate">Ready To Activate</span>
                </TD>
                <TD>
                  <span className="setting-icon">
                    <img src="/images/trash-red.svg" alt="delete" />
                  </span>
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
                  <span>
                    <FaGlobe color="#7B40F2" /> Indonesian
                  </span>
                </TD>
                <TD>
                  <span className="ready-activate">Ready To Activate</span>
                </TD>
                <TD>
                  <span className="setting-icon">
                    <img src="/images/trash-red.svg" alt="delete" />
                  </span>
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
                  <span>
                    <FaGlobe color="#7B40F2" /> Indonesian
                  </span>
                </TD>
                <TD>
                  <span className="ready-activate">Ready To Activate</span>
                </TD>
                <TD>
                  <span className="setting-icon">
                    <img src="/images/trash-red.svg" alt="delete" />
                  </span>
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
                  <span>
                    <FaGlobe color="#7B40F2" /> Indonesian
                  </span>
                </TD>
                <TD>
                  <span className="ready-activate">Ready To Activate</span>
                </TD>
                <TD>
                  <span className="setting-icon">
                    <img src="/images/trash-red.svg" alt="delete" />
                  </span>
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
                  <span>
                    <FaGlobe color="#7B40F2" /> Indonesian
                  </span>
                </TD>
                <TD>
                  <span className="ready-activate">Ready To Activate</span>
                </TD>
                <TD>
                  <span className="setting-icon">
                    <img src="/images/trash-red.svg" alt="delete" />
                  </span>
                </TD>
              </TR>
            </Tbody>
          </Table>
        </TableWrapper>
      </ContactContent>
    </ContactContainer>
  );
}

export default Contact;
