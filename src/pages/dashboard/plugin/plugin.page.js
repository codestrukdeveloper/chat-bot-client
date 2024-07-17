import { useLocation, useNavigate } from "react-router-dom";

import { Button } from "@/components/Button/Button";
import Input, { InputGroup } from "@/components/Form/Input";
import Label from "@/components/Form/Label";
import Text from "@/components/Typography/Text";

import {
  PluginContainer,
  Plugin,
  PluginLists,
  PluginWrapper,
  PluginDetail,
  PluginDescription,
  ListTitle,
  MoreDetailList,
  ListsDescription,
  ListsDescriptionWrapper,
  PluginHeader,
  DeveloperProfile,
  PluginConnect,
  PluginConnectNav,
  PluginTitle,
  Wrapper,
  Description,
  PluginThumb,
  ListDetail,
  AvatarProfile,
  ProfileText,
  List,
  ListMoreDetail,
  PluginConnectContent,
} from "./plugin.style";
import { useEffect } from "react";

function PluginPage() {
  const navigate = useNavigate();
  const { hash } = useLocation();

  useEffect(() => {
    const pageTitleNavElement = document.querySelector(".page-title-nav");
    pageTitleNavElement.textContent = "Plugins";
  }, []);

  return (
    <PluginContainer>
      <PluginLists>
        <Text className="title">Plugin Lists</Text>
        <PluginWrapper>
          <Plugin
            className={hash === "#messenger" && "active"}
            as="a"
            href="#messenger"
          >
            <img src="/images/plugins/messenger.png" alt="messenger" />
            <Text className="plugin-name">Messenger</Text>
          </Plugin>
          <Plugin
            className={hash === "#whatsapp" && "active"}
            as="a"
            href="#whatsapp"
          >
            <img src="/images/plugins/whatsapp.png" alt="whatsapp" />
            <Text className="plugin-name">WhatsApp</Text>
          </Plugin>
          <Plugin
            className={hash === "#telegram" && "active"}
            as="a"
            href="#telegram"
          >
            <img src="/images/plugins/telegram.png" alt="telegram" />
            <Text className="plugin-name">Telegram</Text>
          </Plugin>
          <Plugin
            className={hash === "#instagram" && "active"}
            as="a"
            href="#instagram"
          >
            <img src="/images/plugins/instagram.png" alt="instagram" />
            <Text className="plugin-name">Instagram</Text>
          </Plugin>
          <Plugin className={hash === "#bot" && "active"} as="a" href="#bot">
            <img src="/images/plugins/bot.png" alt="bot" />
            <Text className="plugin-name">Bot</Text>
          </Plugin>
        </PluginWrapper>
      </PluginLists>
      <PluginDetail>
        <MessengerPlugin navigate={navigate} />
        <WhatsappPlugin navigate={navigate} />
        <TelegramPlugin navigate={navigate} />
        <InstagramPlugin navigate={navigate} />
        <InfinityBotPlugin navigate={navigate} />
      </PluginDetail>
    </PluginContainer>
  );
}

