import styled from "styled-components";
import { ContentContainer } from "@/layouts/content-container.layout";
import { Button } from "@/components/Button/Button";
import Text from "@/components/Typography/Text";

export const SettingsContainer = styled(ContentContainer)`
  display: flex;
  position: relative;

  @media screen and (max-width: 996px) {
    & {
      height: auto;
    }
  }
`;

export const SettingLists = styled.div`
  width: 283px;
  // height: 100%;
  height: max-content;
  border-radius: 15px;
  border: 1px solid #f1f4f9;
  // overflow-y: auto;

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

export const Setting = styled.div`
  width: 100%;
  height: 70px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  cursor: pointer;

  :not(:last-child) {
    border-bottom: 1px solid #f1f4f9;
  }

  .plugin-name {
    cursor: pointer;
    color: #292d32;
    font-size: ${(props) => props.theme.fontSize["sm"]};
    line-height: 21px;
    font-weight: ${(props) => props.theme.fontWeight["medium"]};
  }

  &.active {
    background: #f9fafe;

    .setting-icon {
      box-shadow: 0px 13px 22px rgba(123, 64, 242, 0.19);
    }

    .plugin-name {
      color: ${(props) => props.theme.colors["cb-purple"]};
    }
  }
`;

export const SettingIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 8px;
  padding: 5px;
  background: ${(props) => props.theme.colors["cb-purple"]};
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SettingContents = styled.div`
  width: calc(100% - 283px);
  height: auto;
  overflow-y: auto;
  margin-left: 29px;

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

export const SettingContentWrapper = styled.div`
  padding: 30px 45px 40px 45px;
  border: 1px solid #f1f4f9;
  border-radius: 15px;
  display: flex;
  flex-direction: column;

  .btn-save {
    border-radius: 8px;
    box-shadow: 0px 16px 50px rgba(123, 64, 242, 0.29);
    width: 205px;
    padding: 15px 0;
    justify-content: center;
    align-self: flex-end;
  }

  :not(:last-child) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 996px) {
    & {
      padding: 24px 25px 25px 25px;
      overflow-x: hidden;

      .btn-save {
        width: 120px;
        padding: 10px 0;
        font-size: ${(props) => props.theme.fontSize["base"]};
      }
    }
  }
`;

export const SettingName = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .operators-mobile {
    display: none;
  }

  @media screen and (max-width: 996px) {
    .operators-mobile {
      display: flex;
      margin-bottom: 25px;
      width: 100%;
      margin-left: unset;
      height: auto;
    }
  }
`;

export const SettingTitle = styled.span`
  font-size: 26px;
  display: block;
  color: ${(props) => props.theme.colors[props.color] ?? "#292d32"};
  line-height: 39px;
  font-weight: ${(props) => props.theme.fontWeight["semi-bold"]};

  @media screen and (max-width: 996px) {
    font-weight: 600;
    font-size: ${(props) => props.theme.fontSize["lg"]};
    line-height: 27px;
  }
`;

export const SettingDescription = styled(Text)`
  line-height: 24px;
  color: #c4cad6;
  margin-top: 6px;

  @media screen and (max-width: 996px) {
    & {
      font-size: ${(props) => props.theme.fontSize["sm"]};
    }
  }
`;

export const MoreSettingDescription = styled(Text)`
  margin: 45px 0 40px 0;
  color: #adb5c2;
  line-height: 24px;

  p {
    :not(:last-child) {
      margin-bottom: 12px;
    }
  }

  @media screen and (max-width: 996px) {
    & {
      margin: 35px 0 20px 0;
      font-size: ${(props) => props.theme.fontSize["sm"]};

      p {
        font-size: ${(props) => props.theme.fontSize["sm"]};

        :not(:last-child) {
          margin-bottom: 16px;
        }
      }
    }
  }
`;

export const InputWrapper = styled.div`
  width: calc(100% - 103px);

  label {
    font-size: ${(props) => props.theme.fontSize["base"]};
    line-height: 24px;
    color: #292d32;
  }

  input {
    padding: 12px 22px 13px 22px;
    border: 1px solid #ced2e0;
    margin-top: 16px;
    color: #292d32;

    ::placeholder {
      color: #c4cad6;
    }
  }

  &.pick-color-group {
    display: flex;
    align-items: center;
    width: max-content;
    height: max-content;
    justify-content: center;
    margin-bottom: 20px;
  }

  input.pick-color {
    color: initial;
    border: initial;
    padding: initial;
    margin-top: initial;
    margin-left: 10px;
  }

  select {
    margin-top: 16px;
  }

  @media screen and (max-width: 996px) {
    & {
      width: 100%;

      label {
        font-size: ${(props) => props.theme.fontSize["sm"]};
      }
    }
  }
