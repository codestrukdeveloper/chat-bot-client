import styled from "styled-components";
import Text from "../Typography/Text";

const Header = styled.header`
  height: 415px;
  display: flex;
  margin: 0 -80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  ::after {
    content: "";
    display: block;
    position: absolute;
    inset: 0;
    top: 45px;
    background: url("/images/chatbot-hero.svg") no-repeat;
    background-position: top right;
  }

  @media screen and (max-width: 996px) {
    height: auto;
    margin: 0;
    padding-top: 50px;

    ::after {
      display: none;
    }
  }
`;

const HeaderTitle = styled(Text)`
  font-size: 58px;
  line-height: 60px;
  letter-spacing: -0.01em;
  color: #292d32;
  font-weight: ${(props) => props.theme.fontWeight["bold"]};

  @media screen and (max-width: 996px) {
    font-size: ${(props) => props.theme.fontSize["2xl"]};
    line-height: 40px;
  }
`;

const HeaderDesc = styled(Text)`
  margin-top: 32px;
  font-size: ${(props) => props.theme.fontSize["lg"]};
  line-height: 36px;
  letter-spacing: 0.01em;
  color: #292d32;
  text-align: center;
  max-width: 644px;

  @media screen and (max-width: 996px) {
    font-size: ${(props) => props.theme.fontSize["sm"]};
    line-height: 28px;
    margin-top: 12px;
    width: 100%;
  }
`;

const HeaderMain = ({ title, desc }) => {
  return (
    <Header>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderDesc>{desc}</HeaderDesc>
    </Header>
  );
};

export default HeaderMain;