const MessengerPlugin = ({ navigate }) => {
  return (
    <>
      <PluginHeader id="messenger">
        <Wrapper flex>
          <PluginThumb>
            <img src="/images/plugins/header/messenger.png" alt="messenger" />
          </PluginThumb>
          <PluginTitle>
            <Text>Messenger</Text>
            <Text>Unlimited</Text>
          </PluginTitle>
        </Wrapper>
        <Wrapper className="developer-wrapper">
          <Text className="developer-text">Developer</Text>
          <DeveloperProfile>
            <AvatarProfile>
              <img src="/images/logo-blue.png" alt="avatar" />
            </AvatarProfile>
            <ProfileText>
              <Text className="dev-name">InfinityBot</Text>
              <Text className="dev-username">InfinityBot</Text>
            </ProfileText>
          </DeveloperProfile>
        </Wrapper>
      </PluginHeader>
      <PluginDescription>
        {/* <Wrapper>
          <Text className="developer-text">Developer</Text>
          <DeveloperProfile className="prof-desc">
            <AvatarProfile>
              <img src="/images/logo-blue.png" alt="avatar" />
            </AvatarProfile>
            <ProfileText>
              <Text className="dev-name">InfinityBot</Text>
              <Text className="dev-username">InfinityBot</Text>
            </ProfileText>
          </DeveloperProfile>
        </Wrapper> */}
        <Description alignItems="flex-end">
          <ListsDescriptionWrapper className="permission-desc">
            <ListTitle>Permissions</ListTitle>
            <ListsDescription>
              <List color="cb-purple" underline pointer>
                What are permission?
              </List>
            </ListsDescription>
          </ListsDescriptionWrapper>
          <ListsDescriptionWrapper className="messaging-desc--messenger">
            <ListTitle>Messaging</ListTitle>
            <ListsDescription>
              <List>Write on chat creation</List>
              <List>Read &amp; write sessions</List>
              <List>Read &amp; write messages</List>
            </ListsDescription>
          </ListsDescriptionWrapper>
          <ListsDescriptionWrapper className="website-desc--messenger">
            <ListTitle>Website</ListTitle>
            <ListsDescription>
              <List>Write files</List>
              <List>Write operators</List>
              <List>Write settings</List>
            </ListsDescription>
          </ListsDescriptionWrapper>
        </Description>
        <Description className="desc-detail">
          <ListsDescriptionWrapper>
            <Button bordered className="btn-gethelp">
              Get Help
            </Button>
          </ListsDescriptionWrapper>
          <ListsDescriptionWrapper className="more-detail">
            <ListTitle className="more-detail-title">
              This plugin lets you connect your Facebook Messenger Page to
              InfinityBot.
            </ListTitle>
            <Text className="more-detail-desc">
              You can now handle all your Facebook Messenger customers right
              from InfinityBot. It is compatible with Slack or Zendesk as well.
            </Text>
            <MoreDetailList>
              <Text className="more-detail-desc">
                Some benefits of using Crisp with Messenger:
              </Text>
              <ListMoreDetail>
                <ListDetail>
                  Avoid distraction by keeping all your chats in Crisp.
                </ListDetail>
                <ListDetail>
                  Get more information with your customers with a Picture and
                  full name.
                </ListDetail>
                <ListDetail>
                  Integrate it with your team tools (Slack, etc).
                </ListDetail>
                <ListDetail>Re-target your Messenger users.</ListDetail>
              </ListMoreDetail>
            </MoreDetailList>
          </ListsDescriptionWrapper>
        </Description>
      </PluginDescription>
      <PluginConnect>
        <PluginConnectNav>
          <Text>Connect Your Website To Messenger</Text>
          <Text>Connect InfinityBot to Messenger to get started.</Text>
        </PluginConnectNav>
        <PluginConnectContent>
          <Text className="connect-title">
            Click on the button below to connect InfinityBot to Messenger.
          </Text>
          <Text className="connect-desc">
            You will be redirected to Facebook. The process takes no more than
            10 seconds.
          </Text>
          <Button onClick={() => navigate("")}>Connect to Messenger</Button>
        </PluginConnectContent>
      </PluginConnect>
    </>
  );
};

const InstagramPlugin = ({ navigate }) => {
  return (
    <>
      <PluginHeader id="instagram">
        <Wrapper flex>
          <PluginThumb>
            <img src="/images/plugins/header/instagram.png" alt="instagram" />
          </PluginThumb>
          <PluginTitle>
            <Text>Instagram</Text>
            <Text>Unlimited</Text>
          </PluginTitle>
        </Wrapper>
        <Wrapper>
          <Text className="developer-text">Developer</Text>
          <DeveloperProfile>
            <AvatarProfile>
              <img src="/images/logo-blue.png" alt="avatar" />
            </AvatarProfile>
            <ProfileText>
              <Text className="dev-name">InfinityBot</Text>
              <Text className="dev-username">InfinityBot</Text>
            </ProfileText>
          </DeveloperProfile>
        </Wrapper>
      </PluginHeader>
      <PluginDescription>
        <Description alignItems="flex-end">
          <ListsDescriptionWrapper className="permission-desc">
            <ListTitle>Permissions</ListTitle>
            <ListsDescription>
              <List color="cb-purple" underline pointer>
                What are permission?
              </List>
            </ListsDescription>
          </ListsDescriptionWrapper>
          <ListsDescriptionWrapper className="messaging-desc--messenger">
            <ListTitle>Messaging</ListTitle>
            <ListsDescription>
              <List>Write on chat creation</List>
              <List>Read &amp; write sessions</List>
              <List>Read &amp; write messages</List>
            </ListsDescription>
          </ListsDescriptionWrapper>
          <ListsDescriptionWrapper className="website-desc--messenger">
            <ListTitle>Website</ListTitle>
            <ListsDescription>
              <List>Write files</List>
              <List>Write operators</List>
              <List>Write settings</List>
            </ListsDescription>
          </ListsDescriptionWrapper>
        </Description>
        <Description className="desc-detail">
          <ListsDescriptionWrapper>
            <Button bordered className="btn-gethelp">
              Get Help
            </Button>
          </ListsDescriptionWrapper>
          <ListsDescriptionWrapper className="more-detail">
            <ListTitle className="more-detail-title">
              This plugin lets you connect your Instagram Business Account to
              InfinityBot.
            </ListTitle>
            <Text className="more-detail-desc">
              You can now handle all your Instagram customers right from
              InfinityBot. It is compatible with Slack as well.
            </Text>
            <MoreDetailList>
              <Text className="more-detail-desc">
                Some benefits of using InfinityBot with Instagram:
              </Text>
              <ListMoreDetail>
                <ListDetail>
                  Avoid distraction by keeping all your chats in InfinityBot.
                </ListDetail>
                <ListDetail>
                  Get more information with your customers with a Picture and
                  full name.
                </ListDetail>
                <ListDetail>
                  Integrate it with your team tools (Slack, etc).
                </ListDetail>
                <ListDetail>Re-target your Intagram users.</ListDetail>
              </ListMoreDetail>
            </MoreDetailList>
          </ListsDescriptionWrapper>
        </Description>
      </PluginDescription>
      <PluginConnect>
        <PluginConnectNav>
          <Text>Connect Your Website To Instagram</Text>
          <Text>Connect Crisp to Instagram to get started.</Text>
        </PluginConnectNav>
        <PluginConnectContent>
          <Text className="connect-title">
            Click on the button below to connect Crisp to Instagram.
          </Text>
          <Text className="connect-desc">
            You will be redirected to Facebook. The process takes no more than
            10 seconds.
          </Text>
          <Button onClick={() => navigate("")}>Connect to Instagram</Button>
        </PluginConnectContent>
      </PluginConnect>
    </>
  );
};

