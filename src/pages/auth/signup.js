import { Button } from "@/components/Button/Button";
import Checkbox from "@/components/Form/Checkbox";
import Label from "@/components/Form/Label";
import { InputGroup, Input, InputWrapper } from "@/components/Form/v2/Input";
import Text from "@/components/Typography/Text";
import { Helmet } from "react-helmet-async";
import { FaEnvelope, FaGlobe, FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 100%;
  height: 100vh;
  display: flex;

  @media screen and (max-width: 996px) {
    flex-direction: column;
    height: auto;
  }
`;

const SignupContainer = styled.div`
  width: 50%;
  padding: 0 100px 31px 100px;

  @media screen and (max-width: 996px) {
    width: 100%;
    padding: 50px 20px 40px 20px;
  }
`;

const AuthNav = styled.nav`
  display: flex;
  width: 100%;
  height: 132px;
  padding: 48px 0 47px 0;
  background: white;

  @media screen and (max-width: 996px) {
    padding: unset;
    height: max-content;

    img {
      width: 158px;
      height: 33px;
    }
  }
`;

const AuthTitle = styled(Text)`
  line-height: 48px;
  font-size: 32px;
  letter-spacing: -0.03em;
  color: #292d32;
  font-weight: ${(props) => props.theme.fontWeight["bold"]};

  @media screen and (max-width: 996px) {
    margin-top: 24px;
    font-size: 24px;
    line-height: 40px;
  }
`;

const SignupForm = styled.form`
  margin-top: 24px;

  @media screen and (max-width: 996px) {
    margin-top: 40px;
  }
`;

const HeroWrapper = styled.div`
  width: 50%;
  height: 100%;
  background: linear-gradient(212.44deg, #7b40f2 0.86%, #783eed 86.32%);
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  z-index: 3;

  img {
    max-width: 642px;
  }

  ::before {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: url("/images/auth/float-rounded-r.svg") top right no-repeat,
      url("/images/auth/float-rounded-l.svg") bottom left no-repeat;
  }

  @media screen and (max-width: 996px) {
    display: none;
  }
`;

const StyledInputGroup = styled(InputGroup)`
  margin-top: 10px;
`;

const StyledCheckbox = styled(Checkbox)`
  margin-top: 16px;
  width: max-content;

  .custom-checkbox {
    width: 15px;
    height: 15px;
    background: #f9fafe;
    border: 1px solid #e3e6f3;
    margin-right: 16px;
  }

  p {
    letter-spacing: -0.03em;
    font-size: 12px;
    line-height: 18px;
    color: #c1c7d4;
  }
`;

const GetStartedButton = styled(Button)`
  width: 100%;
  height: 57px;
  justify-content: center;
  padding: 18px;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.03em;
  margin-top: 28px;
`;

const AlreadyHaveAccount = styled(Text)`
  font-size: 12px;
  margin-top: 16px;
  line-height: 18px;
  letter-spacing: -0.03em;
  text-align: center;
`;

const Signup = () => {
  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <Container>
        <SignupContainer>
          <AuthNav>
            <img src="/images/infinity-logo.png" alt="logo" />
          </AuthNav>
          <AuthTitle>Get Started With InfinityBot</AuthTitle>
          <SignupForm>
            <InputWrapper>
              <Label className="normal-text">Name</Label>
              <StyledInputGroup>
                <FaUser />
                <Input placeholder="Your Name" />
              </StyledInputGroup>
            </InputWrapper>
            <InputWrapper>
              <Label className="normal-text">Email</Label>
              <StyledInputGroup>
                <FaEnvelope />
                <Input placeholder="Your Email" type="email" />
              </StyledInputGroup>
            </InputWrapper>
            <InputWrapper>
              <Label className="normal-text">Website</Label>
              <StyledInputGroup>
                <FaGlobe />
                <Input placeholder="Your Website" type="url" />
              </StyledInputGroup>
            </InputWrapper>
            <InputWrapper>
              <Label className="normal-text">Password</Label>
              <StyledInputGroup>
                <FaLock />
                <Input placeholder="Create Password" type="password" />
              </StyledInputGroup>
            </InputWrapper>
            <StyledCheckbox>
              I Agree to{" "}
              <a
                href="/term-of-service"
                target="_blank"
                className="color-primary"
              >
                Term of service{" "}
              </a>
              and{" "}
              <a
                href="/privacy-policy"
                target="_blank"
                className="color-primary"
              >
                Privacy Policy
              </a>
            </StyledCheckbox>
            <GetStartedButton>Get Stated</GetStartedButton>
            <AlreadyHaveAccount>
              Already have account?{" "}
              <Link to="/auth/signin" className="color-primary">
                Sign In
              </Link>{" "}
            </AlreadyHaveAccount>
          </SignupForm>
        </SignupContainer>
        <HeroWrapper>
          <img src="/images/auth/signup-hero.svg" alt="signup-hero" />
        </HeroWrapper>
      </Container>
    </>
  );
};

export default Signup;
