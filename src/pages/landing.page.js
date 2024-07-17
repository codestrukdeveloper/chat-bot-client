import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@/components/Button/Button";
import Text from "@/components/Typography/Text";
import { useNavigate } from "react-router-dom";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import LiveChat from "@/components/LiveChat/LiveChat";

const Header = styled.header`
  display: flex;
  position: relative;
  height: 750px;

  @media screen and (max-width: 996px) {
    & {
      flex-direction: column;
      height: auto;
    }
  }
`;

const HeaderTagline = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeaderTitle = styled(Text)`
  font-size: 58px;
  font-weight: ${(props) => props.theme.fontWeight["bold"]};
  line-height: 80px;
  color: #292d32;
  letter-spacing: -0.01em;
  width: 701px;
  margin-top: 105px;

  @media screen and (max-width: 996px) {
    margin-top: 54px;
    font-size: 28px;
    text-align: center;
    width: 100%;
    line-height: 44px;
  }
`;

const StyledHeaderDesc = styled(Text)`
  font-size: ${(props) => props.theme.fontSize["lg"]};
  letter-spacing: 0.01em;
  line-height: 36px;
  color: #292d32;
  margin-top: 24px;
  width: 495px;

  @media screen and (max-width: 996px) {
    margin-top: 18px;
    line-height: 28px;
    font-size: ${(props) => props.theme.fontSize["sm"]};
    width: 100%;
    text-align: center;
  }
`;

const StyledHeaderButton = styled(Button)`
  width: 205px;
  height: 63px;
  border-radius: 12px;
  justify-content: center;
  margin-top: 32px;

  @media screen and (max-width: 996px) {
    & {
      width: 167px;
      margin: 34px auto auto auto;
      font-size: ${(props) => props.theme.fontSize["base"]};
    }
  }
`;

const HeaderHero = styled.div`
  position: absolute;
  right: 52.83px;
  top: 66px;

  @media screen and (max-width: 996px) {
    & {
      position: static;
      margin-top: 10px;

      img {
        margin: 0 -20px;
      }
    }
  }

  @media screen and (max-width: 400px) {
    & {
      img {
        margin: unset;
        width: 100%;
      }
    }
  }
`;

const WhyChatBotSection = styled.section`
  margin-top: 102px;
  text-align: center;

  @media screen and (max-width: 996px) {
    margin-top: unset;
  }
`;

const WhyChatBotTitle = styled(Text)`
  font-size: 44px;
  line-height: 80px;
  font-weight: ${(props) => props.theme.fontWeight["semi-bold"]};
  letter-spacing: -0.01em;
  color: #292d32;

  @media screen and (max-width: 996px) {
    font-size: ${(props) => props.theme.fontSize["2xl"]};
    line-height: 44px;
  }
`;
const WhyChatBotDesc = styled(Text)`
  width: 742px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #292d32;
  margin: 16px auto auto auto;

  @media screen and (max-width: 996px) {
    width: 100%;
    font-size: ${(props) => props.theme.fontSize["sm"]};
    margin-top: 14px;
  }
`;

const WhyChatBotBoxes = styled.div`
  display: flex;
  padding: 68px 60px;
  border-radius: 41px 11px 40px 10px;
  background: #fafbfd;
  margin-top: 56px;

  @media screen and (max-width: 996px) {
    flex-wrap: wrap;
    margin-top: 32px;
    padding: 22px;
  }
`;

const WhyChatBotBox = styled.div`
  width: 364px;
  height: 422px;
  background: #ffffff;
  box-shadow: 0px 50px 90px rgba(0, 0, 0, 0.04);
  border-radius: 25px;
  padding: 48px 39px 68px 39px;

  :not(:last-child) {
    margin-right: 34px;
  }

  @media screen and (max-width: 996px) {
    width: 100%;
    height: 329px;
    padding: 48px 22px;

    img {
      width: 144px;
      height: 144px;
    }

    :not(:last-child) {
      margin-bottom: 16px;
      margin-right: unset;
    }
  }
`;

