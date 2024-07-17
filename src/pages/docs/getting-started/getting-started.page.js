import NavbarDocs from "@/components/Navbar/Navbar.docs";
import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import Text from "@/components/Typography/Text";
import { useNavigate } from "react-router";

const Container = styled.div``;
const NavHeaderEmpty = styled.div`
  height: 323px;
  background: ${(props) => props.theme.colors["cb-purple"]};

  @media screen and (max-width: 996px) {
    height: 193px;
  }
`;

const GettingStartedContainer = styled.div`
  display: flex;
`;

const StyledNavbar = styled(NavbarDocs)`
  @media screen and (max-width: 996px) {
    flex-direction: column;
    height: max-content;
    padding: 25px 20px 20px 20px;
    align-items: flex-start;

    ul {
      width: 100%;
      margin-top: 52px;
      overflow-x: auto;
      display: flex;

      li {
        font-size: 12px;
        line-height: 18px;
        white-space: nowrap;

        :not(:last-child) {
          margin-right: 22px;
        }
      }
    }
  }
`;

const GettingStartedBox = styled.div`
  margin: -177px auto 99px auto;
  width: 1040px;
  height: 1143px;
  background: white;
  box-shadow: 0px 64px 90px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  padding: 25px;

  @media screen and (max-width: 996px) {
    width: 100%;
    height: auto;
    padding: 20px;
    margin: -190px 20px 66px 20px;
  }
`;

const GettingStartedHeader = styled.header`
  height: 286px;
  background: ${(props) => props.theme.colors["cb-purple"]};
  border-radius: 25px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 996px) {
    height: 235px;
  }
`;

const GettingStartedText = styled.div`
  margin-left: 28px;
  color: white;

  @media screen and (max-width: 996px) {
    margin-left: 21px;
  }
`;

const GettingStartedTitle = styled(Text)`
  font-weight: 600;
  font-size: 48px;
  line-height: 72px;
  letter-spacing: -0.03em;

  @media screen and (max-width: 996px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

const GettingStartedDesc = styled(Text)`
  line-height: 24px;
  letter-spacing: -0.03em;
  margin-top: 16px;
  width: 541px;

  @media screen and (max-width: 996px) {
    font-size: 12px;
    line-height: 18px;
    width: 191px;
  }
`;

const GettingStartedArticles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
  padding: 80px 98px;

  @media screen and (max-width: 996px) {
    grid-template-columns: 100%;
    padding: 42px 0 53px 0;
    gap: 28px;
  }
`;

const ArticleWrapper = styled.div`
  display: flex;
  height: 108px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 996px) {
    height: auto;
  }
`;

const ArticleTitle = styled(Text)`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.03em;
  color: #7b40f2;

  @media screen and (max-width: 996px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const ArticleDesc = styled(Text)`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.03em;
  color: #292d32;
  margin: 12px 0;
  width: 356px;
  overflow: hidden;
  text-overflow: ellipsis;
  // white-space: nowrap;

  @media screen and (max-width: 996px) {
    width: 100%;
  }
`;

const ReadMore = styled(Text)`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.03em;
  color: #7b40f2;
  cursor: pointer;
  display: flex;
  align-items: center;

  ::after {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    margin-left: 6px;
    background: url("/images/arrow-right.svg");
  }
`;

function GettingStarted() {
  return (
    <Fragment>
      <Helmet>
        <title>Get Started</title>
      </Helmet>
      <Container>
        <StyledNavbar />
        <NavHeaderEmpty />
        <GettingStartedContainer>
          <GettingStartedBox>
            <GettingStartedHeader>
              <picture>
                <source
                  media="(min-width: 996px)"
                  srcSet="/images/docs/header.svg"
                />
                <img src="/images/docs/header-mobile.svg" alt="header" />
              </picture>
              <GettingStartedText>
                <GettingStartedTitle>Getting Started</GettingStartedTitle>
                <GettingStartedDesc>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. do amet sint...
                </GettingStartedDesc>
              </GettingStartedText>
            </GettingStartedHeader>

            <GettingStartedArticles>
              <Article link="amet-minim-mollit-non-deserunt-ullamco" />
              <Article link="testing-1" />
              <Article link="potatos-studio" />
              <Article link="testing-3" />
              <Article link="testing-4" />
              <Article link="testing-5" />
              <Article link="testing-6" />
              <Article link="testing-7" />
            </GettingStartedArticles>
          </GettingStartedBox>
        </GettingStartedContainer>
      </Container>
    </Fragment>
  );
}

const Article = ({ link }) => {
  const navigate = useNavigate();

  return (
    <ArticleWrapper>
      <ArticleTitle>Amet minim mollit non deserunt ullamco</ArticleTitle>
      <ArticleDesc>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. do amet sint...
      </ArticleDesc>
      <ReadMore
        onClick={() => navigate("amet-minim-mollit-non-deserunt-ullamco")}
      >
        Read More
      </ReadMore>
    </ArticleWrapper>
  );
};

export default GettingStarted;
