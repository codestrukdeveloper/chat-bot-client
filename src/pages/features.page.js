import GetInTouch from "@/components/GetInTouch/GetInTouch";
import HeaderMain from "@/components/Header/Header-Main";
import Text from "@/components/Typography/Text";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";

const FeaturesWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 43px;

  @media screen and (max-width: 996px) {
    grid-template-columns: 100%;
    gap: 25px;
    margin-top: 32px;
  }
`;

const FeatureCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 51px 130px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  padding: 30px 25px 50px 25px;

  @media screen and (max-width: 996px) {
    padding: 26px 32px 33px 26px;
  }
`;

const FeatureCardHeader = styled.div`
  display: flex;
  align-items: center;
`;

const FeatureCardIcon = styled.div`
  width: 75px;
  height: 75px;
  background: #ffffff;
  box-shadow: 0px 13px 22px rgba(0, 0, 0, 0.04);
  border-radius: 22px;
  margin-right: 21px;
  padding: 17px;

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

const FeatureCardText = styled(Text)`
  font-size: 22px;
  line-height: 36px;
  color: #292d32;
  letter-spacing: 0.01em;
  font-weight: ${(props) => props.theme.fontWeight["semi-bold"]};

  @media screen and (max-width: 996px) {
    font-size: ${(props) => props.theme.fontSize["base"]};
    line-height: 36px;
  }
`;

const FeatureDesc = styled(Text)`
  margin-top: 25px;
  line-height: 24px;
  letter-spacing: 0.01em;
  color: #292d32;

  @media screen and (max-width: 996px) {
    font-size: ${(props) => props.theme.fontSize["sm"]};
    line-height: 24px;
    margin-top: 20px;
  }
`;

const StyledGetInTouch = styled(GetInTouch)`
  margin: 140px 0 0 0;