const WhatsappPlugin = ({ navigate }) => {
  return (
    <>
      <PluginHeader id="whatsapp">
        <Wrapper flex>
          <PluginThumb>
            <img src="/images/plugins/header/whatsapp.png" alt="whatsapp" />
          </PluginThumb>
          <PluginTitle>
            <Text>Whatsapp</Text>
            <Text>Unlimited</Text>
          </PluginTitle>
        </Wrapper>
        <Wrapper>
          <Text className="developer-text">Developer</Text>
          <DeveloperProfile>
            <AvatarProfile>
              <img src="/images/logo-blue.png" alt="avatar" />
            </AvatarProfile>
            <ProfileText>
              <Text className="dev-name">InfinityBot</Text>
              <Text className="dev-username">InfinityBot</Text>
            </ProfileText>
          </DeveloperProfile>
        </Wrapper>
      </PluginHeader>
      <PluginDescription>
        <Description>
          <ListsDescriptionWrapper className="permission-desc">
            <ListTitle>Permissions</ListTitle>
            <ListsDescription>
              <List color="cb-purple" underline pointer>
                What are permission?
              </List>
            </ListsDescription>
          </ListsDescriptionWrapper>
          <ListsDescriptionWrapper className="messaging-desc--messenger">
            <ListTitle>Messaging</ListTitle>
            <ListsDescription>
              <List>Write on chat creation</List>
              <List>Read &amp; write sessions</List>
              <List>Read &amp; write messages</List>
            </ListsDescription>
          </ListsDescriptionWrapper>
          <ListsDescriptionWrapper className="website-desc--messenger">
            <ListTitle>Website</ListTitle>
            <ListsDescription>
              <List>Write files</List>
              <List>Write operators</List>
              <List>Write settings</List>
            </ListsDescription>
          </ListsDescriptionWrapper>
          <ListsDescriptionWrapper className="website-desc--contact">
            <ListTitle>Contact</ListTitle>
            <ListsDescription>
              <List>Read profiles</List>
            </ListsDescription>
          </ListsDescriptionWrapper>
        </Description>
        <Description className="desc-detail">
          <ListsDescriptionWrapper>
            <Button bordered className="btn-gethelp">
              Get Help
            </Button>
          </ListsDescriptionWrapper>
          <ListsDescriptionWrapper className="more-detail">
            <ListTitle className="more-detail-title">
              This plugin lets you connect a Whatsapp Business Profile to
              InfinityBot.
            </ListTitle>
            <Text className="more-detail-desc">
              You can now handle all your Whatsapp customers right from
              InfinityBot. It is compatible with Slack as well.
            </Text>
            <MoreDetailList>
              <Text className="more-detail-desc">
                Some benefits of using InfinityBot with Whatsapp:
              </Text>
              <ListMoreDetail>
                <ListDetail>
                  Avoid distraction by keeping all your chats in InfinityBot.
                </ListDetail>
                <ListDetail>
                  Get more information with your customers with Picture and full
                  name.
                </ListDetail>
                <ListDetail>
                  Integrate it with your team tools (Slack, Zendesk, etc).
                </ListDetail>
              </ListMoreDetail>
            </MoreDetailList>
          </ListsDescriptionWrapper>
        </Description>
      </PluginDescription>
      <PluginConnect>
        <PluginConnectNav>
          <Text>Connect Your Website To Whatsapp</Text>
          <Text>Connect InfinityBot to Twilio to get started.</Text>
        </PluginConnectNav>
        <PluginConnectContent>
          <Text className="connect-title">
            We need your Twilio credentials to link it to your InfinityBot.
          </Text>
          <Text className="connect-desc">
            Submit your credentials and save. InfinityBot will then be connected
            to your Twilio account.
          </Text>
          <InputGroup>
            <Label>Twilio Account SID</Label>
            <Input placeholder="Your Twilio Account SID" />
          </InputGroup>
          <InputGroup>
            <Label>Twilio Account Token</Label>
            <Input placeholder="Your Twilio Account Token" />
          </InputGroup>
          <Button onClick={() => navigate("")}>
            Save &amp; Connect to Twilio
          </Button>
        </PluginConnectContent>
      </PluginConnect>
    </>
  );
};