const StyledWhyChatBotBoxTitle = styled(Text)`
  font-size: 28px;
  line-height: 42px;
  font-weight: ${(props) => props.theme.fontWeight["semi-bold"]};
  letter-spacing: -0.01em;
  color: #292d32;
  margin-top: 25px;

  @media screen and (max-width: 996px) {
    font-size: 22px;
    line-height: 33px;
    margin-top: 20px;
  }
`;

const StyledWhyChatBotBoxDesc = styled(Text)`
  margin-top: 18px;
  line-height: 26px;
  color: #292d32;
  letter-spacing: -0.01em;
  font-weight: ${(props) => props.theme.fontWeight["medium"]};

  @media screen and (max-width: 996px) {
    margin-top: 18px;
    font-size: ${(props) => props.theme.fontSize["sm"]};
    font-weight: normal;
  }
`;

const MeetTheMessagingSection = styled.section`
  margin-top: 140px;

  @media screen and (max-width: 996px) {
    margin-top: 113px;
  }
`;

const MeetTheMessagingTitle = styled(Text)`
  font-weight: 600;
  font-size: 44px;
  line-height: 60px;
  letter-spacing: -0.01em;
  color: #292d32;
  width: 831px;
  margin: auto;
  text-align: center;

  @media screen and (max-width: 996px) {
    margin-top: 113px;
    font-size: ${(props) => props.theme.fontSize["2xl"]};
    line-height: 40px;
    width: 100%;
  }
`;

const MeetFeaturesBoxes = styled.div`
  width: 858px;
  display: flex;
  justify-content: space-between;
  margin: 43px auto auto auto;

  button {
    height: 54px;
    border-radius: 32px;
    padding: 12px 20px;
    letter-spacing: -0.01em;
    font-size: 20px;
    line-height: 30px;
    font-weight: ${(props) => props.theme.fontWeight["medium"]};
    background: #f9fafe;
    color: #292d32;

    &.active {
      box-shadow: 0px 28px 33px rgba(123, 64, 242, 0.16);
      background: ${(props) => props.theme.colors["cb-purple"]};
      color: #ffffff;
      transition: 0.3s;
    }
  }

  @media screen and (max-width: 996px) {
    flex-wrap: wrap;
    width: 100%;
    margin: 28px auto auto auto;
    justify-content: center;

    button {
      margin: 10px;
      font-size: ${(props) => props.theme.fontSize["base"]};
    }
  }
`;

const MeetTheMessagingDesc = styled(Text)`
  font-size: ${(props) => props.theme.fontSize["lg"]};
  line-height: 36px;
  color: #292d32;
  letter-spacing: 0.01em;
  margin: 43px auto auto auto;
  text-align: center;
  width: 854px;

  @media screen and (max-width: 996px) {
    font-size: ${(props) => props.theme.fontSize["sm"]};
    margin: 24px auto auto auto;
    line-height: 28px;
    width: 100%;
  }
`;

const LearnMoreMeetTheMessaging = styled(Link)`
  font-size: 22px;
  line-height: 36px;
  letter-spacing: 0.01em;
  font-weight: ${(props) => props.theme.fontWeight["semi-bold"]};
  margin: 41px auto auto auto;
  color: ${(props) => props.theme.colors["cb-purple"]};
  display: block;
  width: max-content;

  @media screen and (max-width: 996px) {
    font-size: ${(props) => props.theme.fontSize["base"]};
    margin: 24px auto auto auto;
    line-height: 36px;
  }
`;

const MeetTheMessagingHero = styled.div`
  margin-top: 46px;
  display: flex;
  position: relative;
  z-index: 2;

  img {
    margin: auto;
    display: none;
  }

  img.open {
    display: inline-block;
  }

  ::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    height: 275px;
    background: #fafbfd;
    border-radius: 41px 11px 40px 10px;
    bottom: -110px;
    z-index: -1;
  }

  @media screen and (max-width: 996px) {
    margin-top: 24px;
    img {
      width: 100%;
    }

    ::after {
      height: 173px;
      bottom: -35px;
    }
  }
`;

const InfinityBotFeaturesSection = styled.section`
  margin-top: 285px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 996px) {
    margin-top: 146px;
  }
`;

