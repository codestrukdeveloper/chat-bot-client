import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { fadeIn } from "@/utils/animation/fadeIn-animation";
import Text from "@/components/Typography/Text";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  overflow: hidden;

  @media screen and (min-width: 996px) {
    & {
      height: 100vh;
    }
  }

  @media screen and (max-width: 996px) {
    padding: 25px 20px;
    overflow: visible;
  }
`;

export const Sidebar = styled.aside`
  width: 114px;
  padding: 32px 0 32px 0;
  background: ${(props) => props.theme.colors["cb-purple"]};
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;
  border-radius: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0px;
  }

  & > img {
    z-index: 5;
    position: sticky;
    top: 0;
    backdrop-filter: blur(2px);
  }

  @media screen and (max-width: 996px) {
    & {
      height: 100vh;
      width: 0%;
      overflow: hidden;
      background: white;
      position: fixed;
      z-index: 99999;
      border-radius: unset;
      align-items: flex-start;
      padding: unset;
      justify-content: start;
      transition: width 0.3s;

      & > img {
        display: none;
      }

      ${(props) =>
        props.showMenu &&
        `
        width: 90%;
        transition: .5s;
      `}
    }
  }
`;

export const Menu = styled.ul`
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (max-width: 996px) {
    & {
      height: 100%;
      padding: 20px;
      overflow-y: auto;
      overflow-x: hidden;

      ::-webkit-scrollbar {
        width: 4px;
      }

      ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.colors["cb-purple"]};
        border-radius: 10px;
      }

      ::-webkit-scrollbar-track {
        margin-top: 40px;
        margin-bottom: 40px;
      }
    }
  }
`;

export const MenuList = styled.li`
  cursor: pointer;
  text-align: center;
  background: ${(props) => props.theme.colors["cb-purple"]};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: auto;
  position: relative;

  @media screen and (min-width: 768px) {
    :hover {
      svg {
        z-index: 10;
        circle {
          fill: #8852f3;
          transition: 0.3s;
        }
      }
    }
  }

  @media screen and (max-width: 996px) {
    & {
      width: 100%;
      border-radius: unset;
      background: none;
      height: 66px;
      text-align: left;

      svg {
        circle {
          fill: none;
        }
        path {
          stroke: #c7c7c7;
        }
      }
    }
  }
