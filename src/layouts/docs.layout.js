import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #f9fafe;
  }
`;

const DocsContainer = styled.div`
  max-width: 1440px;
  margin: auto;
`;

const DocsLayout = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <DocsContainer>
        <Outlet />
      </DocsContainer>
    </Fragment>
  );
};

export default DocsLayout;