const InfinityBotFeaturesTitle = styled(Text)`
  font-size: 44px;
  line-height: 60px;
  font-weight: ${(props) => props.theme.fontWeight["semi-bold"]};
  letter-spacing: -0.01em;
  color: #292d32;
  text-align: center;

  @media screen and (max-width: 996px) {
    font-size: ${(props) => props.theme.fontSize["2xl"]};
    line-height: 40px;
  }
`;

const InfinityBotFeaturesDesc = styled(Text)`
  font-size: ${(props) => props.theme.fontSize["lg"]};
  letter-spacing: 0.01em;
  line-height: 36px;
  text-align: center;
  color: #292d32;
  margin-top: 18px;

  @media screen and (max-width: 996px) {
    font-size: ${(props) => props.theme.fontSize["sm"]};
    margin-top: 12px;
    line-height: 28px;
  }
`;

const InfinityBotFeaturesBoxes = styled.div`
  margin-top: 42px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
  column-gap: 45px;
  padding: 0 77px;

  @media screen and (max-width: 996px) {
    grid-template-columns: repeat(2, 1fr);
    padding: unset;
    gap: 20px;
    margin-top: 32px;
  }
`;

const InfinityBotFeaturesBox = styled.div`
  height: 175px;
  background: #ffffff;
  box-shadow: 0px 51px 130px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  padding: 26px;

  @media screen and (max-width: 996px) {
    height: 156px;
  }
`;

const InfinityBotFeaturesBoxIcon = styled.div`
  background: #ffffff;
  box-shadow: 0px 13px 22px rgba(0, 0, 0, 0.04);
  border-radius: 22px;
  padding: 17px;
  width: 75px;
  height: 75px;

  @media screen and (max-width: 996px) {
    width: 52px;
    height: 52px;
    padding: 11.79px;

    img {
      width: 28.43px;
      height: 28.43px;
    }
  }
`;

const InfinityBotFeaturesBoxTitle = styled(Text)`
  line-height: 36px;
  color: #292d32;
  letter-spacing: 0.01em;
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  font-size: ${(props) => props.theme.fontSize["lg"]};
  margin-top: 12px;

  @media screen and (max-width: 996px) {
    line-height: 24px;
    font-size: ${(props) => props.theme.fontSize["base"]};
  }
`;

const InfinityBotFeaturesButton = styled(Button)`
  box-shadow: 0px 31px 70px rgba(123, 64, 242, 0.29);
  border-radius: 15px;
  width: 247px;
  height: 70px;
  justify-content: center;
  margin: 60px auto auto auto;
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  font-size: 20px;
  line-height: 30px;

  @media screen and (max-width: 996px) {
    margin-top: 24px auto auto auto;
    width: 224px;
    height: 63px;
    font-size: ${(props) => props.theme.fontSize["base"]};
    line-height: 24px;
  }
`;

const PricingSection = styled.section`
  margin-top: 181px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 996px) {
    margin-top: 120px;
  }
`;

const PricingSectionTitle = styled(Text)`
  font-size: 44px;
  line-height: 60px;
  color: #292d32;
  letter-spacing: -0.01em;
  text-align: center;
  font-weight: bold;

  @media screen and (max-width: 996px) {
    font-size: ${(props) => props.theme.fontSize["2xl"]};
    line-height: 44px;
  }
`;

const PricingSectionDesc = styled(Text)`
  margin-top: 32px;
  font-size: ${(props) => props.theme.fontSize["lg"]};
  line-height: 36px;
  letter-spacing: 0.01em;
  color: #292d32;
  text-align: center;

  @media screen and (max-width: 996px) {
    font-size: ${(props) => props.theme.fontSize["sm"]};
    margin-top: 18px;
    line-height: 28px;
  }
`;

const GetStartedPricing = styled(Button)`
  width: 250px;
  margin: 44px auto auto auto;
  display: flex;
  height: 55px;
  padding: 11px 67px;
  justify-content: center;
  font-size: 20px;
  border-radius: 41px;
  border: 1px solid #e2e6f4;
  line-height: 32px;

  ${(props) =>
    props.white &&
    `
  background: #FFFFFF;
  color: #7B40F2;
  `}

  @media screen and (max-width: 996px) {
    margin: 42px auto auto auto;
    font-size: 18px;
    line-height: 32px;
  }
`;

