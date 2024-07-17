import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SearchIcon } from "@/components/Icons";
import { H2 } from "@/components/Typography/Heading";
import Text from "@/components/Typography/Text";

import {
  DocsContainer,
  Header,
  Nav,
  GotoWebButton,
  InputWrapper,
  SearchInputWrapper,
  SearchInput,
  CardDocsContainer,
  LiveChat,
  GotoWebButtons,
} from "./home.style";
import styled from "styled-components";

const CardDocs = styled.div`
  background: #ffffff;
  border-radius: 20px;
  width: 325px;
  height: 169px;
  padding: 22px 22px 15px 22px;
  display: flex;

  img {
    width: 50px;
    height: 50px;
    margin-right: 16px;
  }

  @media screen and (max-width: 996px) {
    width: 100%;
    height: 147px;
  }
`;

const CardDocsDetail = styled.div`
  padding-top: 6px;
`;
const CardDocsTitle = styled(Text)`
  font-size: 22px;
  line-height: 33px;
  letter-spacing: -0.03em;
  font-weight: 600;
  margin-bottom: 12px;
  cursor: pointer;
`;

const CardDocsDesc = styled(Text)`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.03em;
  color: #c1c7d4;
`;

const HomepageDocs = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Helmet>
        <title>Documentation</title>
      </Helmet>
      <DocsContainer>
        <Header>
          <Nav>
            <img src="/images/logo.png" alt="logo" />
            <GotoWebButtons>
              <GotoWebButton onClick={() => navigate(-1)}>
                Go to website
              </GotoWebButton>
              <GotoWebButton onClick={() => navigate("/create-ticket")}>
                Create Ticket
              </GotoWebButton>
            </GotoWebButtons>
          </Nav>
          <InputWrapper>
            <H2 weight="semi-bold">How can we help you?</H2>
            <SearchInputWrapper>
              <SearchIcon />
              <SearchInput placeholder="Search in here" />
            </SearchInputWrapper>
          </InputWrapper>
        </Header>
        <Text className="browse" weight="semi-bold" size="2xl">
          Browse All Categories
        </Text>
        <CardDocsContainer>
          <CardDocs>
            <img src="/images/docs/getting-started.svg" alt="getting-started" />
            <CardDocsDetail>
              <CardDocsTitle onClick={() => navigate("getting-started")}>
                Getting Started
              </CardDocsTitle>
              <CardDocsDesc>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. do amet sint...
              </CardDocsDesc>
            </CardDocsDetail>
          </CardDocs>
          <CardDocs>
            <img src="/images/docs/manage-account.svg" alt="getting-started" />
            <CardDocsDetail>
              <CardDocsTitle onClick={() => navigate("manage-account")}>
                Manage Account
              </CardDocsTitle>
              <CardDocsDesc>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. do amet sint...
              </CardDocsDesc>
            </CardDocsDetail>
          </CardDocs>
          <CardDocs>
            <img src="/images/docs/security.svg" alt="getting-started" />
            <CardDocsDetail>
              <CardDocsTitle onClick={() => navigate("security")}>
                Security
              </CardDocsTitle>
              <CardDocsDesc>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. do amet sint...
              </CardDocsDesc>
            </CardDocsDetail>
          </CardDocs>
          <CardDocs>
            <img src="/images/docs/pricing-plans.svg" alt="getting-started" />
            <CardDocsDetail>
              <CardDocsTitle onClick={() => navigate("pricing-plans")}>
                Pricing Plans
              </CardDocsTitle>
              <CardDocsDesc>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. do amet sint...
              </CardDocsDesc>
            </CardDocsDetail>
          </CardDocs>
          <CardDocs>
            <img src="/images/docs/other-topics.svg" alt="getting-started" />
            <CardDocsDetail>
              <CardDocsTitle onClick={() => navigate("topics")}>
                Other Topics
              </CardDocsTitle>
              <CardDocsDesc>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. do amet sint...
              </CardDocsDesc>
            </CardDocsDetail>
          </CardDocs>
        </CardDocsContainer>
        <LiveChat />
      </DocsContainer>
    </Fragment>
  );
};

export default HomepageDocs;
