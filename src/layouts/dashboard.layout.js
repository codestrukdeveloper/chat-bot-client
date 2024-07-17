import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import withInteractiveDashboard from "@/hoc/withInteractiveDashboard";
import { H1 } from "@components/Typography/Heading";
import Text from "@components/Typography/Text";
import { DiscountIcon } from "@/components/Icons/Discount";
import styled from "styled-components";
import Tippy, { useSingleton } from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import {
  AnalyticIcon,
  CampaignIcon,
  CategoryIcon,
  ChatIcon,
  ContactIcon,
  HelpdeskIcon,
  LogoutIcon,
  PluginIcon,
  SettingIcon,
  VisitorsIcon,
  SearchIcon,
  CloseIcon,
} from "@components/Icons";

import {
  BackdropSidebar,
  Menu,
  SearchIconWrapperMobile,
  Sidebar,
  SidebarHeaderMobile,
  Wrapper,
  SearchBar,
  WrapperSearchBarMobile,
  TitleAndSearch,
  ProfileWrapper,
  NotificationWrapper,
  BoxProfile,
  StyledLink,
  WrapperSearchBar,
  HamburgerLine,
  Hamburger,
  HamburgerWrapper,
  MobileNavWrapper,
  Navbar,
  Content,
  TextMenu,
  MenuList,
  WrapperProfileMobile,
} from "./dashboard.layout.style";
import { Button } from "@/components/Button/Button";
import Input from "@/components/Form/Input";

const StyledTippy = styled(Tippy)`
  & {
    // background: rgba(255, 255, 255, 0.75);
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    // color: #292d32;
    font-size: 12px;
    line-height: 18px;
    padding: 5px 20px;
    width: max-content;
  }

  @media screen and (max-width: 768px) {
    & {
      display: none;
    }
  }
`;

const ApplyDiscount = styled.div`
  width: 198px;
  height: 116px;
  padding: 15px 16px;
  box-shadow: 0px 9px 46px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: absolute;
  top: 78px;
  right: 0;
  background: #fff;

  input {
    width: 100%;
    height: 38px;
    padding: 10px 13px;
    border-radius: 7px;
    background: #ffffff;
    border: 0.75px solid #e3e6f3;
    margin-top: unset;

    :placeholder {
      font-size: 12px;
      line-height: 18px;
    }
  }

  button {
    width: 100%;
    height: 38px;
    padding: 10px;
    border-radius: 7px;
    margin-top: 10px;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    justify-content: center;
  }
`;