`;

export const InputWrapperName = styled(InputWrapper)`
  display: flex;

  .input-group {
    width: calc(100% / 2);

    :last-child {
      margin-left: 35px;
    }
  }

  @media screen and (max-width: 996px) {
    & {
      flex-direction: column;

      .input-group {
        width: 100%;

        :last-child {
          margin-left: unset;
          margin-top: 20px;
        }
      }
    }
  }
`;

export const InputDescription = styled.p`
  line-height: 24px;
  color: #adb5c2;
  margin-bottom: 30px;

  @media screen and (max-width: 996px) {
    & {
      font-size: ${(props) => props.theme.fontSize["sm"]};
      margin-bottom: 20px;
    }
  }
`;

export const InputFileAvatarWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 100px;
  height: 100px;
  padding: 17px 16px 16px 17px;
  position: relative;
  background: #f9fafe;
  border-radius: 50%;

  ::after {
    content: "";
    position: absolute;
    display: block;
    inset: 0;
    background: url(${(props) => `${props.imgSrc}`});
    background-size: 67px 67px;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 996px) {
    & {
      width: 69px;
      height: 69px;

      ::after {
        background-size: 46.23px 46.23px;
      }
    }
  }
`;

export const ButtonActionInputFile = styled.div`
  display: flex;
  margin-left: 20px;

  button {
    padding: 10px 20px;
    border-radius: 10px;
    font-size: ${(props) => props.theme.fontSize["base"]};
  }

  .upload {
    color: white;
    margin-right: 20px;
    width: 98px;
  }

  .delete {
    border: 1px solid #ed4c5c;
    color: #ed4c5c;
    width: 91px;
  }

  @media screen and (max-width: 996px) {
    button {
      justify-content: center;
      width: 91px;
      font-size: ${(props) => props.theme.fontSize["sm"]};
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #f1f4f9;
  margin: 40px 0;

  ${(props) =>
    props.unsetMarginTop &&
    `
    margin-top: unset !important
  `}

  ${(props) =>
    props.fullWidth &&
    `
    width: auto;
    margin: 40px -45px;
  `}

  @media screen and (max-width: 996px) {
    margin: 25px 0;
  }
`;

export const Notification = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  p {
    color: #292d32;
    line-height: 24px;
    font-weight: ${(props) => props.theme.fontWeight["medium"]};
  }

  @media screen and (max-width: 996px) {
    & {
      p {
        font-size: ${(props) => props.theme.fontSize["sm"]};
        width: 248px;
      }
    }
  }
`;

export const Availability = styled(Notification)`
  .btn-interval {
    width: 116px;
    height: 37px;
    padding: 8px 15px;
  }

  @media screen and (max-width: 996px) {
    &.days-availbility {
      flex-direction: column;
      align-items: flex-start;
    }

    &.hours-availbility {
      flex-direction: column;
      align-items: flex-start;
    }

    .btn-interval {
      margin-top: 12px;
      width: 125px;
      height: 41px;
      padding: 10px 20px;
      font-size: ${(props) => props.theme.fontSize["sm"]};
    }
  }
`;

export const SeenAsSetting = styled.div`
  width: auto;
  height: 62px;
  background: rgba(50, 194, 121, 0.2);
  padding: 19px 44px;
  display: flex;
  align-items: center;
  margin-left: -45px;
  margin-right: -45px;

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #292d32;
  }

  @media screen and (max-width: 996px) {
    margin-top: 21px;

    p {
      font-size: ${(props) => props.theme.fontSize["sm"]};
    }
  }
`;

export const SupportStatusWrapper = styled(SeenAsSetting)`
  margin-top: 40px;
  margin-bottom: 40px;

  @media screen and (max-width: 996px) {
    flex-wrap: wrap;
    height: auto;
    margin-bottom: 25px;
  }
`;

export const StatusSeenAs = styled.div`
  background: #ffffff;
  border-radius: 32px;
  padding: 6px 20px;
  color: #32c279;
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSize["base"]};
  line-height: 24px;
  margin-left: 23px;
  width: 110px;
  text-align: center;
  display: flex;
  align-items: center;

  ::before {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #32c279;
    margin-right: 8px;
  }

  @media screen and (max-width: 996px) {
    & {
      margin-left: 20px;
      width: 102px;
      font-size: ${(props) => props.theme.fontSize["sm"]};

      ::before {
        width: 8px;
        height: 8px;
        margin-right: 8px;
      }
    }
  }
`;

export const StatusSupport = styled(StatusSeenAs)`
  margin-left: 12px;
  margin-right: 12px;
