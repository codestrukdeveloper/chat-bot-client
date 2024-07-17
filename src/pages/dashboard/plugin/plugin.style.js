import styled from "styled-components";
import { ContentContainer } from "@/layouts/content-container.layout";
import Text from "@/components/Typography/Text";

export const PluginContainer = styled(ContentContainer)`
  display: flex;
  position: relative;

  @media screen and (max-width: 996px) {
    & {
      height: auto;
    }
  }
`;

export const PluginLists = styled.div`
  width: 283px;
  // height: 100%;
  height: max-content;
  border-radius: 15px;
  border: 1px solid #f1f4f9;
  // overflow-y: auto;
  padding-top: 25px;

  .title {
    line-height: 24px;
    font-weight: ${(props) => props.theme.fontWeight["semi-bold"]};
    color: #000016;
    padding-left: 20px;
  }

  @media screen and (max-width: 996px) {
    & {
      display: none;
    }
  }
`;

export const PluginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 29px;
`;

export const Plugin = styled.div`
  width: 100%;
  height: 65px;
  padding: 16px 24px;
  display: flex;
  align-items: center;

  .plugin-name {
    cursor: pointer;
    color: #292d32;
    font-size: ${(props) => props.theme.fontSize["sm"]};
    line-height: 21px;
    font-weight: ${(props) => props.theme.fontWeight["medium"]};
  }

  &.active {
    background: ${(props) => props.theme.colors["cb-purple"]};

    .plugin-name {
      color: white;
    }
  }

  img {
    margin-right: 20px;
  }
`;

export const PluginDetail = styled.div`
  width: calc(100% - 283px);
  height: auto;
  overflow-y: auto;
  border-radius: 15px 15px 0px 0px;
  // border: 1px solid #f1f4f9;
  margin-left: 28px;
  margin-bottom: -20px;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors["cb-purple"]};
    border-radius: 20px;
  }

  @media screen and (max-width: 996px) {
    & {
      width: 100%;
      margin-left: unset;

      ::-webkit-scrollbar {
        width: 0;
      }
    }
  }
`;

export const PluginHeader = styled.div`
  width: 100%;
  border-radius: 14px;
  background: ${(props) => props.theme.colors["cb-purple"]};
  padding: 31px 62px 23px 50px;
  height: 150px;
  display: flex;
  justify-content: space-between;
  border-left: 1px solid #f1f4f9;
  border-right: 1px solid #f1f4f9;

  .developer-text {
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #fff;
    margin-bottom: 12px;
  }

  @media screen and (max-width: 996px) {
    & {
      height: 99px;
      padding: 28px 0 12px 20px;

      .developer-text {
        display: none;
      }
    }
  }
`;

export const PluginThumb = styled.div`
  width: 166px;
  height: 166px;
  background: #ffffff;
  box-shadow: 0px 14px 38px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 996px) {
    & {
      width: 90px;
      height: 90px;

      img {
        width: 52px;
        height: 52px;
      }
    }
  }
`;

export const PluginTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;

  p {
    color: #fff;

    :first-child {
      font-weight: 600;
      font-size: 26px;
      line-height: 39px;
      margin-bottom: 12px;
    }

    :last-child {
      width: max-content;
      padding: 8px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      line-height: 24px;
      text-align: center;
    }
  }

  @media screen and (max-width: 996px) {
    & {
      margin-left: 15px;

      p {
        :first-child {
          font-size: ${(props) => props.theme.fontSize["lg"]};
          line-height: 27px;
          margin-bottom: 6px;
        }

        :last-child {
          padding: 4px 8px;
          font-size: ${(props) => props.theme.fontSize["xs"]};
          line-height: 18px;
        }
      }
    }
  }
`;

export const DeveloperProfile = styled.div`
  display: flex;
  color: white;

  .dev-name {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
  }

  .dev-username {
    font-size: 12px;
    line-height: 18px;
    margin-top: 5px;
    text-decoration-line: underline;
  }

  @media screen and (max-width: 996px) {
    &:not(&.prof-desc) {
      display: none;
      .dev-name,
      .dev-username {
        display: none;
      }
    }

    &.prof-desc {
      color: black;
    }
  }
`;

export const AvatarProfile = styled.div`
  width: 48px;
  height: 48px;
  background: #ffffff;
  border-radius: 9px;
  padding: 9px 6px 13px 7px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ProfileText = styled.div`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  ${(props) =>
    props.flex &&
    `
    display: flex
  `}
