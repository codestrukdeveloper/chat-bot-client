import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/Button/Button";
import { H1 } from "@/components/Typography/Heading";
import { Helmet } from "react-helmet-async";

const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  margin: auto;
  text-align: center;

  button {
    margin-top: 20px;
  }
`;

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <NotFound>
        <Container>
          <H1>404 - Page Not Found</H1>
          <Button onClick={() => navigate(-1)}>Back</Button>
        </Container>
      </NotFound>
    </>
  );
}