`;

export const Navbar = styled.nav`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  background: white;
  padding: 10px 0 30px 0;
  z-index: 20;

  .logo-mobile {
    display: none;
  }

  @media screen and (max-width: 996px) {
    & {
      padding: 11px 21px;
      box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.05);
      position: fixed;
      left: 0;
      right: 0;
      top: 0;

      h1 {
        display: none;
      }

      .logo-mobile {
        display: block;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 996px) {
    & {
      width: calc(100% - 114px);
      padding-left: 42px;
    }
  }

  @media screen and (max-width: 996px) {
    margin-top: 68px;
  }
`;

export const WrapperSearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #f5f7fb;
  padding: 11px 16px;
  border-radius: 10px;

  @media screen and (max-width: 996px) {
    & {
      display: none;
    }
  }
`;

export const SearchBar = styled.input`
  background: transparent;
  margin-left: 16px;
  color: ${(props) => props.theme.colors["cb-black"]};
  font-size: ${(props) => props.theme.fontSize.sm};
  width: 250px;

  @media screen and (max-width: 996px) {
    & {
      width: 100%;
    }
  }

  ::placeholder {
    color: #c1c7d4;
  }
`;

export const BoxProfile = styled.div`
  display: flex;
  align-items: center;
`;

export const NotificationWrapper = styled.div`
  background: #f9fafe;
  padding: 15px;
  border-radius: 100%;
  position: relative;
  margin-right: 12px;
  cursor: pointer;

  ${(props) =>
    props.countNotification &&
    `
  ::before {
    content: "${props.countNotification}";
    position: absolute;
    top: 0;
    right: 0;
    width: 20px;
    height: 20px;
    background: ${props.theme.colors["cb-purple"]};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 10px;
    font-weight: 500;
    border-radius: 100%;
  }
  
  `}

  @media screen and (max-width: 996px) {
    & {
      width: 44px;
      height: 44px;
      padding: unset;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const ProfileWrapper = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 49px;
  border: 1px solid #f5f7fb;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 996px) {
    & {
      padding: 5px;
      width: 44px;
      height: 44px;
      justify-content: center;

      img {
        width: 34px;
      }
      .profile-name {
        display: none;
      }
    }
  }
`;

export const HamburgerWrapper = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Hamburger = styled.div`
  width: 20px;
  height: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HamburgerLine = styled.span`
  display: block;
  height: 2px;
  width: 100%;
  background: #172837;
  border-radius: 30px;
`;

export const MobileNavWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 996px) {
    display: none;
  }

  @media screen and (max-width: 340px) {
    & {
      .logo-mobile {
        display: none;
      }
    }
  }

  .title-nav-mobile {
    font-size: 22px;
    animation: ${fadeIn} 1.5s forwards;
  }

  .logo-mobile {
    animation: ${fadeIn} 1.5s forwards;
  }
`;

export const SearchIconWrapperMobile = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #f9fafe;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 1.5s forwards;
  cursor: pointer;
`;

export const TitleAndSearch = styled.div`
  display: flex;
  margin-bottom: 17px;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media screen and (min-width: 996px) {
    display: none;
  }
`;

export const WrapperSearchBarMobile = styled(WrapperSearchBar)`
  display: none;
  background: white;
  box-shadow: 0px 7px 44px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  color: #c1c7d4;
  padding: 18px 16px;
  position: absolute;
  right: 0;
  left: 0;
  top: 60px;
  z-index: 10;
  animation: showSearchBar 0.3s forwards;

  ${(props) =>
    props.isFixed &&
    `
    & {
      position: fixed;
      top: 70px;
      left: 20px;
      right: 20px;
    }
  `}

  ::before {
    content: "";
    display: block;
    position: absolute;
    top: -20px;
    right: 17px;
    border-top: 10px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
  }

  @media screen and (max-width: 996px) {
    & {
      display: flex;
    }
  }

  @keyframes showSearchBar {
    from {
      transform: translate(0, -50px);
      opacity: 0;
    }
    to {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
`;

export const SidebarHeaderMobile = styled.div`
  display: none;

  @media screen and (max-width: 996px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 11px 21px;
  }
`;

export const BackdropSidebar = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.15);
  transition: 1s;
  z-index: 30;
`;

export const StyledLink = styled(NavLink)`
  padding: 0.35rem 0;
  cursor: default;
  text-decoration: none;

  @media screen and (min-width: 996px) {
    &.isActive.active {
      position: relative;
      background: white;
      // transition: border-top-left-radius 0.2s ease-in-out,
      //   border-bottom-left-radius ease-in-out 0.2s 0.2s;
      border-top-left-radius: 50%;
      border-bottom-left-radius: 50%;
      border-left: 32px solid #7b40f2;
      border-right: 32px solid transparent;
    }

    &.isActive.active::before {
      content: "";
      position: absolute;
      top: -40px;
      right: -32px;
      width: 40px;
      height: 40px;
      background-color: #7b40f2;
      border-bottom-right-radius: 50%;
      box-shadow: 10px 10px white;
    }

    &.isActive.active::after {
      content: "";
      position: absolute;
      bottom: -40px;
      right: -32px;
      width: 40px;
      height: 40px;
      background-color: #7b40f2;
      border-top-right-radius: 50%;
      box-shadow: 10px -10px white;
    }
  }

  @media screen and (max-width: 996px) {
    & {
      color: #c7c7c7;
      padding: unset;

      svg {
        margin-left: 10px;
      }
    }

    &.isActive.active {
      background: ${(props) => props.theme.colors["cb-purple"]};
      border-radius: 12px;
      color: white;

      svg {
        path {
          stroke: #fff;
        }
      }
    }
  }
`;

export const TextMenu = styled(Text)`
  width: 100%;
  text-align: left;
  margin-left: 8px;
  font-size: ${(props) => props.theme.fontSize["lg"]};
  font-weight: ${(props) => props.theme.fontWeight["regular"]};

  @media screen and (min-width: 996px) {
    display: none;
  }
`;

export const WrapperProfileMobile = styled.div`
  display: flex;

  .avatar {
    margin-right: 12px;
  }
`;