const TelegramPlugin = ({ navigate }) => {
  return (
    <>
      <PluginHeader id="telegram">
        <Wrapper flex>
          <PluginThumb>
            <img src="/images/plugins/header/telegram.png" alt="telegram" />
          </PluginThumb>
          <PluginTitle>
            <Text>Telegram</Text>
            <Text>Unlimited</Text>
          </PluginTitle>
        </Wrapper>
        <Wrapper>
          <Text className="developer-text">Developer</Text>
          <DeveloperProfile>
            <AvatarProfile>
              <img src="/images/logo-blue.png" alt="avatar" />
            </AvatarProfile>
            <ProfileText>
              <Text className="dev-name">InfinityBot</Text>
              <Text className="dev-username">InfinityBot</Text>
            </ProfileText>
          </DeveloperProfile>
        </Wrapper>
      </PluginHeader>
      <PluginDescription>
        <Description alignItems="flex-end">
          <ListsDescriptionWrapper className="permission-desc">
            <ListTitle>Permissions</ListTitle>
            <ListsDescription>
              <List color="cb-purple" underline pointer>
                What are permission?
              </List>
            </ListsDescription>
          </ListsDescriptionWrapper>
          <ListsDescriptionWrapper className="messaging-desc--messenger">
            <ListTitle>Messaging</ListTitle>
            <ListsDescription>
              <List>Write on chat creation</List>
              <List>Read &amp; write sessions</List>
              <List>Read &amp; write messages</List>
            </ListsDescription>
          </ListsDescriptionWrapper>
          <ListsDescriptionWrapper className="website-desc--messenger">
            <ListTitle>Website</ListTitle>
            <ListsDescription>
              <List>Write files</List>
              <List>Write operators</List>
              <List>Write settings</List>
            </ListsDescription>
          </ListsDescriptionWrapper>
        </Description>
        <Description className="desc-detail">
          <ListsDescriptionWrapper>
            <Button bordered className="btn-gethelp">
              Get Help
            </Button>
          </ListsDescriptionWrapper>
          <ListsDescriptionWrapper className="more-detail">
            <ListTitle className="more-detail-title">
              This plugin lets you connect a Telegram Bot to InfinityBot.
            </ListTitle>
            <Text className="more-detail-desc">
              You can now handle all your Telegram Support with a Team Inbox and
              reply from any device. It's compatible with with Slack or Zendesk
              as well.
            </Text>
            <MoreDetailList>
              <Text className="more-detail-desc">
                Some benefits of using InfinityBot with Telegram:
              </Text>
              <ListMoreDetail>
                <ListDetail>
                  Avoid distraction by keeping all your Telegram in InfinityBot.
                </ListDetail>
                <ListDetail>
                  Integrate it with your team tools (Slack, Zendesk, etc).
                </ListDetail>
                <ListDetail>Re-target your Telegram users.</ListDetail>
              </ListMoreDetail>
            </MoreDetailList>
          </ListsDescriptionWrapper>
        </Description>
      </PluginDescription>
      <PluginConnect>
        <PluginConnectNav>
          <Text>Connect Your Website To Telegram</Text>
          <Text>Connect InfinityBot to Telegram to get started.d.</Text>
        </PluginConnectNav>
        <PluginConnectContent>
          <Text className="connect-title">
            Click on the button below to connect InfinityBot to Telegram.
          </Text>
          <Text className="connect-desc">
            You will be redirected to Telegram. The process takes no more than
            10 seconds.
          </Text>
          <InputGroup>
            <Label>Telegram Bot Token</Label>
            <Input placeholder="Your Telegram Bot Token" />
          </InputGroup>
          <Button onClick={() => navigate("")}>Connect to Telegram</Button>
        </PluginConnectContent>
      </PluginConnect>
    </>
  );
};