const Tabs = styled.div`
  margin: 32px auto auto auto;
  width: 306px;
  box-shadow: 0px 20px 37px rgba(0, 0, 0, 0.04);
  border-radius: 51px;
  background: #ffffff;
  border: 1px solid #f1f4f9;
  padding: 13px;
  display: flex;

  @media screen and (max-width: 996px) {
    width: 208px;
    padding: 8.84px;
  }
`;

const TabButton = styled(Button)`
  width: 143px;
  border-radius: 46px;
  justify-content: center;
  color: #adb5c2;
  font-size: ${(props) => props.theme.fontSize["lg"]};
  line-height: 27px;
  font-weight: ${(props) => props.theme.fontWeight["medium"]};
  background: transparent;

  &.active {
    background: ${(props) => props.theme.colors["cb-purple"]};
    color: white;
    box-shadow: 0px 31px 70px rgba(123, 64, 242, 0.29);
  }

  @media screen and (max-width: 996px) {
    width: 97.2px;
    height: 38.75px;
    font-size: 12.2353px;
    line-height: 18px;
  }
`;

const PricingBoxes = styled.div`
  display: flex;
  margin-top: 91px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 996px) {
    margin-top: 36.86px;
    flex-wrap: wrap;
  }
`;

const PricingBox = styled.div`
  width: 400px;
  height: 754px;
  border-radius: 30px;
  border: 1px solid #e2e6f4;
  background: #ffffff;
  position: relative;
  overflow: hidden;
  padding: 51px 45px 54px 32px;
  z-index: 2;

  :not(:last-child) {
    margin-right: 20px;
  }

  ::before {
    content: "";
    display: block;
    position: absolute;
    inset: 0;
    background: url("/images/home/pricing/float.svg") no-repeat;
    z-index: -1;
  }

  :nth-child(2) {
    background: ${(props) => props.theme.colors["cb-purple"]};
    height: 892px;
    border: 1px solid ${(props) => props.theme.colors["cb-purple"]};

    ::before {
      background: url("/images/home/pricing/float2.svg") no-repeat;
    }

    .pricing-price,
    .pricing-desc {
      color: white;
    }

    .checkmark-list {
      li {
        color: white;

        ::before {
          background: url("/images/checkmark2.svg") no-repeat;
        }
      }
    }
  }

  @media screen and (max-width: 996px) {
    width: 100%;
    height: auto;
    padding: 37px 21px 50px 30px;

    :nth-child(2) {
      height: auto;
    }

    :not(:last-child) {
      margin-right: unset;
      margin-bottom: 46px;
    }

    ::before {
      background: url("/images/home/pricing/float-mobile.svg") no-repeat;
    }

    :nth-child(2) {
      ::before {
        background: url("/images/home/pricing/float-mobile2.svg") no-repeat;
      }
    }
  }
`;

const PricingBoxTitle = styled(Text)`
  font-size: 40px;
  line-height: 48px;
  color: #292d32;
  font-weight: ${(props) => props.theme.fontWeight["bold"]};

  @media screen and (max-width: 996px) {
    font-size: 28px;
    line-height: 48px;
  }
`;

const PricingBoxPrice = styled(Text)`
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: ${(props) => props.theme.colors["cb-purple"]};
  margin-top: 74px;

  @media screen and (max-width: 996px) {
    font-size: 28px;
    line-height: 48px;
    margin-top: 41px;
  }
`;

const PricingBoxDesc = styled(Text)`
  line-height: 32px;
  color: #adb5c2;
  font-size: ${(props) => props.theme.fontSize["lg"]};
  width: 291px;
  margin-top: 32px;

  @media screen and (max-width: 996px) {
    font-size: 16px;
    line-height: 32px;
    margin-top: 26px;
  }
`;

const Divider = styled.div`
  margin: 32px 0;
  width: 100%;
  height: 1px;
  background: #e3e6f3;
`;

const CheckMarkLists = styled.ul``;

