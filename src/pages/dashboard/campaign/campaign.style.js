import styled from "styled-components";

import { ContentContainer } from "@/layouts/content-container.layout";
import TableContainer from "@components/Table/Table";
import { Popup, PopupContainer } from "@components/Popup/Popup";
import { Button } from "@components/Button/Button";

export const CampaignContainer = styled(ContentContainer)`
  display: flex;
  position: relative;
`;

export const CampaignContent = styled.div`
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

export const TableWrapper = styled(TableContainer)`
  margin-top: 30px;
  height: calc(100vh - 283.5px);
  padding-right: 15px;
  overflow-y: auto;

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
        td {
          :nth-child(2) {
            span.ready-activate {
              color: #32b874;
            }

            span.not-configured {
              color: #adb5c2;
            }

            span.not-configured::before {
              content: "";
              display: block;
              position: absolute;
              width: 6px;
              height: 6px;
              background: #c1c7d4;
              left: -19px;
              top: 3px;
              bottom: 0;
              border-radius: 50%;
              box-shadow: 0 0 0 4px rgba(193, 199, 212, 0.3);
            }

            span {
              position: relative;
              display: inline-block;
            }

            span.ready-activate::before {
              content: "";
              display: block;
              position: absolute;
              width: 6px;
              height: 6px;
              background: #32b874;
              left: -19px;
              top: 3px;
              bottom: 0;
              border-radius: 50%;
              box-shadow: 0 0 0 4px rgba(50, 184, 116, 0.3);
            }
          }

          :nth-child(3) span.reached {
            background: ${(props) => props.theme.colors["cb-purple"]};
            color: white;
            border-radius: 24px;
            padding: 6px 15px;
            width: max-content;
          }

          :nth-child(3) span.recipients {
            background: #1d0e3d;
            color: white;
            border-radius: 24px;
            padding: 6px 15px;
          }

          .text-checkbox {
            color: #292d32;
            font-weight: 500;
          }
        }
      }
    }
  }

  @media screen and (max-width: 996px) {
    & {
      height: unset;

      table {
        tr {
          span {
            font-size: ${(props) => props.theme.fontSize["xs"]};
          }

          :not(tr:nth-child(1)) td {
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

              ::before {
                content: "Contacts";
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

export const PopupWrapper = styled(Popup)`
  width: 614px;

  .title {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 996px) {
    & {
      width: 100%;
      position: fixed;
      inset: 0;
      border-radius: unset;
      overflow-y: auto;
      padding: 0 20px 20px 20px;

      .title {
        position: sticky;
        top: 0;
        background: white;
        padding: 24px;
        z-index: 200;
        margin-left: -20px;
        margin-right: -20px;
        margin-bottom: unset;
        box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.05);
      }
    }
  }
`;

export const StyledPopupContainer = styled(PopupContainer)`
  overflow-y: auto;
  // padding: 20px;
`;

export const PopupButton = styled(Button)`
  width: 100%;
  text-align: center;
  display: inline-flex;
  justify-content: center;

  .active {
    background: ${(props) => props.theme.colors["cb-purple"]};
    color: white;
  }

  &.name-campaign-active {
    width: 339px;
    align-self: flex-end;
    margin-right: -30px;
  }

  :disabled {
    color: #adb5c2;
    background: #f4f7fa;
    cursor: not-allowed;
  }

  @media screen and (max-width: 996px) {
    &.name-campaign-active {
      width: 100%;
      margin-right: unset;
    }
  }
`;

export const HeaderPopup = styled.div`
  background: ${(props) => props.theme.colors["cb-purple"]};
  border-radius: 12px;
  padding: 20px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 996px) {
    & {
      p {
        font-size: ${(props) => props.theme.fontSize["xs"]};
      }
    }
  }
`;

export const TextHeaderPopupWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  width: max-content;

  :nth-child(2) {
    margin-left: 40px;
  }

  @media screen and (max-width: 996px) {
    & {
      :nth-child(2) {
        margin-left: 12px;
      }
    }
  }
`;

export const NumberText = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  font-size: ${(props) => props.theme.fontSize["xs"]};
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  margin-right: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;

  &.active {
    background: white;
    color: ${(props) => props.theme.colors["cb-purple"]};
  }
`;

export const ContentPopup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px 30px 0 30px;
  text-align: center;

  .title-content {
    margin-bottom: 12px;
  }

  .desc-content {
    color: #adb5c2;
    line-height: 26px;
  }

  @media screen and (max-width: 996px) {
    & {
      margin-top: 25px;
      padding: unset;

      .title-content {
        font-size: 14px;
        line-height: 21px;
      }
    }
  }
`;

export const TypeCampaignCards = styled.div`
  margin-top: 27px;
  display: flex;
  margin-bottom: 33px;
  justify-content: space-between;
  // flex-wrap: wrap;

  & > div {
    padding: 25px 27px;
    cursor: pointer;
    width: 236px;
    height: 218px;
    display: flex;
    justify-content: flex-end;
    position: relative;

    &.active {
      outline: 1px solid ${(props) => props.theme.colors["cb-purple"]};
    }

    img {
      top: -35px;
      position: absolute;
    }

    .card-desc {
      font-size: 10px;
      line-height: 15px;
      color: #292d32;
      margin-top: 11px;
    }

    :hover {
      outline: 1px solid ${(props) => props.theme.colors["cb-purple"]};
    }
  }

  @media screen and (max-width: 996px) {
    justify-content: center;
    flex-wrap: wrap;

    img {
      // display: none;
    }

    & > div:not(div:last-child) {
      margin-bottom: 52px;
    }

    & > div {
      height: 218px;
      text-align: center;
      width: 236px;

      :last-child {
        padding: 25px;
        margin-bottom: 10px;
      }
    }
  }
`;

export const NameCampaignWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 30px -30px 25px -30px;

  @media screen and (max-width: 996px) {
    margin: 30px 0 25px 0;
  }
`;

export const LabelNameCampaign = styled.label``;
export const InputCampaign = styled.input`
  padding: 13px 20px;
  border-radius: 10px;
  border: 1px solid #c1c7d4;
  margin-top: 12px;

  :placeholder {
    color: #adb5c2;
    font-size: 12px;
  }
`;

export const StyledPopupContainerRecipient = styled(PopupContainer)`
  // overflow-y: auto;

  @media screen and (max-width: 996px) {
    & {
      padding: 20px;
    }
  }
`;

export const RecipientPopup = styled(Popup)`
  width: 1242px;
  padding: 30px 30px 0 30px;
  overflow: hidden;

  @media screen and (max-width: 996px) {
    & {
      width: auto;
      overflow-y: auto;
      position: fixed;
      right: 0;
      top: 0;
      bottom: 0;
      left: 0;
      border-radius: unset;
      padding: 0 20px 0 20px;
    }
  }
`;

export const RecipientPopupTitle = styled.div`
  text-align: center;
  position: relative;

  @media screen and (max-width: 996px) {
    & {
      text-align: left;
      padding: 24px;
      position: sticky;
      top: 0;
      background: white;
      z-index: 200;
      box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.05);
      margin-left: -20px;
      margin-right: -20px;

      p {
        font-size: 16px;
      }
    }
  }
`;

export const CloseWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background: #f4f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;

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

export const PopupContentRecepient = styled.div`
  margin-top: 40px;
  padding: 0 70px;

  @media screen and (max-width: 996px) {
    & {
      padding: unset;
      margin-top: 20px;
    }
  }
`;

export const StatusDotBar = styled.div`
  width: 425px;
  height: 19px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  overflow: hidden;

  ::before {
    content: "";
    display: flex;
    position: absolute;
    align-items: center;
    top: calc(50% - 3px);
    right: 3px;
    bottom: 0;
    left: 0;
    height: 3px;
    background: #dee1ed;
    z-index: -1;
  }

  @media screen and (max-width: 996px) {
    & {
      width: 284px;
      height: 13px;

      @media screen and (max-width: 375px) {
        width: 100%;
      }

      ::before {
        height: 2px;
        top: calc(50% - 2px);
      }
    }
  }
`;

export const StatusDot = styled.div`
  width: 19px;
  height: 19px;
  background: #dee1ed;
  border-radius: 100%;
  text-align: center;
  position: relative;

  &.active {
    background: white;
    border: 4px solid ${(props) => props.theme.colors["cb-purple"]};
    position: relative;
    transition: background 0s 1s, border 0s 1s;

    ::after {
      content: "";
      display: block;
      position: absolute;
      width: 0px;
      z-index: -1;
      height: 3px;
      background: ${(props) => props.theme.colors["cb-purple"]};
      top: calc(50% - 3px);
      bottom: 0;
      left: -140px;
      right: 3px;
      animation: toRight 1s forwards;
    }

    @keyframes toRight {
      to {
        width: 140px;
      }
    }
  }

  @media screen and (max-width: 996px) {
    & {
      width: 13px;
      height: 13px;

      &.active {
        border: 3px solid ${(props) => props.theme.colors["cb-purple"]};

        ::after {
          height: 2px;
          top: calc(50% - 2px);
        }
      }
    }
  }
`;

export const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatusDotText = styled.div`
  display: flex;
  width: 481px;
  margin: 17px auto auto auto;
  line-height: 24px;
  justify-content: space-between;

  p {
    color: #c1c7d4;

    &.active {
      color: #000;
    }
  }

  p:nth-child(2) {
    margin-left: -28px;
  }

  @media screen and (max-width: 996px) {
    & {
      justify-content: center;
      width: 333px;

      @media screen and (max-width: 375px) {
        width: 100%;
      }

      p {
        font-size: 11px;

        :not(&:first-child) {
          margin-left: 45px;

          @media screen and (max-width: 375px) {
            margin-left: 20px;
          }
        }
      }
    }
  }
`;

export const CardsCampaignRecipient = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 46px;

  @media screen and (max-width: 996px) {
    & {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(157px, 1fr));
      gap: 19px;
    }
  }
`;

export const CardCampaignRecipient = styled.div`
  width: 244px;
  height: 185px;
  border: 1px solid #f9fafe;
  box-shadow: 0px 15px 55px rgba(77, 77, 77, 0.08);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 34px 23px 34px;
  text-align: center;

  @media screen and (max-width: 996px) {
    & {
      width: 100%;
      padding: 10px;
      height: 119px;

      p {
        // margin-top: unset !important;
        font-size: 11px;
      }

      img {
        width: 39px;
        height: 39px;
        object-fit: contain;
      }
    }
  }

  p {
    margin-top: 22px;
  }
`;

export const InputSearchContact = styled.input`
  width: 100%;
  border-radius: 12px;
  border: 1px solid #c1c7d4;
  padding: 15px 38px;
  margin-top: 33px;

  :placeholder {
    color: #adb5c2;
  }
`;

export const TableWrapperContact = styled.div`
  margin-top: 13px;

  table {
    border: 1px solid #f9fafe;
    width: 100%;

    thead {
      th {
        text-align: left;
        padding: 14px 18px;
        border-radius: 15px;
        font-size: 14px;
        color: #adb5c2;
        border-bottom: 1px solid #f9fafe;
      }
    }

    tbody {
      td {
        padding: 22px 18px;
        font-size: 12px;
        color: #adb5c2;

        :first-child {
          color: #292d32;
          font-weight: 500;

          label {
            display: flex;
            align-items: center;

            .checkbox-contact {
              margin-right: 15px;
            }
          }
        }
      }

      @media screen and (max-width: 996px) {
        & {
          tr {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
`;

export const SettingWrapper = styled.div`
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

export const FlexWrap = styled.div`
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

export const SendInWrapper = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;

  .email-input {
    margin-left: 14px;
  }
`;

export const ProfileWrap = styled.div`
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

export const ButtonWrapper = styled.div`
  // width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 104px;
  background: #f9fafe;
  margin-right: -30px;
  margin-left: -30px;

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

export const AvailableTemplateWrapper = styled.div`
  border: 1px solid #ebeef9;
  border-radius: 15px;
  margin-top: 39px;
  height: 457px;
  overflow-y: auto;
  padding: 23px 40px;
`;

export const TextAvailableTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #adb5c2;

  p:first-child {
    margin-bottom: 20px;
    color: black;
  }

  p:last-child {
    width: 749px;
    line-height: 26px;
    text-align: center;
  }

  @media screen and (max-width: 996px) {
    & {
      p:first-child {
        font-size: 14px;
        margin-bottom: 15px;
      }

      p:last-child {
        font-size: 12px;
        width: 273px;
      }
    }
  }
`;

export const CardTemplatesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;
`;

export const CardTemplate = styled.div`
  width: 284px;
  height: 252px;
  border-radius: 15px;
  border: 1px solid #ebeef9;

  @media screen and (max-width: 996px) {
    & {
      width: 100%;
    }
  }
`;

export const CardTemplateHeader = styled.div`
  width: 100%;
  height: 70px;
  border-radius: 15px;
  background: ${(props) => props.theme.colors["cb-purple"]};
  padding: 18px 68px;
`;

export const ContentTemplate = styled.div`
  padding: 12px 16px;
  height: calc(100% - 150px);
  text-align: center;
  overflow-y: auto;

  p:first-child {
    line-height: 18px;
  }

  p:nth-child(2),
  p:last-child {
    font-size: 10px;
    color: #c1c7d4;
    line-height: 15px;
    margin-top: 7px;
  }

  p:last-child {
    color: #292d32;
  }

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const CardTemplateAction = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 100%;
  background: ${(props) => props.theme.colors["cb-purple"]};
  border-radius: 0px 0px 15px 15px;
  border: 1px solid #ebeef9;
  justify-content: center;
  align-items: center;
  padding: 10px 16px;

  p {
    font-size: 12px;
    line-height: 18px;
    color: white;
    width: 100%;
    text-align: left;
    margin-bottom: 9px;
    font-weight: 500;
  }

  button {
    color: ${(props) => props.theme.colors["cb-purple"]};
    padding: 8px 34px;
    font-weight: 500;
    font-size: 10px;
  }
`;

export const SettingEditorWrapper = styled.div`
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

export const ButtonsAction = styled.div`
  width: 226px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  border-radius: 14px;
  background: #f9fafe;

  button {
    padding: 10px 25px;
    border-radius: 14px;
    background: #f9fafe;
    color: ${(props) => props.theme.colors["cb-purple"]};

    &.active {
      color: white;
      background: ${(props) => props.theme.colors["cb-purple"]};
    }
  }

  @media screen and (max-width: 996px) {
    & {
      margin: 20px auto auto auto;
    }
  }
`;