`;

export const EmptyLastActiveButton = styled(Button)`
  background: #203550;
  color: white;
  margin-right: 12px;
`;

export const AddOperatorsButton = styled(Button)``;

export const OperatorButtons = styled.div`
  display: flex;
  margin-left: 23px;

  button {
    width: 152px;
    height: 37px;
    padding: 8px 15px;
    border-radius: 8px;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  @media screen and (max-width: 996px) {
    display: none;
  }
`;

export const DaysAvailability = styled.div`
  width: 427px;
  opacity: 0.5;
  display: flex;
  // justify-content: space-between;
  border-radius: 8px;
  overflow: hidden;

  @media screen and (max-width: 996px) {
    width: 100%;
    flex-wrap: wrap;
    margin-top: 16px;
  }
`;

export const BoxDays = styled.div`
  padding: 8px 15px;
  background: ${(props) => props.theme.colors["cb-purple"]};
  width: 61px;

  &.active {
    opacity: 0.5;
  }

  p {
    color: white;
    font-size: ${(props) => props.theme.fontSize["sm"]};
    line-height: 21px;
    font-weight: 500;
  }

  @media screen and (max-width: 996px) {
    width: 57px;
    border-radius: 8px;
    margin-right: 8px;
    margin-bottom: 8px;

    p {
      width: 100%;
      text-align: center;
      font-size: ${(props) => props.theme.fontSize["xs"]};
    }
  }
`;

export const PlansHeader = styled.div`
  width: 100%;
  border-radius: 15px;
  background: ${(props) => props.theme.colors["cb-purple"]};
  height: 169px;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    display: block;
    inset: 0;
    background: url("/images/settings/plans/header-left.svg"),
      url("/images/settings/plans/header-right.svg");
    background-size: 225px 167px;
    background-position: left, right;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 996px) {
    & {
      width: auto;
      margin-left: -10px;
      margin-right: -15px;
      height: 157px;
      border-radius: 15px;
      z-index: 2;

      ::before {
        background: url("/images/settings/plans/header-right-mobile.svg");
        background-size: 132px 104px;
        background-position: top right;
        background-repeat: no-repeat;
        z-index: -1;
      }
    }
  }
`;

export const PlansHeaderContent = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 85px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  padding: 25px 37px;
  position: absolute;
  top: 78px;
  right: 45px;
  left: 45px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 996px) {
    padding: 10px;
    left: 20px;
    right: 20px;
    top: 97px;
  }
`;

export const PlanPrice = styled.div`
  box-shadow: 0px 28px 85px rgba(123, 64, 242, 0.22);
  border-radius: 15px;
  display: flex;
  width: 217px;
  height: 118px;
  background: ${(props) => props.theme.colors["cb-purple"]};
  position: relative;
  margin-right: 38px;

  p {
    margin: auto;
    color: white;
    font-weight: 500;
    font-size: 32px;
    line-height: 48px;
  }

  @media screen and (max-width: 996px) {
    width: 100%;
    margin-right: unset;
    height: 66px;

    p {
      font-size: 22px;
      line-height: 33px;
      margin: auto auto auto 32px;
    }
  }
`;

export const PlanPriceDetail = styled.div`
  display: flex;
  flex-direction: column;

  p {
    :first-child {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: #292d32;
      margin-bottom: 12px;
    }

    :last-child {
      width: 383px;
      font-size: 16px;
      line-height: 24px;
      color: #c4cad6;
    }
  }

  @media screen and (max-width: 996px) {
    display: none;
  }
`;

export const PlanPriceDetailMobile = styled(PlanPriceDetail)`
  display: none;

  @media screen and (max-width: 996px) {
    display: block;
    padding: 20px;

    p {
      color: white !important;

      :first-child {
        font-weight: ${(props) => props.theme.fontWeight["medium"]};
        font-size: ${(props) => props.theme.fontSize["sm"]};
        line-height: 21px;
      }

      :last-child {
        width: 216px;
        font-size: 10px;
        color: #e8ebf0;
        line-height: 15px;
      }
    }
  }
`;

export const PlansWrapper = styled.div`
  border: 1px solid #f1f4f9;
  border-radius: 15px;
  margin-top: 45px;

  @media screen and (max-width: 996px) {
    border: unset;
    margin-top: 35px;
  }
`;

export const PlansContent = styled.div`
  padding: 145px 45px 34px 45px;

  @media screen and (max-width: 996px) {
    padding: 61px 0 25px 0;
  }
`;

