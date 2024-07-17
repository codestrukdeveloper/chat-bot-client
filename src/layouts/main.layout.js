import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Fragment } from "react";
import { Outlet } from "react-router";
import styled, { createGlobalStyle } from "styled-components";

const CSSReset = createGlobalStyle`
  body {
    background: #f9fafe;
    overflow-x: hidden;
  }`;

const Container = styled.div`
  max-width: 1440px;
  margin: auto;
  padding-left: 80px;
  padding-right: 80px;
  background: white;

  @media screen and (max-width: 996px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const MainLayout = () => {
  return (
    <Fragment>
      <CSSReset />
      <Container>
        <Navbar />
        <Outlet />
        <Footer />
      </Container>
    </Fragment>
  );
};

export default MainLayout;