const InfinityBotPlugin = ({ navigate }) => {
  return (
    <>
      <PluginHeader id="bot">
        <Wrapper flex>
          <PluginThumb>
            <img src="/images/plugins/header/bot.png" alt="bot" />
          </PluginThumb>
          <PluginTitle>
            <Text>Bot</Text>
            <Text>Unlimited</Text>
          </PluginTitle>
        </Wrapper>
        <Wrapper>
          <Text className="developer-text">Developer</Text>
          <DeveloperProfile>
            <AvatarProfile>
              <img src="/images/logo-blue.png" alt="avatar" />
            </AvatarProfile>
            <ProfileText>
              <Text className="dev-name">InfinityBot</Text>
              <Text className="dev-username">InfinityBot</Text>
            </ProfileText>
          </DeveloperProfile>
        </Wrapper>
      </PluginHeader>
      <PluginDescription>
        <Description>
          <ListsDescriptionWrapper className="permission-desc">
            <ListTitle>Permissions</ListTitle>
            <ListsDescription>
              <List color="cb-purple" underline pointer>
                What are permission?
              </List>
            </ListsDescription>
          </ListsDescriptionWrapper>
          <ListsDescriptionWrapper className="messaging-desc--messenger">
            <ListTitle>Messaging</ListTitle>
            <ListsDescription>
              <List>Write on chat creation</List>
              <List>Read &amp; write sessions</List>
              <List>Read &amp; write messages</List>
              <List>Write states</List>
              <List>Read pages</List>
              <List>Read events</List>
              <List>Write actions</List>
              <List>Write routing</List>
            </ListsDescription>
          </ListsDescriptionWrapper>
          <ListsDescriptionWrapper className="website-desc--messenger">
            <ListTitle>Website</ListTitle>
            <ListsDescription>
              <List>Read availability</List>
              <List>Read operators</List>
            </ListsDescription>
          </ListsDescriptionWrapper>
          <ListsDescriptionWrapper className="website-desc--contact">
            <ListTitle>Contact</ListTitle>
            <ListsDescription>
              <List>Write events</List>
            </ListsDescription>
          </ListsDescriptionWrapper>
        </Description>
        <Description className="desc-detail">
          <ListsDescriptionWrapper>
            <Button bordered className="btn-gethelp">
              Get Help
            </Button>
          </ListsDescriptionWrapper>
          <ListsDescriptionWrapper className="more-detail">
            <ListTitle className="more-detail-title">
              Create complex chat response scenarios with Infinity Bot.
            </ListTitle>
            <Text className="more-detail-desc">
              Automate your workflow, take bookings and onboard users, without
              human effort.
            </Text>
            <MoreDetailList>
              <Text className="more-detail-desc">
                Auto-Responder lets you put your customer support in autopilot:
              </Text>
              <ListMoreDetail>
                <ListDetail>
                  Create complex Bot scenarios, made of events and actions.
                </ListDetail>
                <ListDetail>
                  Trigger an action on a multitude of available events, for
                  example "when user sends message".
                </ListDetail>
                <ListDetail>
                  Create conditional branches to execute actions in certain
                  predefined cases only (if, then, else).
                </ListDetail>
                <ListDetail>
                  Connect scenarios together to route a chat session from a
                  scenario to another scenario (eg. user qualification scenario,
                  routing to a given scenario for each user type eg. sales,
                  tech, lead).
                </ListDetail>
                <ListDetail>
                  And much, much more. Developers will love the flexibility of
                  the Bot plugin (it is as broad as writing code).
                </ListDetail>
              </ListMoreDetail>
            </MoreDetailList>
          </ListsDescriptionWrapper>
        </Description>
      </PluginDescription>
      <PluginConnect>
        <PluginConnectNav>
          <Text>Connect Your Website To Bot</Text>
          <Text>Connect Bot to get started.</Text>
        </PluginConnectNav>
        <PluginConnectContent>
          <Text className="connect-title">
            Click on the button below to connect Bot
          </Text>
          <Text className="connect-desc">
            You will be redirected. The process takes no more than 10 seconds.
          </Text>
          <Button onClick={() => navigate("bot")}>Connect to Bot</Button>
        </PluginConnectContent>
      </PluginConnect>
    </>
  );
};

export default PluginPage;