const CheckMarkList = styled.li`
  line-height: 32px;
  color: #292d32;
  display: grid;
  grid-template-columns: max-content 1fr;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 20px;
  }

  ::before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    background: url("/images/checkmark.svg") no-repeat;
    margin-right: 26px;
  }
`;

const WillChatBotWorkForMeSection = styled.section`
  margin-top: 126px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    box-shadow: 0px 31px 70px rgba(123, 64, 242, 0.29);
    border-radius: 15px;
    width: 196px;
    padding: 20px 35px;
    font-size: 20px;
    line-height: 30px;
    margin-top: 62px;
  }

  @media screen and (max-width: 996px) {
    flex-wrap: wrap;
    margin-top: 100px;

    img {
      width: 100%;
    }

    button {
      font-size: ${(props) => props.theme.fontSize["base"]};
      line-height: 24px;
      width: 167px;
      margin: 24px auto auto auto;
      padding: 16px 33px;
    }
  }
`;

const WillChatBotWorkForMeBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const WillChatBotWorkForMeTitle = styled(Text)`
  font-size: 44px;
  line-height: 60px;
  font-weight: bold;
  letter-spacing: -0.01em;
  color: #292d32;

  @media screen and (max-width: 996px) {
    font-size: 24px;
    line-height: 44px;
    margin-top: 10px;
    text-align: center;
  }
`;

const WillChatBotWorkForMeDesc = styled.div`
  margin-top: 28px;

  p {
    line-height: 32px;
    letter-spacing: 0.01em;
    color: #292d32;

    :last-child {
      margin-top: 24px;
    }
  }

  @media screen and (min-width: 1440px) {
    p {
      width: 587px;
    }
  }

  @media screen and (max-width: 996px) {
    margin-top: 18px;

    p {
      text-align: center;
      font-size: ${(props) => props.theme.fontSize["sm"]};
      line-height: 28px;
      :last-child {
        margin-top: 18px;
      }
    }
  }
`;

const LiveChatButton = styled.div`
  position: fixed;
  bottom: 60px;
  right: 80px;
  width: 65px;
  height: 65px;
  filter: drop-shadow(0px 22px 67px rgba(0, 0, 0, 0.12));
  z-index: 9999;
  border-radius: 50%;
  background: ${(props) => props.theme.colors["cb-purple"]};
  cursor: pointer;

  ::before {
    content: "";
    display: block;
    position: absolute;
    background: url("/images/livechat-box.svg") no-repeat center;
    inset: 0;
  }

  @media screen and (max-width: 996px) {
    display: none;
  }
`;