`;

export const PluginDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 41px 50px 39px 50px;
  border-left: 1px solid #f1f4f9;
  border-right: 1px solid #f1f4f9;

  @media screen and (max-width: 996px) {
    & {
      padding: 39px 20px 38px 20px;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: ${(props) => props.alignItems};
  // margin-bottom: 20px;
  line-height: 15px;

  &.desc-detail {
    margin-top: 28px;
  }

  :not(:last-child) {
    border-bottom: 1px solid #f1f4f9;
    padding-bottom: 20px;
  }

  .permission-desc {
    margin-top: 26px;
  }

  .messaging-desc--messenger {
    margin-left: 62px;
  }

  .website-desc--messenger {
    margin-left: 141px;
  }

  .website-desc--contact {
    margin-left: 137px;
  }

  .more-detail {
    margin-left: 62px;

    .more-detail-desc {
      font-size: ${(props) => props.theme.fontSize["xs"]};
    }
  }

  @media screen and (max-width: 996px) {
    & {
      align-items: flex-start;

      &.desc-detail {
        margin-top: 25px;
        flex-direction: column;

        .more-detail {
          margin-left: unset;
          margin-top: 5px;
        }

        .more-detail-desc {
          font-size: 10px;
        }
      }

      &:not(&.desc-detail) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }

      .permission-desc {
        grid-row-start: 1;
        grid-column-start: 1;
        grid-row-end: 2;
        grid-column-end: 3;
        margin-top: unset;
      }

      .messaging-desc--messenger,
      .website-desc--messenger,
      .website-desc--contact {
        margin-left: unset;
      }

      .website-desc--contact {
        margin-top: 5px;
      }
    }
  }
`;

export const ListsDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .btn-gethelp {
    font-size: ${(props) => props.theme.fontSize["sm"]};
    width: 129px;
    justify-content: center;
  }

  @media screen and (max-width: 996px) {
    & {
      :not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
`;

export const ListTitle = styled(Text)`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #292d32;
  margin-bottom: 10px;
`;

export const ListsDescription = styled.ul``;

export const List = styled.li`
  font-size: ${(props) => props.theme.fontSize["xs"]};
  color: ${(props) => props.theme.colors[props.color] ?? "#292d32"};
  text-decoration-line: ${(props) => (props.underline ? "underline" : "none")};
  line-height: 15px;
  font-weight: 500;
  cursor: ${(props) => (props.pointer ? "pointer" : "default")};

  @media screen and (max-width: 996px) {
    & {
      font-size: 10px;
    }
  }
`;

export const MoreDetailList = styled.div`
  display: flex;
  margin-top: 12px;
  flex-direction: column;
`;

export const ListMoreDetail = styled.ul`
  margin-top: 12px;
  transform: translateX(25px);

  @media screen and (max-width: 996px) {
    & {
      width: calc(100% - 25px);
    }
  }
`;
export const ListDetail = styled.li`
  list-style-type: initial;
  font-size: ${(props) => props.theme.fontSize["xs"]};
  line-height: 15px;

  @media screen and (max-width: 996px) {
    & {
      font-size: 10px;
    }
  }
`;

export const PluginConnect = styled.div``;

export const PluginConnectNav = styled.div`
  width: 100%;
  padding: 22px 50px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #f1f4f9;

  p {
    font-size: ${(props) => props.theme.fontSize["sm"]};
    line-height: 21px;

    :first-child {
      color: #292d32;
    }

    :last-child {
      color: #c1c7d4;
    }
  }

  @media screen and (max-width: 996px) {
    & {
      flex-direction: column;
      padding: 20px;

      p {
        :last-child {
          font-size: ${(props) => props.theme.fontSize["xs"]};
          margin-top: 10px;
        }
      }
    }
  }
`;

export const PluginConnectContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  margin-bottom: 40px;
  border: 1px solid #f1f4f9;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  padding-bottom: 50px;

  .connect-title {
    color: #292d32;
    line-height: 24px;
    font-weight: 500;
  }

  .connect-desc {
    color: #c1c7d4;
    font-size: 14px;
    line-height: 21px;
    margin: 16px 0 35px 0;
  }

  label {
    font-weight: 400;
  }

  input {
    width: 392px;
    margin-bottom: 20px;
    border: 1px solid #f1f4f9;

    ::placeholder {
      color: #c1c7d4;
    }
  }

  @media screen and (max-width: 996px) {
    & {
      padding: 20px;
      text-align: center;

      input {
        width: 278px;
      }

      .connect-title {
        font-size: ${(props) => props.theme.fontSize["sm"]};
      }

      .connect-desc {
        font-size: ${(props) => props.theme.fontSize["xs"]};
        margin: 16px 0 25px 0;
      }
    }
  }
`;