export const PlansContentTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    :first-child {
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: #292d32;
      margin-bottom: 12px;
    }

    :last-child {
      font-size: 16px;
      line-height: 24px;
      color: #c4cad6;
    }
  }

  @media screen and (max-width: 996px) {
    p {
      :first-child {
        font-weight: 500;
        font-size: ${(props) => props.theme.fontSize["sm"]};
        line-height: 21px;
      }

      :last-child {
        font-size: ${(props) => props.theme.fontSize["sm"]};
        line-height: 21px;
      }
    }
  }
`;

export const Plans = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 31px;

  @media screen and (max-width: 996px) {
    margin-top: 29px;
  }
`;

export const Supports = styled(Plans)`
  margin-top: unset;
`;

export const PlansBox = styled.div`
  width: 100%;
  border-radius: 10px;
  border: 1px solid #f9fafe;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 23px 25px 22px 25px;
  align-items: center;

  @media screen and (max-width: 996px) {
    padding: 15px;
    flex-wrap: wrap;

    div:nth-child(2) {
      margin: 15px 0;
    }
  }
`;

export const SupportBox = styled(PlansBox)``;

export const PlansDetail = styled.div`
  display: flex;
  align-items: center;
`;

export const SupportDetail = styled(PlansDetail)`
  .email {
    display: none;
  }

  @media screen and (max-width: 996px) {
    .email {
      display: block;
      font-size: 12px !important;
      line-height: 18px !important;
      color: #c1c7d4 !important;

      ::before {
        display: none !important;
      }
    }
  }
`;

export const PlansLogo = styled.div`
  box-shadow: 0px 11px 32px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  border: 1px solid #f9fafe;
  background: white;
  padding: 15px 6.15px 13.91px 8px;

  @media screen and (max-width: 996px) {
    width: 57px;
    height: 57px;
  }
`;

export const SupportLogo = styled(PlansLogo)`
  border-radius: 50%;
  position: relative;

  img {
    width: 42.85px;
    height: 28.09px;
  }

  ::after {
    content: "";
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    background: #32c279;
    border-radius: 50%;
    bottom: 5px;
    right: 5px;
  }
`;

export const PlansName = styled.div`
  margin-left: 15px;

  p {
    :first-child {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #292d32;
      margin-bottom: 5px;
    }

    :last-child {
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      color: #7b40f2;
      display: flex;
      align-items: center;

      ::before {
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        margin-right: 4px;
        background: url("/images/play.svg");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }

  @media screen and (max-width: 996px) {
    p {
      :first-child {
        font-size: ${(props) => props.theme.fontSize["sm"]};
        line-height: 21px;
      }

      :last-child {
        font-size: ${(props) => props.theme.fontSize["xs"]};
        line-height: 18px;

        ::before {
          width: 16px;
          height: 16px;
        }
      }
    }
  }
`;

export const SupportName = styled(PlansName)`
  line-height: 24px;
  font-weight: 500;
  font-size: 16px;
  color: #292d32;

  @media screen and (max-width: 996px) {
    & {
      margin-left: 15px !important;
    }
  }
`;

export const SupportEmail = styled(Text)`
  font-size: 16px;
  line-height: 24px;
  color: #c1c7d4;

  @media screen and (max-width: 996px) {
    display: none;
  }
`;

export const SupportButtons = styled.div`
  display: flex;

  button {
    border-radius: 8px;

    :not(:first-child) {
      width: 44px;
      height: 41px;
      padding: 8px 10px;
    }

    :first-child {
      padding: 10px 24px;
    }
  }

  @media screen and (max-width: 996px) {
    margin-top: 25px;
    width: 100%;
    justify-content: flex-end;
  }
`;

export const EditButton = styled(Button)`
  margin: 0 10px;
`;
export const DeleteButton = styled(Button)`
  background: #ed4c5c;
`;

export const ExpiredPlan = styled.div`
  display: flex;
  align-items: center;

  button {
    padding: 4px 8px;
    justify-content: center;
    border-radius: 6px;
    width: 73px;
    font-size: 12px;
    margin-right: 11px;
  }

  p {
    line-height: 24px;
    color: #292d32;
  }
`;

export const ChangePlanButton = styled(Button)`
  // padding: 10px 24px;
  justify-content: center;
  width: 139px;
  height: 41px;
  font-size: 14px;
`;

export const WebsiteSettingFormWrapper = styled.form`
  margin-top: 45px;

  .input-wrapper {
    :not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const ContactInformationForm = styled(WebsiteSettingFormWrapper)``;
export const SMTPForm = styled(WebsiteSettingFormWrapper)``;

export const WebsiteRemoval = styled.div`
  display: flex;
  margin-top: 45px;
  flex-direction: column;

  p {
    margin-bottom: 17px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #292d32;
  }
`;