function DashboardLayout({
  pageTitle,
  event: { setShowMenu, setShowSearchBarMobile },
  showMenu,
  shouldChangeNav,
  showSearchBarMobile,
  myRef: { navbarRef, searchInputRef },
}) {
  const { pathname } = useLocation();
  const handleClickMenu = () => {
    setShowMenu(false);
  };

  const [showApplyDiscount, setShowApplyDiscount] = useState(false);

  const [source, target] = useSingleton({
    overrides: ["placement"],
  });

  return (
    <>
      <StyledTippy
        singleton={source}
        moveTransition="transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
      />
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <Wrapper>
        {showMenu && (
          <BackdropSidebar
            className="backdrop"
            onClick={handleClickMenu}
            onTouchStart={handleClickMenu}
          />
        )}
        <Sidebar showMenu={showMenu}>
          <img src="/images/logo.png" alt="logo" />
          <SidebarHeaderMobile>
            <img
              src="/images/infinity-logo.png"
              alt="logo"
              className="infinity-logo"
            />
            <WrapperProfileMobile>
              {shouldChangeNav && (
                <ProfileWrapper className="avatar">
                  <img src="/images/default-avatar.png" alt="avatar" />
                </ProfileWrapper>
              )}
              <SearchIconWrapperMobile onClick={() => setShowMenu(!showMenu)}>
                <CloseIcon />
              </SearchIconWrapperMobile>
            </WrapperProfileMobile>
          </SidebarHeaderMobile>
          <Menu>
            <StyledLink
              className={`${pathname === "/dashboard" && "isActive"}`}
              to="/dashboard"
              onClick={handleClickMenu}
            >
              <StyledTippy
                content="Dashboard"
                singleton={target}
                placement="right"
              >
                <MenuList>
                  <CategoryIcon className="icon-for-pc" />
                  <TextMenu>Dashboard</TextMenu>
                </MenuList>
              </StyledTippy>
            </StyledLink>

            <StyledLink
              className={`${pathname === "/dashboard/messages" && "isActive"}`}
              to="/dashboard/messages"
              onClick={handleClickMenu}
            >
              <StyledTippy content="Chat" singleton={target} placement="right">
                <MenuList>
                  <ChatIcon className="icon-for-pc" />
                  <TextMenu>Messages</TextMenu>
                </MenuList>
              </StyledTippy>
            </StyledLink>

            <StyledLink
              className={`${pathname === "/dashboard/visitors" && "isActive"}`}
              to="/dashboard/visitors"
              onClick={handleClickMenu}
            >
              <StyledTippy
                content="Visitors"
                singleton={target}
                placement="right"
              >
                <MenuList>
                  <VisitorsIcon className="icon-for-pc" />
                  <TextMenu>Visitors</TextMenu>
                </MenuList>
              </StyledTippy>
            </StyledLink>

            <StyledLink
              className={`${pathname === "/dashboard/contacts" && "isActive"}`}
              to="/dashboard/contacts"
              onClick={handleClickMenu}
            >
              <StyledTippy
                content="Contacts"
                singleton={target}
                placement="right"
              >
                <MenuList>
                  <ContactIcon className="icon-for-pc" />
                  <TextMenu>Contact</TextMenu>
                </MenuList>
              </StyledTippy>
            </StyledLink>

            <StyledLink
              className={`${pathname === "/dashboard/campaign" && "isActive"}`}
              to="/dashboard/campaign"
              onClick={handleClickMenu}
            >
              <StyledTippy
                content="Campaign"
                singleton={target}
                placement="right"
              >
                <MenuList>
                  <CampaignIcon className="icon-for-pc" />
                  <TextMenu>Campaign</TextMenu>
                </MenuList>
              </StyledTippy>
            </StyledLink>

            <StyledLink
              className={`${
                (pathname === "/dashboard/helpdesk" ||
                  pathname.includes("helpdesk")) &&
                "isActive"
              }`}
              to="/dashboard/helpdesk"
              onClick={handleClickMenu}
            >
              <StyledTippy
                content="Helpdesk"
                singleton={target}
                placement="right"
              >
                <MenuList>
                  <HelpdeskIcon className="icon-for-pc" />
                  <TextMenu>Helpdesk</TextMenu>
                </MenuList>
              </StyledTippy>
            </StyledLink>

            <StyledLink
              className={`${pathname === "/dashboard/analytics" && "isActive"}`}
              to="/dashboard/analytics"
              onClick={handleClickMenu}
            >
              <StyledTippy
                content="Analytics"
                singleton={target}
                placement="right"
              >
                <MenuList>
                  <AnalyticIcon className="icon-for-pc" />
                  <TextMenu>Analytics</TextMenu>
                </MenuList>
              </StyledTippy>
            </StyledLink>

            <StyledLink
              className={`${
                (pathname === "/dashboard/plugins" ||
                  pathname.includes("plugins")) &&
                "isActive"
              }`}
              to="/dashboard/plugins"
              onClick={handleClickMenu}
            >
              <StyledTippy
                content="Plugins"
                singleton={target}
                placement="right"
              >
                <MenuList>
                  <PluginIcon className="icon-for-pc" />
                  <TextMenu>Plugins</TextMenu>
                </MenuList>
              </StyledTippy>
            </StyledLink>

            <StyledLink
              className={`${pathname === "/dashboard/settings" && "isActive"}`}
              to="/dashboard/settings"
              onClick={handleClickMenu}
            >
              <StyledTippy
                content="Settings"
                singleton={target}
                placement="right"
              >
                <MenuList>
                  <SettingIcon className="icon-for-pc" />
                  <TextMenu>Settings</TextMenu>
                </MenuList>
              </StyledTippy>
            </StyledLink>

            <StyledLink to="/logout" onClick={(e) => e.preventDefault()}>
              <StyledTippy
                content="Logout"
                singleton={target}
                placement="right"
              >
                <MenuList>
                  <LogoutIcon
                    style={{ transform: "translateX(-3px)" }}
                    className="icon-for-pc"
                  />
                  <TextMenu>Logout</TextMenu>
                </MenuList>
              </StyledTippy>
            </StyledLink>
          </Menu>
        </Sidebar>
        <Content>
          <Navbar ref={navbarRef}>
            <MobileNavWrapper>
              <HamburgerWrapper onClick={() => setShowMenu(!showMenu)}>
                <Hamburger>
                  <HamburgerLine />
                  <HamburgerLine />
                </Hamburger>
              </HamburgerWrapper>
              {shouldChangeNav ? (
                <Text weight="semi-bold" className="title-nav-mobile">
                  {pageTitle}
                </Text>
              ) : (
                <img
                  src="/images/infinity-logo.png"
                  alt="logo"
                  className="infinity-logo"
                />
              )}
            </MobileNavWrapper>
            <H1
              weight="semi-bold"
              style={{ width: "200px" }}
              className="page-title-nav"
            >
              {pageTitle}
            </H1>
            <WrapperSearchBar>
              <SearchIcon />
              <SearchBar placeholder="Search in here" />
            </WrapperSearchBar>
            <BoxProfile>
              <NotificationWrapper
                onClick={() => setShowApplyDiscount(!showApplyDiscount)}
              >
                <DiscountIcon />
                {showApplyDiscount && (
                  <ApplyDiscount>
                    <Input placeholder="Insert Code In Here" />
                    <Button>Apply</Button>
                  </ApplyDiscount>
                )}
              </NotificationWrapper>
              {shouldChangeNav ? (
                <SearchIconWrapperMobile
                  className="s-icon-m"
                  onClick={() => setShowSearchBarMobile(!showSearchBarMobile)}
                >
                  <SearchIcon />
                </SearchIconWrapperMobile>
              ) : (
                <ProfileWrapper>
                  <img src="/images/default-avatar.png" alt="avatar" />
                  <Text
                    size="lg"
                    weight="medium"
                    margin="0 26px 0 16px"
                    className="profile-name"
                  >
                    Samantha
                  </Text>
                </ProfileWrapper>
              )}
            </BoxProfile>
          </Navbar>
          <TitleAndSearch>
            <Text size="2xl" weight="semi-bold" className="page-title-nav">
              {pageTitle}
            </Text>
            <SearchIconWrapperMobile
              onClick={() => setShowSearchBarMobile(!showSearchBarMobile)}
            >
              {!showSearchBarMobile ? <SearchIcon /> : <CloseIcon />}
            </SearchIconWrapperMobile>
            {showSearchBarMobile && (
              <WrapperSearchBarMobile
                active={showSearchBarMobile}
                isFixed={shouldChangeNav}
              >
                <SearchIcon />
                <SearchBar
                  placeholder="Search in here"
                  ref={searchInputRef}
                  onBlur={() => setShowSearchBarMobile(false)}
                />
              </WrapperSearchBarMobile>
            )}
          </TitleAndSearch>
          <Outlet />
        </Content>
      </Wrapper>
    </>
  );
}

export default withInteractiveDashboard(DashboardLayout);