function HomePage() {
  const navigate = useNavigate();
  const [meetMessagingActive, setMessagingActive] = useState("livechat");
  const [openLiveChat, setOpenLiveChat] = useState(false);

  const [pricingActive, setPricingActive] = useState("monthly");

  return (
    <>
      <Header>
        <HeaderTagline>
          <StyledHeaderTitle as="h1">
            Turn Conversations Into Conversions
          </StyledHeaderTitle>
          <StyledHeaderDesc>
            Get more leads and turn them into sales with automated chatbot which
            can boost your open rate upto 85% and give you upto 50% more sales.
          </StyledHeaderDesc>
          <StyledHeaderButton>Trail For $2 Only</StyledHeaderButton>
        </HeaderTagline>
        <HeaderHero>
          <picture>
            <source media="(min-width: 768px)" srcSet="/images/home/hero.png" />
            <img src="/images/home/hero-mobile.png" alt="hero" />
          </picture>
        </HeaderHero>
      </Header>
      <WhyChatBotSection>
        <WhyChatBotTitle>Why Chatbots?</WhyChatBotTitle>
        <WhyChatBotDesc>
          Chatbot open rates have been on the rise, so it is clear that chatbots
          are a better way of addressing customer queries rather than a human
          customer service agent. This is because chatbots can respond with
          empathy and do not become tired or frustrated, which is often the case
          with human agents.
        </WhyChatBotDesc>
        <WhyChatBotBoxes>
          <WhyChatBotBox>
            <img alt="why" src="/images/home/why-chatbot/1.svg" />
            <StyledWhyChatBotBoxTitle>Open Rates</StyledWhyChatBotBoxTitle>
            <StyledWhyChatBotBoxDesc>
              4x more than e-mail
            </StyledWhyChatBotBoxDesc>
          </WhyChatBotBox>
          <WhyChatBotBox>
            <img alt="why" src="/images/home/why-chatbot/2.svg" />
            <StyledWhyChatBotBoxTitle>CTR</StyledWhyChatBotBoxTitle>
            <StyledWhyChatBotBoxDesc>
              10x more than e-mail
            </StyledWhyChatBotBoxDesc>
          </WhyChatBotBox>
          <WhyChatBotBox>
            <img alt="why" src="/images/home/why-chatbot/3.svg" />
            <StyledWhyChatBotBoxTitle>Of Customers</StyledWhyChatBotBoxTitle>
            <StyledWhyChatBotBoxDesc>
              Prefer to interact via messenger
            </StyledWhyChatBotBoxDesc>
          </WhyChatBotBox>
        </WhyChatBotBoxes>
      </WhyChatBotSection>
      <MeetTheMessagingSection>
        <MeetTheMessagingTitle>
          Meet the messaging app that lets you chat with your customers
        </MeetTheMessagingTitle>
        <MeetFeaturesBoxes>
          <Button
            className={`${meetMessagingActive === "livechat" && "active"}`}
            onClick={() => setMessagingActive("livechat")}
          >
            Livechat
          </Button>
          <Button
            className={`${meetMessagingActive === "campaign" && "active"}`}
            onClick={() => setMessagingActive("campaign")}
          >
            Campaign
          </Button>
          <Button
            className={`${
              meetMessagingActive === "knowledge-base" && "active"
            }`}
            onClick={() => setMessagingActive("knowledge-base")}
          >
            Knowledge Base
          </Button>
          <Button
            className={`${meetMessagingActive === "integrations" && "active"}`}
            onClick={() => setMessagingActive("integrations")}
          >
            Integrations
          </Button>
          <Button
            className={`${meetMessagingActive === "chatbot" && "active"}`}
            onClick={() => setMessagingActive("chatbot")}
          >
            Chatbot
          </Button>
        </MeetFeaturesBoxes>
        <MeetTheMessagingDesc>
          {meetMessagingActive === "livechat" &&
            "LiveChat is a powerful customer service platform that lets you chat with your customers in real time. Deliver high-quality customer service and boost online sales."}

          {meetMessagingActive === "campaign" &&
            "Retarget your leads or customers manually or automatically. Our customer engagement software allows you to designed to reach out to subscribers at the best time and provide valuable content and relevant offers"}

          {meetMessagingActive === "knowledge-base" &&
            "Our customers use knowledge base as customer support centers, extensive FAQs, products or service documentations, internal company documentations, wiki and much more"}

          {meetMessagingActive === "integrations" &&
            "Deliver the best customer experience by integrating InfinityBot with your favorite apps like Facebook, Instagram, Telegram, Whatsapp and more coming"}

          {meetMessagingActive === "chatbot" &&
            "Our chatbot builder comes with a visual editor so you can create workflows through our no-code builder. Deliver high-quality customer service and boost online sales."}
        </MeetTheMessagingDesc>
        {meetMessagingActive === "livechat" ? (
          <LearnMoreMeetTheMessaging to="/auth/signup">
            Signup
          </LearnMoreMeetTheMessaging>
        ) : (
          <LearnMoreMeetTheMessaging to="/docs">
            Learn More
          </LearnMoreMeetTheMessaging>
        )}
        <MeetTheMessagingHero>
          <img
            className={meetMessagingActive === "livechat" ? "open" : undefined}
            alt="homepage-chat"
            src="/images/home/meet-messaging/livechat.svg"
          />
          <img
            className={meetMessagingActive === "campaign" ? "open" : undefined}
            alt="campaign"
            src="/images/home/meet-messaging/campaign.svg"
          />
          <img
            className={
              meetMessagingActive === "knowledge-base" ? "open" : undefined
            }
            alt="knowledge-base"
            src="/images/home/meet-messaging/knowledge-base.svg"
          />
          <img
            className={
              meetMessagingActive === "integrations" ? "open" : undefined
            }
            alt="integration"
            src="/images/home/meet-messaging/integration.svg"
          />
          <img
            className={meetMessagingActive === "chatbot" ? "open" : undefined}
            alt="chatbot"
            src="/images/home/meet-messaging/chatbot.svg"
          />
        </MeetTheMessagingHero>
      </MeetTheMessagingSection>
      <InfinityBotFeaturesSection>
        <InfinityBotFeaturesTitle>
          InfinityBot Features
        </InfinityBotFeaturesTitle>
        <InfinityBotFeaturesDesc>
          it's all about making your business goals a reality.
        </InfinityBotFeaturesDesc>
        <InfinityBotFeaturesBoxes>
          <InfinityBotFeaturesBox>
            <InfinityBotFeaturesBoxIcon>
              <img
                src="/images/home/infinitybot-features/live-chat.svg"
                alt="live-chat"
              />
            </InfinityBotFeaturesBoxIcon>
            <InfinityBotFeaturesBoxTitle>Live Chat</InfinityBotFeaturesBoxTitle>
          </InfinityBotFeaturesBox>
          <InfinityBotFeaturesBox>
            <InfinityBotFeaturesBoxIcon>
              <img
                src="/images/home/infinitybot-features/team-inbox.svg"
                alt="live-chat"
              />
            </InfinityBotFeaturesBoxIcon>
            <InfinityBotFeaturesBoxTitle>
              Team Inbox
            </InfinityBotFeaturesBoxTitle>
          </InfinityBotFeaturesBox>
          <InfinityBotFeaturesBox>
            <InfinityBotFeaturesBoxIcon>
              <img
                src="/images/home/infinitybot-features/mobile-apps.svg"
                alt="live-chat"
              />
            </InfinityBotFeaturesBoxIcon>
            <InfinityBotFeaturesBoxTitle>
              Mobile Apps
            </InfinityBotFeaturesBoxTitle>
          </InfinityBotFeaturesBox>
          <InfinityBotFeaturesBox>
            <InfinityBotFeaturesBoxIcon>
              <img
                src="/images/home/infinitybot-features/be-notified.svg"
                alt="live-chat"
              />
            </InfinityBotFeaturesBoxIcon>
            <InfinityBotFeaturesBoxTitle>
              Be Notified
            </InfinityBotFeaturesBoxTitle>
          </InfinityBotFeaturesBox>
          <InfinityBotFeaturesBox>
            <InfinityBotFeaturesBoxIcon>
              <img
                src="/images/home/infinitybot-features/contact-form.svg"
                alt="live-chat"
              />
            </InfinityBotFeaturesBoxIcon>
            <InfinityBotFeaturesBoxTitle>
              Contact Form
            </InfinityBotFeaturesBoxTitle>
          </InfinityBotFeaturesBox>
          <InfinityBotFeaturesBox>
            <InfinityBotFeaturesBoxIcon>
              <img
                src="/images/home/infinitybot-features/unlimited-history.svg"
                alt="live-chat"
              />
            </InfinityBotFeaturesBoxIcon>
            <InfinityBotFeaturesBoxTitle>
              Unlimited History
            </InfinityBotFeaturesBoxTitle>
          </InfinityBotFeaturesBox>
          <InfinityBotFeaturesBox>
            <InfinityBotFeaturesBoxIcon>
              <img
                src="/images/home/infinitybot-features/triggers.svg"
                alt="live-chat"
              />
            </InfinityBotFeaturesBoxIcon>
            <InfinityBotFeaturesBoxTitle>Triggers</InfinityBotFeaturesBoxTitle>
          </InfinityBotFeaturesBox>
          <InfinityBotFeaturesBox>
            <InfinityBotFeaturesBoxIcon>
              <img
                src="/images/home/infinitybot-features/canned-response.svg"
                alt="live-chat"
              />
            </InfinityBotFeaturesBoxIcon>
            <InfinityBotFeaturesBoxTitle>
              Canned Responses
            </InfinityBotFeaturesBoxTitle>
          </InfinityBotFeaturesBox>
        </InfinityBotFeaturesBoxes>
        <InfinityBotFeaturesButton onClick={() => navigate("features")}>
          Show All Features
        </InfinityBotFeaturesButton>
      </InfinityBotFeaturesSection>
      <PricingSection>
        <PricingSectionTitle>For big and small companies</PricingSectionTitle>
        <PricingSectionDesc>
          5 minute installation Try Team plan features for 14 days No Credit
          card required
        </PricingSectionDesc>
        <Tabs>
          <TabButton
            className={pricingActive === "monthly" && "active"}
            onClick={() => setPricingActive("monthly")}
          >
            Monthly
          </TabButton>
          <TabButton
            className={pricingActive === "yearly" && "active"}
            onClick={() => setPricingActive("yearly")}
          >
            Yearly
          </TabButton>
        </Tabs>
        <PricingBoxes>
          <PricingBox>
            <PricingBoxTitle>Standard</PricingBoxTitle>
            <PricingBoxPrice>$5/month</PricingBoxPrice>
            <PricingBoxDesc>
              For small companies to get started and save money
            </PricingBoxDesc>
            <Divider />
            <CheckMarkLists>
              <CheckMarkList>Lorem Ipsum</CheckMarkList>
              <CheckMarkList>Lorem Ipsum</CheckMarkList>
              <CheckMarkList>Lorem Ipsum</CheckMarkList>
              <CheckMarkList>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor
              </CheckMarkList>
            </CheckMarkLists>
            <GetStartedPricing>Get Started</GetStartedPricing>
          </PricingBox>
          <PricingBox>
            <PricingBoxTitle>Trail</PricingBoxTitle>
            <PricingBoxPrice className="pricing-price">
              $2/14 days
            </PricingBoxPrice>
            <PricingBoxDesc className="pricing-desc">
              For small companies to get started and save money
            </PricingBoxDesc>
            <Divider />
            <CheckMarkLists className="checkmark-list">
              <CheckMarkList>Lorem Ipsum</CheckMarkList>
              <CheckMarkList>Lorem Ipsum</CheckMarkList>
              <CheckMarkList>Lorem Ipsum</CheckMarkList>
              <CheckMarkList>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor
              </CheckMarkList>
              <CheckMarkList>Lorem Ipsum</CheckMarkList>
              <CheckMarkList>Lorem Ipsum</CheckMarkList>
            </CheckMarkLists>
            <GetStartedPricing white>Get Started</GetStartedPricing>
          </PricingBox>
          <PricingBox>
            <PricingBoxTitle>Premium</PricingBoxTitle>
            <PricingBoxPrice>$15/month</PricingBoxPrice>
            <PricingBoxDesc>
              For small companies to get started and save money
            </PricingBoxDesc>
            <Divider />
            <CheckMarkLists>
              <CheckMarkList>Lorem Ipsum</CheckMarkList>
              <CheckMarkList>Lorem Ipsum</CheckMarkList>
              <CheckMarkList>Lorem Ipsum</CheckMarkList>
              <CheckMarkList>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor
              </CheckMarkList>
            </CheckMarkLists>
            <GetStartedPricing>Get Started</GetStartedPricing>
          </PricingBox>
        </PricingBoxes>
      </PricingSection>
      <GetInTouch />
      <WillChatBotWorkForMeSection>
        <img src="/images/home/hero2.png" alt="" />
        <WillChatBotWorkForMeBox>
          <WillChatBotWorkForMeTitle>
            Will chatbot work for me?
          </WillChatBotWorkForMeTitle>
          <WillChatBotWorkForMeDesc>
            <Text>
              Chatbots can and do boost lead generation and sales for literally
              and industry: service, coaching, real estate, brick&amp; mortar,
              E-commerce ,Gyms, Doctors , restaurants , Dentists …….. the list
              is endless !!
            </Text>
            <Text>
              Leave a request and we’ll send you our best offer for you.
            </Text>
          </WillChatBotWorkForMeDesc>
          <Button>Get In Touch</Button>
        </WillChatBotWorkForMeBox>
      </WillChatBotWorkForMeSection>
      <LiveChatButton onClick={() => setOpenLiveChat(!openLiveChat)} />
      <LiveChat className={openLiveChat && "open"} />
    </>
  );
}

export default HomePage;
