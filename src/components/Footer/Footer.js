import styled from "styled-components";
import Text from "../Typography/Text";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

const FooterWrapper = styled.footer`
  margin-top: 136px;
  display: flex;
  padding: 80px 20px 84px 20px;
  background: #ffffff;

  @media screen and (max-width: 996px) {
    margin-top: 107px;
    flex-direction: column;
    padding: 0 0 60px 0;
  }
`;

const FooterTagLine = styled.div`
  display: flex;
  flex-direction: column;
  // width: 359px;

  img {
    width: 214px;
    height: 49px;
  }

  p {
    line-height: 32px;
    width: 387px;
    margin-top: 24px;
    letter-spacing: 0.01em;
    color: #292d32;
  }

  @media screen and (max-width: 996px) {
    width: 100%;

    img {
      width: 214px;
      height: 49.21px;
    }

    p {
      line-height: 32px;
      width: 100%;
    }
  }
`;

const FooterSocialMedia = styled.div`
  display: flex;
  margin-top: 31px;

  img {
    width: 41px;
    height: 41px;

    :not(:last-child) {
      margin-right: 20px;
    }
  }
`;

const FooterLinks = styled.div`
  width: calc(100% - 359px);
  margin-left: 124px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 996px) {
    margin-left: unset;
    margin-top: 43px;
    width: auto;
    flex-wrap: wrap;
  }
`;

const FooterLinkBoxes = styled.div`
  display: flex;
  flex-direction: column;

  button {
    border-radius: 15px;
    height: 94px;
    line-height: 28px;
    font-weight: 500;
    font-size: 16px;
    padding: 19px 31px;

    :first-child {
      // ::before {
      //   content: "";
      //   display: block;
      //   width: 30px;
      //   height: 35px;
      //   margin-right: 20px;
      //   background: url("/images/apple2.svg") no-repeat;
      // }
    }

    :last-child {
      background: #f9fafe;
      border: 1px solid #e3e6f3;
      margin-top: 20px;
      color: ${(props) => props.theme.colors["cb-purple"]};

      // ::before {
      //   content: "";
      //   display: block;
      //   width: 32.78px;
      //   height: 35px;
      //   margin-right: 20px;
      //   background: url("/images/playstore2.svg") no-repeat;
      // }
    }
  }

  @media screen and (max-width: 996px) {
    :last-child {
      margin-top: 30px;
    }
  }
`;

const FooterLinkTitle = styled(Text)`
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #292d32;
  margin-bottom: 20px;
`;

const FooterLink = styled(Link)`
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #292d32;

  :not(:last-child) {
    margin-bottom: 12px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTagLine>
        <img src="/images/infinity-logo.png" alt="logo" />
        <Text>
          Automate communication with the customer and create personalized
          customer experiences <br />
          <br /> Ready to improve your customer engagement?
        </Text>
        <FooterSocialMedia>
          <img src="/images/social-media/fb.png" alt="fb" />
          <img src="/images/social-media/ig.png" alt="ig" />
        </FooterSocialMedia>
      </FooterTagLine>
      <FooterLinks>
        <FooterLinkBoxes>
          <FooterLinkTitle>Useful Links</FooterLinkTitle>
          <FooterLink to="/">Home</FooterLink>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/term">Term &amp; Condition</FooterLink>
        </FooterLinkBoxes>
        <FooterLinkBoxes>
          <FooterLinkTitle>Useful Links</FooterLinkTitle>
          <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
          <FooterLink to="/faq">FAQ</FooterLink>
          <FooterLink to="/support">Support</FooterLink>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterLinkBoxes>
        <FooterLinkBoxes>
          <FooterLinkTitle>Download Apps</FooterLinkTitle>
          <Button>Download on App Store</Button>
          <Button>Download on Play Store</Button>
        </FooterLinkBoxes>
      </FooterLinks>
    </FooterWrapper>
  );
};

export default Footer;
