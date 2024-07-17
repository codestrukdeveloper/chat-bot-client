import styled from "styled-components";
import Text from "../Typography/Text";
import { Button } from "../Button/Button";

const AlwaysInTouchSection = styled.div`
  border-radius: 25px;
  background: ${(props) => props.theme.colors["cb-purple"]};
  padding: 59px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 149px;
  color: white;
  position: relative;
  overflow: hidden;
  z-index: 3;

  @media screen and (max-width: 996px) {
    margin-top: 120px;
    padding: 108px 20px 108px 20px;

    ::before {
      position: absolute;
      content: "";
      inset: 0;
      display: block;
      background: url("/images/home/float-git.svg") no-repeat;
      background-position: top left;
      z-index: -1;
    }

    ::after {
      position: absolute;
      content: "";
      inset: 0;
      display: block;
      background: url("/images/home/float-git2.svg") no-repeat;
      background-position: bottom right;
      z-index: -1;
    }
  }
`;

const AlwaysInTouchTitle = styled(Text)`
  font-size: 48px;
  line-height: 60px;
  font-weight: ${(props) => props.theme.fontWeight["semi-bold"]};
  letter-spacing: -0.01em;

  @media screen and (max-width: 996px) {
    font-size: 30px;
    line-height: 44px;
  }
`;

const AlwaysInTouchDesc = styled(Text)`
  line-height: 36px;
  letter-spacing: 0.01em;
  margin-top: 32px;
  width: 707px;
  text-align: center;

  @media screen and (max-width: 996px) {
    width: 100%;
    margin-top: 18px;
    font-size: ${(props) => props.theme.fontSize["sm"]};
    line-height: 28px;
  }
`;

const AlwaysInTouchButtons = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;

  button {
    height: 61px;
    justify-content: center;
    color: #292d32;
    background: #ffffff;
    border-radius: 15px;
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSize["lg"]};
    line-height: 32px;

    :last-child {
      margin-left: 22px;
    }
  }

  @media screen and (max-width: 996px) {
    flex-wrap: wrap;
    margin-top: 31px;
    justify-content: center;

    button {
      width: 100%;
      color: ${(props) => props.theme.colors["cb-purple"]};

      :last-child {
        margin-left: unset;
        margin-top: 18px;
      }
    }
  }
`;

const AppStoreDownloadBtn = styled(Button)`
  ::before {
    content: "";
    width: 24px;
    height: 24px;
    margin-right: 16px;
    background: url("/images/app-store.svg") no-repeat;
  }

  @media screen and (max-width: 996px) {
    ::before {
      background: url("/images/app-store2.svg") no-repeat;
    }
  }
`;
const GooglePlayDownloadBtn = styled(Button)`
  ::before {
    content: "";
    width: 17.79px;
    height: 19px;
    margin-right: 16.21px;
    background: url("/images/playstore.svg") no-repeat;
  }

  @media screen and (max-width: 996px) {
    ::before {
      background: url("/images/playstore.png") no-repeat;
    }
  }
`;

const GetInTouch = ({ ...props }) => {
  return (
    <AlwaysInTouchSection {...props}>
      <AlwaysInTouchTitle>Always In Touch</AlwaysInTouchTitle>
      <AlwaysInTouchDesc>
        Stay in touch with your customers, from your office or at the swimming
        pool. *
      </AlwaysInTouchDesc>
      <AlwaysInTouchButtons>
        <AppStoreDownloadBtn>Download on App Store</AppStoreDownloadBtn>
        <GooglePlayDownloadBtn>Download on Google Play</GooglePlayDownloadBtn>
      </AlwaysInTouchButtons>
    </AlwaysInTouchSection>
  );
};

export default GetInTouch;
