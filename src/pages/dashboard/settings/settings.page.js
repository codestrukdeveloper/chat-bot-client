import { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";
import { useLocation } from "react-router";

import { Button } from "@/components/Button/Button";
import Input, { InputGroup } from "@/components/Form/Input";
import Label, { LabelDescription } from "@/components/Form/Label";
import Select, { Option } from "@/components/Form/Select";
import Toogle from "@/components/Toggle/Toggle";
import Text from "@/components/Typography/Text";

import {
  SettingsContainer,
  SettingLists,
  Setting,
  SettingIcon,
  SettingContents,
  SettingContentWrapper,
  SettingName,
  SettingDescription,
  MoreSettingDescription,
  SettingTitle,
  InputWrapperName,
  Divider,
  InputWrapper,
  InputDescription,
  InputFileAvatarWrapper,
  Avatar,
  ButtonActionInputFile,
  Notification,
  SeenAsSetting,
  StatusSeenAs,
  Availability,
  DaysAvailability,
  BoxDays,
  PlansWrapper,
  PlansHeader,
  PlanPriceDetailMobile,
  PlansHeaderContent,
  PlanPrice,
  PlanPriceDetail,
  PlansContent,
  PlansContentTitleWrapper,
  Plans,
  PlansBox,
  PlansDetail,
  PlansLogo,
  PlansName,
  ExpiredPlan,
  ChangePlanButton,
  WebsiteSettingFormWrapper,
  SupportStatusWrapper,
  StatusSupport,
  OperatorButtons,
  EmptyLastActiveButton,
  AddOperatorsButton,
  Supports,
  SupportBox,
  SupportDetail,
  SupportLogo,
  SupportName,
  SupportEmail,
  SupportButtons,
  EditButton,
  DeleteButton,
  ContactInformationForm,
  SMTPForm,
  WebsiteRemoval,
} from "./settings.style";

function Settings() {
  const { hash } = useLocation();

  return (
    <SettingsContainer>
      <SettingLists>
        <Setting
          className={hash === "#account" && "active"}
          as="a"
          href="#account"
        >
          <SettingIcon className="setting-icon">
            <img src="/images/settings/account.svg" alt="account" />
          </SettingIcon>
          <Text className="plugin-name">Account</Text>
        </Setting>
        <Setting
          className={hash === "#notification" && "active"}
          as="a"
          href="#notification"
        >
          <SettingIcon className="setting-icon">
            <img src="/images/settings/notification.svg" alt="notification" />
          </SettingIcon>
          <Text className="plugin-name">Notification</Text>
        </Setting>
        <Setting
          className={hash === "#availability" && "active"}
          as="a"
          href="#availability"
        >
          <SettingIcon className="setting-icon">
            <img src="/images/settings/availability.svg" alt="availability" />
          </SettingIcon>
          <Text className="plugin-name">Availability</Text>
        </Setting>
        <Setting className={hash === "#plans" && "active"} as="a" href="#plans">
          <SettingIcon className="setting-icon">
            <img src="/images/settings/plans.svg" alt="plans" />
          </SettingIcon>
          <Text className="plugin-name">Plans</Text>
        </Setting>
        <Setting
          className={hash === "#web-settings" && "active"}
          as="a"
          href="#web-settings"
        >
          <SettingIcon className="setting-icon">
            <img src="/images/settings/web-settings.svg" alt="web-settings" />
          </SettingIcon>
          <Text className="plugin-name">Website Settings</Text>
        </Setting>
      </SettingLists>
      <SettingContents>
        <AccountSetting />
        <NotificationSetting />
        <AvailabilitySetting />
        <PlansSetting />
        <WebsiteSetting />
      </SettingContents>
    </SettingsContainer>
  );
}

const AccountSetting = () => {
  return (
    <SettingContentWrapper id="account" as="section">
      <SettingName>
        <SettingTitle>Account</SettingTitle>
        <SettingDescription>Avatar, name, email, password</SettingDescription>
      </SettingName>
      <MoreSettingDescription>
        Only your first name is visible to users. Your last name is kept private
        anytime.
      </MoreSettingDescription>
      <InputWrapperName>
        <InputGroup className="input-group">
          <Label>First Name</Label>
          <Input placeholder="First Name" />
        </InputGroup>
        <InputGroup className="input-group">
          <Label>Last Name</Label>
          <Input placeholder="Last Name" />
        </InputGroup>
      </InputWrapperName>

      <Divider />

      <InputWrapper>
        <InputGroup>
          <InputDescription>
            Your email is used to send you notifications. Your visitors will not
            see it.
          </InputDescription>
          <Label>Email</Label>
          <Input placeholder="Email" />
        </InputGroup>
      </InputWrapper>

      <Divider />

      <InputWrapper>
        <InputGroup>
          <InputDescription>
            A phone number can be used for account recovery purposes. It is
            required for 2-Step.
          </InputDescription>
          <Label>Phone</Label>
          <Input placeholder="Enter a number (eg. +1628123457)" />
        </InputGroup>
      </InputWrapper>

      <Divider />

      <InputWrapper>
        <InputGroup>
          <Label htmlFor="avatar">Avatar</Label>
          <LabelDescription>Image, max. 5MB</LabelDescription>
          <InputFileAvatarWrapper>
            <Avatar imgSrc="/images/settings/avatar.svg" />
            <ButtonActionInputFile>
              <Button className="upload" htmlFor="avatar" as="label">
                Upload
              </Button>
              <Button className="delete" bordered>
                Delete
              </Button>
            </ButtonActionInputFile>
          </InputFileAvatarWrapper>
          <Input
            id="avatar"
            hidden
            type="file"
            placeholder="Enter a number (eg. +1628123457)"
          />
        </InputGroup>
      </InputWrapper>

      <Divider />

      <InputWrapper>
        <InputGroup>
          <Label>Language</Label>
          <Select>
            <Option>Auto-Detect</Option>
          </Select>
        </InputGroup>
      </InputWrapper>

      <Divider />

      <InputWrapper>
        <InputGroup>
          <Label>Password</Label>
          <Input placeholder="Change Password" />
        </InputGroup>
      </InputWrapper>

      <Divider />

      <Button className="btn-save">Save</Button>
    </SettingContentWrapper>
  );
};

const NotificationSetting = () => {
  const [toggle, setToggle] = useState({
    notification: false,
    whenOnline: true,
    whenOffline: true,
    unreadMessages: true,
    transcriptConversation: false,
    userRatings: true,
    paidInvoices: true,
    visitorBrowsing: false,
    playNotifSound: true,
  });

  const handleClickNotification = (target) => {
    setToggle((prev) => ({
      ...prev,
      [target]: !prev[target],
    }));
  };

  return (
    <SettingContentWrapper id="notification" as="section">
      <SettingName>
        <SettingTitle>Notification Settings</SettingTitle>
        <SettingDescription>Email, desktop, mobile</SettingDescription>
      </SettingName>
      <MoreSettingDescription>
        <Text>Choose how you want to manage your notifications.</Text>
        <Text>
          It is not recommended to disable them, as you won’t get notified when
          you receive new messages.
        </Text>
      </MoreSettingDescription>

      <Divider unsetMarginTop />

      <Notification>
        <Text>Disable all notifications</Text>
        <Toogle
          active={toggle.notification}
          onClick={() => handleClickNotification("notification")}
        />
      </Notification>

      <Divider />

      <Notification>
        <Text>Notify me messages when I am online (push notifications)</Text>
        <Toogle
          active={toggle.whenOnline}
          onClick={() => handleClickNotification("whenOnline")}
        />
      </Notification>

      <Divider />

      <Notification>
        <Text>Notify me messages when I am offline (push notifications)</Text>
        <Toogle
          active={toggle.whenOffline}
          onClick={() => handleClickNotification("whenOffline")}
        />
      </Notification>

      <Divider />

      <Notification>
        <Text>Email me unread messages</Text>
        <Toogle
          active={toggle.unreadMessages}
          onClick={() => handleClickNotification("unreadMessages")}
        />
      </Notification>

      <Divider />

      <Notification>
        <Text>Email me transcripts of conversations</Text>
        <Toogle
          active={toggle.transcriptConversation}
          onClick={() => handleClickNotification("transcriptConversation")}
        />
      </Notification>

      <Divider />

      <Notification>
        <Text>Email me user ratings</Text>
        <Toogle
          active={toggle.userRatings}
          onClick={() => handleClickNotification("userRatings")}
        />
      </Notification>

      <Divider />

      <Notification>
        <Text>Email me paid invoices (only if you use a paid plan)</Text>
        <Toogle
          active={toggle.paidInvoices}
          onClick={() => handleClickNotification("paidInvoices")}
        />
      </Notification>

      <Divider />

      <Notification>
        <Text>
          Let me know when a visitor is browsing my website (push notifications)
        </Text>
        <Toogle
          active={toggle.visitorBrowsing}
          onClick={() => handleClickNotification("visitorBrowsing")}
        />
      </Notification>

      <Divider />

      <Notification>
        <Text>Play notification sounds</Text>
        <Toogle
          active={toggle.playNotifSound}
          onClick={() => handleClickNotification("playNotifSound")}
        />
      </Notification>

      <Divider />

      <Button className="btn-save">Save</Button>
    </SettingContentWrapper>
  );
};

const AvailabilitySetting = () => {
  return (
    <SettingContentWrapper id="availability" as="section">
      <SettingName>
        <SettingTitle>Availability Settings</SettingTitle>
        <SettingDescription>When visitors see you online</SettingDescription>
      </SettingName>
      <MoreSettingDescription as="div">
        <Text>
          Set yourself available on schedule, by configuring days and times (in
          your timezone). Visitors will see you as away off scheduled hours, but
          they can still send you messages.
        </Text>
        <Text>
          If you are member of a website with multiple operators, the chatbox
          will be seen as online if at least one operator is available, and away
          if all operators are unavailable.
        </Text>
      </MoreSettingDescription>
      <SeenAsSetting>
        <Text>You are currently seen as:</Text>
        <StatusSeenAs>Online</StatusSeenAs>
      </SeenAsSetting>

      <Divider />

      <Availability>
        <Text>Force offline (invisible mode)</Text>
        <Toogle />
      </Availability>

      <Divider />

      <Availability>
        <Text>Set me available when using the app</Text>
        <Toogle active />
      </Availability>

      <Divider />

      <Availability>
        <Text>Enable availability schedule</Text>
        <Toogle />
      </Availability>

      <Divider />

      <Availability className="days-availbility">
        <Text>Days</Text>
        <DaysAvailability>
          <BoxDays>
            <Text>Mon</Text>
          </BoxDays>
          <BoxDays>
            <Text>Tue</Text>
          </BoxDays>
          <BoxDays>
            <Text>Wed</Text>
          </BoxDays>
          <BoxDays>
            <Text>Thu</Text>
          </BoxDays>
          <BoxDays>
            <Text>Fri</Text>
          </BoxDays>
          <BoxDays>
            <Text>Sat</Text>
          </BoxDays>
          <BoxDays className="active">
            <Text>Sun</Text>
          </BoxDays>
        </DaysAvailability>
      </Availability>

      <Divider />

      <InputWrapper>
        <InputGroup>
          <Label>Timezone</Label>
          <Select>
            <Option>UTC+05:30</Option>
          </Select>
        </InputGroup>
      </InputWrapper>

      <Divider />

      <Availability className="hours-availbility">
        <Text>Hours</Text>
        <Button className="btn-interval">Add Interval</Button>
      </Availability>

      <Divider />

      <Button className="btn-save">Save</Button>
    </SettingContentWrapper>
  );
};

const PlansSetting = () => {
  return (
    <SettingContentWrapper id="plans" as="section">
      <SettingName>
        <SettingTitle>Plans</SettingTitle>
      </SettingName>
      <PlansWrapper>
        <PlansHeader>
          <PlanPriceDetailMobile>
            <Text>This is what you pay monthly.</Text>
            <Text>
              Payments are done monthly or yearly based on your plan
              preferences.
            </Text>
          </PlanPriceDetailMobile>
          <PlansHeaderContent>
            <PlanPrice>
              <Text>$0.00</Text>
            </PlanPrice>
            <PlanPriceDetail>
              <Text>This is what you pay monthly.</Text>
              <Text>
                Payments are done monthly or yearly based on your plan
                preferences.
              </Text>
            </PlanPriceDetail>
          </PlansHeaderContent>
        </PlansHeader>
        <PlansContent>
          <PlansContentTitleWrapper>
            <Text>Manage all website plans</Text>
            <Text>Manage all your website plan subscriptions.</Text>
          </PlansContentTitleWrapper>

          <Plans>
            <PlansBox>
              <PlansDetail>
                <PlansLogo>
                  <img src="/images/settings/plans/1.svg" alt="" />
                </PlansLogo>
                <PlansName>
                  <Text>Nefacility</Text>
                  <Text>TRIAL</Text>
                </PlansName>
              </PlansDetail>

              <ExpiredPlan>
                <Button>Unlimited</Button>
                <Text>Trial to 12/22/2021</Text>
              </ExpiredPlan>

              <ChangePlanButton bordered>Change Plan</ChangePlanButton>
            </PlansBox>
          </Plans>
        </PlansContent>
      </PlansWrapper>
    </SettingContentWrapper>
  );
};

const WebsiteSetting = () => {
  return (
    <SettingContentWrapper id="web-settings" as="section">
      <SettingName>
        <SettingTitle>Website Settings</SettingTitle>
        <SettingDescription>
          Configure your website information. This defines how your website
          appears to your users.
        </SettingDescription>
      </SettingName>

      <WebsiteSettingFormWrapper>
        <InputWrapper className="input-wrapper">
          <InputGroup>
            <Label>Website domain</Label>
            <Input />
          </InputGroup>
        </InputWrapper>

        <InputWrapper className="input-wrapper">
          <InputGroup>
            <Label>Website name</Label>
            <Input />
          </InputGroup>
        </InputWrapper>
      </WebsiteSettingFormWrapper>

      <Divider />

      <InputWrapper className="pick-color-group">
        <Label>Chatbot Color</Label>
        <Input className="pick-color" type="color" />
      </InputWrapper>

      <InputWrapper>
        <InputGroup>
          <Label htmlFor="avatar">Website Icon</Label>
          <LabelDescription>Image, max. 5MB</LabelDescription>
          <InputFileAvatarWrapper>
            <Avatar imgSrc="/images/settings/avatar.svg" />
            <ButtonActionInputFile>
              <Button className="upload" htmlFor="avatar" as="label">
                Upload
              </Button>
              <Button className="delete" bordered>
                Delete
              </Button>
            </ButtonActionInputFile>
          </InputFileAvatarWrapper>
          <Input
            id="avatar"
            hidden
            type="file"
            placeholder="Enter a number (eg. +1628123457)"
          />
        </InputGroup>
      </InputWrapper>

      <Divider />

      <Button className="btn-save">Save</Button>

      <Divider fullWidth />

      <SettingName>
        <SettingTitle>Operators in the team</SettingTitle>
        <SettingDescription>
          Add people that will be able to handle support for the website.
        </SettingDescription>
        <SupportStatusWrapper>
          <Text>Support is </Text>
          <StatusSupport>Online</StatusSupport>
          <Text>as at least one operator is online.</Text>
          <OperatorButtons>
            <EmptyLastActiveButton>Empty last Active</EmptyLastActiveButton>
            <AddOperatorsButton>
              <FaPlusSquare />
              Add operators
            </AddOperatorsButton>
          </OperatorButtons>
        </SupportStatusWrapper>
        <OperatorButtons className="operators-mobile">
          <EmptyLastActiveButton>Empty last Active</EmptyLastActiveButton>
          <AddOperatorsButton>
            <FaPlusSquare />
            Add operators
          </AddOperatorsButton>
        </OperatorButtons>
        <Supports>
          <SupportBox>
            <SupportDetail>
              <SupportLogo>
                <img src="/images/settings/plans/1.svg" alt="" />
              </SupportLogo>
              <SupportName>
                <Text>Nefacility</Text>
                <SupportEmail className="email">
                  Nefacity@email.com
                </SupportEmail>
              </SupportName>
            </SupportDetail>

            <SupportEmail>Nefacity@email.com</SupportEmail>

            <SupportButtons>
              <Button bordered>Owner</Button>
              <EditButton>
                <img src="/images/edit.svg" alt="edit" />
              </EditButton>
              <DeleteButton>
                <img src="/images/trash-2.svg" alt="delete" />
              </DeleteButton>
            </SupportButtons>
          </SupportBox>
        </Supports>
      </SettingName>

      <Divider fullWidth />

      <SettingName>
        <SettingTitle>Contact information</SettingTitle>
        <SettingDescription>
          Set your public contact information so that visitors have other ways
          to directly contact you.
        </SettingDescription>
      </SettingName>

      <ContactInformationForm>
        <InputWrapper className="input-wrapper">
          <InputGroup>
            <Label>Website email</Label>
            <Input placeholder="Support@acme.com" />
          </InputGroup>
        </InputWrapper>

        <InputWrapper className="input-wrapper">
          <InputGroup>
            <Label>Website Messenger</Label>
            <Input placeholder="Messenger username" />
          </InputGroup>
        </InputWrapper>

        <InputWrapper className="input-wrapper">
          <InputGroup>
            <Label>Website Telegram</Label>
            <Input placeholder="Telegram username" />
          </InputGroup>
        </InputWrapper>

        <InputWrapper className="input-wrapper">
          <InputGroup>
            <Label>Website Twitter</Label>
            <Input placeholder="Twitter username" />
          </InputGroup>
        </InputWrapper>
      </ContactInformationForm>

      <Divider />

      <Button className="btn-save">Save</Button>

      <Divider fullWidth />

      <SettingName>
        <SettingTitle>SMTP Settings</SettingTitle>
      </SettingName>

      <SMTPForm>
        <InputWrapper className="input-wrapper">
          <InputGroup>
            <Label>SMTP Server Address</Label>
            <Input placeholder="e.g smtp.gmail.com" />
          </InputGroup>
        </InputWrapper>

        <InputWrapper className="input-wrapper">
          <InputGroup>
            <Label>User name</Label>
            <Input placeholder="e.g johndoe@example.com" />
          </InputGroup>
        </InputWrapper>

        <InputWrapper className="input-wrapper">
          <InputGroup>
            <Label>Password</Label>
            <Input placeholder="Type your password here" />
          </InputGroup>
        </InputWrapper>

        <InputWrapper className="input-wrapper">
          <InputGroup>
            <Label>Encryption Type and Port Number</Label>
            <Input placeholder="e.g 465, 587" />
          </InputGroup>
        </InputWrapper>
      </SMTPForm>

      <Divider />

      <Button className="btn-save">Save</Button>

      <Divider fullWidth />

      <SettingName>
        <SettingTitle color="cb-red">Danger zone</SettingTitle>
        <SettingDescription>
          Perform dangerous operations on this website. This section is only
          avaible to owners.
        </SettingDescription>
      </SettingName>

      <WebsiteRemoval>
        <Text>Website removal</Text>
        <Button color="cb-red">Confirm website removal</Button>
      </WebsiteRemoval>
    </SettingContentWrapper>
  );
};

export default Settings;
