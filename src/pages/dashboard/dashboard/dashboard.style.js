import styled from "styled-components";
import Calendar from "react-calendar";

import { fadeIn } from "@/utils/animation/fadeIn-animation";
import Text from "@components/Typography/Text";

export const Main = styled.div`
  display: flex;
  animation: ${fadeIn} 0.3s forwards;

  @media screen and (max-width: 996px) {
    & {
      flex-direction: column;
    }
  }
`;

export const WrapperColOne = styled.div`
  width: calc(100% - 400px);
  overflow: hidden;

  @media screen and (max-width: 996px) {
    & {
      width: 100%;
    }
  }
`;

export const HeroHeader = styled.header`
  background: linear-gradient(265.94deg, #7220ff -9.01%, #7f35fd 109.75%);
  border-radius: 25px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
  height: 200px;
  overflow: hidden;

  .welcome-desc {
    width: 425px;
  }

  @media screen and (max-width: 996px) {
    & {
      padding: 40px 40px 0 40px;
      flex-direction: column;
      height: auto;

      .welcome-text {
        font-size: ${(props) => props.theme.fontSize["2xl"]};
        line-height: 57.72px;
        text-align: center;
      }

      .welcome-desc {
        margin: unset;
        font-size: ${(props) => props.theme.fontSize["xs"]};
        text-align: center;
        width: 306px;
      }

      img {
        transform: translateY(5px);
      }
    }
  }
`;

export const TextWrapper = styled.div``;

export const SetupWrapper = styled.div`
  padding: 20px;
  margin-top: 20px;
  border-radius: 22px;
  overflow: hidden;
  height: calc(100vh - 374px);
  border: 0.75px solid ${(props) => props.theme.colors["cb-purple"]};

  @media screen and (max-width: 996px) {
    & {
      padding: 20px 20px 30px 20px;
      margin-top: 34px;
      height: auto;
    }
  }
`;

export const BorderedWrapper = styled.div`
  height: 100%;
  border-radius: 15px;
  border-left: 1px solid #e3e6f3;
  border-right: 1px solid #e3e6f3;
  border-bottom: 1px solid #e3e6f3;
`;

export const SetupHeader = styled.div`
  border-radius: 15px;
  background: #f9fafe;
  outline: 1px solid #3f8cff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  padding: 0 30px 0 30px;

  @media (min-width: 1440px) {
    padding: 0 83px 0 30px;
  }

  .text-wrapper-setup {
    margin-left: 16px;

    .desc-setup {
      line-height: 20px;
    }
  }

  img {
    align-self: flex-end;
  }

  @media screen and (max-width: 996px) {
    & {
      padding: 16px 27px 0 27px;

      .setup-header-img {
        display: none;
      }

      .text-wrapper-setup {
        p::nth-child(1) {
        }

        .desc-setup {
          font-size: ${(props) => props.theme.fontSize["xs"]};
          margin-bottom: 16px;
        }
      }
    }
  }
`;

export const StyledText = styled(Text)`
  color: #3f8cff;
`;

export const SetupAppsWrapper = styled.div`
  height: calc(100% - 112px);
  // margin-top: 35px;
  // padding: 12px 0 0 0;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  // gap: 12px;
  // row-gap: 40px;

  @media screen and (min-width: 1536px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors["cb-purple"]};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    margin-bottom: 150px;
  }

  @media screen and (max-width: 996px) {
    & {
      height: 657px;
      grid-template-columns: 100%;
      padding: unset;
      row-gap: unset;

      ::-webkit-scrollbar {
        width: 0;
      }
    }
  }
`;

export const AppCardWrapper = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid #e3e6f3;

  :nth-last-of-type(2),
  :last-child {
    border-bottom: unset;
  }

  :nth-child(odd) {
    border-right: 1px solid #e3e6f3;
  }

  @media screen and (max-width: 996px) {
    padding-top: 26px;
    border-bottom: unset;
    :nth-child(odd) {
      border-right: unset;
    }
  }
`;

export const AppCardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  img {
    box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.05);
  }

  @media screen and (max-width: 996px) {
    align-items: flex-start;
  }
`;

export const AppCardDetail = styled.div`
  margin-left: 13px;

  .app-detail {
    color: #c4c4c4;
    margin-top: 10px;
    line-height: 17px;
    width: 100%;
  }

  @media screen and (max-width: 996px) {
    .app-title {
      font-size: ${(props) => props.theme.fontSize["base"]};
      line-height: 1.5rem;
    }
  }
`;

export const AppCardButton = styled.button`
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.colors["cb-purple"]};
  color: ${(props) => props.theme.colors["cb-purple"]};
  cursor: pointer;
  background: transparent;
  padding: 10px 20px;
  font-family: "Poppins", sans-serif;
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  font-size: ${(props) => props.theme.fontSize["xs"]};
`;