`;

function Features() {
  const featuresData = [
    {
      name: "Live Chat",
      desc: "Add the InfinityBot Livechat to your site and start chatting with your website visitors.",
      imgSrc: "/images/home/infinitybot-features/live-chat.svg",
    },
    {
      name: "Team Inbox",
      desc: "Reply to your customers from the Crisp Team Inbox.",
      imgSrc: "/images/home/infinitybot-features/team-inbox.svg",
    },
    {
      name: "Mobile Apps",
      desc: "Reply to your customers from your mobile! We support iOS & Android.",
      imgSrc: "/images/home/infinitybot-features/mobile-apps.svg",
    },
    {
      name: "Be Notified",
      desc: "Receive notifications on your desktop and your phone when a visitor sends a message.",
      imgSrc: "/images/home/infinitybot-features/be-notified.svg",
    },
    {
      name: "Contact Form",
      desc: "Create a contact form linked to your Crisp, which you can include in your website.",
      imgSrc: "/images/home/infinitybot-features/contact-form.svg",
    },
    {
      name: "Unlimited History",
      desc: "Crisp's Unlimited History lets you access previous conversations you've had with leads, regardless of how long ago you've had them.",
      imgSrc: "/images/home/infinitybot-features/unlimited-history.svg",
    },
    {
      name: "Triggers",
      desc: "Do you have any question about our pricing? This is the kind of message you can send automatically using Crisp Triggers. Build your own rules and target your potential leads!",
      imgSrc: "/images/home/infinitybot-features/triggers.svg",
    },
    {
      name: "Canned Responses",
      desc: "Customers always ask the same questions. You will save a lot of time by adding your favourite answers to InfinityBot. You will reply faster than light 💡",
      imgSrc: "/images/home/infinitybot-features/canned-response.svg",
    },
    {
      name: "Private Notes",
      desc: "Scaling customer support requires team work. Use private notes to talk each other. You can also mention your colleagues using @someone. This someone will then be notified.",
      imgSrc: "/images/home/infinitybot-features/privates-note.svg",
    },
    {
      name: "Audio Messages",
      desc: "🎙 Send quick audio messages to your customers to reply on the go.",
      imgSrc: "/images/home/infinitybot-features/audio-messages.svg",
    },
    {
      name: "Facebook Messenger",
      desc: "1 Billion people are using Facebook Messenger. Unify your customer experience by replying to customers directly from Crisp.",
      imgSrc: "/images/home/infinitybot-features/facebook-messenger.svg",
    },
    {
      name: "Email",
      desc: "Manage your contact@yourbrand.com directly from InfinityBot and unify your customer experience. It's compatible with our other integrations.",
      imgSrc: "/images/home/infinitybot-features/email.svg",
    },
    {
      name: "Telegram",
      desc: "Your customers can reach you directly over Telegram.",
      imgSrc: "/images/home/infinitybot-features/telegram.svg",
    },
    {
      name: "Internal Search",
      desc: "InfinityBot Internal Search provides your team with a superior internal search experience, helping them find leads in an instant.",
      imgSrc: "/images/home/infinitybot-features/internal-search.svg",
    },
    {
      name: "Block Users",
      desc: "InfinityBot understands that coming across abusive customers is unavoidable. The Block Users feature lets you block abusive users using smart technology",
      imgSrc: "/images/home/infinitybot-features/block-users.svg",
    },
    {
      name: "Live Translate",
      desc: "Your support becomes international! InfinityBot translates your ongoing conversations with foreign language users back and forth. Speak eg. in English and chat in eg. Italian.",
      imgSrc: "/images/home/infinitybot-features/live-translate.svg",
    },
    {
      name: "Automated Replies",
      desc: "Busy teams need some rest! Enable the InfinityBot Auto-Responder when you are offline to auto-reply to your customers.",
      imgSrc: "/images/home/infinitybot-features/automated.svg",
    },
    {
      name: "Chat Bot",
      desc: "A full-fledged chatbot. Create complex conversational flows with conditions, and message replies. A powerful chatbot to automate your most ambitious projects.",
      imgSrc: "/images/home/infinitybot-features/chatbot.svg",
    },
    {
      name: "Automated Campaign",
      desc: "The InfinityBot Campaigns and Drip Campaigns allow to onboard, engage and retarget your customers. You can send personal emails to users segments and follow your open-rate.",
      imgSrc: "/images/home/infinitybot-features/automated-campaign.svg",
    },
    {
      name: "Video Chat",
      desc: "60% of scheduled calls never happen. InfinityBot solves this issue by including audio/video calls, which let you make direct contact with customers. No external plugin required.",
      imgSrc: "/images/home/infinitybot-features/video-chat.svg",
    },
    {
      name: "Analytics",
      desc: "Make data-driven decisions with InfinityBot Analytics. Get up-to-date analytics on your chats, satisfaction ratings, emails, and employee efficiency.",
      imgSrc: "/images/home/infinitybot-features/analytics.svg",
    },
    {
      name: "Ticket",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      imgSrc: "/images/home/infinitybot-features/tickets.svg",
    },
    {
      name: "Instagram",
      desc: "Reply to your Instagram Direct Messages and stories from InfinityBot dashboard.",
      imgSrc: "/images/home/infinitybot-features/instagram.svg",
    },
    {
      name: "Whatsapp",
      desc: "Reply to questions from your Whatsapp users from InfinityBot dashboard.",
      imgSrc: "/images/home/infinitybot-features/whatsapp.svg",
    },
    {
      name: "User Ratings",
      desc: "Improve your user experience by getting true feedback from your customers. InfinityBot sends transcripts to your customers. It allows them to give a feedback. You'll see then if it's a love story between you and your users.",
      imgSrc: "/images/home/infinitybot-features/user-ratings.svg",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Features</title>
      </Helmet>
      <HeaderMain
        title="InfinityBot Features"
        desc="it's all about making your business goals a reality."
      />
      <FeaturesWrapper>
        {featuresData.map((feature, idx) => {
          return (
            <FeatureCard key={idx}>
              <FeatureCardHeader>
                <FeatureCardIcon>
                  <img src={`${feature.imgSrc}`} alt="live-chat" />
                </FeatureCardIcon>
                <FeatureCardText>{feature.name}</FeatureCardText>
              </FeatureCardHeader>
              <FeatureDesc>{feature.desc}</FeatureDesc>
            </FeatureCard>
          );
        })}
      </FeaturesWrapper>
      <StyledGetInTouch />
    </>
  );
}

export default Features;
