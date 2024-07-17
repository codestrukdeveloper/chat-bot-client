import { Button } from "@/components/Button/Button";
import { Menu, MenuDropdown, MenuLists } from "@/components/Dropdown/Dropdown";
import Toggle from "@/components/Toggle/Toggle";
import Text from "@/components/Typography/Text";
import { ContentContainer } from "@/layouts/content-container.layout";
import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const DetailPageContainer = styled(ContentContainer)`
  display: flex;
  position: relative;
  border: 1px solid #f1f4f9;
  border-radius: 15px;
  overflow: hidden;

  @media screen and (max-width: 996px) {
    & {
      height: auto;
    }
  }
`;

const Sidebar = styled.aside`
  width: 291px;
  height: 100%;
  padding: 25px;
`;

const SidebarLists = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`;

const ListBox = styled.div`
  :not(:last-child) {
    margin-bottom: 30px;
  }
`;

const ListBoxTitle = styled(Text)`
  letter-spacing: 0.08em;
  line-height: 21px;
  color: #c8cfd7;
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSize["sm"]};
  margin-bottom: 15px;
`;

const NewScenarioButton = styled(Button)`
  width: 100%;
  justify-content: center;
  box-shadow: 0px 18px 33px rgba(123, 64, 242, 0.19);
  border-radius: 10px;
  margin-bottom: 15px;
  position: relative;
`;

const ListBoxContent = styled.div`
  width: 100%;
  height: 115px;
  padding: 15px 20px;
  border-radius: 8px;
  outline: 1px solid #f9fafe;
  position: relative;
`;

const StatusScenario = styled(Text)`
  font-size: 10px;
  line-height: 15px;
  color: #c8cfd7;
  display: flex;
  align-items: center;

  ${(props) =>
    props.active &&
    `
  color: #32b874;
  
  `}

  ::before {
    content: "";
    display: block;
    margin-right: 7px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: #ced2e0;
    box-shadow: 0 0 0 2px #e3e6f3;

    ${(props) =>
      props.active &&
      `
    background-color: #32b874;
    box-shadow: 0 0 0 2px rgba(50, 184, 116, 0.4);
    `}
  }
`;

const ListBoxName = styled(Text)`
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSize["sm"]};
  line-height: 21px;
  color: #292d32;
  margin: 10px 0 18px 0;
`;

const ListBoxToggle = styled(Toggle)`
  width: 40px;
  height: 21px;

  ${(props) =>
    props.active &&
    ` 
    & {
      background: ${props.theme.colors["cb-purple"]};

      ::after {
        left: unset !important;
        right: 3.41px ;
      }
    }
  `}

  ::after {
    width: 13.89px;
    height: 14.19px;
    top: 3.41px;
    left: 3.41px;
    bottom: 3.41px;
  }
`;

const ListBoxImage = styled.div`
  position: absolute;
  width: 76px;
  height: 75px;
  right: 0;
  top: 0;
  background: url("/images/detail.svg") center;
  filter: drop-shadow(-18px 10px 23px rgba(123, 64, 242, 0.1));
`;

const DropdownScenario = styled(MenuDropdown)`
  top: 53px;
  width: 100%;
  padding: 20px;

  li {
    color: #292d32;

    :not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const DetailContainer = styled.div`
  width: calc(100% - 291px);
  height: 100%;
  border-left: 1px solid #f1f4f9;
  padding: 97px 105px 74px 105px;
  background-color: #f9fafe;
`;

const BoxDetail = styled.div`
  background: white;
  padding: 63px 50px;
  background: white;
  border-radius: 15px;
  border: 1px solid #f1f4f9;
  position: relative;
  p {
    line-height: 21px;
    font-size: ${(props) => props.theme.fontSize["sm"]};
  }
`;

const BoxDetailHeader = styled.div`
  position: absolute;
  background: white;
  border-radius: 42px;
  box-shadow: 0px 31px 77px rgba(0, 0, 0, 0.06);
  border: 1px solid #7b40f2;
  padding: 10px 23px;
  width: 314px;
  height: 48px;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -24px auto auto auto;

  img {
    width: 40px;
    margin-right: 10px;
  }

  p {
    font-weight: 500;
    font-size: ${(props) => props.theme.fontSize["sm"]};
    line-height: 21px;
  }
`;

const ListsNumbering = styled.ul``;
const List = styled.li`
  font-size: ${(props) => props.theme.fontSize["sm"]};
  font-weight: 500;
  display: flex;
  align-items: center;

  ::before {
    content: "${(props) => props.number}";
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
    line-height: 21px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors["cb-purple"]};
  }

  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

function DetailPluginPage() {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  return (
    <DetailPageContainer>
      <Sidebar>
        <NewScenarioButton onClick={() => setShowDropdown(!showDropdown)}>
          Create a new Scenario
          {showDropdown && (
            <DropdownScenario open={false}>
              <MenuLists>
                <Menu onClick={() => navigate("setting")}>
                  New blank scenario
                </Menu>
                <Menu>Use a sample scenario</Menu>
                <Menu>Import scenario from file</Menu>
              </MenuLists>
            </DropdownScenario>
          )}
        </NewScenarioButton>
        <SidebarLists>
          <ListBox>
            <ListBoxTitle>ACTIVE SCENARIO</ListBoxTitle>
            <ListBoxContent>
              <StatusScenario active>Active Scenario</StatusScenario>
              <ListBoxName>New Scenario</ListBoxName>
              <ListBoxToggle active />
              <ListBoxImage />
            </ListBoxContent>
          </ListBox>
          <ListBox>
            <ListBoxTitle>DISABLED SCENARIO</ListBoxTitle>
            <ListBoxContent>
              <StatusScenario>Disabled Scenario</StatusScenario>
              <ListBoxName>Test Bot</ListBoxName>
              <ListBoxToggle />
              <ListBoxImage />
            </ListBoxContent>
          </ListBox>
        </SidebarLists>
      </Sidebar>
      <DetailContainer>
        <BoxDetail>
          <BoxDetailHeader>
            <img src="/images/detail-plugins/bot.svg" alt="Bot" />
            <Text>How does the Bot plugin work?</Text>
          </BoxDetailHeader>
          <Text>
            The Bot Plugin lets you automate your support. Create Bot Scenarios,
            and configure a graph of events, conditions, actions and outcomes
            for your bot. You can even use the Bot Plugin to create forms and
            store form data in your user profiles.
          </Text>
          <br />
          <Text>
            You can draw your scenario graph and test it live using the Bot
            Scenario builder, before you publish it.
          </Text>
          <br />
          <Text weight="medium" color="cb-purple">
            Here’s how a Crisp Bot works:
          </Text>
          <br />
          <ListsNumbering>
            <List number={1}>Create a new Scenario</List>
            <List number={2}>Draw the Bot graph for the Scenario</List>
            <List number={3}>Live test your Bot before you deploy it live</List>
            <List number={4}>Publish your Bot for use by your users</List>
          </ListsNumbering>
        </BoxDetail>
      </DetailContainer>
    </DetailPageContainer>
  );
}

export default DetailPluginPage;