export const IosButton = styled(AppCardButton)`
  background: #2e2e2e;
  border: unset;
  color: #fff;
  width: 105px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 8px;
  }
`;

export const AndroidButton = styled(IosButton)`
  background: #80c536;
  margin-left: 12px;
  padding: 10px 12px;
`;

export const WrapperColTwo = styled.div`
  width: 400px;
  padding: 0 0 30px 30px;
  position: sticky;
  top: 0;
  right: 0;

  .menu {
    display: flex;
    align-items: center;

    svg {
      margin-right: 14px;
    }
  }

  .menu--recent-chat {
    margin-top: 4px;
    margin-bottom: 20px;
    font-size: 17px;
  }

  @media screen and (max-width: 996px) {
    & {
      margin-top: 30px;
      position: relative;
      padding: unset;
      width: 100%;

      .menu {
        font-size: ${(props) => props.theme.fontSize["2xl"]};
      }

      .menu--recent-chat {
        margin-top: 34px;
      }
    }
  }
`;

export const MenuWrapper = styled.div`
  margin-top: 11px;
  background: #f9fafe;
  border-top-left-radius: 15.6px;
  border-bottom-left-radius: 15.6px;
  padding: 20px;
  height: calc(100vh - 186px);
  overflow-y: auto;

  ::after {
    content: "";
    display: block;
    position: absolute;
    top: 32px;
    bottom: 30px;
    right: -20px;
    width: 20px;
    background: #f9fafe;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors["cb-purple"]};
    border-radius: 10px;
  }

  @media screen and (max-width: 996px) {
    & {
      height: auto;
    }

    &::after {
      bottom: 0;
      top: 35px;
    }
  }
`;

export const MenuCategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 996px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

export const CardMenuCategory = styled.div`
  border-radius: 14px;
  padding: 15px;
  width: 156px;
  height: 86px;
  background: ${(props) => props.theme.colors[`cb-${props.bgColor}`]};
  margin-bottom: 16px;
  font-size: 12.8px;
  color: white;
  display: flex;
  align-items: flex-end;
  position: relative;
  cursor: pointer;

  ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 25px;
    height: 20px;
    border-radius: 12.7978px 0px 16.3527px;
    background: rgba(255, 255, 255, 0.1);
    padding: 11px 16px;
    background-image: url("/images/${(props) => props.imgFileName}.png");
    // background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media screen and (max-width: 996px) {
    & {
      border-radius: 18px;
      margin-bottom: unset;
      width: auto;
    }
  }
`;

export const RecentChatWrapper = styled.div`
  display: flex;
  border-radius: 12.8px;
  justify-content: space-between;
  background: white;
  padding: 14px 26px;
`;

export const RecentChatPeople = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  p {
    margin-top: 6px;
    font-size: 12px;
  }

  &.has-notif .img-profile {
    position: relative;
  }

  &.has-notif .img-profile::after {
    content: "${(props) => props.countNotif}";
    position: absolute;
    width: 14.22px;
    height: 8.53px;
    background: #3f8cff;
    box-shadow: 0px 2.84395px 2.84395px rgba(63, 140, 255, 0.17);
    border-radius: 7.82087px;
    font-size: 10px;
    color: white;
    bottom: 0;
    right: 0;
    text-align: center;
    padding: 2px 4px;
  }
`;

export const AvatarProfile = styled.div``;

export const StyledCalendar = styled(Calendar)`
  margin-top: 20px;
  background: white;
  font-family: "Poppins";
  border-radius: 14.22px;
  text-align: center;
  padding: 10px;
  z-index: 2;

  .selected-date {
    font-family: "Poppins";
    background: white;
    color: white !important;
    background: ${(props) => props.theme.colors["cb-purple"]};
  }

  .react-calendar__tile {
    font-size: 12px;
    padding: 2px;
    font-family: "Poppins";
    color: #5f5f5f;
  }

  .react-calendar__tile:hover {
    background: ${(props) => props.theme.colors["cb-purple"]};
    color: white;
  }

  @media screen and (max-width: 996px) {
    & {
      margin-top: 34px;
      padding: 25px;
      border-radius: 20px;

      .react-calendar__tile {
        font-size: 14px;
        padding: 9px 10px;
        border-radius: 50%;
      }
    }
  }
`;

export const Next = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background: white;
  background-image: url("/images/next.png");
  background-repeat: no-repeat;
  box-shadow: 0px 2.84395px 24.1736px rgba(0, 0, 0, 0.07);
  background-position: center;
  cursor: pointer;
`;

export const Prev = styled(Next)`
  background-image: url("/images/prev.png");
`;
